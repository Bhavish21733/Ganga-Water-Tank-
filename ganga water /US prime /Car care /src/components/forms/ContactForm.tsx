"use client";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="sr-only">Your Name</label>
          <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green" />
        </div>
        <div>
          <label className="sr-only">Phone Number</label>
          <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="sr-only">Email Address</label>
          <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green" />
        </div>
        <div>
          <label className="sr-only">Subject</label>
          <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green bg-white text-slate-500">
            <option value="">Subject *</option>
            <option value="booking">New Booking</option>
            <option value="inquiry">General Inquiry</option>
            <option value="complaint">Complaint</option>
          </select>
        </div>
      </div>
      <div>
        <label className="sr-only">Your Message</label>
        <textarea rows={5} placeholder="Your Message *" required className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"></textarea>
      </div>
      <Button type="submit" size="lg" className="w-full md:w-auto">Send Message</Button>
    </form>
  );
}
