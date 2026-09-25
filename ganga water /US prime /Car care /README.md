# City Way Cabs - Production Website

A premium, highly-optimized, SEO-driven Next.js application built for City Way Cabs.

## Architecture
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4
- **Deployment:** Netlify Ready
- **Images:** Cloudinary
- **Icons:** Lucide React

## Local Development
```bash
npm install
npm run dev
```

## Content Management (Data Layer)
The website acts as a static headless frontend. Data is driven by the files in `src/data/`:
- `business.ts` - Core NAP data, phones, socials.
- `locations.ts` - Cities served (dynamically builds `/locations/[city]`).
- `services.ts` - Services offered (dynamically builds `/services/[slug]`).
- `routes.ts` - High intent routes (dynamically builds `/routes/[slug]`).

## Environment Variables
Create a `.env.local` based on `.env.example`:
```env
NEXT_PUBLIC_SITE_URL=https://www.citywaycabs.com
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Production Checklist Completed
- SEO Metadata & Canonical URLs
- Dynamic XML Sitemap & Robots.txt
- Accessible UI & Navigation
- High-Performance SSG Routes
- Cloudinary Integration
- Netlify `netlify.toml` prepared
