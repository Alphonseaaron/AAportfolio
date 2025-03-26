
import { useEffect, useState } from "react";
import ProjectCard, { Project } from "../project/ProjectCard";

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
  }
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    // Initialize the animation
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
  }, [filteredProjects]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    
    if (category === "All") {
      setFilteredProjects(projectsData);
      return;
    }
    
    const filtered = projectsData.filter(project => project.category === category);
    setFilteredProjects(filtered);
  };

  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-3 animate-fade-in">FEATURED WORK</p>
          <h2 className="section-heading inline-block mb-6 animate-slide-up">Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Explore a selection of my recent projects showcasing design, development, and cybersecurity expertise. Each project represents a unique challenge solved with innovative solutions.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/projects" 
            className="inline-block border border-primary/50 text-primary px-8 py-3 rounded-full hover:bg-primary/5 transition-all"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
