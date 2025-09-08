import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, MapPin, Send, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how strategic consulting 
            can drive measurable results for your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card p-8 rounded-lg shadow-lg border">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      placeholder="John"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      placeholder="john.doe@company.com"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input 
                      placeholder="Your Company"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select className="w-full h-12 px-3 border border-input bg-background rounded-md text-foreground">
                    <option value="">Select a service</option>
                    <option value="strategy">Strategic Consulting</option>
                    <option value="digital">Digital Transformation</option>
                    <option value="operations">Operational Excellence</option>
                    <option value="ma">M&A Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project, challenges, and objectives..."
                    className="min-h-32"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Timeline
                  </label>
                  <select className="w-full h-12 px-3 border border-input bg-background rounded-md text-foreground">
                    <option value="">When would you like to start?</option>
                    <option value="immediate">Immediate (within 2 weeks)</option>
                    <option value="month">Within 1 month</option>
                    <option value="quarter">Within 3 months</option>
                    <option value="flexible">Timeline is flexible</option>
                  </select>
                </div>

                <Button variant="professional" size="lg" className="w-full">
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-card p-6 rounded-lg shadow-lg border">
              <h3 className="font-serif text-xl font-semibold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-gold mt-1" size={18} />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">john.professional@consulting.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-gold mt-1" size={18} />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-gold mt-1" size={18} />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">New York, NY</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Linkedin className="text-gold mt-1" size={18} />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-muted-foreground">linkedin.com/in/johnprofessional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-serif text-lg font-semibold text-primary mb-4">Current Availability</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="text-gold" size={16} />
                  <span className="text-sm text-foreground">Accepting new projects</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Typical response time: 24 hours
                </div>
                <div className="text-sm text-muted-foreground">
                  Next available start date: March 2024
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-charcoal p-6 rounded-lg text-center">
              <h4 className="font-serif text-lg font-semibold text-white mb-3">
                Schedule a Consultation
              </h4>
              <p className="text-silver-light text-sm mb-4">
                Book a 30-minute strategic consultation to discuss your project.
              </p>
              <Button variant="gold" size="lg" className="w-full">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;