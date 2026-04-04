import logo from "@/assets/asb-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="ASB Logo" className="h-12 w-auto mb-4 brightness-200" />
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              Ashoka School of Business empowers future leaders through global exposure, innovative education, career mentoring, real-world experience, and entrepreneurial growth.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">About School</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Advantages", href: "/#advantages" },
                { label: "Why BBA", href: "/#why-bba" },
                { label: "Admissions", href: "/admissions" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-body text-sm text-cream/60 hover:text-gold transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
                <span className="font-body text-sm text-cream/60">Malkapur, Yadadri Bhuvanagiri, Telangana 508252</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:bbaadmissions@theasb.in" className="font-body text-sm text-cream/60 hover:text-gold transition-colors">bbaadmissions@theasb.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+917207939934" className="font-body text-sm text-cream/60 hover:text-gold transition-colors">+91 7207939934</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((s) => (
                <a key={s} href="#" className="font-body text-sm text-cream/60 hover:text-gold transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="font-body text-sm text-cream/40">
            Copyright © 2025 ACBM, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
