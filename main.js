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
  email: `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  cv: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  play: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="6 3 20 12 6 21"/></svg>`,
};

/* ─── STATE ─────────────────────────────────────── */
const state = {
  currentPage: "home",
  selectedProject: {}, // { [categoryKey]: projectId }
  clientsOffset: 0,
};

// Fewer, larger client cards on mobile — matches the site's one
// responsive breakpoint (see the 768px media query in style.css).
function getClientsVisible() {
  return window.innerWidth <= 768 ? 2 : 4;
}

/* ─── HELPERS ───────────────────────────────────── */
function icon(key) {
  return `<span class="s-icon" aria-hidden="true">${ICONS[key] ?? ""}</span>`;
}

// Safe for use inside a double-quoted HTML attribute
function attr(text) {
  return String(text ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

// Make a non-button element (card) behave like a button for keyboard
// and screen-reader users: focusable, announced, Enter/Space activate it
function makeActivatable(el, label, onActivate) {
  el.tabIndex = 0;
  el.setAttribute("role", "button");
  if (label) el.setAttribute("aria-label", label);
  el.addEventListener("click", onActivate);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onActivate();
    }
  });
}

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function thumb(src, alt = "") {
  if (!src) return "";
  return `<img src="${src}" alt="${attr(alt)}" loading="lazy">`;
}

function mediaEl(src, alt = "") {
  if (!src) return "";
  const isVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);
  if (isVideo) {
    // Respect "reduce motion": no autoplay, and give the visitor controls instead
    const playback = prefersReducedMotion() ? "controls" : "autoplay";
    return `<video src="${src}" ${playback} muted loop playsinline aria-label="${attr(alt)}"></video>`;
  }
  return `<img src="${src}" alt="${attr(alt)}" loading="lazy">`;
}

/* Detail panel media — used only as a fallback for projects that still
   use the older single `media` field (no hero/highlights defined). */
function buildDetailMediaHTML(sel) {
  return sel.media
    ? `<div class="proj-detail-media">${mediaEl(sel.media, sel.name)}</div>`
    : `<div class="proj-detail-media"></div>`;
}

/* Stacked gallery — an ordered list of image/video paths (e.g. a
   video followed by a still) rendered one after another. Takes
   precedence over the single `media` field when present. */
function buildDetailGalleryHTML(gallery, name) {
  if (!gallery || !gallery.length) return "";
  const items = gallery
    .map(
      (src, i) =>
        `<div class="proj-gallery-item">${mediaEl(src, `${name} — ${/\.(mp4|webm|ogg)/i.test(src) ? "video" : "image"} ${i + 1}`)}</div>`,
    )
    .join("");
  return `<div class="proj-gallery">${items}</div>`;
}

/* Optional case-study context blurb — one or two sentences. */
function buildDetailContextHTML(context) {
  return context ? `<p class="proj-detail-context">${context}</p>` : "";
}

/* Universal device mockup shown at the very top of every UI/UX
   case study, before the description. */
function buildDetailMockupHTML(mockup, name) {
  return mockup
    ? `<div class="proj-mockup">${mediaEl(mockup, `${name} — device mockup`)}</div>`
    : "";
}

/* Optional playable embed — a poster button that swaps itself for a
   live iframe on click (so nothing loads until someone actually wants
   to play), plus a "play fullscreen" link as a backup for anyone on a
   small screen. Click handler is wired up separately, after the HTML
   is in the DOM — see renderCategoryPage(). */
function buildDetailEmbedHTML(embed) {
  if (!embed || !embed.url) return "";
  const ratio = embed.aspectRatio || "3 / 4";
  const posterStyle = embed.poster
    ? ` style="aspect-ratio:${ratio};background-image:url('${embed.poster}')"`
    : ` style="aspect-ratio:${ratio}"`;
  const label = embed.label || "play";
  return `
    <div class="proj-embed">
      <div class="embed-frame">
        <button class="embed-poster" type="button"${posterStyle}>
          <span class="embed-play-btn">${ICONS.play}<span>${label}</span></span>
        </button>
      </div>
      <a class="embed-fullscreen-link" href="${embed.url}" target="_blank" rel="noopener noreferrer">play fullscreen ↗</a>
    </div>
  `;
}

