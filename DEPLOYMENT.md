# GitHub Pages Deployment Guide 🚀

This app is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

## Setup Instructions

### 1. Create a GitHub Repository

If you haven't already, create a new repository on GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Fog Computing Exam Prep App"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. Save the settings

### 3. Push to Deploy

Every time you push to the `main` branch, the app will automatically build and deploy!

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### 4. Access Your Deployed App

After the first deployment (takes 2-3 minutes), your app will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

## Important Configuration Notes

### Base Path Configuration

The `vite.config.js` is configured to use your repository name as the base path in production:

```javascript
base: process.env.NODE_ENV === 'production' ? '/Exam prep/' : '/',
```

**If your repository name is different**, update this line to match:

```javascript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

## Monitoring Deployments

### View Deployment Status

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You'll see all deployment runs
4. Click on any run to see detailed logs

### Deployment Badge (Optional)

Add this to your README.md to show deployment status:

```markdown
![Deploy Status](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions/workflows/deploy.yml/badge.svg)
```

## Troubleshooting

### Deployment Fails

**Check the Actions tab** for error messages. Common issues:

1. **Build errors**: Fix any code errors locally first
2. **Permissions error**: Make sure GitHub Actions has write permissions:
   - Settings → Actions → General → Workflow permissions
   - Select "Read and write permissions"

### Blank Page After Deployment

If you see a blank page:

1. Check the browser console for errors
2. Verify the `base` path in `vite.config.js` matches your repo name
3. Make sure the path includes leading and trailing slashes: `'/repo-name/'`

### 404 Errors

If you get 404 errors:

1. Verify GitHub Pages is enabled in repository settings
2. Confirm "Source" is set to **GitHub Actions** (not "Deploy from a branch")
3. Wait a few minutes for DNS propagation

## Local Development

The configuration automatically uses different base paths for local and production:

- **Local**: `http://localhost:5173/` (root path)
- **Production**: `https://username.github.io/repo-name/` (with base path)

So you can develop locally without any issues!

## Custom Domain (Optional)

If you want to use a custom domain:

1. In repository Settings → Pages
2. Enter your custom domain
3. Follow GitHub's instructions for DNS configuration
4. Update `vite.config.js` base to `'/'`

## Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. **Triggers**: On every push to `main` branch
2. **Builds**: Runs `npm ci` and `npm run build`
3. **Deploys**: Uploads build artifacts to GitHub Pages
4. **Publishes**: Makes your app publicly accessible

## Updating the App

Simply make changes locally and push:

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push origin main
```

The app will automatically rebuild and redeploy! 🎉

---

## Quick Reference

### Deploy Command
```bash
git push origin main
```

### App URL Format
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

### Check Status
Go to: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions`

---

**Your app is now ready for automatic deployment!** 🚀

Just push to `main` and GitHub will handle the rest!

