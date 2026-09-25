import { notFound } from "next/navigation";
import { routes } from "@/data/routes";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { CallButton } from "@/components/shared/CallButton";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { ArrowRight, Clock, ShieldCheck, CreditCard } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug);
  if (!route) return constructMetadata({ title: "Route Not Found" });

  return constructMetadata({
    title: `${route.origin} to ${route.destination} Cab Service | City Way Cabs`,
    description: route.description,
  });
}

export default async function RoutePage({ params }: Props) {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug);

  if (!route) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Route Hero */}
      <div className="bg-brand-navy text-white pt-20 pb-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-brand-green font-semibold mb-6 text-sm uppercase tracking-wider">
              <Link href={`/locations/${route.origin.toLowerCase()}`} className="hover:text-white transition-colors">
                {route.origin}
              </Link>
              <ArrowRight className="w-4 h-4 text-slate-500" />
              <span>{route.destination}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cab Service from <br/>
              <span className="text-brand-green">{route.origin} to {route.destination}</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              {route.description} Book reliable, safe, and comfortable outstation travel with verified drivers.
            </p>
            <div className="flex flex-wrap gap-4">
               <CallButton size="lg" title="Call to Book" />
               <WhatsAppButton size="lg" title="WhatsApp Us" className="bg-white text-green-700 hover:bg-slate-100 border-none" />
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 prose max-w-none">
            <h2 className="text-2xl font-bold text-brand-navy mb-6 border-b pb-4">About this Route</h2>
            <p className="text-slate-700 mb-6 text-lg">
              Traveling from <strong>{route.origin}</strong> to <strong>{route.destination}</strong> is seamless with City Way Cabs. We offer both one-way drops and round-trip bookings to ensure your journey is planned perfectly around your schedule.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 my-10">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                <ShieldCheck className="w-8 h-8 mx-auto text-brand-green mb-3" />
                <h4 className="font-bold text-brand-navy text-sm">Verified Drivers</h4>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                <Clock className="w-8 h-8 mx-auto text-brand-green mb-3" />
                <h4 className="font-bold text-brand-navy text-sm">On-Time Guarantee</h4>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                <CreditCard className="w-8 h-8 mx-auto text-brand-green mb-3" />
                <h4 className="font-bold text-brand-navy text-sm">Transparent Fares</h4>
              </div>
            </div>

            <h3 className="text-xl font-bold text-brand-navy mb-4">Fare Information</h3>
            <p className="text-slate-700">
              Pricing for the <strong>{route.origin} to {route.destination}</strong> route varies based on vehicle selection (Sedan, SUV), one-way vs round-trip booking, and current availability. 
              <strong> Contact us directly via Phone or WhatsApp for the exact current fare.</strong>
            </p>
          </div>

          <div>
            <div className="bg-brand-light-green p-6 rounded-2xl border border-green-100 sticky top-28">
              <h3 className="font-bold text-xl text-brand-navy mb-4">Need Help Booking?</h3>
              <p className="text-sm text-slate-700 mb-6">Our travel experts are available 24/7 to help you plan your journey from {route.origin}.</p>
              <div className="flex flex-col gap-3">
                <CallButton className="w-full" />
                <WhatsAppButton className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