/* Alternating text + detail-crop rows — each pairs one real decision
   with a small proof image instead of a full page screenshot. `title`
   is optional (a short bold heading above the row's text). Shared by
   `highlights` (early in the page) and `walkthrough` (late in the
   page, for a final screen-by-screen breakdown) — same visual
   treatment, two different narrative slots. Rows animate into view on
   scroll via initHighlightAnimations(). */
function renderHighlightRows(items, modifier) {
  if (!items || !items.length) return "";
  const rows = items
    .map((h, i) => {
      const side = i % 2 === 0 ? "media-right" : "media-left";
      const titleHTML = h.title
        ? `<h3 class="proj-highlight-title">${h.title}</h3>`
        : "";
      return `
        <div class="proj-highlight ${side}">
          <div class="proj-highlight-text">
            ${titleHTML}
            <p>${h.text}</p>
          </div>
          <div class="proj-highlight-media">
            <img src="${h.media}" alt="${h.alt ?? ""}" loading="lazy">
          </div>
        </div>
      `;
    })
    .join("");
  const wrapperClass = modifier ? `proj-highlights ${modifier}` : "proj-highlights";
  return `<div class="${wrapperClass}">${rows}</div>`;
}

function buildDetailHighlightsHTML(highlights) {
  return renderHighlightRows(highlights);
}

function buildDetailWalkthroughHTML(walkthrough) {
  // Walkthrough media are full phone screens (portrait), not landscape
  // detail crops — capped/contained via .proj-walkthrough in CSS so a
  // tall screenshot doesn't blow out the row height.
  return renderHighlightRows(walkthrough, "proj-walkthrough");
}

/* Optional palette swatch strip. */
function buildDetailPaletteHTML(palette) {
  if (!palette || !palette.length) return "";
  const swatches = palette
    .map(
      (c) => `
      <div class="palette-swatch">
        <span class="palette-color" style="background:${c.hex}"></span>
        <span class="palette-label">${c.name}<br>${c.hex}</span>
      </div>`,
    )
    .join("");
  return `
    <div class="proj-palette">
      <h3 class="proj-subheading">color palette</h3>
      <div class="palette-row">${swatches}</div>
    </div>
  `;
}

/* Universal font-system section, bottom of every UI/UX case study.
   Kept general — a handful of type roles, not a full scale. Each
   entry can optionally specify `family` (CSS font-family) so the
   "Ab" sample renders in the project's real typeface. */
const SPECIMEN_FONTS = {
  "DM Sans": "DM+Sans:wght@400;500",
  "Cormorant Garamond": "Cormorant+Garamond:wght@400;500",
  "Space Grotesk": "Space+Grotesk:wght@700",
  "IBM Plex Sans": "IBM+Plex+Sans:wght@400",
  "IBM Plex Mono": "IBM+Plex+Mono:wght@500",
  "Nunito Sans": "Nunito+Sans:wght@400;700",
};
const loadedSpecimenFonts = new Set();

