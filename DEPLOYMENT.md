# GitHub Pages Deployment Guide

This guide details how to build and publish the IEEE Nanotechnology Council Yachay Tech website on GitHub Pages.

---

## 1. Astro Configuration for GitHub Pages

In `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://ieee-ntc-ec.github.io',
  base: '/ieee-ntc-yachay',
  output: 'static'
});
```

---

## 2. GitHub Actions Automated Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles the build and deployment process on every push to the `main` branch.

### Pipeline Steps:
1. **Checkout Code**: Checks out the latest commit.
2. **Setup Node.js**: Uses Node 20.
3. **Install Dependencies**: Runs `npm install`.
4. **Build Astro**: Executes `npm run build` in static output mode.
5. **Upload Artifacts**: Uploads `dist/` folder to GitHub Pages.
6. **Publish Pages**: Deploys artifact to `https://ieee-ntc-ec.github.io/ieee-ntc-yachay/`.

---

## 3. GitHub Repository Settings Setup

1. Go to GitHub Repository Settings -> **Pages**.
2. Under **Build and deployment**:
   - **Source**: Select `GitHub Actions`.
3. Commit and push changes to branch `main`.
4. Check the **Actions** tab to monitor build status.
