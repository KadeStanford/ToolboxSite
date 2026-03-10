// ToolNook — Site Components (Header, Footer, Search)

// ── AdSense injection (ensures all pages get the verification script) ──
(function() {
  if (!document.querySelector('script[src*="adsbygoogle"]')) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1543757982090409';
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }
  // Font Awesome injection
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(fa);
  }
})();

const TN_TOOLS = [
  // ── Developer Tools ──
  { name: 'JSON Formatter',           slug: 'json-formatter',        category: 'developer',  icon: '<i class="fa-solid fa-brackets-curly"></i>', desc: 'Format, validate & beautify JSON' },
  { name: 'Base64 Encoder/Decoder',   slug: 'base64',                category: 'developer',  icon: '<i class="fa-solid fa-file-code"></i>', desc: 'Encode or decode Base64 strings' },
  { name: 'Regex Tester',             slug: 'regex-tester',          category: 'developer',  icon: '<i class="fa-solid fa-magnifying-glass-code"></i>', desc: 'Test regular expressions live' },
  { name: 'Color Converter',          slug: 'color-converter',       category: 'developer',  icon: '<i class="fa-solid fa-palette"></i>', desc: 'Convert HEX, RGB and HSL colors' },
  { name: 'Text Diff Checker',        slug: 'diff-checker',          category: 'developer',  icon: '<i class="fa-solid fa-code-compare"></i>', desc: 'Compare two texts side by side' },
  { name: 'JWT Decoder',              slug: 'jwt-decoder',           category: 'developer',  icon: '<i class="fa-solid fa-shield-halved"></i>', desc: 'Decode & inspect JWT tokens' },
  { name: 'URL Encoder/Decoder',      slug: 'url-encoder',           category: 'developer',  icon: '<i class="fa-solid fa-link"></i>', desc: 'Encode or decode URL strings' },
  { name: 'UUID Generator',           slug: 'uuid-generator',        category: 'developer',  icon: '<i class="fa-solid fa-fingerprint"></i>', desc: 'Generate UUID v4 & bulk UUIDs' },
  { name: 'Hash Generator',           slug: 'hash-generator',        category: 'developer',  icon: '<i class="fa-solid fa-hashtag"></i>', desc: 'SHA-256, SHA-512, SHA-1 hashes' },
  { name: 'CSS Minifier',             slug: 'css-minifier',          category: 'developer',  icon: '<i class="fa-brands fa-css3-alt"></i>', desc: 'Minify or beautify CSS code' },
  { name: 'SQL Formatter',            slug: 'sql-formatter',         category: 'developer',  icon: '<i class="fa-solid fa-database"></i>', desc: 'Format and beautify SQL queries' },
  { name: 'Cron Expression Builder',  slug: 'cron-builder',          category: 'developer',  icon: '<i class="fa-solid fa-clock-rotate-left"></i>', desc: 'Build & explain cron expressions' },
  // ── Text Tools ──
  { name: 'Word Counter',             slug: 'word-counter',          category: 'text',       icon: '<i class="fa-solid fa-spell-check"></i>', desc: 'Count words, chars & reading time' },
  { name: 'Case Converter',           slug: 'case-converter',        category: 'text',       icon: '<i class="fa-solid fa-font"></i>', desc: 'Convert text to any case style' },
  { name: 'Text Cleaner',             slug: 'text-cleaner',          category: 'text',       icon: '<i class="fa-solid fa-broom"></i>', desc: 'Remove whitespace & clean text' },
  { name: 'Text Sorter',              slug: 'text-sorter',           category: 'text',       icon: '<i class="fa-solid fa-arrow-down-a-z"></i>', desc: 'Sort lines alphabetically' },
  { name: 'Slug Generator',           slug: 'slug-generator',        category: 'text',       icon: '<i class="fa-solid fa-link-slash"></i>', desc: 'Turn titles into URL-friendly slugs' },
  { name: 'Lorem Ipsum Generator',    slug: 'lorem-ipsum',           category: 'text',       icon: '<i class="fa-solid fa-paragraph"></i>', desc: 'Generate placeholder lorem ipsum text' },
  { name: 'Markdown Previewer',       slug: 'markdown-preview',      category: 'text',       icon: '<i class="fa-brands fa-markdown"></i>', desc: 'Preview markdown as rendered HTML' },
  // ── Calculators ──
  { name: 'Age Calculator',           slug: 'age-calculator',        category: 'calculator', icon: '<i class="fa-solid fa-cake-candles"></i>', desc: 'Calculate exact age from birthdate' },
  { name: 'BMI Calculator',           slug: 'bmi-calculator',        category: 'calculator', icon: '<i class="fa-solid fa-weight-scale"></i>', desc: 'Calculate Body Mass Index' },
  { name: 'Tip Calculator',           slug: 'tip-calculator',        category: 'calculator', icon: '<i class="fa-solid fa-receipt"></i>', desc: 'Calculate tips and split bills' },
  { name: 'Percentage Calculator',    slug: 'percentage-calculator', category: 'calculator', icon: '<i class="fa-solid fa-percent"></i>', desc: 'Quick percentage calculations' },
  { name: 'Unit Converter',           slug: 'unit-converter',        category: 'calculator', icon: '<i class="fa-solid fa-ruler-combined"></i>', desc: 'Convert length, weight, temperature' },
  { name: 'Compound Interest',        slug: 'compound-interest',     category: 'calculator', icon: '<i class="fa-solid fa-chart-line"></i>', desc: 'Visualize compound interest growth' },
  // ── Generators ──
  { name: 'Password Generator',       slug: 'password-generator',    category: 'generator',  icon: '<i class="fa-solid fa-key"></i>', desc: 'Generate strong secure passwords' },
  { name: 'QR Code Generator',        slug: 'qr-generator',          category: 'generator',  icon: '<i class="fa-solid fa-qrcode"></i>', desc: 'Create QR codes instantly' },
  { name: 'Color Palette Generator',  slug: 'color-palette',         category: 'generator',  icon: '<i class="fa-solid fa-swatchbook"></i>', desc: 'Generate beautiful color palettes' },
  { name: 'Random Number Generator',  slug: 'random-number',         category: 'generator',  icon: '<i class="fa-solid fa-dice"></i>', desc: 'Generate random numbers & dice rolls' },
  // ── Date & Time ──
  { name: 'Date Difference Calculator', slug: 'date-difference',     category: 'datetime',   icon: '<i class="fa-solid fa-calendar-days"></i>', desc: 'Calculate days, weeks, months between dates' },
  { name: 'Time Zone Converter',      slug: 'timezone-converter',    category: 'datetime',   icon: '<i class="fa-solid fa-earth-americas"></i>', desc: 'Convert time between world time zones' },
  { name: 'Unix Timestamp Converter', slug: 'unix-timestamp',        category: 'datetime',   icon: '<i class="fa-solid fa-clock"></i>', desc: 'Convert Unix timestamps to dates' },
  { name: 'Countdown Timer',          slug: 'countdown-timer',       category: 'datetime',   icon: '<i class="fa-solid fa-hourglass-half"></i>', desc: 'Live countdown to any date or event' },
  { name: 'Date Formatter',           slug: 'date-formatter',        category: 'datetime',   icon: '<i class="fa-solid fa-calendar-check"></i>', desc: 'Format dates in any pattern' },
  // ── Math & Science ──
  { name: 'Scientific Calculator',    slug: 'scientific-calculator', category: 'math',       icon: '<i class="fa-solid fa-calculator"></i>', desc: 'Full scientific calculator online' },
  { name: 'Statistics Calculator',    slug: 'statistics-calculator', category: 'math',       icon: '<i class="fa-solid fa-chart-column"></i>', desc: 'Mean, median, mode, std deviation' },
  { name: 'Number Base Converter',    slug: 'number-base-converter', category: 'math',       icon: '<i class="fa-solid fa-binary"></i>', desc: 'Binary, decimal, hex, octal converter' },
  { name: 'Fraction Calculator',      slug: 'fraction-calculator',   category: 'math',       icon: '<i class="fa-solid fa-divide"></i>', desc: 'Add, subtract, multiply fractions' },
  { name: 'Roman Numerals Converter', slug: 'roman-numerals',        category: 'math',       icon: '<i class="fa-solid fa-landmark-dome"></i>', desc: 'Convert Roman numerals to numbers' },
  // ── Finance ──
  { name: 'Loan Calculator',          slug: 'loan-calculator',       category: 'finance',    icon: '<i class="fa-solid fa-hand-holding-dollar"></i>', desc: 'Monthly loan payments & amortization' },
  { name: 'Mortgage Calculator',      slug: 'mortgage-calculator',   category: 'finance',    icon: '<i class="fa-solid fa-house-chimney"></i>', desc: 'Calculate mortgage payments & costs' },
  { name: 'Currency Converter',       slug: 'currency-converter',    category: 'finance',    icon: '<i class="fa-solid fa-money-bill-transfer"></i>', desc: 'Convert between 30+ world currencies' },
  // ── Health & Fitness ──
  { name: 'Calorie Calculator',       slug: 'calorie-calculator',    category: 'health',     icon: '<i class="fa-solid fa-fire-flame-curved"></i>', desc: 'Calculate TDEE & daily calorie needs' },
  { name: 'Macro Calculator',         slug: 'macro-calculator',      category: 'health',     icon: '<i class="fa-solid fa-apple-whole"></i>', desc: 'Find your ideal protein, carb & fat macros' },
  { name: 'Body Fat Calculator',      slug: 'body-fat-calculator',   category: 'health',     icon: '<i class="fa-solid fa-heart-pulse"></i>', desc: 'Estimate body fat percentage' },
  // ── Image Tools ──
  { name: 'Image Resizer',            slug: 'image-resizer',         category: 'image',      icon: '<i class="fa-solid fa-expand"></i>', desc: 'Resize images in browser — no upload' },
  { name: 'Image to Base64',          slug: 'image-to-base64',       category: 'image',      icon: '<i class="fa-solid fa-file-image"></i>', desc: 'Convert images to Base64 data URLs' },
  { name: 'Image Color Picker',       slug: 'image-color-picker',    category: 'image',      icon: '<i class="fa-solid fa-eye-dropper"></i>', desc: 'Extract & pick colors from any image' },
  // ── Content & SEO ──
  { name: 'Meta Tag Generator',       slug: 'meta-tag-generator',    category: 'content',    icon: '<i class="fa-solid fa-tags"></i>', desc: 'Generate SEO meta & Open Graph tags' },
  { name: 'Reading Time Calculator',  slug: 'reading-time',          category: 'content',    icon: '<i class="fa-solid fa-book-open"></i>', desc: 'Calculate reading time for any text' },
  { name: 'Invoice Generator',        slug: 'invoice-generator',     category: 'content',    icon: '<i class="fa-solid fa-file-invoice-dollar"></i>', desc: 'Create professional invoices for print' },
  { name: 'Hashtag Generator',        slug: 'hashtag-generator',     category: 'content',    icon: '<i class="fa-solid fa-hashtag"></i>', desc: 'Generate hashtags for Instagram & TikTok' },
  // ── Connected Tools (Firebase) ──
  { name: 'URL Shortener',            slug: 'url-shortener',         category: 'connected',  icon: '<i class="fa-solid fa-link"></i>', desc: 'Shorten long URLs with cloud storage' },
  { name: 'Text Share / Pastebin',    slug: 'pastebin',              category: 'connected',  icon: '<i class="fa-solid fa-clipboard"></i>', desc: 'Share text snippets with a link' },
  // ── New Developer Tools ──
  { name: 'JSON to CSV',              slug: 'json-to-csv',           category: 'developer',  icon: '<i class="fa-solid fa-table-cells"></i>', desc: 'Convert JSON data to CSV format' },
  { name: 'HTML Entity Encoder',      slug: 'html-entity-encoder',   category: 'developer',  icon: '<i class="fa-solid fa-code"></i>', desc: 'Encode & decode HTML entities' },
  { name: 'Chmod Calculator',         slug: 'chmod-calculator',      category: 'developer',  icon: '<i class="fa-solid fa-lock"></i>', desc: 'Calculate Unix file permissions' },
  { name: 'HTTP Status Codes',        slug: 'http-status-codes',     category: 'developer',  icon: '<i class="fa-solid fa-server"></i>', desc: 'Searchable HTTP status code reference' },
  { name: 'API Response Formatter',   slug: 'api-response-formatter',category: 'developer',  icon: '<i class="fa-solid fa-terminal"></i>', desc: 'Format & highlight API responses' },
  // ── New Text Tools ──
  { name: 'Text to Speech',           slug: 'text-to-speech',        category: 'text',       icon: '<i class="fa-solid fa-volume-high"></i>', desc: 'Convert text to speech in browser' },
  { name: 'Fancy Text Generator',     slug: 'fancy-text-generator',  category: 'text',       icon: '<i class="fa-solid fa-wand-magic-sparkles"></i>', desc: 'Unicode fonts & fancy text styles' },
  { name: 'Emoji Picker',             slug: 'emoji-picker',          category: 'text',       icon: '<i class="fa-solid fa-face-smile"></i>', desc: 'Browse & copy emojis by category' },
  { name: 'Whitespace Remover',       slug: 'whitespace-remover',    category: 'text',       icon: '<i class="fa-solid fa-eraser"></i>', desc: 'Detect & remove invisible characters' },
  // ── Converter Tools ──
  { name: 'CSV to JSON',              slug: 'csv-to-json',           category: 'converter',  icon: '<i class="fa-solid fa-file-csv"></i>', desc: 'Convert CSV data to JSON format' },
  { name: 'YAML to JSON',             slug: 'yaml-to-json',          category: 'converter',  icon: '<i class="fa-solid fa-file-lines"></i>', desc: 'Convert between YAML and JSON' },
  { name: 'Markdown to HTML',         slug: 'markdown-to-html',      category: 'converter',  icon: '<i class="fa-brands fa-html5"></i>', desc: 'Convert Markdown to HTML in real-time' },
  { name: 'Image to PDF',             slug: 'image-to-pdf',          category: 'converter',  icon: '<i class="fa-solid fa-file-pdf"></i>', desc: 'Combine images into a PDF document' },
  { name: 'PDF to Image',             slug: 'pdf-to-image',          category: 'converter',  icon: '<i class="fa-solid fa-image"></i>', desc: 'Extract images from PDF pages' },
  // ── SEO & Web Tools ──
  { name: 'Meta Tag Analyzer',        slug: 'meta-tag-analyzer',     category: 'seo',        icon: '<i class="fa-solid fa-magnifying-glass-chart"></i>', desc: 'Analyze & score HTML meta tags' },
  { name: 'Robots.txt Generator',     slug: 'robots-txt-generator',  category: 'seo',        icon: '<i class="fa-solid fa-robot"></i>', desc: 'Build robots.txt with presets' },
  { name: 'OG Tag Preview',           slug: 'og-preview',            category: 'seo',        icon: '<i class="fa-solid fa-share-nodes"></i>', desc: 'Preview Open Graph social cards' },
  { name: 'Redirect Checker',         slug: 'redirect-checker',      category: 'seo',        icon: '<i class="fa-solid fa-arrow-right-arrow-left"></i>', desc: 'Simulate & visualize redirect chains' },
  { name: 'Schema Generator',         slug: 'schema-generator',      category: 'seo',        icon: '<i class="fa-solid fa-sitemap"></i>', desc: 'Generate JSON-LD structured data' },
  // ── Security Tools ──
  { name: 'Password Strength Checker',slug: 'password-strength',     category: 'security',   icon: '<i class="fa-solid fa-shield-halved"></i>', desc: 'Analyze password entropy & strength' },
  { name: 'IP Lookup',                slug: 'ip-lookup',             category: 'security',   icon: '<i class="fa-solid fa-globe"></i>', desc: 'Lookup IP geolocation & info' },
  { name: 'User Agent Parser',        slug: 'user-agent',            category: 'security',   icon: '<i class="fa-solid fa-desktop"></i>', desc: 'Parse browser user agent strings' },
  { name: 'Email Header Analyzer',    slug: 'email-header-analyzer', category: 'security',   icon: '<i class="fa-solid fa-envelope-open-text"></i>', desc: 'Trace email headers & hops' },
  { name: 'Privacy Policy Generator', slug: 'privacy-policy-generator',category:'security',   icon: '<i class="fa-solid fa-file-shield"></i>', desc: 'Generate a privacy policy for your site' },
  // ── Social Media Tools ──
  { name: 'Tweet Character Counter',  slug: 'twitter-counter',       category: 'social',     icon: '<i class="fa-brands fa-x-twitter"></i>', desc: 'Count chars for Twitter/X posts' },
  { name: 'Instagram Caption Editor', slug: 'instagram-caption',     category: 'social',     icon: '<i class="fa-brands fa-instagram"></i>', desc: 'Format Instagram captions & hashtags' },
  { name: 'YouTube Thumbnail Preview',slug: 'youtube-thumbnail',     category: 'social',     icon: '<i class="fa-brands fa-youtube"></i>', desc: 'Preview YouTube thumbnail in context' },
  { name: 'Social Image Resizer',     slug: 'social-image-resizer',  category: 'social',     icon: '<i class="fa-solid fa-crop-simple"></i>', desc: 'Resize images for social platforms' },
  { name: 'Bio Link Generator',       slug: 'bio-link-generator',    category: 'social',     icon: '<i class="fa-solid fa-address-card"></i>', desc: 'Create a link-in-bio page' },
  // ── Math Tools (extra) ──
  { name: 'Matrix Calculator',        slug: 'matrix-calculator',     category: 'math',       icon: '<i class="fa-solid fa-table-cells-large"></i>', desc: 'Add, multiply & invert matrices' },
  { name: 'Quadratic Solver',         slug: 'quadratic-solver',      category: 'math',       icon: '<i class="fa-solid fa-square-root-variable"></i>', desc: 'Solve quadratic equations step-by-step' },
  { name: 'Prime Number Checker',     slug: 'prime-checker',         category: 'math',       icon: '<i class="fa-solid fa-list-ol"></i>', desc: 'Check primes & find prime ranges' },
  // ── Utility Tools ──
  { name: 'Stopwatch',                slug: 'stopwatch',             category: 'utility',    icon: '<i class="fa-solid fa-stopwatch"></i>', desc: 'Precision stopwatch with lap times' },
  { name: 'Pomodoro Timer',           slug: 'pomodoro-timer',        category: 'utility',    icon: '<i class="fa-solid fa-tomato"></i>', desc: 'Focus timer using Pomodoro technique' },
  { name: 'Notes & Scratchpad',       slug: 'notes-scratchpad',      category: 'utility',    icon: '<i class="fa-solid fa-note-sticky"></i>', desc: 'Multi-tab notepad with auto-save' },
  { name: 'Screen Resolution',        slug: 'screen-resolution',     category: 'utility',    icon: '<i class="fa-solid fa-display"></i>', desc: 'Detect display resolution & info' },
  { name: 'Typing Speed Test',        slug: 'typing-test',           category: 'utility',    icon: '<i class="fa-solid fa-keyboard"></i>', desc: 'Test your typing speed & accuracy' },
  { name: 'Internet Speed Test',      slug: 'speed-test',            category: 'utility',    icon: '<i class="fa-solid fa-gauge-high"></i>', desc: 'Estimate your download speed' },
  { name: 'Random Color Generator',   slug: 'random-color',          category: 'utility',    icon: '<i class="fa-solid fa-droplet"></i>', desc: 'Generate random colors & palettes' },
  // ── CSS Generators ──
  { name: 'Gradient Generator',       slug: 'gradient-generator',    category: 'css-gen',    icon: '<i class="fa-solid fa-fill-drip"></i>', desc: 'Create CSS linear & radial gradients' },
  { name: 'Box Shadow Generator',     slug: 'box-shadow-generator',  category: 'css-gen',    icon: '<i class="fa-solid fa-square"></i>', desc: 'Design CSS box shadows visually' },
  { name: 'Border Radius Generator',  slug: 'border-radius-generator',category:'css-gen',    icon: '<i class="fa-solid fa-vector-square"></i>', desc: 'Build custom CSS border-radius values' },
  { name: 'Flexbox Playground',       slug: 'flexbox-generator',     category: 'css-gen',    icon: '<i class="fa-solid fa-table-columns"></i>', desc: 'Visual CSS Flexbox layout builder' },
  { name: 'Text Shadow Generator',    slug: 'text-shadow-generator', category: 'css-gen',    icon: '<i class="fa-solid fa-text-width"></i>', desc: 'Create multi-layer CSS text shadows' },
  // ── Input Testing ──
  { name: 'Microphone Test',          slug: 'microphone-test',       category: 'testing',    icon: '<i class="fa-solid fa-microphone"></i>', desc: 'Test your mic with real-time levels' },
  { name: 'Webcam Test',              slug: 'webcam-test',           category: 'testing',    icon: '<i class="fa-solid fa-video"></i>', desc: 'Test your camera with live preview' },
  { name: 'Keyboard Tester',          slug: 'keyboard-tester',       category: 'testing',    icon: '<i class="fa-solid fa-keyboard"></i>', desc: 'Test every key on your keyboard' },
  { name: 'Click Speed Test',         slug: 'click-speed-test',      category: 'testing',    icon: '<i class="fa-solid fa-computer-mouse"></i>', desc: 'Measure your clicks per second' },
  { name: 'Speaker Test',             slug: 'speaker-test',          category: 'testing',    icon: '<i class="fa-solid fa-volume-high"></i>', desc: 'Test speakers with tones & channels' },
  // ── New Converters ──
  { name: 'XML to JSON',              slug: 'xml-to-json',           category: 'converter',  icon: '<i class="fa-solid fa-file-code"></i>', desc: 'Convert XML data to JSON format' },
  { name: 'JSON to XML',              slug: 'json-to-xml',           category: 'converter',  icon: '<i class="fa-solid fa-file-code"></i>', desc: 'Convert JSON data to XML format' },
  { name: 'Image Format Converter',   slug: 'image-format-converter',category:'converter',   icon: '<i class="fa-solid fa-images"></i>', desc: 'Convert images between PNG, JPG, WebP' },
  { name: 'SVG to PNG Converter',     slug: 'svg-to-png',            category: 'converter',  icon: '<i class="fa-solid fa-file-image"></i>', desc: 'Convert SVG code or files to PNG' },
  { name: 'Text to Binary',           slug: 'text-to-binary',        category: 'converter',  icon: '<i class="fa-solid fa-binary"></i>', desc: 'Convert text to binary and back' },
  // ── New Developer Tools ──
  { name: 'JS Minifier',              slug: 'js-minifier',           category: 'developer',  icon: '<i class="fa-brands fa-js"></i>', desc: 'Minify JavaScript code in browser' },
  { name: 'HTML Beautifier',          slug: 'html-beautifier',       category: 'developer',  icon: '<i class="fa-brands fa-html5"></i>', desc: 'Format & beautify HTML code' },
  { name: 'DNS Lookup',               slug: 'dns-lookup',            category: 'developer',  icon: '<i class="fa-solid fa-server"></i>', desc: 'Query DNS records for any domain' },
  { name: 'Morse Code Translator',    slug: 'morse-code',            category: 'developer',  icon: '<i class="fa-solid fa-tower-broadcast"></i>', desc: 'Translate text to Morse code & back' },
  { name: 'JSON Path Tester',         slug: 'json-path-tester',      category: 'developer',  icon: '<i class="fa-solid fa-magnifying-glass-location"></i>', desc: 'Query JSON with JSONPath expressions' },
  // ── Design Tools ──
  { name: 'Color Contrast Checker',   slug: 'color-contrast-checker',category:'design',      icon: '<i class="fa-solid fa-circle-half-stroke"></i>', desc: 'Check WCAG AA/AAA contrast ratios' },
  { name: 'Aspect Ratio Calculator',  slug: 'aspect-ratio-calculator',category:'design',     icon: '<i class="fa-solid fa-expand"></i>', desc: 'Calculate dimensions from aspect ratios' },
  { name: 'PX/REM/EM Converter',      slug: 'px-converter',          category: 'design',     icon: '<i class="fa-solid fa-ruler-combined"></i>', desc: 'Convert between CSS units: px, rem, em, pt' },
  { name: 'Favicon Generator',        slug: 'favicon-generator',     category: 'design',     icon: '<i class="fa-solid fa-icons"></i>', desc: 'Create favicons from text or images' },
  { name: 'Image Compressor',         slug: 'image-compressor',      category: 'design',     icon: '<i class="fa-solid fa-compress"></i>', desc: 'Compress images with quality control' },
  // ── New Utility Tools ──
  { name: 'Barcode Generator',        slug: 'barcode-generator',     category: 'utility',    icon: '<i class="fa-solid fa-barcode"></i>', desc: 'Generate Code128 barcodes from text' },
  { name: 'Placeholder Image',        slug: 'placeholder-image',     category: 'utility',    icon: '<i class="fa-solid fa-image"></i>', desc: 'Generate placeholder images with text' },
  { name: 'WiFi QR Generator',        slug: 'wifi-qr-generator',     category: 'utility',    icon: '<i class="fa-solid fa-wifi"></i>', desc: 'Create QR codes for WiFi sharing' },
  { name: 'IP Subnet Calculator',     slug: 'ip-subnet-calculator',  category: 'utility',    icon: '<i class="fa-solid fa-network-wired"></i>', desc: 'Calculate subnets from IP/CIDR' },
  { name: 'Lorem Ipsum Generator',    slug: 'lorem-ipsum-generator', category: 'utility',    icon: '<i class="fa-solid fa-paragraph"></i>', desc: 'Generate placeholder Lorem Ipsum text' },
  // ── New Math Tools ──
  { name: 'Graph/Function Plotter',   slug: 'graph-plotter',         category: 'math',       icon: '<i class="fa-solid fa-chart-line"></i>', desc: 'Plot mathematical functions on a graph' },
  { name: 'Chemical Equation Balancer',slug: 'chemical-equation-balancer',category:'math',     icon: '<i class="fa-solid fa-flask"></i>', desc: 'Balance chemistry equations automatically' },
  { name: 'Binary Calculator',        slug: 'binary-calculator',     category: 'math',       icon: '<i class="fa-solid fa-microchip"></i>', desc: 'Arithmetic & logic on binary numbers' },
  // ── New Security Tools ──
  { name: 'CORS Tester',              slug: 'cors-tester',           category: 'security',   icon: '<i class="fa-solid fa-globe"></i>', desc: 'Test CORS headers for any URL' },
  { name: 'SSL Certificate Checker',  slug: 'ssl-checker',           category: 'security',   icon: '<i class="fa-solid fa-certificate"></i>', desc: 'Check SSL cert & HTTPS for any site' },
  { name: 'Encryption/Decryption',    slug: 'encryption-tool',       category: 'security',   icon: '<i class="fa-solid fa-key"></i>', desc: 'AES-256 encrypt & decrypt text in browser' },
  { name: 'TOTP Generator',           slug: 'totp-generator',        category: 'security',   icon: '<i class="fa-solid fa-clock-rotate-left"></i>', desc: 'Generate time-based one-time passwords' },
  // ── New Converter Tools ──
  { name: 'PDF to Text',              slug: 'pdf-to-text',           category: 'converter',  icon: '<i class="fa-solid fa-file-lines"></i>', desc: 'Extract text content from PDF files' },
  { name: 'Audio Format Converter',   slug: 'audio-converter',       category: 'converter',  icon: '<i class="fa-solid fa-music"></i>', desc: 'Convert audio between WAV & WebM' },
  { name: 'Epoch Timestamp Converter',slug: 'epoch-converter',       category: 'converter',  icon: '<i class="fa-solid fa-clock"></i>', desc: 'Convert Unix timestamps to human dates' },
  { name: 'Document to PDF',          slug: 'document-to-pdf',       category: 'converter',  icon: '<i class="fa-solid fa-file-export"></i>', desc: 'Convert HTML/Markdown to PDF' },
  { name: 'PDF to Word',              slug: 'pdf-to-word',           category: 'converter',  icon: '<i class="fa-solid fa-file-word"></i>', desc: 'Convert PDF to editable Word DOCX' },
  { name: 'PDF to PowerPoint',        slug: 'pdf-to-pptx',           category: 'converter',  icon: '<i class="fa-solid fa-file-powerpoint"></i>', desc: 'Convert PDF pages to PPTX slides' },
  // ── New Design Tools ──
  { name: 'Font Pairing Tool',        slug: 'font-pairing',          category: 'design',     icon: '<i class="fa-solid fa-font"></i>', desc: 'Preview Google Font combinations' },
  { name: 'SVG Editor',               slug: 'svg-editor',            category: 'design',     icon: '<i class="fa-solid fa-bezier-curve"></i>', desc: 'Draw & edit SVG shapes in browser' },
  // ── New CSS Generators ──
  { name: 'CSS Grid Generator',       slug: 'css-grid-generator',    category: 'css-gen',    icon: '<i class="fa-solid fa-grip"></i>', desc: 'Visual CSS Grid layout builder' },
  { name: 'Glassmorphism Generator',  slug: 'glassmorphism-generator',category:'css-gen',     icon: '<i class="fa-solid fa-glass-water"></i>', desc: 'Generate trendy frosted-glass CSS' },
  { name: 'Neumorphism Generator',    slug: 'neumorphism-generator', category: 'css-gen',    icon: '<i class="fa-solid fa-clone"></i>', desc: 'Soft UI shadow CSS generator' },
  // ── New Text Tools ──
  { name: 'Plagiarism Checker',       slug: 'plagiarism-checker',    category: 'text',       icon: '<i class="fa-solid fa-copy"></i>', desc: 'Compare text against pasted sources' },
];

