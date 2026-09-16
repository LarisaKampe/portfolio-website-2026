const DATA = {
  owner: {
    name: "larisa kampe",
    tagline:
      "Creative Web Developer and Designer dedicated to bridging the gap between aesthetics and functionality. By blending technical frontend expertise with a foundation in UI/UX, I build seamless, detail-oriented digital products that look as good as they perform.",
    about: [
      "I'm a designer who speaks code and a developer who values whitespace. Having worked across graphic design, UI/UX, and frontend development, I've learned that the best results happen when technical constraints and creative vision move in sync. I enjoy taking complex ideas and turning them into polished, responsive realities that help brands connect with their audience.",
      "When I'm not at my desk you'll likely find me in my workshop building furniture for my home or finishing a new course. There's something deeply satisfying about the process of building things from scratch.",
    ],
    contact: {
      intro: [
        "I'm always down to talk about design, code, or woodworking.",
        "Drop me an email—I'd love to hear what you're working on.",
      ],
      email: "larisa.kampe@gmail.com",
    },
    social: {
      linkedin: "https://www.linkedin.com/in/larisa-kampe",
      github: "https://github.com",
      email: "mailto:larisa.kampe@gmail.com",
      cv: "./assets/Larisa_Kampe_CV.pdf",
    },
  },

  /* ─── HOME FEATURED PROJECTS ───────────────────────────────
     Pick any 3 projects from any category to feature on the
     homepage grid. Use the category key + project id.        */
  featured: [
    { category: "graphic-design", projectId: 1 },
    { category: "ui-ux", projectId: 1 },
    { category: "code", projectId: 1 },
  ],

  /* ─── CLIENTS ──────────────────────────────────────────────
     Add as many clients as you like. image is optional.      */
  clients: [
    { name: "Visa", image: "./assets/clients/Visa logo.svg" },
    { name: "Philip Morris", image: "./assets/clients/Philip Morris logo.svg" },
    { name: "Nestle", image: "./assets/clients/Nestle logo.svg" },
    { name: "Eurobank Direktna", image: "./assets/clients/Eurobanka logo.svg" },
    { name: "Air Serbia", image: "./assets/clients/AirSerbia logo.svg" },
    { name: "Doncafe", image: "./assets/clients/Doncafe logo.svg" },
    { name: "AquaViva", image: "./assets/clients/AquaViva logo.svg" },
    { name: "Knjaz Milos", image: "./assets/clients/knjaz logo.svg" },
    { name: "Aik Bank", image: "./assets/clients/AikBank logo.svg" },
  ],

  /* ─── CATEGORIES ───────────────────────────────────────────
     key        — matches the URL hash and sidebar data-page
     title       — displayed as the page heading
     description — short blurb under the heading
     cols        — number of columns in the project grid (3 or 4)
     projects    — list of projects in this category

     Each project:
       id          — unique number within the category
       name        — project title
       short       — one-line subtitle shown on the card
       description — longer text shown in the detail panel
       image       — path/URL for the thumbnail (leave "" for placeholder)
       media       — path/URL for a single large detail image/video
                     (leave "" for placeholder; ignored if gallery is set)
       gallery     — optional array of image/video paths shown as a
                     stacked gallery in the detail panel instead of
                     a single media item
       links       — optional { live, repo } object rendered as
                     buttons in the detail panel

     Optional case-study fields (all UI/UX projects — early slots):
       context     — one-paragraph project blurb shown under the description
       mockup      — path for a device mockup image/video shown up top
       overview    — array of { label, text?, items? } shown as a short
                     grid of blocks (e.g. what is it / how it works /
                     role / goal, or a bullet list of needs) — text is a
                     paragraph, items is an optional bullet list, either
                     or both may be set
       process     — array of { label, color } shown as colored pill steps
       research    — { competitive, interviewsIntro, findings[], quote }
                     rendered as a research/discovery section
       personas    — array of persona objects rendered as full cards:
                     { name, quote, meta: [{label,value}], photo, color,
                       goals[], deviceUsageLabel? (defaults to "Device
                       usage"), deviceUsage: [{label,level}] (level 0-5),
                       motivations[]?, frustrations[]?, tags[] } — meta
                     holds whatever demographic fields fit the project
                     (age/location/job, etc.); motivations/frustrations
                     are optional and only render if present
       highlights  — array of { text, media, alt, title? } shown as
                     alternating text/image rows early in the page —
                     each pairs one real decision with a proof crop

     Optional case-study fields (late slots, after palette/typography):
       artifacts   — array of { label, image, caption? } shown as labeled
                     supporting images (sitemaps, wireframes, mood boards,
                     UI-kit sheets, photography direction, etc.)
       palette     — array of { hex, name } shown as color swatches
       typography  — array of { label, weight, family } shown as type
                     specimen cards
       toneOfVoice — { text, tags[], color? } shown as a voice statement
                     plus a row of tag pills
       walkthrough — same shape as `highlights`, rendered later in the
                     page — for a final screen-by-screen breakdown
  */
  categories: [
    {
      key: "ui-ux",
      title: "ui/ux",
      description:
        "Creative Web Developer and Designer dedicated to bridging the gap between aesthetics and functionality. By blending technical frontend expertise with a foundation in UI/UX, I build seamless, detail-oriented digital products that look as good as they perform.",
      cols: 4,
      projects: [
        {
          id: 1,
          name: "BizUp",
          short: "business finance — web design",
          description:
            "A ground-up design system and landing-page build for a business-finance brand — color system, typography, component library, and five key pages: home, offer finance, resources, careers, and partner. Designed in Figma and built as a React 18 + Tailwind CSS v3 SPA with Vite and React Router v6, deployed on Netlify.",
          image: "./assets/thumbnails/bizup-thumbnail.png", // PLACEHOLDER — 1200x900, 4:3

          context:
            "BizUp is a self-directed transformation project — I took a business-finance brand concept and rebuilt its landing experience from the ground up, from a full design system in Figma to a working, deployed React build. The goal was to practice owning a product experience end to end, not just a single page.",

          // Universal for every UI/UX case study — a laptop + mobile
          // device mockup of the finished design, shown before the
          // description. Recommended export: ~2160x1080 (2:1 ratio) —
          // this file already matches, just drop it in as-is.
          mockup: "./assets/projects/ui-ux/bizup/bizup-mockup.png",

          // Each highlight pairs one real decision with a small detail crop
          // that proves it — not a full page screenshot.
          highlights: [
            {
              text: "Dark navy carries the weight — stability, trust, the seriousness a finance product needs. Cyan is reserved entirely for anything clickable, so no matter how dense a section gets, your eye always knows where to act.",
              media:
                "./assets/projects/ui-ux/bizup/bizup-detail-cta-buttons.png", // PLACEHOLDER — crop of hero CTA buttons
              alt: "Primary and secondary CTA buttons in cyan against the dark navy hero",
            },
            {
              text: "Lime green never decorates \u2014 it appears in exactly one place: the final call-to-action banner. Scarcity is what makes it feel urgent instead of just loud.",
              media:
                "/assets/projects/ui-ux/bizup/bizup-detail-lime-banner.png", // PLACEHOLDER — crop of the lime CTA banner
              alt: "Lime green 'We Are Ready When You Are' conversion banner",
            },
            {
              text: "This card is the one piece of real product logic on the site, so it repeats untouched everywhere it appears. Repetition of a real number builds trust faster than repetition of copy ever could.",
              media: "./assets/projects/ui-ux/bizup/bizup-hero-card.png", // PLACEHOLDER — crop of the Example Funding card
              alt: "Example Funding card showing $150,000 repaid via 10% of daily card sales",
            },
            {
              text: "Most small-business owners would realistically discover and apply for funding from their phone, not a laptop \u2014 so the mobile layout came first, and desktop is the expanded version, not the default one.",
              media: "./assets/projects/ui-ux/bizup/bizup-homepage mobile.png", // PLACEHOLDER — crop of mobile hero
              alt: "Mobile hero and application flow",
            },
          ],

          palette: [
            { hex: "#052235", name: "Dark Navy" },
            { hex: "#0FB9EE", name: "Cyan / Teal" },
            { hex: "#CCFF00", name: "Lime Green" },
            { hex: "#F5F5F4", name: "Off White" },
            { hex: "#A1A1A2", name: "Light Gray" },
          ],

          // Universal section, bottom of every UI/UX case study.
          // Keep it general — 3-4 font roles, not a full type scale.
          // TODO: replace "family" with the real font name(s) used on
          // BizUp so the sample actually renders in the right typeface.
          typography: [
            { label: "Main Tagline", weight: "Bold", family: "" },
            { label: "Tagline", weight: "Semibold", family: "" },
            { label: "Paragraph", weight: "Medium", family: "" },
            { label: "Body / General", weight: "Regular", family: "" },
          ],

          links: { live: "https://bizup-react.netlify.app/" },
        },
        {
          id: 2,
          name: "Pulse",
          short: "landing page — web design",
          description:
            "A conversion-focused landing page for an AI front-desk tool built for physical therapy and wellness clinics — lead capture, automated follow-up, and scheduling, positioned to replace hiring another front-desk hire.",
          image: "./assets/thumbnails/pulse-thumbnail.png", // PLACEHOLDER — 1200x900, 4:3
          context:
            "Pulse is a self-directed practice project \u2014 I designed and built a landing page from scratch for a fictional AI front-desk product aimed at physical therapy and wellness clinics, treating it as a full landing-page campaign: positioning, copy, IA, and pricing structure, not just visual design. The core challenge was selling a fairly technical idea \u2014 AI answering calls and texts on a clinic's behalf \u2014 to a buyer who's probably never bought SaaS before, which meant building trust fast without leaning on jargon or a wall of screenshots.",
          // Universal for every UI/UX case study — see BizUp entry for
          // sizing guidance (~2160x1080, 2:1 ratio).
          mockup: "./assets/projects/ui-ux/pulse/pulse-mockup.png", // PLACEHOLDER

          highlights: [
            {
              text: "The page opens by naming the problem, not the product \u2014 cold leads, dropped follow-ups, revenue that swings with who remembered to call back. Four specific pains, stated before a single feature is shown, so the reader recognizes their own week before being sold anything.",
              media: "./assets/projects/ui-ux/pulse/four-cards.png", // PLACEHOLDER — crop of the 4 "behind the scenes" pain-point cards
              alt: "The four pain-point cards under 'Meanwhile, behind the scenes'",
            },
            {
              text: "Instead of static screenshots, each feature section embeds a live-feeling product moment directly in the copy \u2014 a real text exchange, a call transcript, a calendar filling itself. The visitor watches the product work mid-scroll instead of being told to imagine it.",
              media: "./assets/projects/ui-ux/pulse/ai bot chat.png", // PLACEHOLDER — crop of the AI text responder chat bubble mockup
              alt: "Embedded chat mockup showing the AI text responder answering a lead",
            },
            {
              text: "Every feature name is a verb \u2014 Capture, Answer, Schedule, Track, Convert \u2014 and maps directly back to one of the four stated pains. That symmetry keeps a five-part feature section feeling tight instead of like a checklist.",
              media: "./assets/projects/ui-ux/pulse/numbered-features.png", // PLACEHOLDER — crop showing the numbered CAPTURE/ANSWER/SCHEDULE feature labels
              alt: "Numbered feature section labels: Capture, Answer, Schedule",
            },
            {
              text: "Three pricing tiers that are nearly identical except for how usage is billed, with the middle option flagged 'Most popular' to anchor the decision. For a buyer who's never purchased SaaS before, fewer real choices means less chance of walking away undecided.",
              media: "./assets/projects/ui-ux/pulse/pricing.png", // PLACEHOLDER — crop of the pricing table with the "Most popular" tier
              alt: "Three-tier pricing table with the middle plan marked Most Popular",
            },
          ],

          // Real palette, pulled from the live build's stylesheet.
          palette: [
            { hex: "#FF9D00", name: "Amber — primary accent" },
            { hex: "#3E8563", name: "Muted Green" },
            { hex: "#73FFB7", name: "Mint — bright accent" },
            { hex: "#1D2B24", name: "Deep Forest — dark" },
            { hex: "#F1EFE6", name: "Off White" },
          ],

          // Real 3-role type system, pulled straight from the CSS
          // custom properties (--display, --body, --mono).
          typography: [
            {
              label: "Display",
              weight: "700",
              family: "'Space Grotesk', sans-serif",
            },
            {
              label: "Body",
              weight: "400",
              family: "'IBM Plex Sans', sans-serif",
            },
            {
              label: "Mono / Data",
              weight: "500",
              family: "'IBM Plex Mono', monospace",
            },
          ],

          links: { live: "https://lk-pulse.netlify.app/" },
        },
        {
          id: 3,
          name: "Furniture website",
          short: "furniture — web design",
          description:
            "A single-scroll landing site for a designer furniture brand — hero, a services carousel, an about section with video, customer reviews, a catalog carousel, and a closing call-to-action, all driven by one JSON content file. Built with vanilla HTML, CSS, and JavaScript and deployed on Netlify.",
          image: "./assets/thumbnails/furniture-thumbnail.png", // PLACEHOLDER — 1200x900, 4:3

          // TODO: confirm whether this went through Figma first (or was
          // designed directly in the browser) so this reads like BizUp/Pulse's line.
          context:
            "Balance is a self-directed practice project — a one-page site for a fictional designer-furniture brand, built the same way this portfolio is: plain HTML/CSS/JS pulling every section's copy and images from a single content.json file instead of hardcoding them into the markup. The goal was a confident single scroll, no multi-page navigation, leaning on warm lifestyle photography to do most of the selling.",

          // Universal for every UI/UX case study — see BizUp entry for
          // sizing guidance (~2160x1080, 2:1 ratio).
          mockup: "./assets/projects/ui-ux/furniture/furniture-mockup.png", // PLACEHOLDER

          // Each highlight pairs one real decision with a small detail crop
          // that proves it — not a full page screenshot.
          highlights: [
            {
              text: "The hero pairs a full-bleed, sunlit lifestyle photo with an oversized 'Balance' wordmark — clamped between 136px and 240px, set at 18% white opacity, pinned to the bottom-right corner. It reads as a watermark, not a headline, so the photography stays the focal point.",
              media:
                "./assets/projects/ui-ux/furniture/urniture-detail-hero-wordmark.png", // PLACEHOLDER — crop of the hero photo + translucent wordmark
              alt: "Oversized translucent 'Balance' wordmark over the hero photograph",
            },
            {
              text: "Amber is reserved for exactly two things: primary buttons and the underline that sweeps in beneath a nav link on hover. Everything else — photography, type, section backgrounds — stays black, white, or gray, so the one warm color always reads as 'this is clickable.'",
              media:
                "./assets/projects/ui-ux/furniture/furniture-detail-accent-buttons.png", // PLACEHOLDER — crop of a primary button + nav hover underline
              alt: "Amber primary button and nav link hover underline against the neutral palette",
            },
            {
              text: "Services and catalog reuse the identical carousel pattern — numbered steps (01–04) acting as tabs, copy on one side, photography on the other. Repeating one interaction instead of inventing a second keeps a fairly long page feeling like one product, not two bolted together.",
              media:
                "./assets/projects/ui-ux/furniture/furniture-detail-carousel-steps.png", // PLACEHOLDER — crop of the step-numbered carousel nav
              alt: "Numbered 01–04 step navigation shared by the services and catalog carousels",
            },
            {
              text: "The about section swaps a real embedded video for a clickable thumbnail with a custom play button — keyboard-focusable, matching the product photography until it's actually pressed. The page stays light on load without the section feeling static.",
              media:
                "./assets/projects/ui-ux/furniture/furniture-detail-about-video.png", // PLACEHOLDER — crop of the about video thumbnail + play button
              alt: "About section video thumbnail with custom play button overlay",
            },
          ],

          // Real palette, pulled from the live build's :root custom properties.
          palette: [
            { hex: "#F5A623", name: "Amber — accent" },
            { hex: "#111111", name: "Black" },
            { hex: "#E7E7E7", name: "Off White" },
            { hex: "#888888", name: "Gray Text" },
            { hex: "#1A1A18", name: "Dark Section" },
          ],

          // Real 3-role type system, pulled straight from the CSS custom
          // properties (--font-display, --font-body, --font-hero).
          typography: [
            {
              label: "Display / Headings",
              weight: "600",
              family: "'Outfit', sans-serif",
            },
            {
              label: "Body / UI",
              weight: "400",
              family: "'DM Sans', sans-serif",
            },
            {
              label: "Accent Serif",
              weight: "400",
              family: "'Cormorant Garamond', serif",
            },
          ],

          links: { live: "https://lk-furniture.netlify.app/" },
        },
        {
          id: 4,
          name: "WTE",
          short: "recipe app — ux research & ui design",
          description:
            "A concept recipe and meal-planning app — full research, three user personas, information architecture, wireframes, a complete style guide, and final UI screens for a daily 'what should I cook' companion.",
          image: "./assets/thumbnails/wte-thumbnail.png",

          context:
            "WTE (What To Eat) is a self-directed concept project for a recipe and meal-planning app, built from an idea I genuinely wanted to exist. I owned the whole process end to end: competitive research, user interviews, three personas, information architecture, wireframes and usability testing, a full style guide, and final UI screens.",

          // Recommended export: ~2160x1080 (2:1 ratio).
          mockup: "./assets/projects/ui-ux/wte/wte-cover.jpg",

          overview: [
            {
              label: "What is WTE?",
              text: "WTE (What To Eat) is an app for anyone who needs a little extra inspiration for their daily meals and wants to make delicious homemade food — showing the tips and tricks great cooks use, and proving that cooking can be fun and easy.",
            },
            {
              label: "How does it work?",
              text: "Based on a user's cooking level and preferences, the app surfaces recipes and daily ideas, sortable by cuisine, difficulty, or meal type. It can suggest dishes from the groceries already on hand, build a shopping list, and walk through each recipe with step-by-step video or picture instructions — hands-free.",
            },
            {
              label: "My role",
              text: "This project is based on my own idea for an app I'd genuinely want to use. I was responsible for the whole process, from research and strategy through conception, creation, and product design.",
            },
            {
              label: "My goal",
              text: "To share my passion for cooking — proving that whether you just started or you're already great in the kitchen, there's always something new to learn, and an answer for the moments you just don't know what to eat.",
            },
          ],

          process: [
            { label: "Research & Discover", color: "#F54670" },
            { label: "Define & Synthesize", color: "#00E6C0" },
            { label: "Ideate & Create", color: "#E4BEFC" },
            { label: "Visual Design", color: "#FFD243" },
          ],

          research: {
            competitive:
              "I couldn't find a direct competitor. Most food apps are built around weight loss, protein, or macro-counted meals for a fitness lifestyle — or they're recipe-sharing apps, which is great, but doesn't help if you don't even know which recipe you're looking for. WTE is aimed at people who've just started living alone and don't have much cooking experience yet — following their cooking journey with tips for improvement, and a daily meal plan for three meals plus dessert, with written and video recipes when needed, so there's no need to think about what to eat today, or all week. It tracks groceries already at home, builds a shopping list, and calculates monthly food costs.",
            interviewsIntro:
              "Three user interviews were conducted to better understand participants' food, nutrition, and cooking choices.",
            findings: [
              "It should be a quick and easy meal",
              "Creating a shopping list leads to frustration",
              "Trying to balance every cooking step at once is impossible",
              "Tasty images matter — they're what make people want to try a recipe",
              "People want recipes that taste like their mom's cooking",
              "Grocery shopping across multiple stores for specialty products is exhausting",
            ],
            quote:
              "You don't have to cook fancy or complicated meals — just good food from fresh ingredients.",
          },

          // Three distinct audience profiles, defined from the interview
          // findings above, to keep design decisions aligned with real
          // user needs. Photos are placeholders — crop from the
          // persona-card exports and drop in as-is.
          personas: [
            {
              name: "Kristina",
              quote:
                "I consider cooking the base of self-care. Whole foods and natural vitamins are so important. Plus I am a proud vegetarian.",
              meta: [
                { label: "Age", value: "29" },
                { label: "Occupation", value: "Healthy lifestyle" },
                { label: "Location", value: "Belgrade, Serbia" },
                { label: "Job title", value: "Architect" },
              ],
              photo: "./assets/projects/ui-ux/wte/wte-persona-kristina.png",
              color: "#F54670",
              goals: [
                "Find a unique and adjustable menu",
                "Alternative suggestions for ingredients",
                "An easy, understandable shopping list she can send straight to her husband",
              ],
              deviceUsageLabel: "Device usage when cooking",
              deviceUsage: [
                { label: "Desktop/Laptop", level: 2 },
                { label: "Mobile", level: 3 },
                { label: "Tablet", level: 4 },
                { label: "Printed recipe", level: 1 },
              ],
              motivations: [
                "Loves learning something new in cooking",
                "Exploring plant-based dishes in a fun way",
                "Planning balanced meals ahead for the week",
              ],
              frustrations: [
                "Beautifully plated dishes with no explanation of how they're made",
                "Instructions that aren't finely constructed",
              ],
              tags: ["Extrovert", "Empathic", "Hospitable", "Passionate"],
            },
            {
              name: "Marco",
              quote:
                "I prefer recipes that are clever, but not too complicated. And I struggle remembering what to cook and get at the grocery store. It was much easier when my mom thought about it.",
              meta: [
                { label: "Age", value: "34" },
                { label: "Occupation", value: "Coding" },
                { label: "Location", value: "Novi Sad, Serbia" },
                { label: "Job title", value: "Programmer" },
              ],
              photo: "./assets/projects/ui-ux/wte/wte-persona-marco.png",
              color: "#00E6C0",
              goals: [
                "A simplified way to make sure he gets all the nutrients he needs",
                "Easy recipes that don't require double-checking",
                "A shopping list with an alarm reminding him to actually go to the store",
              ],
              deviceUsageLabel: "Device usage when cooking",
              deviceUsage: [
                { label: "Desktop/Laptop", level: 2 },
                { label: "Mobile", level: 1 },
                { label: "Tablet", level: 5 },
                { label: "Printed recipe", level: 0 },
              ],
              motivations: [
                "Balanced meals all the way through the week",
                "Has previously made a grocery list for the whole week",
                "Planning balanced meals ahead for the week",
              ],
              frustrations: [
                "iPad turning off mid-prep with food-covered fingers",
                "Needing some rare ingredient only found on the other side of the world",
                "Forgetting he put something in the oven",
              ],
              tags: ["Mindful", "Passionate", "Optimistic"],
            },
            {
              name: "Kosta",
              quote:
                "I need quick food that is great for outside. I'm a nature guy, always out. I like good meat and really spicy food to keep me through the day.",
              meta: [
                { label: "Age", value: "35" },
                { label: "Occupation", value: "Nature and fresh air" },
                { label: "Location", value: "Anywhere, Serbia" },
                { label: "Job title", value: "Adventurist" },
              ],
              photo: "./assets/projects/ui-ux/wte/wte-persona-kosta.png",
              color: "#FFD243",
              goals: [
                "Needs amazing, pack-full taste on the go",
                "Believes home-cooked meals are the tastiest",
                "Wants to discover the best local ingredient dishes",
              ],
              deviceUsageLabel: "Device usage when cooking",
              deviceUsage: [
                { label: "Desktop/Laptop", level: 0 },
                { label: "Mobile", level: 3 },
                { label: "Tablet", level: 0 },
                { label: "Printed recipe", level: 0 },
              ],
              motivations: [
                "Loves learning something new in cooking",
                "Exploring plant-based dishes in a fun way",
                "Planning balanced meals ahead for the week",
              ],
              frustrations: [
                "Needing two pans for one dish",
                "Food waste from needing just a small amount of a certain ingredient",
              ],
              tags: ["Adventurous", "Creative", "Sociable"],
            },
          ],

          // Supporting research/design artifacts — real exports from the
          // original case study, already complete (no cropping needed).
          artifacts: [
            {
              label: "information architecture",
              caption:
                "A sitemap was built to illustrate the app's navigation structure and determine the scope of key screens for the next phase.",
              image: "./assets/projects/ui-ux/wte/wte-sitemap.jpg",
            },
            {
              label: "wireframes, prototype & testing",
              caption:
                "Quick wireframe sketches were turned into a low-fidelity digital prototype and put through usability testing, which uncovered small vulnerabilities and points of friction — learnings that led to further revisions of the interface and structure.",
              image: "./assets/projects/ui-ux/wte/wte-wireframes.jpg",
            },
            {
              label: "mood board",
              caption:
                "Several mood boards were created to get a feel for the visual direction. The one selected gave the app a friendly, playful tone, with imagery that feels impressive yet approachable.",
              image: "./assets/projects/ui-ux/wte/wte-moodboard.jpg",
            },
            {
              label: "ui elements",
              caption:
                "A small UI kit — buttons, switches, tab bars, navigation, and audio/video player controls — kept the interface consistent across every screen.",
              image: "./assets/projects/ui-ux/wte/wte-ui-elements.jpg",
            },
            {
              label: "photography direction",
              caption:
                "Delicious food should always be the main focus of the photo. WTE's food photography needed to feel inspiring, modern, and fresh — the kind of images that make people crave what's on screen. Spontaneous shots of whatever you just cooked are always welcome too.",
              image: "./assets/projects/ui-ux/wte/wte-photography.jpg",
            },
          ],

          // Real palette, pulled from the original style guide.
          palette: [
            { hex: "#F54670", name: "Coral Pink" },
            { hex: "#00E6C0", name: "Mint Teal" },
            { hex: "#E4BEFC", name: "Lilac" },
            { hex: "#84D9E4", name: "Sky Blue" },
            { hex: "#FFD243", name: "Sunshine Yellow" },
          ],

          // Real 2-role type system — Nunito Sans, bold for headings,
          // regular for body copy.
          typography: [
            {
              label: "Headings",
              weight: "700",
              family: "'Nunito Sans', sans-serif",
            },
            {
              label: "Body / Paragraph",
              weight: "400",
              family: "'Nunito Sans', sans-serif",
            },
          ],

          toneOfVoice: {
            text: "WTE's voice is inspiring, fun, and playful — like the friend who knows every good place to eat in town and is always asking you to join for a meal you'd love to share. It has to stay passionate, inspirational, and current with your skills and knowledge in the kitchen.",
            tags: [
              "Passionate",
              "Delicious",
              "Inspiring",
              "Playful",
              "Creative",
            ],
            color: "#F54670",
          },

          // Final screen-by-screen breakdown. Media are placeholders —
          // crop each phone screen from the original "Final Design"
          // export and drop in as-is.
          walkthrough: [
            {
              title: "Join",
              text: "Registering and logging in is comfortable via Apple, Facebook, or email. An option to skip sign-up lets potential users explore the app without handing over their data first — which helps build trust.",
              media: "./assets/projects/ui-ux/wte/wte-final-join.jpg",
              alt: "Join screen with Apple, Facebook, and email sign-up options",
            },
            {
              title: "Sign up & verification",
              text: "To sign up, a user only needs a username, email, and password — or it can be done via Apple or Facebook instead. Signing up by email sends a generated code that auto-fills once the user opens their inbox, just to make sure it's really them.",
              media: "./assets/projects/ui-ux/wte/wte-final-signup.jpg", // PLACEHOLDER
              alt: "Sign-up form and email verification code screen",
            },
            {
              title: "Home",
              text: "At the top of the home screen sits the day's main recipe recommendation, which can be swapped for something else entirely. If you have something more specific in mind, it can be found through search, by browsing different recipes, or through the trending list below.",
              media: "./assets/projects/ui-ux/wte/wte-final-home.jpg", // PLACEHOLDER
              alt: "Home screen with daily recipe recommendation and trending recipes",
            },
            {
              title: "Sorting menu",
              text: "A sorting menu gives a quick, easy way to scan recipes — see what's new, what's trending, or what's been picked just for you.",
              media: "./assets/projects/ui-ux/wte/wte-final-sorting.jpg", // PLACEHOLDER
              alt: "Sorting menu with latest, trending, recommended, and featured options",
            },
            {
              title: "Recipe detail page",
              text: "Save and share recipes, or add your own notes. Adjust servings, and add single ingredients, or all of them, straight to the built-in shopping list. Every recipe can be followed step by step, in either video or picture format.",
              media: "./assets/projects/ui-ux/wte/wte-final-recipe-detail.jpg", // PLACEHOLDER
              alt: "Recipe detail page with ingredients, directions, and shopping-list button",
            },
            {
              title: "Shopping list",
              text: "The shopping list is easy to navigate — sorted by aisle or by recipe. Sorting by aisle groups groceries under illustrated category icons; sorting by recipe lists everything needed below each dish's name and photo, so it stays easy to track across more than one recipe at a time. Lists can be shared, or a participant added, and groceries can always be swapped from the list if something isn't available.",
              media: "./assets/projects/ui-ux/wte/wte-final-shopping-list.jpg", // PLACEHOLDER
              alt: "Shopping list sorted by aisle and by recipe",
            },
            {
              title: "Keep your device clean",
              text: "A hands-free mode can be switched on while cooking — controlled by voice, or by disabling screen lock — so there's no need to touch the device with messy hands while a dish is coming together.",
              media: "./assets/projects/ui-ux/wte/wte-final-device-clean.jpg", // PLACEHOLDER
              alt: "Hands-free cooking mode with voice control and anti-screen-lock toggle",
            },
          ],
        },
        {
          id: 5,
          name: "Pawzy",
          short: "pet shop — ux research & ui design",
          description:
            "A pet shop e-commerce concept — user and survey research, an empathy map, a full customer journey, wireframes, a complete style guide, and final UI screens for browsing, product detail, and checkout.",
          image: "./assets/thumbnails/pawzy-thumbnail.png",

          context:
            "Pawzy is a pet-shop e-commerce case study, designed around how dog and cat owners actually shop online — food, treats, and accessories. The project covered the full process: user and survey research, an empathy map and customer journey, information architecture, wireframes and a style guide, through to final UI screens for browsing, product detail, and checkout.",

          // Recommended export: ~2160x1080 (2:1 ratio).
          mockup: "./assets/projects/ui-ux/pawzy/pawzy-cover.jpg",

          overview: [
            {
              label: "About Pawzy",
              text: "Pawzy is a pet shop e-commerce website designed around pet owners' real shopping habits — intuitive navigation, clearly sorted products, and visually appealing product pages, backed by user research, wireframing, and prototyping at every step.",
            },
            {
              label: "What users need",
              items: [
                "A visible search button and clearly sorted products",
                "Easy navigation back to the main page, with breadcrumbs",
                "A shopping cart that's simple to edit",
                "Clear product availability and an automated delivery tracker",
                "Credit card recognition at checkout",
              ],
            },
            {
              label: "What the client needs",
              items: [
                "Dog and cat products only for now — toys, food, clothes, accessories, beds — sorted into categories",
                "Hovering a product reveals its ingredients and more info",
                "Automated shopping, with shopping history as the default view",
                "Strong photography, a sizing table for clothing, and sales/news popups",
                "24/7 vet help",
              ],
            },
          ],

          // One persona, built from the survey findings. Photo is a
          // placeholder — crop from the persona-card export and drop
          // in as-is.
          personas: [
            {
              name: "Marco",
              quote: "I wish for healthier life for my buddy Ralph",
              meta: [
                { label: "Age", value: "43" },
                { label: "City", value: "Belgrade" },
                {
                  label: "Education",
                  value: "Master's degree in architecture",
                },
                { label: "Profession", value: "Interior designer" },
              ],
              photo: "./assets/projects/ui-ux/pawzy/pawzy-persona-marco.jpg", // PLACEHOLDER — 3:4 crop
              color: "#F47042",
              goals: [
                "Healthy, organic food for him and his dog",
                "Comfort for Ralph",
                "Better, easier meal-prep organization for Ralph",
                "A wider range of dog-food products",
              ],
              deviceUsageLabel: "Tech skills",
              deviceUsage: [
                { label: "Internet", level: 5 },
                { label: "Social media", level: 3 },
                { label: "Online shopping", level: 5 },
                { label: "Mail", level: 4 },
              ],
              frustrations: [
                "Thinking about finding the right food for Ralph",
                "Forgets to pay monthly expenses",
                "Unorganized delivery",
                "Limited choice of natural food",
              ],
              tags: [],
            },
          ],

          // Supporting research/design artifacts — real exports from the
          // original case study, already complete (no cropping needed).
          // Several are in Serbian (the original research language);
          // captions below translate the key takeaways.
          artifacts: [
            {
              label: "survey research results",
              caption:
                "A short survey (10–11 responses) covering diet, spending, and feature interest. Key takeaways: finding ingredient information on packaging and allergy-friendly food is genuinely hard; most owners spend upwards of 2,500 dinars a month on their pet; there's strong interest (over 90%) in a monthly food subscription and in a Pawzy Loyalty program; a vet chat feature and order tracking both rated highly useful; and pet clothing is a rarely-bought online category.",
              image: "./assets/projects/ui-ux/pawzy/pawzy-survey-results.jpg",
            },
            {
              label: "empathy map",
              caption:
                "An empathy map built around a pet owner considering organic food — what they hear, see, think, say, and do. Recurring pain points: organic food is hard to find (and hard to trust as genuinely organic), there's no time to cook for the pet, and ingredient labeling is hard to verify. The clear gain: detailed, trustworthy ingredient information at a reasonable price.",
              image: "./assets/projects/ui-ux/pawzy/pawzy-empathy-map.jpg",
            },
            {
              label: "information architecture",
              caption:
                "A customer journey mapped across five stages — Awareness, Consideration, Purchase, Onboarding, and Advocacy — pairing user actions and touchpoints with emotions, pain points, and possible solutions at each step. Recurring friction: too many products within a category, re-entering payment details, and not knowing when a subscription renews or a delivery will arrive — addressed with filters, saved payment/delivery details, renewal reminders, and package tracking.",
              image: "./assets/projects/ui-ux/pawzy/pawzy-journey-map.jpg",
            },
            {
              label: "product categories",
              caption:
                "A full taxonomy for dogs and cats — age brackets, product types (food, treats, accessories, care), and special-care diets (sensitive, anti-allergic, freshly cooked, vegan, supplements) — used to drive the category filters across the site.",
              image:
                "./assets/projects/ui-ux/pawzy/pawzy-product-categories.jpg",
            },
            {
              label: "user flow",
              caption:
                "The primary purchase flow — from home through product discovery and ingredient-checking, into the cart, sign-in, and checkout, ending at delivery confirmation.",
              image: "./assets/projects/ui-ux/pawzy/pawzy-user-flow.jpg",
            },
            {
              label: "sketches & wireframes",
              caption:
                "Early pen-and-paper sketches for the homepage, category, and product pages, refined into low-fidelity wireframes covering the homepage, category page, product page, and checkout flow.",
              image:
                "./assets/projects/ui-ux/pawzy/pawzy-sketches-wireframes.jpg",
            },
            {
              label: "mood board",
              caption:
                "A mood board of warm pet photography, packaging references, and color and type exploration that shaped the final visual direction.",
              image: "./assets/projects/ui-ux/pawzy/pawzy-moodboard.jpg",
            },
          ],

          // Real palette, pulled from the original style guide.
          palette: [
            { hex: "#42A5A1", name: "Teal" },
            { hex: "#F47042", name: "Coral" },
            { hex: "#446E5D", name: "Dark Green" },
            { hex: "#8ABC98", name: "Light Green" },
            { hex: "#FCC53B", name: "Gold" },
            { hex: "#E6E0C8", name: "Cream" },
          ],

          // Real 3-weight type system — Gotham Pro. It's a licensed
          // font (not on Google Fonts), so the family name is kept for
          // accuracy but the sample falls back to the system sans-serif.
          typography: [
            {
              label: "Bold",
              weight: "700",
              family: "'Gotham Pro', sans-serif",
            },
            {
              label: "Medium",
              weight: "500",
              family: "'Gotham Pro', sans-serif",
            },
            {
              label: "Regular",
              weight: "400",
              family: "'Gotham Pro', sans-serif",
            },
          ],

          // Final screen-by-screen breakdown. Media are placeholders —
          // crop each screen from the original "Final Design" export
          // and drop in as-is.
          walkthrough: [
            {
              title: "Homepage",
              text: "A simple, consistently-positioned header lets users navigate the rest of the site from anywhere. The homepage surfaces new and most-wanted products, a monthly-subscription and freshly-cooked-meals option, helpful tips and fun facts, a vet consult, and customer reviews to build trust. The search bar opens below the header on demand, and the Dog/Cat navigation works as a drop-down to sub-categories.",
              media: "./assets/projects/ui-ux/pawzy/pawzy-final-homepage.jpg", // PLACEHOLDER
              alt: "Pawzy homepage with hero banner, featured products, and subscription offer",
            },
            {
              title: "Category page",
              text: "Nine products per page keeps users from scrolling long lists. Products can be filtered by age, availability, special care, or taste, and sorted by newest, price, or popularity — with a recommendation section below based on previous searches. A product stands out on hover and can be added to cart immediately, and a top-page arrow plus shop chat sit on the right of every page.",
              media: "./assets/projects/ui-ux/pawzy/pawzy-final-category.jpg", // PLACEHOLDER
              alt: "Pawzy category page with filters and a 9-product grid",
            },
            {
              title: "Product page",
              text: "Clear product images pair with a specification segment split into three sections — about the product, ingredients, and reviews — plus recommended and previously-viewed products. Users can choose size and quantity, and pick between a one-time purchase or a monthly delivery.",
              media: "./assets/projects/ui-ux/pawzy/pawzy-final-product.jpg", // PLACEHOLDER
              alt: "Pawzy product detail page with size, quantity, and delivery options",
            },
            {
              title: "Cart & checkout",
              text: "Products in the cart can be edited without leaving the page. Checkout steps through delivery details and payment (card or cash) with a progress indicator, and users can always go back a step without losing what they've already entered, ending in an order confirmation.",
              media: "./assets/projects/ui-ux/pawzy/pawzy-final-checkout.jpg", // PLACEHOLDER
              alt: "Pawzy cart and checkout flow with delivery details and payment step",
            },
          ],
          links: { live: "https://pawzy-petshop.netlify.app/" },
        },
      ],
    },
    {
      key: "code",
      title: "code",
      description:
        "Creative Web Developer and Designer dedicated to bridging the gap between aesthetics and functionality. By blending technical frontend expertise with a foundation in UI/UX, I build seamless, detail-oriented digital products that look as good as they perform.",
      cols: 4,
      projects: [
        {
          id: 1,
          name: "portfolio site",
          short: "react / css",
          description:
            "Custom portfolio website built from scratch with React, featuring smooth page transitions, a dynamic project filter, and full CMS integration for easy content updates.",
          image: "",
          media: "",
        },
        {
          id: 2,
          name: "component library",
          short: "typescript / storybook",
          description:
            "An open-source UI component library built with TypeScript and Storybook. Covers form elements, navigation patterns, data display components, and layout primitives.",
          image: "",
          media: "",
        },
        {
          id: 3,
          name: "web app",
          short: "next.js / supabase",
          description:
            "A collaborative task management web app built with Next.js and Supabase, featuring real-time updates, role-based access, and a fully responsive interface.",
          image: "",
          media: "",
        },
        {
          id: 4,
          name: "landing pages",
          short: "html / css / gsap",
          description:
            "A series of high-converting landing pages for SaaS products, built with semantic HTML, custom CSS animations using GSAP, and optimised for Core Web Vitals.",
          image: "",
          media: "",
        },
        {
          id: 5,
          name: "browser extension",
          short: "javascript",
          description:
            "A productivity browser extension that enhances reading focus by progressively revealing content, reducing visual noise, and saving highlights with one click.",
          image: "",
          media: "",
        },
      ],
    },
    {
      key: "graphic-design",
      title: "graphic design",
      description:
        "Creative Web Developer and Designer dedicated to bridging the gap between aesthetics and functionality. By blending technical frontend expertise with a foundation in UI/UX, I build seamless, detail-oriented digital products that look as good as they perform.",
      cols: 4,
      projects: [
        {
          id: 1,
          name: "Knjaz Miloš",
          short: "project visual and packaging design *agency work",
          description:
            "A full brand identity system developed for a sustainable lifestyle startup — covering logomark, wordmark, colour palette, typography hierarchy, and brand guidelines.",
          image: "./assets/thumbnails/knjaz-thumbnail.png", // PLACEHOLDER — 1200x900, 4:3
          gallery: [
            "./assets/projects/design/knjaz-video.mp4", // PLACEHOLDER — video, 16:9
            "./assets/projects/design/knjaz-project.jpg", // PLACEHOLDER — 1920x1080, 16:9
          ],
        },
        {
          id: 3,
          name: "Doncafé Prolećni Moment",
          short: "product packaging *agency work",
          description:
            "Packaging concept for an artisan coffee roaster. The design draws on mid-century illustration techniques combined with a clean, contemporary grid.",
          image: "./assets/thumbnails/doncafe-thumbnail.png", // PLACEHOLDER — 1200x900, 4:3
          gallery: [
            "./assets/projects/design/doncafe-video.mp4", // PLACEHOLDER — video, 16:9
            "./assets/projects/design/doncafe-project.png", // PLACEHOLDER — 1920x1080, 16:9
          ],
        },
        {
          id: 2,
          name: "Aleksandar Sofronijevic logo design",
          short: "logo & design system",
          description:
            "Magazine layout system designed for a quarterly arts publication, balancing dense editorial content with generous breathing room and strong typographic hierarchy.",
          image: "./assets/thumbnails/sofronijevic-thumbnail.png", // PLACEHOLDER — 1200x900, 4:3
          gallery: [
            "./assets/projects/design/sofronijevic-video.mp4", // PLACEHOLDER — video, 16:9
            "./assets/projects/design/sofronijevic-project.jpg", // PLACEHOLDER — 1920x1080, 16:9
          ],
        },
        {
          id: 4,
          name: "AquaViva Junior",
          short: "product packaging *agency work",
          description:
            "A series of seven posters created for an annual design festival, each exploring a different visual language while maintaining a coherent system.",
          image: "./assets/thumbnails/akvaviva-thumbnail.png", // PLACEHOLDER — 1200x900, 4:3
          gallery: [
            "", // PLACEHOLDER — video, 16:9
            "./assets/projects/design/junior-project.png", // PLACEHOLDER — 1920x1080, 16:9
          ],
        },
        {
          id: 5,
          name: "crox",
          short: "logo & design system",
          description:
            "Short-form motion graphics package for a tech brand launch, covering intro animations, lower thirds, and social content assets.",
          image: "./assets/thumbnails/crox-thumbnail.png", // PLACEHOLDER — 1200x900, 4:3
          gallery: [
            "./assets/projects/design/crox-animation.mp4", // PLACEHOLDER — video, 16:9
            "./assets/projects/design/crox-project.jpg", // PLACEHOLDER — 1920x1080, 16:9
          ],
        },
        // {
        //   id: 6,
        //   name: "type specimen",
        //   short: "typography",
        //   description:
        //     "A custom type specimen booklet exploring the expressive range of a bespoke display typeface through editorial contexts and experimental layouts.",
        //   image: "./assets/thumbnails/type-specimen-thumbnail.png", // PLACEHOLDER — 1200x900, 4:3
        //   gallery: [
        //     "./assets/projects/design/type-specimen-project.mp4", // PLACEHOLDER — video, 16:9
        //     "./assets/projects/design/type-specimen-project.jpg", // PLACEHOLDER — 1920x1080, 16:9
        //   ],
        // },
      ],
    },
  ],
};
