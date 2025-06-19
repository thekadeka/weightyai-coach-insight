
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToWaitlist = () => {
    if (location.pathname !== '/') {
      navigate('/');
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (anchor: string) => {
    if (location.pathname !== '/') {
      // Navigate to home page with the anchor
      navigate(`/${anchor}`);
    } else {
      // Just scroll to the section if already on home page
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/3b4d8009-cb9b-44d0-bee0-93e6b5da6cbd.png" 
            alt="WeightyAI Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold text-gray-900">WeightyAI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('#how-it-works')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => handleNavClick('#features')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => handleNavClick('#testimonials')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Success Stories
          </button>
        </nav>
        
        <Button 
          onClick={scrollToWaitlist}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6"
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};
