import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Luxury Fashion Boutique",
    description: "Custom Shopify implementation with advanced filtering and personalization features.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Shopify"
  },
  {
    title: "Tech Gadgets Marketplace",
    description: "Multi-regional e-commerce platform with advanced search and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
    category: "Magento"
  },
  {
    title: "Wholesale Distribution Company",
    description: "Custom B2B portal with CRM integration and automated ordering workflows.",
    image: "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Integration"
  }
];

const Portfolio = () => {
  return (
    <section id="work" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Latest Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful e-commerce implementations and digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-on-scroll">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} project screenshot`} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {project.description}
                </CardDescription>
                <a href="#" className="text-primary font-medium inline-flex items-center hover:text-primary/80">
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <Button variant="outline" asChild>
            <a href="#contact">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
