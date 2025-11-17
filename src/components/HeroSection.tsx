import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary leading-tight">
              Isma-eel <span className="text-gold"><br />
              Cozyn</span>
            </h1>
            <p className="text-xl lg:text-2xl text-charcoal-light font-medium">
              Digital Associate 
            </p>
          
          </div>
          <h3 className="text-lg font-semibold text-primary">Aspiring Software Engineer with a Passion for Innovation</h3>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm driven to build impactful software solutions that blend creativity with cutting-edge technology. Currently, I'm sharpening my skills through Capaciti's intensive training program, where I’m gaining hands-on experience in modern development practices. With a strong foundation in computer science and growing expertise in artificial intelligence, I’m eager to tackle complex challenges and grow as a software engineer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="professional" size="lg" className="font-medium">
              <a href="https://github.com/isozyn" target="_blank" rel="noopener noreferrer">View my GitHub</a>
            </Button>
            <Button variant="outline-professional" size="lg" className="font-medium">
              <a href="/Isma-eel Cozyn Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </Button>
          </div>
        </div>

        {/* Professional Portrait */}
        <div className="relative">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-charcoal/10 rounded-full blur-3xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/professional-portrait.jfif" 
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent circle */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold rounded-full opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-charcoal rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;