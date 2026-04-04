import ScrollReveal from "./ScrollReveal";
import startupImg from "@/assets/startup.jpg";

const StartupEcosystem = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={startupImg} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="relative container mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Entrepreneurship</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream max-w-5xl mx-auto leading-tight mb-8">
            Where Your Vision Turns into <span className="italic">Thriving Startups</span>
          </h2>
          <p className="font-body text-lg text-cream/70 max-w-3xl mx-auto mb-10">
            We nurture every idea with expert mentoring, live projects, funding access, and unmatched exposure to build business leaders through our robust Entrepreneurship & Start-up Ecosystem.
          </p>
          <a
            href="#enquire"
            className="inline-block px-10 py-4 bg-gold text-charcoal font-body text-sm font-bold tracking-wider uppercase rounded-sm hover:bg-cream transition-colors"
          >
            Start Your Journey
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StartupEcosystem;
