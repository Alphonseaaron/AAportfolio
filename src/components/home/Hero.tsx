import { useEffect, useState } from "react";
import { ArrowDown, Code, MonitorSmartphone, PaintBucket, Shield } from "lucide-react";
import GlassMorphism from "../ui/GlassMorphism";
import AnimatedText from "../ui/AnimatedText";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full custom-blur animate-pulse-slow" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full custom-blur animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-2 animate-fade-in">
              <GlassMorphism className="px-4 py-1 rounded-full">
                <span className="text-sm font-medium">
                  Full-stack Developer & UI/UX Designer
                </span>
              </GlassMorphism>
            </div>
            
            <h1 className="mb-6 leading-tight">
              <AnimatedText
                text="Crafting Digital"
                animation="slide-up"
                delay={100}
                className="block"
              />
              <AnimatedText
                text="Experiences with"
                animation="slide-up"
                delay={200}
                className="block"
              />
              <AnimatedText
                text="Precision & Passion"
                animation="slide-up"
                delay={300}
                className="block text-gradient"
              />
            </h1>
            
            <AnimatedText
              text="I design and develop exceptional digital experiences that are secure, beautiful, and user-centered. From mobile apps to websites and custom software solutions."
              animation="fade"
              delay={500}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            />
            
            <p className="text-lg italic text-muted-foreground mb-8 border-l-4 border-primary pl-4 py-2">
              "A jack of all trades is a master of none, but often times better than a master of one."
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all animate-slide-up" style={{ animationDelay: "700ms" }}>
                View Projects
              </a>
              
              <a href="#contact" className="inline-block border border-primary/50 text-primary px-8 py-3 rounded-full hover:bg-primary/5 transition-all animate-slide-up" style={{ animationDelay: "800ms" }}>
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative animate-float">
              <GlassMorphism 
                className="w-full max-w-2xl aspect-square rounded-2xl flex items-center justify-center overflow-hidden"
                intensity="heavy"
                color="primary"
              >
                <img 
                  src="https://images.pexels.com/photos/31348833/pexels-photo-31348833.jpeg"
                  alt="Alphonse Aaron"
                  className="w-full h-full object-cover"
                />
              </GlassMorphism>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <div className="animate-bounce">
          <ArrowDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;