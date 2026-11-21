const { getCloudState, saveCloudState } = require('../data/turso');

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
    const db = await getCloudState();
    if (!db) {
      return sendJSON(res, 500, { error: 'Database unavailable' });
    }

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
      const course = db.courses.find(c => c.id === courseId);
      if (course) {
        for (const sec of course.sections) {
          const act = sec.activities.find(a => a.id === activityId);
          if (act) {
            act.submission = {
              submitted: true,
              text,
              submittedDate: new Date().toISOString().split('T')[0]
            };
            act.completed = true;
            break;
          }
        }
        await saveCloudState(db);
      }
      return sendJSON(res, 200, { success: true });
    }

    // 4. Grade Assignment
    if (pathname === '/api/assignment/grade' && req.method === 'POST') {
      const { courseId, activityId, grade, feedback, gradedBy } = await parseBody(req);
      const course = db.courses.find(c => c.id === courseId);
      if (course) {
        for (const sec of course.sections) {
          const act = sec.activities.find(a => a.id === activityId);
          if (act && act.submission) {
            act.submission.grade = grade;
            act.submission.feedback = feedback;
            act.submission.gradedBy = gradedBy || 'Admin';
            act.submission.feedbackDate = new Date().toISOString().split('T')[0];
            break;
          }
        }
        await saveCloudState(db);
      }
      return sendJSON(res, 200, { success: true });
    }

    // 5. Toggle Activity Completed
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
        await saveCloudState(db);
      }
      return sendJSON(res, 200, { success: true });
    }

    // 6. Submit Quiz
    if (pathname === '/api/quiz/submit' && req.method === 'POST') {
      const { courseId, activityId, quizResult } = await parseBody(req);
      const course = db.courses.find(c => c.id === courseId);
      if (course) {
        for (const sec of course.sections) {
          const act = sec.activities.find(a => a.id === activityId);
          if (act) {
            act.quizResult = quizResult;
            act.completed = quizResult !== null;
            break;
          }
        }
        await saveCloudState(db);
      }
      return sendJSON(res, 200, { success: true, quizResult });
    }

    // 7. Update Settings
    if (pathname === '/api/settings/update' && req.method === 'POST') {
      const newSettings = await parseBody(req);
      db.settings = { ...db.settings, ...newSettings };
      await saveCloudState(db);
      return sendJSON(res, 200, { success: true, settings: db.settings });
    }

    // 8. Send Message
    if (pathname === '/api/messages/send' && req.method === 'POST') {
      const msg = await parseBody(req);
      const newMsg = {
        id: 'msg_' + Date.now(),
        sender: msg.sender || 'Elizabeth',
        recipient: msg.recipient || 'Admin',
        text: msg.text,
        timestamp: new Date().toISOString(),
        read: false
      };
      db.messages = db.messages || [];
      db.messages.push(newMsg);
      await saveCloudState(db);
      return sendJSON(res, 200, { success: true, message: newMsg });
    }

    // 9. Create Activity
    if (pathname === '/api/activity/create' && req.method === 'POST') {
      const { courseId, sectionId, activity } = await parseBody(req);
      const course = db.courses.find(c => c.id === courseId);
      if (course) {
        const sec = course.sections.find(s => s.id === sectionId);
        if (sec) {
          activity.id = 'act_' + Date.now();
          activity.completed = false;
          sec.activities.push(activity);
          await saveCloudState(db);
          return sendJSON(res, 200, { success: true, activity });
        }
      }
      return sendJSON(res, 404, { error: 'Course or section not found' });
    }

    // 10. Create Course
    if (pathname === '/api/course/create' && req.method === 'POST') {
      const course = await parseBody(req);
      course.id = 'course_' + Date.now();
      course.progress = 0;
      course.sections = course.sections || [];
      db.courses.push(course);
      await saveCloudState(db);
      return sendJSON(res, 200, { success: true, course });
    }

    return sendJSON(res, 404, { error: 'API endpoint not found.' });
  } catch (err) {
    console.error('[Turso API Error]', err);
    return sendJSON(res, 500, { error: 'Internal Server Error' });
  }
};
