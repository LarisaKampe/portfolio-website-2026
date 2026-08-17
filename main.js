/* ═══════════════════════════════════════════════════
   LARISA KAMPE — PORTFOLIO  /  main.js
   ═══════════════════════════════════════════════════ */

"use strict";

/* ─── ICONS ─────────────────────────────────────────
   Feather-style SVG paths, keyed by category key
   or social name.                                    */
const ICONS = {
  logo: { path: "./assets/logo.svg" },
  home: `<svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,
  "graphic-design": `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  "ui-ux": `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  code: `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  "furniture-design": `<svg viewBox="0 0 24 24"><path d="M4 7V5a1 1 0 011-1h14a1 1 0 011 1v2"/><rect x="2" y="7" width="20" height="5" rx="1"/><path d="M6 12v5M18 12v5M4 17h16"/></svg>`,
  "classical-art": `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  illustrations: `<svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  "about-me": `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 10h.01M8 14h.01M12 10h4M12 14h4"/><circle cx="8" cy="10" r="0.5" fill="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="8" cy="14" r="0.5" fill="currentColor" stroke="currentColor" stroke-width="2"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  behance: `<svg viewBox="0 0 24 24"><path d="M9 12.5a2.5 2.5 0 010-5H14V12.5H9z"/><path d="M9 12.5H15a2.5 2.5 0 010 5H9v-5z"/><path d="M15.5 7h5M15.5 9h5"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>`,
  email: `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  cv: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
};

/* ─── STATE ─────────────────────────────────────── */
const state = {
  currentPage: "home",
  selectedProject: {}, // { [categoryKey]: projectId }
  clientsOffset: 0,
};

const CLIENTS_VISIBLE = 4;

/* ─── HELPERS ───────────────────────────────────── */
function icon(key) {
  return `<span class="s-icon">${ICONS[key] ?? ""}</span>`;
}

function thumb(src) {
  if (!src) return "";
  return `<img src="${src}" alt="" loading="lazy">`;
}

function mediaEl(src) {
  if (!src) return "";
  const isVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);
  if (isVideo) {
    return `<video src="${src}" autoplay muted loop playsinline></video>`;
  }
  return `<img src="${src}" alt="" loading="lazy">`;
}

/* ─── BUILD SIDEBAR ─────────────────────────────── */
function buildSidebar() {
  const { owner } = DATA;
  const sidebar = document.getElementById("sidebar");

  // Logo
  const logoEl = document.createElement("div");
  logoEl.className = "s-logo";
  logoEl.innerHTML = `<img src="./assets/logo.svg" alt="logo">`;
  logoEl.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle("nav-open");
    } else {
      navigate("home");
    }
  });
  sidebar.appendChild(logoEl);

  // Nav list
  const navEl = document.createElement("ul");
  navEl.className = "s-nav";

  const navItems = [
    { key: "home", label: "home" },
    ...DATA.categories.map((c) => ({ key: c.key, label: c.title })),
    { key: "about-me", label: "about me" },
  ];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "s-item";
    li.dataset.page = item.key;
    li.innerHTML = `${icon(item.key)}<span class="s-label">${item.label}</span>`;
    li.addEventListener("click", () => navigate(item.key));
    navEl.appendChild(li);
  });

  sidebar.appendChild(navEl);

  // Divider
  const div = document.createElement("div");
  div.className = "s-divider";
  sidebar.appendChild(div);

  // Social links
  const socialEl = document.createElement("ul");
  socialEl.className = "s-social";

  const socials = [
    { key: "linkedin", label: "linkedin", href: owner.social.linkedin },
    { key: "behance", label: "behance", href: owner.social.behance },
    { key: "github", label: "github", href: owner.social.github },
    { key: "email", label: "email", href: owner.social.email },
    { key: "cv", label: "cv", href: owner.social.cv },
  ];

  socials.forEach((s) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = s.href;
    if (!s.href.startsWith("mailto")) a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `${icon(s.key)}<span class="s-label">${s.label}</span>`;
    li.appendChild(a);
    socialEl.appendChild(li);
  });

  sidebar.appendChild(socialEl);
}

/* ─── BUILD PAGES ───────────────────────────────── */
function buildPages() {
  const main = document.getElementById("main");

  // Home
  main.appendChild(buildHomePage());

  // Category pages
  DATA.categories.forEach((cat) => {
    const page = document.createElement("section");
    page.className = "page";
    page.id = "page-" + cat.key;
    main.appendChild(page);
    renderCategoryPage(cat.key);
  });

  // About Me
  main.appendChild(buildAboutPage());
}

