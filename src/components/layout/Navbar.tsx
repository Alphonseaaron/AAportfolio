
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-background/90 backdrop-blur-lg shadow-sm" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            Alphonse Aaron
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-primary transition-colors ${
                  location.pathname === link.path ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* CTA */}
          <a
            href="https://api.whatsapp.com/send?phone=254721119332"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors items-center gap-2"
          >
            <MessageSquare size={18} />
            Hire Me
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[500px] border-b border-border/5" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-6 py-8">
          <nav className="flex flex-col space-y-6">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg ${
                  location.pathname === link.path ? "text-primary font-medium" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href="https://api.whatsapp.com/send?phone=254721119332"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors text-center flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare size={18} />
              Hire Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
