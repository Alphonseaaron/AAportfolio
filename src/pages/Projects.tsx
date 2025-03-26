
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard, { Project } from '@/components/project/ProjectCard';
import GlassMorphism from '@/components/ui/GlassMorphism';

const projectsData: Project[] = [
  {
    id: "fintech-wallet",
    title: "Fintech E-Wallet System",
    description: "A secure and user-friendly e-wallet system with mobile money integration, allowing users to deposit, transfer, and withdraw funds seamlessly.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "App Development",
    skills: ["UI/UX", "Flutter", "Firebase", "Payment Integration", "Cybersecurity"]
  },
  {
    id: "real-estate",
    title: "Real Estate Rental Platform",
    description: "A comprehensive rental management platform for landlords and tenants with automated rent collection, property listing, and maintenance tracking.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80",
    category: "Web Development",
    skills: ["FlutterFlow", "Google Maps API", "Firebase", "Multi-platform", "SaaS"]
  },
  {
    id: "isp-billing",
    title: "ISP Billing & Hotspot Management",
    description: "An internet billing system allowing users to pay for internet access before connecting, with MikroTik RB951 integration for hotspot authentication.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Custom Software",
    skills: ["MikroTik", "Payment Integration", "Cybersecurity", "User Authentication"]
  },
  {
    id: "chess-betting",
    title: "Chess Betting App (ChessVS)",
    description: "A real-time betting app for Chess.com users that integrates web scraping to fetch game data with secure and fair betting algorithms.",
    image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    category: "App Development",
    skills: ["FlutterFlow", "Web Scraping", "Payment Integration", "Gaming"]
  },
  {
    id: "email-cleanup",
    title: "Email Cleanup & Unsubscribe Service",
    description: "A React.js-based web app that automatically deletes spam emails and unsubscribes users from unwanted newsletters.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Web Development",
    skills: ["React.js", "OAuth", "AI", "Email API", "Automation"]
  },
  {
    id: "travel-app",
    title: "Travel Experience Platform",
    description: "A social travel app helping users discover, plan, and share travel experiences with personalized recommendations.",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "App Development",
    skills: ["React Native", "Firebase", "Google Maps", "Social Media Integration"]
  },
  {
    id: "crypto-tracker",
    title: "Cryptocurrency Portfolio Tracker",
    description: "A real-time cryptocurrency tracking application with portfolio management, alerts, and market insights.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
    category: "Web Development",
    skills: ["React.js", "CoinGecko API", "Chart.js", "Real-time Data"]
  },
  {
    id: "medical-appointment",
    title: "Healthcare Appointment System",
    description: "A scheduling platform for medical practitioners and patients with electronic health records integration.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1653&q=80",
    category: "Custom Software",
    skills: ["Flutter", "HIPAA Compliance", "Calendar Integration", "Healthcare API"]
  }
];

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [activeFilter, setActiveFilter] = useState("All");
  
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
  
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    
    if (category === "All") {
      setFilteredProjects(projectsData);
      return;
    }
    
    const filtered = projectsData.filter(project => project.category === category);
    setFilteredProjects(filtered);
  };

  const categories = ["All", ...Array.from(new Set(projectsData.map(project => project.category)))];

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
              <p className="text-primary font-medium mb-3">MY WORK</p>
              <h1 className="mb-6">Projects & Case Studies</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore my portfolio of projects showcasing expertise in UI/UX design, app development, web development, and cybersecurity.
              </p>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-6">
          <div className="bg-white/30 backdrop-blur-sm border border-white/20 p-6 rounded-xl mb-12">
            <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-primary text-white"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
          
          <GlassMorphism className="p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all"
            >
              Let's Talk
            </a>
          </GlassMorphism>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
