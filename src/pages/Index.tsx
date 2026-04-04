import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import WhyBBASection from "@/components/WhyBBASection";
import CampusBentoGrid from "@/components/CampusBentoGrid";
import CareerPathways from "@/components/CareerPathways";
import StartupEcosystem from "@/components/StartupEcosystem";
import RecruitersSection from "@/components/RecruitersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquireSection from "@/components/EnquireSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <AdvantagesSection />
      <WhyBBASection />
      <CampusBentoGrid />
      <CareerPathways />
      <StartupEcosystem />
      <RecruitersSection />
      <TestimonialsSection />
      <EnquireSection />
      <Footer />
    </div>
  );
};

export default Index;
