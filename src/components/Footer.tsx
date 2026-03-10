export default function Footer() {
  return (
    <footer className="bg-text text-white/80 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold tracking-tight font-heading text-white">
              Aquarius Pools
            </span>
            <p className="text-sm leading-relaxed max-w-xs">
              Transforming backyards into beautiful, relaxing oases across the Upstate. Built on experience, trust, and quality craftsmanship.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="hover:text-white transition-colors text-sm">Home</a>
              <a href="#about" className="hover:text-white transition-colors text-sm">About Us</a>
              <a href="#services" className="hover:text-white transition-colors text-sm">Services</a>
              <a href="#gallery" className="hover:text-white transition-colors text-sm">Gallery</a>
              <a href="#testimonials" className="hover:text-white transition-colors text-sm">Testimonials</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Services</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Custom Pool Design</li>
              <li>Pool Installation</li>
              <li>Pool Renovations</li>
              <li>Vinyl Liner Replacement</li>
              <li>Routine Servicing</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Aquarius Pools of the Upstate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
