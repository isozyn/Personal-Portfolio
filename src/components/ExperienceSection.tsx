import { Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    title: "AI Developer & Tech Enthusiast",
    company: "Capaciti",
    location: "South Africa",
    period: "2025 - Present",
    description: "Working on innovative AI solutions and developing cutting-edge applications. Contributing to digital transformation initiatives and leveraging artificial intelligence to solve complex problems.",
    
  }
];

const skills = [
  { category: "AI & Machine Learning", items: ["Generative AI", "Large Language Models", "AI Implementation", "Machine Learning Algorithms"] },
  { category: "Development", items: ["React & TypeScript", "Web Development", "Data Analytics", "Sentiment Analysis"] },
  { category: "Communication", items: ["Professional Emails", "Presentation Skills", "Active Listening", "Interpersonal Skills"] },
  { category: "Specializations", items: ["Fraud Detection", "Portfolio Development", "AI Ethics", "Digital Innovation"] }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-charcoal rounded-full flex items-center justify-center relative z-10">
                    <Award className="text-white" size={20} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card p-6 rounded-lg shadow-lg border">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h3 className="font-serif text-xl font-semibold text-primary">{exp.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-charcoal mb-4">
                      <span className="font-medium text-lg">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center text-muted-foreground">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Expertise */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-primary text-center mb-8">Core Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border">
                <h4 className="font-semibold text-charcoal mb-4 text-center">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{skill}</span>
                      <div className="w-16 h-1 bg-muted rounded-full">
                        <div className="h-full bg-gold rounded-full" style={{ width: `${85 + i * 2}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;