import { motion } from "framer-motion";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Ashoka Campus aerial view"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-cream/80 mb-6"
        >
          Admissions Open 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold text-cream leading-[0.9] mb-6"
        >
          LEARN.<br />LEAD.<br />CONQUER.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-heading text-lg md:text-2xl text-cream/90 italic max-w-2xl"
        >
          Ashoka College of Business Management
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/60">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-cream/80 rounded-full animate-scroll-mouse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
