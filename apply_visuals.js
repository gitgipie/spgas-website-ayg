const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const cssToAdd = `
        /* Visual Enhancements */
        header {
            background-color: rgba(255, 255, 255, 0.85) !important;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
        
        .bg-pattern {
            background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
            background-size: 24px 24px;
        }

        .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
`;

const jsToAdd = `
    <!-- Scroll Animations Script -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            // Automatically add fade-in-up class to key elements
            const selectorsToAnimate = [
                '.service-card', 
                '.process-item', 
                '.about-content', 
                '.contact-card',
                '.section-header',
                '.why-choose-card',
                '.hero-content'
            ];
            
            selectorsToAnimate.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                    el.classList.add('fade-in-up');
                    observer.observe(el);
                });
            });
        });
    </script>
</body>`;

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    content = content.replace(/\r\n/g, '\n');

    if (!content.includes('backdrop-filter')) {
        content = content.replace('</style>', cssToAdd + '    </style>');
    }

    if (!content.includes('IntersectionObserver')) {
        content = content.replace('</body>', jsToAdd);
    }

    if (filePath === 'index.html') {
        content = content.replace('<section class="process-section" id="process">', '<section class="process-section bg-pattern" id="process">');
    }
    if (filePath === 'services.html') {
        content = content.replace('<section class="services-detail-list">', '<section class="services-detail-list bg-pattern">');
    }

    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Visual enhancements applied successfully.");
