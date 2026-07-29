# IEEE Nanotechnology Council - Yachay Tech Student Branch Official Website

Official institutional website for the **IEEE Nanotechnology Council (NTC) Student Branch Chapter at Yachay Tech University**. Built with Astro, TypeScript, modular CSS, accessible WCAG 2.1 AA UI components, and deployed via GitHub Pages.

![IEEE NTC Yachay Tech Header](/assets/logos/ieee_nano_logo.svg)

---

## 🚀 Features & Architecture

- **Multipage SSG Architecture**: Routes for `/`, `/about/`, `/directive/`, `/events/`, `/projects/`, `/opportunities/`, `/gallery/`, `/news/`, and `/contact/`.
- **Institutional Branding**: Built strictly according to official IEEE NTC color specifications (`#1F3E65`, `#264061`, `#04608E`, `#0587BD`, `#465D64`, `#FFFFFF`).
- **Responsive Layout**: Tested across mobile (320px, 375px, 430px), tablet (768px, 1024px), and desktop (1280px, 1440px, 1920px).
- **Accessibility WCAG 2.1 AA**: High contrast, keyboard focus rings, skip-to-content link, ARIA expanded state, non-distracting motion support.
- **Interactive Components**: Accessible dropdowns, mobile navigation drawer, event carousels, photo mosaic gallery with Lightbox modal, and validated contact forms.
- **GitHub Pages CI/CD**: Automated deployment via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🛠️ Technology Stack

- **Framework**: [Astro 4.x](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Modular Vanilla CSS with CSS Custom Properties
- **Deployment**: GitHub Pages & GitHub Actions CI/CD
- **Search Engine Optimization**: Open Graph tags, canonical URLs, sitemap, and `robots.txt`.

---

## 💻 Local Development Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Steps

1. **Clone & Navigate**:
   ```bash
   cd "C:\Users\Pc\Desktop\PERSONAL GROWTH\PROJECTS\IEEE Nanocouncil Chapter\WEB"
   ```

2. **Install Dependencies**:
   ```bash
   cmd.exe /c "npm install"
   ```

3. **Run Local Development Server**:
   ```bash
   cmd.exe /c "npm run dev"
   ```
   Open `http://localhost:4321` in your browser.

4. **Run TypeScript & Code Checks**:
   ```bash
   cmd.exe /c "npm run check"
   ```

5. **Build for Production**:
   ```bash
   cmd.exe /c "npm run build"
   ```

---

## 📂 Project Structure

```
WEB/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── logos/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── home/
│   │   └── layout/
│   ├── data/
│   │   ├── directive.ts
│   │   ├── events.ts
│   │   ├── gallery.ts
│   │   ├── news.ts
│   │   ├── opportunities.ts
│   │   └── projects.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── directive/
│   │   ├── events/
│   │   ├── gallery/
│   │   ├── news/
│   │   ├── opportunities/
│   │   ├── projects/
│   │   ├── 404.astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 📝 Content Management Guide

- **Updating Events**: Edit `src/data/events.ts` to add or update upcoming/past events.
- **Updating Directive**: Edit `src/data/directive.ts` to manage executive board officers, coordinators, and advisors.
- **Updating News**: Edit `src/data/news.ts` to publish new announcements and conference reports.
- **Updating Opportunities**: Edit `src/data/opportunities.ts` to list new scholarships, travel awards, and volunteer openings.
- **Adding Gallery Photos**: Add image files to `public/assets/images/` and add corresponding metadata objects in `src/data/gallery.ts`.

---

## 📄 License & Attribution

Official Website of IEEE Nanotechnology Council Student Branch at Yachay Tech University. All rights reserved. IEEE Branding compliant with IEEE Region 9 guidelines.
