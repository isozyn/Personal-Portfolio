import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Project Management Professional (PMP)",
    issuer: "Project Management Institute",
    date: "2023",
    status: "Active",
    description: "Comprehensive certification in project management methodologies and best practices.",
    credentialId: "PMP-2023-789456",
    verifyUrl: "#"
  },
  {
    title: "Certified Management Consultant (CMC)",
    issuer: "Institute of Management Consultants",
    date: "2022",
    status: "Active", 
    description: "Professional certification recognizing expertise in management consulting practices.",
    credentialId: "CMC-2022-456123",
    verifyUrl: "#"
  },
  {
    title: "Six Sigma Black Belt",
    issuer: "American Society for Quality",
    date: "2021",
    status: "Active",
    description: "Advanced certification in process improvement and quality management methodologies.",
    credentialId: "SSBB-2021-321654",
    verifyUrl: "#"
  },
  {
    title: "Certified Business Analysis Professional",
    issuer: "International Institute of Business Analysis",
    date: "2020",
    status: "Active",
    description: "Professional certification in business analysis techniques and stakeholder management.",
    credentialId: "CBAP-2020-654987",
    verifyUrl: "#"
  },
  {
    title: "Digital Transformation Certificate",
    issuer: "MIT Sloan Executive Education",
    date: "2023",
    status: "Completed",
    description: "Executive program focusing on digital strategy and organizational transformation.",
    credentialId: "MIT-DT-2023-147258",
    verifyUrl: "#"
  },
  {
    title: "Strategic Leadership Certificate",
    issuer: "Harvard Business School",
    date: "2022",
    status: "Completed",
    description: "Executive education program in strategic thinking and leadership development.",
    credentialId: "HBS-SL-2022-258369",
    verifyUrl: "#"
  }
];

const CertificatesSection = () => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group border-l-4 border-l-gold">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Award className="text-gold flex-shrink-0 mt-1" size={24} />
                  <Badge variant={cert.status === "Active" ? "default" : "secondary"} className="ml-2">
                    {cert.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-serif text-primary leading-tight">
                  {cert.title}
                </CardTitle>
                <p className="text-sm font-medium text-muted-foreground">
                  {cert.issuer}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-2" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">ID:</span>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">
                      {cert.credentialId}
                    </code>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                  className="mt-4 flex items-center text-xs text-gold hover:text-gold-muted transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  <ExternalLink size={12} className="mr-1" />
                  Verify Credential
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;