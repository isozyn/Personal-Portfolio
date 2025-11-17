import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Calendar, Code, Star } from "lucide-react";

const projects = [
  {
    title: "GetItDone",
    category: "Community Impact Platform",
    description: "Public-facing site for a South African non-profit that highlights workshops, community programs, and impact metrics to attract volunteers and donors.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    features: "Hero storytelling, impact stats, program highlights, donation CTAs",
    status: "Live",
    demoUrl: "https://a1getitdone.netlify.app/",
    githubUrl: "https://github.com/isozyn/GetItDone",
    image: "public/Proj-img/GetitDone.png"
  },
  {
    title: "Fraud Detection System",
    category: "Machine Learning",  
    description: "Advanced ML-powered fraud detection platform analyzing transaction patterns and user behavior for real-time risk assessment and prevention.",
    technologies: ["Python", "React", "TensorFlow", "Scikit-learn", "Flask", "PostgreSQL", "Chart.js"],
    features: "ML-based risk scoring, real-time monitoring, behavioral analysis, automated alerts, pattern recognition",
    status: "Live",
    demoUrl: "https://starlit-croissant-5176b3.netlify.app/",
    githubUrl: "https://github.com/isozyn/CB-FDetector",
    image: "public/Proj-img/CB-Fdetector.png"
  },
  {
    title: "Sentiment Analysis Tool",
    category: "Data Science",  
    description: "NLP-powered sentiment analysis platform processing text data to extract emotional insights and sentiment trends for business intelligence.",
    technologies: ["Python", "Streamlit", "NLTK", "Pandas", "TextBlob", "Plotly", "Scikit-learn"],
    features: "Text preprocessing, emotion detection, sentiment scoring, data visualization, batch processing",
    status: "Live",
    demoUrl: "https://isozyn-cb-sentiment-analyzer-main-7bwxnu.streamlit.app/",
    githubUrl: "https://github.com/isozyn/CB-Sentiment_Analyzer",
    image: "/Proj-img/Sentiment-Analyzer.png"
  },
  {
    title: "Author Portfolio Website",
    category: "Creative Portfolio",
    description: "Professional author showcase platform featuring published works, writing samples, and biography for connecting with readers and publishers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui", "Framer Motion"],
    features: "Book gallery, writing samples, author bio, contact forms, responsive design, SEO optimization",
    status: "Live",
    demoUrl: "https://mellifluous-twilight-6840f5.netlify.app/",
    githubUrl: "https://github.com/isozyn/refined-digital-tailor",
    image: "public/Proj-img/Author-Portfolio.png"
  }
];

const PortfolioSection = () => {
  const openLink = (url?: string | null) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderImage = (project: typeof projects[0]) => {
    // Check if it's a file path (starts with 'public/' or '/')
    if (project.image.startsWith('public/') || project.image.startsWith('/')) {
      return (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      );
    }

    // Otherwise, treat it as a CSS class (gradient)
    return <div className={`w-full h-full ${project.image}`}></div>;
  };  return (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Project thumbnail */}
              <div className="h-32 relative overflow-hidden">
                {renderImage(project)}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Live' ? 'bg-emerald-500/90 text-white' : 'bg-black/60 text-white'}`}>
                    {project.status === 'Live' ? 'Live' : 'Unavailable'}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {project.status === 'Live' ? (
                    <>
                      <button
                        onClick={() => openLink(project.demoUrl)}
                        className="p-2 bg-white/90 rounded-full text-charcoal hover:bg-white transition-colors"
                      >
                        <Globe size={16} />
                      </button>
                      <button
                        onClick={() => openLink(project.githubUrl)}
                        className="p-2 bg-white/90 rounded-full text-charcoal hover:bg-white transition-colors"
                      >
                        <Github size={16} />
                      </button>
                    </>
                  ) : (
                    <span className="px-3 py-1 bg-white/80 text-charcoal text-xs rounded-full font-medium">Coming Soon</span>
                  )}
                </div>
              </div>              {/* Project content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                </div>

                <p className="text-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

              

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
      </div>
    </section>
  );
};

export default PortfolioSection;