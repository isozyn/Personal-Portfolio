import { Linkedin, Mail, GithubIcon } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const linkedInUrl = "https://www.linkedin.com/in/isma-eel-cozyn-22a454229/";

  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-center items-center">
          {/* Social links */}
          <div className="flex space-x-4">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-gold/20 p-3 rounded-full hover:bg-gold transition-colors duration-300">
              <Linkedin className="text-gold" size={20} />
            </a>
            <a href="mailto:Isma-eel.Cozyn@capaciti.org.za" aria-label="Email" className="bg-gold/20 p-3 rounded-full hover:bg-gold transition-colors duration-300">
              <Mail className="text-gold" size={20} />
            </a>
            <a href="https://github.com/isozyn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="bg-gold/20 p-3 rounded-full hover:bg-gold transition-colors duration-300">
              <GithubIcon className="text-gold" size={20} />
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          &copy; {currentYear} Isma-eel Cozyn. All rights reserved.
        </p>
        <p className="text-center text-xs text-white/60 mt-2">
          This portfolio and its assets are proprietary to Isma-eel Cozyn – please request permission before reuse.
        </p>
      </div>

    </footer>
  );
};

export default Footer;