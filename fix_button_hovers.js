const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Normalize newlines to LF for matching
    content = content.replace(/\r\n/g, '\n');

    // 1. Fix btn-secondary hover
    const oldSecondaryHover = `.btn-secondary:hover {\n            background-color: var(--primary);\n            color: var(--bg-white);\n            transform: translateY(-2px);\n        }`;
    const newSecondaryHover = `.btn-secondary:hover {\n            background-color: var(--accent);\n            color: var(--bg-white);\n            border-color: var(--accent);\n            transform: translateY(-2px);\n            box-shadow: 0 4px 12px rgba(17, 17, 17, 0.3);\n        }`;
    content = content.replace(oldSecondaryHover, newSecondaryHover);

    // 2. Fix btn-primary hover shadow (orange to blue/black)
    const oldPrimaryHover = `.btn-primary:hover {\n            background-color: var(--accent-hover);\n            transform: translateY(-2px);\n            box-shadow: 0 4px 12px rgba(255, 107, 26, 0.3);\n        }`;
    const newPrimaryHover = `.btn-primary:hover {\n            background-color: var(--accent);\n            transform: translateY(-2px);\n            box-shadow: 0 4px 12px rgba(17, 17, 17, 0.3);\n        }`;
    content = content.replace(oldPrimaryHover, newPrimaryHover);

    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Button hover styles updated");
