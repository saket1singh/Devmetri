import { Star, StarHalf } from "lucide-react";

interface TestimonialCardProps {
  rating: number;
  text: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

export default function TestimonialCard({ 
  rating, 
  text, 
  name, 
  position, 
  company, 
  image 
}: TestimonialCardProps) {
  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="text-accent" fill="currentColor" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="text-accent" fill="currentColor" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md animate-on-scroll">
      <div className="flex gap-1 mb-4 text-accent">
        {renderStars()}
      </div>
      <p className="text-neutral-700 mb-6 italic">
        "{text}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-neutral-300 flex-shrink-0 mr-4">
          <img 
            src={image} 
            alt={name} 
            className="rounded-full"
          />
        </div>
        <div>
          <h4 className="font-semibold text-secondary">{name}</h4>
          <p className="text-sm text-neutral-500">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
}
