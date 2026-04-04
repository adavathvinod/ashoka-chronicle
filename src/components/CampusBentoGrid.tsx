import ScrollReveal from "./ScrollReveal";
import classroom from "@/assets/classroom.jpg";
import library from "@/assets/library.jpg";
import startup from "@/assets/startup.jpg";
import hostel from "@/assets/hostel.jpg";
import campusLife from "@/assets/campus-life.jpg";
import graduation from "@/assets/graduation.jpg";

const facilities = [
  { title: "Smart Classrooms & Labs", desc: "AV tools, projectors, and business simulation.", image: classroom, span: "lg:col-span-2 lg:row-span-2" },
  { title: "Learning Resource Centre", desc: "Digital access & collaborative study spaces.", image: library, span: "" },
  { title: "Startup Incubation Centre", desc: "Mentorship, seed funding, and workspace.", image: startup, span: "" },
  { title: "On-Campus Accommodation", desc: "Secure hostels with a homely environment.", image: hostel, span: "lg:col-span-2" },
  { title: "Sports Arena & Gymnasium", desc: "Air-conditioned gym with trained professionals.", image: campusLife, span: "" },
  { title: "Vibrant Campus Life", desc: "Clubs, activities, events & friendships.", image: graduation, span: "" },
];

const CampusBentoGrid = () => {
  return (
    <section id="campus" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Campus Life</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              World-Class <span className="italic">Facilities</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {facilities.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08} className={item.span}>
              <div className="relative h-full group overflow-hidden rounded-sm cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-cream mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-cream/70">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusBentoGrid;
