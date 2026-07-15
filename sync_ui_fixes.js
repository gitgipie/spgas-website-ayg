const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Normalize newlines to LF for matching
    content = content.replace(/\r\n/g, '\n');

    // 1. Top Bar Link Hover Color
    const oldTopHover = `.header-top-left a:hover {\n            color: var(--accent);\n        }`;
    const newTopHover = `.header-top-left a:hover {\n            color: #4da6ff;\n        }`;
    content = content.replace(oldTopHover, newTopHover);

    // 2. WhatsApp Button Hover
    const oldWaHover = `.btn-whatsapp:hover {\n            background-color: var(--accent-green-hover);\n            transform: translateY(-2px);\n            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);\n        }`;
    const newWaHover = `.btn-whatsapp:hover {\n            background-color: #25D366; /* Classic WhatsApp Green */\n            color: #ffffff;\n            transform: translateY(-2px);\n            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);\n        }`;
    content = content.replace(oldWaHover, newWaHover);

    // 3. Initials Circle text color (only if it exists in the file)
    const oldCircle = `.saqcc-icon-circle {\n            background-color: var(--accent);\n            width: 40px;\n            height: 40px;\n            border-radius: 50%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: var(--text-dark);`;
    const newCircle = `.saqcc-icon-circle {\n            background-color: var(--accent);\n            width: 40px;\n            height: 40px;\n            border-radius: 50%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: var(--bg-white);`;
    content = content.replace(oldCircle, newCircle);

    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Global CSS sync complete with exact string match (LF)");
