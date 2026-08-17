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
      behance: "https://www.behance.net/larisa_kampe",
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
       media       — path/URL for the large detail image/video (leave "" for placeholder)
                     use a video URL ending in .mp4 / .webm to embed video automatically
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
          short: "mobile design",
          description:
            "End-to-end product design for a personal finance app — from initial user research and journey mapping through wireframes, high-fidelity prototypes, and a documented component library.",
          image: "./assets/thumbnails/bizup-thumbnail.png",
          media: "./assets/projects/ui-ux/bizUp.jpg",
        },
        {
          id: 2,
          name: "e-commerce",
          short: "web design",
          description:
            "A full redesign of an e-commerce platform focused on reducing friction in the discovery-to-checkout flow, increasing conversion through better hierarchy and clearer calls to action.",
          image: "",
          media: "",
        },
        {
          id: 3,
          name: "dashboard",
          short: "data visualisation",
          description:
            "Analytics dashboard for a SaaS platform, translating complex data sets into clear, actionable visual representations with a clean, information-dense layout.",
          image: "",
          media: "",
        },
        {
          id: 4,
          name: "design system",
          short: "component library",
          description:
            "A comprehensive design system built in Figma for a mid-size product team — tokens, components, patterns, and usage documentation.",
          image: "",
          media: "",
        },
      ],
    },
    {
      key: "code",
      title: "code",
      description:
        "Creative Web Developer and Designer dedicated to bridging the gap between aesthetics and functionality. By blending technical frontend expertise with a foundation in UI/UX, I build seamless, detail-oriented digital products that look as good as they perform.",
      cols: 3,
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
      cols: 3,
      projects: [
        {
          id: 1,
          name: "brand identity",
          short: "logo & visual system",
          description:
            "A full brand identity system developed for a sustainable lifestyle startup — covering logomark, wordmark, colour palette, typography hierarchy, and brand guidelines.",
          image: "",
          media: "",
        },
        {
          id: 2,
          name: "editorial layout",
          short: "print & digital",
          description:
            "Magazine layout system designed for a quarterly arts publication, balancing dense editorial content with generous breathing room and strong typographic hierarchy.",
          image: "",
          media: "",
        },
        {
          id: 3,
          name: "packaging design",
          short: "product packaging",
          description:
            "Packaging concept for an artisan coffee roaster. The design draws on mid-century illustration techniques combined with a clean, contemporary grid.",
          image: "",
          media: "",
        },
        {
          id: 4,
          name: "poster series",
          short: "event branding",
          description:
            "A series of seven posters created for an annual design festival, each exploring a different visual language while maintaining a coherent system.",
          image: "",
          media: "",
        },
        {
          id: 5,
          name: "motion graphics",
          short: "animation",
          description:
            "Short-form motion graphics package for a tech brand launch, covering intro animations, lower thirds, and social content assets.",
          image: "",
          media: "",
        },
        {
          id: 6,
          name: "type specimen",
          short: "typography",
          description:
            "A custom type specimen booklet exploring the expressive range of a bespoke display typeface through editorial contexts and experimental layouts.",
          image: "",
          media: "",
        },
      ],
    },
  ],
};
