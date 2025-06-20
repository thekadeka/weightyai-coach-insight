import { BarChart3, Mail, Twitter, Linkedin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (anchor: string) => {
    if (location.pathname !== '/') {
      // Navigate to home page first
      navigate('/');
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Just scroll to the section if already on home page
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/3b4d8009-cb9b-44d0-bee0-93e6b5da6cbd.png" 
                alt="WeightyAI Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-white">WeightyAI</span>
            </div>
            <p className="text-gray-400">
              Your AI-powered progress coach for smarter weight management.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('#features')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#how-it-works')} 
                  className="hover:text-white transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#pricing')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 WeightyAI. All rights reserved. Built with ❤️ for fitness enthusiasts everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};
