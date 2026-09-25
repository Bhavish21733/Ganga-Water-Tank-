export interface SiteImage {
  publicId: string; // Cloudinary ID or fallback URL
  alt: string;
}

// Development fallback URLs using high-quality Unsplash photography
export const siteImages = {
  home: {
    hero: {
      publicId: "/images/hero-bg.jpg",
      alt: "City Way Cabs driving on a scenic highway"
    },
    heroCabRight: {
      publicId: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
      alt: "Premium white cab on the road"
    },
    storyRoad: {
      publicId: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
      alt: "Scenic road trip travel"
    },
    storyFamily: {
      publicId: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
      alt: "Family enjoying a vacation trip"
    },
    storyAirport: {
      publicId: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
      alt: "Airport terminal transfer"
    },
    teamGeneric: {
      publicId: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      alt: "City Way Cabs team member"
    },
    customerAvatar: {
      publicId: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      alt: "Happy City Way Cabs customer"
    }
  },
  locations: {
    hero: {
      publicId: "https://images.unsplash.com/photo-1582510003544-4d00b7f7415e?q=80&w=1600&auto=format&fit=crop",
      alt: "Vizianagaram city landscape"
    },
    graphic: {
      publicId: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop",
      alt: "Cab driving in the city"
    }
  },
  routes: {
    generic: {
      publicId: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=600&auto=format&fit=crop",
      alt: "Scenic travel route in North Andhra"
    }
  },
  blog: {
    featured: {
      publicId: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
      alt: "Car driving on mountain road"
    },
    thumbnail: {
      publicId: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=400&auto=format&fit=crop",
      alt: "Travel blog thumbnail"
    }
  }
};
