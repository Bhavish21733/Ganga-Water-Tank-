import { Container } from "@/components/ui/Container";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { siteImages } from "@/data/images";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, MapPin, Clock, Star, Users, Target, Eye, CalendarCheck, CheckCircle2, Quote, ArrowRight, UserCheck, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-white min-h-[750px] flex items-center">
      {/* Right Side Background Image - Soft fade into white */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0">
        {/* Gradients to blend the image seamlessly into the white left side and bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent z-10 lg:w-[75%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10 h-32 bottom-0"></div>
        <CloudinaryImage publicId={siteImages.home.hero.publicId} alt="Mountain Road Travel" fill priority className="object-cover object-right" />
      </div>
      
      <Container className="relative z-20 w-full">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8 items-start">
          
          {/* Left Column: Text & Booking Widget */}
          <div className="max-w-[700px] pt-4">
            <div className="text-brand-green font-bold text-[15px] mb-5 tracking-wide">Reliable Intercity Travel Starts Here</div>
            <h1 className="text-5xl md:text-[64px] font-black leading-[1.05] mb-6 text-brand-deep-navy tracking-tight">
              Your Journey.<br />
              <span className="text-brand-green">Our Responsibility.</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8 max-w-xl font-medium leading-relaxed">
              Book trusted rides between towns, cities, airports, hospitals and important destinations with verified local travel partners.
            </p>

            {/* Inline Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-12">
              {[
                { icon: UserCheck, text: "Verified Drivers" },
                { icon: ShieldCheck, text: "Transparent Pricing" },
                { icon: Clock, text: "On-Time Guarantee" },
                { icon: ShieldCheck, text: "24/7 Support" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-[18px] h-[18px] text-brand-green" />
                  <span className="text-[13px] font-bold text-brand-deep-navy">{item.text}</span>
                </div>
              ))}
            </div>

            {/* BOOKING WIDGET */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgb(0,0,0,0.08)] border border-slate-100 mt-8 relative z-20">
              {/* Tabs */}
              <div className="flex items-center gap-8 border-b border-slate-100 mb-6">
                 <button className="text-brand-green font-bold border-b-2 border-brand-green pb-3 -mb-[1px]">One Way</button>
                 <button className="text-slate-400 font-bold hover:text-slate-600 pb-3 -mb-[1px]">Round Trip</button>
              </div>
              
              <div className="space-y-4">
                {/* Locations Row (Single Container as seen in screenshot) */}
                <div className="flex flex-col md:flex-row items-center relative border border-slate-200 rounded-2xl shadow-sm">
                  
                  {/* From */}
                  <div className="flex-1 bg-white p-4 w-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="text-[12px] font-bold text-slate-800 mb-1">From</div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                      <span className="text-[15px]">Enter pickup location</span>
                    </div>
                  </div>
                  
                  {/* Divider line for desktop */}
                  <div className="hidden md:block w-[1px] h-12 bg-slate-200 z-0"></div>
                  {/* Divider line for mobile */}
                  <div className="md:hidden w-full h-[1px] bg-slate-200 z-0"></div>
                  
                  {/* Swap Button */}
                  <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-xl shadow-[0_4px_12px_rgb(0,0,0,0.1)] border border-slate-100 flex items-center justify-center text-slate-500 hover:text-brand-green z-10 transition-transform hover:scale-105">
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* To */}
                  <div className="flex-1 bg-white p-4 w-full rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none hover:bg-slate-50 transition-colors cursor-pointer pl-4 md:pl-8">
                    <div className="text-[12px] font-bold text-slate-800 mb-1">To</div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-4 h-4 text-brand-green" />
                      <span className="text-[15px]">Enter drop location</span>
                    </div>
                  </div>
                </div>

                {/* Date & Submit Row */}
                <div className="flex flex-col md:flex-row gap-4 pt-2">
                  <div className="flex-1 bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="text-[12px] font-bold text-slate-800 mb-1">Journey Date</div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4 text-brand-green" />
                      <span className="text-[15px]">Select date</span>
                    </div>
                  </div>
                  
                  <button className="flex-1 bg-[#0A8749] hover:bg-[#086a39] text-white rounded-2xl font-bold text-[16px] flex items-center justify-center gap-2 shadow-[0_8px_20px_rgb(10,135,73,0.3)] transition-all h-[76px] md:h-auto hover:-translate-y-0.5">
                    Book Your Ride <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: Floating Trust Badge */}
          <div className="hidden lg:flex justify-end pt-12">
             <div className="bg-white p-5 rounded-2xl shadow-[0_12px_40px_rgb(0,0,0,0.08)] flex flex-col gap-1 border border-slate-100 w-[240px]">
                 <div className="text-[11px] text-slate-500 font-bold">North Andhra&apos;s Most</div>
                 <div className="text-sm font-black text-brand-deep-navy mb-1">Trusted Cab Service</div>
                 <div className="flex items-center gap-1 text-brand-yellow mb-1">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                   <span className="text-brand-deep-navy font-black text-[11px] ml-1">4.8/5</span>
                 </div>
                 <div className="text-[10px] text-slate-400 font-bold tracking-wider flex items-center gap-1.5 mt-0.5">
                    <Users className="w-3 h-3" /> from 1200+ customers
                 </div>
             </div>
          </div>
          
        </div>
      </Container>
    </section>

      {/* 2. OUR STORY */}
      <section className="py-20">
        <Container className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 h-[500px]">
             <div className="h-full bg-slate-200 rounded-3xl overflow-hidden flex items-center justify-center shadow-sm">
                <CloudinaryImage publicId={siteImages.home.storyRoad.publicId} alt={siteImages.home.storyRoad.alt} fill className="rounded-3xl" />
             </div>
             <div className="flex flex-col gap-4 h-full">
                <div className="h-1/2 bg-slate-200 rounded-3xl overflow-hidden flex items-center justify-center shadow-sm">
                  <CloudinaryImage publicId={siteImages.home.storyFamily.publicId} alt={siteImages.home.storyFamily.alt} fill className="rounded-3xl" />
                </div>
                <div className="h-1/2 bg-slate-200 rounded-3xl overflow-hidden flex items-center justify-center shadow-sm relative">
                  <div className="absolute inset-0 bg-brand-deep-navy/10"></div>
                  <CloudinaryImage publicId={siteImages.home.storyAirport.publicId} alt={siteImages.home.storyAirport.alt} fill className="rounded-3xl" />
                </div>
             </div>
          </div>
          <div>
            <div className="text-brand-green font-bold text-xs tracking-widest uppercase mb-4">OUR STORY</div>
            <h2 className="text-4xl md:text-[42px] font-black leading-[1.15] mb-8 text-brand-deep-navy">
              Making Intercity Travel<br/>
              <span className="text-brand-green">Simple, Safe & Reliable</span>
            </h2>
            <div className="space-y-6 text-[17px] text-slate-600 font-medium">
              <p>City Way Cabs was founded with a simple idea - to make intercity travel in North Andhra easier, safer and more reliable.</p>
              <p>We connect verified local drivers with travelers who need comfortable rides between towns, cities, airports, hospitals and special destinations.</p>
              <p>From daily commutes to airport transfers and long outstation trips, we ensure every journey is smooth, transparent and enjoyable.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. STATS */}
      <section className="border-t border-b border-slate-100 bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-between items-center gap-8 divide-x divide-slate-100">
             {[
               { num: "10K+", label: "Happy Customers", icon: Users },
               { num: "500+", label: "Daily Rides", icon: Target },
               { num: "50+", label: "Routes Covered", icon: MapPin },
               { num: "25+", label: "Cities Connected", icon: ShieldCheck },
             ].map((stat, i) => (
               <div key={i} className={`flex items-start gap-4 ${i !== 0 ? 'pl-8' : ''} flex-1 min-w-[200px]`}>
                 <div className="w-10 h-10 rounded-full bg-brand-light-green flex items-center justify-center shrink-0 mt-1">
                   <stat.icon className="w-5 h-5 text-brand-green" />
                 </div>
                 <div>
                   <div className="text-[32px] font-black text-brand-deep-navy leading-none mb-2">{stat.num}</div>
                   <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                 </div>
               </div>
             ))}
          </div>
        </Container>
      </section>

      {/* 4. MISSION / VISION */}
      <section className="py-16">
        <Container className="grid md:grid-cols-2 gap-8">
           <div className="bg-white border border-slate-100 p-10 rounded-3xl shadow-sm flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full border-2 border-brand-light-green bg-brand-light-green/30 flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-brand-green" />
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-deep-navy mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">To provide safe, reliable and affordable intercity travel solutions through technology and trusted local driver partners.</p>
              </div>
           </div>
           <div className="bg-white border border-slate-100 p-10 rounded-3xl shadow-sm flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full border-2 border-brand-light-green bg-brand-light-green/30 flex items-center justify-center shrink-0">
                <Eye className="w-8 h-8 text-brand-green" />
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-deep-navy mb-3">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">To become the most trusted intercity travel brand in India, connecting every town and city with comfort and confidence.</p>
              </div>
           </div>
        </Container>
      </section>

      {/* 5. HOW WE WORK */}
      <section className="py-20 text-center">
        <Container>
           <h2 className="text-3xl font-black text-brand-deep-navy mb-4">How We Work</h2>
           <p className="text-slate-500 mb-16">Booking your ride is simple and hassle-free.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-slate-100 -z-10"></div>
              {[
                { step: 1, icon: CalendarCheck, title: "Submit Booking", desc: "Enter your trip details and submit." },
                { step: 2, icon: CheckCircle2, title: "We Confirm Your Ride", desc: "We verify and confirm your booking." },
                { step: 3, icon: Users, title: "Driver Assigned", desc: "You'll get driver details and vehicle info." },
                { step: 4, icon: MapPin, title: "Enjoy Your Journey", desc: "Sit back and enjoy a safe and comfortable ride." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                   <div className="w-20 h-20 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 relative">
                     <item.icon className="w-8 h-8 text-brand-deep-navy" />
                     <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-brand-green text-white font-bold flex items-center justify-center border-2 border-white shadow-sm">
                       {item.step}
                     </div>
                   </div>
                   <h3 className="font-bold text-brand-deep-navy mb-2">{item.title}</h3>
                   <p className="text-sm text-slate-500 px-4">{item.desc}</p>
                </div>
              ))}
           </div>
        </Container>
      </section>

      {/* 6. CORE VALUES */}
      <section className="py-16">
        <Container>
           <h2 className="text-3xl font-black text-brand-deep-navy text-center mb-12">Our Core Values</h2>
           <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "Safety First", desc: "Your safety is our top priority." },
                { icon: Star, title: "Honest Pricing", desc: "Transparent pricing with no hidden charges." },
                { icon: Users, title: "Trust & Respect", desc: "We build relationships on trust and respect." },
                { icon: Clock, title: "Punctuality", desc: "We value your time and are always on time." },
                { icon: Target, title: "Customer First", desc: "We go the extra mile for our customers." },
                { icon: ShieldCheck, title: "Secure Travels", desc: "Advanced tracking and safety measures." }
              ].map((val, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-premium transition-shadow">
                    <div className="w-12 h-12 rounded-full border border-brand-green/20 bg-brand-light-green flex items-center justify-center shrink-0">
                      <val.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-deep-navy mb-1">{val.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </Container>
      </section>

      {/* 7. OUR TEAM */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-center">
         <Container>
            <h2 className="text-3xl font-black text-brand-deep-navy mb-4">Our Team</h2>
            <p className="text-slate-500 mb-12">A passionate team working behind the scenes to make your journey amazing.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
               {[
                 { name: "Ramesh Kumar", role: "Founder & CEO" },
                 { name: "Sandeep Reddy", role: "Operations Head" },
                 { name: "Anjali Devi", role: "Customer Experience Head" },
                 { name: "Vikram Kumar", role: "Technology Head" },
                 { name: "Mahesh Babu", role: "Business Development Head" }
               ].map((member, i) => (
                 <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                    <div className="h-48 relative"><CloudinaryImage publicId={siteImages.home.teamGeneric.publicId} alt="Team Member" fill /></div>
                    <div className="p-4">
                      <h4 className="font-bold text-brand-deep-navy text-sm mb-1">{member.name}</h4>
                      <p className="text-[11px] font-bold text-brand-text-muted uppercase tracking-wider">{member.role}</p>
                    </div>
                 </div>
               ))}
            </div>
         </Container>
      </section>

      {/* 8. TESTIMONIALS & TRUST (Split) */}
      <section className="py-24 bg-white">
        <Container className="grid lg:grid-cols-2 gap-16">
           <div>
              <h2 className="text-3xl font-black text-brand-deep-navy mb-10">What Our Customers Say</h2>
              <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
                 <Quote className="absolute top-8 left-8 w-12 h-12 text-brand-light-green -z-10" />
                 <p className="text-lg text-brand-deep-navy font-medium leading-relaxed mb-8 relative z-10">
                   &quot;Excellent service! The driver was on time, very polite and the car was in great condition. Highly recommend City Way Cabs for intercity travel.&quot;
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full relative overflow-hidden"><CloudinaryImage publicId={siteImages.home.customerAvatar.publicId} alt="Customer" fill /></div>
                    <div>
                      <h4 className="font-bold text-brand-deep-navy">Ramesh Kumar</h4>
                      <p className="text-xs text-slate-500">Vizianagaram to Visakhapatnam</p>
                    </div>
                    <div className="flex gap-1 ml-auto text-brand-yellow">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                 </div>
              </div>
           </div>
           
           <div>
              <h2 className="text-3xl font-black text-brand-deep-navy mb-10">A Brand You Can Trust</h2>
              <div className="relative">
                <div className="space-y-6">
                  {[
                    "Verified & Experienced Drivers",
                    "Well Maintained Vehicles",
                    "Secure & Comfortable Journeys",
                    "Thousands of Happy Customers"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full border-2 border-brand-green flex items-center justify-center shrink-0">
                         <CheckCircle2 className="w-4 h-4 text-brand-green" />
                      </div>
                      <span className="font-bold text-brand-deep-navy text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden sm:block">
                   <ShieldCheck className="w-48 h-48 text-brand-green" />
                </div>
              </div>
           </div>
        </Container>
      </section>

      {/* 9. BOTTOM CTA BANNER */}
      <section className="pb-24 pt-12">
        <Container>
          <div className="bg-[#0B1521] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl border border-slate-800">
            
            {/* City Skyline Silhouette Background */}
            <div className="absolute bottom-0 left-0 w-full md:w-[70%] opacity-10 pointer-events-none">
               <svg viewBox="0 0 1000 200" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full object-cover">
                  <path d="M0,200 L0,150 L50,150 L50,100 L100,100 L100,140 L150,140 L150,80 L200,80 L200,120 L250,120 L250,60 L300,60 L300,100 L350,100 L350,40 L400,40 L400,90 L450,90 L450,50 L500,50 L500,110 L550,110 L550,70 L600,70 L600,130 L650,130 L650,90 L700,90 L700,140 L750,140 L750,100 L800,100 L800,150 L850,150 L850,110 L900,110 L900,160 L950,160 L950,120 L1000,120 L1000,200 Z" />
               </svg>
            </div>

            <div className="relative z-10 flex items-center gap-6 md:gap-8">
               {/* Vibrant Map Pin Graphic matching the original */}
               <div className="hidden md:flex relative w-20 h-20 md:w-24 md:h-24 items-center justify-center shrink-0">
                  <div className="absolute inset-0 bg-brand-green/20 rounded-full"></div>
                  <div className="absolute inset-3 bg-brand-green/40 rounded-full"></div>
                  <div className="relative w-10 h-10 md:w-12 md:h-12 bg-brand-green rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                     <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
               </div>
               
               <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-[40px] font-black text-white mb-3 tracking-tight">Ready for your next journey?</h2>
                  <p className="text-slate-300 text-lg font-medium">Book your ride with City Way Cabs and travel with confidence.</p>
               </div>
            </div>

            <Button size="lg" className="relative z-10 whitespace-nowrap bg-brand-green hover:bg-brand-dark-green text-white font-bold px-8 h-14 rounded-xl flex items-center gap-2 shadow-premium border-b-4 border-brand-dark-green active:border-b-0 active:translate-y-1 transition-all">
              Book Your Ride Now <ArrowRight className="w-5 h-5"/>
            </Button>
          </div>
        </Container>
      </section>

    </div>
  );
}
