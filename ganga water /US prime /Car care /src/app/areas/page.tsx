import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { areas } from "@/data/areas";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Local Service Areas | City Way Cabs",
  description: "Browse specific local areas and neighborhoods served by City Way Cabs.",
});

export default function AreasPage() {
  if (areas.length === 0) {
    return (
      <div className="pt-12 pb-24 min-h-[50vh] flex items-center justify-center">
        <Container>
          <SectionHeading 
            title="Local Service Areas" 
            subtitle="We are continuously expanding our local area coverage. Check back soon or contact us to see if we serve your specific neighborhood."
            align="center"
          />
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-12 pb-24">
      <Container>
        <SectionHeading 
          title="Local Service Areas" 
          subtitle="Specific neighborhoods and localities we actively serve."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {areas.map((area: import("@/data/areas").Area) => (
            <Link 
              key={area.slug} 
              href={`/areas/${area.slug}`}
              className="group border border-slate-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-1 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-green" /> {area.name}
                </h3>
                <p className="text-sm text-slate-500">{area.city}</p>
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
