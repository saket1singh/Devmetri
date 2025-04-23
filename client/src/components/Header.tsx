import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary font-heading">DevCraft</span>
            <span className="text-lg text-muted-foreground">Solutions</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Home
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              About Us
            </a>
            <a href="#work" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Our Work
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Testimonials
            </a>
            <Button asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-4 py-4 space-y-4 bg-white border-t border-gray-100">
          <a 
            href="#home" 
            className="block text-muted-foreground hover:text-primary font-medium"
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a 
            href="#services" 
            className="block text-muted-foreground hover:text-primary font-medium"
            onClick={closeMobileMenu}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="block text-muted-foreground hover:text-primary font-medium"
            onClick={closeMobileMenu}
          >
            About Us
          </a>
          <a 
            href="#work" 
            className="block text-muted-foreground hover:text-primary font-medium"
            onClick={closeMobileMenu}
          >
            Our Work
          </a>
          <a 
            href="#testimonials" 
            className="block text-muted-foreground hover:text-primary font-medium"
            onClick={closeMobileMenu}
          >
            Testimonials
          </a>
          <Button 
            className="w-full" 
            asChild
            onClick={closeMobileMenu}
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
