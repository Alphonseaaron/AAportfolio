
// This file contains the Alpine.js data that will be used across the site
document.addEventListener('alpine:init', () => {
  Alpine.data('testimonials', () => ({
    currentIndex: 0,
    testimonials: [
      {
        id: 1,
        name: "James Mwangi",
        role: "CEO",
        company: "TechFlow Solutions",
        content: "Working with this developer on our e-wallet system was exceptional. Their attention to security details and user experience transformed our product. The AI-driven fraud detection they implemented has significantly reduced financial risks for our company.",
        avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop"
      },
      {
        id: 2,
        name: "Sarah Njeri",
        role: "Product Manager",
        company: "Urban Living Rentals",
        content: "The rental management platform developed for us has completely transformed how we operate. Automating our rent collection process alone has saved countless hours of administrative work, and our tenants love the easy-to-use interface.",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop"
      },
      {
        id: 3,
        name: "Eugene Odhiambo",
        role: "Director",
        company: "ConnectNet ISP",
        content: "The billing system created for our internet service has increased our revenue by over 50%. The security measures implemented have effectively eliminated unauthorized access issues we were facing. Highly recommend for ISP solutions!",
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop"
      },
      {
        id: 4,
        name: "Emily Adhiambo",
        role: "Founder",
        company: "ChessVS Gaming",
        content: "The chess betting app exceeded our expectations. From real-time data tracking to secure payment processing, every aspect was thoughtfully designed. User engagement metrics have been outstanding since launch.",
        avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=400&fit=crop"
      }
    ],
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    },
    prev() {
      this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
    }
  }));
});
