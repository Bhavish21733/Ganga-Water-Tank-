import { notFound } from "next/navigation";
import { areas } from "@/data/areas";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { CallButton } from "@/components/shared/CallButton";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return areas.map((area: import("@/data/areas").Area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a: import("@/data/areas").Area) => a.slug === slug);
  if (!area) return constructMetadata({ title: "Area Not Found" });

  return constructMetadata({
    title: `Cab Service in ${area.name}, ${area.city} | City Way Cabs`,
    description: area.description || `Reliable cab services in ${area.name}, ${area.city}. Book a ride today.`,
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a: import("@/data/areas").Area) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="pt-20 pb-24">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading 
            title={`Cab Service in ${area.name}`}
            subtitle={`Serving ${area.name} and surrounding neighborhoods in ${area.city}.`}
          />
          
          <div className="flex gap-4 mt-8 mb-12">
             <CallButton title={`Book in ${area.name}`} />
             <WhatsAppButton />
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 prose max-w-none">
          <p className="text-slate-700 mb-4">
            Need a ride to or from <strong>{area.name}</strong>? City Way Cabs provides fast, reliable, and comfortable transportation. 
            We connect {area.name} to major airports, railway stations, and intercity destinations.
          </p>
          <p className="text-slate-700">
            For services extending beyond the local area, see our main <Link href={`/locations/${area.city.toLowerCase()}`} className="text-brand-green font-semibold">{area.city}</Link> city hub.
          </p>
        </div>
      </Container>
    </div>
  );
}
