
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/home/Contact';

const ContactPage = () => {
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
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center animate-fade-in">
            <p className="text-primary font-medium mb-3">GET IN TOUCH</p>
            <h1 className="mb-6">Let's Work Together</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or need a consultation? I'm excited to hear about your ideas and how we can collaborate to bring them to life.
            </p>
          </div>
        </div>
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
