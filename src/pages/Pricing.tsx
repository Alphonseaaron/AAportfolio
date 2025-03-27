import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingTable from '@/components/ui/pricing-table';
import { MessageSquare } from 'lucide-react';

const Pricing = () => {
  useEffect(() => {
    // Initialize animation on scroll
    const animateScrollElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach((element) => {
        observer.observe(element);
      });
    };

    animateScrollElements();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="py-10 bg-secondary/30 relative overflow-hidden mb-12">
          {/* Gradient orbs */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full custom-blur animate-pulse-slow" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full custom-blur animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center animate-fade-in">
              <p className="text-primary font-medium mb-3">PRICING & SERVICES</p>
              <h1 className="mb-6">Transparent Pricing for Quality Solutions</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose between AI-accelerated development for faster delivery and cost efficiency, or traditional custom development for maximum flexibility and control.
              </p>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <PricingTable />
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and find the perfect solution that fits your needs and budget.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=254721119332"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all"
            >
              <MessageSquare size={20} />
              Get Started
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;