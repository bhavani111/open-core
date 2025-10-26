# 🚀 Quick Start: Deploy in 5 Minutes

## Step 1: Create GitHub Account
- Go to https://github.com/signup
- Create a free account

## Step 2: Create Repository
- Go to https://github.com/new
- Name: `opencore-dispatch`
- Make it **Public**
- Click "Create repository"

## Step 3: Push Your Code

Open PowerShell in your project folder:

```powershell
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/opencore-dispatch.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to GitHub Pages (Easiest!)

1. Push your code to GitHub (from Step 3).
2. Open your repository in the browser and go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Head to the **Actions** tab, open the "Deploy site" workflow, and click
   **Run workflow**. Approve the prompt the first time it runs.

**Done! Your site is live!** 🎉

Your URL will be: `https://YOUR_USERNAME.github.io/opencore-dispatch/`

## Step 5: Customize Your URL (Optional)

In GitHub Pages:
- Go to **Settings → Pages**
- Add a **Custom domain** (e.g. `blog.example.com`)
- Update your DNS `CNAME` record to point to `YOUR_USERNAME.github.io.`
- GitHub will automatically provision HTTPS once DNS resolves

---

## 📝 To Update Your Blog Later

```powershell
# Make your changes, then:
git add .
git commit -m "Your update message"
git push
```

GitHub Pages will automatically rebuild and deploy! ✨

---

## 🆘 Need Help?

See the full `DEPLOYMENT.md` guide for:
- Alternative hosting options (Vercel, Cloudflare Pages)
- Custom domain setup
- Troubleshooting
- Advanced configuration