/* ─── HOME PAGE ─────────────────────────────────── */
function buildHomePage() {
  const { owner, featured, clients, categories } = DATA;
  const page = document.createElement("section");
  page.className = "page";
  page.id = "page-home";

  // Title + desc
  page.innerHTML = `
    <h1 class="page-title">${owner.name}</h1>
    <p class="page-desc">${owner.tagline}</p>
  `;

  // Skill cards grid
  const skillsGrid = document.createElement("div");
  skillsGrid.className = "skills-grid";
  categories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = cat.title.replace(" ", "<br>");
    card.addEventListener("click", () => navigate(cat.key));
    skillsGrid.appendChild(card);
  });
  page.appendChild(skillsGrid);

  // Featured projects (3-col grid)
  const featGrid = document.createElement("div");
  featGrid.className = "proj-grid cols-3";
  featured.forEach((f) => {
    const cat = categories.find((c) => c.key === f.category);
    const proj = cat?.projects.find((p) => p.id === f.projectId);
    if (!cat || !proj) return;
    const card = document.createElement("div");
    card.className = "proj-card";
    card.innerHTML = `
      <div class="proj-thumb">${thumb(proj.image)}</div>
      <div class="proj-meta">
        <div class="proj-name">${proj.name}</div>
        <div class="proj-short">${proj.short}</div>
      </div>
    `;
    card.addEventListener("click", () => navigate(f.category));
    featGrid.appendChild(card);
  });
  page.appendChild(featGrid);

  // Clients carousel
  const clientsSection = document.createElement("div");
  clientsSection.className = "clients-section";
  clientsSection.innerHTML = `<h2 class="section-title">clients</h2>`;

  const row = document.createElement("div");
  row.className = "clients-row";

  const prevBtn = document.createElement("button");
  prevBtn.className = "carousel-btn";
  prevBtn.id = "clients-prev";
  prevBtn.setAttribute("aria-label", "Previous clients");
  prevBtn.innerHTML = ICONS.arrowLeft;
  prevBtn.addEventListener("click", () => clientsScroll(-1));

  const track = document.createElement("div");
  track.className = "clients-track";
  track.id = "clients-track";

  const inner = document.createElement("div");
  inner.className = "clients-inner";
  inner.id = "clients-inner";

  clients.forEach((client) => {
    const card = document.createElement("div");
    card.className = "client-card";
    if (client.image)
      card.innerHTML = `<img src="${client.image}" alt="${client.name}">`;
    inner.appendChild(card);
  });

  track.appendChild(inner);

  const nextBtn = document.createElement("button");
  nextBtn.className = "carousel-btn";
  nextBtn.id = "clients-next";
  nextBtn.setAttribute("aria-label", "Next clients");
  nextBtn.innerHTML = ICONS.arrowRight;
  nextBtn.addEventListener("click", () => clientsScroll(1));

  row.appendChild(prevBtn);
  row.appendChild(track);
  row.appendChild(nextBtn);
  clientsSection.appendChild(row);
  page.appendChild(clientsSection);

  // About section
  const aboutEl = document.createElement("div");
  aboutEl.className = "home-about";
  aboutEl.innerHTML = `<h2 class="section-title">about</h2>`;
  owner.about.forEach((para) => {
    const p = document.createElement("p");
    p.textContent = para;
    aboutEl.appendChild(p);
  });
  page.appendChild(aboutEl);

  // Contact section
  const contactEl = document.createElement("div");
  contactEl.className = "home-contact";
  contactEl.innerHTML = `<h2 class="section-title">get in touch</h2>`;
  owner.contact.intro.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    contactEl.appendChild(p);
  });
  const emailBtn = document.createElement("a");
  emailBtn.className = "btn";
  emailBtn.href = owner.contact.email.startsWith("mailto")
    ? owner.contact.email
    : `mailto:${owner.contact.email}`;
  emailBtn.textContent = "email me";
  contactEl.appendChild(emailBtn);
  page.appendChild(contactEl);

  return page;
}

