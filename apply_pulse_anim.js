const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const cssToAdd = `
        /* Pulse Animation for CTAs */
        @keyframes pulse-glow {
            0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5); }
            70% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        .btn-pulse {
            animation: pulse-glow 2.5s infinite cubic-bezier(0.66, 0, 0, 1);
        }
        .btn-pulse:hover {
            animation: none; /* Stop pulsing on hover */
        }
`;

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Inject CSS right before </style>
    if (!content.includes('pulse-glow')) {
        content = content.replace('</style>', cssToAdd + '    </style>');
    }
    
    // Add btn-pulse to the specific button
    const oldBtn = 'class="btn btn-secondary" style="border-color: var(--bg-white); color: var(--bg-white);';
    const newBtn = 'class="btn btn-secondary btn-pulse" style="border-color: var(--bg-white); color: var(--bg-white);';
    
    content = content.replace(new RegExp(oldBtn.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), newBtn);
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Pulse animation added to final CTA buttons in all HTML files.");
