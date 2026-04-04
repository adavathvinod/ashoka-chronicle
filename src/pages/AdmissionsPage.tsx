import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import graduation from "@/assets/graduation.jpg";
import { CheckCircle, Calendar, FileText, Users } from "lucide-react";

const steps = [
  { icon: FileText, title: "Submit Application", desc: "Fill the online application form with your academic details and personal information." },
  { icon: Users, title: "Counselling Session", desc: "Attend a one-on-one counselling session with our admissions team." },
  { icon: Calendar, title: "Entrance Assessment", desc: "Complete our aptitude and business awareness assessment." },
  { icon: CheckCircle, title: "Enrollment", desc: "Receive your offer letter and complete the enrollment process." },
];

const faqs = [
  { q: "What is the eligibility for BBA?", a: "Candidates must have completed 10+2 from a recognized board with a minimum of 50% aggregate marks." },
  { q: "Is there a scholarship program?", a: "Yes, merit-based and need-based scholarships are available. Contact admissions for details." },
  { q: "What is the duration of the BBA program?", a: "The BBA program is a 3-year undergraduate course comprising 6 semesters." },
  { q: "Does ACBM offer hostel facilities?", a: "Yes, we have separate, fully-furnished hostel facilities for boys and girls with 24/7 security." },
  { q: "What placement support is offered?", a: "We have a dedicated placement cell with 100+ recruiter partnerships, mock interviews, and resume workshops." },
];

const AdmissionsPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={graduation} alt="Admissions" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 text-center">
          <ScrollReveal>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Admissions Open 2026</p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream leading-tight">
              Begin Your <span className="italic">Journey</span>
            </h1>
            <p className="font-body text-lg text-cream/70 mt-6 max-w-xl mx-auto">
              Take the first step towards a transformative business education at ACBM.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">How to Apply</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Admission <span className="italic">Process</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="relative p-8 bg-card border border-border rounded-sm text-center group hover:border-primary/30 transition-colors">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-body text-sm font-bold">
                    {i + 1}
                  </div>
                  <step.icon className="w-10 h-10 text-primary mx-auto mb-4 mt-4" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Apply Now</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                  Shape Your <span className="italic">Future</span> Today
                </h2>
                <p className="font-body text-lg text-primary-foreground/70 mb-8">
                  Fill in your details and our admissions team will reach out within 24 hours.
                </p>
                <div className="space-y-4">
                  {["Merit-based scholarships available", "Easy EMI options", "Dedicated mentorship from day one"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="font-body text-primary-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass p-8 md:p-10 rounded-sm">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Application Form</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <div className="flex gap-3">
                    <span className="flex items-center px-4 py-3 bg-background border border-border rounded-sm font-body text-muted-foreground text-sm">+91</span>
                    <input type="tel" placeholder="Mobile Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option value="">Select Program *</option>
                    <option value="bba">BBA (10-Dimensional)</option>
                    <option value="bba-hons">BBA Honours</option>
                  </select>
                  <textarea placeholder="Any questions or message?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                  <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-body text-sm font-bold tracking-wider uppercase rounded-sm hover:bg-accent transition-colors">
                    Submit Application
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">FAQs</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Frequently Asked <span className="italic">Questions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border border-border rounded-sm overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-card transition-colors">
                    <span className="font-heading text-lg font-semibold text-foreground pr-4">{faq.q}</span>
                    <span className="font-heading text-2xl text-primary flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="font-body text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdmissionsPage;
