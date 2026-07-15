const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace 40+ with 120+ globally
    content = content.replace(/40\+/g, '120+');
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Updated 40+ to 120+ in all HTML files");
