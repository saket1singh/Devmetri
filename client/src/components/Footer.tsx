import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-white font-heading">DevMetri</span>
              <span className="text-lg text-slate-400">Solutions</span>
            </div>
            <p className="text-slate-400 mb-6">
              Creating exceptional e-commerce experiences and business solutions for forward-thinking companies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#work" className="text-slate-400 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Shopify Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Magento Solutions</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Custom Integrations</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Business Automation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">E-commerce Strategy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support & Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-slate-400" />
                <span className="text-slate-400">123 Tech Avenue, Suite 500<br/>San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-slate-400" />
                <span className="text-slate-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-slate-400" />
                <span className="text-slate-400">info@devmetrisolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DevMetri Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
