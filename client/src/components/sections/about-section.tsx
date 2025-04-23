import { Check, Users, Zap, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

type FeatureItem = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export default function AboutSection() {
  const features: FeatureItem[] = [
    {
      icon: <Check className="text-primary" />,
      title: "Certified Experts",
      description: "Shopify & Magento certified developers"
    },
    {
      icon: <Users className="text-primary" />,
      title: "Customer-Centric",
      description: "Your success is our priority"
    },
    {
      icon: <Zap className="text-primary" />,
      title: "Agile Process",
      description: "Fast delivery without compromising quality"
    },
    {
      icon: <Headphones className="text-primary" />,
      title: "Ongoing Support",
      description: "We're with you long after launch"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our team of web development professionals" 
              className="rounded-xl shadow-xl" 
            />
            <div className="absolute bottom-0 right-0 -mb-8 -mr-8 bg-primary rounded-lg p-6 hidden lg:block">
              <div className="text-white">
                <p className="font-bold text-4xl">8+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">About TechCraft Solutions</h2>
            <p className="text-lg text-neutral-600 mb-6">
              TechCraft was founded in 2015 with a mission to help businesses succeed in the digital space through custom e-commerce solutions and integrations.
            </p>
            <p className="text-lg text-neutral-600 mb-6">
              Our team of experts combines technical prowess with business acumen to deliver solutions that not only look great but drive real results.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-2 mr-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">{feature.title}</h4>
                    <p className="text-sm text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="px-6 py-3 text-base font-medium"
              asChild
            >
              <a href="#contact">Get to Know Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
