import ScrollReveal from "./ScrollReveal";
import recruiters1 from "@/assets/recruiters-1.png";
import recruiters2 from "@/assets/recruiters-2.png";
import recruiters3 from "@/assets/recruiters-3.png";

const RecruitersSection = () => {
  return (
    <section id="recruiters" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Placements</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Prominent <span className="italic">Recruiters</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Marquee rows */}
        <div className="space-y-6">
          {[recruiters1, recruiters2, recruiters3].map((img, i) => (
            <div key={i} className="overflow-hidden">
              <div className="animate-marquee flex" style={{ animationDirection: i % 2 === 0 ? 'normal' : 'reverse' }}>
                <img src={img} alt={`Recruiters row ${i + 1}`} className="h-20 md:h-24 w-auto object-contain flex-shrink-0 mr-12" loading="lazy" />
                <img src={img} alt={`Recruiters row ${i + 1}`} className="h-20 md:h-24 w-auto object-contain flex-shrink-0 mr-12" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;
