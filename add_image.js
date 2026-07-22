const fs = require('fs');

const cssToAdd = `
        .profile-img {
            width: 100%;
            max-width: 450px;
            height: auto;
            border-radius: 12px;
            box-shadow: var(--shadow-lg);
            display: block;
            margin: 0 auto;
        }
`;

// About page
let aboutContent = fs.readFileSync('about.html', 'utf-8');
aboutContent = aboutContent.replace(/\r\n/g, '\n');
const aboutRegex = /<div class="portrait-placeholder">[\s\S]*?<\/div>/;
aboutContent = aboutContent.replace(aboutRegex, '<img src="assets/stanley-profile.jpg" alt="Stanley Powell - SAQCC Gas Installer" class="profile-img">');
if (!aboutContent.includes('.profile-img {')) {
    aboutContent = aboutContent.replace('</style>', cssToAdd + '    </style>');
}
fs.writeFileSync('about.html', aboutContent, 'utf-8');

// Index page
let indexContent = fs.readFileSync('index.html', 'utf-8');
indexContent = indexContent.replace(/\r\n/g, '\n');
const indexRegex = /<div class="photo-placeholder">[\s\S]*?<\/div>/;
indexContent = indexContent.replace(indexRegex, '<img src="assets/stanley-profile.jpg" alt="Stanley Powell - SAQCC Gas Installer" class="profile-img">');
if (!indexContent.includes('.profile-img {')) {
    indexContent = indexContent.replace('</style>', cssToAdd + '    </style>');
}
fs.writeFileSync('index.html', indexContent, 'utf-8');

console.log("Images added");
