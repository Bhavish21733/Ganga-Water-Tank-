# Ganga Water Tank Cleaning Services - Environment Setup

This project uses Cloudinary for optimized image delivery and is built for Netlify deployment.

## Secure Netlify Environment Variables

To configure Cloudinary in production, you must set the following environment variables in your **Netlify Dashboard** -> **Site configuration** -> **Environment variables**:

- `CLOUDINARY_CLOUD_NAME`: Required for frontend image URL generation. (Public)
- `CLOUDINARY_API_KEY`: Required if implementing server-side signed uploads.
- `CLOUDINARY_API_SECRET`: **PRIVATE**. Never expose this in the frontend code! Required only for server-side authenticated operations.
- `CLOUDINARY_UPLOAD_PRESET`: Required if unsigned uploads are configured.

### Important Security Note
For this project's static image-delivery setup, the **API Secret is NOT required** by the browser to display public Cloudinary images. 

### Local Development Setup
1. Create a `.env` file in the root directory by copying `.env.example`.
2. Fill in your credentials (do NOT commit the `.env` file; it is already excluded in `.gitignore`).
3. Run `npm run build` to generate the `dist/` directory with production-ready optimized image paths.
