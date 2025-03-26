import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import GlassMorphism from "../ui/GlassMorphism";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kamau Mwangi",
    role: "CEO",
    company: "TechFlow Solutions",
    content: "Working with this developer on our e-wallet system was exceptional. Their attention to security details and user experience transformed our product. The AI-driven fraud detection they implemented has significantly reduced financial risks for our company.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    id: 2,
    name: "Wanjiku Njeri",
    role: "Product Manager",
    company: "Urban Living Rentals",
    content: "The rental management platform developed for us has completely transformed how we operate. Automating our rent collection process alone has saved countless hours of administrative work, and our tenants love the easy-to-use interface.",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg"
  },
  {
    id: 3,
    name: "Odhiambo Otieno",
    role: "Director",
    company: "ConnectNet ISP",
    content: "The billing system created for our internet service has increased our revenue by over 50%. The security measures implemented have effectively eliminated unauthorized access issues we were facing. Highly recommend for ISP solutions!",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg"
  },
  {
    id: 4,
    name: "Akinyi Adhiambo",
    role: "Founder",
    company: "ChessVS Gaming",
    content: "The chess betting app exceeded our expectations. From real-time data tracking to secure payment processing, every aspect was thoughtfully designed. User engagement metrics have been outstanding since launch.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-3 animate-fade-in">TESTIMONIALS</p>
          <h2 className="section-heading inline-block mb-6 animate-slide-up">Client Feedback</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Don't just take my word for it. Here's what clients have to say about working with me and the results we've achieved together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <GlassMorphism 
            className="p-8 rounded-2xl relative mb-12"
            intensity="medium"
            color="light"
          >
            <Quote className="absolute text-primary/10 w-24 h-24 -top-6 -left-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-3">
                <p className="text-lg mb-4 italic relative z-10">
                  "{testimonials[currentIndex].content}"
                </p>
                <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </GlassMorphism>
          
          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/50 hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? "bg-primary scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/50 hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;