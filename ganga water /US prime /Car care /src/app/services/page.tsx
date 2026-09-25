import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Our Services | City Way Cabs",
  description: "Explore our premium cab services including intercity travel, airport transfers, medical travel, and events.",
});

export default function ServicesPage() {
  return (
    <div className="pt-12 pb-24">
      <Container>
        <SectionHeading 
          title="Premium Cab Services" 
          subtitle="Discover our range of transportation services tailored to meet your travel needs across North Andhra and beyond."
          align="center"
        />
      </Container>
      <ServicesOverview />
    </div>
  );
}
