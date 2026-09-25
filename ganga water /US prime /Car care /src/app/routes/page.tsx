import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/data/routes";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Popular Cab Routes | City Way Cabs",
  description: "Browse our most popular intercity cab routes across North Andhra. Reliable, safe, and comfortable outstation travel.",
});

export default function RoutesPage() {
  return (
    <div className="pt-12 pb-24 bg-slate-50 min-h-screen">
      <Container>
        <SectionHeading 
          title="Popular Travel Routes" 
          subtitle="Explore the high-demand routes we cover with our premium outstation and intercity cab services."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {routes.map((route) => (
            <Link 
              key={route.slug} 
              href={`/routes/${route.slug}`}
              className="group block border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white relative"
            >
              <div className="p-6 text-center border-b border-slate-100">
                <div className="text-slate-500 font-medium mb-2 flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> {route.origin}
                </div>
                <div className="text-slate-300 text-sm mb-2">↓</div>
                <div className="text-brand-navy font-bold text-xl mb-4">{route.destination}</div>
                <div className="inline-flex items-center text-sm font-semibold text-brand-green bg-brand-light-green px-3 py-1 rounded-full group-hover:bg-brand-green group-hover:text-white transition-colors">
                  View Details & Book
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
