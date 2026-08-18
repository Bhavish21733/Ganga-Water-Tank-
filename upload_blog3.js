require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.uploader.upload('assets/images/ganga-blog-overhead-vs-underground.jpg', {
  public_id: 'ganga-water-tank-cleaning/blog/blog-overhead-vs-underground',
  overwrite: true,
  invalidate: true,
})
.then(result => {
  console.log('Upload successful!');
  console.log('Secure URL:', result.secure_url);
})
.catch(error => {
  console.error('Upload failed:', error);
});
