const fs = require("fs");
const path = require("path");

// Configuration
const BASE_URL = process.env.SITE_URL || "https://smilestardental.com.au";
const OUTPUT_PATH = path.join(__dirname, "../public/sitemap.xml");

// Define your routes with their SEO properties
const routes = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/membership",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/contact",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
];

// Generate sitemap XML
function generateSitemap() {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = "</urlset>";

  const urls = routes
    .map((route) => {
      return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join("\n");

  const sitemap = `${xmlHeader}
${urlsetOpen}
${urls}
${urlsetClose}
`;

  // Ensure the public directory exists
  const publicDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap to file
  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`✅ Sitemap generated at: ${OUTPUT_PATH}`);
  console.log(`📄 Generated ${routes.length} URLs`);
  console.log(`🌐 Base URL: ${BASE_URL}`);

  // Log each URL for verification
  routes.forEach((route) => {
    console.log(`   - ${BASE_URL}${route.path} (Priority: ${route.priority})`);
  });
}

// Handle command line arguments
if (process.argv.includes("--help")) {
  console.log(`
Sitemap Generator for Smile Star Dental

Usage:
  node scripts/generate-sitemap.js [options]

Options:
  --help          Show this help message
  --url <url>     Set custom base URL (default: https://smilestardental.com.au)

Environment Variables:
  SITE_URL        Set the base URL for the sitemap

Examples:
  node scripts/generate-sitemap.js
  node scripts/generate-sitemap.js --url https://staging.smilestardental.com.au
  SITE_URL=https://dev.smilestardental.com.au node scripts/generate-sitemap.js
  `);
  process.exit(0);
}

// Check for custom URL argument
const urlIndex = process.argv.indexOf("--url");
if (urlIndex !== -1 && process.argv[urlIndex + 1]) {
  const customUrl = process.argv[urlIndex + 1];
  console.log(`🔧 Using custom base URL: ${customUrl}`);
  BASE_URL = customUrl;
}

// Run the generator
generateSitemap();
