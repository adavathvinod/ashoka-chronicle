import ScrollReveal from "./ScrollReveal";
import studentPortrait from "@/assets/student-portrait.png";

const WhyBBASection = () => {
  return (
    <section id="why-bba" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left: Maroon block */}
        <div className="bg-primary p-12 md:p-20 flex items-center">
          <ScrollReveal>
            <div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">
                Why BBA at Ashoka?
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-8">
                Build the Future of <span className="italic">Business Leadership</span>
              </h2>
              <p className="font-body text-lg text-primary-foreground/80 leading-relaxed mb-8">
                The business world is changing fast, and your education should keep pace. At Ashoka, our BBA program goes beyond a degree; it prepares you to lead with a global mindset.
              </p>
              <p className="font-body text-base text-primary-foreground/70 leading-relaxed">
                Our 10-dimensional BBA curriculum equips you for entrepreneurship, international opportunities, and a successful future career.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Image */}
        <div className="relative min-h-[500px] lg:min-h-0 bg-secondary flex items-end justify-center overflow-hidden">
          <div className="absolute top-8 right-8 font-heading text-[6rem] md:text-[10rem] font-bold text-foreground/5 leading-none select-none">
            BBA
          </div>
          <img
            src={studentPortrait}
            alt="Student at Ashoka"
            className="relative z-10 h-[90%] w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyBBASection;