// Pull in a Google font the first time a specimen card needs it
function loadSpecimenFont(family) {
  const name = family.split(",")[0].replace(/['"]/g, "").trim();
  const spec = SPECIMEN_FONTS[name];
  if (!spec || loadedSpecimenFonts.has(name)) return;
  loadedSpecimenFonts.add(name);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${spec}&display=swap`;
  document.head.appendChild(link);
}

function buildDetailTypographyHTML(typography) {
  if (!typography || !typography.length) return "";
  typography.forEach((t) => t.family && loadSpecimenFont(t.family));
  const cards = typography
    .map((t) => {
      const styleAttr = t.family
        ? ` style="font-family:${t.family};font-weight:${t.weight ?? 400}"`
        : ` style="font-weight:${t.weight ?? 400}"`;
      return `
        <div class="type-card">
          <div class="type-sample"${styleAttr}>Ab</div>
          <div class="type-label">${t.label}<br><span>${t.weight ?? ""}</span></div>
        </div>
      `;
    })
    .join("");
  return `
    <div class="proj-typography">
      <h3 class="proj-subheading">font system</h3>
      <div class="type-row">${cards}</div>
    </div>
  `;
}

/* Optional 2x2-ish grid of short labeled Q&A blocks near the top of
   a research-heavy case study (what is it / how it works / role / goal). */
function buildDetailOverviewHTML(overview) {
  if (!overview || !overview.length) return "";
  const items = overview
    .map((o) => {
      const textHTML = o.text ? `<p>${o.text}</p>` : "";
      const listHTML =
        o.items && o.items.length
          ? `<ul class="overview-list">${o.items.map((i) => `<li>${i}</li>`).join("")}</ul>`
          : "";
      return `
      <div class="overview-item">
        <h3 class="proj-subheading">${o.label}</h3>
        ${textHTML}
        ${listHTML}
      </div>`;
    })
    .join("");
  return `<div class="proj-overview">${items}</div>`;
}

/* Optional row of colored pill steps (e.g. a design process). */
function buildDetailProcessHTML(process) {
  if (!process || !process.length) return "";
  const pills = process
    .map(
      (p) =>
        `<span class="process-pill" style="background:${p.color}">${p.label}</span>`,
    )
    .join("");
  return `<div class="proj-process">${pills}</div>`;
}

/* Optional research/discovery section — competitive analysis and
   user-interview findings side by side, plus a pull quote. */
function buildDetailResearchHTML(research) {
  if (!research) return "";
  const findingsHTML =
    research.findings && research.findings.length
      ? `<ul class="research-findings">${research.findings
          .map((f) => `<li>${f}</li>`)
          .join("")}</ul>`
      : "";
  const quoteHTML = research.quote
    ? `<blockquote class="research-quote">${research.quote}</blockquote>`
    : "";
  return `
    <div class="proj-research">
      <h3 class="proj-subheading">research &amp; discovery</h3>
      <div class="research-grid">
        <div class="research-col">
          <p>${research.competitive}</p>
        </div>
        <div class="research-col">
          <p>${research.interviewsIntro}</p>
          ${findingsHTML}
        </div>
      </div>
      ${quoteHTML}
    </div>
  `;
}

/* Optional full persona cards — photo, quote, demographics (flexible
   `meta` label/value pairs, since each project tracks different
   things), goals, a labeled usage-level bar (`deviceUsageLabel`
   defaults to "Device usage"), motivations, frustrations, and
   personality tags. Motivations/frustrations only render if that
   project's persona actually has them. */
function buildDetailPersonasHTML(personas) {
  if (!personas || !personas.length) return "";
  const cards = personas
    .map((p) => {
      const list = (items) =>
        (items || []).map((i) => `<li>${i}</li>`).join("");
      const tags = (p.tags || [])
        .map(
          (t) =>
            `<span class="persona-tag" style="background:${p.color}">${t}</span>`,
        )
        .join("");
      const metaHTML = (p.meta || [])
        .map((m) => `<div><strong>${m.label}:</strong> ${m.value}</div>`)
        .join("");
      const device = (p.deviceUsage || [])
        .map((d) => {
          const dots = Array.from({ length: 5 }, (_, i) => {
            const filled = i < d.level;
            const style = filled
              ? ` style="background:${p.color};border-color:${p.color}"`
              : "";
            return `<span class="dot"${style}></span>`;
          }).join("");
          return `<div class="device-row"><span>${d.label}</span><span class="device-dots" role="img" aria-label="${d.level} out of 5">${dots}</span></div>`;
        })
        .join("");

      const secondRowCols = [];
      if (p.motivations && p.motivations.length) {
        secondRowCols.push(
          `<div><h4>Motivations</h4><ul>${list(p.motivations)}</ul></div>`,
        );
      }
      if (p.frustrations && p.frustrations.length) {
        secondRowCols.push(
          `<div><h4>Frustrations</h4><ul>${list(p.frustrations)}</ul></div>`,
        );
      }
      const secondRowHTML = secondRowCols.length
        ? `<div class="persona-cols${secondRowCols.length === 1 ? " single" : ""}">${secondRowCols.join("")}</div>`
        : "";

      return `
        <div class="persona-card">
          <div class="persona-photo">${mediaEl(p.photo, `User persona: ${p.name}`)}</div>
          <div class="persona-body">
            <blockquote class="persona-quote">&ldquo;${p.quote}&rdquo;</blockquote>
            <h3 class="persona-name" style="text-decoration-color:${p.color}">${p.name}</h3>
            <div class="persona-meta">${metaHTML}</div>
            <div class="persona-cols">
              <div>
                <h4>Goals and needs</h4>
                <ul>${list(p.goals)}</ul>
              </div>
              <div>
                <h4>${p.deviceUsageLabel ?? "Device usage"}</h4>
                ${device}
              </div>
            </div>
            ${secondRowHTML}
            <div class="persona-tags">${tags}</div>
          </div>
        </div>
      `;
    })
    .join("");
  return `<div class="proj-personas">${cards}</div>`;
}

/* Optional labeled supporting images — sitemaps, wireframes, mood
   boards, UI-kit sheets, photography direction, etc. — stacked with
   a heading and optional caption above each. */
function buildDetailArtifactsHTML(artifacts) {
  if (!artifacts || !artifacts.length) return "";
  const items = artifacts
    .map(
      (a) => `
      <div class="proj-artifact">
        <h3 class="proj-subheading">${a.label}</h3>
        ${a.caption ? `<p class="proj-artifact-caption">${a.caption}</p>` : ""}
        <div class="proj-artifact-media">${mediaEl(a.image, a.label)}</div>
      </div>`,
    )
    .join("");
  return `<div class="proj-artifacts">${items}</div>`;
}

/* Optional voice statement plus a row of tag pills. */
function buildDetailToneHTML(toneOfVoice) {
  if (!toneOfVoice) return "";
  const bg = toneOfVoice.color || "var(--card)";
  const fg = toneOfVoice.color ? "#111" : "var(--fg)";
  const tags = (toneOfVoice.tags || [])
    .map(
      (t) =>
        `<span class="tone-tag" style="background:${bg};color:${fg}">${t}</span>`,
    )
    .join("");
  return `
    <div class="proj-tone">
      <h3 class="proj-subheading">language &amp; tone of voice</h3>
      <p>${toneOfVoice.text}</p>
      <div class="tone-tags">${tags}</div>
    </div>
  `;
}

/* Fades/slides each .proj-highlight row in as it enters the viewport.
   Re-run after every detail-panel render since the DOM is rebuilt. */
function initHighlightAnimations() {
  const rows = document.querySelectorAll(".proj-highlight");
  if (!rows.length) return;

  if (!("IntersectionObserver" in window)) {
    rows.forEach((row) => row.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 },
  );

  rows.forEach((row) => observer.observe(row));
}

/* Detail panel links — renders "view live site" / "view code"
   buttons when the project has a `links` object. */
function buildDetailLinksHTML(links) {
  if (!links) return "";
  const buttons = [];
  if (links.live)
    buttons.push(
      `<a class="btn-detail btn-primary" href="${links.live}" target="_blank" rel="noopener noreferrer">view live site</a>`,
    );
  if (links.repo)
    buttons.push(
      `<a class="btn-detail btn-outline" href="${links.repo}" target="_blank" rel="noopener noreferrer">view code</a>`,
    );
  return buttons.length
    ? `<div class="proj-detail-links">${buttons.join("")}</div>`
    : "";
}

/* ─── BUILD SIDEBAR ─────────────────────────────── */
function buildSidebar() {
  const { owner } = DATA;
  const sidebar = document.getElementById("sidebar");

  // Logo
  const logoEl = document.createElement("div");
  logoEl.className = "s-logo";
  logoEl.innerHTML = `<img src="./assets/logo.svg" alt="Larisa Kampe"><button type="button" class="s-burger" aria-label="Open menu" aria-expanded="false" aria-controls="sidebar"><span></span><span></span><span></span></button>`;
  const burger = logoEl.querySelector(".s-burger");

  // Mobile menu open/close — keeps the burger's ARIA state in sync
  let scrollAtOpen = 0;
  const setNavOpen = (open) => {
    if (open) scrollAtOpen = window.scrollY;
    sidebar.classList.toggle("nav-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    syncMenuInert();
  };
  const isMobile = () => window.innerWidth <= 768;

  // On mobile the collapsed menu is only clipped, not removed — make its
  // links unreachable for keyboard and screen readers until it's opened
  const syncMenuInert = () => {
    const hidden = isMobile() && !sidebar.classList.contains("nav-open");
    [navEl, socialEl].forEach((el) => (el.inert = hidden));
  };
  window.addEventListener("resize", syncMenuInert);

  logoEl.addEventListener("click", () => {
    if (isMobile()) {
      setNavOpen(!sidebar.classList.contains("nav-open"));
    } else {
      navigate("home");
    }
  });
  sidebar.appendChild(logoEl);

  // Close the open menu on a tap outside it, on Escape, or once the page scrolls
  document.addEventListener("click", (e) => {
    if (sidebar.classList.contains("nav-open") && !sidebar.contains(e.target))
      setNavOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("nav-open")) {
      setNavOpen(false);
      burger.focus();
    }
  });
  window.addEventListener(
    "scroll",
    () => {
      if (
        sidebar.classList.contains("nav-open") &&
        Math.abs(window.scrollY - scrollAtOpen) > 40
      )
        setNavOpen(false);
    },
    { passive: true },
  );

  // Nav list
  const navEl = document.createElement("ul");
  navEl.className = "s-nav";

  const navItems = [
    { key: "home", label: "home" },
    ...DATA.categories.map((c) => ({ key: c.key, label: c.title })),
    { key: "about-me", label: "about me" },
  ];

  // Real links, so they're keyboard-focusable and open in a new tab on
  // middle-click; a plain click is handled here without a page reload
  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "s-item";
    a.href = "#" + item.key;
    a.dataset.page = item.key;
    a.innerHTML = `${icon(item.key)}<span class="s-label">${item.label}</span>`;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(item.key);
      if (isMobile()) setNavOpen(false);
    });
    li.appendChild(a);
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
    { key: "email", label: "email", href: owner.social.email },
    { key: "cv", label: "cv", href: owner.social.cv },
  ];

  socials.forEach((s) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = s.href;
    a.rel = "noopener noreferrer";
    const newTab = !s.href.startsWith("mailto");
    if (newTab) a.target = "_blank";
    a.innerHTML = `${icon(s.key)}<span class="s-label">${s.label}${newTab ? '<span class="visually-hidden"> (opens in a new tab)</span>' : ""}</span>`;
    a.addEventListener("click", () => {
      if (isMobile()) setNavOpen(false);
    });
    li.appendChild(a);
    socialEl.appendChild(li);
  });

  sidebar.appendChild(socialEl);
  syncMenuInert();
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
    <h1 class="page-title" tabindex="-1">${owner.name}</h1>
    <p class="page-desc">${owner.tagline}</p>
  `;

  // Skill cards grid
  const skillsGrid = document.createElement("div");
  skillsGrid.className = "skills-grid";
  categories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = cat.title.replace(" ", "<br>");
    makeActivatable(card, `${cat.title} projects`, () => navigate(cat.key));
    skillsGrid.appendChild(card);
  });
  page.appendChild(skillsGrid);

  // Featured projects (4-col grid, matches every other project grid site-wide)
  const featGrid = document.createElement("div");
  featGrid.className = "proj-grid cols-4";
  featured.forEach((f) => {
    const cat = categories.find((c) => c.key === f.category);
    const proj = cat?.projects.find((p) => p.id === f.projectId);
    if (!cat || !proj) return;
    const card = document.createElement("div");
    card.className = "proj-card";
    card.innerHTML = `
      <div class="proj-thumb">${thumb(proj.image, `${proj.name} — ${proj.short}`)}</div>
      <div class="proj-meta">
        <div class="proj-name">${proj.name}</div>
        <div class="proj-short">${proj.short}</div>
      </div>
    `;
    makeActivatable(card, `${proj.name} — ${proj.short}`, () =>
      navigate(f.category),
    );
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
function renderCategoryPage(key, scrollToProject = false) {
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

  page.innerHTML = "";

  // Intro: title, description, project grid — keeps today's full-width top layout
  const intro = document.createElement("div");
  intro.className = "page-intro";
  intro.innerHTML = `
    <h1 class="page-title" tabindex="-1">${cat.title}</h1>
    <p class="page-desc">${cat.description}</p>
  `;

  // Project grid
  const grid = document.createElement("div");
  grid.className = `proj-grid cols-${cat.cols}`;

  cat.projects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "proj-card" + (proj.id === selId ? " selected" : "");
    card.innerHTML = `
      <div class="proj-thumb">${thumb(proj.image, `${proj.name} — ${proj.short}`)}</div>
      <div class="proj-meta">
        <div class="proj-name">${proj.name}</div>
        <div class="proj-short">${proj.short}</div>
      </div>
    `;
    if (proj.id === selId) card.setAttribute("aria-current", "true");
    makeActivatable(card, `${proj.name} — ${proj.short}`, () => {
      state.selectedProject[key] = proj.id;
      renderCategoryPage(key, true);
      focusProject(key);
    });
    grid.appendChild(card);
  });

  intro.appendChild(grid);
  page.appendChild(intro);

  // Project: detail panel, centered independently of the intro above
  const projectSection = document.createElement("div");
  projectSection.className = "page-project";

  const detail = document.createElement("div");
  detail.className = "proj-detail";

  const mockupHTML = buildDetailMockupHTML(sel.mockup, sel.name);
  const contextHTML = buildDetailContextHTML(sel.context);
  const embedHTML = buildDetailEmbedHTML(sel.embed);
  const highlightsHTML = buildDetailHighlightsHTML(sel.highlights);
  const galleryHTML = buildDetailGalleryHTML(sel.gallery, sel.name);
  const overviewHTML = buildDetailOverviewHTML(sel.overview);
  const processHTML = buildDetailProcessHTML(sel.process);
  const researchHTML = buildDetailResearchHTML(sel.research);
  const personasHTML = buildDetailPersonasHTML(sel.personas);
  const artifactsHTML = buildDetailArtifactsHTML(sel.artifacts);
  const paletteHTML = buildDetailPaletteHTML(sel.palette);
  const typographyHTML = buildDetailTypographyHTML(sel.typography);
  const toneHTML = buildDetailToneHTML(sel.toneOfVoice);
  const walkthroughHTML = buildDetailWalkthroughHTML(sel.walkthrough);
  const linksHTML = buildDetailLinksHTML(sel.links);
  // Only fall back to the plain single-media block when a project has
  // neither a mockup, highlights, nor a gallery defined.
  const fallbackMediaHTML =
    sel.mockup ||
    (sel.highlights && sel.highlights.length) ||
    (sel.gallery && sel.gallery.length)
      ? ""
      : buildDetailMediaHTML(sel);

  detail.innerHTML = `
    <h2 class="proj-detail-title" tabindex="-1">${sel.name}</h2>
    ${mockupHTML}
    <p class="proj-detail-desc">${sel.description}</p>
    ${contextHTML}
    ${embedHTML}
    ${overviewHTML}
    ${processHTML}
    ${researchHTML}
    ${personasHTML}
    ${highlightsHTML}
    ${galleryHTML}
    ${fallbackMediaHTML}
    ${artifactsHTML}
    ${paletteHTML}
    ${typographyHTML}
    ${toneHTML}
    ${walkthroughHTML}
    ${linksHTML}
    <div class="proj-nav">
      <button class="nav-btn" id="prev-${key}" aria-label="Previous project"
        ${selIdx === 0 ? "disabled" : ""}>${ICONS.arrowLeft}</button>
      <span class="proj-count" aria-hidden="true">${selIdx + 1} / ${cat.projects.length}</span>
      <button class="nav-btn" id="next-${key}" aria-label="Next project"
        ${selIdx === cat.projects.length - 1 ? "disabled" : ""}>${ICONS.arrowRight}</button>
    </div>
  `;

  // Swap the embed poster for a live iframe on click — nothing loads
  // until the visitor actually asks to play.
  detail.querySelector(".embed-poster")?.addEventListener("click", (e) => {
    const frame = e.currentTarget.closest(".embed-frame");
    const iframe = document.createElement("iframe");
    iframe.src = sel.embed.url;
    iframe.loading = "lazy";
    iframe.title = sel.name;
    iframe.allow = "autoplay; fullscreen";
    iframe.allowFullscreen = true;
    iframe.style.aspectRatio = sel.embed.aspectRatio || "3 / 4";
    frame.replaceChildren(iframe);
  });

  // Attach nav button listeners
  detail.querySelector(`#prev-${key}`)?.addEventListener("click", () => {
    const idx = cat.projects.findIndex(
      (p) => p.id === state.selectedProject[key],
    );
    if (idx > 0) {
      state.selectedProject[key] = cat.projects[idx - 1].id;
      renderCategoryPage(key, "instant");
      focusProject(key, `prev-${key}`);
    }
  });

  detail.querySelector(`#next-${key}`)?.addEventListener("click", () => {
    const idx = cat.projects.findIndex(
      (p) => p.id === state.selectedProject[key],
    );
    if (idx < cat.projects.length - 1) {
      state.selectedProject[key] = cat.projects[idx + 1].id;
      renderCategoryPage(key, "instant");
      focusProject(key, `next-${key}`);
    }
  });

  // Swipe left/right on mobile to move between projects — reuses the
  // nav buttons so the disabled state at either end is respected.
  let touchStart = null;
  detail.addEventListener(
    "touchstart",
    (e) => {
      touchStart = null;
      if (window.innerWidth > 768 || e.touches.length !== 1) return;
      // Leave swipes inside horizontally scrollable content (galleries etc.) alone
      for (let el = e.target; el && el !== detail; el = el.parentElement) {
        const ox = getComputedStyle(el).overflowX;
        if (
          (ox === "auto" || ox === "scroll") &&
          el.scrollWidth > el.clientWidth
        )
          return;
      }
      touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    },
    { passive: true },
  );
  detail.addEventListener(
    "touchend",
    (e) => {
      if (!touchStart) return;
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      touchStart = null;
      // Mostly-horizontal, deliberate swipes only
      if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      const btn = detail.querySelector(
        dx < 0 ? `#next-${key}` : `#prev-${key}`,
      );
      if (btn && !btn.disabled) btn.click();
    },
    { passive: true },
  );

  projectSection.appendChild(detail);
  page.appendChild(projectSection);

  // Picking a card from the grid jumps straight to its detail panel —
  // otherwise it's easy to not notice the page scrolled past the top.
  // Prev/next (buttons or swipe) pass "instant" so the new project starts
  // at its title rather than wherever the previous one was scrolled to.
  if (scrollToProject) {
    projectSection.scrollIntoView({
      behavior:
        scrollToProject === "instant" || prefersReducedMotion() ? "instant" : "smooth",
      block: "start",
    });
  }

  // Animate highlight rows in as they scroll into view
  initHighlightAnimations();

  if (state.currentPage === key) updatePageMeta();
}

// After the project panel is re-rendered, put focus somewhere sensible
// (the pressed nav button, or else the project title) and announce it
function focusProject(key, buttonId) {
  const cat = DATA.categories.find((c) => c.key === key);
  const idx = cat.projects.findIndex((p) => p.id === state.selectedProject[key]);
  const btn = buttonId && document.getElementById(buttonId);
  const target =
    btn && !btn.disabled
      ? btn
      : document.querySelector(`#page-${key} .proj-detail-title`);
  target?.focus({ preventScroll: true });
  announce(`${cat.projects[idx].name}, project ${idx + 1} of ${cat.projects.length}`);
}

/* ─── ABOUT ME PAGE ─────────────────────────────── */
function buildAboutPage() {
  const { owner } = DATA;
  const page = document.createElement("section");
  page.className = "page";
  page.id = "page-about-me";

  page.innerHTML = `
    <h1 class="page-title" tabindex="-1">about me</h1>
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
    const current = item.dataset.page === pageKey;
    item.classList.toggle("active", current);
    if (current) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });

  state.currentPage = pageKey;

  if (pushHistory) {
    history.pushState({ page: pageKey }, "", "#" + pageKey);
  }

  window.scrollTo({ top: 0, behavior: "instant" });
  updatePageMeta();

  // After a user-initiated page change, move focus to the new page's
  // heading so screen-reader and keyboard users start at the top of it
  if (pushHistory) target?.querySelector(".page-title")?.focus({ preventScroll: true });
}

// Polite screen-reader announcement (e.g. "Pawzy, project 5 of 5")
function announce(message) {
  const el = document.getElementById("a11y-status");
  if (!el) return;
  el.textContent = "";
  requestAnimationFrame(() => (el.textContent = message));
}

/* ─── CLIENTS CAROUSEL ──────────────────────────── */
function updateClientsCarousel() {
  const inner = document.getElementById("clients-inner");
  const track = document.getElementById("clients-track");
  if (!inner || !track) return;

  const totalClients = DATA.clients.length;
  const visible = getClientsVisible();
  const gap = 14;

  // Clamp offset in case the visible count changed (e.g. on resize)
  const max = Math.max(0, totalClients - visible);
  state.clientsOffset = Math.max(0, Math.min(max, state.clientsOffset));

  // Calculate card width based on track and visible count
  const trackW = track.offsetWidth;
  const cardW = (trackW - gap * (visible - 1)) / visible;

  // Apply width to each client card
  inner.querySelectorAll(".client-card").forEach((card) => {
    card.style.width = cardW + "px";
  });

  const shift = state.clientsOffset * (cardW + gap);
  inner.style.transform = `translateX(-${shift}px)`;

  const prevBtn = document.getElementById("clients-prev");
  const nextBtn = document.getElementById("clients-next");
  if (prevBtn) prevBtn.disabled = state.clientsOffset === 0;
  if (nextBtn) nextBtn.disabled = state.clientsOffset >= max;
}

function clientsScroll(dir) {
  const max = Math.max(0, DATA.clients.length - getClientsVisible());
  state.clientsOffset = Math.max(0, Math.min(max, state.clientsOffset + dir));
  updateClientsCarousel();
}

/* ─── SEO: PAGE TITLE, DESCRIPTION, STRUCTURED DATA ── */
const SITE_NAME = "Larisa Kampe";

// Plain text, trimmed to a search-snippet-friendly length
function snippet(text, max = 155) {
  const plain = String(text ?? "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  return plain.length > max ? plain.slice(0, max - 1).replace(/\s+\S*$/, "") + "…" : plain;
}

function setMeta(selector, value) {
  document.querySelector(selector)?.setAttribute("content", value);
}

// Keep the tab title / description / share tags in step with what's on screen
function updatePageMeta() {
  const { owner, categories } = DATA;
  const key = state.currentPage;
  const cat = categories.find((c) => c.key === key);
  let title = `${SITE_NAME} — Web Developer & UI/UX Designer`;
  let desc = owner.tagline;

  if (cat) {
    const proj = cat.projects.find((p) => p.id === state.selectedProject[key]);
    title = proj
      ? `${proj.name} — ${cat.title} project | ${SITE_NAME}`
      : `${cat.title} projects | ${SITE_NAME}`;
    desc = proj ? proj.description : cat.description;
  } else if (key === "about-me") {
    title = `About me | ${SITE_NAME}`;
    desc = owner.about[0];
  }

  desc = snippet(desc);
  document.title = title;
  setMeta('meta[name="description"]', desc);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', desc);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', desc);
}

// Every project as a CreativeWork, linked to the Person declared in index.html
function injectProjectStructuredData() {
  const abs = (path) => new URL(path, location.href).href;
  const items = DATA.categories.flatMap((cat) =>
    cat.projects.map((p) => {
      const work = {
        "@type": "CreativeWork",
        name: p.name,
        description: snippet(p.description, 300),
        genre: cat.title,
        creator: { "@id": `${location.origin}/#person` },
      };
      if (p.image) work.image = abs(p.image);
      if (p.links?.live) work.url = p.links.live;
      return work;
    }),
  );
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} — portfolio projects`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item,
    })),
  });
  document.head.appendChild(script);
}

/* ─── SCROLL TO TOP ─────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "instant" : "smooth" });
    // Bring keyboard focus back to the top too, not just the view
    document
      .querySelector(".page.active .page-title")
      ?.focus({ preventScroll: true });
  });
}

// The skip link targets #main, which the hash router would otherwise treat
// as a page name — handle it here and just move focus to the content
function initSkipLink() {
  document.querySelector(".skip-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    const heading = document.querySelector(".page.active .page-title");
    (heading || document.getElementById("main")).focus();
  });
}

/* ─── INIT ───────────────────────────────────────── */
function init() {
  buildSidebar();
  buildPages();
  initScrollTop();
  initSkipLink();
  injectProjectStructuredData();

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
