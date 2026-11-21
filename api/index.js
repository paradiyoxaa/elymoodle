const path = require('path');
const fs = require('fs');

// Load database (cached in serverless memory)
let db = null;
try {
  const dbPath = path.join(process.cwd(), 'data', 'database.json');
  if (fs.existsSync(dbPath)) {
    db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  } else {
    db = require('../data/database.json');
  }
} catch (e) {
  try {
    db = require('../data/database.json');
  } catch (err) {
    db = { users: [], courses: [], settings: {}, announcements: [], messages: [] };
  }
}

function sendJSON(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve) => {
    if (req.body && typeof req.body === 'object') {
      return resolve(req.body);
    }
    if (req.body && typeof req.body === 'string') {
      try {
        return resolve(JSON.parse(req.body));
      } catch (e) {
        return resolve({});
      }
    }
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 5 * 1024 * 1024) req.destroy();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
}

module.exports = async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;

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
    if ((pathname === '/api/state' || pathname.startsWith('/api/state')) && req.method === 'GET') {
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
      return sendJSON(res, 200, {
        success: true,
        activity: {
          id: activityId,
          completed: true,
          submission: {
            submitted: true,
            text,
            submittedDate: new Date().toISOString().split('T')[0]
          }
        }
      });
    }

    // 4. Grade Assignment
    if (pathname === '/api/assignment/grade' && req.method === 'POST') {
      return sendJSON(res, 200, { success: true });
    }

    // 5. Submit Quiz
    if (pathname === '/api/quiz/submit' && req.method === 'POST') {
      const { courseId, activityId, quizResult } = await parseBody(req);
      return sendJSON(res, 200, { success: true, quizResult });
    }

    // 6. Update Settings
    if (pathname === '/api/settings/update' && req.method === 'POST') {
      const newSettings = await parseBody(req);
      return sendJSON(res, 200, { success: true, settings: newSettings });
    }

    // 7. Send Message
    if (pathname === '/api/messages/send' && req.method === 'POST') {
      const msg = await parseBody(req);
      return sendJSON(res, 200, { success: true, message: msg });
    }

    // 8. Create Activity
    if (pathname === '/api/activity/create' && req.method === 'POST') {
      const data = await parseBody(req);
      return sendJSON(res, 200, { success: true, activity: data.activity });
    }

    // 9. Create Course
    if (pathname === '/api/course/create' && req.method === 'POST') {
      const course = await parseBody(req);
      return sendJSON(res, 200, { success: true, course });
    }

    return sendJSON(res, 404, { error: 'API endpoint not found.' });
  } catch (err) {
    console.error('[Vercel API Error]', err);
    return sendJSON(res, 500, { error: 'Internal Server Error' });
  }
};
