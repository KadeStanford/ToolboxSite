// ToolNook — Site Components (Header, Footer, Search)

const TN_TOOLS = [
  // ── Developer Tools ──
  { name: 'JSON Formatter',           slug: 'json-formatter',        category: 'developer',  icon: '&#x7B;&#x7D;', desc: 'Format, validate & beautify JSON' },
  { name: 'Base64 Encoder/Decoder',   slug: 'base64',                category: 'developer',  icon: '&#128196;',    desc: 'Encode or decode Base64 strings' },
  { name: 'Regex Tester',             slug: 'regex-tester',          category: 'developer',  icon: '&#128269;',    desc: 'Test regular expressions live' },
  { name: 'Color Converter',          slug: 'color-converter',       category: 'developer',  icon: '&#127912;',    desc: 'Convert HEX, RGB and HSL colors' },
  { name: 'Text Diff Checker',        slug: 'diff-checker',          category: 'developer',  icon: '&#128260;',    desc: 'Compare two texts side by side' },
  { name: 'JWT Decoder',              slug: 'jwt-decoder',           category: 'developer',  icon: '&#128274;',    desc: 'Decode & inspect JWT tokens' },
  { name: 'URL Encoder/Decoder',      slug: 'url-encoder',           category: 'developer',  icon: '&#128279;',    desc: 'Encode or decode URL strings' },
  { name: 'UUID Generator',           slug: 'uuid-generator',        category: 'developer',  icon: '&#128247;',    desc: 'Generate UUID v4 & bulk UUIDs' },
  { name: 'Hash Generator',           slug: 'hash-generator',        category: 'developer',  icon: '&#128273;',    desc: 'SHA-256, SHA-512, SHA-1 hashes' },
  { name: 'CSS Minifier',             slug: 'css-minifier',          category: 'developer',  icon: '&#127912;',    desc: 'Minify or beautify CSS code' },
  { name: 'SQL Formatter',            slug: 'sql-formatter',         category: 'developer',  icon: '&#128196;',    desc: 'Format and beautify SQL queries' },
  { name: 'Cron Expression Builder',  slug: 'cron-builder',          category: 'developer',  icon: '&#9200;',      desc: 'Build & explain cron expressions' },
  // ── Text Tools ──
  { name: 'Word Counter',             slug: 'word-counter',          category: 'text',       icon: '&#128221;',    desc: 'Count words, chars & reading time' },
  { name: 'Case Converter',           slug: 'case-converter',        category: 'text',       icon: '&#128288;',    desc: 'Convert text to any case style' },
  { name: 'Text Cleaner',             slug: 'text-cleaner',          category: 'text',       icon: '&#129529;',    desc: 'Remove whitespace & clean text' },
  { name: 'Text Sorter',              slug: 'text-sorter',           category: 'text',       icon: '&#128195;',    desc: 'Sort lines alphabetically' },
  { name: 'Slug Generator',           slug: 'slug-generator',        category: 'text',       icon: '&#128279;',    desc: 'Turn titles into URL-friendly slugs' },
  { name: 'Lorem Ipsum Generator',    slug: 'lorem-ipsum',           category: 'text',       icon: '&#128214;',    desc: 'Generate placeholder lorem ipsum text' },
  { name: 'Markdown Previewer',       slug: 'markdown-preview',      category: 'text',       icon: '&#9999;',      desc: 'Preview markdown as rendered HTML' },
  // ── Calculators ──
  { name: 'Age Calculator',           slug: 'age-calculator',        category: 'calculator', icon: '&#127881;',    desc: 'Calculate exact age from birthdate' },
  { name: 'BMI Calculator',           slug: 'bmi-calculator',        category: 'calculator', icon: '&#9878;',      desc: 'Calculate Body Mass Index' },
  { name: 'Tip Calculator',           slug: 'tip-calculator',        category: 'calculator', icon: '&#128176;',    desc: 'Calculate tips and split bills' },
  { name: 'Percentage Calculator',    slug: 'percentage-calculator', category: 'calculator', icon: '&#37;',        desc: 'Quick percentage calculations' },
  { name: 'Unit Converter',           slug: 'unit-converter',        category: 'calculator', icon: '&#128207;',    desc: 'Convert length, weight, temperature' },
  { name: 'Compound Interest',        slug: 'compound-interest',     category: 'calculator', icon: '&#128200;',    desc: 'Visualize compound interest growth' },
  // ── Generators ──
  { name: 'Password Generator',       slug: 'password-generator',    category: 'generator',  icon: '&#128272;',    desc: 'Generate strong secure passwords' },
  { name: 'QR Code Generator',        slug: 'qr-generator',          category: 'generator',  icon: '&#9646;',      desc: 'Create QR codes instantly' },
  { name: 'Color Palette Generator',  slug: 'color-palette',         category: 'generator',  icon: '&#127775;',    desc: 'Generate beautiful color palettes' },
  { name: 'Random Number Generator',  slug: 'random-number',         category: 'generator',  icon: '&#127922;',    desc: 'Generate random numbers & dice rolls' },
  // ── Date & Time ──
  { name: 'Date Difference Calculator', slug: 'date-difference',     category: 'datetime',   icon: '&#128197;',    desc: 'Calculate days, weeks, months between dates' },
  { name: 'Time Zone Converter',      slug: 'timezone-converter',    category: 'datetime',   icon: '&#127758;',    desc: 'Convert time between world time zones' },
  { name: 'Unix Timestamp Converter', slug: 'unix-timestamp',        category: 'datetime',   icon: '&#128336;',    desc: 'Convert Unix timestamps to dates' },
  { name: 'Countdown Timer',          slug: 'countdown-timer',       category: 'datetime',   icon: '&#9987;',      desc: 'Live countdown to any date or event' },
  { name: 'Date Formatter',           slug: 'date-formatter',        category: 'datetime',   icon: '&#128467;',    desc: 'Format dates in any pattern' },
  // ── Math & Science ──
  { name: 'Scientific Calculator',    slug: 'scientific-calculator', category: 'math',       icon: '&#129518;',    desc: 'Full scientific calculator online' },
  { name: 'Statistics Calculator',    slug: 'statistics-calculator', category: 'math',       icon: '&#128202;',    desc: 'Mean, median, mode, std deviation' },
  { name: 'Number Base Converter',    slug: 'number-base-converter', category: 'math',       icon: '&#128290;',    desc: 'Binary, decimal, hex, octal converter' },
  { name: 'Fraction Calculator',      slug: 'fraction-calculator',   category: 'math',       icon: '&#8531;',      desc: 'Add, subtract, multiply fractions' },
  { name: 'Roman Numerals Converter', slug: 'roman-numerals',        category: 'math',       icon: '&#8559;',      desc: 'Convert Roman numerals to numbers' },
  // ── Finance ──
  { name: 'Loan Calculator',          slug: 'loan-calculator',       category: 'finance',    icon: '&#128176;',    desc: 'Monthly loan payments & amortization' },
  { name: 'Mortgage Calculator',      slug: 'mortgage-calculator',   category: 'finance',    icon: '&#127968;',    desc: 'Calculate mortgage payments & costs' },
  { name: 'Currency Converter',       slug: 'currency-converter',    category: 'finance',    icon: '&#128178;',    desc: 'Convert between 30+ world currencies' },
  // ── Health & Fitness ──
  { name: 'Calorie Calculator',       slug: 'calorie-calculator',    category: 'health',     icon: '&#129380;',    desc: 'Calculate TDEE & daily calorie needs' },
  { name: 'Macro Calculator',         slug: 'macro-calculator',      category: 'health',     icon: '&#127807;',    desc: 'Find your ideal protein, carb & fat macros' },
  { name: 'Body Fat Calculator',      slug: 'body-fat-calculator',   category: 'health',     icon: '&#9878;',      desc: 'Estimate body fat percentage' },
  // ── Image Tools ──
  { name: 'Image Resizer',            slug: 'image-resizer',         category: 'image',      icon: '&#128444;',    desc: 'Resize images in browser — no upload' },
  { name: 'Image to Base64',          slug: 'image-to-base64',       category: 'image',      icon: '&#128247;',    desc: 'Convert images to Base64 data URLs' },
  { name: 'Image Color Picker',       slug: 'image-color-picker',    category: 'image',      icon: '&#127912;',    desc: 'Extract & pick colors from any image' },
  // ── Content & SEO ──
  { name: 'Meta Tag Generator',       slug: 'meta-tag-generator',    category: 'content',    icon: '&#128203;',    desc: 'Generate SEO meta & Open Graph tags' },
  { name: 'Reading Time Calculator',  slug: 'reading-time',          category: 'content',    icon: '&#128214;',    desc: 'Calculate reading time for any text' },
  { name: 'Invoice Generator',        slug: 'invoice-generator',     category: 'content',    icon: '&#128190;',    desc: 'Create professional invoices for print' },
  { name: 'Hashtag Generator',        slug: 'hashtag-generator',     category: 'content',    icon: '&#35;',        desc: 'Generate hashtags for Instagram & TikTok' },
  // ── Connected Tools (Firebase) ──
  { name: 'URL Shortener',            slug: 'url-shortener',         category: 'connected',  icon: '&#128279;',    desc: 'Shorten long URLs with cloud storage' },
  { name: 'Text Share / Pastebin',    slug: 'pastebin',              category: 'connected',  icon: '&#128203;',    desc: 'Share text snippets with a link' },
  // ── New Developer Tools ──
  { name: 'JSON to CSV',              slug: 'json-to-csv',           category: 'developer',  icon: '&#128196;',    desc: 'Convert JSON data to CSV format' },
  { name: 'HTML Entity Encoder',      slug: 'html-entity-encoder',   category: 'developer',  icon: '&#38;',        desc: 'Encode & decode HTML entities' },
  { name: 'Chmod Calculator',         slug: 'chmod-calculator',      category: 'developer',  icon: '&#128274;',    desc: 'Calculate Unix file permissions' },
  { name: 'HTTP Status Codes',        slug: 'http-status-codes',     category: 'developer',  icon: '&#128214;',    desc: 'Searchable HTTP status code reference' },
  { name: 'API Response Formatter',   slug: 'api-response-formatter',category: 'developer',  icon: '&#128203;',    desc: 'Format & highlight API responses' },
  // ── New Text Tools ──
  { name: 'Text to Speech',           slug: 'text-to-speech',        category: 'text',       icon: '&#128264;',    desc: 'Convert text to speech in browser' },
  { name: 'Fancy Text Generator',     slug: 'fancy-text-generator',  category: 'text',       icon: '&#10024;',     desc: 'Unicode fonts & fancy text styles' },
  { name: 'Emoji Picker',             slug: 'emoji-picker',          category: 'text',       icon: '&#128515;',    desc: 'Browse & copy emojis by category' },
  { name: 'Whitespace Remover',       slug: 'whitespace-remover',    category: 'text',       icon: '&#128065;',    desc: 'Detect & remove invisible characters' },
  // ── Converter Tools ──
  { name: 'CSV to JSON',              slug: 'csv-to-json',           category: 'converter',  icon: '&#128196;',    desc: 'Convert CSV data to JSON format' },
  { name: 'YAML to JSON',             slug: 'yaml-to-json',          category: 'converter',  icon: '&#128196;',    desc: 'Convert between YAML and JSON' },
  { name: 'Markdown to HTML',         slug: 'markdown-to-html',      category: 'converter',  icon: '&#9999;',      desc: 'Convert Markdown to HTML in real-time' },
  { name: 'Image to PDF',             slug: 'image-to-pdf',          category: 'converter',  icon: '&#128444;',    desc: 'Combine images into a PDF document' },
  { name: 'PDF to Image',             slug: 'pdf-to-image',          category: 'converter',  icon: '&#128444;',    desc: 'Extract images from PDF pages' },
  // ── SEO & Web Tools ──
  { name: 'Meta Tag Analyzer',        slug: 'meta-tag-analyzer',     category: 'seo',        icon: '&#128270;',    desc: 'Analyze & score HTML meta tags' },
  { name: 'Robots.txt Generator',     slug: 'robots-txt-generator',  category: 'seo',        icon: '&#129302;',    desc: 'Build robots.txt with presets' },
  { name: 'OG Tag Preview',           slug: 'og-preview',            category: 'seo',        icon: '&#128247;',    desc: 'Preview Open Graph social cards' },
  { name: 'Redirect Checker',         slug: 'redirect-checker',      category: 'seo',        icon: '&#128259;',    desc: 'Simulate & visualize redirect chains' },
  { name: 'Schema Generator',         slug: 'schema-generator',      category: 'seo',        icon: '&#128203;',    desc: 'Generate JSON-LD structured data' },
  // ── Security Tools ──
  { name: 'Password Strength Checker',slug: 'password-strength',     category: 'security',   icon: '&#128272;',    desc: 'Analyze password entropy & strength' },
  { name: 'IP Lookup',                slug: 'ip-lookup',             category: 'security',   icon: '&#127758;',    desc: 'Lookup IP geolocation & info' },
  { name: 'User Agent Parser',        slug: 'user-agent',            category: 'security',   icon: '&#128187;',    desc: 'Parse browser user agent strings' },
  { name: 'Email Header Analyzer',    slug: 'email-header-analyzer', category: 'security',   icon: '&#128231;',    desc: 'Trace email headers & hops' },
  { name: 'Privacy Policy Generator', slug: 'privacy-policy-generator',category:'security',   icon: '&#128220;',    desc: 'Generate a privacy policy for your site' },
  // ── Social Media Tools ──
  { name: 'Tweet Character Counter',  slug: 'twitter-counter',       category: 'social',     icon: '&#128038;',    desc: 'Count chars for Twitter/X posts' },
  { name: 'Instagram Caption Editor', slug: 'instagram-caption',     category: 'social',     icon: '&#128247;',    desc: 'Format Instagram captions & hashtags' },
  { name: 'YouTube Thumbnail Preview',slug: 'youtube-thumbnail',     category: 'social',     icon: '&#127909;',    desc: 'Preview YouTube thumbnail in context' },
  { name: 'Social Image Resizer',     slug: 'social-image-resizer',  category: 'social',     icon: '&#128444;',    desc: 'Resize images for social platforms' },
  { name: 'Bio Link Generator',       slug: 'bio-link-generator',    category: 'social',     icon: '&#128279;',    desc: 'Create a link-in-bio page' },
  // ── Math Tools (extra) ──
  { name: 'Matrix Calculator',        slug: 'matrix-calculator',     category: 'math',       icon: '&#129518;',    desc: 'Add, multiply & invert matrices' },
  { name: 'Quadratic Solver',         slug: 'quadratic-solver',      category: 'math',       icon: '&#128208;',    desc: 'Solve quadratic equations step-by-step' },
  { name: 'Prime Number Checker',     slug: 'prime-checker',         category: 'math',       icon: '&#128290;',    desc: 'Check primes & find prime ranges' },
  // ── Utility Tools ──
  { name: 'Stopwatch',                slug: 'stopwatch',             category: 'utility',    icon: '&#9201;',      desc: 'Precision stopwatch with lap times' },
  { name: 'Pomodoro Timer',           slug: 'pomodoro-timer',        category: 'utility',    icon: '&#127813;',    desc: 'Focus timer using Pomodoro technique' },
  { name: 'Notes & Scratchpad',       slug: 'notes-scratchpad',      category: 'utility',    icon: '&#128221;',    desc: 'Multi-tab notepad with auto-save' },
  { name: 'Screen Resolution',        slug: 'screen-resolution',     category: 'utility',    icon: '&#128187;',    desc: 'Detect display resolution & info' },
  { name: 'Typing Speed Test',        slug: 'typing-test',           category: 'utility',    icon: '&#9000;',      desc: 'Test your typing speed & accuracy' },
  { name: 'Internet Speed Test',      slug: 'speed-test',            category: 'utility',    icon: '&#128640;',    desc: 'Estimate your download speed' },
  { name: 'Random Color Generator',   slug: 'random-color',          category: 'utility',    icon: '&#127912;',    desc: 'Generate random colors & palettes' },
];

