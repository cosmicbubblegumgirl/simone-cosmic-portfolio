const projects = [
  {
    title: "Carbon Crumbs",
    repoName: "carbon-crumbs",
    url: "https://cosmicbubblegumgirl.github.io/carbon-crumbs/",
    repo: "https://github.com/cosmicbubblegumgirl/carbon-crumbs",
    category: "Climate",
    language: "JavaScript",
    accent: "#00a6a6",
    featured: true,
    summary: "I built a carbon emissions calculator with a creative spin, turning sustainability into an approachable browser tool."
  },
  {
    title: "Mind Check",
    repoName: "mind-check",
    url: "https://cosmicbubblegumgirl.github.io/mind-check/",
    repo: "https://github.com/cosmicbubblegumgirl/mind-check",
    category: "Wellness",
    language: "JavaScript",
    accent: "#ff6b4a",
    featured: true,
    summary: "I created a self-reflection experience around ADHD and anxiety awareness with a knowledge-first tone."
  },
  {
    title: "Deductomatic",
    repoName: "deductomatic",
    url: "https://cosmicbubblegumgirl.github.io/deductomatic/",
    repo: "https://github.com/cosmicbubblegumgirl/deductomatic",
    category: "Finance",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: true,
    summary: "I built a tax calculator presented as SA Tax Studio 3D, combining practical calculations with a memorable interface."
  },
  {
    title: "e-Plant Shopping",
    repoName: "e-plantShopping",
    url: "https://cosmicbubblegumgirl.github.io/e-plantShopping/",
    repo: "https://github.com/cosmicbubblegumgirl/e-plantShopping",
    category: "Commerce",
    language: "JavaScript",
    accent: "#4f9b36",
    featured: true,
    summary: "I created a Paradise Nursery storefront project for browsing plant products through a front-end shopping flow."
  },
  {
    title: "Whimsical Simple Interest Calculator",
    repoName: "whimsical-simple-interest-calculator",
    url: "https://cosmicbubblegumgirl.github.io/whimsical-simple-interest-calculator/",
    repo: "https://github.com/cosmicbubblegumgirl/whimsical-simple-interest-calculator",
    category: "Finance",
    language: "HTML",
    accent: "#ffbd4a",
    featured: true,
    summary: "I built a simple interest calculator with a playful visual direction and clear form-based interaction."
  },
  {
    title: "Normal Is Overrated",
    repoName: "normal_is-_overrated",
    url: "https://cosmicbubblegumgirl.github.io/normal_is-_overrated/",
    repo: "https://github.com/cosmicbubblegumgirl/normal_is-_overrated",
    category: "Wellness",
    language: "JavaScript",
    accent: "#ef5da8",
    featured: true,
    summary: "I designed a Moonbeam Mind experience that frames neurodiversity and self-understanding through a distinctive UI."
  },
  {
    title: "Travel Recommendations",
    repoName: "travel_recommendations",
    url: "https://cosmicbubblegumgirl.github.io/travel_recommendations/",
    repo: "https://github.com/cosmicbubblegumgirl/travel_recommendations",
    category: "Travel",
    language: "HTML",
    accent: "#00a6a6",
    featured: true,
    summary: "I created a magical travel recommendation website with destination discovery and themed content presentation."
  },
  {
    title: "FlowForge Exam Lab",
    repoName: "flowforge-exam-lab",
    url: "https://cosmicbubblegumgirl.github.io/flowforge-exam-lab/",
    repo: "https://github.com/cosmicbubblegumgirl/flowforge-exam-lab",
    category: "SAP + Learning",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: true,
    summary: "I built an SAP Integration Suite practical exam simulator with 118 original questions and a study-focused flow."
  },
  {
    title: "Syntax Circle",
    repoName: "syntax-circle",
    url: "https://cosmicbubblegumgirl.github.io/syntax-circle/",
    repo: "https://github.com/cosmicbubblegumgirl/syntax-circle",
    category: "SAP + Learning",
    language: "JavaScript",
    accent: "#31d8b1",
    featured: true,
    summary: "I built a space-tech student developer forum with learner accounts, a community wall, sandbox practice, Xayle, Timewarp scheduling, Pomodoro skins, prep tools, and portfolio-ready progress evidence."
  },
  {
    title: "SAPling Studio",
    repoName: "sap-experience-accelerator",
    url: "https://cosmicbubblegumgirl.github.io/sap-experience-accelerator/",
    repo: "https://github.com/cosmicbubblegumgirl/sap-experience-accelerator",
    category: "SAP + Learning",
    language: "React + TS",
    accent: "#18c8b8",
    featured: true,
    summary: "I built a sleek SAP learner accelerator with account access, project roadmaps, working sandboxes, a community feedback wall, study tools, a resource shelf, and an evidence vault."
  },
  {
    title: "SAP Spellbook Academy",
    repoName: "the-plan-of-action",
    url: "https://cosmicbubblegumgirl.github.io/the-plan-of-action/",
    repo: "https://github.com/cosmicbubblegumgirl/the-plan-of-action",
    category: "SAP + Learning",
    language: "JavaScript",
    accent: "#c7ff5b",
    featured: true,
    summary: "I created a SAP C_CPI_2601 study planner and system-based assessment simulator."
  },
  {
    title: "Incident Management",
    repoName: "cld200-incident-management",
    url: "https://cosmicbubblegumgirl.github.io/cld200-incident-management/",
    repo: "https://github.com/cosmicbubblegumgirl/cld200-incident-management",
    category: "SAP + Learning",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: false,
    summary: "I built a CLD200 incident management exercise and GitHub Pages demo."
  },
  {
    title: "Zemira's Pixels",
    repoName: "zemiras-pixels",
    url: "https://cosmicbubblegumgirl.github.io/zemiras-pixels/",
    repo: "https://github.com/cosmicbubblegumgirl/zemiras-pixels",
    category: "Creative",
    language: "JavaScript",
    accent: "#ef5da8",
    featured: false,
    summary: "I created a pixel-forward creative site with a visual identity built for exploration."
  },
  {
    title: "DoodleFlow",
    repoName: "doodleflow",
    url: "https://cosmicbubblegumgirl.github.io/doodleflow/",
    repo: "https://github.com/cosmicbubblegumgirl/doodleflow",
    category: "Creative",
    language: "JavaScript",
    accent: "#ff6b4a",
    featured: false,
    summary: "I built a standalone creative community web app and doodle feed experience."
  },
  {
    title: "DoodleFlow Creative Community",
    repoName: "vercel-apps-github-pages",
    url: "https://cosmicbubblegumgirl.github.io/vercel-apps-github-pages/",
    repo: "https://github.com/cosmicbubblegumgirl/vercel-apps-github-pages",
    category: "Creative",
    language: "JavaScript",
    accent: "#00a6a6",
    featured: false,
    summary: "I built an interactive GitHub Pages launchpad for Vercel-style app experiments."
  },
  {
    title: "FocusFlux",
    repoName: "focusflux",
    url: "https://cosmicbubblegumgirl.github.io/focusflux/",
    repo: "https://github.com/cosmicbubblegumgirl/focusflux",
    category: "Productivity",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: false,
    summary: "I created a focus-oriented browser app with a direct, task-friendly interface."
  },
  {
    title: "Cadance.exe: Portal After Midnight",
    repoName: "cadance-portal-after-midnight",
    url: "https://cosmicbubblegumgirl.github.io/cadance-portal-after-midnight/",
    repo: "https://github.com/cosmicbubblegumgirl/cadance-portal-after-midnight",
    category: "Creative",
    language: "JavaScript",
    accent: "#ff6b4a",
    featured: false,
    summary: "I designed a characterful interactive portal with a late-night digital mood."
  },
  {
    title: "Neon Tide",
    repoName: "neon-tide-game",
    url: "https://cosmicbubblegumgirl.github.io/neon-tide-game/",
    repo: "https://github.com/cosmicbubblegumgirl/neon-tide-game",
    category: "Game",
    language: "JavaScript",
    accent: "#00a6a6",
    featured: false,
    summary: "I built a browser game that brings motion, score-chasing, and arcade energy into my portfolio."
  },
  {
    title: "LearnLoop",
    repoName: "learnloop",
    url: "https://cosmicbubblegumgirl.github.io/learnloop/",
    repo: "https://github.com/cosmicbubblegumgirl/learnloop",
    category: "Product",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: false,
    summary: "I created a standalone adaptive learning studio with a dynamic front end and JSON data layer."
  },
  {
    title: "ReturnReady",
    repoName: "returnready",
    url: "https://cosmicbubblegumgirl.github.io/returnready/",
    repo: "https://github.com/cosmicbubblegumgirl/returnready",
    category: "Product",
    language: "HTML",
    accent: "#ff6b4a",
    featured: false,
    summary: "I designed a returns control tower concept for operational product storytelling."
  },
  {
    title: "Nimbus Nook",
    repoName: "nimbus-nook",
    url: "https://cosmicbubblegumgirl.github.io/nimbus-nook/",
    repo: "https://github.com/cosmicbubblegumgirl/nimbus-nook",
    category: "Wellness",
    language: "JavaScript",
    accent: "#00a6a6",
    featured: false,
    summary: "I built an anxiety calming web app with a soothing product concept and focused interface."
  },
  {
    title: "LedgerLift",
    repoName: "ledgerlift",
    url: "https://cosmicbubblegumgirl.github.io/ledgerlift/",
    repo: "https://github.com/cosmicbubblegumgirl/ledgerlift",
    category: "Finance",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: false,
    summary: "I created a cash-flow foresight product website for small business decision support."
  },
  {
    title: "PantryPilot",
    repoName: "pantrypilot",
    url: "https://cosmicbubblegumgirl.github.io/pantrypilot/",
    repo: "https://github.com/cosmicbubblegumgirl/pantrypilot",
    category: "Product",
    language: "HTML",
    accent: "#4f9b36",
    featured: false,
    summary: "I built a pantry management product concept with dynamic front-end content."
  },
  {
    title: "DwellKit",
    repoName: "dwellkit",
    url: "https://cosmicbubblegumgirl.github.io/dwellkit/",
    repo: "https://github.com/cosmicbubblegumgirl/dwellkit",
    category: "Product",
    language: "HTML",
    accent: "#00a6a6",
    featured: false,
    summary: "I created a home-focused product website as a standalone front-end experience."
  },
  {
    title: "HireSignal",
    repoName: "hiresignal",
    url: "https://cosmicbubblegumgirl.github.io/hiresignal/",
    repo: "https://github.com/cosmicbubblegumgirl/hiresignal",
    category: "Product",
    language: "HTML",
    accent: "#2f6bff",
    featured: false,
    summary: "I designed a hiring-signal product website with a sharp operational narrative."
  },
  {
    title: "GreenGrid Action Tracker",
    repoName: "greengrid-action-tracker",
    url: "https://cosmicbubblegumgirl.github.io/greengrid-action-tracker/",
    repo: "https://github.com/cosmicbubblegumgirl/greengrid-action-tracker",
    category: "Climate",
    language: "React + TS",
    accent: "#24c26a",
    featured: true,
    summary: "I built a student-team environmental action tracker with animated impact stats, a living grid, quick action logging, challenge paths, and no-shame progress design."
  },
  {
    title: "GreenGrid",
    repoName: "greengrid",
    url: "https://cosmicbubblegumgirl.github.io/greengrid/",
    repo: "https://github.com/cosmicbubblegumgirl/greengrid",
    category: "Product",
    language: "HTML",
    accent: "#4f9b36",
    featured: false,
    summary: "I built a product landing experience organized around green systems and structured content."
  },
  {
    title: "CivicLink",
    repoName: "civiclink",
    url: "https://cosmicbubblegumgirl.github.io/civiclink/",
    repo: "https://github.com/cosmicbubblegumgirl/civiclink",
    category: "Product",
    language: "HTML",
    accent: "#00a6a6",
    featured: false,
    summary: "I created a civic product concept with a clean information architecture."
  },
  {
    title: "ShiftMate",
    repoName: "shiftmate",
    url: "https://cosmicbubblegumgirl.github.io/shiftmate/",
    repo: "https://github.com/cosmicbubblegumgirl/shiftmate",
    category: "Product",
    language: "HTML",
    accent: "#ff6b4a",
    featured: false,
    summary: "I designed a shift coordination product website with practical workflow framing."
  },
  {
    title: "CareFlow",
    repoName: "careflow",
    url: "https://cosmicbubblegumgirl.github.io/careflow/",
    repo: "https://github.com/cosmicbubblegumgirl/careflow",
    category: "Product",
    language: "HTML",
    accent: "#2f6bff",
    featured: false,
    summary: "I built a hospital command center concept for healthcare operations."
  },
  {
    title: "Product Design Portfolio Pages",
    repoName: "product-design-client-portfolio-pages",
    url: "https://cosmicbubblegumgirl.github.io/product-design-client-portfolio-pages/",
    repo: "https://github.com/cosmicbubblegumgirl/product-design-client-portfolio-pages",
    category: "Portfolio",
    language: "HTML",
    accent: "#c7ff5b",
    featured: false,
    summary: "I created a portfolio-oriented site presenting full stack, UX, and product design positioning."
  },
  {
    title: "NovaBite",
    repoName: "Nova-bite",
    url: "https://cosmicbubblegumgirl.github.io/Nova-bite/",
    repo: "https://github.com/cosmicbubblegumgirl/Nova-bite",
    category: "Creative",
    language: "JavaScript",
    accent: "#ff6b4a",
    featured: false,
    summary: "I designed a quirky tasting experience site with a distinct brand mood."
  },
  {
    title: "Coaster's Cabs",
    repoName: "coasterscabsfinal",
    url: "https://cosmicbubblegumgirl.github.io/coasterscabsfinal/",
    repo: "https://github.com/cosmicbubblegumgirl/coasterscabsfinal",
    category: "Client",
    language: "HTML",
    accent: "#00a6a6",
    featured: false,
    summary: "I built a South Coast private cab service website with local business presentation."
  },
  {
    title: "Permit - Agent Governance",
    repoName: "Leash",
    url: "https://cosmicbubblegumgirl.github.io/Leash/",
    repo: "https://github.com/cosmicbubblegumgirl/Leash",
    category: "Product",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: false,
    summary: "I created a product concept around agent governance, permissions and safer workflow control."
  },
  {
    title: "QuantumCupCakeCreations",
    repoName: "QUantumcreations_simone-govender-portfoio",
    url: "https://cosmicbubblegumgirl.github.io/QUantumcreations_simone-govender-portfoio/",
    repo: "https://github.com/cosmicbubblegumgirl/QUantumcreations_simone-govender-portfoio",
    category: "Portfolio",
    language: "HTML",
    accent: "#ef5da8",
    featured: false,
    summary: "I built a colorful portfolio experiment with a playful creative identity."
  },
  {
    title: "GiftWrapped",
    repoName: "GiftWrapped",
    url: "https://cosmicbubblegumgirl.github.io/GiftWrapped/",
    repo: "https://github.com/cosmicbubblegumgirl/GiftWrapped",
    category: "Creative",
    language: "JavaScript",
    accent: "#ff6b4a",
    featured: false,
    summary: "I designed a gift-themed web experience with celebratory visual language."
  },
  {
    title: "GiftLink Sparkle",
    repoName: "giftlink-sparkle",
    url: "https://cosmicbubblegumgirl.github.io/giftlink-sparkle/",
    repo: "https://github.com/cosmicbubblegumgirl/giftlink-sparkle",
    category: "Creative",
    language: "JavaScript",
    accent: "#ef5da8",
    featured: false,
    summary: "I created a polished gift-link project with a bright, social product direction."
  },
  {
    title: "Moonbeam Mind",
    repoName: "moonbeammind",
    url: "https://cosmicbubblegumgirl.github.io/moonbeammind/",
    repo: "https://github.com/cosmicbubblegumgirl/moonbeammind",
    category: "Wellness",
    language: "JavaScript",
    accent: "#ef5da8",
    featured: false,
    summary: "I built a spectrum-test concept focused on self-knowledge and reflective interaction."
  },
  {
    title: "Nursery Paradise",
    repoName: "final-project-nursery-paradise",
    url: "https://cosmicbubblegumgirl.github.io/final-project-nursery-paradise/",
    repo: "https://github.com/cosmicbubblegumgirl/final-project-nursery-paradise",
    category: "Commerce",
    language: "JavaScript",
    accent: "#4f9b36",
    featured: false,
    summary: "I created a nursery storefront final project with plant shopping presentation."
  },
  {
    title: "Nusery Paradise",
    repoName: "final-project-nusery-paradise",
    url: "https://cosmicbubblegumgirl.github.io/final-project-nusery-paradise/",
    repo: "https://github.com/cosmicbubblegumgirl/final-project-nusery-paradise",
    category: "Commerce",
    language: "JavaScript",
    accent: "#4f9b36",
    featured: false,
    summary: "I kept this alternate nursery storefront deployment as part of my live project archive."
  },
  {
    title: "Pixie Petal Patch",
    repoName: "fixed-pixie-petal-patch-garden-shop",
    url: "https://cosmicbubblegumgirl.github.io/fixed-pixie-petal-patch-garden-shop/",
    repo: "https://github.com/cosmicbubblegumgirl/fixed-pixie-petal-patch-garden-shop",
    category: "Commerce",
    language: "CSS",
    accent: "#4f9b36",
    featured: false,
    summary: "I built a Vite and React plant nursery storefront with a complete shopping feel."
  }
];

