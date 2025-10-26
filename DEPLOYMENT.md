# Deployment Guide for OpenCore Dispatch

This guide will help you deploy your blog to the internet for free!

## ✅ Prerequisites Completed

- ✅ Git repository initialized
- ✅ Initial commit created
- ✅ Deployment configuration files added
- ✅ Build scripts configured

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - Zero cost, no extra accounts)

**Why GitHub Pages?**
- ✅ Completely free
- ✅ Uses your existing GitHub account
- ✅ Automatic builds via GitHub Actions
- ✅ Free SSL certificate (HTTPS)
- ✅ Custom domain support

**Steps:**

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com/signup

2. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Repository name: `opencore-dispatch` (or any name you like)
   - Make it Public
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push your code to GitHub**

   Open PowerShell in your project folder and run:

   ```powershell
   # Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/opencore-dispatch.git

   # Rename branch to main (if needed)
   git branch -M main

   # Push to GitHub
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Build and deployment", choose "GitHub Actions"
   - The workflow file at `.github/workflows/deploy.yml` is ready to go

5. **Trigger the first deployment**
   - Push a commit or head to the **Actions** tab and run "Deploy site"
   - Approve the workflow if GitHub prompts you

6. **Your site is live!**
   - URL: `https://YOUR_USERNAME.github.io/opencore-dispatch/`
   - Set a custom domain in **Settings → Pages** if desired

**Future updates:**
- Push to GitHub: `git push`
- The workflow rebuilds and deploys automatically

---

### Option 2: Vercel (Fast, modern)

**Why Vercel?**
- ✅ Generous free tier
- ✅ Global CDN and great performance
- ✅ Automatic previews for pull requests
- ✅ Easy custom domains and HTTPS

**Steps:**

1. **Push to GitHub** (same as steps 1-3 above)

2. **Deploy to Vercel**
   - Go to https://vercel.com/
   - Click "Sign up" and choose "Continue with GitHub"
   - Click "Add New" → "Project"
   - Import your `opencore-dispatch` repository
   - Vercel auto-detects Eleventy
   - Build command: `npm run build`
   - Output directory: `_site`
   - Click "Deploy"

3. **Your site is live!**
   - Default URL: `https://opencore-dispatch.vercel.app`
   - Add a custom domain in **Settings → Domains** if you have one

---

### Option 3: Cloudflare Pages (Great for custom domains)

**Why Cloudflare Pages?**
- ✅ Free tier with generous bandwidth
- ✅ Built-in CDN and web analytics
- ✅ Easy custom domains and SSL management
- ✅ Integrates with Cloudflare DNS if you already use it

**Steps:**

1. **Push to GitHub** (same as steps 1-3 above)

2. **Deploy to Cloudflare Pages**
   - Go to https://pages.cloudflare.com/
   - Click "Create a project" and connect your GitHub account
   - Select the `opencore-dispatch` repository
   - Build command: `npm run build`
   - Build output directory: `_site`
   - Save and start the first deploy

3. **Your site is live!**
   - Default URL: `https://opencore-dispatch.pages.dev`
   - Assign a custom domain in **Pages → Custom domains**

---

## 🌐 Custom Domain (Optional)

If you want your own domain like `opencoredispatch.com`:

1. **Buy a domain** from:
   - Namecheap (~$10/year)
   - Google Domains
   - Cloudflare (~$9/year)

2. **Configure DNS** in your hosting platform:
   - **GitHub Pages**: Settings → Pages → Custom domain
   - **Vercel**: Project Settings → Domains → Add
   - **Cloudflare Pages**: Project → Custom domains → Set up

3. **Update DNS records** at your domain registrar:
   - Follow the instructions from your hosting platform
   - Usually involves adding A records or CNAME records

---

## 📝 Making Updates

After deployment, to update your blog:

1. **Make changes locally** (add new posts, edit content)

2. **Commit changes**:
   ```powershell
   git add .
   git commit -m "Add new post about RISC-V"
   ```

3. **Push to GitHub**:
   ```powershell
   git push
   ```

4. **Automatic deployment**:
   - Your hosting platform will automatically rebuild and deploy
   - Wait 1-2 minutes for changes to appear

---

## 🎯 Recommended: Start with GitHub Pages

For beginners, I recommend **GitHub Pages** because:
- No additional accounts to manage
- Excellent free tier
- Automatic HTTPS
- Tight GitHub integration
- Simple custom domain setup

---

## 📊 What Happens During Deployment

1. **Build process**:
   - Hosting platform runs `npm install`
   - Then runs `npm run build`
   - Eleventy generates static HTML files in `_site/`

2. **Deployment**:
   - Platform uploads `_site/` folder to their CDN
   - Your site is available worldwide instantly

3. **Updates**:
   - Every time you push to GitHub
   - Platform detects changes and rebuilds automatically

---

## 🔧 Troubleshooting

### Build fails on hosting platform

Check the build logs for errors. Common issues:
- Node version mismatch (we use Node 18)
- Missing dependencies (run `npm install` locally first)

### Site looks different than localhost

- Clear your browser cache
- Check that all assets are loading (CSS, images)
- Verify paths are correct (use relative paths)

### Changes not appearing

- Wait 1-2 minutes for build to complete
- Check build logs in hosting dashboard
- Clear browser cache

---

## 📞 Need Help?

If you encounter issues:
1. Check the build logs in your hosting platform
2. Verify your code works locally (`npm run dev`)
3. Check GitHub repository is up to date
4. Review hosting platform documentation

---

## 🎉 Next Steps After Deployment

1. Share your blog URL on social media
2. Add your actual contact information in `src/contact.njk`
3. Update `src/_data/site.json` with your real URLs
4. Start writing more posts!
5. Consider adding:
   - Google Analytics
   - Comments system (Disqus, utterances)
   - RSS feed
   - Search functionality

---

**Your blog is ready to go live! Choose a hosting option above and follow the steps.** 🚀

