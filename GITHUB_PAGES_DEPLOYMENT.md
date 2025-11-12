# GitHub Pages Deployment Guide

This guide explains how to deploy your Portfolio website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your local machine
- Node.js and npm installed
- Repository pushed to GitHub

## Initial Setup

### 1. Repository Configuration

Your repository should be named according to one of these patterns:
- `<username>.github.io` for a user site (will be available at `https://<username>.github.io`)
- Any other name like `Portfolio` (will be available at `https://<username>.github.io/Portfolio`)

### 2. Update Vite Configuration

The `vite.config.ts` file has been configured with the base path. If your repository name is different from `Portfolio`, update line 11 in `vite.config.ts`:

```typescript
base: mode === 'production' ? '/YourRepoName/' : '/',
```

Replace `YourRepoName` with your actual repository name. If using a user site (`<username>.github.io`), use `/` instead.

### 3. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Save the changes

## Automatic Deployment

The project is configured with GitHub Actions for automatic deployment.

### How It Works

Every time you push to the `main` branch:
1. GitHub Actions automatically triggers the workflow
2. The workflow installs dependencies
3. Builds the project for production
4. Deploys the built files to GitHub Pages

### Manual Trigger

You can also manually trigger deployment:
1. Go to your repository on GitHub
2. Click on **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow**
5. Choose the branch and click **Run workflow**

## Deployment Steps

### Method 1: Push to GitHub

```bash
# Build the project locally to test
npm run build

# Test the production build locally
npm run preview

# Commit your changes
git add .
git commit -m "Configure for GitHub Pages deployment"

# Push to GitHub
git push origin main
```

The deployment will start automatically and your site will be live in a few minutes.

### Method 2: Use Deploy Script

```bash
# Run the deploy script
npm run deploy

# Then push to GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## Verify Deployment

1. Go to your repository on GitHub
2. Click on **Actions** tab
3. You should see the deployment workflow running
4. Once complete (green checkmark), click on the workflow
5. Find the deployment URL in the deploy step

Your site will be available at:
- User site: `https://<username>.github.io`
- Project site: `https://<username>.github.io/<repository-name>`

## Important Notes

### Backend API

GitHub Pages only hosts static files. The Node.js backend will NOT be deployed to GitHub Pages. You have several options:

1. **Remove backend dependency**: Make the site work without backend API calls
2. **Deploy backend separately**: 
   - Heroku
   - Vercel
   - Netlify Functions
   - Railway
   - Render
3. **Use serverless functions**: Convert backend to serverless functions on Vercel or Netlify

### Update API URLs

If you deploy the backend separately, update the API URLs in your frontend code to point to the deployed backend URL.

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` directory with your domain name
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Troubleshooting

### 404 Error on Page Refresh

If you get 404 errors when refreshing pages:
- This is due to client-side routing
- GitHub Pages doesn't support client-side routing by default
- Consider using hash routing or a 404.html redirect solution

### Assets Not Loading

If CSS/JS files are not loading:
- Check the `base` path in `vite.config.ts` matches your repository name
- Ensure it starts and ends with `/`

### Build Fails

If the build fails in GitHub Actions:
1. Check the Actions logs for specific errors
2. Ensure `npm run build` works locally
3. Verify all dependencies are in `package.json`

## Updating Your Site

To update your deployed site:

```bash
# Make your changes
# ...

# Test locally
npm run dev

# Build and test production build
npm run build
npm run preview

# Commit and push
git add .
git commit -m "Update site content"
git push origin main
```

The site will automatically redeploy with your changes.

## Monitoring

Check deployment status:
- Go to repository **Actions** tab
- Click on the latest workflow run
- View logs and status

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
