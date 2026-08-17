require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploads = [
  { file: 'logo.png', public_id: 'ganga-water-tank-cleaning/branding/logo' },
  { file: 'logo-footer.png', public_id: 'ganga-water-tank-cleaning/branding/logo-footer' },
  { file: 'favicon-source-square.png', public_id: 'ganga-water-tank-cleaning/branding/favicon' },
  
  { file: 'hero_cleaning_tank.jpg', public_id: 'ganga-water-tank-cleaning/hero/hero-home-water-tank-cleaning' },
  { file: 'about_hero_clean.jpg', public_id: 'ganga-water-tank-cleaning/hero/hero-about-water-tank-cleaning' },
  { file: 'services_hero_clean.jpg', public_id: 'ganga-water-tank-cleaning/hero/hero-services-water-tank-cleaning' },
  
  { file: 'ganga-residential-water-tank-cleaning.jpg', public_id: 'ganga-water-tank-cleaning/services/residential-water-tank-cleaning' },
  { file: 'ganga-commercial-water-tank-cleaning.jpg', public_id: 'ganga-water-tank-cleaning/services/commercial-water-tank-cleaning' },
  { file: 'ganga-overhead-tank-cleaning.jpg', public_id: 'ganga-water-tank-cleaning/services/overhead-water-tank-cleaning' },
  { file: 'ganga-underground-tank-cleaning.jpg', public_id: 'ganga-water-tank-cleaning/services/underground-water-tank-cleaning' },
  { file: 'ganga-industrial-tank-cleaning.jpg', public_id: 'ganga-water-tank-cleaning/services/industrial-water-tank-cleaning' },
  { file: 'ganga-sump-sintex-tank-cleaning.jpg', public_id: 'ganga-water-tank-cleaning/services/sump-sintex-water-tank-cleaning' },
  
  { file: 'ganga-blog-why-regular-water-tank-cleaning.jpg', public_id: 'ganga-water-tank-cleaning/blog/blog-regular-water-tank-cleaning' },
  { file: 'ganga-blog-how-often-clean-water-tank.jpg', public_id: 'ganga-water-tank-cleaning/blog/blog-water-tank-cleaning-frequency' },
  // The 3rd blog image isn't in assets/images explicitly or is reused. Let's upload commercial_cleaning.jpg as blog3 if needed
  { file: 'commercial_cleaning.jpg', public_id: 'ganga-water-tank-cleaning/blog/blog-overhead-vs-underground' }
];

async function uploadImages() {
  for (const upload of uploads) {
    const filePath = path.join(__dirname, 'assets/images', upload.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      continue;
    }
    
    try {
      console.log(`Uploading ${upload.file}...`);
      const result = await cloudinary.uploader.upload(filePath, {
        public_id: upload.public_id,
        overwrite: true
      });
      console.log(`Successfully uploaded to: ${result.secure_url}`);
    } catch (error) {
      console.error(`Failed to upload ${upload.file}:`, error);
    }
  }
}

uploadImages();
