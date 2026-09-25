import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
      <Container className="flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-deep-navy rounded-lg flex items-center justify-center text-white font-black text-xl">CW</div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl text-brand-deep-navy tracking-tight">CITY WAY</span>
            <span className="text-[10px] text-brand-green tracking-[0.2em] font-bold uppercase mt-0.5">Cabs</span>
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-bold text-brand-deep-navy">
          <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
          <Link href="/services" className="hover:text-brand-green transition-colors flex items-center gap-1">Services <span className="text-xs">▼</span></Link>
          <Link href="/routes" className="hover:text-brand-green transition-colors">Routes</Link>
          <Link href="/locations" className="hover:text-brand-green transition-colors">Cities</Link>
          <Link href="/about" className="hover:text-brand-green transition-colors">About Us</Link>
          <Link href="/blog" className="hover:text-brand-green transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-brand-green transition-colors">Contact Us</Link>
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="md" className="rounded-full px-6 bg-brand-green hover:bg-brand-dark-green text-white font-bold">
            <a href="tel:+919966465093">Book a Ride</a>
          </Button>
        </div>
      </Container>
    </header>
  );
}
