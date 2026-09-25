import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Refund Policy | City Way Cabs",
});

export default function RefundPage() {
  return (
    <div className="pt-20 pb-32 bg-slate-50 min-h-screen">
      <Container className="max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-border">
        <h1 className="text-4xl font-black text-brand-deep-navy mb-8">Refund Policy</h1>
        <div className="prose max-w-none text-brand-text-muted">
          <p>Last updated: [Development Placeholder Date]</p>
          <h2>Advance Payments</h2>
          <p>If an advance payment was made for a booking that is subsequently cancelled within our allowed cancellation window (typically 2+ hours before pickup), a full refund will be initiated.</p>
          <h2>Processing Time</h2>
          <p>Refunds are typically processed within 5-7 business days depending on your payment method and bank.</p>
          <p><em>Note: This is a placeholder document. Replace with official refund terms.</em></p>
        </div>
      </Container>
    </div>
  );
}
