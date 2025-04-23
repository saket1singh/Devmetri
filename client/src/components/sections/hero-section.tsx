import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Expert Web Development & Integration Solutions
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl">
              We create custom e-commerce experiences with Shopify and Magento, backed by seamless integrations and business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="px-6 py-3 text-base font-medium" 
                asChild
              >
                <a href="#services">Explore Our Services</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-6 py-3 text-base font-medium border-primary text-primary hover:bg-primary/5" 
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="animate-on-scroll relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Professional web development team collaborating" 
              className="rounded-xl shadow-xl w-full"
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">98% Client Satisfaction</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
