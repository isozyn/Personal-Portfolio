import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, TechVentures Inc.",
    company: "Fortune 500 Technology Company",
    content: "John's strategic insights transformed our digital capabilities. His methodical approach and deep industry knowledge helped us achieve a 40% increase in market share within 18 months.",
    rating: 5,
    image: "bg-gradient-to-br from-gold to-gold-muted"
  },
  {
    name: "Michael Rodriguez",
    title: "Managing Partner",
    company: "Global Investment Partners",
    content: "Working with John on our portfolio company initiatives has been exceptional. His ability to identify opportunities and execute complex transformations is unmatched in the industry.",
    rating: 5,
    image: "bg-gradient-to-br from-charcoal to-charcoal-light"
  },
  {
    name: "Dr. Amanda Foster",
    title: "Chief Operating Officer",
    company: "HealthCare Innovations",
    content: "John led our operational excellence program with remarkable precision. The results exceeded all expectations - 25% cost reduction while improving patient outcomes significantly.",
    rating: 5,
    image: "bg-gradient-to-br from-silver to-silver-light"
  },
  {
    name: "David Kim",
    title: "VP of Strategy",
    company: "Manufacturing Solutions Corp",
    content: "The digital transformation initiative John spearheaded revolutionized our operations. His leadership and expertise delivered measurable results across all our global facilities.",
    rating: 5,
    image: "bg-gradient-to-br from-gold-muted to-gold"
  },
  {
    name: "Lisa Thompson",
    title: "Chief Financial Officer",
    company: "Financial Services Group",
    content: "John's approach to organizational change management is both strategic and empathetic. He achieved buy-in across all levels while delivering substantial productivity improvements.",
    rating: 5,
    image: "bg-gradient-to-br from-primary to-charcoal"
  },
  {
    name: "Robert Zhang",
    title: "Executive Director",
    company: "Retail Dynamics",
    content: "The market entry strategy John developed was comprehensive and actionable. Our European expansion exceeded projections by 150% thanks to his strategic framework.",
    rating: 5,
    image: "bg-gradient-to-br from-charcoal-light to-primary"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by industry leaders and executives who value strategic excellence 
            and transformational results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg border p-6 hover:shadow-xl transition-all duration-300 relative">
              {/* Quote icon */}
              <div className="absolute -top-3 left-6">
                <div className="bg-gold p-2 rounded-full">
                  <Quote className="text-white" size={16} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" size={16} />
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Client info */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-4">
                  {/* Avatar placeholder */}
                  <div className={`w-12 h-12 ${testimonial.image} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-charcoal">{testimonial.title}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-8">Trusted By Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              "McKinsey & Company",
              "Deloitte Consulting", 
              "Bain & Company",
              "Boston Consulting Group"
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-muted p-4 rounded-lg">
                  <span className="font-medium text-foreground">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;