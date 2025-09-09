import { Linkedin, Mail, Phone, ArrowUp, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-center items-center">
          {/* Social links */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/isma-eel-cozyn-22a454229/" target="_blank" rel="noopener noreferrer" className="bg-gold/20 p-3 rounded-full hover:bg-gold transition-colors duration-300">
              <Linkedin className="text-gold" size={20} />
            </a>
            <a onClick={() => window.location.href = "mailto:Isma-eel.Cozyn@capaciti.org.za"} className="bg-gold/20 p-3 rounded-full hover:bg-gold transition-colors duration-300">
              <Mail className="text-gold" size={20} />
            </a>
            <a href="https://github.com/isozyn" target="_blank" rel="noopener noreferrer" className="bg-gold/20 p-3 rounded-full hover:bg-gold transition-colors duration-300">
              <GithubIcon className="text-gold" size={20} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;