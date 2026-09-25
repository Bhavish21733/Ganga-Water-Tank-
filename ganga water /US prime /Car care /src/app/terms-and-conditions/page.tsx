import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions | City Way Cabs",
});

export default function TermsPage() {
  return (
    <div className="pt-20 pb-32 bg-slate-50 min-h-screen">
      <Container className="max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-border">
        <h1 className="text-4xl font-black text-brand-deep-navy mb-8">Terms & Conditions</h1>
        <div className="prose max-w-none text-brand-text-muted">
          <p>Last updated: [Development Placeholder Date]</p>
          <h2>Booking and Fares</h2>
          <p>All bookings are subject to availability. Estimated fares provided via phone or WhatsApp are subject to change based on actual distance traveled, waiting times, and toll charges.</p>
          <h2>Cancellations</h2>
          <p>We kindly request that cancellations be made at least 2 hours prior to the scheduled pickup time.</p>
          <h2>Passenger Responsibilities</h2>
          <p>Passengers are expected to behave appropriately and respect the vehicle and driver. Any damage caused to the vehicle by the passenger may result in additional cleaning or repair charges.</p>
          <p><em>Note: This is a placeholder document. Replace with official terms before operating.</em></p>
        </div>
      </Container>
    </div>
  );
}
