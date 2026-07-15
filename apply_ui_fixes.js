const fs = require('fs');
const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Top Bar Link Hover Color (Issue 1)
// Replace `.header-top-left a:hover { color: var(--accent); }` with `color: var(--primary);` or similar, to avoid black on black.
content = content.replace('.header-top-left a:hover {\n            color: var(--accent);\n        }', '.header-top-left a:hover {\n            color: #4da6ff;\n        }');

// 2. Badge Color from Orange to Blue (Issue 2)
const oldBadgeCss = `.hero-badge {
            background-color: rgba(255, 107, 26, 0.15);
            color: var(--accent);
            border: 1px solid rgba(255, 107, 26, 0.3);`;
const newBadgeCss = `.hero-badge {
            background-color: rgba(0, 71, 171, 0.1);
            color: var(--primary);
            border: 1px solid rgba(0, 71, 171, 0.3);`;
content = content.replace(oldBadgeCss, newBadgeCss);

// 3. Ex-AP Text (Issue 3)
const oldFeature = `<div class="hero-feature-item">
                        <span class="hero-feature-number">Ex-AP</span>
                        <span class="hero-feature-text">Industry Veteran</span>
                    </div>`;
const newFeature = `<div class="hero-feature-item">
                        <span class="hero-feature-number">Veteran</span>
                        <span class="hero-feature-text">Gas Industry Expert</span>
                    </div>`;
content = content.replace(oldFeature, newFeature);

// 4. Initials Circle text color (Issue 4)
const oldCircleCss = `.saqcc-icon-circle {
            background-color: var(--accent);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-dark);`;
const newCircleCss = `.saqcc-icon-circle {
            background-color: var(--accent);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--bg-white);`;
content = content.replace(oldCircleCss, newCircleCss);

// 5. WhatsApp Button Hover (Issue 5)
// Find .btn-whatsapp:hover
const oldWaHover = `.btn-whatsapp:hover {
            background-color: var(--accent-green-hover);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        }`;
const newWaHover = `.btn-whatsapp:hover {
            background-color: #25D366; /* Classic WhatsApp Green */
            color: #ffffff;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        }`;
content = content.replace(oldWaHover, newWaHover);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("UI fixes applied to index.html");
