import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Cities We Serve | City Way Cabs",
  description: "Explore the major cities and locations where City Way Cabs provides reliable intercity and local cab services.",
});

export default function LocationsPage() {
  return (
    <div className="pt-12 pb-24">
      <Container>
        <SectionHeading 
          title="Cities We Serve" 
          subtitle="We connect major towns, cities, and airports across North Andhra with safe, reliable, and comfortable intercity rides."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {locations.map((location) => (
            <Link 
              key={location.slug} 
              href={`/locations/${location.slug}`}
              className="group border border-slate-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-1 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-green" /> {location.name}
                </h3>
                <p className="text-sm text-slate-500">{location.district}, {location.state}</p>
              </div>
              <div className="text-brand-green font-bold group-hover:translate-x-1 transition-transform">
                →
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
