import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | City Way Cabs",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 pb-32 bg-slate-50 min-h-screen">
      <Container className="max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-border">
        <h1 className="text-4xl font-black text-brand-deep-navy mb-8">Privacy Policy</h1>
        <div className="prose max-w-none text-brand-text-muted">
          <p>Last updated: [Development Placeholder Date]</p>
          <h2>Information We Collect</h2>
          <p>When you book a cab with City Way Cabs, we collect necessary information such as your name, phone number, pickup/drop locations, and travel dates to fulfill your service request.</p>
          <h2>How We Use Your Information</h2>
          <p>We use your information exclusively to arrange your transportation, communicate with you regarding your booking, and ensure your safety during the journey.</p>
          <h2>Data Protection</h2>
          <p>We implement standard security measures to protect your personal information. We do not sell your personal data to third parties.</p>
          <p><em>Note: This is a placeholder policy. Ensure this is reviewed and replaced by official legal counsel before production operations.</em></p>
        </div>
      </Container>
    </div>
  );
}
