import { Container } from "@/components/ui/Container";
import { Phone, Clock, ShieldCheck } from "lucide-react";
import { businessData } from "@/data/business";

export function TopBar() {
  return (
    <div className="bg-[#0B1521] text-slate-300 py-2.5 text-xs font-medium hidden lg:block">
      <Container className="flex justify-between items-center">
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-brand-yellow">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-white">24/7 Customer Support</span>
          </div>
          <div className="flex items-center gap-2 text-brand-yellow">
            <Phone className="w-3.5 h-3.5" />
            <span className="text-white">{businessData.phone}</span>
          </div>
        </div>
        <div className="flex gap-6 items-center">
           <div className="flex items-center gap-2 text-brand-green">
             <ShieldCheck className="w-3.5 h-3.5" />
             <span className="text-white">Safe. Reliable. On Time.</span>
           </div>
           <div className="flex gap-4 ml-6 pl-6 border-l border-slate-700">
             <a href="/about" className="hover:text-white transition-colors">About Us</a>
             <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
             <a href="#" className="hover:text-white transition-colors">Partner With Us</a>
           </div>
        </div>
      </Container>
    </div>
  );
}
