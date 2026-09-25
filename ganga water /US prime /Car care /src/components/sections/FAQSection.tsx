import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  { q: "How do I book a ride?", a: "You can easily book a ride by calling our 24/7 support line, sending a WhatsApp message, or using the booking form on our website." },
  { q: "What payment methods are accepted?", a: "We accept cash, UPI, and major digital wallets for your convenience." },
  { q: "Can I cancel or reschedule my booking?", a: "Yes, you can cancel or reschedule your ride by contacting our support team at least 2 hours before the scheduled pickup time." },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-slate-50">
      <Container className="max-w-4xl">
        <SectionHeading title="Frequently Asked Questions" align="center" />
        <div className="space-y-4 mt-12">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-brand-navy text-lg mb-2">{faq.q}</h3>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