const categories = [
  "All",
  "CV picks",
  "SAP + Learning",
  "Product",
  "Creative",
  "Commerce",
  "Wellness",
  "Finance",
  "Climate",
  "Travel",
  "Game",
  "Client",
  "Portfolio",
  "Productivity"
];

const state = {
  category: "All",
  query: "",
  selectedIndex: 0
};

const FLIGHT_KEYS = new Set([
  "arrowup",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "w",
  "a",
  "s",
  "d"
]);

const LAUNCH_STEPS = [
  "Ignition armed",
  "Star field calibrated",
  "Project destinations online",
  "Entering my portfolio universe"
];

const DOCK_MESSAGE_MS = 2400;

const elements = {
  filters: document.querySelector("#categoryFilters"),
  list: document.querySelector("#projectList"),
  search: document.querySelector("#projectSearch"),
  frame: document.querySelector("#sandboxFrame"),
  stageTitle: document.querySelector("#stageTitle"),
  stageSummary: document.querySelector("#stageSummary"),
  stageCategory: document.querySelector("#stageCategory"),
  stageUrl: document.querySelector("#stageUrl"),
  stageLive: document.querySelector("#stageLive"),
  stageRepo: document.querySelector("#stageRepo"),
  shuffle: document.querySelector("#shuffleProject"),
  loadVisible: document.querySelector("#loadVisiblePreviews"),
  copyEmail: document.querySelector("#copyEmail"),
  galaxyCanvas: document.querySelector("#galaxyCanvas"),
  beginExploration: document.querySelector("#beginExploration"),
  autoPilot: document.querySelector("#autoPilot"),
  audioToggle: document.querySelector("#audioToggle"),
  launchSequence: document.querySelector("#launchSequence"),
  launchStep: document.querySelector("#launchStep"),
  launchMeter: document.querySelector("#launchMeter"),
  missionPhase: document.querySelector("#missionPhase"),
  missionObjective: document.querySelector("#missionObjective"),
  missionProgress: document.querySelector("#missionProgress"),
  destinationPanel: document.querySelector("#destinationPanel"),
  holoTitle: document.querySelector("#holoTitle"),
  holoSummary: document.querySelector("#holoSummary"),
  holoCategory: document.querySelector("#holoCategory"),
  holoTech: document.querySelector("#holoTech"),
  holoPreview: document.querySelector("#holoPreview"),
  holoLive: document.querySelector("#holoLive"),
  holoRepo: document.querySelector("#holoRepo"),
  enterSandbox: document.querySelector("#enterSandbox"),
  quickToggle: document.querySelector("#quickToggle"),
  quickDestinationList: document.querySelector("#quickDestinationList"),
  touchFlightButtons: document.querySelectorAll("[data-flight]"),
  dockButton: document.querySelector("[data-dock]"),
  shipStatus: document.querySelector("#shipStatus"),
  destinationCount: document.querySelector("#destinationCount")
};

