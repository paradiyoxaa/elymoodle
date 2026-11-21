const fs = require('fs');
const path = require('path');

const ch1_9 = require('./botany/ch1_to_ch9.js');
const ch10_17 = require('./botany/ch10_to_ch17.js');
const ch18_27 = require('./botany/ch18_to_ch27.js');

const allBotanySections = [
  ...ch1_9,
  ...ch10_17,
  ...ch18_27
];

console.log('Total Chapter Sections loaded:', allBotanySections.length);
if (allBotanySections.length !== 27) {
  throw new Error(`Expected 27 chapters, but found ${allBotanySections.length}`);
}

// Section 0: Course Overview & Full Textbook
const section0 = {
  id: "sec_bot_0",
  title: "Course Overview & Full Textbook",
  description: "Access the complete 600+ page textbook and course syllabus.",
  activities: [
    {
      id: "act_natsci_ebook",
      type: "ebook",
      title: "📖 Full Course Textbook: Introductory Botany: Plants, People, and the Environment (PDF)",
      completed: true,
      content: "Access the complete 27-chapter eBook for NATSCI131: Introductory Botany: Plants, People, and the Environment (Linda R. Berg, Thomson Brooks/Cole, 85.2 MB).",
      fileUrl: "/ebooks/introductory-botany.pdf"
    },
    {
      id: "act_natsci_syllabus",
      type: "page",
      title: "Course Syllabus & Information",
      completed: true,
      content: `Welcome to NATSCI131: Introductory Botany: Plants, People, and the Environment!

Instructor: Admin
Student: Elizabeth
Textbook: Introductory Botany: Plants, People, and the Environment (Linda R. Berg, 2nd Edition)

Course Structure & Major Units:
• Part 1: The Plant Cell (Chapters 1–4)
• Part 2: Plant Structures and Life Processes (Chapters 5–11)
• Part 3: The Continuity of Plant Life (Chapters 12–17)
• Part 4: Diversity of Organisms & The Plant Kingdom (Chapters 18–25)
• Part 5: Plant Ecology and Global Environment (Chapters 26–27)

Assessments:
• 27 Chapter Checkpoint Quizzes (10–30 questions per chapter scaled by information density)
• Instant scoring with detailed explanations
• Quizzes can be re-attempted anytime (🔄 Re-attempt Quiz) for 100% mastery
• Embedded Full 85.2 MB PDF eBook at the top of the course`
    }
  ]
};

// Assemble Course Object
const natsciCourse = {
  id: "course_natsci131",
  code: "NATSCI131",
  title: "NATSCI131: Introductory Botany: Plants, People, and the Environment",
  category: "Biological Sciences",
  description: "A comprehensive scientific study of plant biology, cellular architecture, bioenergetics, organ morphology, genetics, organismal diversity, and environmental ecology based on Linda R. Berg's textbook. Features all 27 chapters across 5 major units and re-attemptable chapter checkpoint quizzes.",
  image: "🌿",
  progress: 5,
  sections: [
    section0,
    ...allBotanySections
  ]
};

// Validate all questions
let totalQuestions = 0;
natsciCourse.sections.forEach((sec, sIdx) => {
  sec.activities.forEach(act => {
    if (act.type === 'quiz') {
      const qList = act.questions;
      if (!Array.isArray(qList) || qList.length < 10 || qList.length > 30) {
        throw new Error(`Section ${sec.title} quiz has ${qList ? qList.length : 0} questions, not between 10-30!`);
      }
      qList.forEach((q, qIdx) => {
        if (!q.question) throw new Error(`Section ${sec.title} Q${qIdx+1} missing question`);
        if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`Section ${sec.title} Q${qIdx+1} must have 4 options`);
        if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) throw new Error(`Section ${sec.title} Q${qIdx+1} invalid correct index`);
        if (!q.explanation) throw new Error(`Section ${sec.title} Q${qIdx+1} missing explanation`);
      });
      totalQuestions += qList.length;
    }
  });
});

console.log(`Validation successful! All 27 chapter quizzes verified. Total questions: ${totalQuestions}`);

// Update data/database.json
const dbPath = path.join(__dirname, '..', 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// If course already exists, replace it, else push
const existingIdx = db.courses.findIndex(c => c.id === 'course_natsci131' || c.code === 'NATSCI131');
if (existingIdx !== -1) {
  db.courses[existingIdx] = natsciCourse;
  console.log('Replaced existing NATSCI131 course in database.json');
} else {
  db.courses.push(natsciCourse);
  console.log('Added NATSCI131 course to database.json');
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Updated database.json successfully. Total courses in DB: ${db.courses.length}`);

// Update public/js/store.js default fallback data
const storeJsPath = path.join(__dirname, '..', 'public', 'js', 'store.js');
let storeJs = fs.readFileSync(storeJsPath, 'utf8');

// Replace courses: [ ... ] in store.js
const coursesArrayRegex = /courses:\s*\[[\s\S]*?\]\s*,\s*announcements:/;
if (coursesArrayRegex.test(storeJs)) {
  const replacement = `courses: [\n${db.courses.map(c => JSON.stringify(c, null, 4)).join(',\n')}\n      ],\n      announcements:`;
  storeJs = storeJs.replace(coursesArrayRegex, replacement);
  fs.writeFileSync(storeJsPath, storeJs, 'utf8');
  console.log('Successfully synced both courses (PSYCH-151 and NATSCI131) into public/js/store.js default fallback.');
} else {
  console.log('Notice: Could not regex-replace store.js courses array, will load from /api/state.');
}

console.log('\n=== SUMMARY OF NATSCI131 SECTIONS & QUESTION COUNTS ===');
natsciCourse.sections.forEach((sec, idx) => {
  const quiz = sec.activities.find(a => a.type === 'quiz');
  if (quiz) {
    console.log(`Chapter ${idx}: ${sec.title} -> ${quiz.questions.length} questions`);
  } else {
    console.log(`Section ${idx}: ${sec.title} -> (Overview / eBook / Syllabus)`);
  }
});
console.log(`\nGrand Total: 28 Sections (Section 0 + 27 Chapters), ${natsciCourse.sections.reduce((acc, s) => acc + s.activities.length, 0)} Activities, ${totalQuestions} Checkpoint Questions.`);
