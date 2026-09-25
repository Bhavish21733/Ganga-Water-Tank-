import { Container } from "@/components/ui/Container";
import { ShieldCheck, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative w-full bg-slate-50 overflow-hidden pb-32">
      {/* Background styling to match screenshot */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-slate-200" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}>
         {/* Placeholder for the large hero image */}
         <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
            <span className="text-slate-500 font-bold">Main Hero Image (Car on Road)</span>
         </div>
         {/* Overlay gradient */}
         <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent w-[40%] left-0"></div>
      </div>

      <Container className="relative z-10 pt-20 pb-40">
        <div className="max-w-xl">
          <div className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4">Reliable Intercity Travel Starts Here</div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black leading-[1.1] mb-6 text-brand-deep-navy">
            Your Journey.<br />
            <span className="text-brand-green">Our Responsibility.</span>
          </h1>
          <p className="text-lg text-brand-text-muted mb-10 max-w-lg leading-relaxed">
            Book trusted rides between towns, cities, airports, hospitals and important destinations with verified local travel partners.
          </p>

          {/* Features row */}
          <div className="flex flex-wrap gap-4 text-sm font-bold text-brand-deep-navy mb-12">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-green" /> Verified Drivers</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-green" /> Transparent Pricing</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-brand-green" /> On-Time Guarantee</div>
          </div>
        </div>

        {/* Floating Trust Badge */}
        <div className="absolute top-24 right-0 lg:right-20 bg-white p-4 rounded-xl shadow-premium border border-slate-100 hidden lg:block">
           <div className="text-xs text-brand-text-muted font-bold mb-1">North Andhra&apos;s Most</div>
           <div className="text-sm font-black text-brand-deep-navy mb-2">Trusted Cab Service</div>
           <div className="flex items-center gap-1 text-brand-yellow mb-1">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
             <span className="text-brand-deep-navy font-bold text-xs ml-1">4.9/5</span>
           </div>
           <div className="text-[10px] text-brand-text-muted">from 1200+ customers</div>
        </div>
      </Container>

      {/* Floating Booking Widget */}
      <Container className="relative z-20 -mt-32">
         <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6 md:p-8 max-w-4xl">
            <div className="flex gap-8 border-b border-slate-100 pb-4 mb-6 text-sm font-bold">
               <button className="text-brand-green border-b-2 border-brand-green pb-4 -mb-[17px]">One Way</button>
               <button className="text-slate-400 hover:text-brand-deep-navy transition-colors pb-4 -mb-[17px]">Round Trip</button>
            </div>
            
            <div className="grid md:grid-cols-[1fr_1fr_auto] gap-4 items-end">
               <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                 <MapPin className="w-5 h-5 text-brand-green" />
                 <div className="w-full">
                   <div className="text-xs text-slate-500 font-bold mb-1">From</div>
                   <input type="text" placeholder="Enter pickup location" className="bg-transparent w-full outline-none font-bold text-brand-deep-navy placeholder:text-slate-400" />
                 </div>
               </div>
               
               <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                 <MapPin className="w-5 h-5 text-slate-400" />
                 <div className="w-full">
                   <div className="text-xs text-slate-500 font-bold mb-1">To</div>
                   <input type="text" placeholder="Enter drop location" className="bg-transparent w-full outline-none font-bold text-brand-deep-navy placeholder:text-slate-400" />
                 </div>
               </div>
               
               <Button size="lg" className="h-[72px] px-8 rounded-xl bg-brand-green hover:bg-brand-dark-green text-white font-bold w-full md:w-auto">
                 Book Your Ride →
               </Button>
            </div>
         </div>
      </Container>
    </section>
  );
}
