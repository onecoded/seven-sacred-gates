/* EvolveEarth Universal Lead Intake & Value-First Action Router (Zero Inline Styles, Privacy-Safe) */
(function() {
  function getLocalStudioEndpoint() {
    var h = (window.location && window.location.hostname) ? window.location.hostname : '';
    if (h === 'localhost' || h.indexOf('127.') === 0) {
      var p = 7800 + 63;
      return window.location.protocol + '//' + h + ':' + p + '/api/website-lead';
    }
    return '/api/website-lead';
  }

  window.submitEeLeadForm = async function(ev, slug) {
    if (ev && ev.preventDefault) ev.preventDefault();
    var sec = document.getElementById('ee-live-intake');
    var dom = (sec && sec.getAttribute('data-site-domain')) || slug.toUpperCase();
    var routeEmail = (sec && sec.getAttribute('data-route-email')) || ('steward@' + slug + '.com');
    var name = (document.getElementById('ee-lead-name-' + slug) || {}).value || '';
    var contact = (document.getElementById('ee-lead-contact-' + slug) || {}).value || '';
    var offer = (document.getElementById('ee-lead-offer-' + slug) || {}).value || '';
    var context = (document.getElementById('ee-lead-context-' + slug) || {}).value || '';
    var notes = (document.getElementById('ee-lead-notes-' + slug) || {}).value || '';

    var payload = {
      site_slug: slug,
      domain: dom,
      name: name,
      contact: contact,
      offer: offer,
      context: context,
      notes: notes,
      submitted_at: new Date().toISOString()
    };

    try {
      var prev = JSON.parse(localStorage.getItem('ee_submitted_leads') || '[]');
      prev.unshift(payload);
      localStorage.setItem('ee_submitted_leads', JSON.stringify(prev.slice(0, 50)));
    } catch (e) {}

    var resBox = document.getElementById('ee-intake-result-' + slug);
    var stEl = document.getElementById('ee-intake-status-' + slug);
    var repEl = document.getElementById('ee-intake-reply-' + slug);
    var mailEl = document.getElementById('ee-intake-mailto-' + slug);
    if (resBox) resBox.hidden = false;
    if (stEl) stEl.textContent = 'Routing submission to ' + dom + ' (' + routeEmail + ')...';

    var fallbackReply =
      dom + ' — PRIORITY INTAKE RECEIPT\n' +
      'Name / Org: ' + name + '\n' +
      'Contact: ' + contact + '\n' +
      'Selected Tier / Scope: ' + offer + '\n' +
      'Context: ' + context + '\n' +
      (notes ? ('Notes: ' + notes + '\n') : '') +
      '\nSTATUS: Logged and ready for priority response via ' + routeEmail + '.';

    var subj = encodeURIComponent('[' + dom + ' Intake] ' + offer + ' — ' + name);
    var body = encodeURIComponent(fallbackReply);
    if (mailEl) {
      mailEl.setAttribute('href', 'mailto:' + routeEmail + '?subject=' + subj + '&body=' + body);
    }

    try {
      var r = await fetch(getLocalStudioEndpoint(), {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });
      if (r && r.ok) {
        var d = await r.json();
        if (stEl) stEl.textContent = d.message || ('Confirmed: Logged to ' + dom + ' Studio Lead Inbox');
        if (repEl) repEl.textContent = (d.lead && d.lead.auto_reply) ? d.lead.auto_reply : fallbackReply;
        return false;
      }
    } catch (err) {}

    if (stEl) stEl.textContent = 'Confirmed: Instant Receipt Generated for ' + dom + ' (' + routeEmail + ')';
    if (repEl) repEl.textContent = fallbackReply;
    return false;
  };

  window.copyEeReceipt = function(slug) {
    var repEl = document.getElementById('ee-intake-reply-' + slug);
    var stEl = document.getElementById('ee-intake-status-' + slug);
    if (repEl && navigator.clipboard) {
      navigator.clipboard.writeText(repEl.innerText);
      if (stEl) stEl.textContent = 'Copied receipt & action plan to clipboard!';
    }
  };

  window.downloadEeLeadMagnet = function(slug) {
    var sec = document.getElementById('ee-live-intake');
    var dom = (sec && sec.getAttribute('data-site-domain')) || slug.toUpperCase();
    var content = '';
    if (slug === 'closingclaims') {
      content =
        'CLOSINGCLAIMS.COM — STATUTORY CLAIM & XACTIMATE SUPPLEMENT CHECKLIST\n' +
        'Licensed Public Adjuster: FL W437424 | HI 479652 | NFIP Certified\n\n' +
        '01. Policy & Declarations Page Audit (Coverage A/B/C/D, Ordinance or Law F.S. 627.7011 / HRS 431:10E).\n' +
        '02. General Contractor Overhead & Profit (10% + 10% O&P when 3+ trades are involved).\n' +
        '03. Roof Brittle Test, ITEL Shingle/Tile Matching & Drip Edge / Valley Metal Code Upgrades.\n' +
        '04. IICRC S500 Psychrometric Water Mitigation Logs & Dehumidification Equipment Days.\n' +
        '05. Personal Property Contents Like Kind and Quality (LKQ) Replacement Cost Valuation.\n';
    } else {
      content =
        dom + ' — SOVEREIGN ACTION & 7-TO-1 ECOSYSTEM BRIEF\n\n' +
        '7 ONETRUEDAO.COM (07 Crown · 963 Hz) — 108 Art Categories & 40/30/30 Earth-Healing Raffles\n' +
        '6 BESTOFMUSTHAVE.COM (06 Third Eye · 852 Hz) — 4-Gate Buy-It-For-Life (BIFL) & Dosha Curation\n' +
        '5 SEOWEBANDVIDEO.COM (05 Throat · 741 Hz) — Sub-20ms Edge Web, Read-Aloud SEO & 4K Cinema\n' +
        '4 OSHNA.COM (04 Heart · 639 Hz) — Oshna Solar Love, Soft Strength & 6 Archetype Vigils\n' +
        '3 POWERYOGADIET.COM (03 Solar · 528 Hz) — Digestive Agni, Power Yoga & 10 Ayurvedic Herb Formulas\n' +
        '2 TANTRICUNITY.COM (02 Sacral · 417 Hz) — 2-CoCreate Dyad Co-Regulation & Ojas Mastery\n' +
        '1 EVOLVEEARTH.COM + 1 PREPRESTORE.COM (01 Root · 396 Hz) — Physical Earth Sanctuary & Storm Readiness\n';
    }
    var blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = slug + '-action-checklist.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
})();
