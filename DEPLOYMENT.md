# Deployment Guide for OpenCore Dispatch

This guide will help you deploy your blog to the internet for free!

## ✅ Prerequisites Completed

- ✅ Git repository initialized
- ✅ Initial commit created
- ✅ Deployment configuration files added
- ✅ Build scripts configured

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Why Netlify?**
- ✅ Completely free for static sites
- ✅ Automatic builds from GitHub
- ✅ Free SSL certificate (HTTPS)
- ✅ Custom domain support
- ✅ Continuous deployment (auto-updates when you push to GitHub)
- ✅ No configuration needed (uses `netlify.toml`)

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

4. **Deploy to Netlify**
   - Go to https://www.netlify.com/
   - Click "Sign up" and choose "Sign up with GitHub"
   - Authorize Netlify to access your GitHub
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your `opencore-dispatch` repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

5. **Your site is live!**
   - Netlify will give you a URL like: `https://random-name-123456.netlify.app`
   - You can change this to a custom subdomain in Site settings → Domain management
   - Example: `https://opencore-dispatch.netlify.app`

**Future updates:**
- Just push to GitHub: `git push`
- Netlify automatically rebuilds and deploys!

---

### Option 2: GitHub Pages (Free, GitHub-integrated)

**Why GitHub Pages?**
- ✅ Completely free
- ✅ Integrated with GitHub
- ✅ Custom domain support
- ✅ Good for open source projects

**Steps:**

1. **Push to GitHub** (same as steps 1-3 from Netlify above)

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages" (in the left sidebar)
   - Under "Source", select "GitHub Actions"
   - The workflow file is already created at `.github/workflows/deploy.yml`

3. **Trigger deployment**
   - The workflow will run automatically on your next push
   - Or go to "Actions" tab and manually run the workflow

4. **Your site is live!**
   - URL will be: `https://YOUR_USERNAME.github.io/opencore-dispatch/`
   - You can set up a custom domain in Settings → Pages

---

### Option 3: Vercel (Fast, modern)

**Why Vercel?**
- ✅ Free tier
- ✅ Very fast deployment
- ✅ Great performance
- ✅ Easy custom domains

**Steps:**

1. **Push to GitHub** (same as steps 1-3 from Netlify above)

2. **Deploy to Vercel**
   - Go to https://vercel.com/
   - Click "Sign up" and choose "Continue with GitHub"
   - Click "Add New" → "Project"
   - Import your `opencore-dispatch` repository
   - Vercel will auto-detect Eleventy
   - Click "Deploy"

3. **Your site is live!**
   - URL will be: `https://opencore-dispatch.vercel.app`
   - You can customize the domain in project settings

---

## 🌐 Custom Domain (Optional)

If you want your own domain like `opencoredispatch.com`:

1. **Buy a domain** from:
   - Namecheap (~$10/year)
   - Google Domains
   - Cloudflare (~$9/year)

2. **Configure DNS** in your hosting platform:
   - **Netlify**: Settings → Domain management → Add custom domain
   - **GitHub Pages**: Settings → Pages → Custom domain
   - **Vercel**: Project Settings → Domains → Add

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

## 🎯 Recommended: Start with Netlify

For beginners, I recommend **Netlify** because:
- Easiest setup
- Best free tier
- Automatic HTTPS
- Great dashboard
- Easy custom domains

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

