import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Digital Transformation Initiative",
    client: "Fortune 500 Retailer",
    category: "Strategy & Technology",
    description: "Led comprehensive digital transformation across 500+ stores, implementing omnichannel solutions and data analytics platforms.",
    results: "35% increase in operational efficiency, $50M cost savings annually",
    duration: "18 months",
    teamSize: "25 consultants",
    image: "bg-gradient-to-br from-charcoal to-charcoal-light"
  },
  {
    title: "Market Entry Strategy",
    client: "Tech Startup",
    category: "Strategic Planning",
    description: "Developed go-to-market strategy for SaaS platform expansion into European markets, including competitive analysis and pricing models.",
    results: "Successfully entered 5 new markets, 300% revenue growth",
    duration: "6 months", 
    teamSize: "8 consultants",
    image: "bg-gradient-to-br from-gold to-gold-muted"
  },
  {
    title: "Operational Excellence Program",
    client: "Manufacturing Giant",
    category: "Process Optimization",
    description: "Redesigned supply chain operations and implemented lean manufacturing principles across 12 global facilities.",
    results: "25% reduction in production costs, 40% faster delivery times",
    duration: "12 months",
    teamSize: "15 consultants", 
    image: "bg-gradient-to-br from-silver to-silver-light"
  },
  {
    title: "M&A Integration",
    client: "Private Equity Firm",
    category: "Corporate Development",
    description: "Managed post-merger integration for $2B acquisition, including cultural alignment and system consolidation.",
    results: "Seamless integration completed 3 months ahead of schedule",
    duration: "15 months",
    teamSize: "20 consultants",
    image: "bg-gradient-to-br from-charcoal-light to-primary"
  },
  {
    title: "Data Analytics Platform",
    client: "Healthcare Network",
    category: "Technology Implementation", 
    description: "Designed and implemented enterprise-wide analytics platform for patient outcomes tracking and operational insights.",
    results: "15% improvement in patient satisfaction, $20M cost reduction",
    duration: "10 months",
    teamSize: "12 consultants",
    image: "bg-gradient-to-br from-gold-muted to-gold"
  },
  {
    title: "Organizational Restructure",
    client: "Financial Services",
    category: "Change Management",
    description: "Led organizational transformation initiative including role redesign, skills assessment, and change management program.",
    results: "30% increase in employee engagement, 20% productivity gain",
    duration: "8 months",
    teamSize: "10 consultants",
    image: "bg-gradient-to-br from-primary to-charcoal"
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Portfolio & Case Studies
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of transformational projects that demonstrate strategic thinking, 
            execution excellence, and measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Project thumbnail */}
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-charcoal px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <ExternalLink className="text-white opacity-60 group-hover:opacity-100 transition-opacity" size={20} />
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-charcoal font-medium text-sm">{project.client}</p>
                </div>

                <p className="text-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="bg-muted p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-primary text-sm mb-2">Key Results:</h4>
                  <p className="text-foreground text-sm">{project.results}</p>
                </div>

                {/* Project metrics */}
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-4">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={12} className="mr-1" />
                    {project.teamSize}
                  </div>
                  <div className="flex items-center">
                    <TrendingUp size={12} className="mr-1 text-gold" />
                    Success
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline-professional" size="lg">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;