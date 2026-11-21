const fs = require('fs');
const path = require('path');

const ch1_5 = require('./quizzes/ch1_to_ch5.js');
const ch6_10 = require('./quizzes/ch6_to_ch10.js');
const ch11_15 = require('./quizzes/ch11_to_ch15.js');

const allQuizzes = {
  ...ch1_5,
  ...ch6_10,
  ...ch11_15
};

console.log('Total Quiz banks loaded:', Object.keys(allQuizzes).length);

// Validation
let totalQuestions = 0;
for (const [quizId, questions] of Object.entries(allQuizzes)) {
  if (!Array.isArray(questions) || questions.length < 10 || questions.length > 30) {
    throw new Error(`Quiz ${quizId} has ${questions ? questions.length : 0} questions, which is outside the 10-30 range!`);
  }
  questions.forEach((q, idx) => {
    if (!q.question || typeof q.question !== 'string') {
      throw new Error(`Quiz ${quizId} question #${idx + 1} has missing or invalid question text.`);
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      throw new Error(`Quiz ${quizId} question #${idx + 1} does not have exactly 4 options.`);
    }
    if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) {
      throw new Error(`Quiz ${quizId} question #${idx + 1} has invalid correct index: ${q.correct}`);
    }
    if (!q.explanation || typeof q.explanation !== 'string') {
      throw new Error(`Quiz ${quizId} question #${idx + 1} has missing or invalid explanation.`);
    }
  });
  totalQuestions += questions.length;
}

console.log(`Validation passed! All 15 quizzes conform to 10-30 questions range. Total questions: ${totalQuestions}`);

// Update data/database.json
const dbPath = path.join(__dirname, '..', 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const psychCourse = db.courses.find(c => c.code === 'PSYCH-151' || c.id === 'course_psych151');
if (!psychCourse) {
  throw new Error('PSYCH-151 course not found in database.json!');
}

console.log('\nApplying extended quizzes to database.json:');
let updatedCount = 0;
psychCourse.sections.forEach(sec => {
  sec.activities.forEach(act => {
    if (act.type === 'quiz' && allQuizzes[act.id]) {
      act.questions = allQuizzes[act.id];
      updatedCount++;
      console.log(`  ✓ ${act.id}: "${act.title}" -> ${act.questions.length} questions`);
    }
  });
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`\nSuccessfully updated ${updatedCount} checkpoint quizzes in ${dbPath}`);

// Update public/js/store.js default fallback data
const storeJsPath = path.join(__dirname, '..', 'public', 'js', 'store.js');
let storeJs = fs.readFileSync(storeJsPath, 'utf8');

// We can replace the store.js default courses data with the updated psychCourse
// First let's check if store.js has psychCourse
const storeCourseRegex = /courses:\s*\[\s*\{\s*"id":\s*"course_psych151"[\s\S]*?\}\s*\]\s*,\s*announcements:/;
if (storeCourseRegex.test(storeJs)) {
  const replacement = `courses: [\n${JSON.stringify(psychCourse, null, 4)}\n      ],\n      announcements:`;
  storeJs = storeJs.replace(storeCourseRegex, replacement);
  fs.writeFileSync(storeJsPath, storeJs, 'utf8');
  console.log(`Successfully synced extended quizzes into public/js/store.js default fallback.`);
} else {
  console.log(`Note: store.js regex did not match, leaving store.js as-is (it loads from /api/state).`);
}

console.log('\n=== SUMMARY OF EXTENDED CHAPTER CHECKPOINTS ===');
psychCourse.sections.forEach((sec, idx) => {
  const quiz = sec.activities.find(a => a.type === 'quiz');
  if (quiz) {
    console.log(`Section ${idx} (${sec.title}): ${quiz.questions.length} Questions`);
  }
});
