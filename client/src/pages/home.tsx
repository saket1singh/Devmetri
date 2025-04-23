import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import AboutSection from "@/components/sections/about-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import TestimonialSection from "@/components/sections/testimonial-section";
import CtaSection from "@/components/sections/cta-section";
import ContactSection from "@/components/sections/contact-section";
import { checkScrollAnimation, handleNavLinkActive } from "@/lib/animations";

export default function Home() {
  useEffect(() => {
    // Animate elements on scroll
    checkScrollAnimation();
    window.addEventListener("scroll", checkScrollAnimation);
    
    // Update active nav links on scroll
    handleNavLinkActive();
    window.addEventListener("scroll", handleNavLinkActive);
    
    return () => {
      window.removeEventListener("scroll", checkScrollAnimation);
      window.removeEventListener("scroll", handleNavLinkActive);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialSection />
        <CtaSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
