import { useState } from "react";
import { Star, StarHalf } from "lucide-react";
import TestimonialCard from "@/components/ui/testimonial-card";

type Testimonial = {
  rating: number;
  text: string;
  name: string;
  position: string;
  company: string;
  image: string;
};

export default function TestimonialSection() {
  const [activePage, setActivePage] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      rating: 5,
      text: "TechCraft transformed our online store with a custom Shopify implementation that perfectly captures our brand. Sales have increased by 45% since launch.",
      name: "Sarah Johnson",
      position: "Founder",
      company: "Bloom Boutique",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      rating: 5,
      text: "The integration solution TechCraft built saved us countless hours of manual data entry. Their team was professional, responsive, and delivered exactly what we needed.",
      name: "Michael Chen",
      position: "COO",
      company: "TechSupply Inc.",
      image: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      rating: 4.5,
      text: "We've worked with several development agencies, but TechCraft stands out. Their Magento expertise helped us scale our marketplace to handle 10x the previous transaction volume.",
      name: "Jessica Martinez",
      position: "Director of E-commerce",
      company: "Global Goods",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary/5 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Our Clients Say</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-500">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                rating={testimonial.rating}
                text={testimonial.text}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-10 gap-2">
            {[0, 1, 2].map((page) => (
              <button
                key={page}
                className={`w-3 h-3 rounded-full ${
                  activePage === page ? "bg-primary" : "bg-neutral-300 hover:bg-primary/50"
                } transition-colors`}
                aria-label={`Testimonial page ${page + 1}`}
                onClick={() => setActivePage(page)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
