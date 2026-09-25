import { businessData } from "@/data/business";
import { Phone, MessageCircle } from "lucide-react";

export function MobileBottomCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-50 flex p-3 gap-3">
      <a 
        href={`tel:${businessData.phone}`} 
        className="flex-1 bg-brand-deep-navy text-white h-14 rounded-xl flex items-center justify-center gap-2 font-bold text-lg active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a 
        href={`https://wa.me/${businessData.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 bg-brand-green text-white h-14 rounded-xl flex items-center justify-center gap-2 font-bold text-lg active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
}