const cosmicState = {
  activeIndex: 2,
  autoPilot: true,
  launched: false,
  launching: false,
  dockedUntil: 0,
  lastPreviewIndex: null,
  destinations: [],
  destinationMeshes: [],
  keys: new Set(),
  pointer: { x: 0, y: 0 },
  velocity: null,
  audio: null
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFilteredProjects() {
  const query = state.query.trim().toLowerCase();
  return projects.filter((project) => {
    const inCategory =
      state.category === "All" ||
      (state.category === "CV picks" && project.featured) ||
      project.category === state.category;

    const haystack = [
      project.title,
      project.repoName,
      project.category,
      project.language,
      project.summary
    ]
      .join(" ")
      .toLowerCase();

    return inCategory && (!query || haystack.includes(query));
  });
}

function renderFilters() {
  elements.filters.innerHTML = categories
    .map((category) => {
      const count =
        category === "All"
          ? projects.length
          : category === "CV picks"
            ? projects.filter((project) => project.featured).length
            : projects.filter((project) => project.category === category).length;

      return `
        <button class="filter-chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category === state.category}">
          ${escapeHtml(category)} <span aria-hidden="true">${count}</span>
        </button>
      `;
    })
    .join("");
}

function renderProjects() {
  const filtered = getFilteredProjects();
  if (!filtered.length) {
    elements.list.innerHTML = `
      <div class="project-card">
        <h3>I could not find a matching project yet</h3>
        <p>Try a broader search term or switch back to all of my projects.</p>
      </div>
    `;
    return;
  }

  elements.list.innerHTML = filtered
    .map((project) => {
      const index = projects.indexOf(project);
      return `
        <article class="project-card ${index === state.selectedIndex ? "active" : ""}" data-index="${index}" style="--accent: ${project.accent}">
          <header>
            <div>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.summary)}</p>
            </div>
            <span class="pill">${escapeHtml(project.language)}</span>
          </header>
          <div class="pill-row">
            <span class="pill">${escapeHtml(project.category)}</span>
            <span class="pill">Live</span>
            ${project.featured ? '<span class="pill featured-pill">CV pick</span>' : ""}
          </div>
          <div class="mini-preview">
            <iframe
              title="${escapeHtml(project.title)} mini sandbox"
              data-src="${escapeHtml(project.url)}"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
            ></iframe>
            <button class="button small preview-button" type="button" data-preview="${index}">Load preview</button>
          </div>
          <div class="stage-actions">
            <button class="button small primary launch-button" type="button" data-launch="${index}">Launch in stage</button>
            <a class="button small" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">Open live</a>
            <a class="button small ghost" href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">Repo</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function syncSandboxStage(index, scrollStage = false) {
  const project = projects[index] || projects[0];
  state.selectedIndex = projects.indexOf(project);
  elements.stageTitle.textContent = project.title;
  elements.stageSummary.textContent = project.summary;
  elements.stageCategory.textContent = `${project.category} - ${project.language}`;
  elements.stageUrl.textContent = project.url;
  elements.stageLive.href = project.url;
  elements.stageRepo.href = project.repo;
  if (elements.frame.getAttribute("src") !== project.url) {
    elements.frame.src = project.url;
  }
  elements.frame.title = `${project.title} live sandbox`;

  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.toggle("active", Number(card.dataset.index) === state.selectedIndex);
  });

  if (scrollStage) {
    document.querySelector(".sandbox-stage").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function selectProject(index, scrollStage = false) {
  syncSandboxStage(index, scrollStage);

  updateHologram(state.selectedIndex, false);
  highlightDestination(state.selectedIndex);
}

function loadMiniPreview(button) {
  const card = button.closest(".project-card");
  const frame = card.querySelector(".mini-preview iframe");
  if (!frame.src) {
    frame.src = frame.dataset.src;
  }
  button.textContent = "Preview loaded";
  button.disabled = true;
}

function loadVisiblePreviews() {
  document.querySelectorAll(".project-card .preview-button:not(:disabled)").forEach((button) => {
    loadMiniPreview(button);
  });
}

function wireProjectEvents() {
  elements.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderFilters();
    renderProjects();
  });

  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProjects();
  });

  elements.list.addEventListener("click", (event) => {
    const previewButton = event.target.closest("[data-preview]");
    if (previewButton) {
      event.stopPropagation();
      loadMiniPreview(previewButton);
      return;
    }

    const launchButton = event.target.closest("[data-launch]");
    const card = event.target.closest(".project-card");
    if (launchButton) {
      selectProject(Number(launchButton.dataset.launch), true);
      return;
    }

    if (card && !event.target.closest("a")) {
      selectProject(Number(card.dataset.index));
    }
  });

  elements.shuffle.addEventListener("click", () => {
    const filtered = getFilteredProjects();
    const next = filtered[Math.floor(Math.random() * filtered.length)] || projects[0];
    selectProject(projects.indexOf(next), true);
  });

  elements.loadVisible.addEventListener("click", loadVisiblePreviews);
}

function animateCounts() {
  const counters = document.querySelectorAll("[data-count]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    if (reduceMotion) {
      counter.textContent = target;
      return;
    }

    let current = 0;
    const step = Math.max(1, Math.ceil(target / 42));
    const interval = window.setInterval(() => {
      current = Math.min(target, current + step);
      counter.textContent = current;
      if (current >= target) {
        window.clearInterval(interval);
      }
    }, 28);
  });
}

function wireClipboard() {
  elements.copyEmail.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("simon3m3ll3m@gmail.com");
      elements.copyEmail.textContent = "I copied my email";
    } catch {
      elements.copyEmail.textContent = "My email: simon3m3ll3m@gmail.com";
    }
  });
}

function setMissionHud(phase, objective, progress) {
  if (elements.missionPhase) elements.missionPhase.textContent = phase;
  if (elements.missionObjective) elements.missionObjective.textContent = objective;
  if (elements.missionProgress && Number.isFinite(progress)) {
    elements.missionProgress.style.width = `${Math.max(0, Math.min(100, progress))}%`;
  }
}

function setAutoPilot(enabled) {
  cosmicState.autoPilot = enabled;
  elements.autoPilot.textContent = enabled ? "Autopilot on" : "Manual flight";
  elements.autoPilot.setAttribute("aria-pressed", String(enabled));
  setMissionHud(
    enabled ? "Autopilot route active" : "Manual flight active",
    enabled ? "I am guiding the ship toward the next project destination." : "Use WASD, arrows, touch controls, or pointer movement to fly.",
    enabled ? 48 : 18
  );
}

function closeLaunchSequence() {
  if (!elements.launchSequence) return;
  elements.launchSequence.classList.remove("active");
  elements.launchSequence.setAttribute("aria-hidden", "true");
  cosmicState.launching = false;
}

function dockActiveProject() {
  selectProject(cosmicState.activeIndex, true);
  closeLaunchSequence();
  cosmicState.dockedUntil = Date.now() + DOCK_MESSAGE_MS;
  setMissionHud("Docking complete", "I opened the selected live sandbox in the project bay.", 100);
  playSoftSignal();
}

function runLaunchSequence() {
  if (!elements.launchSequence) return;

  cosmicState.launching = true;
  elements.launchSequence.classList.add("active");
  elements.launchSequence.setAttribute("aria-hidden", "false");
  LAUNCH_STEPS.forEach((step, index) => {
    window.setTimeout(() => {
      if (!cosmicState.launching) return;
      elements.launchStep.textContent = step;
      elements.launchMeter.style.width = `${((index + 1) / LAUNCH_STEPS.length) * 100}%`;
      setMissionHud("Launch sequence", step, ((index + 1) / LAUNCH_STEPS.length) * 100);
    }, index * 520);
  });

  window.setTimeout(() => {
    if (!cosmicState.launching) return;
    closeLaunchSequence();
    setMissionHud("Exploration mode", "Approach a glowing destination, then dock into its live sandbox.", 55);
  }, LAUNCH_STEPS.length * 520 + 720);
}

function updateHologram(index, loadPreview = true) {
  const project = projects[index] || projects[0];
  cosmicState.activeIndex = projects.indexOf(project);
  syncSandboxStage(cosmicState.activeIndex, false);
  elements.holoTitle.textContent = project.title;
  elements.holoSummary.textContent = project.summary;
  elements.holoCategory.textContent = project.category;
  elements.holoTech.textContent = project.language || "Live web";
  elements.holoLive.href = project.url;
  elements.holoRepo.href = project.repo;

  if (elements.holoPreview.getAttribute("src") !== project.url) {
    elements.holoPreview.src = project.url;
    elements.holoPreview.title = `${project.title} mini demo`;
    cosmicState.lastPreviewIndex = cosmicState.activeIndex;
  }

  document.querySelectorAll(".quick-destination").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.index) === cosmicState.activeIndex);
  });

  if (elements.shipStatus) {
    elements.shipStatus.textContent = `Scanning ${project.title}`;
  }
}

function highlightDestination(index) {
  cosmicState.destinationMeshes.forEach((mesh) => {
    const active = mesh.userData.index === index;
    mesh.scale.setScalar(active ? 1.45 : 1);
    if (mesh.material?.emissive) {
      mesh.material.emissiveIntensity = active ? 1.45 : 0.55;
    }
  });
}

function renderQuickDestinations() {
  elements.quickDestinationList.innerHTML = projects
    .map((project, index) => `
      <button class="quick-destination ${index === cosmicState.activeIndex ? "active" : ""}" type="button" data-index="${index}">
        ${escapeHtml(project.title)}
        <span>${escapeHtml(project.category)} - ${escapeHtml(project.language || "Live web")}</span>
      </button>
    `)
    .join("");

  elements.destinationCount.textContent = `${projects.length} destinations online`;
}

function wireCosmicControls() {
  elements.beginExploration.addEventListener("click", () => {
    cosmicState.launched = true;
    document.body.classList.add("mission-launched");
    setAutoPilot(true);
    runLaunchSequence();
    elements.destinationPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    updateHologram(cosmicState.activeIndex, true);
    playSoftSignal();
  });

  elements.autoPilot.addEventListener("click", () => {
    setAutoPilot(!cosmicState.autoPilot);
    elements.shipStatus.textContent = cosmicState.autoPilot ? "Autopilot scanning destinations" : "Manual controls active";
    playSoftSignal();
  });

  elements.audioToggle.addEventListener("click", async () => {
    const enabled = await toggleAmbientAudio();
    elements.audioToggle.textContent = enabled ? "Ambient audio on" : "Ambient audio off";
    elements.audioToggle.setAttribute("aria-pressed", String(enabled));
  });

  elements.enterSandbox.addEventListener("click", () => {
    dockActiveProject();
  });

  elements.quickToggle.addEventListener("click", () => {
    const open = elements.quickToggle.getAttribute("aria-expanded") !== "true";
    elements.quickToggle.setAttribute("aria-expanded", String(open));
    elements.quickToggle.closest(".quick-destinations").classList.toggle("open", open);
  });

  elements.quickDestinationList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    const index = Number(button.dataset.index);
    cosmicState.activeIndex = index;
    setAutoPilot(true);
    updateHologram(index, true);
    highlightDestination(index);
    playSoftSignal();
  });

  window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (FLIGHT_KEYS.has(key)) {
      cosmicState.keys.add(key);
      setAutoPilot(false);
    }
  });

  window.addEventListener("keyup", (event) => {
    cosmicState.keys.delete(event.key.toLowerCase());
  });

  elements.galaxyCanvas.addEventListener("pointermove", (event) => {
    const rect = elements.galaxyCanvas.getBoundingClientRect();
    cosmicState.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    cosmicState.pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
  });

  elements.touchFlightButtons.forEach((button) => {
    const key = button.dataset.flight;
    const start = (event) => {
      event.preventDefault();
      cosmicState.keys.add(key);
      setAutoPilot(false);
    };
    const stop = (event) => {
      event.preventDefault();
      cosmicState.keys.delete(key);
    };
    button.addEventListener("pointerdown", start);
    button.addEventListener("pointerup", stop);
    button.addEventListener("pointerleave", stop);
    button.addEventListener("pointercancel", stop);
  });

  elements.dockButton.addEventListener("click", () => {
    dockActiveProject();
  });
}

async function toggleAmbientAudio() {
  if (!cosmicState.audio) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return false;
    const context = new AudioContext();
    const gain = context.createGain();
    gain.gain.value = 0.018;
    gain.connect(context.destination);

    const oscillators = [82, 123, 185].map((frequency) => {
      const oscillator = context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      oscillator.connect(gain);
      oscillator.start();
      return oscillator;
    });

    cosmicState.audio = { context, gain, oscillators, enabled: true };
    return true;
  }

  if (cosmicState.audio.context.state === "suspended") {
    await cosmicState.audio.context.resume();
    cosmicState.audio.enabled = true;
    return true;
  }

  await cosmicState.audio.context.suspend();
  cosmicState.audio.enabled = false;
  return false;
}

function playSoftSignal() {
  if (!cosmicState.audio?.enabled || cosmicState.audio.context.state !== "running") return;
  const oscillator = cosmicState.audio.context.createOscillator();
  const gain = cosmicState.audio.context.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.value = 620;
  gain.gain.setValueAtTime(0.0001, cosmicState.audio.context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.05, cosmicState.audio.context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, cosmicState.audio.context.currentTime + 0.28);
  oscillator.connect(gain);
  gain.connect(cosmicState.audio.context.destination);
  oscillator.start();
  oscillator.stop(cosmicState.audio.context.currentTime + 0.3);
}

function startCosmicScene() {
  if (!elements.galaxyCanvas || !window.THREE) {
    document.body.classList.add("no-webgl");
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const THREE = window.THREE;
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050711, 0.012);

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 900);
  const renderer = new THREE.WebGLRenderer({
    canvas: elements.galaxyCanvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
    preserveDrawingBuffer: true
  });
  renderer.setClearColor(0x03040d, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));

  const ambient = new THREE.AmbientLight(0x8ecfff, 0.52);
  const keyLight = new THREE.PointLight(0xc7ff5b, 1.2, 160);
  keyLight.position.set(10, 24, 18);
  scene.add(ambient, keyLight);

  const ship = createShip(THREE);
  ship.position.set(0, 0, 14);
  cosmicState.velocity = new THREE.Vector3();
  scene.add(ship);

  const starField = createStarField(THREE, reduceMotion ? 680 : 1400);
  const nebula = createNebula(THREE, reduceMotion ? 160 : 360);
  scene.add(starField, nebula);

  const destinationGroup = new THREE.Group();
  scene.add(destinationGroup);
  const destinations = createDestinations(THREE, destinationGroup);
  cosmicState.destinations = destinations;

  const raycaster = new THREE.Raycaster();
  const clickMouse = new THREE.Vector2();

  elements.galaxyCanvas.addEventListener("click", (event) => {
    const rect = elements.galaxyCanvas.getBoundingClientRect();
    clickMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    clickMouse.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    raycaster.setFromCamera(clickMouse, camera);
    const hits = raycaster.intersectObjects(cosmicState.destinationMeshes, true);
    if (!hits.length) return;
    const index = hits[0].object.userData.index ?? hits[0].object.parent?.userData.index;
    if (Number.isInteger(index)) {
      cosmicState.activeIndex = index;
      setAutoPilot(true);
      updateHologram(index, true);
      highlightDestination(index);
      playSoftSignal();
    }
  });

  function resize() {
    const rect = elements.galaxyCanvas.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  function animate(time = 0) {
    resize();
    const t = time * 0.001;
    starField.rotation.y = t * 0.015;
    nebula.rotation.y = -t * 0.01;
    destinationGroup.rotation.y = Math.sin(t * 0.08) * 0.08;

    moveShip(ship, destinations, reduceMotion);
    updateNearestDestination(ship, destinations);

    ship.rotation.z = THREE.MathUtils.lerp(ship.rotation.z, -cosmicState.pointer.x * 0.34, 0.04);
    ship.rotation.x = THREE.MathUtils.lerp(ship.rotation.x, cosmicState.pointer.y * 0.16, 0.04);
    ship.traverse((thruster) => {
      if (!thruster.userData.thruster) return;
      const pulse = 1 + Math.sin(t * 18) * 0.18 + (cosmicState.autoPilot ? 0.16 : 0.32);
      thruster.scale.set(1, pulse, 1);
      thruster.material.opacity = cosmicState.autoPilot ? 0.72 : 0.9;
    });

    const follow = new THREE.Vector3(ship.position.x, ship.position.y + 9, ship.position.z + 30);
    camera.position.lerp(follow, 0.05);
    const lookTarget = destinations[cosmicState.activeIndex]?.position || ship.position;
    camera.lookAt(lookTarget.x, lookTarget.y, lookTarget.z);

    destinations.forEach((destination, index) => {
      destination.group.rotation.y += 0.004 + (index % 5) * 0.0007;
      destination.group.children.forEach((child) => {
        if (child.userData.orbit) child.rotation.z += 0.008;
      });
    });

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  resize();
  highlightDestination(cosmicState.activeIndex);
  updateHologram(cosmicState.activeIndex, true);
  animate();
}

function createShip(THREE) {
  const ship = new THREE.Group();
  ship.scale.setScalar(1.24);

  const hullMaterial = new THREE.MeshStandardMaterial({
    color: 0xf4fbff,
    metalness: 0.46,
    roughness: 0.28,
    emissive: 0x103d66,
    emissiveIntensity: 0.22
  });
  const trimMaterial = new THREE.MeshStandardMaterial({
    color: 0x61f4ff,
    metalness: 0.34,
    roughness: 0.24,
    emissive: 0x1fb8ff,
    emissiveIntensity: 0.62
  });
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: 0x9bf7ff,
    metalness: 0.08,
    roughness: 0.08,
    emissive: 0x61f4ff,
    emissiveIntensity: 0.85,
    transparent: true,
    opacity: 0.84
  });
  const engineMaterial = new THREE.MeshStandardMaterial({
    color: 0x1b2848,
    metalness: 0.58,
    roughness: 0.26,
    emissive: 0xff8fd6,
    emissiveIntensity: 0.42
  });

  const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.58, 3.2, 28), hullMaterial);
  fuselage.rotation.x = Math.PI / 2;

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.48, 1.02, 28), hullMaterial);
  nose.rotation.x = -Math.PI / 2;
  nose.position.z = -2.08;

  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.34, 22, 14), glassMaterial);
  cockpit.scale.set(1, 0.62, 1.25);
  cockpit.position.set(0, 0.42, -0.8);

  const leftWing = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.08, 0.64), trimMaterial);
  leftWing.position.set(-0.86, -0.05, 0.18);
  leftWing.rotation.z = 0.2;
  leftWing.rotation.y = -0.18;
  const rightWing = leftWing.clone();
  rightWing.position.x = 0.86;
  rightWing.rotation.z = -0.2;
  rightWing.rotation.y = 0.18;

  const tailFin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.86, 0.54), trimMaterial);
  tailFin.position.set(0, 0.5, 1.26);
  tailFin.rotation.x = -0.22;

  const leftFin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.52, 0.5), trimMaterial);
  leftFin.position.set(-0.52, -0.38, 1.32);
  leftFin.rotation.z = -0.52;
  const rightFin = leftFin.clone();
  rightFin.position.x = 0.52;
  rightFin.rotation.z = 0.52;

  const engineCore = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.4, 0.8, 22), engineMaterial);
  engineCore.rotation.x = Math.PI / 2;
  engineCore.position.z = 1.86;
  const leftEngine = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.72, 18), engineMaterial);
  leftEngine.rotation.x = Math.PI / 2;
  leftEngine.position.set(-0.48, -0.08, 1.68);
  const rightEngine = leftEngine.clone();
  rightEngine.position.x = 0.48;

  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 8), glassMaterial);
  beacon.position.set(0, 0.86, 0.52);

  const flameMaterial = new THREE.MeshBasicMaterial({
    color: 0xff8fd6,
    transparent: true,
    opacity: 0.78
  });
  const mainFlame = new THREE.Mesh(new THREE.ConeGeometry(0.34, 1.52, 22), flameMaterial.clone());
  mainFlame.rotation.x = Math.PI / 2;
  mainFlame.position.z = 2.55;
  mainFlame.userData.thruster = true;
  const leftFlame = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.92, 16), flameMaterial.clone());
  leftFlame.rotation.x = Math.PI / 2;
  leftFlame.position.set(-0.48, -0.08, 2.22);
  leftFlame.userData.thruster = true;
  const rightFlame = leftFlame.clone();
  rightFlame.material = flameMaterial.clone();
  rightFlame.position.x = 0.48;
  rightFlame.userData.thruster = true;

  const engineGlow = new THREE.PointLight(0xff8fd6, 0.75, 16);
  engineGlow.position.set(0, 0, 2.35);

  ship.add(
    fuselage,
    nose,
    cockpit,
    leftWing,
    rightWing,
    tailFin,
    leftFin,
    rightFin,
    engineCore,
    leftEngine,
    rightEngine,
    beacon,
    mainFlame,
    leftFlame,
    rightFlame,
    engineGlow
  );
  return ship;
}

function createStarField(THREE, count) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    const radius = 80 + Math.random() * 310;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.cos(phi) * 0.62;
    positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 120;
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      color: 0xeaf9ff,
      size: 0.9,
      transparent: true,
      opacity: 0.82,
      sizeAttenuation: true
    })
  );
}

function createNebula(THREE, count) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [
    new THREE.Color(0x61f4ff),
    new THREE.Color(0xa76cff),
    new THREE.Color(0xff6bcb),
    new THREE.Color(0xc7ff5b)
  ];

  for (let index = 0; index < count; index += 1) {
    const radius = 18 + Math.random() * 130;
    const angle = index * 0.21;
    positions[index * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 18;
    positions[index * 3 + 1] = (Math.random() - 0.5) * 26;
    positions[index * 3 + 2] = Math.sin(angle) * radius - 80 + (Math.random() - 0.5) * 30;
    const color = palette[index % palette.length];
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 3.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.62,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
}

function createDestinations(THREE, parent) {
  const categoryShapes = {
    "SAP + Learning": "station",
    Product: "satellite",
    Creative: "nebula",
    Commerce: "planet",
    Wellness: "moon",
    Finance: "station",
    Climate: "planet",
    Travel: "planet",
    Game: "asteroid",
    Client: "satellite",
    Portfolio: "station",
    Productivity: "moon"
  };

  return projects.map((project, index) => {
    const angle = index * 0.58;
    const radius = 22 + index * 0.82;
    const position = new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(index * 0.74) * 6,
      Math.sin(angle) * radius - 68 - index * 0.18
    );
    const group = new THREE.Group();
    group.position.copy(position);
    group.userData.index = index;

    const color = new THREE.Color(project.accent || "#61f4ff");
    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.42,
      metalness: 0.16,
      emissive: color,
      emissiveIntensity: 0.55
    });
    const wireMaterial = new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      transparent: true,
      opacity: 0.34
    });

    const shape = categoryShapes[project.category] || "planet";
    let core;
    if (shape === "station") {
      core = new THREE.Mesh(new THREE.OctahedronGeometry(1.05, 1), material);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.035, 8, 64), wireMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.userData.orbit = true;
      group.add(ring);
    } else if (shape === "satellite") {
      core = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.0, 1.0), material);
      const panel = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.05, 0.78), wireMaterial);
      panel.userData.orbit = true;
      group.add(panel);
    } else if (shape === "asteroid") {
      core = new THREE.Mesh(new THREE.DodecahedronGeometry(1.12, 0), material);
    } else if (shape === "nebula") {
      core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 1), material);
      const halo = new THREE.Mesh(new THREE.SphereGeometry(2.05, 24, 12), wireMaterial);
      halo.userData.orbit = true;
      group.add(halo);
    } else if (shape === "moon") {
      core = new THREE.Mesh(new THREE.SphereGeometry(0.92, 22, 16), material);
      const orbit = new THREE.Mesh(new THREE.TorusGeometry(1.52, 0.02, 8, 50), wireMaterial);
      orbit.rotation.y = Math.PI / 2.6;
      orbit.userData.orbit = true;
      group.add(orbit);
    } else {
      core = new THREE.Mesh(new THREE.SphereGeometry(1.18, 24, 16), material);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.04, 8, 60), wireMaterial);
      ring.rotation.x = Math.PI / 2.5;
      ring.userData.orbit = true;
      group.add(ring);
    }

    core.userData.index = index;
    core.userData.project = project.title;
    group.add(core);
    group.scale.setScalar(project.featured ? 1.55 : 1.35);
    parent.add(group);
    cosmicState.destinationMeshes.push(core);
    return { project, group, core, position };
  });
}

function moveShip(ship, destinations, reduceMotion) {
  const THREE = window.THREE;
  if (!cosmicState.velocity) cosmicState.velocity = new THREE.Vector3();
  if (!cosmicState.launched) {
    cosmicState.velocity.multiplyScalar(0.88);
    ship.position.lerp(new THREE.Vector3(0, 0, 14), reduceMotion ? 0.05 : 0.025);
    return;
  }

  const target = destinations[cosmicState.activeIndex]?.position;
  if (cosmicState.autoPilot && target) {
    const desired = target.clone().add(new THREE.Vector3(0, 1.2, 8));
    const force = desired.clone().sub(ship.position).multiplyScalar(reduceMotion ? 0.018 : 0.012);
    cosmicState.velocity.lerp(force, reduceMotion ? 0.12 : 0.07);
    cosmicState.velocity.clampLength(0, reduceMotion ? 0.38 : 0.74);
    ship.position.add(cosmicState.velocity);
    if (ship.position.distanceTo(desired) < 3.2 && !reduceMotion) {
      const next = (cosmicState.activeIndex + 1) % projects.length;
      if (Math.random() > 0.988) {
        cosmicState.activeIndex = next;
        updateHologram(next, false);
        highlightDestination(next);
      }
    }
    return;
  }

  const speed = reduceMotion ? 0.08 : 0.14;
  const forward = cosmicState.keys.has("w") || cosmicState.keys.has("arrowup") ? -speed : 0;
  const back = cosmicState.keys.has("s") || cosmicState.keys.has("arrowdown") ? speed : 0;
  const left = cosmicState.keys.has("a") || cosmicState.keys.has("arrowleft") ? -speed : 0;
  const right = cosmicState.keys.has("d") || cosmicState.keys.has("arrowright") ? speed : 0;
  const thrust = new THREE.Vector3(
    left + right + cosmicState.pointer.x * 0.018,
    cosmicState.pointer.y * 0.014,
    forward + back
  );
  cosmicState.velocity.add(thrust);
  cosmicState.velocity.multiplyScalar(reduceMotion ? 0.82 : 0.9);
  cosmicState.velocity.clampLength(0, reduceMotion ? 0.28 : 0.68);
  ship.position.add(cosmicState.velocity);
  ship.position.x = THREE.MathUtils.clamp(ship.position.x, -72, 72);
  ship.position.y = THREE.MathUtils.clamp(ship.position.y, -20, 24);
  ship.position.z = THREE.MathUtils.clamp(ship.position.z, -140, 34);
}

function updateNearestDestination(ship, destinations) {
  let nearest = cosmicState.activeIndex;
  let nearestDistance = Infinity;
  destinations.forEach((destination, index) => {
    const distance = ship.position.distanceTo(destination.position);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearest = index;
    }
  });

  if (!cosmicState.launched) {
    if (elements.shipStatus) {
      elements.shipStatus.textContent = "Mission Control ready - press Launch Portfolio";
    }
    setMissionHud("Mission Control online", "Launch when ready, then pilot toward a glowing destination.", 8);
    return;
  }

  if (!cosmicState.autoPilot && nearest !== cosmicState.activeIndex && nearestDistance < 13) {
    cosmicState.activeIndex = nearest;
    updateHologram(nearest, false);
    highlightDestination(nearest);
  }

  if (elements.shipStatus) {
    const project = projects[cosmicState.activeIndex];
    const distance = Math.max(0, Math.round(nearestDistance));
    const speed = cosmicState.velocity ? Math.round(cosmicState.velocity.length() * 100) : 0;
    const dockReady = nearestDistance < 8;
    const mode = cosmicState.autoPilot ? "Autopilot" : "Manual";
    elements.shipStatus.textContent = dockReady
      ? `${mode} docking range: ${project.title} - press Dock`
      : `${mode} approaching ${project.title} - ${distance} AU - speed ${speed}`;
    if (!cosmicState.launching && Date.now() > cosmicState.dockedUntil) {
      setMissionHud(
        dockReady ? "Docking range" : `${mode} navigation`,
        dockReady ? `I am close enough to enter ${project.title}.` : `Approaching ${project.title} through my project universe.`,
        dockReady ? 100 : Math.max(10, Math.min(92, 100 - nearestDistance * 2.4))
      );
    }
  }
}

renderFilters();
renderProjects();
selectProject(2);
wireProjectEvents();
renderQuickDestinations();
wireCosmicControls();
wireClipboard();
animateCounts();
startCosmicScene();
