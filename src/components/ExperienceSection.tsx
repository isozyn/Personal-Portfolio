import { Calendar, MapPin, Award } from "lucide-react";

const getProgressColor = () => "from-blue-400 via-sky-400 to-cyan-400";

const getLevelLabel = () => "Average";

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
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Generative AI", level: 60 },
      { name: "Large Language Models", level: 60 },
      { name: "AI Implementation", level: 60 },
      { name: "Machine Learning Algorithms", level: 60 }
    ]
  },
  {
    category: "Development",
    items: [
      { name: "React & TypeScript", level: 60 },
      { name: "Web Development", level: 60 },
      { name: "Data Analytics", level: 60 },
      { name: "Sentiment Analysis", level: 60 }
    ]
  },
  {
    category: "Communication",
    items: [
      { name: "Professional Emails", level: 60 },
      { name: "Presentation Skills", level: 60 },
      { name: "Active Listening", level: 60 },
      { name: "Interpersonal Skills", level: 60 }
    ]
  },
  {
    category: "Specializations",
    items: [
      { name: "Fraud Detection", level: 60 },
      { name: "Portfolio Development", level: 60 },
      { name: "AI Ethics", level: 60 },
      { name: "Digital Innovation", level: 60 }
    ]
  }
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
                <div className="space-y-4">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between text-sm text-foreground mb-1">
                        <span className="font-medium text-charcoal">{skill.name}</span>
                        <span className="text-xs uppercase tracking-wide text-muted-foreground">
                          {getLevelLabel()}
                        </span>
                      </div>
                      <div className="relative h-3 bg-muted/60 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${getProgressColor()}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-white drop-shadow">
                          {skill.level}%
                        </span>
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