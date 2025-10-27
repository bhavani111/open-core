# 🚀 Quick Start: Deploy in 5 Minutes (Vercel Edition)

## Step 1: Push Your Code to GitHub
- Create a free GitHub account if you do not already have one.
- Create a public repository (e.g. `opencore-dispatch`).
- From your project folder run:
  ```powershell
  git remote add origin https://github.com/YOUR_USERNAME/opencore-dispatch.git
  git branch -M main
  git push -u origin main
  ```

## Step 2: Deploy on Vercel
1. Visit [vercel.com](https://vercel.com/) and sign in (GitHub login works great).
2. Click **Add New… → Project** and import the repository you just pushed.
3. Accept the detected settings: build command `npm run build`, output directory `_site`.
4. Click **Deploy**. Your site will be live within a minute at a URL like `https://opencore-dispatch.vercel.app`.

## Step 3: Tell the Site Its Public URL
- Update `src/_data/site.json` so the `url` field matches the domain from Vercel.
- Commit and push the change; Vercel will redeploy automatically.

## Step 4: (Optional) Add Your Own Domain
- In Vercel, open **Settings → Domains**.
- Add your domain and follow the DNS instructions shown.
- Once DNS updates, Vercel provisions HTTPS automatically.

---

## Alternate: Ship with GitHub Pages
1. Push this repository to GitHub.
2. The included `.github/workflows/deploy.yml` workflow runs on `main`, builds
   the site, and publishes it to GitHub Pages.
3. After the first run, open **Settings → Pages** to confirm the deployment and
   copy the published URL.
4. Update `src/_data/site.json` → `url` to match that domain and commit the
   change. Future pushes will redeploy automatically.

> Need to mirror the Pages environment locally? Run
> `ELEVENTY_PATH_PREFIX=/YOUR_REPO npm run build` before inspecting `_site/`.

---

## 📝 Updating Your Blog Later
```powershell
# After editing posts or pages
git add .
git commit -m "Publish new article"
git push
```
Vercel watches your repository and redeploys on every push.

---

## 🆘 Need Alternatives or More Detail?
See `DEPLOYMENT.md` for instructions on Cloudflare Pages, GitHub Pages, and advanced configuration tips.