const CATEGORY_META = {
  developer:  { label: 'Developer Tools',    icon: '<i class="fa-solid fa-code"></i>' },
  text:       { label: 'Text Tools',         icon: '<i class="fa-solid fa-align-left"></i>' },
  calculator: { label: 'Calculators',        icon: '<i class="fa-solid fa-calculator"></i>' },
  generator:  { label: 'Generators',         icon: '<i class="fa-solid fa-wand-magic-sparkles"></i>' },
  datetime:   { label: 'Date & Time',        icon: '<i class="fa-solid fa-calendar-days"></i>' },
  math:       { label: 'Math & Science',     icon: '<i class="fa-solid fa-square-root-variable"></i>' },
  finance:    { label: 'Finance',            icon: '<i class="fa-solid fa-coins"></i>' },
  health:     { label: 'Health & Fitness',   icon: '<i class="fa-solid fa-heart-pulse"></i>' },
  image:      { label: 'Image Tools',        icon: '<i class="fa-solid fa-image"></i>' },
  content:    { label: 'Content & SEO',      icon: '<i class="fa-solid fa-pen-nib"></i>' },
  connected:  { label: 'Connected Tools',    icon: '<i class="fa-solid fa-cloud"></i>' },
  converter:  { label: 'Converters',         icon: '<i class="fa-solid fa-right-left"></i>' },
  seo:        { label: 'SEO & Web',          icon: '<i class="fa-solid fa-magnifying-glass-chart"></i>' },
  security:   { label: 'Security',           icon: '<i class="fa-solid fa-shield-halved"></i>' },
  social:     { label: 'Social Media',       icon: '<i class="fa-solid fa-share-nodes"></i>' },
  utility:    { label: 'Utility',            icon: '<i class="fa-solid fa-screwdriver-wrench"></i>' },
  'css-gen':  { label: 'CSS Generators',     icon: '<i class="fa-solid fa-fill-drip"></i>' },
  testing:    { label: 'Input Testing',      icon: '<i class="fa-solid fa-vial"></i>' },
  design:     { label: 'Design Tools',       icon: '<i class="fa-solid fa-pen-ruler"></i>' },
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
        <span aria-hidden="true"><i class="fa-solid fa-screwdriver-wrench"></i></span>
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
      <button class="theme-toggle" id="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode" title="Toggle dark mode">
        <i class="fa-solid fa-moon theme-icon-dark" aria-hidden="true"></i>
        <i class="fa-solid fa-sun theme-icon-light" aria-hidden="true"></i>
      </button>
      <button class="hamburger" id="hamburger-btn" onclick="toggleNav()" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="main-nav">
        <span aria-hidden="true"><i class="fa-solid fa-bars"></i></span>
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

/* ── Dark Mode ── */
function initTheme() {
  const saved = localStorage.getItem('tn-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('tn-theme', next);
  patchDarkInlineStyles();
  window.dispatchEvent(new CustomEvent('tn-theme-change', { detail: { theme: next } }));
}

/* ── Dark Mode Inline-Style Patcher ── */
/* Fixes hardcoded inline styles that CSS attribute selectors can't reliably override */
function patchDarkInlineStyles() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const container = document.querySelector('.tool-container');
  if (!container) return;

  /* Light → Dark color mappings */
  const bgMap = {
    '#fff':'#1e293b', '#ffffff':'#1e293b', 'white':'#1e293b',
    '#f8fafc':'#0f172a', '#f1f5f9':'#0f172a', '#f3f4f6':'#0f172a', '#fafafa':'#0f172a',
    '#f5f5f5':'#0f172a', '#f0f0f0':'#0f172a', '#f9fafb':'#0f172a', '#e9ecef':'#0f172a',
    '#e2e8f0':'#334155', '#e5e7eb':'#334155', '#dee2e6':'#334155',
    '#eff6ff':'#1e1b4b', '#dbeafe':'#1e1b4b', '#eef2ff':'#1e1b4b', '#e0e7ff':'#1e1b4b',
    '#dcfce7':'#14532d', '#f0fdf4':'#14532d', '#d1fae5':'#14532d',
    '#fee2e2':'#7f1d1d', '#fef2f2':'#7f1d1d', '#fecaca':'#7f1d1d',
    '#fef3c7':'#451a03', '#fffbeb':'#451a03',
    '#ede9fe':'#2e1065',
  };
  const bgMapReverse = {};
  Object.entries(bgMap).forEach(([k, v]) => { if (!bgMapReverse[v]) bgMapReverse[v] = k; });

  const textMap = {
    '#333':'#e2e8f0', '#333333':'#e2e8f0', '#222':'#e2e8f0', '#222222':'#e2e8f0',
    '#111':'#e2e8f0', '#000':'#e2e8f0', '#000000':'#e2e8f0', 'black':'#e2e8f0',
    '#1e293b':'#e2e8f0', '#0f172a':'#e2e8f0',
    '#166534':'#86efac', '#15803d':'#86efac', '#065f46':'#6ee7b7',
    '#991b1b':'#fca5a5', '#b91c1c':'#fca5a5',
    '#92400e':'#fbbf24', '#854d0e':'#fbbf24',
    '#1d4ed8':'#93c5fd', '#1e40af':'#93c5fd',
    '#6b21a8':'#c4b5fd',
  };
  const textMapReverse = {};
  Object.entries(textMap).forEach(([k, v]) => { if (!textMapReverse[v]) textMapReverse[v] = k; });

  const borderLightColors = ['#e2e8f0','#e5e7eb','#dee2e6','#d1d5db','#cbd5e1','#c7d2fe','#ddd','#ccc','#eee'];
  const darkBorder = '#334155';

  container.querySelectorAll('[style]').forEach(el => {
    const s = el.style;
    if (isDark) {
      /* Background */
      const bg = s.backgroundColor || s.background;
      if (bg) {
        const norm = bg.replace(/\s/g, '').toLowerCase();
        Object.keys(bgMap).forEach(lc => {
          if (norm === lc || norm.includes(lc)) {
            if (s.backgroundColor) s.backgroundColor = bgMap[lc];
            else s.background = bgMap[lc];
          }
        });
      }
      /* Text color */
      const col = s.color;
      if (col) {
        const norm = col.replace(/\s/g, '').toLowerCase();
        Object.keys(textMap).forEach(lc => {
          if (norm === lc) s.color = textMap[lc];
        });
      }
      /* Border */
      const bdr = s.border || s.borderColor;
      if (bdr) {
        const norm = bdr.replace(/\s/g, '').toLowerCase();
        borderLightColors.forEach(lc => {
          if (norm.includes(lc)) {
            if (s.borderColor) s.borderColor = darkBorder;
            else if (s.border) s.border = s.border.replace(new RegExp(lc.replace('#','#?'), 'gi'), darkBorder);
          }
        });
      }
    } else {
      /* Reverse: restore light-mode colors for elements we patched */
      const bg = s.backgroundColor || s.background;
      if (bg) {
        const norm = bg.replace(/\s/g, '').toLowerCase();
        Object.keys(bgMapReverse).forEach(dc => {
          if (norm === dc) {
            if (s.backgroundColor) s.backgroundColor = bgMapReverse[dc];
            else s.background = bgMapReverse[dc];
          }
        });
      }
      const col = s.color;
      if (col) {
        const norm = col.replace(/\s/g, '').toLowerCase();
        Object.keys(textMapReverse).forEach(dc => {
          if (norm === dc) s.color = textMapReverse[dc];
        });
      }
    }
  });
}
// Apply theme immediately to avoid flash
initTheme();

/* ── SEO Enhancement ── */
function enhanceSEO() {
  const path = window.location.pathname;
  const slug = path.replace(/^\/tools\//, '').replace(/\.html$/, '');
  const tool = TN_TOOLS.find(t => t.slug === slug);
  if (!tool) return;

  const head = document.head;
  const url = 'https://toolnook.net/tools/' + tool.slug + '.html';
  const catMeta = CATEGORY_META[tool.category];
  const catLabel = catMeta ? catMeta.label : tool.category;

  // Add og:type if missing
  if (!head.querySelector('meta[property="og:type"]')) {
    const m = document.createElement('meta');
    m.setAttribute('property', 'og:type');
    m.setAttribute('content', 'website');
    head.appendChild(m);
  }
  // Add og:image if missing
  if (!head.querySelector('meta[property="og:image"]')) {
    const m = document.createElement('meta');
    m.setAttribute('property', 'og:image');
    m.setAttribute('content', 'https://toolnook.net/og-image.png');
    head.appendChild(m);
  }
  // Add Twitter Card tags if missing
  if (!head.querySelector('meta[name="twitter:card"]')) {
    const tags = [
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', document.title],
      ['twitter:description', (head.querySelector('meta[name="description"]') || {}).content || tool.desc]
    ];
    tags.forEach(([name, content]) => {
      const m = document.createElement('meta');
      m.setAttribute('name', name);
      m.setAttribute('content', content);
      head.appendChild(m);
    });
  }
  // Add JSON-LD SoftwareApplication schema if missing
  if (!head.querySelector('script[type="application/ld+json"]')) {
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': tool.name,
      'url': url,
      'description': tool.desc,
      'applicationCategory': catLabel,
      'operatingSystem': 'Any',
      'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
      'isPartOf': { '@type': 'WebSite', 'name': 'ToolNook', 'url': 'https://toolnook.net' }
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(ld);
    head.appendChild(s);
  }
  // Add BreadcrumbList schema
  const bcLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://toolnook.net/' },
      { '@type': 'ListItem', 'position': 2, 'name': catLabel, 'item': 'https://toolnook.net/#' + tool.category + '-tools' },
      { '@type': 'ListItem', 'position': 3, 'name': tool.name, 'item': url }
    ]
  };
  const bcScript = document.createElement('script');
  bcScript.type = 'application/ld+json';
  bcScript.textContent = JSON.stringify(bcLd);
  head.appendChild(bcScript);
}
enhanceSEO();

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
  <footer class="site-footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="footer-logo" aria-label="ToolNook home"><span aria-hidden="true"><i class="fa-solid fa-screwdriver-wrench"></i></span> ToolNook</a>
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
        <span>Built with <span aria-hidden="true"><i class="fa-solid fa-heart"></i></span><span class="sr-only">love</span> for productivity</span>
      </div>
    </div>
  </footer>`;
}

function renderSidebarTools(currentSlug) {
  const others = TN_TOOLS.filter(t => t.slug !== currentSlug).slice(0, 10);
  return others.map(t =>
    `<a href="${getToolPath(t.slug)}" class="sidebar-tool-link"><span class="cat-icon-${t.category}" aria-hidden="true">${t.icon}</span> ${t.name}</a>`
  ).join('');
}

function renderRelatedTools(currentSlug, category) {
  const related = TN_TOOLS.filter(t => t.slug !== currentSlug && t.category === category).slice(0, 6);
  const others  = TN_TOOLS.filter(t => t.slug !== currentSlug && t.category !== category).slice(0, Math.max(0, 6 - related.length));
  return [...related, ...others].map(t =>
    `<a href="${getToolPath(t.slug)}" class="related-card"><span class="cat-icon-${t.category}" aria-hidden="true">${t.icon}</span> ${t.name}</a>`
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

  // Colorize homepage tool-card icons by category
  document.querySelectorAll('.tool-card').forEach(card => {
    const href = card.getAttribute('href') || '';
    const slug = href.replace(/^\/tools\//, '').replace(/\.html$/, '');
    const tool = TN_TOOLS.find(t => t.slug === slug);
    if (tool) {
      const iconEl = card.querySelector('.tool-card-icon');
      if (iconEl) iconEl.classList.add('cat-icon-' + tool.category);
    }
  });

  // Colorize category section heading icons
  const sectionCatMap = {
    'developer-tools':'developer','text-tools':'text','calculators':'calculator',
    'generators':'generator','datetime-tools':'datetime','math-tools':'math',
    'finance-tools':'finance','health-tools':'health','image-tools':'image',
    'content-tools':'content','connected-tools':'connected','converter-tools':'converter',
    'seo-tools':'seo','security-tools':'security','social-tools':'social',
    'utility-tools':'utility','css-gen-tools':'css-gen','testing-tools':'testing',
    'design-tools':'design'
  };
  document.querySelectorAll('.category-section').forEach(section => {
    const cat = sectionCatMap[section.id];
    if (cat) {
      const h2Icon = section.querySelector('h2 i');
      if (h2Icon) h2Icon.classList.add('cat-icon-' + cat);
    }
  });

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

  // Patch inline styles for dark mode on initial load
  patchDarkInlineStyles();

  // Observe tool-container for dynamically added elements and re-patch
  const tc = document.querySelector('.tool-container');
  if (tc) {
    const obs = new MutationObserver(() => {
      if (document.documentElement.getAttribute('data-theme') === 'dark') patchDarkInlineStyles();
    });
    obs.observe(tc, { childList: true, subtree: true });
  }
});
