import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-on-scroll">
      <div className="rounded-full bg-primary/10 p-3 inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">
        {description}
      </p>
      <a href="#contact" className="text-primary font-medium hover:underline inline-flex items-center">
        Learn more
        <ChevronRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
}
