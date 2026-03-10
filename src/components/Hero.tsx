import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful custom pool"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-text/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-text/60 via-transparent to-background" />
        
        {/* Animated SVG Blob */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] opacity-30 blur-3xl pointer-events-none"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary">
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.3,-2.3C97.8,13.4,92.8,29.3,83.5,42.5C74.2,55.7,60.6,66.2,45.8,73.4C31,80.6,15.5,84.5,-0.6,85.5C-16.7,86.5,-33.4,84.6,-47.5,76.9C-61.6,69.2,-73.1,55.7,-81.1,40.6C-89.1,25.5,-93.6,8.8,-92.4,-7.4C-91.2,-23.6,-84.3,-39.3,-73.4,-51.5C-62.5,-63.7,-47.6,-72.4,-32.6,-78.5C-17.6,-84.6,-2.5,-88.1,12.1,-86.3C26.7,-84.5,41.3,-77.4,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-accent-font italic text-accent text-xl md:text-2xl mb-4 block">
            Aquarius Pools of the Upstate
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Backyard into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Oasis You've Always Imagined</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
            We design and build high-quality custom pools that bring relaxation, fun, and lasting memories to your home.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-cta text-white font-medium hover:bg-cta/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20 w-full sm:w-auto justify-center flex"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-sm tracking-widest uppercase text-accent-font">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
