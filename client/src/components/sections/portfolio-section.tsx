import { useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioCard from "@/components/ui/portfolio-card";

type Project = {
  image: string;
  category: "shopify" | "magento" | "integration";
  title: string;
  description: string;
};

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const projects: Project[] = [
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "shopify",
      title: "Fashion Boutique Website",
      description: "Custom Shopify store with integrated inventory management"
    },
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "magento",
      title: "Electronics Marketplace",
      description: "Multi-vendor Magento platform with custom checkout"
    },
    {
      image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "integration",
      title: "Business Automation System",
      description: "Custom ERP integration with e-commerce platform"
    }
  ];
  
  const filters = [
    { value: "all", label: "All Projects" },
    { value: "shopify", label: "Shopify" },
    { value: "magento", label: "Magento" },
    { value: "integration", label: "Integration" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Work</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Browse through our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 animate-on-scroll">
          <div className="inline-flex flex-wrap justify-center gap-2" role="group" aria-label="Portfolio filters">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                className={activeFilter === filter.value 
                  ? "bg-primary text-white" 
                  : "bg-white text-neutral-700 hover:bg-neutral-200"}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <PortfolioCard
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            asChild
          >
            <a href="#contact">View All Case Studies</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
