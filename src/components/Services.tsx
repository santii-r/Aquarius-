import { motion } from 'motion/react';
import { Droplets, Hammer, Wrench, RefreshCw, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Custom Pool Design",
    description: "Your vision brought to life. We carefully consider your property layout, budget, desired features, and long-term maintenance needs to create a pool design that is both visually stunning and highly functional.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Pool Installation",
    description: "Built right the first time. From site preparation to final details, we manage the entire build while keeping you informed along the way using proven construction methods and quality materials.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Pool Renovations",
    description: "Modern updates & upgrades. Whether your pool needs a simple refresh or a complete transformation, we offer professional pool renovation services designed to restore beauty, function, and efficiency.",
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Vinyl Liner Replacement",
    description: "Restore beauty & function. We provide professional vinyl liner replacement services, helping you choose the right pattern and fit for your pool with precise installation and a smooth finish.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?q=80&w=2084&auto=format&fit=crop"
  },
  {
    title: "Routine Pool Servicing",
    description: "Keep your pool pristine all season. Routine cleaning, water testing, equipment inspections, and seasonal openings/closings so you can enjoy your pool without the worry.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ef0e4c?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Comprehensive Pool Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From initial design to ongoing maintenance, we offer a full suite of services to ensure your backyard oasis remains perfect year after year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/30">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-text mb-4 font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
