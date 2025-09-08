import { Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    title: "Senior Strategic Consultant",
    company: "McKinsey & Company",
    location: "New York, NY",
    period: "2020 - Present",
    description: "Leading digital transformation initiatives for Fortune 500 clients, driving operational efficiency improvements averaging 25%.",
    achievements: [
      "Managed $50M+ transformation projects",
      "Led cross-functional teams of 15+ consultants",
      "Developed proprietary analytics frameworks"
    ]
  },
  {
    title: "Business Development Director",
    company: "Deloitte Consulting",
    location: "Chicago, IL", 
    period: "2018 - 2020",
    description: "Spearheaded business development initiatives and client relationship management for the technology practice.",
    achievements: [
      "Generated $15M in new revenue annually",
      "Expanded client portfolio by 40%",
      "Implemented agile methodologies"
    ]
  },
  {
    title: "Strategy Manager",
    company: "Bain & Company",
    location: "Boston, MA",
    period: "2015 - 2018", 
    description: "Delivered strategic recommendations for private equity portfolio companies and Fortune 1000 enterprises.",
    achievements: [
      "Supported 20+ successful exits",
      "Improved EBITDA margins by 18% average",
      "Mentored junior consultants"
    ]
  },
  {
    title: "Associate Consultant",
    company: "Boston Consulting Group",
    location: "Boston, MA",
    period: "2012 - 2015",
    description: "Conducted market analysis and competitive intelligence for clients across multiple industries.",
    achievements: [
      "Delivered 25+ strategic assessments",
      "Recognized as top performer 3 years running",
      "Specialized in healthcare & technology"
    ]
  }
];

const skills = [
  { category: "Strategy", items: ["Strategic Planning", "Market Analysis", "Competitive Intelligence", "Business Model Innovation"] },
  { category: "Technology", items: ["Digital Transformation", "Data Analytics", "Cloud Migration", "AI Implementation"] },
  { category: "Leadership", items: ["Team Management", "Change Management", "Executive Coaching", "Stakeholder Engagement"] },
  { category: "Industry", items: ["Healthcare", "Financial Services", "Technology", "Manufacturing"] }
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

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
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
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-primary">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-foreground text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-primary">Core Expertise</h3>
            
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border">
                <h4 className="font-semibold text-charcoal mb-4">{skillGroup.category}</h4>
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