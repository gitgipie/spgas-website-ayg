const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Fix .final-cta p text color
    const oldPStyle = `.final-cta p {
            color: var(--text-muted);`;
    const newPStyle = `.final-cta p {
            color: var(--bg-white);
            opacity: 0.9;`;
    content = content.replace(oldPStyle, newPStyle);
    
    // Fix inline style of the secondary button in the CTA
    const oldInlineStyle = `class="btn btn-secondary" style="border-color: var(--text-dark); color: var(--text-dark);`;
    const newInlineStyle = `class="btn btn-secondary" style="border-color: var(--bg-white); color: var(--bg-white);`;
    
    // Global replacement for the inline style
    content = content.replace(new RegExp(oldInlineStyle.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), newInlineStyle);
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Final CTA styles fixed in all HTML files");
