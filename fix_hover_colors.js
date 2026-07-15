const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Fix service card icon hover
    const oldIconHover = `.service-card:hover .service-icon-box {
            background-color: var(--accent);
            color: var(--text-dark);
        }`;
    const newIconHover = `.service-card:hover .service-icon-box {
            background-color: var(--primary);
            color: var(--bg-white);
        }`;
    content = content.replace(oldIconHover, newIconHover);
    
    // Fix secondary button hover
    const oldBtnHover = `.btn-secondary:hover {
            background-color: var(--primary);
            color: var(--text-dark);
            transform: translateY(-2px);
        }`;
    const newBtnHover = `.btn-secondary:hover {
            background-color: var(--primary);
            color: var(--bg-white);
            transform: translateY(-2px);
        }`;
    content = content.replace(oldBtnHover, newBtnHover);
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Hover colors fixed in all HTML files");
