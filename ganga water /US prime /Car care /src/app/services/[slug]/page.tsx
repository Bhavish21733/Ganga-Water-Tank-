import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return constructMetadata({ title: "Service Not Found" });

  return constructMetadata({
    title: `${service.name} | City Way Cabs`,
    description: service.description,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-20 pb-24">
      <Container>
        <SectionHeading 
          title={service.name} 
          subtitle={service.description}
        />
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mt-12 prose max-w-none">
          <h3 className="text-xl font-bold text-brand-navy mb-4">Why Choose Our {service.name}?</h3>
          <p className="text-slate-600 mb-6">
            City Way Cabs provides reliable and comfortable {service.name.toLowerCase()} tailored to your needs. 
            Enjoy seamless travel with our verified drivers, well-maintained vehicles, and transparent pricing.
          </p>
          <ul className="space-y-2 text-slate-600">
            <li>• Professional and verified local drivers</li>
            <li>• On-time pickup guarantee</li>
            <li>• Clean and comfortable vehicles</li>
            <li>• 24/7 customer support</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
