// ========================================
// ToolNook Analytics — Tool Usage Tracker
// ========================================
// Silently tracks which tools are used and writes counts to Firestore.
// The admin dashboard at /admin/ reads this data to show usage stats.
// This script NEVER blocks page rendering or impacts user experience.

(function () {
  'use strict';

  // Skip if Firebase is not yet configured
  if (typeof TN_FIREBASE_ENABLED === 'undefined' || !TN_FIREBASE_ENABLED) return;
  if (typeof TN_FIREBASE_CONFIG === 'undefined') return;

  const SDK = 'https://www.gstatic.com/firebasejs/10.8.0/';

  async function track() {
    try {
      const { initializeApp, getApps } = await import(SDK + 'firebase-app.js');
      const { getFirestore, doc, setDoc, increment, serverTimestamp } =
        await import(SDK + 'firebase-firestore.js');

      const app = getApps().length ? getApps()[0] : initializeApp(TN_FIREBASE_CONFIG);
      const db  = getFirestore(app);

      // Make app & DB accessible to other modules (e.g. url-shortener, pastebin)
      window._tnApp = app;
      window._tnDb = db;

      // Determine the slug for the current page
      const path   = location.pathname;
      const tmatch = path.match(/\/tools\/([^/]+?)(?:\.html)?$/);
      const slug   = tmatch
        ? tmatch[1]
        : (path === '/' || /\/index\.html$/.test(path))
          ? '_homepage'
          : null;

      if (!slug) return;

      // Rate-limit: only track once per 60s per slug per browser session
      const key  = 'tn_last_' + slug;
      const last = +(sessionStorage.getItem(key) || 0);
      if (Date.now() - last < 60_000) return;
      sessionStorage.setItem(key, String(Date.now()));

      const today = new Date().toISOString().slice(0, 10);

      await Promise.all([
        setDoc(
          doc(db, 'analytics', 'totals'),
          { [slug]: increment(1), _updated: serverTimestamp() },
          { merge: true }
        ),
        setDoc(
          doc(db, 'analytics', 'daily_' + today),
          { [slug]: increment(1), _date: today },
          { merge: true }
        ),
      ]);
    } catch (_) {
      // Analytics must NEVER surface errors to users
    }
  }

  // Delay so tracking never interferes with LCP/FID
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(track, 900));
  } else {
    setTimeout(track, 900);
  }
})();
