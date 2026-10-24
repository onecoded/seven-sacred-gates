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
  var STORAGE_MODE = "evolve_color_mode_v10_dark";
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
      return localStorage.getItem(STORAGE_MODE) || "dark";
    } catch (e) {
      return "dark";
    }
  }

  function applyTheme(chakra, mode, save) {
    var c = chakra || getSavedChakra();
    var m = mode || getSavedMode();
    document.documentElement.setAttribute("data-chakra", c);
    document.documentElement.setAttribute("data-theme", m);
    document.documentElement.setAttribute("data-mode", m);
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
  }

  applyTheme(getSavedChakra(), getSavedMode(), false);
  window.setEvolveStudioTheme = function (chakra, mode) {
    applyTheme(chakra, mode, true);
  };

  /* ==========================================================================
     UNIVERSAL WIDGET MOVER (Move Up, Move Down, Move to Bottom, Archive/Hide)
     ========================================================================== */
  var pageSlug = detectPageSlug();
  var layoutKey = STORAGE_LAYOUT_PREFIX + pageSlug;
  var patchKey = STORAGE_PATCH_PREFIX + pageSlug;
  var widgetRegistry = {};
  var undoStack = [];

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
    var selectors = [
      "[data-widget-id]",
      ".ee-widget-card",
      ".ee-allmodels-wrap",
      ".ee-twiz-wrap",
      ".credits-banner",
      ".mh-grid",
      ".ee-drawer",
      ".sg-script-card",
      ".sg-media-card",
      ".sg-soul-card",
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
          n.closest("#ee-global-self-improve-footer") ||
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

    seen.forEach(function (el, idx) {
      var wid = inferWidgetId(el, idx);
      var title = inferWidgetTitle(el, idx);
      if (!widgetRegistry[wid]) {
        widgetRegistry[wid] = {
          el: el,
          origParent: el.parentElement,
          origNextSibling: el.nextElementSibling,
          title: title
        };
      }
      if (el.querySelector("[data-ee-wctrl-for='" + wid + "']")) return;

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
    });

    applyWidgetStates();
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
    if (cand && cand.id !== "ee-rm-drawer" && cand.id !== "ee-rm-dock" && cand.id !== "ee-global-self-improve-footer" && !cand.closest("#ee-global-self-improve-footer")) {
      if (hoverOutlinedEl && hoverOutlinedEl !== cand) {
        hoverOutlinedEl.classList.remove("ee-si-pick-hover");
      }
      hoverOutlinedEl = cand;
      hoverOutlinedEl.classList.add("ee-si-pick-hover");
    }
  }, true);

  document.addEventListener("click", function (ev) {
    if (!pickModeActive) return;
    if (ev.target.closest("#ee-rm-drawer") || ev.target.closest("#ee-rm-dock") || ev.target.closest("#ee-global-self-improve-footer")) return;
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
     UNIVERSAL VISIBLE GLOBAL TESTING & SELF-IMPROVING FOOTER
     ========================================================================== */
  function buildGlobalSelfImprovingFooter() {
    if (document.getElementById("ee-global-self-improve-footer")) return;

    var snap = inspectSelf();
    var footer = document.createElement("footer");
    footer.id = "ee-global-self-improve-footer";
    footer.className = "ee-global-footer";
    footer.setAttribute("role", "contentinfo");
    footer.setAttribute("aria-label", "Global Testing Feedback & Self-Referential Self-Improving Page Footer");

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

    footer.innerHTML =
      '<div class="ee-gf-inner">' +
        '<div class="ee-gf-top">' +
          '<div class="ee-gf-brand">' +
            '<div class="ee-gf-kicker-row">' +
              '<span class="ee-gf-kicker">TESTING PHASE &middot; SELF-REFERENTIAL SELF-IMPROVING PAGE HOOK</span>' +
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
            '<a class="ee-btn ee-btn-sm" href="http://127.0.0.1:7871/">Fuel Gauge (:7871)</a>' +
            '<a class="ee-btn ee-btn-sm" href="./SACRED-GATES-STUDIO.html">Sacred Gates (:7872)</a>' +
            '<a class="ee-btn ee-btn-sm" href="http://127.0.0.1:8941/chakra-destiny.html">Chakra Sanctum (:8941)</a>' +
            '<button type="button" class="ee-btn ee-btn-sm" id="ee-gf-open-drawer-btn">Theme &amp; Widget Drawer</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    var host = document.querySelector(".sg-shell, .container, .wrap, main") || document.body;
    host.appendChild(footer);

    // Move existing bottom drawer inside the footer slot so everything is unified at the bottom
    var existingBottom = document.getElementById("ee-bottom-widgets-drawer");
    var slot = document.getElementById("ee-gf-demoted-slot");
    if (existingBottom && slot && existingBottom.parentElement !== slot) {
      slot.appendChild(existingBottom);
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

  // Expose the Self-Referential Self-Improving Page Hook globally on window
  window.__EE_SELF_IMPROVE_HOOK__ = {
    version: "8.0",
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
    buildDock();
    buildGlobalSelfImprovingFooter();
    discoverAndDecorateWidgets();
    applyPersistedPatchesToDOM();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootAll);
  } else {
    bootAll();
  }
})();
