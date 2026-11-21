const fs = require('fs');
const path = require('path');

const TURSO_URL = process.env.TURSO_DATABASE_URL || 'https://elymoodle-paradiyoxaa.turso.io';
const TURSO_TOKEN = process.env.TURSO_AUTH_TOKEN || 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3OTUyMTk5MjUsImlkIjoiMDFhMWZiNmYtZTUwMS03YTY0LWIwNWUtNzFkMzVlYjQyNzRiIiwia2lkIjoiUmxkalg5VnJRQ2ZvMW1BTndpaTJnR1NWMk5TVkZyVExETGtaN3VPOFE1QSIsInJpZCI6IjEwNzA1YTlmLTE0YWEtNDU2Mi1iMjRmLTY2MjI2MzhkZDVkZCJ9.0X_0j09bwrllBOLhmezKe6ySHmHzEfJTBwDAPMjvI6MCTjEh-cmiJ3dUYHYx0pP2zmjdnyZmrYWZtqU6fGDUBQ';
const LOCAL_DB_PATH = path.join(__dirname, 'database.json');

async function tursoQuery(sql, args = []) {
  try {
    const res = await fetch(TURSO_URL + '/v2/pipeline', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + TURSO_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        requests: [
          {
            type: 'execute',
            stmt: {
              sql,
              args: args.map(a => ({
                type: typeof a === 'number' ? 'integer' : 'text',
                value: String(a)
              }))
            }
          },
          { type: 'close' }
        ]
      })
    });
    if (!res.ok) {
      console.error('[Turso HTTP Error]', res.status, res.statusText);
      return null;
    }
    const data = await res.json();
    return data.results?.[0]?.response?.result || null;
  } catch (err) {
    console.error('[Turso Query Error]', err.message);
    return null;
  }
}

async function getCloudState() {
  const result = await tursoQuery('SELECT data FROM moodle_store WHERE id = ?;', ['main']);
  if (result && result.rows && result.rows.length > 0) {
    const raw = result.rows[0][0]?.value;
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {}
    }
  }
  // Fallback to local database.json
  try {
    if (fs.existsSync(LOCAL_DB_PATH)) {
      return JSON.parse(fs.readFileSync(LOCAL_DB_PATH, 'utf8'));
    }
  } catch (e) {}
  return null;
}

async function saveCloudState(state) {
  // Save to local file if writable
  try {
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(state, null, 2), 'utf8');
  } catch (e) {}

  // Save to Turso
  const jsonStr = JSON.stringify(state);
  return await tursoQuery(
    'INSERT INTO moodle_store (id, data, updated_at) VALUES (?, ?, ?) ON CONFLICT(id) DO UPDATE SET data=excluded.data, updated_at=excluded.updated_at;',
    ['main', jsonStr, new Date().toISOString()]
  );
}

module.exports = {
  getCloudState,
  saveCloudState,
  tursoQuery
};
