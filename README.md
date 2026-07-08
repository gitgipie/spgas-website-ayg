# SP Gas & Maintenance - Lead-Generation Website

A high-conversion, responsive static website built for **SP Gas & Maintenance (Pty) Ltd**.

## Project Structure
```
SPGas/
├── index.html          # Home Page
├── services.html       # Services Directory
├── about.html          # About Stanley & Credentials
├── contact.html        # Contact Details & Enquiry Form
├── assets/
│   └── sp-monogram.jpg # Company logo image (copied from cache)
└── README.md           # Instructions and next steps (this file)
```

## Features Implemented
1. **Navy & Flame Orange Palette**: Sourced from the logo monogram colors to build a professional, trustworthy, and technical-approachable design system.
2. **High-Conversion Navigation**: Sticky desktop header featuring large call-to-action (CTA) buttons: 📞 Call Now (`tel:`) + 💬 WhatsApp.
3. **Sticky Mobile FAB**: A persistent WhatsApp chat button floating in the bottom-right corner, ensuring mobile search users can contact Stanley in under 5 seconds.
4. **Pre-Filled WhatsApp Messages**: Every service card and section links to Stanley's WhatsApp with a service-specific query (e.g. asking for a laser or bulk tank quote), providing instant context to the business owner.
5. **Interactive Contact Form**: Handcoded form on the contact page with clean validation. Instead of breaking or refreshing, submitting the form triggers a smooth CSS success alert explaining that Stanley will be in touch.
6. **Air Products Legal Disclaimer**: A dedicated section on the About page and an highlighted footer warning stating independence from Air Products, referencing Stanley's ex-Air Products role strictly as part of his professional history.
7. **Styled Placeholders**: Distinct dotted-border boxes for Stanley's portrait headshot and past work photographs so they can be filled in later without disrupting the grid layout.

## How to Preview Locally
Since the website is built using standard, framework-free HTML and CSS, you can preview it in a few ways:

### Option 1: Direct File Opening
1. Double-click the `index.html` file on your computer.
2. It will open directly in your default web browser. You can navigate through all 4 pages using the header links.

### Option 2: Local Web Server (Recommended)
Running a local web server ensures relative links and modern browser behaviors load identically to a live server:
* **With Python**:
  Run this command in your terminal from the `SPGas/` folder:
  ```bash
  python -m http.server 8000
  ```
  Then open your browser and navigate to `http://localhost:8000`.
* **With Node.js / npm**:
  If you have Node installed, you can use `serve`:
  ```bash
  npx serve .
  ```
  Then open `http://localhost:3000` (or the port specified).

## Next Steps for Stanley
1. **Supply Portrait & Work Photos**: Place a portrait headshot and some installation photos in the `assets/` folder, and update the `<img src="assets/filename.jpg">` references in `index.html`, `services.html`, and `about.html`.
2. **Fill Biography and Stats**: Replace the placeholders on the About page:
   - `[Personal bio to be added by Stanley]`
   - `[XX]+` total years in the industry.
   - `[X]` years spent at Air Products.
3. **Wire Up Form Handler**: To make the contact form receive submissions, wire it up to a backend service like **Formspree** or a **Cloudflare Pages Function** by replacing the form `action="#"` attribute in `contact.html`. For example:
   ```html
   <form id="enquiry-form" action="https://formspree.io/f/your_form_id" method="POST">
   ```
