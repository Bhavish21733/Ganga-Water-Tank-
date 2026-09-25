import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import Link from "next/link";
import { Car, Plane, HeartPulse, PartyPopper } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "intercity-travel": Car,
  "airport-transfers": Plane,
  "medical-travel": HeartPulse,
  "events-functions": PartyPopper,
};

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-deep-navy mb-4">Our Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Comfortable rides for every need. Safe, reliable and on time.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => {
            const Icon = iconMap[service.slug] || Car;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-premium-hover transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-light-green flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-deep-navy mb-3">{service.name}</h3>
                <p className="text-sm text-slate-500 mb-6 flex-1">{service.description}</p>
                <span className="text-brand-green font-bold text-sm group-hover:text-brand-dark-green">Book Now →</span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
