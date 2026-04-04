import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import graduation from "@/assets/graduation.jpg";
import library from "@/assets/library.jpg";
import classroom from "@/assets/classroom.jpg";
import campusLife from "@/assets/campus-life.jpg";

const values = [
  {
    title: "Vision",
    desc: "Empowering students with business excellence and ethical leadership.",
    image: graduation,
  },
  {
    title: "Mission",
    desc: "Foster innovation, entrepreneurship, and holistic student development.",
    image: library,
  },
  {
    title: "Excellence",
    desc: "Academic rigor paired with real-world exposure and global immersion.",
    image: classroom,
  },
  {
    title: "Community",
    desc: "A vibrant campus fostering leadership, camaraderie and growth.",
    image: campusLife,
  },
];

const ValuesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section className="bg-charcoal">
      {/* Desktop horizontal scroll */}
      <div ref={containerRef} className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div className="absolute top-12 left-8 z-10">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-cream/50 mb-2">Our Values</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-cream">
              Ethics That Define<br /><span className="italic text-gold">BBA Visionaries</span>
            </h2>
          </div>
          <motion.div style={{ x }} className="flex gap-8 pl-8 pr-[50vw]" >
            {values.map((value, i) => (
              <div
                key={value.title}
                className="flex-shrink-0 w-[70vw] lg:w-[50vw] h-[70vh] relative group overflow-hidden rounded-sm"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10">
                  <span className="font-body text-sm tracking-[0.2em] uppercase text-gold mb-2 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-5xl lg:text-7xl font-bold text-cream mb-4">
                    {value.title}
                  </h3>
                  <p className="font-body text-lg text-cream/80 max-w-md">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile vertical stack */}
      <div className="md:hidden py-20 px-6 space-y-8">
        <div className="mb-8">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-cream/50 mb-2">Our Values</p>
          <h2 className="font-heading text-3xl font-bold text-cream">
            Ethics That Define <span className="italic text-gold">BBA Visionaries</span>
          </h2>
        </div>
        {values.map((value, i) => (
          <div key={value.title} className="relative h-[60vh] overflow-hidden rounded-sm">
            <img src={value.image} alt={value.title} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="font-body text-sm tracking-[0.2em] uppercase text-gold mb-2 block">0{i + 1}</span>
              <h3 className="font-heading text-4xl font-bold text-cream mb-2">{value.title}</h3>
              <p className="font-body text-base text-cream/80">{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
