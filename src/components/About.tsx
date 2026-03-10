import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Quality workmanship backed by experience",
  "Dedicated customer communication",
  "Tailored solutions for every backyard",
  "Pools built for enjoyment year after year"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2070&auto=format&fit=crop"
                alt="Kevin Ward and Kevin Jones - Founders"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
              <p className="text-accent-font text-xl text-primary font-medium italic mb-2">
                "More than just a pool company"
              </p>
              <p className="text-sm text-gray-600">
                A team passionate about helping homeowners create backyard spaces they'll love.
              </p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
                Built on Experience, Trust, & Quality Craftsmanship
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Together, Kevin Jones and Kevin Ward founded Aquarius Pools with a shared vision: to design and build pools that combine beauty, functionality, and lasting enjoyment. Their combined expertise in pool design, construction, and project management laid the foundation for a company built on professionalism, creativity, and a personal touch.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, Kevin Ward leads the team as owner and operator, overseeing every project from start to finish. He is dedicated to clear communication, attention to detail, and making the pool-building process smooth, enjoyable, and stress-free for every client.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-semibold text-text mb-6 font-heading">
                Why Choose Us
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cta shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
