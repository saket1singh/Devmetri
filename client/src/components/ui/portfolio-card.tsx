interface PortfolioCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
}

export default function PortfolioCard({ image, category, title, description }: PortfolioCardProps) {
  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group animate-on-scroll">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="px-4 py-2 bg-white text-primary rounded-md font-medium">View Project</button>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">
          {categoryLabel}
        </span>
        <h3 className="mt-3 text-xl font-semibold text-secondary">{title}</h3>
        <p className="mt-2 text-neutral-600">{description}</p>
      </div>
    </div>
  );
}
