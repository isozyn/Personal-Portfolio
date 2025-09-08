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
              With over a decade of experience in strategic business consulting and digital transformation, 
              I specialize in helping organizations navigate complex challenges and achieve sustainable growth. 
              My approach combines analytical rigor with creative problem-solving, delivering solutions that 
              drive measurable results.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of collaboration, innovation, and excellence. Whether working with 
              Fortune 500 companies or emerging startups, I bring the same level of dedication and 
              professional standards that have become my trademark in the industry.
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

          {/* Quick stats */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-lg border">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">By the Numbers</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-gold">150+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-charcoal">12</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold">95%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-serif text-lg font-semibold text-primary mb-3">Education</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="font-medium text-foreground">MBA in Strategy</div>
                  <div className="text-muted-foreground">Harvard Business School</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">BS in Business</div>
                  <div className="text-muted-foreground">Stanford University</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;