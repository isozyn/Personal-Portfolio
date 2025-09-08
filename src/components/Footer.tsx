import { Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Bio */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">John Professional</h3>
            <p className="text-silver-light leading-relaxed mb-6">
              Strategic Business Consultant dedicated to transforming organizations through 
              innovative solutions, proven methodologies, and measurable results.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gold/20 p-3 rounded-full hover:bg-gold transition-colors duration-300">
                <Linkedin className="text-gold" size={20} />
              </a>
              <a href="#" className="bg-gold/20 p-3 rounded-full hover:bg-gold transition-colors duration-300">
                <Mail className="text-gold" size={20} />
              </a>
              <a href="#" className="bg-gold/20 p-3 rounded-full hover:bg-gold transition-colors duration-300">
                <Phone className="text-gold" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "About Me",
                "Experience", 
                "Portfolio",
                "Testimonials",
                "Contact"
              ].map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} 
                     className="text-silver-light hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Strategic Consulting",
                "Digital Transformation",
                "Operational Excellence",
                "M&A Advisory",
                "Change Management"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-silver-light hover:text-gold transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-charcoal-light mt-12 pt-8">
          <div className="max-w-md">
            <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-silver-light text-sm mb-4">
              Subscribe to receive insights on business strategy and industry trends.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-charcoal-light border border-silver/30 rounded text-white placeholder-silver"
              />
              <Button variant="gold" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-light">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-silver-light text-sm">
            © 2024 John Professional Consulting. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-silver-light hover:text-gold text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-silver-light hover:text-gold text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="bg-gold/20 p-2 rounded-full hover:bg-gold transition-colors duration-300"
            >
              <ArrowUp className="text-gold" size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;