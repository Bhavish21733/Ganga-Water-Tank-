const fs = require('fs');
const path = require('path');

const replacements = {
  'assets/images/logo.png': '{{img:logo}}',
  '../assets/images/logo.png': '{{img:logo}}',
  'assets/images/logo-footer.png': '{{img:logoFooter}}',
  '../assets/images/logo-footer.png': '{{img:logoFooter}}',
  'assets/images/hero_cleaning_tank.jpg': '{{img:heroHome}}',
  '../assets/images/hero_cleaning_tank.jpg': '{{img:heroHome}}',
  'assets/images/about_hero_clean.jpg': '{{img:heroAbout}}',
  'assets/images/services_hero_clean.jpg': '{{img:heroServices}}',
  'assets/images/ganga-residential-water-tank-cleaning.jpg': '{{img:residential}}',
  '../assets/images/ganga-residential-water-tank-cleaning.jpg': '{{img:residential}}',
  'assets/images/ganga-commercial-water-tank-cleaning.jpg': '{{img:commercial}}',
  '../assets/images/ganga-commercial-water-tank-cleaning.jpg': '{{img:commercial}}',
  'assets/images/ganga-overhead-tank-cleaning.jpg': '{{img:overhead}}',
  '../assets/images/ganga-overhead-tank-cleaning.jpg': '{{img:overhead}}',
  'assets/images/ganga-underground-tank-cleaning.jpg': '{{img:underground}}',
  '../assets/images/ganga-underground-tank-cleaning.jpg': '{{img:underground}}',
  'assets/images/ganga-industrial-tank-cleaning.jpg': '{{img:industrial}}',
  '../assets/images/ganga-industrial-tank-cleaning.jpg': '{{img:industrial}}',
  'assets/images/ganga-sump-sintex-tank-cleaning.jpg': '{{img:sumpSintex}}',
  '../assets/images/ganga-sump-sintex-tank-cleaning.jpg': '{{img:sumpSintex}}',
  'assets/images/ganga-blog-why-regular-water-tank-cleaning.jpg': '{{img:blog1}}',
  'assets/images/ganga-blog-why-regular-water-tank-cleaning.jpg?v=2': '{{img:blog1}}',
  '../assets/images/ganga-blog-why-regular-water-tank-cleaning.jpg': '{{img:blog1}}',
  '../assets/images/ganga-blog-why-regular-water-tank-cleaning.jpg?v=2': '{{img:blog1}}',
  'assets/images/ganga-blog-how-often-clean-water-tank.jpg': '{{img:blog2}}',
  'assets/images/ganga-blog-how-often-clean-water-tank.jpg?v=2': '{{img:blog2}}',
  '../assets/images/ganga-blog-how-often-clean-water-tank.jpg': '{{img:blog2}}',
  '../assets/images/ganga-blog-how-often-clean-water-tank.jpg?v=2': '{{img:blog2}}',
};

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replace exact string matches
  for (const [search, replace] of Object.entries(replacements)) {
    // We use a global regex with escaping to replace all occurrences
    const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    content = content.replace(regex, replace);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated: ' + filePath);
  }
}

// Find all HTML files
const rootFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
const blogFiles = fs.existsSync('blog') ? fs.readdirSync('blog').filter(f => f.endsWith('.html')).map(f => path.join('blog', f)) : [];

const allFiles = [...rootFiles, ...blogFiles, path.join('css', 'style.css')];

allFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  processFile(filePath);
});

console.log('Refactoring complete.');
