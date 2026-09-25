# City Way Cabs - Project Handover & Context

This file contains the full context of the project so that you can resume development seamlessly on a new machine with a new AI assistant.

## 1. Project Overview
**Name:** City Way Cabs
**Goal:** Build a production-ready, pixel-perfect website based on specific high-fidelity screenshots provided by the user. Do not use generic layouts; follow the strict visual hierarchy, image treatments, and colors from the reference images.

## 2. Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4 (Custom theme defined in `src/app/globals.css`)
- **Icons:** Lucide React
- **Image Architecture:** Centralized config in `src/data/images.ts`. Images are rendered using `src/components/ui/CloudinaryImage.tsx` which supports Cloudinary IDs, Unsplash (`http`), and local static files (`/`).

## 3. Current State & Where We Stopped
- **Homepage Hero (`src/app/page.tsx`):**
  - **Background:** Set to a local asset (`/images/hero-bg.jpg` — a white sedan on a mountain road) with a strong CSS gradient mask (`bg-gradient-to-r from-white via-white to-transparent`) blending it seamlessly into the left side.
  - **Booking Widget:** Fully structurally rebuilt. The "From" and "To" fields are fused into a single pill with a swap arrow in the middle. "Journey Date" and "Book Your Ride" (dark green `#0A8749` with shadow) sit side-by-side.
  - **Trust Card:** Floating badge on the right ("North Andhra's Most Trusted...").
- **Stats Section:** Full-width strip at the bottom of the hero (10K+ Happy Customers, etc.) with small green circular icons.
- **Footer:** Deep navy (`#0B1521`) 6-column layout with strict white headings. We had to fix a Tailwind v4 CSS precedence bug in `globals.css` where base heading colors were overriding utility classes.

## 4. How to Continue
1. **To the User:** When you open this on your new laptop, upload your reference screenshots again for the AI to see, and copy-paste this document's contents in your first prompt or ask the AI to read `AI_HANDOVER.md`.
2. **To the AI:** Read `src/app/page.tsx` to understand the current layout style. The user wants **exact replication** of their screenshots. Do not invent new UI if a screenshot exists. Check the `public/images/hero-bg.jpg` to ensure local assets are loading properly. Proceed to build out remaining pages (Services, Routes, Cities, About) as requested by the user.

