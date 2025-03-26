
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-background border-t border-border/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary">Alphonse Aaron</Link>
            <p className="text-muted-foreground mt-4">
              Full-stack developer and UI/UX designer who crafts secure & user-centered digital solutions for businesses.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-2">
              <a
                href="https://github.com/Alphonseaaron"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/aaronmumbo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:alphonsemumbo@gmail.com"
                className="bg-primary/10 text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=254721119332"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>Nairobi, Kenya</p>
              <p>
                <a href="mailto:alphonsemumbo@gmail.com" className="hover:text-primary transition-colors">
                  alphonsemumbo@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="https://api.whatsapp.com/send?phone=254721119332" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +254 721 119 332
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; {currentYear} Alphonse Aaron. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed & Developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
