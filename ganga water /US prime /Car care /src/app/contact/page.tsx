import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { businessData } from "@/data/business";
import { CallButton } from "@/components/shared/CallButton";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us | City Way Cabs",
  description: "Get in touch with City Way Cabs for bookings, support, or general inquiries. Available 24/7.",
});

export default function ContactPage() {
  return (
    <div className="pb-24">
      <div className="bg-brand-navy pt-20 pb-20 text-white">
        <Container>
          <SectionHeading 
            title={<span className="text-white">We&apos;re Here to Help. <br/><span className="text-brand-green">Let&apos;s Connect!</span></span>} 
            subtitle="Have a question, need assistance, or want to book a ride? Reach out to us anytime."
          />
        </Container>
      </div>

      <Container className="mt-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Send Us a Message</h2>
            <p className="text-slate-600 mb-8">Fill out the form and we&apos;ll get back to you as soon as possible.</p>
            <ContactForm />
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Get in Touch</h2>
            <p className="text-slate-600 mb-8">You can reach us through any of the following channels. We&apos;re here 24/7!</p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1"><CallButton /></div>
                <div>
                  <div className="font-bold text-brand-navy">Call Us</div>
                  <div className="text-slate-600">{businessData.phone}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1"><WhatsAppButton /></div>
                <div>
                  <div className="font-bold text-brand-navy">WhatsApp</div>
                  <div className="text-slate-600">Chat with us on WhatsApp</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white border border-slate-200 rounded-md flex items-center justify-center shrink-0">✉️</div>
                <div>
                  <div className="font-bold text-brand-navy">Email Us</div>
                  <div className="text-slate-600">{businessData.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