/* ─── CATEGORY PAGE ─────────────────────────────── */
function renderCategoryPage(key) {
  const page = document.getElementById("page-" + key);
  if (!page) return;

  const cat = DATA.categories.find((c) => c.key === key);
  if (!cat) return;

  // Default selection
  if (!state.selectedProject[key]) {
    state.selectedProject[key] = cat.projects[0].id;
  }

  const selId = state.selectedProject[key];
  const selIdx = cat.projects.findIndex((p) => p.id === selId);
  const sel = cat.projects[selIdx];

  page.innerHTML = `
    <h1 class="page-title">${cat.title}</h1>
    <p class="page-desc">${cat.description}</p>
  `;

  // Project grid
  const grid = document.createElement("div");
  grid.className = `proj-grid cols-${cat.cols}`;

  cat.projects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "proj-card" + (proj.id === selId ? " selected" : "");
    card.innerHTML = `
      <div class="proj-thumb">${thumb(proj.image)}</div>
      <div class="proj-meta">
        <div class="proj-name">${proj.name}</div>
        <div class="proj-short">${proj.short}</div>
      </div>
    `;
    card.addEventListener("click", () => {
      state.selectedProject[key] = proj.id;
      renderCategoryPage(key);
    });
    grid.appendChild(card);
  });

  page.appendChild(grid);

  // Detail panel
  const detail = document.createElement("div");
  detail.className = "proj-detail";

  const mediaHTML = sel.media
    ? `<div class="proj-detail-media">${mediaEl(sel.media)}</div>`
    : `<div class="proj-detail-media"></div>`;

  detail.innerHTML = `
    <h2 class="proj-detail-title">${sel.name}</h2>
    <p class="proj-detail-desc">${sel.description}</p>
    ${mediaHTML}
    <div class="proj-nav">
      <button class="nav-btn" id="prev-${key}" aria-label="Previous project"
        ${selIdx === 0 ? "disabled" : ""}>${ICONS.arrowLeft}</button>
      <button class="nav-btn" id="next-${key}" aria-label="Next project"
        ${selIdx === cat.projects.length - 1 ? "disabled" : ""}>${ICONS.arrowRight}</button>
    </div>
  `;

  // Attach nav button listeners
  detail.querySelector(`#prev-${key}`)?.addEventListener("click", () => {
    const idx = cat.projects.findIndex(
      (p) => p.id === state.selectedProject[key],
    );
    if (idx > 0) {
      state.selectedProject[key] = cat.projects[idx - 1].id;
      renderCategoryPage(key);
    }
  });

  detail.querySelector(`#next-${key}`)?.addEventListener("click", () => {
    const idx = cat.projects.findIndex(
      (p) => p.id === state.selectedProject[key],
    );
    if (idx < cat.projects.length - 1) {
      state.selectedProject[key] = cat.projects[idx + 1].id;
      renderCategoryPage(key);
    }
  });

  page.appendChild(detail);
}

/* ─── ABOUT ME PAGE ─────────────────────────────── */
function buildAboutPage() {
  const { owner } = DATA;
  const page = document.createElement("section");
  page.className = "page";
  page.id = "page-about-me";

  page.innerHTML = `
    <h1 class="page-title">about me</h1>
    <p class="page-desc">${owner.tagline}</p>
    <h2 class="about-subheading">background</h2>
    ${owner.about.map((p) => `<p class="about-body">${p}</p>`).join("")}
    <div class="about-media"></div>
  `;

  return page;
}

/* ─── NAVIGATION ────────────────────────────────── */
function navigate(pageKey, pushHistory = true) {
  // Hide all
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));

  // Show target
  const target = document.getElementById("page-" + pageKey);
  if (target) target.classList.add("active");

  // Sidebar active state
  document.querySelectorAll(".s-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.page === pageKey);
  });

  state.currentPage = pageKey;

  if (pushHistory) {
    history.pushState({ page: pageKey }, "", "#" + pageKey);
  }

  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ─── CLIENTS CAROUSEL ──────────────────────────── */
function updateClientsCarousel() {
  const inner = document.getElementById("clients-inner");
  const track = document.getElementById("clients-track");
  if (!inner || !track) return;

  const totalClients = DATA.clients.length;
  const gap = 14;

  // Calculate card width based on track and visible count
  const trackW = track.offsetWidth;
  const cardW = (trackW - gap * (CLIENTS_VISIBLE - 1)) / CLIENTS_VISIBLE;

  // Apply width to each client card
  inner.querySelectorAll(".client-card").forEach((card) => {
    card.style.width = cardW + "px";
  });

  const shift = state.clientsOffset * (cardW + gap);
  inner.style.transform = `translateX(-${shift}px)`;

  const prevBtn = document.getElementById("clients-prev");
  const nextBtn = document.getElementById("clients-next");
  if (prevBtn) prevBtn.disabled = state.clientsOffset === 0;
  if (nextBtn)
    nextBtn.disabled = state.clientsOffset >= totalClients - CLIENTS_VISIBLE;
}

function clientsScroll(dir) {
  const max = DATA.clients.length - CLIENTS_VISIBLE;
  state.clientsOffset = Math.max(0, Math.min(max, state.clientsOffset + dir));
  updateClientsCarousel();
}

/* ─── SCROLL TO TOP ─────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ─── INIT ───────────────────────────────────────── */
function init() {
  buildSidebar();
  buildPages();
  initScrollTop();

  // Carousel sizing needs the DOM to be ready
  requestAnimationFrame(() => {
    updateClientsCarousel();
  });

  // Handle resize for carousel
  window.addEventListener("resize", updateClientsCarousel);

  // Hash-based routing on load
  const hash = location.hash.replace("#", "").trim();
  const validKeys = ["home", "about-me", ...DATA.categories.map((c) => c.key)];
  navigate(validKeys.includes(hash) ? hash : "home", false);

  // Handle browser back/forward
  window.addEventListener("popstate", (e) => {
    const key = e.state?.page || location.hash.replace("#", "") || "home";
    navigate(key, false);
  });
}

document.addEventListener("DOMContentLoaded", init);
