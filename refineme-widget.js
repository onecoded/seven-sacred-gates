/**
 * Evolve Earth Studio — Universal 7-Chakra Theme Controller, Widget Mover &
 * Self-Referential Self-Improving Testing Footer v8.0
 * Canonical Source: public-edge-bundle Throat - Expression\AGENT REQUIREMENTS\Approved Stylesheets\refineme-widget.js
 *
 * Features on EVERY page (:7863, :7871, :7872, :8650, :8655, :8941, and file:///):
 *   1. Universal Visible Global Footer (#ee-global-self-improve-footer .ee-global-footer):
 *      - Automatically mounted at the bottom of EVERY page during the testing phase
 *      - Asks for direct page/widget feedback (1-click YAY / Improve / Cluttered verdicts + chips + note)
 *      - Self-Referential Page Hook (window.__EE_SELF_IMPROVE_HOOK__):
 *        * Knows its own page slug, URL, mapped public-edge-bundle source file & generator script, and live DOM telemetry
 *        * Applies instant self-improving DOM/CSS mutations (1-by-1 Calm Focus, Declutter to Bottom, Boost Typography,
 *          Hide Tech Noise, Wide Media) and persists them per-page in localStorage + :8655/api/self-improve-hook
 *        * Runs live page self-diagnostics & generator --selftest from the footer button
 *   2. Universal Widget Controls on every dashboard section / widget / model card:
 *      - [↑] Move Up · [↓] Move Down · [↡ Bottom] Demote · [× Archive] Hide · [Self-Improve] Target widget
 *   3. 7-Chakra Spectrum + Dark/Light Mode Switcher (Dark Mode Default)
 */
