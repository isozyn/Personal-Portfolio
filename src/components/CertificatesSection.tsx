import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const certificates = [
  {
    title: "AI For Everyone",
    issuer: "Capaciti",
    date: "2024",
    status: "Completed",
    description: "Comprehensive introduction to artificial intelligence concepts, applications, and impact across various industries.",
    credentialId: "CAPACITI-AI-2024",
    verifyUrl: "/certificates/Capaciti AI For Everyone.pdf",
    certificateImage: "/Images/Capaciti AI for Everyone.png"
  },
  {
    title: "Introduction to AI & Generative AI",
    issuer: "Capaciti",
    date: "2024",
    status: "Completed",
    description: "Advanced course covering AI fundamentals and generative artificial intelligence technologies and applications.",
    credentialId: "CAPACITI-INTRO-AI-GEN-2024",
    verifyUrl: "/certificates/Capaciti Introduction to AI & Generative AI.pdf",
    certificateImage: "/Images/Capaciti Introduction to AI & Generative AI.png"
  },
  {
    title: "AI For Everyone",
    issuer: "Coursera",
    date: "2024",
    status: "Completed",
    description: "Understanding AI fundamentals, machine learning basics, and how AI can transform businesses and society.",
    credentialId: "COURSERA-AI4E-2024",
    verifyUrl: "/certificates/Coursera AI For Everyone.pdf",
    certificateImage: "/Images/coursera AI for Everyone.png"
  },
  {
    title: "AI Essentials",
    issuer: "Coursera",
    date: "2024",
    status: "Completed",
    description: "Essential concepts and practical applications of artificial intelligence in modern technology.",
    credentialId: "COURSERA-AIE-2024",
    verifyUrl: "/certificates/Coursera AI Essentials.pdf",
    certificateImage: "/Images/Coursera AI Essentials.png"
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "Coursera",
    date: "2024",
    status: "Completed",
    description: "Foundational course covering AI history, concepts, algorithms, and real-world applications.",
    credentialId: "COURSERA-INTRO-AI-2024",
    verifyUrl: "/certificates/Coursera Introduction to Artificial Intelligence (AI).pdf",
    certificateImage: "/Images/Introduction to Artificial Intelligence (AI).png"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Coursera",
    date: "2024",
    status: "Completed",
    description: "Exploring generative AI technologies, including language models, image generation, and creative applications.",
    credentialId: "COURSERA-GEN-AI-2024",
    verifyUrl: "/certificates/Coursera Introduction to Generative AI.pdf",
    certificateImage: "/Images/Coursera Introduction to Generative AI.png"
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    date: "2024",
    status: "Completed",
    description: "Advanced course on large language models, prompt engineering, and building AI applications.",
    credentialId: "COURSERA-LLM-2024",
    verifyUrl: "/certificates/Coursera Generative AI with Large Language Models.pdf",
    certificateImage: "/Images/Coursera Generative AI with Large Learning Models.png"
  },
  {
    title: "Active Listening: Enhancing Communication Skills",
    issuer: "Coursera",
    date: "2024",
    status: "Completed",
    description: "Developing effective listening skills for better communication and professional relationships.",
    credentialId: "COURSERA-LISTEN-2024",
    verifyUrl: "/certificates/Coursera Active Listening Enhancing Communication Skills.pdf",
    certificateImage: "/Images/Coursera Active Listening Enhanced Communication Skills.png"
  },
  {
    title: "Developing Interpersonal Skills",
    issuer: "Coursera",
    date: "2024",
    status: "Completed",
    description: "Building essential interpersonal skills for effective teamwork and professional success.",
    credentialId: "COURSERA-INTERPERSONAL-2024",
    verifyUrl: "/certificates/Coursera Developing Interpersonal Skills.pdf",
    certificateImage: "/Images/Coursera Developing Interpersonal Skills.png"
  },
  {
    title: "Verbal Communications and Presentation Skills",
    issuer: "Coursera",
    date: "2024",
    status: "Completed",
    description: "Mastering verbal communication techniques and effective presentation skills for professional environments.",
    credentialId: "COURSERA-VERBAL-2024",
    verifyUrl: "/certificates/Coursera Verbal Communications and Presentation Skills.pdf",
    certificateImage: "/Images/Coursera Verbal communication.png"
  },
  {
    title: "Write Professional Emails in English",
    issuer: "Coursera",
    date: "2024",
    status: "Completed",
    description: "Learning to write clear, professional, and effective emails in English for business communication.",
    credentialId: "COURSERA-EMAIL-2024",
    verifyUrl: "/certificates/Coursera Write Professional Emails in English.pdf",
    certificateImage: "/Images/Coursera Write Proffesional Emails in English.png"
  }
];

const CertificatesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const updateScrollInfo = () => {
        setMaxScroll(container.scrollWidth - container.clientWidth);
      };
      
      updateScrollInfo();
      window.addEventListener('resize', updateScrollInfo);
      
      const handleScroll = () => {
        setScrollPosition(container.scrollLeft);
      };
      
      container.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('resize', updateScrollInfo);
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };



  return (
    <section id="certificates" className="py-20 px-6 bg-muted/30">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate expertise and commitment to continuous learning 
            in management consulting, project management, and business transformation.
          </p>
        </div>

        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
            disabled={scrollPosition <= 0}
          >
            <ChevronLeft className="text-charcoal" size={20} />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
            disabled={scrollPosition >= maxScroll}
          >
            <ChevronRight className="text-charcoal" size={20} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-4 scroll-smooth mx-12" 
            style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
          >
            {certificates.map((cert, index) => (
            <Card key={index} className="flex-shrink-0 w-72 hover:shadow-lg transition-all duration-300 group border-l-4 border-l-gold overflow-hidden">
              {/* Certificate Image */}
              <div className="relative h-32 bg-gradient-to-br from-muted to-muted/50">
                {cert.certificateImage ? (
                  <img 
                    src={cert.certificateImage} 
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-xs">Certificate Image</span>
                  </div>
                )}
                {/* Award icon positioned in top right corner */}
                <div className="absolute top-2 right-2 bg-gold/90 p-1.5 rounded-full">
                  <Award className="text-white" size={12} />
                </div>
              </div>
              
              <CardHeader className="pb-3 px-4 pt-3">
                <CardTitle className="text-sm font-serif text-primary leading-tight line-clamp-2">
                  {cert.title}
                </CardTitle>
                <p className="text-xs font-medium text-muted-foreground">
                  {cert.issuer}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 px-4 pb-4">
                <p className="text-xs text-foreground mb-3 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
                
                <div className="space-y-1 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar size={10} className="mr-1" />
                    <span>Issued: {cert.date}</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                  className="flex items-center text-xs text-gold hover:text-gold-muted transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  <ExternalLink size={10} className="mr-1" />
                  View Certificate
                </button>
              </CardContent>
            </Card>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;