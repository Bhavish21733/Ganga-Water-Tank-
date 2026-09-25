import { Container } from "@/components/ui/Container";
import { Users, Route, ShieldCheck, MapPin } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Customers", value: "10K+" },
  { icon: ShieldCheck, label: "Daily Rides", value: "500+" },
  { icon: Route, label: "Routes Covered", value: "50+" },
  { icon: MapPin, label: "Cities Connected", value: "25+" },
];

export function TrustStatistics() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-brand-border">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 divide-x-0 md:divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 group">
              <div className="w-16 h-16 bg-brand-light-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-green transition-all duration-300">
                <stat.icon className="w-8 h-8 text-brand-green group-hover:text-white transition-colors" />
              </div>
              <div className="text-4xl font-black text-brand-deep-navy mb-2 tracking-tight">{stat.value}</div>
              <div className="text-base text-brand-text-muted font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
