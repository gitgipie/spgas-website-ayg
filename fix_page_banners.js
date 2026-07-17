const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Normalize newlines to LF for matching
    content = content.replace(/\r\n/g, '\n');

    // Fix .page-banner
    const oldBanner = `.page-banner {\n            background: radial-gradient(circle at 10% 20%, var(--primary-light) 0%, var(--primary) 90%);\n            color: var(--text-dark);\n            padding: 4rem 0;\n            text-align: center;\n        }`;
    const newBanner = `.page-banner {\n            background: radial-gradient(circle at 10% 20%, var(--primary-light) 0%, var(--primary) 90%);\n            color: var(--bg-white);\n            padding: 4rem 0;\n            text-align: center;\n        }`;
    content = content.replace(oldBanner, newBanner);

    // Fix .page-banner h1
    const oldBannerH1 = `.page-banner h1 {\n            color: var(--text-dark);\n            font-size: 2.75rem;\n            margin-bottom: 0.75rem;\n        }`;
    const newBannerH1 = `.page-banner h1 {\n            color: var(--bg-white);\n            font-size: 2.75rem;\n            margin-bottom: 0.75rem;\n            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n        }`;
    content = content.replace(oldBannerH1, newBannerH1);

    // Fix .page-banner p
    const oldBannerP = `.page-banner p {\n            color: var(--text-muted);\n            font-size: 1.1rem;\n            max-width: 600px;\n            margin: 0 auto;\n        }`;
    const newBannerP = `.page-banner p {\n            color: rgba(255, 255, 255, 0.9);\n            font-size: 1.1rem;\n            max-width: 600px;\n            margin: 0 auto;\n            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n        }`;
    content = content.replace(oldBannerP, newBannerP);

    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Page banner styles updated");
