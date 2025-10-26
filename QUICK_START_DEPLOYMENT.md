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

## Step 4: Deploy to Netlify (Easiest!)

1. Go to https://www.netlify.com/
2. Click "Sign up with GitHub"
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub"
5. Select `opencore-dispatch`
6. Click "Deploy site"

**Done! Your site is live!** 🎉

Your URL will be something like: `https://random-name.netlify.app`

## Step 5: Customize Your URL (Optional)

In Netlify:
- Go to Site settings → Domain management
- Click "Options" → "Edit site name"
- Change to: `opencore-dispatch`
- Your new URL: `https://opencore-dispatch.netlify.app`

---

## 📝 To Update Your Blog Later

```powershell
# Make your changes, then:
git add .
git commit -m "Your update message"
git push
```

Netlify will automatically rebuild and deploy! ✨

---

## 🆘 Need Help?

See the full `DEPLOYMENT.md` guide for:
- Alternative hosting options (GitHub Pages, Vercel)
- Custom domain setup
- Troubleshooting
- Advanced configuration

