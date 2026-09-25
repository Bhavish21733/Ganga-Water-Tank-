import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import { routes } from "@/data/routes";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, MapPin, Clock, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQSection";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { siteImages } from "@/data/images";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);
  if (!location) return constructMetadata({ title: "Not Found" });
  return constructMetadata({
    title: `Cab Service in ${location.name} | City Way Cabs`,
    description: `Book reliable intercity cabs, airport transfers, and outstation rides from ${location.name}. Safe and comfortable travel with City Way Cabs.`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);
  if (!location) notFound();

  // Get routes originating from this city
  const cityRoutes = routes.filter(r => r.origin.toLowerCase() === location.name.toLowerCase()).slice(0, 5);

  return (
    <div className="bg-white">
      {/* 1. Hero Section matching Screenshot */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-200">
             <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-xl">
               Location Hero Image Placeholder
             </div>
          </div>
          {/* Gradients to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-[70%]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>

        <Container className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <div className="text-brand-green font-bold text-xs tracking-widest uppercase mb-4">CAB SERVICES IN</div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6 text-brand-deep-navy">
              {location.name}<br />
              Reliable Rides. <span className="text-brand-green">Every Way.</span>
            </h1>
            <p className="text-brand-text-muted mb-12 text-lg font-medium">
              Book trusted intercity cabs in {location.name} for outstation travel, airport transfers, local trips, hospital visits and more. Safe, comfortable and on-time rides with verified drivers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="w-8 h-8 text-brand-green" />
                <div className="font-bold text-brand-deep-navy text-sm">Local Drivers</div>
                <div className="text-xs text-slate-500">from {location.name}</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-brand-green flex items-center justify-center text-brand-green font-bold">₹</div>
                <div className="font-bold text-brand-deep-navy text-sm">Transparent Pricing</div>
                <div className="text-xs text-slate-500">No hidden charges</div>
              </div>
              <div className="flex flex-col gap-2">
                <Clock className="w-8 h-8 text-brand-green" />
                <div className="font-bold text-brand-deep-navy text-sm">On-Time Guarantee</div>
                <div className="text-xs text-slate-500">Punctual every time</div>
              </div>
              <div className="flex flex-col gap-2">
                <ShieldCheck className="w-8 h-8 text-brand-green" />
                <div className="font-bold text-brand-deep-navy text-sm">24/7 Support</div>
                <div className="text-xs text-slate-500">We&apos;re here for you</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block bg-white p-6 rounded-2xl shadow-premium border border-slate-100 max-w-sm w-full">
            <div className="flex items-start gap-4 mb-4">
               <div className="w-10 h-10 rounded-full bg-brand-light-green flex items-center justify-center shrink-0">
                 <MapPin className="w-5 h-5 text-brand-green" />
               </div>
               <div>
                 <h3 className="font-bold text-brand-deep-navy">{location.name}, Andhra Pradesh</h3>
                 <p className="text-xs text-slate-500 mt-1">Safe. Reliable. Connected.</p>
               </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
               <div className="flex text-brand-yellow">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
               </div>
               <span className="font-bold text-brand-deep-navy text-sm">4.8/5</span>
            </div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">FROM 1200+ CUSTOMERS</p>
          </div>
        </Container>
      </section>

      {/* 2. Popular Routes matching screenshot */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <Container>
           <div className="flex justify-between items-end mb-12">
             <h2 className="text-3xl font-black text-brand-deep-navy">Popular Routes From {location.name}</h2>
             <Link href="/routes" className="text-brand-green font-bold text-sm hover:underline flex items-center gap-1">View all routes <ArrowRight className="w-4 h-4"/></Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
             {cityRoutes.map(route => (
                <Link key={route.slug} href={`/routes/${route.slug}`} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-premium transition-shadow group flex flex-col overflow-hidden">
                   <div className="p-6 text-center flex-1 flex flex-col items-center justify-center">
                     <h3 className="font-bold text-brand-deep-navy mb-2 text-sm">{route.origin}</h3>
                     <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center mb-2">
                       <ArrowRight className="w-3 h-3 text-slate-400" />
                     </div>
                     <h3 className="font-bold text-brand-deep-navy mb-4 text-sm">{route.destination}</h3>
                     <p className="text-xs text-slate-500 font-bold">From ₹1,299</p>
                   </div>
                   <div className="h-32 bg-slate-200 w-full relative">
                      <CloudinaryImage publicId={siteImages.routes.generic.publicId} alt="Route" fill />
                      <div className="absolute -bottom-4 right-4 w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white border-2 border-white shadow-sm group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                   </div>
                </Link>
             ))}
           </div>
        </Container>
      </section>

      {/* 3. Services in City */}
      <section className="py-20 bg-white">
         <Container>
            <h2 className="text-3xl font-black text-brand-deep-navy text-center mb-12">Our Cab Services In {location.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(service => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="p-8 border border-slate-100 rounded-2xl hover:shadow-premium transition-shadow flex flex-col items-center text-center group">
                   <div className="w-16 h-16 rounded-full border border-brand-green/20 bg-brand-light-green flex items-center justify-center mb-6">
                     <ShieldCheck className="w-8 h-8 text-brand-green" />
                   </div>
                   <h3 className="font-bold text-brand-deep-navy mb-3">{service.name}</h3>
                   <p className="text-xs text-slate-500 mb-6 flex-1 font-medium">{service.description}</p>
                   <span className="text-brand-green text-sm font-bold flex items-center gap-1 group-hover:text-brand-dark-green">Book Now <ArrowRight className="w-4 h-4"/></span>
                </Link>
              ))}
            </div>
         </Container>
      </section>

      {/* 4. Why Choose Us (Split Layout matching screenshot) */}
      <section className="py-20 bg-white">
        <Container>
          <div className="bg-brand-light-green rounded-[2.5rem] p-12 lg:p-16 flex flex-col lg:flex-row items-center relative overflow-hidden">
             <div className="lg:w-1/2 relative z-10">
                <h2 className="text-3xl font-black text-brand-deep-navy mb-8">Why Choose Us In {location.name}?</h2>
                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                  {[
                    "Local & Verified Drivers", "On-Time Pickup Guarantee",
                    "Clean & Comfortable Cars", "24/7 Customer Support",
                    "Transparent & Affordable Pricing", "Safe & Reliable Travel"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-brand-green flex items-center justify-center shrink-0">
                         <CheckCircle2 className="w-4 h-4 text-brand-green" />
                      </div>
                      <span className="font-bold text-brand-deep-navy text-sm">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="lg:w-1/2 relative h-64 lg:h-auto mt-12 lg:mt-0 flex justify-end items-center">
                <div className="w-full max-w-md h-48 bg-slate-200/50 rounded-2xl flex items-center justify-center relative">
                   <CloudinaryImage publicId={siteImages.locations.graphic.publicId} alt="Car in city" fill className="rounded-2xl" />
                   <div className="absolute -top-8 right-12 w-16 h-16 rounded-full bg-brand-green flex items-center justify-center border-4 border-white shadow-premium">
                      <MapPin className="w-6 h-6 text-white" />
                   </div>
                </div>
             </div>
          </div>
        </Container>
      </section>

      <FAQSection />
    </div>
  );
}
