import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "Malkapur, Yadadri Bhuvanagiri, Telangana 508252" },
  { icon: Mail, label: "Email Us", value: "bbaadmissions@theasb.in", href: "mailto:bbaadmissions@theasb.in" },
  { icon: Phone, label: "Call Us", value: "+91 7207939934", href: "tel:+917207939934" },
  { icon: Clock, label: "Office Hours", value: "Mon – Sat, 9:00 AM – 5:00 PM" },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  return (
    <div className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 font-heading text-[15rem] font-bold text-primary-foreground leading-none select-none">
            HELLO
          </div>
        </div>
        <div className="relative z-10 text-center">
          <ScrollReveal>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Get in Touch</p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Contact <span className="italic">Us</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.1}>
                <div className="p-8 bg-card border border-border rounded-sm text-center hover:border-primary/30 transition-colors h-full">
                  <info.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{info.label}</h3>
                  {info.href ? (
                    <a href={info.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">{info.value}</a>
                  ) : (
                    <p className="font-body text-sm text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Send a Message</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                  We'd Love to <span className="italic">Hear</span> From You
                </h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    <input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    <input type="text" placeholder="Subject *" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <textarea placeholder="Your Message *" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                  <button type="submit" className="px-10 py-4 bg-primary text-primary-foreground font-body text-sm font-bold tracking-wider uppercase rounded-sm hover:bg-accent transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="h-full min-h-[400px] rounded-sm overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0!2d78.85!3d17.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzAwLjAiTiA3OMKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ACBM Campus Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
