# Deployment Guide for OpenCore Dispatch

This guide walks you through launching the blog on modern static hosts.

## ✅ Prerequisites Completed

- ✅ Git repository initialized
- ✅ Initial commit created
- ✅ Build scripts configured (`npm run build`)
- ✅ Production-ready HTML generated in `_site/`

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Fastest to production)

**Why Vercel?**
- ✅ Global CDN with an extremely generous free tier
- ✅ Automatic previews for pull requests
- ✅ Git-based workflow that mirrors how you already work
- ✅ Built-in HTTPS and custom domains
- ✅ Zero configuration for Eleventy (reinforced by the included `vercel.json`)

**Deploy in minutes:**

1. **Push your code to GitHub (or GitLab/Bitbucket)**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/opencore-dispatch.git
   git branch -M main
   git push -u origin main
   ```
2. **Create the Vercel project**
   - Go to https://vercel.com/
   - Sign up or log in, then choose **Add New… → Project**
   - Import your repository
   - Keep the detected settings: build command `npm run build`, output `_site`
   - Click **Deploy**
3. **Update site metadata**
   - After the first deploy, edit `src/_data/site.json`
   - Set the `url` field to your production domain (for example `https://opencore-dispatch.vercel.app`)
4. **Optional: add a custom domain**
   - In Vercel, open **Settings → Domains**
   - Add your domain and follow the DNS instructions

Future pushes to `main` redeploy automatically, and every pull request receives a preview URL.

### Option 2: Cloudflare Pages (Great for teams already on Cloudflare)

**Why Cloudflare Pages?**
- ✅ Free tier with generous bandwidth
- ✅ Integrated analytics and web security tooling
- ✅ Works seamlessly with Cloudflare DNS

**Steps:**

1. Push your repository to GitHub (same as above).
2. Visit https://pages.cloudflare.com/ and create a new project.
3. Connect your Git provider and select the repository.
4. Use `npm run build` for the build command and `_site` for the output directory.
5. Deploy and optionally attach a custom domain in **Pages → Custom domains**.

### Option 3: GitHub Pages (Simple static hosting)

Prefer to keep everything on GitHub? This repository ships with
`.github/workflows/deploy.yml`, so the heavy lifting is already done.

1. Push your code to GitHub.
2. On the first push to `main`, the workflow builds the site and uploads the
   artifact. Visit **Settings → Pages** and confirm that the source is set to
   **GitHub Actions**.
3. Update `src/_data/site.json` → `url` with your Pages domain. For project
   sites this is usually `https://YOUR_USERNAME.github.io/YOUR_REPO`; for user
   sites it is `https://YOUR_USERNAME.github.io`.
4. (Optional) If you want to test locally with the same path prefix that GitHub
   Pages uses, run:

   ```bash
   ELEVENTY_PATH_PREFIX=/YOUR_REPO npm run build
   ```

The workflow automatically detects whether your repository is a user/org page or
a project page and sets the `ELEVENTY_PATH_PREFIX` environment variable for the
build. That keeps internal asset and navigation links working without manual
tweaks.

---

## 🌐 Custom Domain (Optional)

If you want a domain such as `opencoredispatch.com`:

1. Purchase a domain from a registrar (Namecheap, Cloudflare, etc.).
2. In your hosting platform, add the domain:
   - **Vercel:** Project Settings → Domains → Add
   - **Cloudflare Pages:** Project → Custom domains → Set up
   - **GitHub Pages:** Settings → Pages → Custom domain
3. Follow the DNS instructions supplied by the host (typically CNAME or A records).

---

## 📝 Making Updates

1. Make changes locally (new posts, design tweaks, etc.).
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Add new post about RISC-V"
   ```
3. Push to your remote:
   ```bash
   git push
   ```
4. Your hosting provider rebuilds automatically—give it a minute or two.

---

## 🎯 Recommended: Start with Vercel

For most users Vercel offers the smoothest experience: it deploys quickly, scales automatically, and provides preview URLs for collaboration without extra setup.

---

## 📊 What Happens During Deployment

1. **Install dependencies:** the host runs `npm install`.
2. **Build:** the host executes `npm run build`, producing static files in `_site/`.
3. **Publish:** the host uploads `_site/` to its CDN and enables caching/HTTPS.
4. **Subsequent updates:** every push triggers the same build-and-publish cycle automatically.

