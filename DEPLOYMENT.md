# Deployment Guide - Cloudflare Pages

## Prerequisites

- A Cloudflare account
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Wrangler CLI (optional but recommended)

## Deployment Methods

### Method 1: Using Wrangler CLI (Recommended)

#### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

#### 2. Login to Cloudflare

```bash
wrangler login
```

#### 3. Deploy to Production

```bash
npm run deploy
```

#### 4. Deploy to Preview Environment

```bash
npm run deploy:preview
```

#### 5. Local Development with Pages

```bash
npm run pages:dev
```

### Method 2: Using Cloudflare Dashboard

#### 1. Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to "Pages" in the sidebar
3. Click "Create a project"
4. Choose "Connect to Git"

#### 2. Configure Build Settings

- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty if your project is in the root)

#### 3. Environment Variables (if needed)

Add any environment variables your app requires in the Cloudflare Pages settings.

#### 4. Deploy

1. Click "Save and Deploy"
2. Cloudflare will automatically build and deploy your site
3. Your site will be available at `https://your-project-name.pages.dev`

## Custom Domain (Optional)

1. In your Pages project settings, go to "Custom domains"
2. Add your domain and follow the DNS configuration instructions

## Automatic Deployments

- Every push to your main branch will trigger a new deployment
- You can configure branch deployments for preview environments

## Troubleshooting

- Check the build logs in Cloudflare Pages dashboard
- Ensure all dependencies are in `package.json`
- Verify the build output directory is correct (`dist` for Vite)
- For Wrangler issues, run `wrangler pages deploy dist --dry-run` to test

## Performance Tips

- The `_headers` file is already configured for optimal caching
- Static assets are cached for 1 year
- The `_redirects` file ensures proper SPA routing

## Wrangler Configuration

The project includes a `wrangler.toml` file with the following configuration:

- Project name: `dent-app`
- Build directory: `dist`
- Build command: `npm run build`
- Compatibility date: `2024-01-01`
