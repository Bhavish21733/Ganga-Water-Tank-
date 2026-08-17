const fs = require('fs');
const path = require('path');

const replacements = {
  '{{img:logo}}': 'assets/images/logo.png',
  '{{img:logoFooter}}': 'assets/images/logo-footer.png',
  '{{img:heroHome}}': 'assets/images/hero_cleaning_tank.jpg',
  '{{img:heroAbout}}': 'assets/images/about_hero_clean.jpg',
  '{{img:heroServices}}': 'assets/images/services_hero_clean.jpg',
  '{{img:residential}}': 'assets/images/ganga-residential-water-tank-cleaning.jpg',
  '{{img:commercial}}': 'assets/images/ganga-commercial-water-tank-cleaning.jpg',
  '{{img:overhead}}': 'assets/images/ganga-overhead-tank-cleaning.jpg',
  '{{img:underground}}': 'assets/images/ganga-underground-tank-cleaning.jpg',
  '{{img:industrial}}': 'assets/images/ganga-industrial-tank-cleaning.jpg',
  '{{img:sumpSintex}}': 'assets/images/ganga-sump-sintex-tank-cleaning.jpg',
  '{{img:blog1}}': 'assets/images/ganga-blog-why-regular-water-tank-cleaning.jpg',
  '{{img:blog2}}': 'assets/images/ganga-blog-how-often-clean-water-tank.jpg'
};

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // In blog folder, we need ../ before assets/
  const isBlog = filePath.includes('blog/');

  // Replace exact string matches
  for (const [search, replace] of Object.entries(replacements)) {
    const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const finalReplace = (isBlog && !replace.startsWith('../')) ? '../' + replace : replace;
    content = content.replace(regex, finalReplace);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Restored: ' + filePath);
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

console.log('Restore complete.');
