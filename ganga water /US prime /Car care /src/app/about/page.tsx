import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { ShieldCheck, MapPin, Users, Clock } from "lucide-react";
import { CallButton } from "@/components/shared/CallButton";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export const metadata: Metadata = constructMetadata({
  title: "About City Way Cabs | Reliable Transportation in North Andhra",
  description: "Learn about City Way Cabs, our mission, and our commitment to providing safe, comfortable, and reliable intercity travel.",
});

export default function AboutPage() {
  return (
    <div className="pb-24">
      <div className="bg-brand-deep-navy text-white pt-24 pb-32">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Driven by Trust. <br/><span className="text-brand-green">Powered by Service.</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              City Way Cabs was founded with a simple mission: to provide safe, reliable, and comfortable intercity transportation across North Andhra and surrounding destinations.
            </p>
            <div className="flex gap-4">
               <CallButton size="lg" />
               <WhatsAppButton size="lg" className="bg-white text-brand-green hover:bg-slate-100 border-none" />
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="prose max-w-none text-brand-text">
            <h2 className="text-3xl font-bold text-brand-deep-navy mb-6">Our Story</h2>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-6">
              Traveling between cities, airports, and hospitals shouldn&apos;t be stressful. We saw a need for a professional cab service that prioritizes passenger safety, transparent pricing, and punctuality.
            </p>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-6">
              Today, City Way Cabs is the preferred travel partner for thousands of passengers in Vizianagaram, Visakhapatnam, Parvathipuram, Salur, and Srikakulam. Whether it&apos;s a routine airport drop or a critical medical journey, our fleet and verified drivers are ready 24/7.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-brand-border flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="font-bold text-brand-deep-navy mb-2">Safety First</h3>
              <p className="text-sm text-brand-text-muted">Verified drivers and well-maintained vehicles for peace of mind.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-brand-border flex flex-col items-center text-center mt-8">
              <Clock className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="font-bold text-brand-deep-navy mb-2">Punctuality</h3>
              <p className="text-sm text-brand-text-muted">On-time pickups and efficient routing to respect your schedule.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-brand-border flex flex-col items-center text-center -mt-8">
              <MapPin className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="font-bold text-brand-deep-navy mb-2">Local Expertise</h3>
              <p className="text-sm text-brand-text-muted">Drivers who know the best routes across North Andhra.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-brand-border flex flex-col items-center text-center">
              <Users className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="font-bold text-brand-deep-navy mb-2">Customer Focus</h3>
              <p className="text-sm text-brand-text-muted">24/7 support dedicated to making your journey flawless.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
