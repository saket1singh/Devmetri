import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Zap, LightbulbIcon, MessageSquare } from "lucide-react";

const features = [
  {
    title: "Certified Experts",
    description: "Shopify Partners and Magento Certified Developers",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Agile Approach",
    description: "Rapid development with continuous client feedback",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
  {
    title: "Innovative Solutions",
    description: "Cutting-edge technologies and creative approaches",
    icon: <LightbulbIcon className="h-6 w-6 text-primary" />,
  },
  {
    title: "Dedicated Support",
    description: "Ongoing maintenance and technical assistance",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Our development team in a collaborative session" 
              className="rounded-lg shadow-xl w-full h-auto" 
            />
          </div>
          
          <div className="animate-on-scroll" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">About Our Agency</h2>
            <p className="text-lg text-muted-foreground mb-6">
              DevCraft Solutions is a premier digital agency specializing in e-commerce development and business systems integration. With over 10 years of experience, we've helped businesses of all sizes establish and grow their online presence.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experts combines technical expertise with a deep understanding of business needs to deliver solutions that drive real results. We believe in creating long-term partnerships with our clients, supporting them throughout their digital journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-heading mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#team" className="text-primary font-medium inline-flex items-center hover:text-primary/80">
              Meet our team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
