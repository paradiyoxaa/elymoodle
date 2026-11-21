const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

// Prevent crashes on unhandled client disconnections
process.on('uncaughtException', (err) => {
  console.error('[Server UncaughtException]', err.message || err);
});
process.on('unhandledRejection', (reason) => {
  console.error('[Server UnhandledRejection]', reason);
});

const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'data', 'database.json');
const PUBLIC_DIR = path.join(__dirname, 'public');

// MIME types dictionary
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav'
};

const { getCloudState, saveCloudState } = require('./data/turso');

// In-memory store cached from database.json & Turso Cloud
let db = null;

function loadDatabase() {
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    db = JSON.parse(raw);
    console.log('[Server] Local database loaded.');
  } catch (err) {
    console.error('[Server] Error loading local database:', err);
  }

  // Asynchronously sync latest from Turso Cloud
  getCloudState().then(cloud => {
    if (cloud) {
      db = cloud;
      console.log('[Server] Synced with Turso Cloud database.');
    }
  }).catch(() => {});
}

function saveDatabase() {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf8');
    console.log('[Server] Database saved locally.');
  } catch (err) {
    console.error('[Server] Error saving local database:', err);
  }

  // Push to Turso Cloud
  saveCloudState(db).catch(err => {
    console.error('[Server] Turso cloud sync error:', err.message);
  });
}