const CATEGORY_META = {
  developer: { label: 'Developer Tools',    icon: '&#128187;' },
  text:       { label: 'Text Tools',         icon: '&#128221;' },
  calculator: { label: 'Calculators',        icon: '&#129518;' },
  generator:  { label: 'Generators',         icon: '&#10024;'  },
  datetime:   { label: 'Date & Time',        icon: '&#128197;' },
  math:       { label: 'Math & Science',     icon: '&#128290;' },
  finance:    { label: 'Finance',            icon: '&#128178;' },
  health:     { label: 'Health & Fitness',   icon: '&#129440;' },
  image:      { label: 'Image Tools',        icon: '&#128444;' },
  content:    { label: 'Content & SEO',      icon: '&#128203;' },
  connected:  { label: 'Connected Tools',    icon: '&#9729;'   },
  converter:  { label: 'Converters',         icon: '&#128196;' },
  seo:        { label: 'SEO & Web',          icon: '&#128270;' },
  security:   { label: 'Security',           icon: '&#128274;' },
  social:     { label: 'Social Media',       icon: '&#128038;' },
  utility:    { label: 'Utility',            icon: '&#128295;' },
};

function getToolPath(slug) {
  return '/tools/' + slug + '.html';
}

function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;
  el.innerHTML = `
  <a href="#main-content" class="skip-nav">Skip to main content</a>
  <header class="site-header" role="banner">
    <div class="header-inner">
      <a href="/" class="site-logo" aria-label="ToolNook home">
        <span aria-hidden="true">&#128736;</span>
        <span class="logo-text">ToolNook</span>
      </a>
      <nav class="site-nav" id="main-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/#developer-tools">Dev Tools</a>
        <a href="/#calculators">Calculators</a>
        <a href="/#finance-tools">Finance</a>
        <a href="/#health-tools">Health</a>
        <a href="/#datetime-tools">Date &amp; Time</a>
        <a href="/#image-tools">Images</a>
        <a href="/#generators">Generators</a>
      </nav>
      <button class="hamburger" id="hamburger-btn" onclick="toggleNav()" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="main-nav">
        <span aria-hidden="true">&#9776;</span>
      </button>
    </div>
  </header>`;
}

function toggleNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('hamburger-btn');
  const isOpen = nav.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', String(isOpen));
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
  <footer class="site-footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="footer-logo" aria-label="ToolNook home"><span aria-hidden="true">&#128736;</span> ToolNook</a>
          <p>90+ free online tools for developers, writers, and everyone in between. No signup. No tracking. Just tools.</p>
        </div>
        <nav class="footer-col" aria-label="Developer tools">
          <h4>Developer Tools</h4>
          <a href="/tools/json-formatter.html">JSON Formatter</a>
          <a href="/tools/base64.html">Base64 Tool</a>
          <a href="/tools/regex-tester.html">Regex Tester</a>
          <a href="/tools/uuid-generator.html">UUID Generator</a>
          <a href="/tools/hash-generator.html">Hash Generator</a>
          <a href="/tools/css-minifier.html">CSS Minifier</a>
        </nav>
        <nav class="footer-col" aria-label="Calculators and finance">
          <h4>Calculators &amp; Finance</h4>
          <a href="/tools/age-calculator.html">Age Calculator</a>
          <a href="/tools/bmi-calculator.html">BMI Calculator</a>
          <a href="/tools/loan-calculator.html">Loan Calculator</a>
          <a href="/tools/mortgage-calculator.html">Mortgage Calculator</a>
          <a href="/tools/currency-converter.html">Currency Converter</a>
          <a href="/tools/compound-interest.html">Compound Interest</a>
        </nav>
        <nav class="footer-col" aria-label="Health and fitness">
          <h4>Health &amp; Fitness</h4>
          <a href="/tools/calorie-calculator.html">Calorie Calculator</a>
          <a href="/tools/macro-calculator.html">Macro Calculator</a>
          <a href="/tools/body-fat-calculator.html">Body Fat Calculator</a>
          <a href="/tools/date-difference.html">Date Difference</a>
          <a href="/tools/timezone-converter.html">Timezone Converter</a>
          <a href="/tools/countdown-timer.html">Countdown Timer</a>
        </nav>
        <nav class="footer-col" aria-label="Generators and site pages">
          <h4>Generators &amp; More</h4>
          <a href="/tools/password-generator.html">Password Generator</a>
          <a href="/tools/qr-generator.html">QR Code Generator</a>
          <a href="/tools/image-resizer.html">Image Resizer</a>
          <a href="/tools/meta-tag-generator.html">Meta Tag Generator</a>
          <a href="/tools/invoice-generator.html">Invoice Generator</a>
          <a href="/privacy-policy.html">Privacy Policy</a>
          <a href="/accessibility.html">Accessibility</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} <a href="/admin/login.html" style="color:inherit;text-decoration:none;cursor:default;" title="">ToolNook.net</a> &mdash; All tools run in your browser. No data is stored or sent to any server (except Connected Tools).</span>
        <span>Built with <span aria-hidden="true">&#10084;</span><span class="sr-only">love</span> for productivity</span>
      </div>
    </div>
  </footer>`;
}

function renderSidebarTools(currentSlug) {
  const others = TN_TOOLS.filter(t => t.slug !== currentSlug).slice(0, 10);
  return others.map(t =>
    `<a href="${getToolPath(t.slug)}" class="sidebar-tool-link"><span aria-hidden="true">${t.icon}</span> ${t.name}</a>`
  ).join('');
}

function renderRelatedTools(currentSlug, category) {
  const related = TN_TOOLS.filter(t => t.slug !== currentSlug && t.category === category).slice(0, 6);
  const others  = TN_TOOLS.filter(t => t.slug !== currentSlug && t.category !== category).slice(0, Math.max(0, 6 - related.length));
  return [...related, ...others].map(t =>
    `<a href="${getToolPath(t.slug)}" class="related-card"><span aria-hidden="true">${t.icon}</span> ${t.name}</a>`
  ).join('');
}

// Homepage search filter
function initSearch() {
  const input = document.getElementById('tool-search');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll('.tool-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = (!q || text.includes(q)) ? '' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initSearch();

  // A11y: set skip-nav target on the main content area
  const mainEl = document.querySelector('main') ||
                 document.querySelectorAll('.page-wrapper')[1] ||
                 document.querySelector('.page-with-sidebar');
  if (mainEl && !mainEl.id) {
    mainEl.id = 'main-content';
    mainEl.setAttribute('tabindex', '-1');
  }

  // A11y: label <section> elements by their visible heading (WCAG 1.3.1)
  document.querySelectorAll('section.category-section').forEach(section => {
    const heading = section.querySelector('h2, h3');
    if (heading && !section.getAttribute('aria-labelledby')) {
      if (!heading.id) heading.id = 'sec-' + (section.id || Math.random().toString(36).slice(2, 8));
      section.setAttribute('aria-labelledby', heading.id);
    }
  });

  // A11y: label sidebar complementary region
  const sidebar = document.querySelector('aside.sidebar');
  if (sidebar && !sidebar.getAttribute('aria-label')) sidebar.setAttribute('aria-label', 'Sidebar');

  // A11y: hide decorative tool-card icons from screen readers
  document.querySelectorAll('.tool-card-icon').forEach(el => el.setAttribute('aria-hidden', 'true'));

  // A11y: auto-associate orphaned labels with their adjacent input (WCAG 1.3.1)
  document.querySelectorAll('label:not([for])').forEach(label => {
    const next = label.nextElementSibling;
    if (next && ['INPUT', 'TEXTAREA', 'SELECT'].includes(next.tagName)) {
      if (!next.id) next.id = 'field-' + Math.random().toString(36).slice(2, 8);
      label.setAttribute('for', next.id);
    }
  });
});
