const fs = require('fs');

// 1. Update contact.html form
let contactHtml = fs.readFileSync('contact.html', 'utf-8');
// Remove the mock onsubmit
contactHtml = contactHtml.replace('<form id="contactForm" onsubmit="event.preventDefault(); document.getElementById(\'successBanner\').style.display = \'block\'; this.reset();">', '<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST">');
fs.writeFileSync('contact.html', contactHtml, 'utf-8');

// 2. Update footers across all main pages
const files = ['index.html', 'services.html', 'about.html', 'contact.html'];
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Replace the old copyright string with the new one including Privacy Policy link
    const oldFooter = '<p>&copy; 2026 SP Gas & Maintenance (Pty) Ltd. All rights reserved.</p>';
    const newFooter = '<p>&copy; 2026 SP Gas & Maintenance (Pty) Ltd. All rights reserved. | <a href="privacy.html" style="text-decoration: underline;">Privacy Policy</a></p>';
    content = content.replace(oldFooter, newFooter);

    fs.writeFileSync(file, content, 'utf-8');
});

// 3. Update index.html specific copy
let indexHtml = fs.readFileSync('index.html', 'utf-8');
// Trust Badge
indexHtml = indexHtml.replace('<h4>SAQCC-Registered</h4>', '<h4>SAQCC & SACGA-Registered</h4>');
indexHtml = indexHtml.replace('<p>Fully compliant with South African gas regulations.</p>', '<p>Registered Practitioner (Compressed Industrial & Medical Gases).</p>');
// Trust Bar
const trustBarOld = '<div class="trust-item">\n                    <svg class="trust-icon"';
const trustBarNew = '<div class="trust-item">\n                    <svg class="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>\n                    PER Compliant\n                </div>\n                <div class="trust-item">\n                    <svg class="trust-icon"';
indexHtml = indexHtml.replace(trustBarOld, trustBarNew);
fs.writeFileSync('index.html', indexHtml, 'utf-8');

// 4. Update services.html specific copy
let servicesHtml = fs.readFileSync('services.html', 'utf-8');
servicesHtml = servicesHtml.replace('Conforming to stringent medical sanitary codes', 'Installations fully compliant with SANS 7396-1 standards');
servicesHtml = servicesHtml.replace(/COC certification/g, 'SAQCC e-CoC certification');
servicesHtml = servicesHtml.replace(/SAQCC COC sign-off/g, 'Digital SAQCC e-CoC issuance');
servicesHtml = servicesHtml.replace(/COC/g, 'SAQCC e-CoC'); // Catch any remaining
fs.writeFileSync('services.html', servicesHtml, 'utf-8');

// 5. Update about.html specific copy
let aboutHtml = fs.readFileSync('about.html', 'utf-8');
// Add PER and SACGA to credentials
const certOld = '<li><strong>SAQCC Registration:</strong> #984 (Authorized Gas Installer)</li>';
const certNew = '<li><strong>SAQCC Registration:</strong> #984 (Authorized Practitioner)</li>\n                        <li><strong>SACGA Member:</strong> Southern Africa Compressed Gases Association</li>\n                        <li><strong>Legal Framework:</strong> Fully compliant with Pressure Equipment Regulations (PER)</li>';
aboutHtml = aboutHtml.replace(certOld, certNew);
fs.writeFileSync('about.html', aboutHtml, 'utf-8');

console.log("Copy updates applied.");
