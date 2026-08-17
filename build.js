const fs = require('fs');
const path = require('path');
const config = require('./js/cloudinary-config.js');

// 1. Load environment variables manually to avoid unnecessary dependencies
if (fs.existsSync('.env')) {
  const envFile = fs.readFileSync('.env', 'utf-8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      value = value.replace(/(^['"]|['"]$)/g, '').trim();
      process.env[key] = value;
    }
  });
}

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || config.cloudName;

if (!cloudName) {
  console.error("ERROR: CLOUDINARY_CLOUD_NAME is not set in .env or config.");
  process.exit(1);
}

// 2. Define standard transformations
const baseCloudinaryUrl = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto`;

// 3. Helper to determine the optimal width parameter based on the image key
function getTransformation(key) {
  if (key.toLowerCase().includes('hero')) {
    return 'w_1600'; // Hero images are large
  }
  if (key.includes('blog') || key.includes('residential') || key.includes('commercial') || key.includes('industrial') || key.includes('underground') || key.includes('overhead') || key.includes('sump')) {
    return 'w_1024'; // Cards and inner images
  }
  return 'w_800'; // Default fallback
}

// 4. File Processing Setup
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Ensure nested directories exist in dist
const directoriesToCopy = ['css', 'js', 'blog', 'assets/fonts']; // exclude assets/images
directoriesToCopy.forEach(dir => {
  const dest = path.join(distDir, dir);
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
});

// 5. Function to copy directories (excluding images)
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy static assets
console.log('Copying static assets...');
copyDir(path.join(__dirname, 'css'), path.join(distDir, 'css'));
copyDir(path.join(__dirname, 'js'), path.join(distDir, 'js'));
copyDir(path.join(__dirname, 'assets'), path.join(distDir, 'assets'));

const rootFiles = ['robots.txt', 'sitemap.xml', 'favicon.ico'];
rootFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(distDir, file));
  }
});

// 6. Process HTML Files
function processHtmlFile(filePath, destPath) {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf-8');

  // Replace {{img:key}}
  html = html.replace(/\{\{img:([a-zA-Z0-9]+)\}\}/g, (match, key) => {
    const assetPath = config.images[key];
    if (!assetPath) {
      console.warn(`WARNING: Missing Cloudinary mapping for key: ${key}`);
      return match;
    }
    
    // Check if it's the logo which shouldn't be constrained identically to hero
    const transform = key.includes('logo') ? 'w_400' : getTransformation(key);
    
    return `${baseCloudinaryUrl},${transform}/${assetPath}`;
  });

  fs.writeFileSync(destPath, html);
  console.log(`Processed: ${filePath} -> ${destPath}`);
}

// Find all HTML files in root and blog
const htmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
const blogFiles = fs.existsSync('blog') ? fs.readdirSync('blog').filter(f => f.endsWith('.html')).map(f => `blog/${f}`) : [];

const allFilesToProcess = [...htmlFiles, ...blogFiles, 'css/style.css'];

console.log('Injecting Cloudinary URLs into HTML and CSS...');
allFilesToProcess.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  // Ensure the CSS directory exists in dist before writing
  if (file.includes('css/') && !fs.existsSync(path.dirname(dest))) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
  }
  processHtmlFile(src, dest);
});

console.log('Build complete! Output generated in dist/');
