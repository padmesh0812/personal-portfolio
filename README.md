# Padmesh Kumar Singh - Developer Portfolio (React + Vite)

A modern, high-performance developer portfolio built with **React 19**, **Vite**, and **Sans-Serif Dark Theme Styling**, modeled after the structure of professional developer portfolios with a custom **Electric Cyan & Midnight Obsidian** color palette.

---

## 🎨 Design & Aesthetic Highlights

- **Pure Sans-Serif Typography**: Built with modern Google Sans-Serif fonts (`Plus Jakarta Sans` and `Inter`).
- **Custom Dark Theme Palette**:
  - **Background**: Deep space midnight obsidian (`#050811`, `#070d18`).
  - **Primary Accent**: Electric Cyan (`#00f0ff` / `#00d2ff`) for glowing highlights, borders, and CTA buttons.
  - **Cards & Surfaces**: Dark gradient slate (`#0e1930` to `#080f1e`).
  - **Text**: Crisp white headings (`#ffffff`) and slate body text (`#94a3b8`).
- **Interactive UI Components**:
  - Circular glowing hero profile with floating tech badges (`☕ Java`, `⚛️ React`).
  - Categorized skill cards with hover elevation and cyan glowing borders.
  - Vertical timeline for work experience & projects with date badges and glowing checkpoint pins.
  - Education cards with circular icons and status tags.
  - Interactive Contact Form & 1-click clipboard copy for email and phone.
  - High-resolution modal Lightbox for viewing course certifications.

---

## 📁 Project Structure

```text
personal-portfolio/
├── public/
│   └── favicon.svg                       # Web favicon
├── src/
│   ├── assets/                           # Canonical images & resume
│   │   ├── padmesh.jpg                   # Profile avatar photo
│   │   ├── cert_web_dev.jpg              # Web Development certificate
│   │   ├── cert_dsa.jpg                  # DSA certificate
│   │   ├── cert_sql.jpg                  # HackerRank SQL certificate
│   │   └── Padmesh_Kumar_Singh_Resume.pdf# Resume PDF
│   ├── components/                       # Separate modular components
│   │   ├── Navbar.jsx                    # Sticky frosted-glass navigation & mobile drawer
│   │   ├── Hero.jsx                      # Hero section with avatar, glow & CTA
│   │   ├── About.jsx                     # Bio, highlights & information card
│   │   ├── Skills.jsx                    # Categorized skill cards (Frontend, Backend, Database, Tools)
│   │   ├── Experience.jsx                # Vertical timeline of work & project experience
│   │   ├── Education.jsx                 # Academic milestones & degrees
│   │   ├── Certifications.jsx            # Certificate cards with Lightbox modal trigger
│   │   ├── Contact.jsx                   # Contact details & interactive message form
│   │   ├── Footer.jsx                    # Brand footer & smooth back-to-top button
│   │   ├── LightboxModal.jsx             # Accessible fullscreen certificate modal
│   │   ├── Toast.jsx                     # Notification toast for user actions
│   │   ├── Icons.jsx                     # Crisp inline SVGs (GitHub, LinkedIn)
│   │   └── index.js                      # Barrel export for clean imports
│   ├── data/
│   │   └── portfolioData.js              # Centralized portfolio data
│   ├── App.jsx                           # Root layout & scrollspy state
│   ├── index.css                         # Dark theme CSS design system
│   └── main.jsx                          # React entrypoint
├── index.html                            # HTML template with Google Fonts & SEO
├── package.json                          # Scripts & dependencies
├── vite.config.js                        # Vite configuration
└── .gitignore                            # Git ignore rules
```

---

## 💻 Available Scripts

### Development Server
```bash
npm run dev
```
Runs at [http://localhost:5173](http://localhost:5173).

### Production Build
```bash
npm run build
```
Generates an optimized production build in `dist/`.

### Preview Build
```bash
npm run preview
```
