import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
          <p className="text-lg text-neutral-200 mb-8">
            Let's discuss how our e-commerce development and integration solutions can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="px-8 py-4 text-base font-medium bg-accent text-white hover:bg-accent/90"
              asChild
            >
              <a href="#contact">Start Your Project</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-base font-medium border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
