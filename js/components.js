// ToolNook — Site Components (Header, Footer, Search)

const TN_TOOLS = [
  // Developer
  { name: 'JSON Formatter', slug: 'json-formatter', category: 'developer', icon: '&#x7B;&#x7D;', desc: 'Format, validate & beautify JSON' },
  { name: 'Base64 Encoder/Decoder', slug: 'base64', category: 'developer', icon: '&#128196;', desc: 'Encode or decode Base64 strings' },
  { name: 'Regex Tester', slug: 'regex-tester', category: 'developer', icon: '&#128269;', desc: 'Test regular expressions live' },
  { name: 'Color Converter', slug: 'color-converter', category: 'developer', icon: '&#127912;', desc: 'Convert HEX, RGB and HSL colors' },
  { name: 'Text Diff Checker', slug: 'diff-checker', category: 'developer', icon: '&#128260;', desc: 'Compare two texts side by side' },
  { name: 'JWT Decoder', slug: 'jwt-decoder', category: 'developer', icon: '&#128274;', desc: 'Decode & inspect JWT tokens' },
  { name: 'URL Encoder/Decoder', slug: 'url-encoder', category: 'developer', icon: '&#128279;', desc: 'Encode or decode URL strings' },
  // Text
  { name: 'Word Counter', slug: 'word-counter', category: 'text', icon: '&#128221;', desc: 'Count words, chars & reading time' },
  { name: 'Case Converter', slug: 'case-converter', category: 'text', icon: '&#128288;', desc: 'Convert text to any case style' },
  { name: 'Text Cleaner', slug: 'text-cleaner', category: 'text', icon: '&#129529;', desc: 'Remove whitespace & clean text' },
  { name: 'Text Sorter', slug: 'text-sorter', category: 'text', icon: '&#128195;', desc: 'Sort lines alphabetically' },
  { name: 'Slug Generator', slug: 'slug-generator', category: 'text', icon: '&#128279;', desc: 'Turn titles into URL-friendly slugs' },
  { name: 'Lorem Ipsum Generator', slug: 'lorem-ipsum', category: 'text', icon: '&#128214;', desc: 'Generate placeholder lorem ipsum text' },
  { name: 'Markdown Previewer', slug: 'markdown-preview', category: 'text', icon: '&#9999;', desc: 'Preview markdown as rendered HTML' },
  // Calculators
  { name: 'Age Calculator', slug: 'age-calculator', category: 'calculator', icon: '&#127881;', desc: 'Calculate exact age from birthdate' },
  { name: 'BMI Calculator', slug: 'bmi-calculator', category: 'calculator', icon: '&#9878;', desc: 'Calculate Body Mass Index' },
  { name: 'Tip Calculator', slug: 'tip-calculator', category: 'calculator', icon: '&#128176;', desc: 'Calculate tips and split bills' },
  { name: 'Percentage Calculator', slug: 'percentage-calculator', category: 'calculator', icon: '&#37;', desc: 'Quick percentage calculations' },
  { name: 'Unit Converter', slug: 'unit-converter', category: 'calculator', icon: '&#128207;', desc: 'Convert length, weight, temperature' },
  { name: 'Compound Interest', slug: 'compound-interest', category: 'calculator', icon: '&#128200;', desc: 'Visualize compound interest growth' },
  // Generators
  { name: 'Password Generator', slug: 'password-generator', category: 'generator', icon: '&#128272;', desc: 'Generate strong secure passwords' },
  { name: 'QR Code Generator', slug: 'qr-generator', category: 'generator', icon: '&#9646;', desc: 'Create QR codes instantly' },
  { name: 'Color Palette Generator', slug: 'color-palette', category: 'generator', icon: '&#127775;', desc: 'Generate beautiful color palettes' },
  { name: 'Random Number Generator', slug: 'random-number', category: 'generator', icon: '&#127922;', desc: 'Generate random numbers & dice rolls' },
];

const CATEGORY_META = {
  developer: { label: 'Developer Tools', icon: '&#128187;' },
  text:       { label: 'Text Tools',      icon: '&#128221;' },
  calculator: { label: 'Calculators',     icon: '&#129518;' },
  generator:  { label: 'Generators',      icon: '&#10024;' },
};

function getToolPath(slug) {
  return '/tools/' + slug + '.html';
}

function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;
  el.innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="site-logo">
        <span>&#128736;</span>
        <span class="logo-text">ToolNook</span>
      </a>
      <nav class="site-nav" id="main-nav">
        <a href="/">Home</a>
        <a href="/#developer-tools">Dev Tools</a>
        <a href="/#text-tools">Text Tools</a>
        <a href="/#calculators">Calculators</a>
        <a href="/#generators">Generators</a>
      </nav>
      <button class="hamburger" onclick="toggleNav()" aria-label="Menu">&#9776;</button>
    </div>
  </header>`;
}

function toggleNav() {
  document.getElementById('main-nav').classList.toggle('open');
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="footer-logo">&#128736; ToolNook</a>
          <p>Free online tools for developers, writers, and everyone in between. No signup. No tracking. Just tools.</p>
        </div>
        <div class="footer-col">
          <h4>Developer Tools</h4>
          <a href="/tools/json-formatter.html">JSON Formatter</a>
          <a href="/tools/base64.html">Base64 Tool</a>
          <a href="/tools/regex-tester.html">Regex Tester</a>
          <a href="/tools/diff-checker.html">Diff Checker</a>
          <a href="/tools/jwt-decoder.html">JWT Decoder</a>
          <a href="/tools/url-encoder.html">URL Encoder</a>
        </div>
        <div class="footer-col">
          <h4>Text Tools</h4>
          <a href="/tools/word-counter.html">Word Counter</a>
          <a href="/tools/case-converter.html">Case Converter</a>
          <a href="/tools/slug-generator.html">Slug Generator</a>
          <a href="/tools/lorem-ipsum.html">Lorem Ipsum</a>
          <a href="/tools/markdown-preview.html">Markdown Preview</a>
          <a href="/tools/text-sorter.html">Text Sorter</a>
        </div>
        <div class="footer-col">
          <h4>Calculators &amp; More</h4>
          <a href="/tools/password-generator.html">Password Generator</a>
          <a href="/tools/qr-generator.html">QR Code Generator</a>
          <a href="/tools/unit-converter.html">Unit Converter</a>
          <a href="/tools/age-calculator.html">Age Calculator</a>
          <a href="/tools/compound-interest.html">Compound Interest</a>
          <a href="/privacy-policy.html">Privacy Policy</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} ToolNook.net &mdash; All tools run in your browser. No data is stored or sent to any server.</span>
        <span>Built with &#10084; for productivity</span>
      </div>
    </div>
  </footer>`;
}

function renderSidebarTools(currentSlug) {
  const others = TN_TOOLS.filter(t => t.slug !== currentSlug).slice(0, 10);
  return others.map(t =>
    `<a href="${getToolPath(t.slug)}" class="sidebar-tool-link">${t.icon} ${t.name}</a>`
  ).join('');
}

function renderRelatedTools(currentSlug, category) {
  const related = TN_TOOLS.filter(t => t.slug !== currentSlug && t.category === category).slice(0, 6);
  const others  = TN_TOOLS.filter(t => t.slug !== currentSlug && t.category !== category).slice(0, Math.max(0, 6 - related.length));
  return [...related, ...others].map(t =>
    `<a href="${getToolPath(t.slug)}" class="related-card">${t.icon} ${t.name}</a>`
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
});
