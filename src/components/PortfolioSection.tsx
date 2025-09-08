import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Calendar, Code, Star } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Analytics Dashboard",
    category: "Full-Stack Development",
    description: "Built a comprehensive analytics dashboard for e-commerce platforms with real-time data visualization, sales tracking, and customer insights.",
    technologies: ["React", "Node.js", "MongoDB", "D3.js"],
    features: "Real-time analytics, interactive charts, user segmentation",
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
    image: "bg-gradient-to-br from-charcoal to-charcoal-light"
  },
  {
    title: "Project Management SaaS",
    category: "SaaS Application",
    description: "Developed a project management tool with team collaboration features, task tracking, and automated reporting capabilities.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    features: "Real-time collaboration, automated reports, time tracking",
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
    image: "bg-gradient-to-br from-gold to-gold-muted"
  },
  {
    title: "AI-Powered Content Generator",
    category: "Machine Learning",
    description: "Created an AI content generation platform that helps businesses create marketing copy, blog posts, and social media content.",
    technologies: ["Python", "FastAPI", "OpenAI API", "React"],
    features: "AI content generation, template library, SEO optimization",
    status: "Beta",
    demoUrl: "#",
    githubUrl: "#",
    image: "bg-gradient-to-br from-silver to-silver-light"
  },
  {
    title: "Mobile Fitness Tracking App",
    category: "Mobile Development",
    description: "Designed and developed a fitness tracking mobile app with workout planning, progress tracking, and social features.",
    technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
    features: "Workout tracking, social sharing, progress analytics",
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
    image: "bg-gradient-to-br from-charcoal-light to-primary"
  },
  {
    title: "Blockchain Voting System",
    category: "Blockchain Development",
    description: "Built a secure, transparent voting system using blockchain technology to ensure election integrity and voter privacy.",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    features: "Blockchain security, voter anonymity, real-time results",
    status: "Demo",
    demoUrl: "#",
    githubUrl: "#",
    image: "bg-gradient-to-br from-gold-muted to-gold"
  },
  {
    title: "Real Estate CRM Platform",
    category: "Enterprise Software",
    description: "Developed a comprehensive CRM system for real estate agencies with lead management, property listings, and client communication tools.",
    technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
    features: "Lead management, property CRM, automated follow-ups",
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
    image: "bg-gradient-to-br from-primary to-charcoal"
  }
];

const PortfolioSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects built with modern technologies, 
            demonstrating technical expertise and creative problem-solving.
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
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500/90 text-white' 
                      : project.status === 'Beta'
                      ? 'bg-yellow-500/90 text-white'
                      : 'bg-blue-500/90 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button 
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="p-2 bg-white/90 rounded-full text-charcoal hover:bg-white transition-colors"
                  >
                    <Globe size={16} />
                  </button>
                  <button 
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="p-2 bg-white/90 rounded-full text-charcoal hover:bg-white transition-colors"
                  >
                    <Github size={16} />
                  </button>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-charcoal font-medium text-sm">{project.category}</p>
                </div>

                <p className="text-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="bg-muted p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-primary text-sm mb-2">Key Features:</h4>
                  <p className="text-foreground text-sm">{project.features}</p>
                </div>

                {/* Technology stack */}
                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <Code size={12} className="mr-2 text-gold" />
                    <span className="text-xs font-medium text-muted-foreground">Technologies:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline-professional" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;