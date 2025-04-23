import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Zap, Layers } from "lucide-react";

const services = [
  {
    title: "Shopify Development",
    description: "Custom Shopify store design and development with optimized checkout and payment processing.",
    icon: <Check className="h-6 w-6 text-primary" />,
  },
  {
    title: "Magento Solutions",
    description: "Enterprise-grade Magento implementation with advanced inventory and multi-store capabilities.",
    icon: <Code className="h-6 w-6 text-primary" />,
  },
  {
    title: "Custom Integrations",
    description: "Seamless integration with ERPs, CRMs, payment gateways, and third-party services for unified operations.",
    icon: <Layers className="h-6 w-6 text-primary" />,
  },
  {
    title: "Business Automation",
    description: "Workflow automation for order processing, inventory management, and customer communication.",
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Specialized Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end e-commerce solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow animate-on-scroll">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="text-primary font-medium inline-flex items-center hover:text-primary/80">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" asChild className="animate-on-scroll">
            <a href="#contact">
              Discuss Your Project with Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