loadDatabase();

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 5 * 1024 * 1024) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  // --- API ROUTING ---
  if (pathname.startsWith('/api/')) {
    try {
      // 1. Login
      if (pathname === '/api/login' && req.method === 'POST') {
        const { username, password } = await parseBody(req);
        if (!username || !password) {
          return sendJSON(res, 400, { error: 'Please enter both username and password.' });
        }

        const cleanUser = String(username).trim().toLowerCase();
        const found = db.users.find(u => u.username.toLowerCase() === cleanUser && u.password === password);

        if (!found) {
          return sendJSON(res, 401, { error: 'Invalid login credentials. Please check your username and password.' });
        }

        const safeUser = {
          id: found.id,
          username: found.username,
          name: found.name,
          role: found.role,
          avatar: found.avatar,
          email: found.email,
          badges: found.badges || []
        };
        return sendJSON(res, 200, { success: true, user: safeUser });
      }

      // 2. Get State
      if (pathname === '/api/state' && req.method === 'GET') {
        loadDatabase();
        const safeUsers = db.users.map(u => ({
          id: u.id,
          username: u.username,
          name: u.name,
          role: u.role,
          avatar: u.avatar,
          email: u.email,
          badges: u.badges || []
        }));
        return sendJSON(res, 200, {
          settings: db.settings,
          courses: db.courses,
          announcements: db.announcements,
          messages: db.messages,
          users: safeUsers
        });
      }

      // 3. Submit Assignment
      if (pathname === '/api/assignment/submit' && req.method === 'POST') {
        const { courseId, activityId, text } = await parseBody(req);
        const course = db.courses.find(c => c.id === courseId);
        if (!course) return sendJSON(res, 404, { error: 'Course not found.' });

        let activity = null;
        for (const sec of course.sections) {
          const act = sec.activities.find(a => a.id === activityId);
          if (act) {
            activity = act;
            break;
          }
        }
        if (!activity) return sendJSON(res, 404, { error: 'Activity not found.' });

        activity.submission = {
          submitted: true,
          text: text,
          submittedDate: new Date().toISOString().split('T')[0],
          grade: activity.submission?.grade || null,
          feedback: activity.submission?.feedback || null,
          feedbackDate: activity.submission?.feedbackDate || null,
          gradedBy: activity.submission?.gradedBy || null
        };
        activity.completed = true;

        saveDatabase();
        return sendJSON(res, 200, { success: true, activity });
      }

      // 4. Grade Assignment (Admin)
      if (pathname === '/api/assignment/grade' && req.method === 'POST') {
        const { courseId, activityId, grade, feedback, gradedBy } = await parseBody(req);
        const course = db.courses.find(c => c.id === courseId);
        if (!course) return sendJSON(res, 404, { error: 'Course not found.' });

        let activity = null;
        for (const sec of course.sections) {
          const act = sec.activities.find(a => a.id === activityId);
          if (act) {
            activity = act;
            break;
          }
        }
        if (!activity) return sendJSON(res, 404, { error: 'Activity not found.' });

        if (!activity.submission) {
          activity.submission = { submitted: false, text: '' };
        }
        activity.submission.grade = grade;
        activity.submission.feedback = feedback;
        activity.submission.feedbackDate = new Date().toISOString().split('T')[0];
        activity.submission.gradedBy = gradedBy || 'Admin';

        saveDatabase();
        return sendJSON(res, 200, { success: true, activity });
      }

      // 5. Toggle Activity Complete
      if (pathname === '/api/activity/toggle' && req.method === 'POST') {
        const { courseId, activityId, completed } = await parseBody(req);
        const course = db.courses.find(c => c.id === courseId);
        if (course) {
          for (const sec of course.sections) {
            const act = sec.activities.find(a => a.id === activityId);
            if (act) {
              act.completed = completed !== undefined ? completed : !act.completed;
              break;
            }
          }
          saveDatabase();
        }
        return sendJSON(res, 200, { success: true });
      }

      // 5b. Submit Quiz Result (Re-attemptable)
      if (pathname === '/api/quiz/submit' && req.method === 'POST') {
        const { courseId, activityId, quizResult } = await parseBody(req);
        const course = db.courses.find(c => c.id === courseId);
        if (!course) return sendJSON(res, 404, { error: 'Course not found.' });

        let activity = null;
        for (const sec of course.sections) {
          const act = sec.activities.find(a => a.id === activityId);
          if (act) {
            activity = act;
            break;
          }
        }
        if (!activity) return sendJSON(res, 404, { error: 'Activity not found.' });

        activity.quizResult = quizResult;
        activity.completed = (quizResult !== null);
        saveDatabase();
        return sendJSON(res, 200, { success: true, activity });
      }

      // 6. Create Course (Admin)
      if (pathname === '/api/course/create' && req.method === 'POST') {
        const newCourse = await parseBody(req);
        if (!newCourse.title) return sendJSON(res, 400, { error: 'Course title required.' });
        newCourse.id = 'course_' + Date.now();
        newCourse.progress = 0;
        newCourse.sections = newCourse.sections || [];
        db.courses.push(newCourse);
        saveDatabase();
        return sendJSON(res, 200, { success: true, course: newCourse });
      }

      // 7. Add Activity to Section (Admin)
      if (pathname === '/api/activity/create' && req.method === 'POST') {
        const { courseId, sectionId, activity } = await parseBody(req);
        const course = db.courses.find(c => c.id === courseId);
        if (!course) return sendJSON(res, 404, { error: 'Course not found.' });
        const section = course.sections.find(s => s.id === sectionId);
        if (!section) return sendJSON(res, 404, { error: 'Section not found.' });

        activity.id = 'act_' + Date.now();
        activity.completed = false;
        section.activities.push(activity);
        saveDatabase();
        return sendJSON(res, 200, { success: true, activity });
      }

      // 8. Update Birthday Letter & Settings (Admin)
      if (pathname === '/api/settings/update' && req.method === 'POST') {
        const updates = await parseBody(req);
        db.settings = { ...db.settings, ...updates };
        saveDatabase();
        return sendJSON(res, 200, { success: true, settings: db.settings });
      }

      // 9. Send Direct Message
      if (pathname === '/api/messages/send' && req.method === 'POST') {
        const { sender, recipient, text } = await parseBody(req);
        if (!text) return sendJSON(res, 400, { error: 'Message cannot be empty.' });
        const newMsg = {
          id: 'msg_' + Date.now(),
          sender: sender || 'Elizabeth',
          recipient: recipient || 'Admin',
          text,
          timestamp: new Date().toISOString(),
          read: false
        };
        db.messages.push(newMsg);
        saveDatabase();
        return sendJSON(res, 200, { success: true, message: newMsg });
      }

      // 10. Create Announcement (Admin)
      if (pathname === '/api/announcements/create' && req.method === 'POST') {
        const { title, content, author } = await parseBody(req);
        const newAnn = {
          id: 'ann_' + Date.now(),
          title,
          content,
          author: author || 'Admin',
          date: new Date().toISOString().split('T')[0]
        };
        db.announcements.unshift(newAnn);
        saveDatabase();
        return sendJSON(res, 200, { success: true, announcement: newAnn });
      }

      // 404 for unknown API
      return sendJSON(res, 404, { error: 'API endpoint not found.' });
    } catch (err) {
      console.error('[Server API Error]', err);
      return sendJSON(res, 500, { error: 'Internal Server Error' });
    }
  }

  // --- STATIC FILE SERVING ---
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, safePath);

  // Security check: ensure within PUBLIC_DIR (case-insensitive for Windows)
  if (!filePath.toLowerCase().startsWith(PUBLIC_DIR.toLowerCase())) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('Access Denied');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If file not found, serve index.html (SPA fallback)
      const fallback = path.join(PUBLIC_DIR, 'index.html');
      fs.readFile(fallback, (err2, data) => {
        if (err2) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          return res.end('404 Not Found');
        }
        res.writeHead(200, { 
          'Content-Type': 'text/html; charset=UTF-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(data);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const totalSize = stats.size;
    const range = req.headers.range;

    const baseHeaders = {
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': 'Range, Accept-Ranges, Content-Type',
      'Access-Control-Expose-Headers': 'Content-Range, Content-Length, Accept-Ranges',
      'Content-Disposition': `inline; filename="${path.basename(filePath)}"`
    };

    // Helper: RFC 7233 Range parser supporting standard, open-ended, and suffix ranges
    function parseRange(rangeHeader, size) {
      if (!rangeHeader || !rangeHeader.startsWith('bytes=')) return null;
      const rangeSpec = rangeHeader.substring(6).trim();
      const firstRange = rangeSpec.split(',')[0].trim();
      const dash = firstRange.indexOf('-');
      if (dash === -1) return null;

      const startStr = firstRange.substring(0, dash).trim();
      const endStr = firstRange.substring(dash + 1).trim();

      let start, end;
      if (startStr === '') {
        // Suffix range: bytes=-500 (e.g. PDF xref trailer table lookup)
        const suffix = parseInt(endStr, 10);
        if (isNaN(suffix) || suffix <= 0) return null;
        start = Math.max(0, size - suffix);
        end = size - 1;
      } else {
        start = parseInt(startStr, 10);
        if (isNaN(start)) return null;
        if (endStr === '') {
          end = size - 1;
        } else {
          end = parseInt(endStr, 10);
          if (isNaN(end)) return null;
        }
      }

      if (start >= size || start < 0 || end < start) {
        return { unsatisfiable: true };
      }

      end = Math.min(end, size - 1);
      const chunkSize = (end - start) + 1;
      return { start, end, chunkSize };
    }

    // Handle HEAD request
    if (req.method === 'HEAD') {
      res.writeHead(200, {
        ...baseHeaders,
        'Content-Length': totalSize
      });
      return res.end();
    }

    const rangeInfo = parseRange(range, totalSize);

    if (rangeInfo && rangeInfo.unsatisfiable) {
      res.writeHead(416, {
        ...baseHeaders,
        'Content-Range': `bytes */${totalSize}`
      });
      return res.end();
    }

    if (rangeInfo) {
      res.writeHead(206, {
        ...baseHeaders,
        'Content-Range': `bytes ${rangeInfo.start}-${rangeInfo.end}/${totalSize}`,
        'Content-Length': rangeInfo.chunkSize
      });

      const stream = fs.createReadStream(filePath, { start: rangeInfo.start, end: rangeInfo.end });
      stream.on('error', (err) => {
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Stream Error');
        } else {
          res.destroy();
        }
      });
      req.on('close', () => {
        stream.destroy();
      });
      stream.pipe(res);
    } else {
      const headers = {
        ...baseHeaders,
        'Content-Length': totalSize
      };
      if (ext === '.html' || ext === '.js' || ext === '.css' || ext === '.json') {
        headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      } else {
        headers['Cache-Control'] = 'public, max-age=86400';
      }
      res.writeHead(200, headers);

      const stream = fs.createReadStream(filePath);
      stream.on('error', (err) => {
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Stream Error');
        } else {
          res.destroy();
        }
      });
      req.on('close', () => {
        stream.destroy();
      });
      stream.pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Accounts:`);
  console.log(`  Elizabeth: elyzabbyeth`);
  console.log(`  Admin:     Am@ngusfan123`);
});
