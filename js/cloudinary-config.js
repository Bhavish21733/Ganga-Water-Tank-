const cloudinaryConfig = {
  cloudName: "", // To be populated with provided Cloud Name
  images: {
    heroHome: "ganga-water-tank-cleaning/hero/hero-home-water-tank-cleaning",
    heroAbout: "ganga-water-tank-cleaning/hero/hero-about-water-tank-cleaning",
    heroServices: "ganga-water-tank-cleaning/hero/hero-services-water-tank-cleaning",
    heroGallery: "ganga-water-tank-cleaning/hero/hero-gallery-water-tank-cleaning",
    heroBlog: "ganga-water-tank-cleaning/hero/hero-blog-water-tank-cleaning",
    heroContact: "ganga-water-tank-cleaning/hero/hero-contact-water-tank-cleaning",

    residential: "ganga-water-tank-cleaning/services/residential-water-tank-cleaning",
    commercial: "ganga-water-tank-cleaning/services/commercial-water-tank-cleaning",
    overhead: "ganga-water-tank-cleaning/services/overhead-water-tank-cleaning",
    underground: "ganga-water-tank-cleaning/services/underground-water-tank-cleaning",
    industrial: "ganga-water-tank-cleaning/services/industrial-water-tank-cleaning",
    sumpSintex: "ganga-water-tank-cleaning/services/sump-sintex-water-tank-cleaning",
    emergency: "ganga-water-tank-cleaning/services/emergency-water-tank-cleaning",

    blog1: "ganga-water-tank-cleaning/blog/blog-regular-water-tank-cleaning",
    blog2: "ganga-water-tank-cleaning/blog/blog-water-tank-cleaning-frequency",
    blog3: "ganga-water-tank-cleaning/blog/blog-overhead-vs-underground",
    
    logo: "ganga-water-tank-cleaning/branding/logo",
    logoFooter: "ganga-water-tank-cleaning/branding/logo-footer",
    favicon: "ganga-water-tank-cleaning/branding/favicon"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = cloudinaryConfig;
} else {
  window.cloudinaryConfig = cloudinaryConfig;
}
