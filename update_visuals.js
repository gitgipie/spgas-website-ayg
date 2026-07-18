const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const jsToAdd = `    <!-- Scroll Animations Script -->
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
                '.hero-content',
                '.profile-content',
                '.profile-visual',
                '.stat-card',
                '.value-card',
                '.info-group',
                '.form-container',
                '.direct-card',
                '.office-details-card',
                '.site-visit-badge'
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
    
    // Normalize newlines
    content = content.replace(/\r\n/g, '\n');

    // Replace script block
    const scriptRegex = /<!-- Scroll Animations Script -->[\s\S]*?<\/body>/;
    if (scriptRegex.test(content)) {
        content = content.replace(scriptRegex, jsToAdd);
    }
    
    // Add bg-pattern to about.html and contact.html
    if (filePath === 'about.html') {
        content = content.replace('<section class="profile-section">', '<section class="profile-section bg-pattern">');
    }
    if (filePath === 'contact.html') {
        content = content.replace('<section class="contact-section">', '<section class="contact-section bg-pattern">');
    }

    fs.writeFileSync(filePath, content, 'utf-8');
});
console.log("Updated visuals across all pages");
