import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/data/routes";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function PopularRoutes() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeading title="Popular Routes" subtitle="Frequently travelled intercity routes with fixed pricing and reliable service." className="mb-0" />
          <Button variant="outline" asChild className="hidden md:flex">
            <Link href="/routes">View All Routes</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {routes.map((route) => (
            <Link key={route.slug} href={`/routes/${route.slug}`} className="group flex flex-col border border-brand-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="h-48 bg-slate-200 w-full relative overflow-hidden">
                 <div className="absolute inset-0 bg-brand-deep-navy/10 group-hover:bg-transparent transition-colors z-10"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">Image</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                  <span className="text-brand-text-muted font-bold text-lg">{route.origin}</span>
                </div>
                <div className="pl-2.5 border-l-2 border-dashed border-slate-300 ml-2 py-2 my-1"></div>
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="w-5 h-5 text-brand-deep-navy shrink-0" />
                  <span className="text-brand-deep-navy font-black text-xl">{route.destination}</span>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-brand-green bg-brand-light-green px-4 py-2 rounded-lg">Check Fare</span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-brand-green flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Button variant="outline" size="lg" asChild className="w-full">
            <Link href="/routes">View All Routes</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
