import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/asb-logo.png";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why BBA", href: "#why-bba" },
  { label: "Advantages", href: "#advantages" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else navigate("/" + href);
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Ashoka School of Business" className="h-10 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm font-medium tracking-widest uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => handleNavClick("/contact")} className="font-body text-sm font-semibold tracking-wider uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors bg-transparent border-none cursor-pointer">
              Inquire
            </button>
            <button onClick={() => handleNavClick("/admissions")} className="px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-accent transition-colors cursor-pointer">
              Apply Now
            </button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-primary-foreground"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-cream"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-heading text-4xl md:text-5xl text-cream hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#enquire"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8 px-10 py-4 bg-primary text-primary-foreground font-body text-lg font-semibold tracking-wider uppercase rounded-sm"
              >
                Apply Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
