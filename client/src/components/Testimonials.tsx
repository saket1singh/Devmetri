import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Fashion Forward",
    content: "DevCraft Solutions transformed our online store. Sales increased by 45% within the first three months after launch. Their team was professional, responsive, and delivered exactly what we needed.",
    avatar: "SJ",
    rating: 5
  },
  {
    name: "Michael Torres",
    role: "Operations Director, ElectroWorld",
    content: "The integration between our Magento store and ERP system streamlined our operations completely. Order processing time reduced by 70%. DevCraft's expertise in both systems was invaluable.",
    avatar: "MT",
    rating: 5
  },
  {
    name: "Emily Chen",
    role: "Marketing Director, Urban Home",
    content: "Our Shopify store needed a complete redesign and functionality upgrade. DevCraft delivered a beautiful, conversion-optimized site that exceeded our expectations. Customer engagement is up 60%.",
    avatar: "EC",
    rating: 5
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} 
        />
      ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that have transformed their digital presence with our help
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white p-6 border border-muted shadow-md animate-on-scroll"
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
