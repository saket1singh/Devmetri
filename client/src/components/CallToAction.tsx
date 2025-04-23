import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg mb-8 text-primary-foreground/80">
            Let's discuss how we can help you create a powerful online experience that drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="secondary" size="lg" asChild>
              <a href="#contact">Schedule a Consultation</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-primary-700" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
