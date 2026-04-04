import ScrollReveal from "./ScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arun Kumar",
    title: "Data Scientist, Associate Manager, PepsiCo",
    quote: "ASB's BBA program stands out for its commitment to experiential learning and industry alignment. Students won't just graduate with a degree, but with clarity, direction, and the skills to make an immediate impact.",
  },
  {
    name: "Srinivas Rao",
    title: "HR, L N B Group",
    quote: "The integration of industry experts, live projects, and leadership modules makes ASB's BBA program one of the most forward-thinking undergraduate programs in the country.",
  },
  {
    name: "Ram Gopal",
    title: "CEO, ARGS Consultants",
    quote: "ASB has raised the bar in undergraduate education. Their BBA program is a powerhouse of learning, mentorship, and practical exposure — ideal for any student looking to build a strong foundation in business.",
  },
  {
    name: "Dr. Ravindra Penmatsa",
    title: "Certified Life & Executive Coach, Acumentor",
    quote: "ASB's BBA program is exactly what the industry needs today — a curriculum that blends academic fundamentals with real-world business skills. Their focus on mindset mastery and leadership is both rare and remarkable.",
  },
  {
    name: "Dr. Ch S Durga Prasad",
    title: "Academic Leader, AIMS",
    quote: "I'm impressed with the 10-dimensional approach ASB has adopted. It equips students with not just knowledge, but confidence, adaptability, and entrepreneurial thinking.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Expert Insights</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              What <span className="italic">Industry Leaders</span> Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.08}>
              <div className="p-8 bg-background rounded-sm border border-border h-full flex flex-col">
                <Quote size={32} className="text-primary/20 mb-4 flex-shrink-0" />
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                  "{item.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading text-lg font-semibold text-foreground">{item.name}</p>
                  <p className="font-body text-sm text-muted-foreground">{item.title}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
