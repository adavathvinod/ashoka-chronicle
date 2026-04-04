import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const EnquireSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  return (
    <section id="enquire" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/admissions.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-charcoal/70" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Admissions Open 2026</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
                Shape Your <span className="italic">Future</span> Today
              </h2>
              <p className="font-body text-lg text-cream/70">
                Let's clear your doubts and shape your future together.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass p-8 md:p-10 rounded-sm">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Enquire Now</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Enter Full Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <div className="flex gap-3">
                  <span className="flex items-center px-4 py-3 bg-background border border-border rounded-sm font-body text-muted-foreground text-sm">+91</span>
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Id *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-body text-sm font-bold tracking-wider uppercase rounded-sm hover:bg-accent transition-colors"
                >
                  Enroll Now
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EnquireSection;
