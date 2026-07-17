const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Normalize newlines to LF
    content = content.replace(/\r\n/g, '\n');

    // Fix H1 shadow
    const oldH1 = `.page-banner h1 {\n            color: var(--bg-white);\n            font-size: 2.75rem;\n            margin-bottom: 0.75rem;\n            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n        }`;
    const newH1 = `.page-banner h1 {\n            color: var(--bg-white);\n            font-size: 2.75rem;\n            margin-bottom: 0.75rem;\n            text-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);\n        }`;
    content = content.replace(oldH1, newH1);

    // Fix P shadow
    const oldP = `.page-banner p {\n            color: rgba(255, 255, 255, 0.9);\n            font-size: 1.1rem;\n            max-width: 600px;\n            margin: 0 auto;\n            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n        }`;
    const newP = `.page-banner p {\n            color: rgba(255, 255, 255, 0.9);\n            font-size: 1.1rem;\n            max-width: 600px;\n            margin: 0 auto;\n            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }`;
    content = content.replace(oldP, newP);

    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Banner shadows intensified");
