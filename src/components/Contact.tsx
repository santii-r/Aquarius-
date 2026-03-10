import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600">
            Contact us today to schedule your consultation and experience personalized pool service from design through completion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-6 group hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text mb-2 font-heading">Call Us</h3>
                <p className="text-gray-600 mb-1">We're here to answer your questions.</p>
                <a href="tel:864-906-5330" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
                  864-906-5330
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-6 group hover:shadow-xl transition-shadow">
              <div className="bg-cta/10 p-4 rounded-full group-hover:bg-cta/20 transition-colors">
                <Mail className="w-8 h-8 text-cta" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text mb-2 font-heading">Email Us</h3>
                <p className="text-gray-600 mb-1">Send us details about your project.</p>
                <a href="mailto:info@aquariuspoolsupstate.com" className="text-lg font-medium text-cta hover:text-cta/80 transition-colors">
                  info@aquariuspoolsupstate.com
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-400 shrink-0" />
                <div>
                  <h4 className="font-semibold text-text mb-1">Service Area</h4>
                  <p className="text-gray-600 text-sm">Serving the entire Upstate South Carolina region.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gray-400 shrink-0" />
                <div>
                  <h4 className="font-semibold text-text mb-1">Business Hours</h4>
                  <p className="text-gray-600 text-sm">Mon-Fri: 8am - 5pm<br/>Sat-Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-text mb-6 font-heading">Request a Consultation</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" required />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Needed</label>
                <select id="service" className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white text-gray-700">
                  <option value="">Select a service...</option>
                  <option value="new-pool">New Custom Pool</option>
                  <option value="renovation">Pool Renovation</option>
                  <option value="liner">Vinyl Liner Replacement</option>
                  <option value="service">Routine Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details</label>
                <textarea id="message" rows={4} className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Tell us about your backyard dreams..." required></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg mt-2">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
