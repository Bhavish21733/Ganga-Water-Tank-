/**
 * ============================================================
 * GANGA WATER TANK CLEANING SERVICES — CENTRAL CONFIGURATION
 * ============================================================
 * Edit this file to update business details, contact info,
 * and all image URLs across the entire website.
 * ============================================================
 */

const GANGA_CONFIG = {

  // ─── BUSINESS DETAILS ──────────────────────────────────────
  business: {
    name: "Ganga Water Tank Cleaning Services",
    tagline: "Cleaner Tanks. Better Water. Professional Service You Can Trust.",
    phone: {
      display: "093810 23251",
      link: "tel:+919381023251"
    },
    whatsapp: {
      number: "919381023251",
      link: "https://wa.me/919381023251"
    },
    address: {
      street: "421, Rd No 19",
      area: "Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500033",
      full: "421, Rd No 19, Jubilee Hills, Hyderabad, Telangana 500033"
    },
    maps: {
      shareLink: "https://maps.app.goo.gl/6JCju9vbR6Xzrkta8",
      embedSrc: "https://maps.google.com/maps?q=421+Rd+No+19+Jubilee+Hills+Hyderabad+Telangana+500033&output=embed&z=16",
      directionsLink: "https://maps.app.goo.gl/6JCju9vbR6Xzrkta8"
    }
  },

  // ─── SERVICES (EXACTLY 6) ───────────────────────────────────
  services: [
    {
      id: "residential",
      title: "Residential Water Tank Cleaning",
      shortTitle: "Residential",
      description: "Complete professional cleaning for home water tanks, ensuring safe and hygienic drinking water for your family.",
      icon: "home",
      waMessage: "Residential Water Tank Cleaning"
    },
    {
      id: "commercial",
      title: "Commercial Water Tank Cleaning",
      shortTitle: "Commercial",
      description: "Expert cleaning solutions for commercial buildings, offices, and multi-unit complexes maintaining water safety standards.",
      icon: "building",
      waMessage: "Commercial Water Tank Cleaning"
    },
    {
      id: "overhead",
      title: "Overhead Tank Cleaning",
      shortTitle: "Overhead",
      description: "Specialised cleaning for elevated overhead tanks with safe equipment and professional techniques.",
      icon: "arrow-up",
      waMessage: "Overhead Tank Cleaning"
    },
    {
      id: "underground",
      title: "Underground Tank Cleaning",
      shortTitle: "Underground",
      description: "Deep cleaning of underground sump and storage tanks with thorough sediment removal and disinfection.",
      icon: "arrow-down",
      waMessage: "Underground Tank Cleaning"
    },
    {
      id: "industrial",
      title: "Industrial Tank Cleaning",
      shortTitle: "Industrial",
      description: "Large-scale industrial tank cleaning services for factories, plants and large commercial facilities.",
      icon: "factory",
      waMessage: "Industrial Tank Cleaning"
    },
    {
      id: "sump-sintex",
      title: "Sump & Sintex Tank Cleaning",
      shortTitle: "Sump & Sintex",
      description: "Professional cleaning for sumps and Sintex plastic tanks, ensuring complete hygiene and water quality.",
      icon: "droplets",
      waMessage: "Sump & Sintex Tank Cleaning"
    }
  ],

  // ─── EMERGENCY SERVICE ─────────────────────────────────────
  emergency: {
    badge: "24/7 Emergency Service Available",
    headline: "Need Water Tank Cleaning Right Away?",
    subline: "For urgent water tank cleaning requirements, call or WhatsApp Ganga Water Tank Cleaning Services anytime.",
    cta: "We're available around the clock — don't wait for a scheduled appointment when you need help now."
  },

  // ─── HOW IT WORKS ──────────────────────────────────────────
  process: [
    {
      step: "01",
      title: "Contact Us",
      description: "Call or WhatsApp us with your requirement. Tell us the tank type, size and location."
    },
    {
      step: "02",
      title: "Site Assessment",
      description: "We assess the tank type, condition and cleaning requirements to plan the right approach."
    },
    {
      step: "03",
      title: "Professional Cleaning",
      description: "Our trained team performs thorough cleaning, sanitisation and disinfection."
    },
    {
      step: "04",
      title: "Final Check",
      description: "We complete a quality check and leave your tank ready for safe use."
    }
  ],

  // ─── SITE METADATA ─────────────────────────────────────────
  site: {
    baseUrl: "https://gangawatertankcleaning.com",
    defaultOgImage: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto,q_auto,w_1200/ganga-og-image.jpg"
  },

  // ─── CLOUDINARY IMAGE CONFIGURATION ───────────────────────
  /**
   * HOW TO UPDATE IMAGES:
   * 1. Upload your images to Cloudinary
   * 2. Replace YOUR_CLOUD_NAME with your actual Cloudinary cloud name
   * 3. Replace the asset identifiers (e.g. ganga-hero-main) with your actual asset public IDs
   * 4. Use transformations like f_auto,q_auto for optimized delivery
   *
   * Example Cloudinary URL format:
   * https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto,q_auto,w_1920/ganga-hero-main.jpg
   */
  images: {
    // HERO IMAGES
    heroHome: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop",
    heroAbout: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85&auto=format&fit=crop",
    heroServices: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop",
    heroGallery: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&auto=format&fit=crop",
    heroBlog: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=85&auto=format&fit=crop",
    heroContact: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop",

    // SERVICE IMAGES
    serviceResidential: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    serviceCommercial: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
    serviceOverhead: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&auto=format&fit=crop",
    serviceUnderground: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
    serviceIndustrial: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=80&auto=format&fit=crop",
    serviceSump: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80&auto=format&fit=crop",

    // GALLERY IMAGES
    gallery: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop", thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&auto=format&fit=crop", alt: "Professional technician cleaning an overhead water tank", category: "overhead" },
      { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop", thumb: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75&auto=format&fit=crop", alt: "Team performing commercial building water tank cleaning", category: "commercial" },
      { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop", thumb: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=75&auto=format&fit=crop", alt: "High-pressure cleaning of a residential water tank", category: "residential" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop", thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75&auto=format&fit=crop", alt: "Underground sump tank being professionally cleaned", category: "underground" },
      { src: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1200&q=80&auto=format&fit=crop", thumb: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=600&q=75&auto=format&fit=crop", alt: "Industrial tank cleaning in progress", category: "industrial" },
      { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80&auto=format&fit=crop", thumb: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=75&auto=format&fit=crop", alt: "Sintex plastic tank cleaning service", category: "sump-sintex" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop", thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&auto=format&fit=crop", alt: "Clean water tank after professional servicing", category: "residential" },
      { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop", thumb: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75&auto=format&fit=crop", alt: "Commercial overhead tank cleaning and maintenance", category: "overhead" },
      { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop", thumb: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=75&auto=format&fit=crop", alt: "Professional team with water tank cleaning equipment", category: "commercial" }
    ],

    // BLOG IMAGES
    blog1: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80&auto=format&fit=crop",
    blog2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop",
    blog3: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop",

    // ABOUT / TEAM
    aboutTeam: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop"
  }

};

// ─── WHATSAPP UTILITY ────────────────────────────────────────
function buildWhatsAppURL(message) {
  const encoded = encodeURIComponent(message);
  return `${GANGA_CONFIG.business.whatsapp.link}?text=${encoded}`;
}

function buildServiceWhatsAppURL(serviceName) {
  const message = `Hello Ganga Water Tank Cleaning Services,\n\nI would like to enquire about ${serviceName}.\n\nPlease contact me at your earliest convenience.\n\nThank you.`;
  return buildWhatsAppURL(message);
}

function buildGeneralWhatsAppURL() {
  const message = `Hello Ganga Water Tank Cleaning Services,\n\nI would like to enquire about your water tank cleaning services. Please get in touch.\n\nThank you.`;
  return buildWhatsAppURL(message);
}

// ─── EXPORT (for modules) / expose globally ─────────────────
if (typeof module !== "undefined") {
  module.exports = { GANGA_CONFIG, buildWhatsAppURL, buildServiceWhatsAppURL, buildGeneralWhatsAppURL };
}
