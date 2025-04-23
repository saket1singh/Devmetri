import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="text-xl font-bold">TechCraft</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Transforming businesses through custom e-commerce solutions and integrations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Shopify Development</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Magento Development</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Custom Integrations</a></li>
              <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Business Automation</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-neutral-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-neutral-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-neutral-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-neutral-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-neutral-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-neutral-300 h-4 w-4" />
                <span className="text-neutral-300">123 Tech Street, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 text-neutral-300 h-4 w-4" />
                <span className="text-neutral-300">info@techcraft.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 text-neutral-300 h-4 w-4" />
                <span className="text-neutral-300">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} TechCraft Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
