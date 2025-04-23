import { Check, ShoppingCart, PaintbrushVertical, GitBranch, Bot } from "lucide-react";
import ServiceCard from "@/components/ui/service-card";

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export default function ServicesSection() {
  const services: Service[] = [
    {
      icon: <ShoppingCart className="text-primary text-xl" />,
      title: "E-commerce Development",
      description: "Custom Shopify and Magento solutions tailored to your specific business requirements."
    },
    {
      icon: <PaintbrushVertical className="text-primary text-xl" />,
      title: "Web Design",
      description: "Beautiful, conversion-focused designs that represent your brand and engage your customers."
    },
    {
      icon: <GitBranch className="text-primary text-xl" />,
      title: "Custom Integrations",
      description: "Seamless connections between your e-commerce platform and third-party services and systems."
    },
    {
      icon: <Bot className="text-primary text-xl" />,
      title: "Business Automation",
      description: "Streamline operations and reduce manual tasks with our custom automation solutions."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Expertise</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We deliver end-to-end solutions for businesses looking to establish or enhance their digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
