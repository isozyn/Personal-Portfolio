const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main bio */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I am a Digital Associate at Capaciti with a passion for building efficient and impactful digital solutions. My technical expertise spans multiple programming languages, including Python, Java, JavaScript, HTML, and CSS, which I use to develop both practical applications and creative projects.
            </p>
               
            <p className="text-lg text-foreground leading-relaxed">
               I hold a certification in Data Science with Python from the University of Cape Town (UCT), where I gained hands-on experience working with data analysis, visualization, and machine learning techniques.  
            </p>  
            <p className="text-lg text-foreground leading-relaxed">
              Currently, I am at Capaciti, where I am expanding my knowledge, completing multiple courses, and gaining valuable certifications to strengthen my professional foundation.
            </p>

            
            <div className="pt-6">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Integrity & Transparency",
                  "Innovation & Excellence", 
                  "Client-Centric Approach",
                  "Continuous Learning"
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Me Image */}
          <div className="relative">
            <div className="relative w-full h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-charcoal/10 rounded-lg blur-2xl"></div>
              <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/about-me.jpg" 
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gold rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-charcoal rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;