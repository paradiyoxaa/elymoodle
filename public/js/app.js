// Moodle LMS Engine
document.addEventListener('DOMContentLoaded', async () => {
  await window.store.init();

  let currentCourse = null;
  let activeTab = 'home';
  let isEditMode = false;

  // DOM Elements
  const navItemHome = document.getElementById('navItemHome');
  const navItemDashboard = document.getElementById('navItemDashboard');
  const navItemMyCourses = document.getElementById('navItemMyCourses');
  const navAdminTab = document.getElementById('navAdminTab');

  const editModeWrap = document.getElementById('editModeWrap');
  const editModeToggle = document.getElementById('editModeToggle');

  const btnNavLogin = document.getElementById('btnNavLogin');
  const navUserBtn = document.getElementById('navUserBtn');
  const userDropdown = document.getElementById('userDropdown');
  const navAvatar = document.getElementById('navAvatar');
  const navUserName = document.getElementById('navUserName');
  const navUserRole = document.getElementById('navUserRole');
  const dropdownUserName = document.getElementById('dropdownUserName');

  const msgDrawer = document.getElementById('msgDrawer');
  const btnToggleMsg = document.getElementById('btnToggleMsg');
  const btnCloseMsg = document.getElementById('btnCloseMsg');
  const drawerMsgList = document.getElementById('drawerMsgList');
  const inputChat = document.getElementById('inputChat');
  const btnSendChat = document.getElementById('btnSendChat');

  const loginModal = document.getElementById('loginModal');
  const activityModal = document.getElementById('activityModal');
  const addActivityModal = document.getElementById('addActivityModal');

  // --- MARKDOWN & TEXT FORMATTING ENGINE ---
  function parseInline(text) {
    if (!text) return '';
    let res = String(text)
      .replace(/`([^`]+)`/g, '<code class="moodle-code">$1</code>')
      .replace(/\$([^\$\n]+?)\$/g, (m, formula) => {
        let clean = formula
          .replace(/\\rightarrow/g, ' &rarr; ')
          .replace(/\\Delta/g, '&Delta;')
          .replace(/\\Psi/g, '&Psi;')
          .replace(/\\alpha/g, '&alpha;')
          .replace(/\\beta/g, '&beta;')
          .replace(/\\gamma/g, '&gamma;')
          .replace(/\\lambda/g, '&lambda;')
          .replace(/\\mu/g, '&mu;')
          .replace(/\\pi/g, '&pi;')
          .replace(/\\text\{([^}]+)\}/g, '$1')
          .replace(/_\{([^}]+)\}/g, '<sub>$1</sub>')
          .replace(/_([a-zA-Z0-9]+)/g, '<sub>$1</sub>')
          .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
          .replace(/\^([a-zA-Z0-9\+\-]+)/g, '<sup>$1</sup>');
        return `<span class="moodle-math-inline">${clean}</span>`;
      });

    // 1. Triple asterisks: ***bold italic***
    res = res.replace(/\*\*\*([^*]+?)\*\*\*/g, '<strong><em>$1</em></strong>');

    // 2. Bold with possible nested italics: **...**
    res = res.replace(/\*\*(.+?)\*\*/g, (match, inner) => {
      const formattedInner = inner.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em>$1</em>');
      return `<strong>${formattedInner}</strong>`;
    });

    // 3. Standalone italics: *...*
    res = res.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em>$1</em>');

    return res;
  }

  function renderMarkdown(md) {
    if (!md) return '';

    let text = String(md);

    // 1. Math block equations: $$...$$
    text = text.replace(/\$\$([\s\S]*?)\$\$/g, (m, formula) => {
      let clean = formula
        .replace(/\\rightarrow/g, ' &rarr; ')
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/_\{([^}]+)\}/g, '<sub>$1</sub>')
        .replace(/_([a-zA-Z0-9]+)/g, '<sub>$1</sub>')
        .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
        .replace(/\^([a-zA-Z0-9\+\-]+)/g, '<sup>$1</sup>')
        .replace(/\\sim/g, '~')
        .replace(/\\times/g, '&times;');
      return `<div class="moodle-math-block">${clean}</div>`;
    });

    const lines = text.split('\n');
    const result = [];
    let inUl = false;
    let inSubUl = false;
    let inOl = false;

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      // Horizontal Rule (--- or ***)
      if (/^(\*{3,}|-{3,}|_{3,})\s*$/.test(line.trim())) {
        if (inSubUl) { result.push('</ul></li>'); inSubUl = false; }
        if (inUl) { result.push('</ul>'); inUl = false; }
        if (inOl) { result.push('</ol>'); inOl = false; }
        result.push('<hr class="moodle-page-hr">');
        continue;
      }

      // Headings
      if (/^####\s+(.*)/.test(line)) {
        if (inSubUl) { result.push('</ul></li>'); inSubUl = false; }
        if (inUl) { result.push('</ul>'); inUl = false; }
        if (inOl) { result.push('</ol>'); inOl = false; }
        result.push(`<h4>${parseInline(line.replace(/^####\s+/, ''))}</h4>`);
        continue;
      }
      if (/^###\s+(.*)/.test(line)) {
        if (inSubUl) { result.push('</ul></li>'); inSubUl = false; }
        if (inUl) { result.push('</ul>'); inUl = false; }
        if (inOl) { result.push('</ol>'); inOl = false; }
        result.push(`<h3>${parseInline(line.replace(/^###\s+/, ''))}</h3>`);
        continue;
      }
      if (/^##\s+(.*)/.test(line)) {
        if (inSubUl) { result.push('</ul></li>'); inSubUl = false; }
        if (inUl) { result.push('</ul>'); inUl = false; }
        if (inOl) { result.push('</ol>'); inOl = false; }
        result.push(`<h2>${parseInline(line.replace(/^##\s+/, ''))}</h2>`);
        continue;
      }
      if (/^#\s+(.*)/.test(line)) {
        if (inSubUl) { result.push('</ul></li>'); inSubUl = false; }
        if (inUl) { result.push('</ul>'); inUl = false; }
        if (inOl) { result.push('</ol>'); inOl = false; }
        result.push(`<h1>${parseInline(line.replace(/^#\s+/, ''))}</h1>`);
        continue;
      }

      // Nested Unordered List (2+ spaces or tabs before - or *)
      if (/^(\s{2,}|\t)[-*]\s+(.*)/.test(line)) {
        if (!inUl) {
          result.push('<ul class="moodle-page-list">');
          inUl = true;
        }
        if (!inSubUl) {
          result.push('<ul class="moodle-page-sublist">');
          inSubUl = true;
        }
        const itemText = line.replace(/^(\s{2,}|\t)[-*]\s+/, '');
        result.push(`<li>${parseInline(itemText)}</li>`);
        continue;
      }

      // Top-level Unordered List (- or *)
      if (/^[-*]\s+(.*)/.test(line)) {
        if (inSubUl) { result.push('</ul>'); inSubUl = false; }
        if (inOl) { result.push('</ol>'); inOl = false; }
        if (!inUl) {
          result.push('<ul class="moodle-page-list">');
          inUl = true;
        }
        const itemText = line.replace(/^[-*]\s+/, '');
        result.push(`<li>${parseInline(itemText)}</li>`);
        continue;
      }

      // Ordered List (1. item)
      if (/^\d+\.\s+(.*)/.test(line)) {
        if (inSubUl) { result.push('</ul>'); inSubUl = false; }
        if (inUl) { result.push('</ul>'); inUl = false; }
        if (!inOl) {
          result.push('<ol class="moodle-page-olist">');
          inOl = true;
        }
        const itemText = line.replace(/^\d+\.\s+/, '');
        result.push(`<li>${parseInline(itemText)}</li>`);
        continue;
      }

      // Empty blank lines close active lists
      if (line.trim() === '') {
        if (inSubUl) { result.push('</ul>'); inSubUl = false; }
        if (inUl) { result.push('</ul>'); inUl = false; }
        if (inOl) { result.push('</ol>'); inOl = false; }
        continue;
      }

      // Regular paragraph
      if (inSubUl) { result.push('</ul>'); inSubUl = false; }
      if (inUl) { result.push('</ul>'); inUl = false; }
      if (inOl) { result.push('</ol>'); inOl = false; }
      result.push(`<p>${parseInline(line)}</p>`);
    }

    if (inSubUl) result.push('</ul>');
    if (inUl) result.push('</ul>');
    if (inOl) result.push('</ol>');

    return result.join('\n');
  }

  renderFrontpageBanner();
  updateUserNav();
  switchTab(window.store.currentUser ? 'dashboard' : 'home');

  // --- 1. BANNER RENDERING ---
  function renderFrontpageBanner() {
    const s = window.store.state?.settings || window.store.getDefaultData().settings;
    const titleEl = document.getElementById('homeTitle');
    const letterEl = document.getElementById('homeLetter');

    if (titleEl && s.birthdayTitle) titleEl.textContent = s.birthdayTitle;
    if (letterEl && s.letterBody) letterEl.textContent = s.letterBody;
  }

  // --- 2. TAB ROUTING ---
  function switchTab(tab = 'home') {
    activeTab = tab;

    // Panes
    document.getElementById('paneHome').style.display = 'none';
    document.getElementById('paneDashboard').style.display = 'none';
    document.getElementById('paneCourse').style.display = 'none';
    document.getElementById('paneAdmin').style.display = 'none';
    document.getElementById('paneGrades').style.display = 'none';

    // Nav Links
    document.querySelectorAll('.moodle-nav-item').forEach(el => el.classList.remove('active'));

    updateBreadcrumbs();

    if (tab === 'home') {
      document.getElementById('paneHome').style.display = 'block';
      navItemHome?.classList.add('active');
      renderHomeCourses();
    } else if (tab === 'dashboard') {
      if (!window.store.currentUser) {
        openLoginModal();
        return switchTab('home');
      }
      document.getElementById('paneDashboard').style.display = 'block';
      navItemDashboard?.classList.add('active');
      renderDashboardCourses();
    } else if (tab === 'course') {
      document.getElementById('paneCourse').style.display = 'block';
      renderCourseView(currentCourse);
    } else if (tab === 'admin') {
      if (window.store.currentUser?.role !== 'admin') return switchTab('home');
      document.getElementById('paneAdmin').style.display = 'block';
      navAdminTab?.classList.add('active');
      renderAdminView();
    } else if (tab === 'grades') {
      document.getElementById('paneGrades').style.display = 'block';
      renderGradesView();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Nav Handlers
  document.getElementById('moodleBrand')?.addEventListener('click', () => switchTab('home'));
  navItemHome?.addEventListener('click', () => switchTab('home'));
  navItemDashboard?.addEventListener('click', () => switchTab('dashboard'));
  navItemMyCourses?.addEventListener('click', () => switchTab('dashboard'));
  navAdminTab?.addEventListener('click', () => switchTab('admin'));

  // Breadcrumbs
  function updateBreadcrumbs(courseTitle) {
    const bc = document.getElementById('moodleBreadcrumbs');
    if (!bc) return;

    let html = `<a id="bcHome">Home</a>`;
    if (activeTab === 'dashboard') {
      html += ` <span class="breadcrumb-sep">/</span> <a id="bcDashboard">Dashboard</a>`;
    } else if (activeTab === 'course' && courseTitle) {
      html += ` <span class="breadcrumb-sep">/</span> <a id="bcDashboard">Courses</a> <span class="breadcrumb-sep">/</span> <span>${courseTitle}</span>`;
    } else if (activeTab === 'admin') {
      html += ` <span class="breadcrumb-sep">/</span> <span>Site administration</span>`;
    } else if (activeTab === 'grades') {
      html += ` <span class="breadcrumb-sep">/</span> <span>Grades</span>`;
    }

    bc.innerHTML = html;
    document.getElementById('bcHome')?.addEventListener('click', () => switchTab('home'));
    document.getElementById('bcDashboard')?.addEventListener('click', () => switchTab('dashboard'));
  }

  // --- 3. USER NAVIGATION & AUTH STATE ---
  function updateUserNav() {
    const user = window.store.currentUser;

    if (user) {
      btnNavLogin.style.display = 'none';
      navUserBtn.style.display = 'flex';
      navUserName.textContent = user.name;
      dropdownUserName.textContent = user.name;
      navAvatar.textContent = user.role === 'admin' ? '👤' : '👩';
      navUserRole.textContent = user.role === 'admin' ? 'Administrator' : 'Student';

      // Admin specific controls
      if (user.role === 'admin') {
        editModeWrap.style.display = 'flex';
        navAdminTab.style.display = 'inline-block';
      } else {
        editModeWrap.style.display = 'none';
        navAdminTab.style.display = 'none';
      }
    } else {
      btnNavLogin.style.display = 'inline-block';
      navUserBtn.style.display = 'none';
      editModeWrap.style.display = 'none';
      navAdminTab.style.display = 'none';
    }
  }

  // Dropdown toggle
  navUserBtn?.addEventListener('click', e => {
    e.stopPropagation();
    userDropdown.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    userDropdown?.classList.remove('show');
  });

  document.getElementById('dropItemGrades')?.addEventListener('click', () => switchTab('grades'));

  document.getElementById('dropItemLogout')?.addEventListener('click', () => {
    window.store.logout();
    updateUserNav();
    showToast('Logged out');
    switchTab('home');
  });

  // Edit Mode Toggle (Admin)
  editModeToggle?.addEventListener('change', e => {
    isEditMode = e.target.checked;
    showToast(isEditMode ? 'Edit mode on' : 'Edit mode off');
    if (activeTab === 'course' && currentCourse) {
      renderCourseView(currentCourse);
    }
  });

  // --- 4. COURSE RENDERING ---
  function buildCourseCards(courses) {
    return courses.map(c => `
      <div class="course-card" data-course-id="${c.id}">
        <div class="course-card-banner">
          <span>${c.image || '📚'}</span>
          <span class="course-card-code">${c.code || ''}</span>
        </div>
        <div class="course-card-body">
          <div class="course-card-cat">${c.category || 'General'}</div>
          <h3 class="course-card-title">${c.title}</h3>
          <p class="course-card-desc">${c.description || ''}</p>
          <div class="course-progress-wrap">
            <div class="progress-label-bar">
              <span>Progress</span>
              <span>${c.progress || 0}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${c.progress || 0}%"></div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  function bindCourseCardClicks(container) {
    const courses = window.store.state?.courses || [];
    container.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('click', () => {
        const cid = card.getAttribute('data-course-id');
        const course = courses.find(c => c.id === cid);
        if (course) {
          currentCourse = course;
          switchTab('course');
        }
      });
    });
  }

  function renderHomeCourses() {
    const el = document.getElementById('homeCourseGrid');
    if (!el) return;
    const courses = window.store.state?.courses || [];
    el.innerHTML = buildCourseCards(courses);
    bindCourseCardClicks(el);
  }

  function renderDashboardCourses() {
    const el = document.getElementById('dashCourseGrid');
    if (!el) return;
    const courses = window.store.state?.courses || [];
    el.innerHTML = buildCourseCards(courses);
    bindCourseCardClicks(el);
  }

  // --- 5. COURSE DETAIL VIEW ---
  function renderCourseView(course) {
    if (!course) return;

    updateBreadcrumbs(course.title);

    const titleEl = document.getElementById('courseViewTitle');
    const catEl = document.getElementById('courseViewCategory');
    const descEl = document.getElementById('courseViewDesc');
    const sectionsEl = document.getElementById('courseSectionsList');
    const textbookHeroEl = document.getElementById('courseTextbookHero');

    if (titleEl) titleEl.textContent = course.title;
    if (catEl) catEl.textContent = course.category;
    if (descEl) descEl.textContent = course.description || '';

    // Dedicated Textbook Hero Banner at top of course
    let ebookAct = null;
    for (const sec of course.sections) {
      ebookAct = sec.activities.find(a => a.type === 'ebook');
      if (ebookAct) break;
    }

    if (textbookHeroEl) {
      if (ebookAct) {
        const cleanTitle = ebookAct.title.replace(/^📖\s*/, '');
        const pdfUrl = ebookAct.fileUrl || '/ebooks/ebook-introduction-to-psychology.pdf';
        const isBotany = pdfUrl.includes('botany');
        const sizeLabel = isBotany ? '85.2 MB' : '21.3 MB';
        const authorLabel = isBotany ? 'Linda R. Berg • 27 Chapters' : 'James W. Kalat • 15 Chapters';

        textbookHeroEl.innerHTML = `
          <div class="course-textbook-hero">
            <div class="textbook-hero-info">
              <div class="textbook-hero-icon">📖</div>
              <div>
                <h3 style="margin: 0; font-size: 1.05rem; color: #0f172a; font-weight: 700;">${cleanTitle}</h3>
                <p style="margin: 3px 0 0 0; font-size: 0.83rem; color: #64748b;">Complete Course Textbook (PDF • ${sizeLabel} • ${authorLabel})</p>
              </div>
            </div>
            <div class="textbook-hero-actions">
              <button class="btn-moodle-primary" id="btnHeroReadEbook" style="padding: 8px 16px; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 6px;">
                <span>📖 Read Online</span>
              </button>
              <a href="${pdfUrl}" target="_blank" class="btn-moodle-secondary" style="text-decoration: none; padding: 8px 14px; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 4px;">
                <span>↗ Open in New Tab</span>
              </a>
              <a href="${pdfUrl}" download class="btn-moodle-secondary" style="text-decoration: none; padding: 8px 14px; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 4px;">
                <span>⬇ Download</span>
              </a>
            </div>
          </div>
        `;

        document.getElementById('btnHeroReadEbook')?.addEventListener('click', () => {
          openActivityModal(course.id, ebookAct.id);
        });
      } else {
        textbookHeroEl.innerHTML = '';
      }
    }

    if (sectionsEl) {
      sectionsEl.innerHTML = course.sections.map(sec => {
        const activitiesHtml = sec.activities.map(act => {
          let icon = '📄';
          let iconClass = 'type-page';
          let subText = 'Page';

          if (act.type === 'ebook') {
            icon = '📖';
            iconClass = 'type-ebook';
            const isBotany = act.fileUrl?.includes('botany');
            subText = isBotany ? 'Full Course Textbook (PDF • 85.2 MB)' : 'Full Course Textbook (PDF • 21.3 MB)';
          } else if (act.type === 'quiz') {
            icon = '🧠';
            iconClass = 'type-quiz';
            subText = act.quizResult
              ? `Score: ${act.quizResult.score}/${act.quizResult.total} (${act.quizResult.percentage}%) • Re-attemptable`
              : 'Multiple Choice Checkpoint • Re-attemptable';
          } else if (act.type === 'assignment') {
            icon = '📝';
            iconClass = 'type-assignment';
            subText = act.submission?.grade ? `Graded: ${act.submission.grade}` : (act.submission?.submitted ? 'Submitted' : 'Assignment');
          } else if (act.type === 'resource') {
            icon = '📁';
            iconClass = 'type-resource';
            subText = 'Resource';
          }

          const statusBadge = act.completed
            ? `<span class="status-badge-done">Done</span>`
            : `<span class="status-badge-todo">To do</span>`;

          return `
            <div class="activity-row" data-activity-id="${act.id}" data-course-id="${course.id}">
              <div class="activity-meta">
                <div class="activity-type-icon ${iconClass}">
                  ${icon}
                </div>
                <div class="activity-title-wrap">
                  <span class="activity-name">${act.title}</span>
                  <span class="activity-sub-info">${subText}</span>
                </div>
              </div>
              <div class="activity-status-check">
                ${statusBadge}
              </div>
            </div>
          `;
        }).join('');

        const addActivityBtnHtml = isEditMode
          ? `<button class="btn-add-activity" data-sec-id="${sec.id}" data-course-id="${course.id}">+ Add an activity or resource</button>`
          : '';

        return `
          <div class="course-section">
            <div class="section-head">
              <h4 class="section-head-title">${sec.title}</h4>
              ${sec.description ? `<p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #64748b; font-weight: normal; line-height: 1.45;">${parseInline(sec.description)}</p>` : ''}
            </div>
            <div class="activity-list">
              ${activitiesHtml}
            </div>
            ${addActivityBtnHtml}
          </div>
        `;
      }).join('');

      sectionsEl.querySelectorAll('.activity-row').forEach(row => {
        row.addEventListener('click', () => {
          const cid = row.getAttribute('data-course-id');
          const aid = row.getAttribute('data-activity-id');
          openActivityModal(cid, aid);
        });
      });

      sectionsEl.querySelectorAll('.btn-add-activity').forEach(btn => {
        btn.addEventListener('click', () => {
          const cid = btn.getAttribute('data-course-id');
          const sid = btn.getAttribute('data-sec-id');
          openAddActivityModal(cid, sid);
        });
      });
    }
  }

  // --- 6. ACTIVITY MODAL ---
  function openActivityModal(courseId, activityId) {
    const course = window.store.state?.courses.find(c => c.id === courseId);
    if (!course) return;

    let activity = null;
    for (const sec of course.sections) {
      const a = sec.activities.find(act => act.id === activityId);
      if (a) {
        activity = a;
        break;
      }
    }
    if (!activity) return;

    const modalTitle = document.getElementById('activityModalTitle');
    const modalBody = document.getElementById('activityModalBody');
    const modalFooter = document.getElementById('activityModalFooter');

    const modalBox = activityModal.querySelector('.moodle-modal-box');
    modalBox?.classList.remove('modal-large');
    modalBox?.classList.remove('modal-quiz');
    modalBox?.classList.remove('modal-page');
    modalTitle.textContent = activity.title;

    // Show modal container immediately to grant layout dimensions
    activityModal.classList.add('active');

    if (activity.type === 'ebook') {
      modalBox?.classList.add('modal-large');
      const pdfUrl = activity.fileUrl || '/ebooks/ebook-introduction-to-psychology.pdf';
      const cleanTitle = activity.title.replace(/^📖\s*/, '');
      modalBody.innerHTML = `
        <div class="ebook-reader-toolbar">
          <div>
            <strong>${cleanTitle}</strong>
          </div>
          <div style="display: flex; gap: 8px;">
            <a href="${pdfUrl}" target="_blank" class="btn-moodle-primary" style="text-decoration: none; padding: 6px 14px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 4px;">
              <span>↗ Open in New Tab</span>
            </a>
            <a href="${pdfUrl}" download class="btn-moodle-secondary" style="text-decoration: none; padding: 6px 14px; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 4px;">
              <span>⬇ Download PDF</span>
            </a>
          </div>
        </div>
        <div style="background: #f8fafc; padding: 8px 14px; font-size: 0.82rem; color: #475569; border-bottom: 1px solid #e2e8f0;">
          💡 Embedded Reader: If your browser restricts large PDFs inside popups, click <strong>↗ Open in New Tab</strong> to view the full 600+ page textbook with native browser controls.
        </div>
        <object data="${pdfUrl}#toolbar=1" type="application/pdf" class="ebook-iframe" style="width: 100%; height: 75vh; border: none; display: block;">
          <embed src="${pdfUrl}#toolbar=1" type="application/pdf" style="width: 100%; height: 75vh; border: none; display: block;" />
          <iframe src="${pdfUrl}#toolbar=1" class="ebook-iframe" style="width: 100%; height: 75vh; border: none; display: block;" title="${cleanTitle}">
            <div style="padding: 30px; text-align: center;">
              <p style="font-size: 1rem; color: #334155; margin-bottom: 12px;">Your browser does not support embedded PDF previews.</p>
              <a href="${pdfUrl}" target="_blank" class="btn-moodle-primary" style="text-decoration: none; padding: 8px 16px;">↗ Open Textbook in New Tab</a>
            </div>
          </iframe>
        </object>
      `;
      modalFooter.innerHTML = `
        <button class="btn-moodle-secondary" id="btnCloseActivityModal">Close</button>
      `;
    } else if (activity.type === 'page' || activity.type === 'resource') {
      modalBox?.classList.add('modal-page');
      modalBody.innerHTML = `
        <div class="moodle-page-content">${renderMarkdown(activity.content || '')}</div>
      `;
      modalFooter.innerHTML = `
        <button class="btn-moodle-primary" id="btnMarkActivityDone">Mark as done</button>
        <button class="btn-moodle-secondary" id="btnCloseActivityModal">Close</button>
      `;

      document.getElementById('btnMarkActivityDone').addEventListener('click', async () => {
        await window.store.toggleActivity(courseId, activityId, true);
        showToast('Completed');
        closeActivityModal();
        renderCourseView(course);
      });
    } else if (activity.type === 'assignment') {
      modalBox?.classList.remove('modal-large');
      const isElizabeth = window.store.currentUser?.role === 'student' || !window.store.currentUser;
      const isAdmin = window.store.currentUser?.role === 'admin';
      const sub = activity.submission;

      let subStatusHtml = `
        <table class="submission-status-table">
          <tr>
            <td>Submission status</td>
            <td>${sub?.submitted ? 'Submitted for grading' : 'No attempt'}</td>
          </tr>
          <tr>
            <td>Grading status</td>
            <td>${sub?.grade ? `Graded: ${sub.grade}` : 'Not graded'}</td>
          </tr>
          <tr>
            <td>Due date</td>
            <td>${activity.dueDate || 'Open'}</td>
          </tr>
        </table>
      `;

      let submissionContentHtml = '';
      if (sub?.submitted) {
        submissionContentHtml += `
          <h4 style="margin: 16px 0 6px 0; color: #1e293b;">Online text:</h4>
          <div class="submission-text-box">${sub.text}</div>
        `;
      }

      if (sub?.feedback) {
        submissionContentHtml += `
          <div class="admin-feedback-box">
            <div class="feedback-title">Feedback:</div>
            <div style="font-weight: 700; margin-bottom: 4px;">Grade: ${sub.grade || 'A'}</div>
            <div>${sub.feedback}</div>
          </div>
        `;
      }

      let actionAreaHtml = '';
      if (isElizabeth) {
        actionAreaHtml = `
          <div style="margin-top: 14px;">
            <label style="display:block; font-weight:600; margin-bottom: 6px;">Your submission:</label>
            <textarea id="assignTextInput" rows="5" style="width:100%; border:1px solid #cbd5e1; border-radius:6px; padding:10px; font-family:inherit;">${sub?.text || ''}</textarea>
          </div>
        `;
      } else if (isAdmin) {
        actionAreaHtml = `
          <div style="margin-top: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px;">
            <h4 style="margin:0 0 10px 0;">Grading</h4>
            <div style="margin-bottom: 10px;">
              <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px;">Grade:</label>
              <input id="inputGrade" type="text" value="${sub?.grade || '100 / 100'}" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:6px;">
            </div>
            <div>
              <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px;">Feedback comments:</label>
              <textarea id="inputFeedback" rows="3" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:6px;">${sub?.feedback || ''}</textarea>
            </div>
          </div>
        `;
      }

      modalBody.innerHTML = `
        <div class="moodle-page-content" style="margin-bottom: 14px; padding: 0;">
          ${renderMarkdown(activity.instructions || '')}
        </div>
        ${subStatusHtml}
        ${submissionContentHtml}
        ${actionAreaHtml}
      `;

      let footerButtons = '';
      if (isElizabeth) {
        footerButtons = `<button class="btn-moodle-primary" id="btnSubmitAssignment">Save changes</button>`;
      } else if (isAdmin) {
        footerButtons = `<button class="btn-moodle-primary" id="btnSaveGrade">Save grade</button>`;
      }
      footerButtons += `<button class="btn-moodle-secondary" id="btnCloseActivityModal">Close</button>`;
      modalFooter.innerHTML = footerButtons;

      if (isElizabeth) {
        document.getElementById('btnSubmitAssignment')?.addEventListener('click', async () => {
          const text = document.getElementById('assignTextInput').value.trim();
          if (!text) return alert('Please enter your text.');

          await window.store.submitAssignment(courseId, activityId, text);
          showToast('Assignment submitted');
          closeActivityModal();
          renderCourseView(course);
        });
      } else if (isAdmin) {
        document.getElementById('btnSaveGrade')?.addEventListener('click', async () => {
          const grade = document.getElementById('inputGrade').value.trim();
          const feedback = document.getElementById('inputFeedback').value.trim();

          await window.store.gradeAssignment(courseId, activityId, grade, feedback);
          showToast('Grade saved');
          closeActivityModal();
          renderCourseView(course);
        });
      }
    } else if (activity.type === 'quiz') {
      modalBox?.classList.remove('modal-large');
      modalBox?.classList.add('modal-quiz');
      const questions = activity.questions || [];
      const result = activity.quizResult;

      if (result) {
        let scoreClass = result.percentage >= 75 ? '#15803d' : '#b45309';
        let reviewHtml = `
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px; text-align: center;">
            <h3 style="margin: 0 0 6px 0; color: ${scoreClass}; font-size: 1.25rem;">Grade: ${result.score} / ${result.total} (${result.percentage}%)</h3>
            <p style="margin: 0; font-size: 0.88rem; color: #64748b;">Completed on ${result.date || 'Today'} • You can retake this checkpoint anytime for mastery!</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px;">
        `;

        questions.forEach((q, qIdx) => {
          const userAns = result.userAnswers ? result.userAnswers[qIdx] : null;
          const isCorrect = userAns === q.correct;
          const cardBorder = isCorrect ? '#86efac' : '#fca5a5';
          const cardBg = isCorrect ? '#f0fdf4' : '#fef2f2';

          reviewHtml += `
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid ${cardBorder}; border-radius: 8px; padding: 14px 16px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-weight: 700; font-size: 0.92rem; color: #1e293b;">Question ${qIdx + 1}</span>
                <span style="font-size: 0.82rem; font-weight: 700; color: ${isCorrect ? '#15803d' : '#b91c1c'};">
                  ${isCorrect ? '✓ Correct (1.00 / 1.00)' : '✗ Incorrect (0.00 / 1.00)'}
                </span>
              </div>
              <p style="margin: 0 0 10px 0; font-weight: 600; color: #334155; font-size: 0.95rem;">${parseInline(q.question)}</p>
              <div style="display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px;">
                ${q.options.map((opt, oIdx) => {
                  let optStyle = "padding: 6px 10px; border-radius: 6px; font-size: 0.88rem; border: 1px solid #e2e8f0;";
                  let badge = "";
                  if (oIdx === q.correct) {
                    optStyle += " background: #dcfce7; border-color: #86efac; font-weight: 600; color: #14532d;";
                    badge = " (Correct Answer)";
                  } else if (oIdx === userAns) {
                    optStyle += " background: #fee2e2; border-color: #fca5a5; font-weight: 600; color: #7f1d1d;";
                    badge = " (Your Answer)";
                  }
                  return `<div style="${optStyle}"><span>${String.fromCharCode(65 + oIdx)}. ${parseInline(opt)}</span><span style="font-size:0.78rem; font-weight:700;">${badge}</span></div>`;
                }).join('')}
              </div>
              ${q.explanation ? `<div style="background: ${cardBg}; border: 1px solid ${cardBorder}; border-radius: 6px; padding: 8px 12px; font-size: 0.82rem; color: #1e293b;"><strong>Explanation:</strong> ${parseInline(q.explanation)}</div>` : ''}
            </div>
          `;
        });

        reviewHtml += `</div>`;
        modalBody.innerHTML = reviewHtml;

        modalFooter.innerHTML = `
          <button class="btn-moodle-primary" id="btnReattemptQuiz">🔄 Re-attempt Quiz</button>
          <button class="btn-moodle-secondary" id="btnCloseActivityModal">Close</button>
        `;

        document.getElementById('btnReattemptQuiz')?.addEventListener('click', async () => {
          await window.store.submitQuiz(courseId, activityId, null);
          activity.quizResult = null;
          activity.completed = false;
          openActivityModal(courseId, activityId);
          renderCourseView(course);
        });
      } else {
        let formHtml = `
          <p style="color: #64748b; font-size: 0.88rem; margin-top: 0;">Answer all questions below based on this chapter. This checkpoint can be taken and retaken anytime.</p>
          <form id="quizForm" style="display: flex; flex-direction: column; gap: 16px;">
        `;

        questions.forEach((q, qIdx) => {
          formHtml += `
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px;">
              <div style="font-weight: 700; font-size: 0.92rem; color: #1e293b; margin-bottom: 6px;">
                Question ${qIdx + 1}
              </div>
              <p style="margin: 0 0 10px 0; color: #334155; font-weight: 600; font-size: 0.95rem;">${parseInline(q.question)}</p>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${q.options.map((opt, oIdx) => `
                  <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; padding: 8px 10px; border: 1px solid #e2e8f0; border-radius: 6px; transition: background 0.1s;">
                    <input type="radio" name="q_${qIdx}" value="${oIdx}" required style="cursor: pointer;">
                    <span style="font-size: 0.9rem; color: #1e293b;"><strong>${String.fromCharCode(65 + oIdx)}.</strong> ${parseInline(opt)}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `;
        });

        formHtml += `</form>`;
        modalBody.innerHTML = formHtml;

        modalFooter.innerHTML = `
          <button class="btn-moodle-primary" id="btnSubmitQuizAnswers">Submit all and finish</button>
          <button class="btn-moodle-secondary" id="btnCloseActivityModal">Cancel</button>
        `;

        document.getElementById('btnSubmitQuizAnswers')?.addEventListener('click', async () => {
          const form = document.getElementById('quizForm');
          let score = 0;
          let allAnswered = true;
          let userAnswers = [];

          questions.forEach((q, qIdx) => {
            const selected = form.querySelector(`input[name="q_${qIdx}"]:checked`);
            if (!selected) {
              allAnswered = false;
            } else {
              const val = parseInt(selected.value, 10);
              userAnswers.push(val);
              if (val === q.correct) score++;
            }
          });

          if (!allAnswered) {
            return alert('Please answer all questions before submitting.');
          }

          const percentage = Math.round((score / questions.length) * 100);
          const quizResult = {
            score,
            total: questions.length,
            percentage,
            userAnswers,
            date: new Date().toISOString().split('T')[0]
          };

          await window.store.submitQuiz(courseId, activityId, quizResult);
          showToast(`Checkpoint completed: ${score}/${questions.length} (${percentage}%)`);
          openActivityModal(courseId, activityId);
          renderCourseView(course);
        });
      }
    }

    document.getElementById('btnCloseActivityModal')?.addEventListener('click', closeActivityModal);
    document.getElementById('btnActivityModalCross')?.addEventListener('click', closeActivityModal);

    activityModal.classList.add('active');
  }

  function closeActivityModal() {
    activityModal.classList.remove('active');
    activityModal.querySelector('.moodle-modal-box')?.classList.remove('modal-large');
  }

  // --- 7. ADD ACTIVITY MODAL ---
  function openAddActivityModal(courseId, sectionId) {
    document.getElementById('addActCourseId').value = courseId;
    document.getElementById('addActSectionId').value = sectionId;
    addActivityModal.classList.add('active');
  }

  function closeAddActivityModal() {
    addActivityModal.classList.remove('active');
  }

  document.getElementById('btnAddActCancel')?.addEventListener('click', closeAddActivityModal);
  document.getElementById('btnAddActCross')?.addEventListener('click', closeAddActivityModal);

  document.getElementById('btnAddActConfirm')?.addEventListener('click', async () => {
    const courseId = document.getElementById('addActCourseId').value;
    const sectionId = document.getElementById('addActSectionId').value;
    const type = document.getElementById('addActType').value;
    const title = document.getElementById('addActTitle').value.trim();
    const content = document.getElementById('addActContent').value.trim();

    if (!title) return alert('Please enter a title.');

    const newActivity = {
      type,
      title,
      completed: false
    };

    if (type === 'page' || type === 'resource') {
      newActivity.content = content;
    } else if (type === 'assignment') {
      newActivity.instructions = content;
      newActivity.submission = null;
    }

    await window.store.addActivity(courseId, sectionId, newActivity);
    showToast('Activity added');
    closeAddActivityModal();
    if (currentCourse) renderCourseView(currentCourse);
  });

  // --- 8. ADMIN VIEW ---
  function renderAdminView() {
    const adminContainer = document.getElementById('adminViewContent');
    if (!adminContainer) return;

    const s = window.store.state?.settings || window.store.getDefaultData().settings;

    adminContainer.innerHTML = `
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; padding:24px;">
        <h2 style="margin:0 0 16px 0;">Site administration</h2>

        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:18px; margin-bottom:20px;">
          <h3 style="margin:0 0 12px 0;">Frontpage Letter Settings</h3>
          <div style="margin-bottom:12px;">
            <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px;">Heading:</label>
            <input id="editBdayTitle" type="text" value="${s.birthdayTitle}" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:6px;">
          </div>
          <div style="margin-bottom:12px;">
            <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px;">Letter text:</label>
            <textarea id="editLetterBody" rows="3" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:6px;">${s.letterBody}</textarea>
          </div>
          <button class="btn-moodle-primary" id="btnSaveLetterSettings">Save</button>
        </div>

        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:18px;">
          <h3 style="margin:0 0 12px 0;">Add Course</h3>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div>
              <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px;">Course Code:</label>
              <input id="newCourseCode" type="text" placeholder="e.g. CS-101" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:6px;">
            </div>
            <div>
              <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px;">Category:</label>
              <input id="newCourseCat" type="text" placeholder="General" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:6px;">
            </div>
          </div>
          <div style="margin-bottom:12px;">
            <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px;">Course Title:</label>
            <input id="newCourseTitle" type="text" placeholder="Course name" style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:6px;">
          </div>
          <div style="margin-bottom:12px;">
            <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px;">Description:</label>
            <textarea id="newCourseDesc" rows="3" placeholder="Course description..." style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:6px;"></textarea>
          </div>
          <button class="btn-moodle-primary" id="btnCreateCourse">Create Course</button>
        </div>
      </div>
    `;

    document.getElementById('btnSaveLetterSettings')?.addEventListener('click', async () => {
      const birthdayTitle = document.getElementById('editBdayTitle').value.trim();
      const letterBody = document.getElementById('editLetterBody').value.trim();

      await window.store.updateSettings({ birthdayTitle, letterBody });
      renderFrontpageBanner();
      showToast('Settings saved');
    });

    document.getElementById('btnCreateCourse')?.addEventListener('click', async () => {
      const code = document.getElementById('newCourseCode').value.trim();
      const category = document.getElementById('newCourseCat').value.trim();
      const title = document.getElementById('newCourseTitle').value.trim();
      const description = document.getElementById('newCourseDesc').value.trim();

      if (!title) return alert('Please enter a title.');

      const newCourse = {
        code: code || 'NEW-101',
        category: category || 'General',
        title,
        description,
        image: '📚',
        progress: 0,
        sections: [
          {
            id: 'sec_' + Date.now(),
            title: 'General',
            description: '',
            activities: []
          }
        ]
      };

      await window.store.addCourse(newCourse);
      showToast('Course created');
      switchTab('dashboard');
    });
  }

  // --- 9. GRADES VIEW ---
  function renderGradesView() {
    const gradesContainer = document.getElementById('gradesViewContent');
    if (!gradesContainer) return;

    const courses = window.store.state?.courses || [];
    let rowsHtml = '';

    courses.forEach(c => {
      c.sections.forEach(sec => {
        sec.activities.filter(a => a.type === 'assignment').forEach(act => {
          const sub = act.submission;
          const gradeText = sub?.grade || '—';
          const feedbackText = sub?.feedback || '—';
          rowsHtml += `
            <tr>
              <td style="padding:10px 12px; border:1px solid #e5e7eb;">${c.code}</td>
              <td style="padding:10px 12px; border:1px solid #e5e7eb;">${act.title}</td>
              <td style="padding:10px 12px; border:1px solid #e5e7eb; font-weight:600;">${gradeText}</td>
              <td style="padding:10px 12px; border:1px solid #e5e7eb;">${feedbackText}</td>
            </tr>
          `;
        });
      });
    });

    gradesContainer.innerHTML = `
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; padding:24px;">
        <h2 style="margin:0 0 16px 0;">Grades</h2>
        <table style="width:100%; border-collapse:collapse;">
          <thead style="background:#f9fafb;">
            <tr>
              <th style="padding:10px 12px; border:1px solid #e5e7eb; text-align:left;">Course</th>
              <th style="padding:10px 12px; border:1px solid #e5e7eb; text-align:left;">Item</th>
              <th style="padding:10px 12px; border:1px solid #e5e7eb; text-align:left;">Grade</th>
              <th style="padding:10px 12px; border:1px solid #e5e7eb; text-align:left;">Feedback</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml || '<tr><td colspan="4" style="padding:20px; text-align:center; color:#9ca3af;">No graded items.</td></tr>'}
          </tbody>
        </table>
      </div>
    `;
  }

  // --- 10. MESSAGING DRAWER ---
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  let msgPollInterval = null;

  btnToggleMsg?.addEventListener('click', async () => {
    msgDrawer.classList.toggle('open');
    renderMessages();

    if (msgDrawer.classList.contains('open')) {
      inputChat?.focus();
      await window.store.syncState();
      renderMessages();

      if (!msgPollInterval) {
        msgPollInterval = setInterval(async () => {
          if (msgDrawer.classList.contains('open')) {
            await window.store.syncState();
            renderMessages();
          }
        }, 3000);
      }
    } else {
      if (msgPollInterval) {
        clearInterval(msgPollInterval);
        msgPollInterval = null;
      }
    }
  });

  btnCloseMsg?.addEventListener('click', () => {
    msgDrawer.classList.remove('open');
    if (msgPollInterval) {
      clearInterval(msgPollInterval);
      msgPollInterval = null;
    }
  });

  function renderMessages() {
    const messages = window.store.state?.messages || [];
    const myName = window.store.currentUser ? window.store.currentUser.name : 'Elizabeth';

    if (!messages || messages.length === 0) {
      drawerMsgList.innerHTML = `
        <div style="text-align: center; color: #94a3b8; font-size: 0.88rem; padding: 24px 12px;">
          No messages yet.<br>Send a note below to start the conversation!
        </div>
      `;
      return;
    }

    drawerMsgList.innerHTML = messages.map(m => {
      const sender = m.sender || 'Elizabeth';
      const isMine = sender.toLowerCase() === myName.toLowerCase();
      const text = escapeHtml(m.text || '');
      const timeStr = m.timestamp ? new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';

      return `
        <div class="chat-bubble ${isMine ? 'mine' : 'theirs'}">
          <div style="font-size: 0.75rem; font-weight: 700; opacity: 0.88; margin-bottom: 2px;">${escapeHtml(sender)}</div>
          <div style="word-break: break-word;">${text}</div>
          <div class="chat-time">${timeStr}</div>
        </div>
      `;
    }).join('');

    drawerMsgList.scrollTop = drawerMsgList.scrollHeight;
  }

  async function handleSendChat() {
    const text = inputChat.value.trim();
    if (!text) return;

    const myName = window.store.currentUser ? window.store.currentUser.name : 'Elizabeth';
    const recipient = myName.toLowerCase() === 'admin' ? 'Elizabeth' : 'Admin';

    inputChat.value = '';
    btnSendChat.disabled = true;

    try {
      await window.store.sendMessage(text, recipient);
      renderMessages();
    } finally {
      btnSendChat.disabled = false;
      inputChat.focus();
    }
  }

  btnSendChat?.addEventListener('click', handleSendChat);
  inputChat?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendChat();
    }
  });

  // --- 11. AUTHENTIC MOODLE LOGIN MODAL ---
  function openLoginModal() {
    const userInput = document.getElementById('loginUsername');
    const passInput = document.getElementById('loginPassword');
    const errBox = document.getElementById('loginErrorBox');

    userInput.value = '';
    passInput.value = '';
    errBox.style.display = 'none';

    loginModal.classList.add('active');
    userInput.focus();
  }

  function closeLoginModal() {
    loginModal.classList.remove('active');
  }

  document.getElementById('btnLoginClose')?.addEventListener('click', closeLoginModal);
  btnNavLogin?.addEventListener('click', openLoginModal);

  document.getElementById('loginForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const user = document.getElementById('loginUsername').value;
    const pass = document.getElementById('loginPassword').value;
    const errBox = document.getElementById('loginErrorBox');

    const res = await window.store.login(user, pass);
    if (res.success) {
      closeLoginModal();
      showToast(`Logged in as ${res.user.name}`);
      updateUserNav();
      switchTab('dashboard');
    } else {
      errBox.textContent = res.error || 'Invalid login, please try again.';
      errBox.style.display = 'block';
    }
  });

  function showToast(message) {
    const existing = document.querySelector('.moodle-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'moodle-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2200);
  }
});
