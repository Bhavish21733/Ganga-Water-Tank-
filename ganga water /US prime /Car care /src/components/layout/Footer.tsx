import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Globe, MessageCircle, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B1521] pt-20 pb-8 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          
          {/* Logo Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-brand-deep-navy font-black text-xl">CW</div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-xl text-white tracking-tight">CITY WAY</span>
                <span className="text-[10px] text-brand-green tracking-[0.2em] font-bold uppercase mt-0.5">Cabs</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed max-w-xs pr-4">
              Connecting towns, cities and people with safe, reliable and comfortable intercity travel.
            </p>
            <div className="flex gap-4">
               <button className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"><Globe className="w-4 h-4"/></button>
               <button className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"><MessageCircle className="w-4 h-4"/></button>
               <button className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors"><Share2 className="w-4 h-4"/></button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/services/intercity-travel" className="hover:text-brand-green transition-colors">Intercity Travel</Link></li>
              <li><Link href="/services/airport-transfers" className="hover:text-brand-green transition-colors">Airport Transfers</Link></li>
              <li><Link href="/services/medical-travel" className="hover:text-brand-green transition-colors">Medical Travel</Link></li>
              <li><Link href="/services/events-functions" className="hover:text-brand-green transition-colors">Events & Functions</Link></li>
            </ul>
          </div>

          {/* Top Routes */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Top Routes</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/routes/vizianagaram-to-visakhapatnam" className="hover:text-brand-green transition-colors">Vizianagaram to Vizag</Link></li>
              <li><Link href="/routes/bobbili-to-airport" className="hover:text-brand-green transition-colors">Bobbili to Airport</Link></li>
              <li><Link href="/routes/parvathipuram-to-vizag" className="hover:text-brand-green transition-colors">Parvathipuram to Vizag</Link></li>
              <li><Link href="/routes/salur-to-vizianagaram" className="hover:text-brand-green transition-colors">Salur to Vizianagaram</Link></li>
              <li><Link href="/routes" className="hover:text-white transition-colors mt-2 inline-block">View All Routes</Link></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Cities</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/locations/vizianagaram" className="hover:text-brand-green transition-colors">Vizianagaram</Link></li>
              <li><Link href="/locations/parvathipuram" className="hover:text-brand-green transition-colors">Parvathipuram</Link></li>
              <li><Link href="/locations/bobbili" className="hover:text-brand-green transition-colors">Bobbili</Link></li>
              <li><Link href="/locations/salur" className="hover:text-brand-green transition-colors">Salur</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors mt-2 inline-block">More Cities</Link></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-green transition-colors">Partner With Us</Link></li>
              <li><Link href="/blog" className="hover:text-brand-green transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} City Way Cabs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