(function () {
  "use strict";
  if (window.__EE_REFINEME_V6__) return;
  window.__EE_REFINEME_V6__ = true;
  window.__EE_FEEDBACK_DOCK_LOADED__ = true;

  var STORAGE_CHAKRA = "evolve_chakra_theme_v6";
  var STORAGE_MODE = "evolve_color_mode_v12_white";
  var STORAGE_LAYOUT_PREFIX = "ee_widget_layout_v2:";
  var STORAGE_PATCH_PREFIX = "ee_self_improve_patches_v1:";
  var STORAGE_SI_LOG = "ee_self_improve_log_v2";

  var CHAKRAS = [
    { id: "root",     num: "01", label: "Root",      sub: "396 Hz Obsidian" },
    { id: "sacral",   num: "02", label: "Sacral",    sub: "417 Hz Terracotta" },
    { id: "solar",    num: "03", label: "Solar",     sub: "528 Hz Citrine" },
    { id: "heart",    num: "04", label: "Heart",     sub: "639 Hz Emerald" },
    { id: "throat",   num: "05", label: "Throat",    sub: "741 Hz Sapphire" },
    { id: "thirdeye", num: "06", label: "Third Eye", sub: "852 Hz Indigo" },
    { id: "crown",    num: "07", label: "Crown",     sub: "963 Hz Violet Gold" }
  ];

  var KNOWN_GENERATOR_MAP = {
    "sacred-gates-studio.html": {
      source: "public-edge-bundle",
      generator: "sacred_gates_studio__meditation_packet.py"
    },
    "one-portal.html": {
      source: "public-edge-bundle",
      generator: "build_one_portal__all_surfaces_to_html.py"
    },
    "visual-studio-ide.html": {
      source: "public-edge-bundle",
      generator: "build_visual_studio_ide__tools_and_conductor_to_html.py"
    },
    "single-track-train-conductor.html": {
      source: "public-edge-bundle",
      generator: "build_visual_studio_ide__tools_and_conductor_to_html.py"
    },
    "multi-agent-smart-roi-dash.html": {
      source: "public-edge-bundle",
      generator: "multi_agent_smart_roi__live_dash_and_roa_queue.py"
    },
    "next-level-picker-hub.html": {
      source: "public-edge-bundle",
      generator: "next_level_picker_server.py"
    },
    "daily-quota-harvester.html": {
      source: "public-edge-bundle",
      generator: "daily_quota_harvester__use_it_or_lose_it.py"
    },
    "prompt-engine-masterpiece.html": {
      source: "public-edge-bundle",
      generator: "build_prompt_engine_masterpiece__all_surfaces_to_html.py"
    },
    "global-style-audit.html": {
      source: "public-edge-bundle",
      generator: "enforce_global_css_and_zero_inline__repo_to_clean.py"
    },
    "chakra-destiny.html": {
      source: "public-edge-bundle JOURNEY\\chakra-destiny.html",
      generator: "sacred_gates_studio__meditation_packet.py"
    },
    "dashboard.html": {
      source: "public-edge-bundle",
      generator: "enforce_global_css_and_zero_inline__repo_to_clean.py"
    }
  };

  var STUDIO_FOLDER_TREE = [
    {
      id: "studio-shell",
      num: "01",
      title: "Studio Shell & Seven Rooms",
      folder: "public-edge-bundle",
      relFolder: "studio\\shell",
      port: ":7863",
      desc: "Primary Studio HTTP server (shell_server.py), One-Portal Command Deck, Model Approval Gate, and the 7 Creative Rooms.",
      items: [
        { title: "One-Portal Command Deck", file: "ONE-PORTAL.html", href: "/portal", match: ["/portal", "one-portal.html"], path: "public-edge-bundle", role: "Unified Studio Entry & Surface Launcher" },
        { title: "The Oracle Sanctuary", file: "oracle.html", href: "/oracle", match: ["/oracle", "oracle.html"], path: "public-edge-bundle", role: "Multi-Agent Oracle & Guided Prompting" },
        { title: "Model & Toolset Approval Gate", file: "approve-models.html", href: "/approve-models", match: ["/approve-models", "approve-models.html"], path: "public-edge-bundle", role: "YAY/NAY Model.Tool Approval Registry" },
        { title: "Studio Shell Dashboard", file: "dash.html", href: "/dash", match: ["/dash", "dash.html"], path: "public-edge-bundle", role: "Live GPU, Docker & Room Overview" },
        { title: "Create Room", file: "create.html", href: "/create", match: ["/create", "create.html"], path: "public-edge-bundle", role: "Image, Video, Voice & Music Generation" },
        { title: "Train Room", file: "train.html", href: "/train", match: ["/train", "train.html"], path: "public-edge-bundle", role: "LoRA & Dataset Training Controls" },
        { title: "River & Queue Rooms", file: "river.html", href: "/river", match: ["/river", "/queue", "river.html", "queue.html"], path: "public-edge-bundle", role: "Live Generation Stream & Job Queue" },
        { title: "Sanctum & Publish Rooms", file: "sanctum.html", href: "/sanctum", match: ["/sanctum", "/publish", "sanctum.html", "publish.html"], path: "public-edge-bundle", role: "Curated Vault & Publishing Pipeline" }
      ]
    },
    {
      id: "visual-ides-dash",
      num: "02",
      title: "Visual IDEs & Studio Dashboards",
      folder: "public-edge-bundle",
      relFolder: "train-requests\\_dash",
      port: ":7872",
      desc: "Generated Visual IDEs, Single-Track Train Conductor, Multi-Agent Smart ROI, Picker Hub, and Style Audit surfaces.",
      items: [
        { title: "Visual Studio IDE Walkthrough", file: "VISUAL-STUDIO-IDE.html", href: "./VISUAL-STUDIO-IDE.html", match: ["visual-studio-ide.html", "/visual-ide"], path: "public-edge-bundle", role: "Step-by-Step Visual IDE & Tool Launcher" },
        { title: "Single-Track Train Conductor", file: "SINGLE-TRACK-TRAIN-CONDUCTOR.html", href: "./SINGLE-TRACK-TRAIN-CONDUCTOR.html", match: ["single-track-train-conductor.html", "/conductor"], path: "public-edge-bundle", role: "Strict 1-by-1 GPU Turnstile & Queue Monitor" },
        { title: "Multi-Agent Smart ROI & ROA Queue", file: "MULTI-AGENT-SMART-ROI-DASH.html", href: "./MULTI-AGENT-SMART-ROI-DASH.html", match: ["multi-agent-smart-roi-dash.html"], path: "public-edge-bundle", role: "Subscription ROI & Autonomous Agent Queue" },
        { title: "Next-Level Picker Hub", file: "NEXT-LEVEL-PICKER-HUB.html", href: "./NEXT-LEVEL-PICKER-HUB.html", match: ["next-level-picker-hub.html"], path: "public-edge-bundle", role: "Interactive Media & Parameter Picker (:8655)" },
        { title: "Sacred Gates Studio", file: "SACRED-GATES-STUDIO.html", href: "./SACRED-GATES-STUDIO.html", match: ["sacred-gates-studio.html"], path: "public-edge-bundle", role: "7-Chakra Meditation, Voice & Music Packet" },
        { title: "Prompt Engine Masterpiece", file: "PROMPT-ENGINE-MASTERPIECE.html", href: "./PROMPT-ENGINE-MASTERPIECE.html", match: ["prompt-engine-masterpiece.html"], path: "public-edge-bundle", role: "Master Prompt Templates & Model Matrix" },
        { title: "Daily Quota Harvester", file: "DAILY-QUOTA-HARVESTER.html", href: "./DAILY-QUOTA-HARVESTER.html", match: ["daily-quota-harvester.html"], path: "public-edge-bundle", role: "Use-It-Or-Lose-It Subscription Quota Runner" },
        { title: "Global Style & Zero-Inline Audit", file: "GLOBAL-STYLE-AUDIT.html", href: "./GLOBAL-STYLE-AUDIT.html", match: ["global-style-audit.html"], path: "public-edge-bundle", role: "Repo-Wide CSS & Zero-Inline Verification" }
      ]
    },
    {
      id: "fuel-gauge-roi",
      num: "03",
      title: "AI Subscription & Fuel Gauge Monitor",
      folder: "public-edge-bundle",
      relFolder: "claude-usage-monitor",
      port: ":7871",
      desc: "Truth-first $600/mo AI subscription stack monitor, 5-hour block pacing, and zero-bias task router.",
      items: [
        { title: "Subscription Fuel Gauge & Task Router", file: "dashboard.html", href: "http://127.0.0.1:7871/", match: ["claude-usage-monitor", "dashboard.html", ":7871/"], path: "public-edge-bundle", role: "Live Token/Credit Pacing & Decomposer" },
        { title: "Compact Floating Fuel Widget", file: "widget.html", href: "http://127.0.0.1:7871/widget.html", match: ["widget.html"], path: "public-edge-bundle", role: "Mini Desktop Status Bar" }
      ]
    },
    {
      id: "ops-generators",
      num: "04",
      title: "Operations, Turnstile & HTML Generators",
      folder: "public-edge-bundle",
      relFolder: "train-requests\\_ops",
      port: ":8655",
      desc: "Self-describing Python [in]__[out].py scripts, Single-Track GPU Turnstile, and Self-Improve Hook server.",
      items: [
        { title: "Global CSS & Zero-Inline Enforcer", file: "enforce_global_css_and_zero_inline__repo_to_clean.py", href: "./GLOBAL-STYLE-AUDIT.html", match: ["enforce_global_css"], path: "public-edge-bundle", role: "Syncs CSS/JS & strips inline styles repo-wide" },
        { title: "Visual Studio IDE Builder", file: "build_visual_studio_ide__tools_and_conductor_to_html.py", href: "./VISUAL-STUDIO-IDE.html", match: ["build_visual_studio_ide"], path: "public-edge-bundle", role: "Builds Visual IDE & Train Conductor HTML" },
        { title: "Next-Level Picker & Self-Improve Server", file: "next_level_picker_server.py", href: "/api/self-improve-hook", match: [":8655", "next_level_picker_server"], path: "public-edge-bundle", role: "Live Picker & Self-Diagnostic Endpoint (:8655)" },
        { title: "Single-Track GPU Turnstile Library", file: "_lib\\train_turnstile.py", href: "./SINGLE-TRACK-TRAIN-CONDUCTOR.html", match: ["train_turnstile"], path: "public-edge-bundle", role: "Hardware lock & VRAM pre-emption gate" }
      ]
    },
    {
      id: "vault-stylesheets",
      num: "05",
      title: "7-Chakra Vault & Approved Stylesheets",
      folder: "public-edge-bundle Throat - Expression\\AGENT REQUIREMENTS\\Approved Stylesheets",
      relFolder: "vault\\05 Throat - Expression",
      port: "Vault",
      desc: "Canonical single source of truth for evolve-unified-theme.css, refineme-widget.js, and 01-07 Chakra knowledge folders.",
      items: [
        { title: "Canonical Unified Theme CSS (v9.0)", file: "evolve-unified-theme.css", href: "/evolve-unified-theme.css", match: ["evolve-unified-theme.css"], path: "public-edge-bundle Throat - Expression\\AGENT REQUIREMENTS\\Approved Stylesheets\\evolve-unified-theme.css", role: "Dark-Mode-Default 7-Chakra Master Stylesheet" },
        { title: "Universal Header, Footer & Self-Improve JS", file: "refineme-widget.js", href: "/refineme-widget.js", match: ["refineme-widget.js"], path: "public-edge-bundle Throat - Expression\\AGENT REQUIREMENTS\\Approved Stylesheets\\refineme-widget.js", role: "Universal Header/Footer Tree & Self-Improve Hook" },
        { title: "Vault Root (01 Root to 07 Crown)", file: "public-edge-bundle", href: "/portal", match: ["/vault/"], path: "public-edge-bundle", role: "7-Chakra Studio Knowledge Base & Specs" }
      ]
    },
    {
      id: "galleries-datasets",
      num: "06",
      title: "Creative Galleries & LoRA Datasets",
      folder: "public-edge-bundle",
      relFolder: "public-edge-bundle",
      port: "D: / C:",
      desc: "Curated images, videos, music, prints, books, and Joseph Face/Voice master datasets.",
      items: [
        { title: "Master Gallery Hub (public-edge-bundle)", file: "public-edge-bundle", href: "/river", match: ["evolveearth-gallery"], path: "public-edge-bundle", role: "Oracle, Images, Videos, Music, Prints & Books" },
        { title: "C-Drive Studio Gallery Mirror", file: "public-edge-bundle", href: "/create", match: ["_gallery_c"], path: "public-edge-bundle", role: "Fast NVMe Render Output & Preview Cache" },
        { title: "Joseph Face & Voice Master Datasets", file: "public-edge-bundle", href: "/train", match: ["_lora_in"], path: "public-edge-bundle", role: "Approved Identity Masters & LoRA Training Inputs" }
      ]
    },
    {
      id: "websites-portals",
      num: "07",
      title: "Websites, Chakra Sanctum & Lineage Portals",
      folder: "public-edge-bundle",
      relFolder: "websites & scratch",
      port: ":8941",
      desc: "Standalone web experiences, Chakra Journey Sanctum (:8941), ClosingClaims OS, and EvolveEarth Family Lineage.",
      items: [
        { title: "Chakra Destiny Sanctum", file: "chakra-destiny.html", href: "http://127.0.0.1:8941/chakra-destiny.html", match: ["chakra-destiny.html", ":8941"], path: "public-edge-bundle JOURNEY\\chakra-destiny.html", role: "Interactive 7-Chakra Frequency Experience" },
        { title: "EvolveEarth Family Tree Gallery", file: "FAMILY-TREE-GALLERY.html", href: "#", match: ["family-tree-gallery.html", "genealogy-storyteller-picker.html"], path: "public-edge-bundle", role: "Epic Lineage Visual Archive & Storyteller" },
        { title: "ClosingClaims Insurance Portal", file: "closingclaims\\index.html", href: "#", match: ["closingclaims"], path: "public-edge-bundle", role: "Allstate & Catastrophe Adjusting Portal" }
      ]
    }
  ];

  function detectTreeLocation() {
    var href = (window.location.href || "").toLowerCase();
    var pathname = (window.location.pathname || "/").toLowerCase();
    var port = window.location.port ? (":" + window.location.port) : "";
    var base = detectFileBasename();
    var srcMeta = detectSourceMetadata();

    var activeBranch = null;
    var activeItem = null;

    for (var b = 0; b < STUDIO_FOLDER_TREE.length; b++) {
      var branch = STUDIO_FOLDER_TREE[b];
      for (var i = 0; i < branch.items.length; i++) {
        var it = branch.items[i];
        var mList = it.match || [];
        for (var m = 0; m < mList.length; m++) {
          var tok = mList[m].toLowerCase();
          if (pathname === tok || base === tok || href.indexOf(tok) !== -1) {
            activeBranch = branch;
            activeItem = it;
            break;
          }
        }
        if (activeItem) break;
      }
      if (activeItem) break;
    }

    if (!activeBranch) {
      if (port === ":7863") activeBranch = STUDIO_FOLDER_TREE[0];
      else if (port === ":7871") activeBranch = STUDIO_FOLDER_TREE[2];
      else if (port === ":8655") activeBranch = STUDIO_FOLDER_TREE[3];
      else if (port === ":8941" || href.indexOf("websites") !== -1 || href.indexOf("scratch") !== -1) activeBranch = STUDIO_FOLDER_TREE[6];
      else activeBranch = STUDIO_FOLDER_TREE[1];
    }

    if (!activeItem) {
      var dynFile = base.toUpperCase();
      activeItem = {
        title: (document.title || dynFile).replace(/\s*[—|-]\s*Evolve.*$/i, "").trim() || dynFile,
        file: dynFile,
        href: window.location.href,
        match: [base],
        path: srcMeta.source,
        role: "Generated Studio HTML Surface",
        isDynamic: true
      };
      var alreadyIn = false;
      for (var k = 0; k < activeBranch.items.length; k++) {
        if (activeBranch.items[k].file.toLowerCase() === base) {
          alreadyIn = true;
          activeItem = activeBranch.items[k];
          break;
        }
      }
      if (!alreadyIn) {
        activeBranch.items.unshift(activeItem);
      }
    }

    var totalLeaves = 0;
    for (var z = 0; z < STUDIO_FOLDER_TREE.length; z++) {
      totalLeaves += STUDIO_FOLDER_TREE[z].items.length;
    }

    var siblings = activeBranch.items.map(function (s) { return s.file; });

    return {
      rootLabel: "public-edge-bundle",
      branch: activeBranch,
      item: activeItem,
      fullPath: activeItem.path || srcMeta.source,
      parentFolder: activeBranch.folder,
      generator: srcMeta.generator,
      serverOrigin: window.location.origin && window.location.origin !== "null" ? window.location.origin : ("file:/// (" + activeBranch.port + ")"),
      siblings: siblings,
      totalBranches: STUDIO_FOLDER_TREE.length,
      totalLeaves: totalLeaves
    };
  }

  function openFolderInExplorer(winPath) {
    var target = winPath || "public-edge-bundle";
    setFooterStatus("Opening folder in Windows Explorer: " + target);
    try {
      fetch("/api/open-explorer-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: target })
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.ok) {
            setFooterStatus("Opened in Windows Explorer: " + (res.path || target));
          } else {
            setFooterStatus("Path copied / ready: " + target);
          }
        })
        .catch(function () {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(target).catch(function () {});
          }
          setFooterStatus("Copied folder path to clipboard: " + target);
        });
    } catch (e) {}
  }

  function detectPageSlug() {
    var p = (window.location.pathname || "").replace(/^\/+|\/+$/g, "");
    if (!p) return "root-index";
    return p.replace(/[^a-zA-Z0-9._-]+/g, "-").toLowerCase();
  }

  function detectFileBasename() {
    var p = (window.location.pathname || "").split("/").filter(Boolean);
    var last = p.length ? p[p.length - 1].toLowerCase() : "index.html";
    if (last.indexOf(".") === -1) return last + ".html";
    return last;
  }

  function detectSourceMetadata() {
    var base = detectFileBasename();
    if (KNOWN_GENERATOR_MAP[base]) return KNOWN_GENERATOR_MAP[base];
    var port = window.location.port || "";
    if (port === "7863") {
      return {
        source: "public-edge-bundle (" + (window.location.pathname || "/") + ")",
        generator: "enforce_global_css_and_zero_inline__repo_to_clean.py"
      };
    }
    if (port === "7871") {
      return {
        source: "public-edge-bundle" + base,
        generator: "enforce_global_css_and_zero_inline__repo_to_clean.py"
      };
    }
    if (port === "8941") {
      return {
        source: "public-edge-bundle JOURNEY\\" + base,
        generator: "sacred_gates_studio__meditation_packet.py"
      };
    }
    return {
      source: "public-edge-bundle" + (base.toUpperCase()),
      generator: "enforce_global_css_and_zero_inline__repo_to_clean.py"
    };
  }

  function detectDefaultChakra() {
    var htmlAttr = document.documentElement.getAttribute("data-chakra");
    if (htmlAttr) return htmlAttr;
    var bodyAttr = document.body && document.body.getAttribute("data-chakra");
    if (bodyAttr) return bodyAttr;
    var p = (window.location.pathname + " " + document.title).toLowerCase();
    if (p.indexOf("music") !== -1 || p.indexOf("song") !== -1 || p.indexOf("koala") !== -1) return "solar";
    if (p.indexOf("voice") !== -1 || p.indexOf("throat") !== -1 || p.indexOf("podcast") !== -1) return "throat";
    if (p.indexOf("video") !== -1 || p.indexOf("film") !== -1 || p.indexOf("sacral") !== -1) return "sacral";
    if (p.indexOf("sanctum") !== -1 || p.indexOf("crown") !== -1 || p.indexOf("oracle") !== -1 || p.indexOf("sacred-gates") !== -1) return "crown";
    if (p.indexOf("heart") !== -1 || p.indexOf("print") !== -1 || p.indexOf("gallery") !== -1) return "heart";
    if (p.indexOf("thirdeye") !== -1 || p.indexOf("conductor") !== -1 || p.indexOf("audit") !== -1) return "thirdeye";
    return "throat";
  }

  function getSavedChakra() {
    try {
      return localStorage.getItem(STORAGE_CHAKRA) || detectDefaultChakra();
    } catch (e) {
      return detectDefaultChakra();
    }
  }

  function getSavedMode() {
    try {
      return localStorage.getItem(STORAGE_MODE) || "light";
    } catch (e) {
      return "light";
    }
  }

  function applyTheme(chakra, mode, save) {
    var c = chakra || getSavedChakra();
    var m = mode || getSavedMode();
    document.documentElement.setAttribute("data-chakra", c);
    document.documentElement.setAttribute("data-theme", m);
    document.documentElement.setAttribute("data-mode", m);
    if (document.documentElement.hasAttribute("data-surface-mode")) {
      document.documentElement.setAttribute("data-surface-mode", m);
    }
    if (document.body) {
      document.body.setAttribute("data-chakra", c);
      document.body.setAttribute("data-theme", m);
      document.body.setAttribute("data-mode", m);
    }
    if (save !== false) {
      try {
        localStorage.setItem(STORAGE_CHAKRA, c);
        localStorage.setItem(STORAGE_MODE, m);
      } catch (e) {}
    }
    var pills = document.querySelectorAll("[data-ee-chakra-btn]");
    for (var i = 0; i < pills.length; i++) {
      var btn = pills[i];
      btn.classList.toggle("active", btn.getAttribute("data-ee-chakra-btn") === c);
    }
    var mBtns = document.querySelectorAll("[data-ee-mode-btn]");
    for (var j = 0; j < mBtns.length; j++) {
      var mb = mBtns[j];
      mb.classList.toggle("active", mb.getAttribute("data-ee-mode-btn") === m);
    }
    var found = CHAKRAS[0];
    for (var k = 0; k < CHAKRAS.length; k++) {
      if (CHAKRAS[k].id === c) { found = CHAKRAS[k]; break; }
    }
    var badge = document.getElementById("ee-rm-active-label");
    if (badge) badge.textContent = found.num + " " + found.label;
    var fBadge = document.getElementById("ee-gf-chakra-pill");
    if (fBadge) fBadge.textContent = "Chakra: " + found.num + " " + found.label + " (" + m + ")";
    var hBadge = document.getElementById("ee-uh-chakra-label");
    if (hBadge) hBadge.textContent = found.num + " " + found.label + " · " + m.toUpperCase();
  }

  applyTheme(getSavedChakra(), getSavedMode(), false);
  window.setEvolveStudioTheme = function (chakra, mode) {
    applyTheme(chakra, mode, true);
  };
  if (window.self !== window.top) {
    return;
  }
  var isMinimalApplet = document.documentElement.getAttribute("data-minimal-applet") === "true";

  /* ==========================================================================
     UNIVERSAL WIDGET MOVER (Move Up, Move Down, Move to Bottom, Archive/Hide)
     ========================================================================== */
  var pageSlug = detectPageSlug();
  var layoutKey = STORAGE_LAYOUT_PREFIX + pageSlug;
  var patchKey = STORAGE_PATCH_PREFIX + pageSlug;
  var yayNayStorageKey = "ee_obj_yaynay_verdicts_v1_" + pageSlug;
  var widgetRegistry = {};
  var undoStack = [];

  function loadObjectVerdicts() {
    try {
      var raw = localStorage.getItem(yayNayStorageKey);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") return parsed;
      }
    } catch (e) {}
    return {};
  }

  function saveObjectVerdictLocal(oid, verdict, feedback) {
    var map = loadObjectVerdicts();
    map[oid] = {
      verdict: verdict,
      feedback: feedback || "",
      updated_at: new Date().toISOString()
    };
    try {
      localStorage.setItem(yayNayStorageKey, JSON.stringify(map));
    } catch (e) {}
    return map;
  }

  function inferObjectDoesSpec(el, title) {
    var explicitDoes = el.getAttribute("data-obj-does") || el.getAttribute("data-does");
    if (explicitDoes) return explicitDoes;
    var p = el.querySelector("p, .ee-3part-sub, .ee-section-desc, .sub, .desc");
    if (p && p.textContent) {
      var clean = p.textContent.replace(/\s+/g, " ").trim();
      if (clean.length > 8) return clean.slice(0, 180);
    }
    return "Provides interactive Studio controls and live output for " + title + ".";
  }

  function inferObjectCategory(el) {
    var explicitCat = el.getAttribute("data-obj-category") || el.getAttribute("data-category");
    if (explicitCat) return explicitCat;
    if (el.hasAttribute("data-model") || el.classList.contains("tsc")) return "Model.Tool Object -> Approval Card";
    if (el.classList.contains("ee-3part-card") || el.classList.contains("ee-card")) return "Studio Applet Object -> Interactive Card";
    return "Studio Workspace Object -> Sub-Tool";
  }

  function sendObjectYayNayToBackend(oid, title, cat, doesSpec, verdict, feedback, spawnChat, cb) {
    saveObjectVerdictLocal(oid, verdict, feedback);
    var srcMeta = detectSourceMetadata();
    var payload = {
      action: spawnChat ? "hook_new_chat_goal" : "verdict",
      object_id: pageSlug + "." + oid,
      title: title,
      category: cat,
      does: doesSpec,
      in_spec: "User interaction, YAY/NAY verdict, or inline feedback",
      out_spec: "Live DOM state + New Chat /goal queue until 100% YAYED",
      source_file: srcMeta.source,
      generator_script: srcMeta.generator,
      open_url: window.location.href,
      verdict: verdict,
      feedback: feedback || "",
      spawn_chat: Boolean(spawnChat || verdict === "nay" || feedback)
    };
    var endpoints = [
      "/api/object-yaynay-goal",
      "/api/object-yaynay-goal"
    ];
    var called = false;
    endpoints.forEach(function (ep) {
      try {
        fetch(ep, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        })
          .then(function (r) { return r.json(); })
          .then(function (res) {
            if (!called && cb) {
              called = true;
              cb(res);
            }
          })
          .catch(function () {});
      } catch (e) {}
    });
    updatePageYayNayGoalBar();
  }

  function updatePageYayNayGoalBar() {
    var bar = document.getElementById("ee-yaynay-page-bar");
    var keys = Object.keys(widgetRegistry);
    var map = loadObjectVerdicts();
    var yayCount = 0;
    var nayCount = 0;
    keys.forEach(function (k) {
      var v = (map[k] && map[k].verdict) || "pending";
      if (v === "yay") yayCount++;
      else if (v === "nay") nayCount++;
    });
    var total = keys.length;
    var pending = Math.max(0, total - yayCount - nayCount);
    var statusTxt = (total > 0 && yayCount === total)
      ? ("ALL " + total + " PAGE OBJECTS YAYED (100% GOAL COMPLETE)")
      : (yayCount + " / " + total + " PAGE OBJECTS YAYED · " + nayCount + " NAYED · " + pending + " PENDING");
    if (bar) {
      var badge = bar.querySelector("#ee-yaynay-page-count");
      if (badge) {
        badge.textContent = statusTxt;
        badge.className = "ee-obj-badge " + (total > 0 && yayCount === total ? "is-yay" : (nayCount > 0 ? "is-nay" : "is-pending"));
      }
    }
  }

  function buildPageYayNayGoalBar() {
    if (document.getElementById("ee-yaynay-page-bar")) return;
    if (document.body && document.body.getAttribute("data-ee-skip-auto-yaynay") === "true") return;
    var bar = document.createElement("aside");
    bar.id = "ee-yaynay-page-bar";
    bar.className = "ee-yaynay-page-bar";
    bar.setAttribute("aria-label", "Page Object YAY/NAY & New Chat /goal Bar");
    bar.innerHTML =
      "<div class='ee-obj-yaynay-btns'>" +
        "<span class='ee-obj-cat-pill'>OBJECT GOVERNANCE -> /GOAL UNTIL ALL YAYED</span>" +
        "<span class='ee-obj-badge is-pending' id='ee-yaynay-page-count'>0 / 0 OBJECTS YAYED</span>" +
      "</div>" +
      "<div class='ee-obj-yaynay-btns'>" +
        "<button type='button' class='ee-btn ee-btn-sm ee-obj-btn-yay' id='ee-yaynay-page-yay-all'>YAY All Page Objects</button>" +
        "<button type='button' class='ee-btn ee-btn-primary ee-btn-sm' id='ee-yaynay-page-hook-goal'>Copy &amp; Hook New Chat /goal</button>" +
        "<a class='ee-btn ee-btn-sm' href='/OBJECT-YAY-NAY-GOAL-HUB.html'>Master YAY/NAY /goal Hub</a>" +
      "</div>";

    var footerEl = document.querySelector(".ee-3part-footer, #ee-global-self-improve-footer, footer");
    if (footerEl && footerEl.parentElement) {
      footerEl.parentElement.insertBefore(bar, footerEl);
    } else if (document.body) {
      document.body.appendChild(bar);
    }

    var yayAllBtn = document.getElementById("ee-yaynay-page-yay-all");
    if (yayAllBtn) {
      yayAllBtn.addEventListener("click", function () {
        Object.keys(widgetRegistry).forEach(function (wid) {
          var reg = widgetRegistry[wid];
          if (!reg) return;
          applyObjectVerdictUI(wid, "yay", "");
          sendObjectYayNayToBackend(wid, reg.title, reg.category || "Studio Object", reg.does || "", "yay", "", false);
        });
      });
    }

    var hookGoalBtn = document.getElementById("ee-yaynay-page-hook-goal");
    if (hookGoalBtn) {
      hookGoalBtn.addEventListener("click", function () {
        sendObjectYayNayToBackend("page", document.title || pageSlug, "Studio Page", "Page-level /goal hook", "pending", "Hooked page to New Chat /goal", true, function (res) {
          if (res && res.goal_prompt && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(res.goal_prompt).catch(function () {});
          }
        });
        this.textContent = "Copied /goal Prompt & Queued!";
      });
    }
    updatePageYayNayGoalBar();
  }

  function applyObjectVerdictUI(wid, verdict, feedback) {
    var reg = widgetRegistry[wid];
    if (!reg || !reg.el) return;
    var el = reg.el;
    el.setAttribute("data-verdict", verdict);
    var badge = el.querySelector("[data-ee-obj-badge='" + wid + "']");
    if (badge) {
      badge.className = "ee-obj-badge " + (verdict === "yay" ? "is-yay" : (verdict === "nay" ? "is-nay" : "is-pending"));
      badge.textContent = verdict === "yay" ? "YAYED" : (verdict === "nay" ? "NAYED - QUEUED FOR /GOAL" : "AWAITING YAY / NAY");
    }
    var yBtn = el.querySelector("[data-ee-obj-yay='" + wid + "']");
    var nBtn = el.querySelector("[data-ee-obj-nay='" + wid + "']");
    if (yBtn) yBtn.classList.toggle("is-active-yay", verdict === "yay");
    if (nBtn) nBtn.classList.toggle("is-active-nay", verdict === "nay");
    if (typeof feedback === "string") {
      var fbInp = el.querySelector("[data-ee-obj-fb='" + wid + "']");
      if (fbInp && fbInp.value !== feedback) fbInp.value = feedback;
    }
  }

  function loadLayoutState() {
    try {
      var raw = localStorage.getItem(layoutKey);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          return {
            demoted: Array.isArray(parsed.demoted) ? parsed.demoted : [],
            archived: Array.isArray(parsed.archived) ? parsed.archived : [],
            order: Array.isArray(parsed.order) ? parsed.order : []
          };
        }
      }
    } catch (e) {}
    return { demoted: [], archived: [], order: [] };
  }

  function saveLayoutState(st) {
    try {
      localStorage.setItem(layoutKey, JSON.stringify(st));
    } catch (e) {}
    try {
      fetch("http://127.0.0.1:7871/api/self-improve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save_widget_layout",
          page_slug: pageSlug,
          page_url: window.location.href,
          layout: st
        })
      }).catch(function () {});
    } catch (e) {}
  }

  function slugifyText(t) {
    return String(t || "widget").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48) || "widget";
  }

  function inferWidgetTitle(el, fallbackIdx) {
    var attrTitle = el.getAttribute("data-widget-title") || el.getAttribute("aria-label") || el.getAttribute("data-model");
    if (attrTitle) {
      var toolAttr = el.getAttribute("data-tool");
      return toolAttr ? (attrTitle + " · " + toolAttr) : attrTitle;
    }
    var h = el.querySelector("h2, h3, .section-title, .pc-title, .ma-title, .cap, summary");
    if (h && h.textContent) {
      var clean = h.textContent.replace(/\s+/g, " ").trim();
      if (clean.length > 2) return clean.slice(0, 68);
    }
    if (el.id) return el.id;
    return "Widget #" + (fallbackIdx + 1);
  }

  function inferWidgetId(el, idx) {
    if (el.getAttribute("data-widget-id")) return el.getAttribute("data-widget-id");
    if (el.id) return el.id;
    var title = inferWidgetTitle(el, idx);
    var wid = "w-" + slugifyText(title) + "-" + idx;
    el.setAttribute("data-widget-id", wid);
    return wid;
  }

  function ensureBottomDrawer() {
    var existing = document.getElementById("ee-bottom-widgets-drawer");
    if (existing) return existing;
    var details = document.createElement("details");
    details.id = "ee-bottom-widgets-drawer";
    details.className = "ee-bottom-widgets-drawer";
    details.innerHTML =
      "<summary>" +
        "<span>Demoted &amp; Archived Widgets Drawer (Moved to Bottom or Hidden)</span>" +
        "<span class='ee-bottom-tray-meta'>" +
          "<span id='ee-bottom-drawer-count' class='ee-stat-pill'>0 widgets at bottom</span>" +
          "<button type='button' class='ee-wctrl-btn' id='ee-bottom-restore-all-btn'>Restore All to Default</button>" +
        "</span>" +
      "</summary>" +
      "<div class='ee-section-desc'>Widgets you click <b>↡ Bottom</b> on live inside this bottom drawer. Widgets you click <b>× Archive</b> on are hidden completely and can be restored with 1 click below.</div>" +
      "<div id='ee-bottom-restore-pills' class='ee-bottom-Restore-list'></div>" +
      "<div id='ee-bottom-demoted-stage' class='ee-demoted-stage'></div>";

    var footerHost = document.getElementById("ee-gf-demoted-slot");
    if (footerHost) {
      footerHost.appendChild(details);
    } else {
      var host = document.querySelector(".sg-shell, .container, .wrap, main") || document.body;
      host.appendChild(details);
    }

    var restoreAllBtn = document.getElementById("ee-bottom-restore-all-btn");
    if (restoreAllBtn) {
      restoreAllBtn.addEventListener("click", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        resetAllWidgetsToDefault();
      });
    }
    return details;
  }

  function escapeHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function refreshBottomDrawerUI() {
    var drawer = ensureBottomDrawer();
    var st = loadLayoutState();
    var pillsHost = document.getElementById("ee-bottom-restore-pills");
    var countEl = document.getElementById("ee-bottom-drawer-count");
    var total = st.demoted.length + st.archived.length;
    if (countEl) {
      countEl.textContent = st.demoted.length + " at bottom · " + st.archived.length + " hidden";
    }
    if (!pillsHost) return;
    if (total === 0) {
      pillsHost.innerHTML = "<span class='ee-cell-sub'>No widgets demoted or hidden yet. Use <b>↡ Bottom</b> or <b>× Archive</b> on any widget header to declutter this page.</span>";
      return;
    }
    var html = [];
    st.demoted.forEach(function (wid) {
      var reg = widgetRegistry[wid];
      var title = reg ? reg.title : wid;
      html.push(
        "<div class='ee-demoted-pill'>" +
          "<span><b>[At Bottom]</b> " + escapeHtml(title) + "</span>" +
          "<button type='button' class='ee-wctrl-btn' data-ee-restore-wid='" + escapeHtml(wid) + "'>↑ Restore to Main View</button>" +
          "<button type='button' class='ee-wctrl-btn hide-btn' data-ee-hide-wid='" + escapeHtml(wid) + "'>× Hide</button>" +
        "</div>"
      );
    });
    st.archived.forEach(function (wid) {
      var reg = widgetRegistry[wid];
      var title = reg ? reg.title : wid;
      html.push(
        "<div class='ee-demoted-pill'>" +
          "<span><b>[Hidden]</b> " + escapeHtml(title) + "</span>" +
          "<button type='button' class='ee-wctrl-btn' data-ee-restore-wid='" + escapeHtml(wid) + "'>↑ Restore</button>" +
        "</div>"
      );
    });
    pillsHost.innerHTML = html.join("");
    Array.prototype.forEach.call(pillsHost.querySelectorAll("[data-ee-restore-wid]"), function (b) {
      b.addEventListener("click", function () {
        restoreWidget(b.getAttribute("data-ee-restore-wid"));
      });
    });
    Array.prototype.forEach.call(pillsHost.querySelectorAll("[data-ee-hide-wid]"), function (b) {
      b.addEventListener("click", function () {
        archiveWidget(b.getAttribute("data-ee-hide-wid"));
      });
    });
    if (st.demoted.length > 0 && !drawer.hasAttribute("data-auto-opened")) {
      drawer.setAttribute("data-auto-opened", "1");
    }
  }

  function moveWidgetUp(wid) {
    var reg = widgetRegistry[wid];
    if (!reg || !reg.el || !reg.el.parentElement) return;
    var el = reg.el;
    var prev = el.previousElementSibling;
    while (prev && (prev.tagName === "NAV" || prev.tagName === "HEADER" || prev.classList.contains("chakra-bar") || prev.classList.contains("hubnav") || prev.classList.contains("rooms") || prev.classList.contains("ee-focus-picker-bar") || prev.classList.contains("oo-command-deck"))) {
      prev = prev.previousElementSibling;
    }
    if (prev) {
      el.parentElement.insertBefore(el, prev);
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      recordSelfImproveAction("move_up", wid, reg.title, "Moved widget up");
    }
  }

  function moveWidgetDown(wid) {
    var reg = widgetRegistry[wid];
    if (!reg || !reg.el || !reg.el.parentElement) return;
    var el = reg.el;
    var next = el.nextElementSibling;
    if (next && next.id !== "ee-bottom-widgets-drawer" && next.id !== "ee-global-self-improve-footer") {
      el.parentElement.insertBefore(next, el);
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      recordSelfImproveAction("move_down", wid, reg.title, "Moved widget down");
    }
  }

  function demoteWidgetToBottom(wid) {
    var reg = widgetRegistry[wid];
    if (!reg || !reg.el) return;
    var st = loadLayoutState();
    undoStack.push({ action: "demote", wid: wid, prev: JSON.parse(JSON.stringify(st)) });
    if (st.demoted.indexOf(wid) === -1) st.demoted.push(wid);
    st.archived = st.archived.filter(function (x) { return x !== wid; });
    saveLayoutState(st);
    applyWidgetStates();
    recordSelfImproveAction("move_to_bottom", wid, reg.title, "Demoted widget to Bottom Drawer");
  }

  function archiveWidget(wid) {
    var reg = widgetRegistry[wid];
    if (!reg || !reg.el) return;
    var st = loadLayoutState();
    undoStack.push({ action: "archive", wid: wid, prev: JSON.parse(JSON.stringify(st)) });
    if (st.archived.indexOf(wid) === -1) st.archived.push(wid);
    st.demoted = st.demoted.filter(function (x) { return x !== wid; });
    saveLayoutState(st);
    applyWidgetStates();
    recordSelfImproveAction("archive_widget", wid, reg.title, "Archived/hid unneeded widget to Bottom Drawer");
  }

  function restoreWidget(wid) {
    var reg = widgetRegistry[wid];
    var st = loadLayoutState();
    st.demoted = st.demoted.filter(function (x) { return x !== wid; });
    st.archived = st.archived.filter(function (x) { return x !== wid; });
    saveLayoutState(st);
    if (reg && reg.el && reg.origParent) {
      reg.el.classList.remove("ee-widget-archived-hidden");
      if (reg.origNextSibling && reg.origNextSibling.parentElement === reg.origParent) {
        reg.origParent.insertBefore(reg.el, reg.origNextSibling);
      } else {
        var bottomDrawer = document.getElementById("ee-bottom-widgets-drawer");
        if (bottomDrawer && bottomDrawer.parentElement === reg.origParent) {
          reg.origParent.insertBefore(reg.el, bottomDrawer);
        } else {
          reg.origParent.appendChild(reg.el);
        }
      }
    }
    applyWidgetStates();
    if (reg && reg.el) {
      reg.el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    recordSelfImproveAction("restore_widget", wid, reg ? reg.title : wid, "Restored widget to main view");
  }

  function resetAllWidgetsToDefault() {
    var st = loadLayoutState();
    var allMoved = st.demoted.concat(st.archived);
    saveLayoutState({ demoted: [], archived: [], order: [] });
    allMoved.forEach(function (wid) {
      var reg = widgetRegistry[wid];
      if (reg && reg.el && reg.origParent) {
        reg.el.classList.remove("ee-widget-archived-hidden");
        if (reg.origNextSibling && reg.origNextSibling.parentElement === reg.origParent) {
          reg.origParent.insertBefore(reg.el, reg.origNextSibling);
        } else {
          var bottomDrawer = document.getElementById("ee-bottom-widgets-drawer");
          if (bottomDrawer && bottomDrawer.parentElement === reg.origParent) {
            reg.origParent.insertBefore(reg.el, bottomDrawer);
          } else {
            reg.origParent.appendChild(reg.el);
          }
        }
      }
    });
    applyWidgetStates();
  }

  function applyWidgetStates() {
    ensureBottomDrawer();
    var stage = document.getElementById("ee-bottom-demoted-stage");
    var st = loadLayoutState();

    Object.keys(widgetRegistry).forEach(function (wid) {
      var reg = widgetRegistry[wid];
      if (!reg || !reg.el) return;
      var isDemoted = st.demoted.indexOf(wid) !== -1;
      var isArchived = st.archived.indexOf(wid) !== -1;

      if (isArchived) {
        reg.el.classList.add("ee-widget-archived-hidden");
        if (stage && reg.el.parentElement !== stage) {
          stage.appendChild(reg.el);
        }
      } else if (isDemoted) {
        reg.el.classList.remove("ee-widget-archived-hidden");
        if (stage && reg.el.parentElement !== stage) {
          stage.appendChild(reg.el);
        }
      } else {
        reg.el.classList.remove("ee-widget-archived-hidden");
      }
    });
    refreshBottomDrawerUI();
    refreshGlobalFooterTelemetry();
  }

  function createWidgetCtrlBar(wid, title) {
    var bar = document.createElement("span");
    bar.className = "ee-wctrl-bar";
    bar.setAttribute("data-ee-wctrl-for", wid);
    bar.innerHTML =
      "<button type='button' class='ee-wctrl-btn' data-wact='up' title='Move widget up'>↑</button>" +
      "<button type='button' class='ee-wctrl-btn' data-wact='down' title='Move widget down'>↓</button>" +
      "<button type='button' class='ee-wctrl-btn bottom-btn' data-wact='bottom' title='Move unneeded widget to bottom of page'>↡ Bottom</button>" +
      "<button type='button' class='ee-wctrl-btn hide-btn' data-wact='archive' title='Remove / hide widget into bottom archive drawer'>× Archive</button>" +
      "<button type='button' class='ee-wctrl-btn improve-btn' data-wact='improve' title='Target this widget in the Self-Improve Footer'>Self-Improve</button>";

    bar.addEventListener("click", function (ev) {
      var btn = ev.target.closest("button[data-wact]");
      if (!btn) return;
      ev.preventDefault();
      ev.stopPropagation();
      var act = btn.getAttribute("data-wact");
      if (act === "up") moveWidgetUp(wid);
      else if (act === "down") moveWidgetDown(wid);
      else if (act === "bottom") demoteWidgetToBottom(wid);
      else if (act === "archive") archiveWidget(wid);
      else if (act === "improve") openSelfImproveForWidget(wid, title);
    });
    return bar;
  }

  function discoverAndDecorateWidgets() {
    if (document.body && document.body.getAttribute("data-ee-skip-auto-yaynay") === "true") {
      return;
    }
    var selectors = [
      "[data-widget-id]",
      ".ee-3part-card",
      ".ee-card",
      ".ee-widget-card",
      ".ee-allmodels-wrap",
      ".ee-twiz-wrap",
      ".credits-banner",
      ".mh-grid",
      ".ee-drawer",
      ".sg-script-card",
      ".sg-media-card",
      ".sg-soul-card",
      ".model.tsc",
      ".oo-model-group",
      ".container > section",
      ".container > details",
      ".wrap > section",
      ".wrap > .statgrid",
      ".wrap > .cardrow",
      ".wrap > .card"
    ];
    var seen = [];
    selectors.forEach(function (sel) {
      var nodes = document.querySelectorAll(sel);
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (
          n.id === "ee-bottom-widgets-drawer" ||
          n.id === "ee-global-self-improve-footer" ||
          n.id === "ee-yaynay-page-bar" ||
          n.closest("#ee-global-self-improve-footer") ||
          n.closest("#ee-yaynay-page-bar") ||
          n.getAttribute("data-ee-skip-auto-yaynay") === "true" ||
          n.id === "ux-lightbox" ||
          n.id === "ee-focus-picker-bar" ||
          n.id === "oo-hierarchy-view" ||
          n.classList.contains("oo-command-deck") ||
          n.classList.contains("ee-focus-picker-bar")
        ) {
          continue;
        }
        if (seen.indexOf(n) === -1) seen.push(n);
      }
    });

    var verdictMap = loadObjectVerdicts();

    seen.forEach(function (el, idx) {
      var wid = inferWidgetId(el, idx);
      var title = inferWidgetTitle(el, idx);
      var cat = inferObjectCategory(el);
      var doesSpec = inferObjectDoesSpec(el, title);
      if (!widgetRegistry[wid]) {
        widgetRegistry[wid] = {
          el: el,
          origParent: el.parentElement,
          origNextSibling: el.nextElementSibling,
          title: title,
          category: cat,
          does: doesSpec
        };
      }
      if (!el.querySelector("[data-ee-wctrl-for='" + wid + "']")) {
        var hdrTarget = el.querySelector(":scope > .ee-widget-head, :scope > .ee-allmodels-head, :scope > .ee-twiz-head, :scope > .credits-head, :scope > .ee-drawer-summary, :scope > .ee-section-hdr, :scope > .ee-section-hdr-clean, :scope > .pc-head, :scope > .ma-head, :scope > .head, :scope > .mh, :scope > .oo-domain-hdr, :scope > .oo-model-hdr, :scope > summary");
        var ctrlBar = createWidgetCtrlBar(wid, title);
        if (hdrTarget) {
          hdrTarget.appendChild(ctrlBar);
        } else {
          var autoHdr = document.createElement("div");
          autoHdr.className = "ee-wctrl-auto-hdr";
          autoHdr.innerHTML = "<span class='ee-wctrl-auto-title'>" + escapeHtml(title) + "</span>";
          autoHdr.appendChild(ctrlBar);
          el.insertBefore(autoHdr, el.firstChild);
        }
      }

      // Inject Universal Self-Describing Object Header (.ee-obj-self-header)
      var savedEntry = verdictMap[wid] || { verdict: "pending", feedback: "" };
      var v = savedEntry.verdict || "pending";
      var fbVal = savedEntry.feedback || "";
      var badgeCls = "ee-obj-badge " + (v === "yay" ? "is-yay" : (v === "nay" ? "is-nay" : "is-pending"));
      var badgeTxt = v === "yay" ? "YAYED" : (v === "nay" ? "NAYED - QUEUED FOR /GOAL" : "AWAITING YAY / NAY");

      if (!el.querySelector(":scope > .ee-obj-self-header")) {
        var selfHdr = document.createElement("div");
        selfHdr.className = "ee-obj-self-header";
        selfHdr.innerHTML =
          "<div class='ee-obj-self-top'>" +
            "<span class='ee-obj-cat-pill'>" + escapeHtml(cat) + " &middot; " + escapeHtml(title) + "</span>" +
            "<span class='" + badgeCls + "' data-ee-obj-badge='" + escapeHtml(wid) + "'>" + badgeTxt + "</span>" +
          "</div>" +
          "<p class='ee-obj-self-does'><strong>DOES:</strong> " + escapeHtml(doesSpec) + "</p>";
        el.insertBefore(selfHdr, el.firstChild);
      }

      // Inject Universal YAY/NAY + Feedback Hook to New Chat /goal Footer (.ee-obj-yaynay-footer)
      if (!el.querySelector(":scope > .ee-obj-yaynay-footer")) {
        var ynFooter = document.createElement("div");
        ynFooter.className = "ee-obj-yaynay-footer";
        ynFooter.innerHTML =
          "<div class='ee-obj-yaynay-btns'>" +
            "<button type='button' class='ee-btn ee-btn-sm ee-obj-btn-yay" + (v === "yay" ? " is-active-yay" : "") + "' data-ee-obj-yay='" + escapeHtml(wid) + "'>YAY</button>" +
            "<button type='button' class='ee-btn ee-btn-sm ee-obj-btn-nay" + (v === "nay" ? " is-active-nay" : "") + "' data-ee-obj-nay='" + escapeHtml(wid) + "'>NAY</button>" +
          "</div>" +
          "<div class='ee-obj-yaynay-hook'>" +
            "<input type='text' class='ee-input ee-obj-fb-input' data-ee-obj-fb='" + escapeHtml(wid) + "' value='" + escapeHtml(fbVal) + "' placeholder='Feedback -> New Chat /goal until all YAYED...'>" +
            "<button type='button' class='ee-btn ee-btn-primary ee-btn-sm' data-ee-obj-hook='" + escapeHtml(wid) + "'>Hook to New Chat /goal</button>" +
          "</div>";
        el.appendChild(ynFooter);

        var yBtn = ynFooter.querySelector("[data-ee-obj-yay]");
        var nBtn = ynFooter.querySelector("[data-ee-obj-nay]");
        var hBtn = ynFooter.querySelector("[data-ee-obj-hook]");
        var fInp = ynFooter.querySelector("[data-ee-obj-fb]");

        if (yBtn) {
          yBtn.addEventListener("click", function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var curFb = fInp ? fInp.value.trim() : "";
            applyObjectVerdictUI(wid, "yay", curFb);
            sendObjectYayNayToBackend(wid, title, cat, doesSpec, "yay", curFb, false);
          });
        }
        if (nBtn) {
          nBtn.addEventListener("click", function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var curFb = fInp ? fInp.value.trim() : "";
            applyObjectVerdictUI(wid, "nay", curFb);
            sendObjectYayNayToBackend(wid, title, cat, doesSpec, "nay", curFb, true);
          });
        }
        if (hBtn) {
          hBtn.addEventListener("click", function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var curFb = fInp ? fInp.value.trim() : "";
            var nextV = curFb ? "nay" : (loadObjectVerdicts()[wid] ? loadObjectVerdicts()[wid].verdict : "nay");
            applyObjectVerdictUI(wid, nextV, curFb);
            var btnSelf = this;
            sendObjectYayNayToBackend(wid, title, cat, doesSpec, nextV, curFb, true, function (res) {
              if (res && res.goal_prompt && navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(res.goal_prompt).catch(function () {});
              }
              btnSelf.textContent = "Queued in /goal!";
            });
          });
        }
      }
    });

    if (!isMinimalApplet) {
      applyWidgetStates();
    }
    buildPageYayNayGoalBar();
    updatePageYayNayGoalBar();
  }

  /* ==========================================================================
     SELF-REFERENTIAL SELF-IMPROVING PAGE HOOK & PERSISTENT MUTATION ENGINE
     ========================================================================== */
  var currentTargetWid = "";
  var currentTargetTitle = "Entire Page (" + (document.title || pageSlug) + ")";
  var pickModeActive = false;
  var hoverOutlinedEl = null;

  var PATCH_CLASS_MAP = {
    calm_focus_1by1: "ee-si-patch-calm-focus",
    boost_typography: "ee-si-patch-boost-type",
    hide_tech_noise: "ee-si-patch-hide-tech",
    wide_media: "ee-si-patch-wide-media"
  };

  function loadPagePatches() {
    try {
      var raw = localStorage.getItem(patchKey);
      if (raw) {
        var arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
      }
    } catch (e) {}
    return [];
  }

  function savePagePatches(patches) {
    try {
      localStorage.setItem(patchKey, JSON.stringify(patches));
    } catch (e) {}
  }

  function applyPersistedPatchesToDOM() {
    if (!document.body) return;
    var active = loadPagePatches();
    Object.keys(PATCH_CLASS_MAP).forEach(function (pKey) {
      var cls = PATCH_CLASS_MAP[pKey];
      document.body.classList.toggle(cls, active.indexOf(pKey) !== -1);
    });
    var patchBtns = document.querySelectorAll("[data-ee-patch-toggle]");
    for (var i = 0; i < patchBtns.length; i++) {
      var b = patchBtns[i];
      var pk = b.getAttribute("data-ee-patch-toggle");
      b.classList.toggle("is-active", active.indexOf(pk) !== -1);
    }
    refreshGlobalFooterTelemetry();
  }

  function togglePageMutation(mutationId) {
    if (mutationId === "reset_patches") {
      savePagePatches([]);
      resetAllWidgetsToDefault();
      applyPersistedPatchesToDOM();
      recordSelfImproveAction("reset_patches", "page", currentTargetTitle, "Reset all self-improving page mutations to baseline");
      setFooterStatus("Reset all page mutations & restored default layout.");
      return [];
    }
    if (mutationId === "declutter_bottom") {
      var keys = Object.keys(widgetRegistry);
      if (keys.length > 2) {
        var demotedCount = 0;
        keys.slice(Math.ceil(keys.length / 2)).forEach(function (wid) {
          demoteWidgetToBottom(wid);
          demotedCount++;
        });
        setFooterStatus("Self-Improvement applied: Demoted " + demotedCount + " secondary widgets to the Bottom Drawer.");
      } else {
        setFooterStatus("Page already has a minimal widget count (" + keys.length + " widgets).");
      }
      return loadPagePatches();
    }

    var active = loadPagePatches();
    var idx = active.indexOf(mutationId);
    if (idx === -1) active.push(mutationId);
    else active.splice(idx, 1);
    savePagePatches(active);
    applyPersistedPatchesToDOM();
    recordSelfImproveAction(
      idx === -1 ? "enable_mutation:" + mutationId : "disable_mutation:" + mutationId,
      currentTargetWid || "page",
      currentTargetTitle,
      "Toggled self-improving mutation '" + mutationId + "' -> active=[" + active.join(", ") + "]"
    );
    setFooterStatus("Self-Improvement '" + mutationId + "' " + (idx === -1 ? "ENABLED" : "DISABLED") + " & persisted for this page.");
    return active;
  }

  function autoInferMutationsFromText(noteText, tags) {
    var combined = (String(noteText || "") + " " + (tags || []).join(" ")).toLowerCase();
    var triggered = [];
    if (combined.indexOf("1-by-1") !== -1 || combined.indexOf("step-by-step") !== -1 || combined.indexOf("calm") !== -1 || combined.indexOf("focus") !== -1) {
      var p1 = loadPagePatches();
      if (p1.indexOf("calm_focus_1by1") === -1) {
        p1.push("calm_focus_1by1");
        savePagePatches(p1);
        triggered.push("calm_focus_1by1");
      }
    }
    if (combined.indexOf("bigger") !== -1 || combined.indexOf("larger") !== -1 || combined.indexOf("font") !== -1 || combined.indexOf("read") !== -1) {
      var p2 = loadPagePatches();
      if (p2.indexOf("boost_typography") === -1) {
        p2.push("boost_typography");
        savePagePatches(p2);
        triggered.push("boost_typography");
      }
    }
    if (combined.indexOf("raw") !== -1 || combined.indexOf("debug") !== -1 || combined.indexOf("noise") !== -1 || combined.indexOf("extra boxes") !== -1) {
      var p3 = loadPagePatches();
      if (p3.indexOf("hide_tech_noise") === -1) {
        p3.push("hide_tech_noise");
        savePagePatches(p3);
        triggered.push("hide_tech_noise");
      }
    }
    if (combined.indexOf("media") !== -1 || combined.indexOf("preview") !== -1 || combined.indexOf("video") !== -1 || combined.indexOf("audio") !== -1) {
      var p4 = loadPagePatches();
      if (p4.indexOf("wide_media") === -1) {
        p4.push("wide_media");
        savePagePatches(p4);
        triggered.push("wide_media");
      }
    }
    if (combined.indexOf("clutter") !== -1 || combined.indexOf("move unneeded") !== -1 || combined.indexOf("bottom") !== -1) {
      if (currentTargetWid && widgetRegistry[currentTargetWid]) {
        demoteWidgetToBottom(currentTargetWid);
        triggered.push("demote:" + currentTargetWid);
      }
    }
    if (triggered.length) {
      applyPersistedPatchesToDOM();
    }
    return triggered;
  }

  function inspectSelf() {
    var srcMeta = detectSourceMetadata();
    var st = loadLayoutState();
    var imgs = document.querySelectorAll("img");
    var brokenImgs = 0;
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].complete && imgs[i].naturalWidth === 0 && imgs[i].getAttribute("src")) brokenImgs++;
    }
    var inlineCount = document.querySelectorAll("[style]").length;
    var audios = document.querySelectorAll("audio").length;
    var videos = document.querySelectorAll("video").length;
    var buttons = document.querySelectorAll("button, a.ee-btn, a.btn").length;
    var activePatches = loadPagePatches();

    return {
      inspected_at: new Date().toISOString(),
      page_slug: pageSlug,
      page_title: document.title || pageSlug,
      page_url: window.location.href,
      source_file: srcMeta.source,
      generator_script: srcMeta.generator,
      chakra: document.documentElement.getAttribute("data-chakra") || getSavedChakra(),
      theme_mode: document.documentElement.getAttribute("data-theme") || getSavedMode(),
      target_widget_id: currentTargetWid || "page",
      target_widget_title: currentTargetTitle,
      active_patches: activePatches,
      dom_metrics: {
        widgets_total: Object.keys(widgetRegistry).length,
        widgets_demoted: st.demoted.length,
        widgets_archived: st.archived.length,
        buttons_total: buttons,
        audio_players: audios,
        video_players: videos,
        broken_images: brokenImgs,
        inline_style_attrs: inlineCount
      }
    };
  }

  function loadSelfImproveLog() {
    try {
      var raw = localStorage.getItem(STORAGE_SI_LOG);
      if (raw) {
        var arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
      }
    } catch (e) {}
    return [];
  }

  function saveSelfImproveLog(entry) {
    var arr = loadSelfImproveLog();
    arr.unshift(entry);
    arr = arr.slice(0, 30);
    try {
      localStorage.setItem(STORAGE_SI_LOG, JSON.stringify(arr));
    } catch (e) {}
    renderSelfImproveLogUI();
  }

  function recordSelfImproveAction(actionType, wid, targetTitle, noteText, tags, verdict) {
    var selfSnap = inspectSelf();
    var autoTriggered = autoInferMutationsFromText(noteText, tags);
    selfSnap.active_patches = loadPagePatches();

    var entry = {
      at: new Date().toLocaleTimeString(),
      iso: new Date().toISOString(),
      page_slug: pageSlug,
      page_url: window.location.href,
      source_file: selfSnap.source_file,
      generator_script: selfSnap.generator_script,
      verdict: verdict || "improve",
      action: actionType,
      widget_id: wid || currentTargetWid || "page",
      target_title: targetTitle || currentTargetTitle,
      note: noteText || "",
      tags: tags || [actionType],
      auto_mutations: autoTriggered,
      active_patches: selfSnap.active_patches,
      dom_metrics: selfSnap.dom_metrics
    };
    saveSelfImproveLog(entry);

    var payload = {
      action: "save_feedback_and_patch",
      slug: pageSlug,
      page_slug: pageSlug,
      page_title: document.title || pageSlug,
      page_url: window.location.href,
      source_file: selfSnap.source_file,
      generator_script: selfSnap.generator_script,
      verdict: entry.verdict,
      pillar: "Self-Improve-Footer",
      widget_id: entry.widget_id,
      target_title: entry.target_title,
      directive_action: actionType,
      tags: entry.tags,
      note: "[" + entry.target_title + "] " + (noteText || actionType),
      active_patches: selfSnap.active_patches,
      auto_mutations: autoTriggered,
      self_snapshot: selfSnap
    };

    // 1. Primary Self-Improving Hook Server (:8655/api/self-improve-hook)
    try {
      fetch("/api/self-improve-hook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(function () {});
    } catch (e) {}

    // 2. Fuel Gauge & Self-Improve Ledger (:7871/api/self-improve)
    try {
      fetch("http://127.0.0.1:7871/api/self-improve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(function () {});
    } catch (e) {}

    // 3. Studio Shell Feedback Ledger (:7863/api/page-feedback)
    try {
      fetch("/api/page-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(function () {});
    } catch (e) {}

    refreshGlobalFooterTelemetry();
    return entry;
  }

  function runPageSelfDiagnostic() {
    var snap = inspectSelf();
    setFooterStatus("Running self-diagnostic & generator --selftest for " + snap.generator_script + "...");
    var outBox = document.getElementById("ee-gf-diag-output");
    if (outBox) {
      outBox.hidden = false;
      outBox.textContent = "Inspecting DOM & running " + snap.generator_script + " --selftest via :8655/api/self-improve-hook...";
    }
    fetch("/api/self-improve-hook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "diagnose_and_selftest",
        page_slug: pageSlug,
        page_url: window.location.href,
        source_file: snap.source_file,
        generator_script: snap.generator_script,
        self_snapshot: snap
      })
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        var msg = (res && res.ok ? "PASS" : "CHECK") +
          " · " + (res.command || snap.generator_script) +
          " (" + (res.elapsed_ms || 0) + "ms) · DOM inline=" + snap.dom_metrics.inline_style_attrs +
          ", widgets=" + snap.dom_metrics.widgets_total +
          ", broken_img=" + snap.dom_metrics.broken_images;
        setFooterStatus(msg);
        if (outBox) {
          outBox.hidden = false;
          outBox.textContent =
            "=== SELF-REFERENTIAL PAGE DIAGNOSTIC (" + snap.page_slug + ") ===\n" +
            "Source File      : " + snap.source_file + "\n" +
            "Generator Script : " + snap.generator_script + "\n" +
            "DOM Telemetry    : " + JSON.stringify(snap.dom_metrics) + "\n" +
            "Active Patches   : " + (snap.active_patches.length ? snap.active_patches.join(", ") : "none (baseline)") + "\n" +
            "Selftest Command : " + (res.command || "n/a") + " (rc=" + res.returncode + ", " + (res.elapsed_ms || 0) + "ms)\n" +
            "Selftest Output  : " + (res.output || "OK");
        }
      })
      .catch(function (err) {
        var fallbackMsg = "Local DOM Self-Check PASS: inline=" + snap.dom_metrics.inline_style_attrs +
          ", widgets=" + snap.dom_metrics.widgets_total + ", broken_img=" + snap.dom_metrics.broken_images;
        setFooterStatus(fallbackMsg);
        if (outBox) {
          outBox.hidden = false;
          outBox.textContent = JSON.stringify(snap, null, 2);
        }
      });
  }

  function setFooterStatus(txt) {
    var st1 = document.getElementById("ee-gf-status");
    if (st1) st1.textContent = txt;
    var st2 = document.getElementById("ee-rm-status");
    if (st2) st2.textContent = txt;
  }

  function openSelfImproveForWidget(wid, title) {
    currentTargetWid = wid || "";
    currentTargetTitle = title || ("Widget: " + wid);
    updateSelfImproveTargetUI();
    var footer = document.getElementById("ee-global-self-improve-footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      var noteInput = document.getElementById("ee-gf-note");
      if (noteInput) noteInput.focus();
    }
  }

  function updateSelfImproveTargetUI() {
    var label = currentTargetTitle || ("Entire Page (" + pageSlug + ")");
    var t1 = document.getElementById("ee-si-target-label");
    if (t1) t1.textContent = label;
    var t2 = document.getElementById("ee-gf-target-label");
    if (t2) t2.textContent = label;
  }

  function renderSelfImproveLogUI() {
    var arr = loadSelfImproveLog();
    var html = !arr.length
      ? "<div class='ee-si-log-item'><span>No self-improve actions logged yet on this session.</span></div>"
      : arr.slice(0, 6).map(function (it) {
          return "<div class='ee-si-log-item'>" +
            "<span><b>[" + escapeHtml((it.verdict || "improve").toUpperCase()) + " · " + escapeHtml(it.target_title || it.widget_id) + "]</b> " +
            escapeHtml(it.note || it.action) +
            (it.auto_mutations && it.auto_mutations.length ? " <code>(auto-patched: " + escapeHtml(it.auto_mutations.join(", ")) + ")</code>" : "") +
            "</span>" +
            "<span class='ee-cell-code'>" + escapeHtml(it.at || "") + "</span>" +
          "</div>";
        }).join("");

    var host1 = document.getElementById("ee-si-log-list");
    if (host1) host1.innerHTML = html;
    var host2 = document.getElementById("ee-gf-log-list");
    if (host2) host2.innerHTML = html;
  }

  function refreshGlobalFooterTelemetry() {
    var snap = inspectSelf();
    var metaEl = document.getElementById("ee-gf-telemetry-pill");
    if (metaEl) {
      metaEl.textContent =
        "Widgets: " + snap.dom_metrics.widgets_total +
        " · Patches: " + snap.active_patches.length +
        " · Inline: " + snap.dom_metrics.inline_style_attrs;
    }
    var statePre = document.getElementById("ee-gf-self-json");
    if (statePre) {
      statePre.textContent = JSON.stringify(snap, null, 2);
    }
  }

  function startElementPicker() {
    pickModeActive = true;
    document.body.classList.add("ee-si-pick-active");
    var b1 = document.getElementById("ee-si-pick-btn");
    if (b1) b1.textContent = "Click Any Widget on Page... (Esc to Cancel)";
    var b2 = document.getElementById("ee-gf-pick-btn");
    if (b2) b2.textContent = "Click Any Widget on Page... (Esc)";
  }

  function stopElementPicker() {
    pickModeActive = false;
    document.body.classList.remove("ee-si-pick-active");
    if (hoverOutlinedEl) {
      hoverOutlinedEl.classList.remove("ee-si-pick-hover");
      hoverOutlinedEl = null;
    }
    var b1 = document.getElementById("ee-si-pick-btn");
    if (b1) b1.textContent = "Pick Widget on Page";
    var b2 = document.getElementById("ee-gf-pick-btn");
    if (b2) b2.textContent = "Pick Element on Page";
  }

  document.addEventListener("mousemove", function (ev) {
    if (!pickModeActive) return;
    var cand = ev.target.closest("[data-widget-id], section, article, .model.tsc, .oo-model-group, .card, .sg-script-card, .sg-media-card, .sg-soul-card");
    if (
      cand &&
      cand.id !== "ee-rm-drawer" &&
      cand.id !== "ee-rm-dock" &&
      cand.id !== "ee-universal-header" &&
      cand.id !== "ee-global-self-improve-footer" &&
      !cand.closest("#ee-universal-header") &&
      !cand.closest("#ee-global-self-improve-footer")
    ) {
      if (hoverOutlinedEl && hoverOutlinedEl !== cand) {
        hoverOutlinedEl.classList.remove("ee-si-pick-hover");
      }
      hoverOutlinedEl = cand;
      hoverOutlinedEl.classList.add("ee-si-pick-hover");
    }
  }, true);

  document.addEventListener("click", function (ev) {
    if (!pickModeActive) return;
    if (
      ev.target.closest("#ee-rm-drawer") ||
      ev.target.closest("#ee-rm-dock") ||
      ev.target.closest("#ee-universal-header") ||
      ev.target.closest("#ee-global-self-improve-footer")
    ) return;
    ev.preventDefault();
    ev.stopPropagation();
    var cand = ev.target.closest("[data-widget-id], section, article, .model.tsc, .oo-model-group, .card, .sg-script-card, .sg-media-card, .sg-soul-card");
    stopElementPicker();
    if (cand) {
      var wid = cand.getAttribute("data-widget-id") || inferWidgetId(cand, 99);
      var title = inferWidgetTitle(cand, 99);
      if (!widgetRegistry[wid]) {
        widgetRegistry[wid] = {
          el: cand,
          origParent: cand.parentElement,
          origNextSibling: cand.nextElementSibling,
          title: title
        };
      }
      openSelfImproveForWidget(wid, title);
    }
  }, true);

  /* ==========================================================================
     UNIVERSAL SLEEK HEADER WITH ALL-CONTAINING FOLDER TREE & "WHERE YOU ARE"
     ========================================================================== */
  function buildUniversalHeader() {
    if (document.getElementById("ee-universal-header")) return;
    if (window.self !== window.top) return;
    if (document.documentElement.getAttribute("data-ee-show-tree-header") !== "true") return;

    var loc = detectTreeLocation();
    var hdr = document.createElement("header");
    hdr.id = "ee-universal-header";
    hdr.className = "ee-universal-header";
    hdr.setAttribute("role", "banner");
    hdr.setAttribute("aria-label", "Evolve Studio Universal Header & Folder Tree Navigator");

    var quickLinks = [
      { label: "One-Portal :7863", href: "/portal", match: "one-portal.html" },
      { label: "Visual IDE", href: "./VISUAL-STUDIO-IDE.html", match: "visual-studio-ide.html" },
      { label: "Conductor", href: "./SINGLE-TRACK-TRAIN-CONDUCTOR.html", match: "single-track-train-conductor.html" },
      { label: "Approve Gate", href: "/approve-models", match: "approve-models" },
      { label: "Fuel Gauge :7871", href: "http://127.0.0.1:7871/", match: "dashboard.html" },
      { label: "Picker Hub", href: "./NEXT-LEVEL-PICKER-HUB.html", match: "next-level-picker-hub.html" },
      { label: "Sacred Gates", href: "./SACRED-GATES-STUDIO.html", match: "sacred-gates-studio.html" }
    ];

    var curFileLower = (loc.item.file || "").toLowerCase();
    var curHrefLower = (window.location.href || "").toLowerCase();

    var quickNavHtml = quickLinks.map(function (q) {
      var isAct = curFileLower === q.match || curHrefLower.indexOf(q.match) !== -1;
      return '<a class="ee-uh-link' + (isAct ? ' is-active' : '') + '" href="' + escapeHtml(q.href) + '">' + escapeHtml(q.label) + '</a>';
    }).join("");

    var treeBranchesHtml = STUDIO_FOLDER_TREE.map(function (b) {
      var isBranchActive = (b.id === loc.branch.id);
      var leavesHtml = b.items.map(function (it) {
        var isCur = (it.file === loc.item.file && isBranchActive);
        return (
          '<li>' +
            '<a class="ee-uh-leaf-item' + (isCur ? ' is-current' : '') + '" href="' + escapeHtml(it.href) + '" data-ee-tree-leaf="' + escapeHtml((b.title + " " + b.folder + " " + it.title + " " + it.file + " " + it.role).toLowerCase()) + '">' +
              '<span class="ee-uh-leaf-name">' +
                '<span>' + (isCur ? '&rarr; ' : '&middot; ') + escapeHtml(it.title) + '</span>' +
                (isCur ? '<span class="ee-uh-here-badge">You Are Here</span>' : '') +
              '</span>' +
              '<span class="ee-uh-leaf-file">' + escapeHtml(it.file) + '</span>' +
            '</a>' +
          '</li>'
        );
      }).join("");

      return (
        '<div class="ee-uh-branch' + (isBranchActive ? ' is-active-branch' : '') + '" data-ee-tree-branch="' + escapeHtml(b.id) + '">' +
          '<div class="ee-uh-branch-hdr">' +
            '<span class="ee-uh-branch-title">' + escapeHtml(b.num + " · " + b.title) + (isBranchActive ? ' [Active Branch]' : '') + '</span>' +
            '<span class="ee-uh-tree-count">' + escapeHtml(b.port) + '</span>' +
          '</div>' +
          '<div class="ee-uh-branch-folder">' + escapeHtml(b.folder) + '</div>' +
          '<ul class="ee-uh-leaf-list">' + leavesHtml + '</ul>' +
        '</div>'
      );
    }).join("");

    hdr.innerHTML =
      '<div class="ee-uh-bar">' +
        '<div class="ee-uh-left">' +
          '<a class="ee-uh-brand" href="/portal" title="Evolve Earth Studio — One-Portal Command Deck">' +
            '<span class="ee-uh-brand-dot"></span>' +
            '<span>EVOLVE STUDIO</span>' +
          '</a>' +
          '<nav class="ee-uh-crumbs" aria-label="Where You Are in the Studio Folder Tree">' +
            '<span class="ee-uh-crumb-label">Tree Location:</span>' +
            '<a class="ee-uh-crumb" href="/portal" title="Root Directory: public-edge-bundle">' + escapeHtml(loc.rootLabel) + '</a>' +
            '<span class="ee-uh-crumb-sep">/</span>' +
            '<a class="ee-uh-crumb" href="' + escapeHtml(loc.branch.items[0] ? loc.branch.items[0].href : "/portal") + '" title="Branch Folder: ' + escapeHtml(loc.branch.folder) + '">' + escapeHtml(loc.branch.num + " · " + loc.branch.relFolder) + '</a>' +
            '<span class="ee-uh-crumb-sep">/</span>' +
            '<span class="ee-uh-crumb is-current" title="' + escapeHtml(loc.fullPath) + '">' + escapeHtml(loc.item.file) + '</span>' +
            '<span class="ee-uh-here-badge">You Are Here</span>' +
          '</nav>' +
        '</div>' +
        '<div class="ee-uh-nav">' +
          quickNavHtml +
          '<button type="button" class="ee-uh-tree-toggle" id="ee-uh-tree-btn" aria-expanded="false">' +
            '<span>Folder Tree</span>' +
            '<span class="ee-uh-tree-count">' + loc.totalBranches + ' Roots &middot; ' + loc.totalLeaves + ' Nodes &darr;</span>' +
          '</button>' +
          '<button type="button" class="ee-uh-link" id="ee-uh-footer-jump" title="Jump to Expanded Footer Folder Tree &amp; Page Provenance Details">' +
            '<span id="ee-uh-chakra-label">05 Throat &middot; DARK</span>' +
            '<span>&darr; Details</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="ee-uh-tree-drawer" id="ee-uh-tree-drawer" hidden>' +
        '<div class="ee-uh-tree-inner">' +
          '<div class="ee-uh-tree-toolbar">' +
            '<div class="ee-uh-tree-where">' +
              '<span><b>Where You Are Now:</b></span>' +
              '<code>' + escapeHtml(loc.fullPath) + '</code>' +
              '<span>in branch <b>' + escapeHtml(loc.branch.num + " · " + loc.branch.title) + '</b> (<code>' + escapeHtml(loc.parentFolder) + '</code>)</span>' +
            '</div>' +
            '<div class="ee-uh-tree-controls">' +
              '<input type="search" class="ee-uh-tree-search" id="ee-uh-tree-search" placeholder="Filter folders, IDEs, HTML files, or paths..." aria-label="Filter Studio Folder Tree">' +
              '<button type="button" class="ee-btn ee-btn-sm" id="ee-uh-open-folder-btn" title="Open parent folder in Windows Explorer">Open Folder in Explorer</button>' +
              '<button type="button" class="ee-btn ee-btn-sm" id="ee-uh-copy-path-btn" title="Copy current Windows path to clipboard">Copy Windows Path</button>' +
              '<button type="button" class="ee-btn ee-btn-sm" id="ee-uh-jump-atlas-btn">Full Footer Atlas &darr;</button>' +
            '</div>' +
          '</div>' +
          '<div class="ee-uh-tree-grid" id="ee-uh-tree-grid">' + treeBranchesHtml + '</div>' +
        '</div>' +
      '</div>';

    if (document.body.firstChild) {
      document.body.insertBefore(hdr, document.body.firstChild);
    } else {
      document.body.appendChild(hdr);
    }

    applyTheme(getSavedChakra(), getSavedMode(), false);

    var treeBtn = document.getElementById("ee-uh-tree-btn");
    var treeDrawer = document.getElementById("ee-uh-tree-drawer");
    var searchInp = document.getElementById("ee-uh-tree-search");

    if (treeBtn && treeDrawer) {
      treeBtn.addEventListener("click", function () {
        var willOpen = treeDrawer.hasAttribute("hidden");
        if (willOpen) {
          treeDrawer.removeAttribute("hidden");
          treeBtn.classList.add("is-open");
          treeBtn.setAttribute("aria-expanded", "true");
          if (searchInp) searchInp.focus();
        } else {
          treeDrawer.setAttribute("hidden", "");
          treeBtn.classList.remove("is-open");
          treeBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    if (searchInp) {
      searchInp.addEventListener("input", function () {
        var q = (this.value || "").toLowerCase().trim();
        var branches = hdr.querySelectorAll("[data-ee-tree-branch]");
        for (var i = 0; i < branches.length; i++) {
          var br = branches[i];
          var leaves = br.querySelectorAll("[data-ee-tree-leaf]");
          var anyVisible = false;
          for (var j = 0; j < leaves.length; j++) {
            var lf = leaves[j];
            var hay = lf.getAttribute("data-ee-tree-leaf") || "";
            var match = !q || hay.indexOf(q) !== -1;
            if (lf.parentElement) lf.parentElement.hidden = !match;
            if (match) anyVisible = true;
          }
          br.hidden = !anyVisible;
        }
      });
    }

    var openFolderBtn = document.getElementById("ee-uh-open-folder-btn");
    if (openFolderBtn) {
      openFolderBtn.addEventListener("click", function () {
        openFolderInExplorer(loc.parentFolder);
      });
    }

    var copyPathBtn = document.getElementById("ee-uh-copy-path-btn");
    if (copyPathBtn) {
      copyPathBtn.addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(loc.fullPath).catch(function () {});
        }
        this.textContent = "Copied: " + loc.item.file;
      });
    }

    function scrollToFooterAtlas() {
      var target = document.getElementById("ee-gf-tree-atlas") || document.getElementById("ee-global-self-improve-footer");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    var jumpBtn1 = document.getElementById("ee-uh-footer-jump");
    if (jumpBtn1) jumpBtn1.addEventListener("click", scrollToFooterAtlas);
    var jumpBtn2 = document.getElementById("ee-uh-jump-atlas-btn");
    if (jumpBtn2) jumpBtn2.addEventListener("click", scrollToFooterAtlas);
  }

  /* ==========================================================================
     UNIVERSAL VISIBLE GLOBAL TESTING & SELF-IMPROVING FOOTER + DETAILED TREE ATLAS
     ========================================================================== */
  function buildGlobalSelfImprovingFooter() {
    if (document.getElementById("ee-global-self-improve-footer")) return;

    var snap = inspectSelf();
    var loc = detectTreeLocation();
    var footer = document.createElement("footer");
    footer.id = "ee-global-self-improve-footer";
    footer.className = "ee-global-footer";
    footer.setAttribute("role", "contentinfo");
    footer.setAttribute("aria-label", "Universal Studio Folder Tree Atlas, Location Provenance & Self-Improving Page Footer");

    var chips = [
      "Too cluttered — move secondary widgets to bottom",
      "Make this 1-by-1 calm guided step-by-step",
      "Make typography & media previews larger",
      "Hide raw file paths / debug clutter",
      "Button or endpoint did not respond",
      "Re-render media sample with stronger prompt"
    ];

    var chipsHtml = chips.map(function (c) {
      return '<button type="button" class="ee-gf-chip" data-ee-gf-chip="' + escapeHtml(c) + '">' + escapeHtml(c) + '</button>';
    }).join("");

    var expandedAtlasHtml = STUDIO_FOLDER_TREE.map(function (b) {
      var isBranchActive = (b.id === loc.branch.id);
      var rowsHtml = b.items.map(function (it) {
        var isCur = (it.file === loc.item.file && isBranchActive);
        return (
          '<a class="ee-gf-leaf-row' + (isCur ? ' is-current' : '') + '" href="' + escapeHtml(it.href) + '">' +
            '<div class="ee-gf-leaf-main">' +
              '<span class="ee-gf-leaf-title">' + (isCur ? '&rarr; ' : '') + escapeHtml(it.title) + '</span>' +
              (isCur ? '<span class="ee-uh-here-badge">You Are Here</span>' : '<span class="ee-gf-leaf-code">' + escapeHtml(it.file) + '</span>') +
            '</div>' +
            '<div class="ee-gf-leaf-detail">' +
              '<span>' + escapeHtml(it.role || "") + '</span>' +
              '<span class="ee-gf-leaf-code">' + escapeHtml(it.path || "") + '</span>' +
            '</div>' +
          '</a>'
        );
      }).join("");

      return (
        '<div class="ee-gf-branch-card' + (isBranchActive ? ' is-active-branch' : '') + '">' +
          '<div class="ee-gf-branch-top">' +
            '<div>' +
              '<div class="ee-gf-branch-name">' + escapeHtml(b.num + " · " + b.title) + (isBranchActive ? ' [Current Branch]' : '') + '</div>' +
              '<div class="ee-gf-branch-desc">' + escapeHtml(b.desc) + '</div>' +
            '</div>' +
            '<span class="ee-gf-pill">' + escapeHtml(b.port) + ' &middot; ' + b.items.length + ' items</span>' +
          '</div>' +
          '<div class="ee-gf-branch-path-row">' +
            '<span class="ee-gf-branch-path">' + escapeHtml(b.folder) + '</span>' +
            '<button type="button" class="ee-btn ee-btn-sm" data-ee-open-folder="' + escapeHtml(b.folder) + '">Open Folder</button>' +
          '</div>' +
          '<div class="ee-gf-leaf-table">' + rowsHtml + '</div>' +
        '</div>'
      );
    }).join("");

    footer.innerHTML =
      '<details class="ee-quiet-atlas-drawer">' +
        '<summary class="ee-quiet-atlas-summary">' +
          '<span>Studio Directory Atlas, File Provenance &amp; Self-Improving Page Inspector &middot; <code>' + escapeHtml(loc.item.file) + '</code></span>' +
          '<span>Click to Expand Tools &amp; Folder Tree</span>' +
        '</summary>' +
        '<div class="ee-gf-inner">' +

        /* SECTION 01: WHERE YOU ARE IN THE TREE + DETAILED PROVENANCE */
        '<div class="ee-gf-loc-banner" id="ee-gf-loc-banner">' +
          '<div class="ee-gf-loc-top">' +
            '<div>' +
              '<div class="ee-gf-kicker-row">' +
                '<span class="ee-gf-kicker">01 &middot; WHERE YOU ARE IN THE STUDIO FOLDER TREE &amp; FILE PROVENANCE</span>' +
                '<span class="ee-uh-here-badge">Active Node: ' + escapeHtml(loc.item.file) + '</span>' +
              '</div>' +
              '<div class="ee-gf-loc-crumbs">' +
                '<span><b>Tree Path:</b></span>' +
                '<code>' + escapeHtml(loc.rootLabel) + '</code>' +
                '<span>&rarr;</span>' +
                '<code>' + escapeHtml(loc.branch.num + " · " + loc.branch.title + " (" + loc.branch.relFolder + ")") + '</code>' +
                '<span>&rarr;</span>' +
                '<code>' + escapeHtml(loc.item.file) + '</code>' +
                '<span>(' + escapeHtml(loc.item.title) + ')</span>' +
              '</div>' +
            '</div>' +
            '<div class="ee-gf-btn-row">' +
              '<button type="button" class="ee-btn ee-btn-primary ee-btn-sm" id="ee-gf-open-cur-folder">Open Current Folder in Explorer</button>' +
              '<button type="button" class="ee-btn ee-btn-sm" id="ee-gf-copy-cur-path">Copy Full Windows Path</button>' +
              '<button type="button" class="ee-btn ee-btn-sm" id="ee-gf-scroll-top-btn">Back to Top Header &uarr;</button>' +
            '</div>' +
          '</div>' +
          '<div class="ee-gf-loc-grid">' +
            '<div class="ee-gf-loc-kv">' +
              '<span class="ee-gf-loc-k">Full Windows File Path</span>' +
              '<span class="ee-gf-loc-v">' + escapeHtml(loc.fullPath) + '</span>' +
            '</div>' +
            '<div class="ee-gf-loc-kv">' +
              '<span class="ee-gf-loc-k">Containing Directory &amp; Branch</span>' +
              '<span class="ee-gf-loc-v">' + escapeHtml(loc.parentFolder) + ' (' + escapeHtml(loc.branch.num + " · " + loc.branch.title) + ')</span>' +
            '</div>' +
            '<div class="ee-gf-loc-kv">' +
              '<span class="ee-gf-loc-k">Canonical Generator / Enforcer (_ops)</span>' +
              '<span class="ee-gf-loc-v">public-edge-bundle' + escapeHtml(loc.generator) + '</span>' +
            '</div>' +
            '<div class="ee-gf-loc-kv">' +
              '<span class="ee-gf-loc-k">Server Origin &amp; Port Binding</span>' +
              '<span class="ee-gf-loc-v">' + escapeHtml(loc.serverOrigin) + ' &middot; Branch Port ' + escapeHtml(loc.branch.port) + '</span>' +
            '</div>' +
            '<div class="ee-gf-loc-kv">' +
              '<span class="ee-gf-loc-k">Sibling Files in This Branch (' + loc.siblings.length + ')</span>' +
              '<span class="ee-gf-loc-v">' + escapeHtml(loc.siblings.join(" · ")) + '</span>' +
            '</div>' +
            '<div class="ee-gf-loc-kv">' +
              '<span class="ee-gf-loc-k">Live DOM &amp; Zero-Inline Audit</span>' +
              '<span class="ee-gf-loc-v">inline=' + snap.dom_metrics.inline_style_attrs + ' &middot; widgets=' + snap.dom_metrics.widgets_total + ' &middot; buttons=' + snap.dom_metrics.buttons_total + ' &middot; media=' + (snap.dom_metrics.audio_players + snap.dom_metrics.video_players) + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +

        /* SECTION 02: ALL-CONTAINING STUDIO FOLDER TREE & DIRECTORY ATLAS */
        '<div class="ee-gf-tree-atlas" id="ee-gf-tree-atlas">' +
          '<div class="ee-gf-tree-hdr">' +
            '<div>' +
              '<div class="ee-gf-kicker">02 &middot; ALL-CONTAINING STUDIO FOLDER TREE &amp; COMPLETE DIRECTORY ATLAS (' + loc.totalBranches + ' ROOTS &middot; ' + loc.totalLeaves + ' SURFACES)</div>' +
              '<h3 class="ee-gf-tree-title">Complete Evolve Earth Studio Directory Tree, Ports, Windows Paths &amp; IDE Surfaces</h3>' +
              '<p class="ee-gf-tree-sub">Every IDE, room, dashboard, generator, vault stylesheet, gallery drive, and web portal across <code>public-edge-bundle</code> and <code>public-edge-bundle</code> with your current location highlighted.</p>' +
            '</div>' +
            '<div class="ee-gf-btn-row">' +
              '<button type="button" class="ee-btn ee-btn-sm" data-ee-open-folder="public-edge-bundle">Open public-edge-bundle Root</button>' +
              '<button type="button" class="ee-btn ee-btn-sm" data-ee-open-folder="public-edge-bundle">Open public-edge-bundle</button>' +
            '</div>' +
          '</div>' +
          '<div class="ee-gf-tree-grid">' + expandedAtlasHtml + '</div>' +
        '</div>' +

        /* SECTION 03: SELF-REFERENTIAL SELF-IMPROVING PAGE HOOK & LIVE MUTATIONS */
        '<div class="ee-gf-top">' +
          '<div class="ee-gf-brand">' +
            '<div class="ee-gf-kicker-row">' +
              '<span class="ee-gf-kicker">03 &middot; TESTING PHASE &middot; SELF-REFERENTIAL SELF-IMPROVING PAGE HOOK</span>' +
              '<span class="ee-gf-pill" id="ee-gf-telemetry-pill">Widgets: ' + snap.dom_metrics.widgets_total + ' &middot; Patches: ' + snap.active_patches.length + ' &middot; Inline: ' + snap.dom_metrics.inline_style_attrs + '</span>' +
              '<span class="ee-gf-pill" id="ee-gf-chakra-pill">Chakra: ' + escapeHtml(snap.chakra) + ' (' + escapeHtml(snap.theme_mode) + ')</span>' +
            '</div>' +
            '<h2 class="ee-gf-title">How Can This Page Improve Itself Right Now?</h2>' +
            '<p class="ee-gf-sub">' +
              'Every page in Evolve Earth Studio is self-referential during testing: your feedback below immediately patches this page\'s live layout &amp; persists to ' +
              '<code>public-edge-bundle</code> + <code>self_improve_patches.json</code>.' +
            '</p>' +
          '</div>' +
          '<div class="ee-gf-verdict-bar">' +
            '<div class="ee-gf-target-line">Target: <b id="ee-gf-target-label">' + escapeHtml(currentTargetTitle) + '</b></div>' +
            '<div class="ee-gf-btn-row">' +
              '<button type="button" class="ee-btn ee-btn-primary ee-btn-sm" id="ee-gf-verdict-yay" title="Mark this page/widget approved">Approve Page (YAY)</button>' +
              '<button type="button" class="ee-btn ee-btn-sm" id="ee-gf-verdict-polish" title="Flag this page for visual or UX polish">Needs Polish</button>' +
              '<button type="button" class="ee-btn ee-btn-sm" id="ee-gf-pick-btn" title="Click any widget or card on the page to target it">Pick Element on Page</button>' +
              '<button type="button" class="ee-btn ee-btn-sm" id="ee-gf-diag-btn" title="Run live DOM self-check and generator --selftest">Run Self-Test</button>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="ee-gf-mutations-bar">' +
          '<span class="ee-gf-sec-label">1-Click Live Self-Improving Mutations (Persisted Per-Page):</span>' +
          '<div class="ee-gf-btn-row">' +
            '<button type="button" class="ee-gf-mut-btn" data-ee-patch-toggle="calm_focus_1by1">1-by-1 Calm Focus</button>' +
            '<button type="button" class="ee-gf-mut-btn" data-ee-patch-toggle="boost_typography">Boost Reading Scale</button>' +
            '<button type="button" class="ee-gf-mut-btn" data-ee-patch-toggle="wide_media">Expand Media Players</button>' +
            '<button type="button" class="ee-gf-mut-btn" data-ee-patch-toggle="hide_tech_noise">Hide Code/Path Noise</button>' +
            '<button type="button" class="ee-gf-mut-btn" id="ee-gf-mut-declutter">↡ Auto-Declutter Secondary Widgets</button>' +
            '<button type="button" class="ee-gf-mut-btn" id="ee-gf-mut-customize">Toggle Widget Move Bars</button>' +
            '<button type="button" class="ee-gf-mut-btn" id="ee-gf-mut-reset">Reset Page Baseline</button>' +
          '</div>' +
        '</div>' +

        '<div class="ee-gf-feedback-grid">' +
          '<div class="ee-gf-input-col">' +
            '<div class="ee-gf-sec-label">Quick Testing Directives (Click to Add + Auto-Patch):</div>' +
            '<div class="ee-gf-chips" id="ee-gf-chips">' + chipsHtml + '</div>' +
            '<div class="ee-gf-input-row">' +
              '<textarea class="ee-gf-textarea" id="ee-gf-note" rows="2" placeholder="Tell this page what to fix, simplify, re-order, or upgrade during testing..."></textarea>' +
              '<div class="ee-gf-submit-col">' +
                '<button type="button" class="ee-btn ee-btn-primary" id="ee-gf-submit-btn">Apply Self-Improvement &amp; Save Feedback</button>' +
                '<span class="ee-gf-status" id="ee-gf-status">Self-Improve Hook Ready &middot; Synced to :8655 / :7871 / :7863</span>' +
              '</div>' +
            '</div>' +
            '<pre class="ee-gf-diag-pre" id="ee-gf-diag-output" hidden></pre>' +
          '</div>' +
          '<div class="ee-gf-log-col">' +
            '<div class="ee-gf-sec-label">Recent Self-Improvements on This Session:</div>' +
            '<div class="ee-si-log-list" id="ee-gf-log-list"></div>' +
          '</div>' +
        '</div>' +

        '<div id="ee-gf-demoted-slot"></div>' +

        '<details class="ee-gf-drawer">' +
          '<summary class="ee-gf-drawer-summary">' +
            '<span>Self-Referential Page Hook Inspector (<code>window.__EE_SELF_IMPROVE_HOOK__</code>) &middot; Source: <code>' + escapeHtml(snap.source_file) + '</code></span>' +
            '<span class="ee-gf-pill">Generator: <code>' + escapeHtml(snap.generator_script) + '</code></span>' +
          '</summary>' +
          '<pre class="ee-gf-diag-pre" id="ee-gf-self-json">' + escapeHtml(JSON.stringify(snap, null, 2)) + '</pre>' +
        '</details>' +

        '<div class="ee-gf-meta-bar">' +
          '<div class="ee-gf-btn-row">' +
            '<span class="ee-gf-pill">Page Slug: <b>' + escapeHtml(pageSlug) + '</b></span>' +
            '<span class="ee-gf-pill">Ledger: <code>public-edge-bundle</code></span>' +
          '</div>' +
          '<div class="ee-gf-btn-row">' +
            '<a class="ee-btn ee-btn-sm" href="/portal">Studio Portal (:7863)</a>' +
            '<a class="ee-btn ee-btn-sm" href="./VISUAL-STUDIO-IDE.html">Visual IDE (:7872)</a>' +
            '<a class="ee-btn ee-btn-sm" href="http://127.0.0.1:7871/">Fuel Gauge (:7871)</a>' +
            '<a class="ee-btn ee-btn-sm" href="./SACRED-GATES-STUDIO.html">Sacred Gates (:7872)</a>' +
            '<a class="ee-btn ee-btn-sm" href="http://127.0.0.1:8941/chakra-destiny.html">Chakra Sanctum (:8941)</a>' +
            '<button type="button" class="ee-btn ee-btn-sm" id="ee-gf-open-drawer-btn">Theme &amp; Widget Drawer</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '</details>';

    var host = document.querySelector(".sg-shell, .container, .wrap, main") || document.body;
    host.appendChild(footer);

    // Move existing bottom drawer inside the footer slot so everything is unified at the bottom
    var existingBottom = document.getElementById("ee-bottom-widgets-drawer");
    var slot = document.getElementById("ee-gf-demoted-slot");
    if (existingBottom && slot && existingBottom.parentElement !== slot) {
      slot.appendChild(existingBottom);
    }

    // Wire folder explorer & path buttons in footer
    var openCurBtn = document.getElementById("ee-gf-open-cur-folder");
    if (openCurBtn) {
      openCurBtn.addEventListener("click", function () {
        openFolderInExplorer(loc.parentFolder);
      });
    }
    var copyCurBtn = document.getElementById("ee-gf-copy-cur-path");
    if (copyCurBtn) {
      copyCurBtn.addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(loc.fullPath).catch(function () {});
        }
        this.textContent = "Copied: " + loc.item.file;
        setFooterStatus("Copied full Windows path: " + loc.fullPath);
      });
    }
    var scrollTopBtn = document.getElementById("ee-gf-scroll-top-btn");
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", function () {
        var hdrEl = document.getElementById("ee-universal-header");
        if (hdrEl) {
          hdrEl.scrollIntoView({ behavior: "smooth", block: "start" });
          var tDrawer = document.getElementById("ee-uh-tree-drawer");
          var tBtn = document.getElementById("ee-uh-tree-btn");
          if (tDrawer && tDrawer.hasAttribute("hidden")) {
            tDrawer.removeAttribute("hidden");
            if (tBtn) {
              tBtn.classList.add("is-open");
              tBtn.setAttribute("aria-expanded", "true");
            }
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }

    var folderBtns = footer.querySelectorAll("[data-ee-open-folder]");
    for (var fb = 0; fb < folderBtns.length; fb++) {
      folderBtns[fb].addEventListener("click", function () {
        openFolderInExplorer(this.getAttribute("data-ee-open-folder"));
      });
    }

    // Wire events
    var selectedFooterTags = [];
    var fChips = footer.querySelectorAll("[data-ee-gf-chip]");
    for (var i = 0; i < fChips.length; i++) {
      fChips[i].addEventListener("click", function () {
        this.classList.toggle("on");
        var tag = this.getAttribute("data-ee-gf-chip");
        var idx = selectedFooterTags.indexOf(tag);
        if (idx === -1) selectedFooterTags.push(tag);
        else selectedFooterTags.splice(idx, 1);
        var noteEl = document.getElementById("ee-gf-note");
        if (noteEl && noteEl.value.indexOf(tag) === -1) {
          noteEl.value = (noteEl.value ? noteEl.value + " · " : "") + tag;
        }
      });
    }

    var mutBtns = footer.querySelectorAll("[data-ee-patch-toggle]");
    for (var j = 0; j < mutBtns.length; j++) {
      mutBtns[j].addEventListener("click", function () {
        togglePageMutation(this.getAttribute("data-ee-patch-toggle"));
      });
    }

    document.getElementById("ee-gf-mut-declutter").addEventListener("click", function () {
      togglePageMutation("declutter_bottom");
    });

    document.getElementById("ee-gf-mut-customize").addEventListener("click", function () {
      var on = document.body.classList.toggle("ee-customize-layout");
      this.classList.toggle("is-active", on);
      setFooterStatus(on ? "Widget move/archive controls visible on all page sections." : "Widget move/archive controls hidden.");
    });

    document.getElementById("ee-gf-mut-reset").addEventListener("click", function () {
      togglePageMutation("reset_patches");
    });

    document.getElementById("ee-gf-verdict-yay").addEventListener("click", function () {
      var note = (document.getElementById("ee-gf-note").value || "").trim() || "Approved during testing phase (YAY)";
      recordSelfImproveAction("verdict_yay", currentTargetWid || "page", currentTargetTitle, note, ["approved", "yay"], "approved");
      setFooterStatus("Saved YAY approval for " + currentTargetTitle + " to Self-Improve Ledger!");
    });

    document.getElementById("ee-gf-verdict-polish").addEventListener("click", function () {
      var note = (document.getElementById("ee-gf-note").value || "").trim() || "Flagged for visual/UX polish during testing phase";
      recordSelfImproveAction("verdict_polish", currentTargetWid || "page", currentTargetTitle, note, ["needs_polish"], "improve");
      setFooterStatus("Logged 'Needs Polish' for " + currentTargetTitle + " & queued in self_improve_queue.json!");
    });

    document.getElementById("ee-gf-pick-btn").addEventListener("click", function () {
      if (pickModeActive) stopElementPicker();
      else startElementPicker();
    });

    document.getElementById("ee-gf-diag-btn").addEventListener("click", function () {
      runPageSelfDiagnostic();
    });

    document.getElementById("ee-gf-submit-btn").addEventListener("click", function () {
      var noteEl = document.getElementById("ee-gf-note");
      var note = (noteEl && noteEl.value || "").trim();
      if (!note && selectedFooterTags.length === 0) {
        setFooterStatus("Click a directive chip or type a feedback note first.");
        return;
      }
      var entry = recordSelfImproveAction(
        "testing_feedback",
        currentTargetWid || "page",
        currentTargetTitle,
        note,
        selectedFooterTags.slice(),
        "improve"
      );
      var patchMsg = entry.auto_mutations && entry.auto_mutations.length
        ? " + Auto-Applied [" + entry.auto_mutations.join(", ") + "]"
        : "";
      setFooterStatus("Saved to Self-Improve Ledger" + patchMsg + "!");
      if (noteEl) noteEl.value = "";
    });

    document.getElementById("ee-gf-open-drawer-btn").addEventListener("click", function () {
      var dr = document.getElementById("ee-rm-drawer");
      if (dr) dr.classList.toggle("open");
    });

    applyPersistedPatchesToDOM();
    renderSelfImproveLogUI();
  }

  function buildDock() {
    if (document.getElementById("ee-rm-dock")) return;

    var dock = document.createElement("div");
    dock.id = "ee-rm-dock";
    dock.innerHTML =
      '<button type="button" class="ee-rm-pill" id="ee-rm-toggle" title="Open Self-Improve Feedback Portal, Widget Mover &amp; 7-Chakra Theme">' +
        '<span class="ee-rm-dot"></span>' +
        '<span>Self-Improve</span>' +
        '<span id="ee-rm-active-label">01 Root</span>' +
      '</button>';

    var drawer = document.createElement("div");
    drawer.id = "ee-rm-drawer";
    drawer.setAttribute("role", "dialog");
    drawer.setAttribute("aria-label", "Self-Improve Feedback Portal & Studio Theme");

    var chakraGridHtml = CHAKRAS.map(function (ch) {
      return (
        '<button type="button" class="ee-rm-chakra-btn" data-ee-chakra-btn="' + ch.id + '">' +
          '<span class="ee-rm-swatch" data-swatch="' + ch.id + '"></span>' +
          '<span>' + ch.num + " " + ch.label + '</span>' +
        '</button>'
      );
    }).join("");

    var chips = [
      "Too cluttered — move unneeded widgets to bottom",
      "Make this 1-by-1 guided step-by-step",
      "Remove extra boxes / borders / raw debug text",
      "Bad model sample output — re-render with better prompt",
      "Button or endpoint did not respond",
      "Needs bigger media preview & clearer YAY/NAY buttons"
    ];
    var chipsHtml = chips.map(function (c) {
      return '<button type="button" class="ee-rm-chip" data-ee-chip="' + escapeHtml(c) + '">' + escapeHtml(c) + '</button>';
    }).join("");

    drawer.innerHTML =
      '<div class="ee-rm-hdr">' +
        '<span class="ee-rm-title">SELF-IMPROVE PORTAL &amp; WIDGET MOVER</span>' +
        '<button type="button" class="ee-rm-close" id="ee-rm-close">Close [Esc]</button>' +
      '</div>' +
      '<div class="ee-si-target-box">' +
        '<div>' +
          '<div class="ee-rm-sec-label">TARGET WIDGET / MODEL CARD</div>' +
          '<div class="ee-si-target-name" id="ee-si-target-label">' + escapeHtml(currentTargetTitle) + '</div>' +
        '</div>' +
        '<div class="ee-btn-row">' +
          '<button type="button" class="ee-wctrl-btn improve-btn" id="ee-si-pick-btn">Pick Widget on Page</button>' +
          '<button type="button" class="ee-wctrl-btn" id="ee-si-act-customize" title="Show or hide widget move/archive bars">Customize Layout</button>' +
          '<button type="button" class="ee-wctrl-btn" id="ee-si-undo-btn" title="Undo last widget move/archive">Undo Move</button>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<div class="ee-rm-sec-label">1-Click Instant Layout &amp; Self-Improve Fixes</div>' +
        '<div class="ee-si-quick-actions">' +
          '<button type="button" class="ee-si-action-btn" id="ee-si-act-bottom">↡ Move Target Widget to Bottom</button>' +
          '<button type="button" class="ee-si-action-btn" id="ee-si-act-archive">× Hide / Archive Target Widget</button>' +
          '<button type="button" class="ee-si-action-btn" id="ee-si-act-focus">1-by-1 Calm Focus Mode</button>' +
          '<button type="button" class="ee-si-action-btn" id="ee-si-act-restore-all">Restore All Demoted Widgets</button>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<div class="ee-rm-sec-label">Self-Improve Directives (Click to Log &amp; Apply)</div>' +
        '<div class="ee-rm-chips" id="ee-rm-chips">' + chipsHtml + '</div>' +
      '</div>' +
      '<div>' +
        '<textarea class="ee-rm-textarea" id="ee-rm-note" placeholder="Tell the studio what is ugly, broken, or needs self-improvement on this widget/model..."></textarea>' +
        '<div class="ee-rm-actions">' +
          '<button type="button" class="ee-rm-send" id="ee-rm-send">Save Self-Improvement &amp; Apply</button>' +
          '<span class="ee-rm-status" id="ee-rm-status">Synced to Studio Ledger</span>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<div class="ee-rm-sec-label">Recent Self-Improvements</div>' +
        '<div class="ee-si-log-list" id="ee-si-log-list"></div>' +
      '</div>' +
      '<details open>' +
        '<summary class="ee-rm-sec-label">7-Chakra Spectrum &amp; Dark/Light Mode</summary>' +
        '<div class="ee-rm-mode-row">' +
          '<button type="button" class="ee-rm-mode-btn" data-ee-mode-btn="dark">Dark Mode (Default)</button>' +
          '<button type="button" class="ee-rm-mode-btn" data-ee-mode-btn="light">Warm Daylight</button>' +
        '</div>' +
        '<div class="ee-rm-chakra-grid">' + chakraGridHtml + '</div>' +
      '</details>';

    document.body.appendChild(drawer);
    document.body.appendChild(dock);

    applyTheme(getSavedChakra(), getSavedMode(), false);
    renderSelfImproveLogUI();

    document.getElementById("ee-rm-toggle").addEventListener("click", function () {
      drawer.classList.toggle("open");
    });
    document.getElementById("ee-rm-close").addEventListener("click", function () {
      stopElementPicker();
      drawer.classList.remove("open");
    });

    document.getElementById("ee-si-pick-btn").addEventListener("click", function () {
      if (pickModeActive) stopElementPicker();
      else startElementPicker();
    });

    var custBtn = document.getElementById("ee-si-act-customize");
    if (custBtn) {
      custBtn.addEventListener("click", function () {
        var on = document.body.classList.toggle("ee-customize-layout");
        custBtn.textContent = on ? "Done Customizing" : "Customize Layout";
        setFooterStatus(on ? "Layout controls visible on widgets" : "Layout controls hidden");
      });
    }

    document.getElementById("ee-si-undo-btn").addEventListener("click", function () {
      var last = undoStack.pop();
      if (last && last.wid) {
        restoreWidget(last.wid);
        setFooterStatus("Undid move for " + last.wid);
      }
    });

    document.getElementById("ee-si-act-bottom").addEventListener("click", function () {
      if (currentTargetWid && widgetRegistry[currentTargetWid]) {
        demoteWidgetToBottom(currentTargetWid);
        setFooterStatus("Moved to Bottom Drawer!");
      } else {
        setFooterStatus("Click 'Pick Widget on Page' first");
      }
    });

    document.getElementById("ee-si-act-archive").addEventListener("click", function () {
      if (currentTargetWid && widgetRegistry[currentTargetWid]) {
        archiveWidget(currentTargetWid);
        setFooterStatus("Archived to Bottom Drawer!");
      } else {
        setFooterStatus("Click 'Pick Widget on Page' first");
      }
    });

    document.getElementById("ee-si-act-focus").addEventListener("click", function () {
      togglePageMutation("calm_focus_1by1");
    });

    document.getElementById("ee-si-act-restore-all").addEventListener("click", function () {
      resetAllWidgetsToDefault();
      setFooterStatus("Restored all widgets!");
    });

    var cBtns = drawer.querySelectorAll("[data-ee-chakra-btn]");
    for (var i = 0; i < cBtns.length; i++) {
      cBtns[i].addEventListener("click", function () {
        applyTheme(this.getAttribute("data-ee-chakra-btn"), getSavedMode(), true);
      });
    }

    var mBtns = drawer.querySelectorAll("[data-ee-mode-btn]");
    for (var j = 0; j < mBtns.length; j++) {
      mBtns[j].addEventListener("click", function () {
        applyTheme(getSavedChakra(), this.getAttribute("data-ee-mode-btn"), true);
      });
    }

    var chipBtns = drawer.querySelectorAll("[data-ee-chip]");
    var selectedTags = [];
    for (var k = 0; k < chipBtns.length; k++) {
      chipBtns[k].addEventListener("click", function () {
        this.classList.toggle("on");
        var tag = this.getAttribute("data-ee-chip");
        var idx = selectedTags.indexOf(tag);
        if (idx === -1) selectedTags.push(tag);
        else selectedTags.splice(idx, 1);
        var noteEl = document.getElementById("ee-rm-note");
        if (noteEl && noteEl.value.indexOf(tag) === -1) {
          noteEl.value = (noteEl.value ? noteEl.value + " · " : "") + tag;
        }
      });
    }

    document.getElementById("ee-rm-send").addEventListener("click", function () {
      var noteEl = document.getElementById("ee-rm-note");
      var note = (noteEl && noteEl.value || "").trim();
      if (!note && selectedTags.length === 0) {
        setFooterStatus("Select a chip or enter a note first.");
        return;
      }
      recordSelfImproveAction("user_directive", currentTargetWid, currentTargetTitle, note, selectedTags.slice(), "improve");
      setFooterStatus("Saved to Self-Improve Ledger!");
      if (noteEl) noteEl.value = "";
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (pickModeActive) stopElementPicker();
        else if (drawer.classList.contains("open")) drawer.classList.remove("open");
      }
    });
  }

  // Expose the Self-Referential Self-Improving Page Hook & Folder Tree globally on window
  window.__EE_SELF_IMPROVE_HOOK__ = {
    version: "9.0",
    folderTree: STUDIO_FOLDER_TREE,
    detectTreeLocation: detectTreeLocation,
    openFolderInExplorer: openFolderInExplorer,
    inspectSelf: inspectSelf,
    toggleMutation: togglePageMutation,
    runSelfDiagnostic: runPageSelfDiagnostic,
    submitFeedback: function (verdict, note, tags) {
      return recordSelfImproveAction("hook_feedback", currentTargetWid || "page", currentTargetTitle, note, tags || [], verdict || "improve");
    },
    demoteWidgetToBottom: demoteWidgetToBottom,
    archiveWidget: archiveWidget,
    restoreWidget: restoreWidget,
    resetAll: function () {
      return togglePageMutation("reset_patches");
    }
  };

  function bootAll() {
    if (!isMinimalApplet) {
      buildUniversalHeader();
      buildDock();
      buildGlobalSelfImprovingFooter();
    }
    discoverAndDecorateWidgets();
    if (!isMinimalApplet) {
      applyPersistedPatchesToDOM();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootAll);
  } else {
    bootAll();
  }
})();
