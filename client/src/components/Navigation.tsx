import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    console.log(`Scrolling to ${id}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
            <Logo textColor={isScrolled ? 'text-foreground' : 'text-white'} />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
              data-testid="link-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
              data-testid="link-why-us"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('areas')}
              className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
              data-testid="link-areas"
            >
              Service Areas
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
              data-testid="link-contact"
            >
              Contact
            </button>
            <Button 
              size="sm"
              data-testid="button-nav-quote"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-6 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left font-medium hover:text-primary transition-colors py-2"
              data-testid="link-mobile-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="block w-full text-left font-medium hover:text-primary transition-colors py-2"
              data-testid="link-mobile-why-us"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('areas')}
              className="block w-full text-left font-medium hover:text-primary transition-colors py-2"
              data-testid="link-mobile-areas"
            >
              Service Areas
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left font-medium hover:text-primary transition-colors py-2"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
            <Button 
              className="w-full"
              data-testid="button-mobile-quote"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
