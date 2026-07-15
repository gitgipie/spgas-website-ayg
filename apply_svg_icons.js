const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const whatsappSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-top:-2px"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.897 14.1 1.872 11.464 1.872c-5.439 0-9.865 4.42-9.869 9.864-.001 1.702.46 3.366 1.332 4.815L1.936 21.05l4.711-1.236zm11.33-6.914c-.29-.145-1.713-.846-1.977-.941-.264-.096-.457-.145-.65.145-.19.29-.738.941-.906 1.133-.168.193-.336.217-.626.072-.29-.145-1.222-.45-2.328-1.437-.86-.767-1.44-1.716-1.61-2.006-.17-.29-.017-.446.129-.59.13-.13.29-.336.435-.506.145-.17.193-.29.29-.482.096-.193.048-.361-.024-.506-.073-.145-.65-1.566-.89-2.145-.233-.563-.489-.487-.65-.495-.168-.008-.361-.01-.555-.01s-.51.072-.777.361c-.266.29-1.02.997-1.02 2.429 0 1.433 1.04 2.815 1.185 3.007.145.193 2.05 3.13 4.966 4.385.694.3 1.236.478 1.658.613.698.222 1.334.19 1.838.115.56-.084 1.713-.699 1.953-1.373.24-.675.24-1.253.168-1.373-.072-.12-.265-.193-.555-.338z"/></svg> `;
const phoneSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-top:-2px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> `;
const emailSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-top:-2px"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> `;

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/💬 /g, whatsappSvg);
    content = content.replace(/📞 /g, phoneSvg);
    content = content.replace(/✉️ /g, emailSvg);
    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("SVG icons applied to all html files");
