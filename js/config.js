/**
 * Ganga Water Tank Cleaning Services
 * Centralized Configuration Data
 */
const GangaConfig = {
  businessName: 'Ganga Water Tank Cleaning Services',
  phone: '093810 23251',
  phoneLink: 'tel:+919381023251',
  whatsappNumber: '+91 93810 23251',
  whatsappBaseUrl: 'https://wa.me/919381023251',
  googleMapsUrl: 'https://maps.app.goo.gl/k1jv4RCPon2CrzXSA',
  services: [
    {
      id: 'residential-water-tank-cleaning',
      name: 'Residential Water Tank Cleaning',
      whatsappMessage: 'Hello, I would like to enquire about Residential Water Tank Cleaning.'
    },
    {
      id: 'commercial-water-tank-cleaning',
      name: 'Commercial Water Tank Cleaning',
      whatsappMessage: 'Hello, I would like to enquire about Commercial Water Tank Cleaning.'
    },
    {
      id: 'overhead-tank-cleaning',
      name: 'Overhead Tank Cleaning',
      whatsappMessage: 'Hello, I would like to enquire about Overhead Tank Cleaning.'
    },
    {
      id: 'underground-tank-cleaning',
      name: 'Underground Tank Cleaning',
      whatsappMessage: 'Hello, I would like to enquire about Underground Tank Cleaning.'
    },
    {
      id: 'industrial-tank-cleaning',
      name: 'Industrial Tank Cleaning',
      whatsappMessage: 'Hello, I would like to enquire about Industrial Tank Cleaning.'
    },
    {
      id: 'sump-sintex-tank-cleaning',
      name: 'Sump & Sintex Tank Cleaning',
      whatsappMessage: 'Hello, I would like to enquire about Sump & Sintex Tank Cleaning.'
    }
  ]
};

// Expose configuration globally
window.GangaConfig = GangaConfig;
