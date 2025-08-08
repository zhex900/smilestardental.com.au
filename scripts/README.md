# Sitemap Generation

This directory contains scripts for automatically generating SEO-optimized sitemaps during the build process.

## Files

- `generate-sitemap.cjs` - Dynamic sitemap generator

## Usage

### Automatic Generation (Recommended)

The sitemap is automatically generated during the build process:

```bash
npm run build
```

This will:

1. Run TypeScript type checking
2. Generate the sitemap with current date
3. Build the application

### Manual Generation

You can also generate the sitemap manually:

```bash
# Generate with default settings
node scripts/generate-sitemap.cjs

# Generate with custom base URL
node scripts/generate-sitemap.cjs --url https://staging.smilestardental.com.au

# Generate with environment variable
SITE_URL=https://dev.smilestardental.com.au node scripts/generate-sitemap.cjs
```

### Help

```bash
node scripts/generate-sitemap.cjs --help
```

## Configuration

### Routes

Routes are defined in `generate-sitemap.cjs`:

```javascript
const routes = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  // ... more routes
];
```

### Properties

- `path` - URL path (e.g., '/services')
- `priority` - SEO priority (0.0 to 1.0)
- `changefreq` - How often the page changes
- `lastmod` - Last modification date (auto-generated)

### Base URL

The base URL can be configured via:

1. **Environment Variable**: `SITE_URL`
2. **Command Line**: `--url` argument
3. **Default**: `https://smilestardental.com.au`

## Output

The sitemap is generated at `public/sitemap.xml` and includes:

- XML sitemap format
- All defined routes
- Current date as lastmod
- SEO-optimized priorities
- Change frequencies

## Integration

The sitemap is referenced in:

- `public/robots.txt` - For search engine crawlers
- `index.html` - Canonical URL and meta tags

## SEO Benefits

✅ **Automatic Updates**: Sitemap updates with each build  
✅ **Search Engine Friendly**: Proper XML format  
✅ **Priority Optimization**: SEO-optimized priorities  
✅ **Date Tracking**: Current modification dates  
✅ **Multiple Environments**: Support for staging/dev URLs

## Adding New Routes

To add a new route:

1. Add the route to the `routes` array in `generate-sitemap.cjs`
2. Set appropriate priority and change frequency
3. The sitemap will be updated on the next build

Example:

```javascript
{
  path: '/new-service',
  priority: '0.8',
  changefreq: 'monthly',
  lastmod: new Date().toISOString().split('T')[0]
}
```
