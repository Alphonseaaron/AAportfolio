import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CaseStudy from '@/components/project/CaseStudy';
import { Navigate } from 'react-router-dom';
import { CaseStudyData } from '@/components/project/CaseStudy';

const projectsData: CaseStudyData[] = [
  {
    id: "fintech-wallet",
    title: "Fintech E-Wallet System",
    overview: "Developed a secure and user-friendly e-wallet system that allows users to deposit, transfer, and withdraw funds seamlessly. The application integrates with multiple payment gateways including mobile money (M-Pesa, Airtel Money) and card payments.\n\nThe project focused on creating a sleek user interface while implementing robust security measures to protect user data and transactions. The result is a fast, reliable, and secure digital wallet that has seen rapid adoption among users.",
    skills: ["UI/UX", "Flutter", "Firebase", "Payment Integration", "Cybersecurity"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    challenges: [
      "Users needed a fast and secure way to handle digital transactions",
      "Existing solutions lacked strong fraud prevention measures",
      "Integration of multiple payment gateways without high fees was difficult",
      "Ensuring compliance with financial regulations across different regions"
    ],
    solutions: [
      "Designed a clean and intuitive UI with Flutter and Firebase",
      "Integrated Paystack, M-Pesa API, and Stripe for diverse payment options",
      "Implemented biometric authentication and OTP verification for security",
      "Created an AI-driven fraud detection system that flags suspicious transactions"
    ],
    results: [
      "Transaction speed increased by 40% due to optimized API calls",
      "Fraudulent transactions reduced by 60% with AI-based risk analysis",
      "Enabled cross-border transactions, allowing users to send money internationally",
      "User base grew to 10,000+ active users within 3 months of launch"
    ],
    screenshots: [
      {
        url: "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        caption: "Wallet dashboard showing balance and recent transactions"
      },
      {
        url: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        caption: "Money transfer flow with security verification"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        caption: "Analytics dashboard showing spending patterns"
      },
      {
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        caption: "Biometric authentication security layer"
      }
    ]
  },
  {
    id: "real-estate",
    title: "Real Estate Rental Platform",
    overview: "Built a comprehensive rental management platform that allows landlords to manage properties, accept payments, and track lease agreements while giving tenants a seamless way to pay rent, report issues, and find service providers.\n\nThe platform serves both landlords and tenants with separate interfaces optimized for their specific needs. Special attention was paid to the property matching algorithm that helps tenants find suitable properties based on their preferences.",
    skills: ["FlutterFlow", "Google Maps API", "Firebase", "Multi-platform", "SaaS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80",
    heroImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80",
    challenges: [
      "Landlords struggled with manual rent collection and tracking",
      "Tenants needed automated rent reminders and payment options",
      "No proper system existed to match available properties with the right tenants",
      "Property maintenance requests were often lost or forgotten in traditional systems"
    ],
    solutions: [
      "Developed a multi-platform app (web, iOS, Android) using FlutterFlow",
      "Integrated Google Maps API for property location and directions",
      "Created automated invoicing & rent payment tracking with Firebase",
      "Implemented a smart filtering system for properties based on preferences"
    ],
    results: [
      "Reduced vacant unit downtime by 30%, increasing landlord revenue",
      "Tenants found rental units 2x faster using the automated filtering system",
      "Landlords saved an average of 5 hours per week with automated payments",
      "Maintenance request resolution time decreased by 40% with the tracking system"
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        caption: "Landlord dashboard showing property overview"
      },
      {
        url: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80",
        caption: "Property search interface with smart filters"
      },
      {
        url: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
        caption: "Rental payment and tracking system"
      },
      {
        url: "https://images.unsplash.com/photo-1560520031-5a969fd00b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80",
        caption: "Maintenance request and tracking interface"
      }
    ]
  },
  {
    id: "isp-billing",
    title: "ISP Billing & Hotspot Management",
    overview: "Developed an internet billing system that allows users to pay for internet access before connecting. Integrated MikroTik RB951 with Winbox for hotspot authentication and access control.\n\nThis system helps Internet Service Providers (ISPs) automate their billing processes, reduce unauthorized access, and provide a seamless experience for customers who want to purchase internet access on-demand without long-term commitments.",
    skills: ["MikroTik", "Payment Integration", "Cybersecurity", "User Authentication"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    heroImage: "https://images.unsplash.com/photo-1490822180406-880c226c150b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    challenges: [
      "Internet Service Providers (ISPs) struggled with manual billing and revenue tracking",
      "Customers wanted prepaid internet access without subscriptions",
      "The existing system was vulnerable to unauthorized users stealing bandwidth",
      "ISPs needed real-time analytics on usage patterns and revenue"
    ],
    solutions: [
      "Built a branded hotspot landing page for users to choose their internet package",
      "Integrated mobile money payments (M-Pesa, Airtel Money) for seamless transactions",
      "Implemented bandwidth control & auto-expiry for paid plans to prevent abuse",
      "Developed an ISP admin panel to track users, payments, and usage analytics"
    ],
    results: [
      "ISP revenue increased by 50% with automated prepaid plans",
      "Unauthorized bandwidth usage reduced by 70% due to strict access control",
      "Customers got faster access to internet services, reducing wait time by 80%",
      "ISP support calls decreased by 45% due to the self-service system"
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        caption: "ISP admin dashboard with usage analytics"
      },
      {
        url: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        caption: "Hotspot landing page with plan selection"
      },
      {
        url: "https://images.unsplash.com/photo-1563986768494-4dee9b397c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        caption: "Payment interface with multiple options"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        caption: "Bandwidth control and user management"
      }
    ]
  },
  {
    id: "chess-betting",
    title: "Chess Betting App (ChessVS)",
    overview: "Developed ChessVS, a real-time betting app for Chess.com users that allows players to wager on live chess games. Integrated web scraping to fetch game data and real-time bet tracking.\n\nThis innovative app combines the strategic game of chess with the excitement of betting, creating a unique experience for chess enthusiasts who want to put their prediction skills to the test or add a layer of excitement to watching games.",
    skills: ["FlutterFlow", "Web Scraping", "Payment Integration", "Gaming"],
    image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    heroImage: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    challenges: [
      "Chess.com did not have an open API for bet-related data",
      "Needed a secure and fair betting algorithm to prevent abuse",
      "Users wanted instant deposits & withdrawals",
      "Required real-time updates of game status for accurate betting"
    ],
    solutions: [
      "Used web_scraper in FlutterFlow to extract real-time game data (winner, points, game ID)",
      "Designed a clean betting UI with live game tracking",
      "Integrated crypto & mobile money payments for instant deposits/withdrawals",
      "Developed a fraud detection system to prevent multiple-account abuse"
    ],
    results: [
      "Achieved 100+ active users within the first month",
      "Instant payouts led to a 70% retention rate among users",
      "Users spent 20% more per game due to enhanced engagement",
      "App reached #3 in Sports category on regional app stores"
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
        caption: "Live chess betting interface"
      },
      {
        url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        caption: "User dashboard with betting history"
      },
      {
        url: "https://images.unsplash.com/photo-1614521098806-0206da6a7ea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        caption: "Payment and withdrawal options"
      },
      {
        url: "https://images.unsplash.com/photo-1582730147924-d92f4da00252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        caption: "Real-time game tracking with statistics"
      }
    ]
  },
  {
    id: "email-cleanup",
    title: "Email Cleanup & Unsubscribe Service",
    overview: "Created a React.js-based web app that automatically deletes spam emails and unsubscribes users from unwanted newsletters.\n\nThis application helps users tackle email overload by identifying subscription emails, providing one-click unsubscribe functionality, and automatically categorizing and removing spam. The service integrates with major email providers through OAuth for secure access without storing user credentials.",
    skills: ["React.js", "OAuth", "AI", "Email API", "Automation"],
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    heroImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    challenges: [
      "Users struggled to manually clean thousands of spam emails",
      "Needed a secure authentication system for accessing email accounts",
      "Gmail/Yahoo APIs had strict rate limits for bulk actions",
      "Finding and processing unsubscribe links varied greatly across newsletters"
    ],
    solutions: [
      "Integrated OAuth authentication for Gmail, Yahoo, and Outlook",
      "Built an AI-powered email categorization system to detect spam",
      "Developed a bulk email deletion tool with scheduled cleanup options",
      "Implemented low-fee payment processing (PayPal, M-Pesa) for monetization"
    ],
    results: [
      "Helped users reduce email clutter by 80% in under 5 minutes",
      "Automated unsubscribe feature increased efficiency by 95%",
      "Generated consistent revenue through a subscription-based model",
      "Positive user feedback with 4.8/5 average rating from early adopters"
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
        caption: "Email cleanup dashboard showing inbox analysis"
      },
      {
        url: "https://images.unsplash.com/photo-1484480549197-d6c1f1906135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
        caption: "Before/after inbox comparison visualization"
      },
      {
        url: "https://images.unsplash.com/photo-1484480549197-d6c1f1906135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
        caption: "OAuth connection settings interface"
      },
      {
        url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
        caption: "Subscription management and analytics view"
      }
    ]
  }
];

const Project = () => {
  const { id } = useParams<{ id: string }>();
  
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
  }, [id]);
  
  // Find the project with the matching ID
  const project = projectsData.find(project => project.id === id);
  
  // If no project found, redirect to 404
  if (!project) {
    return <Navigate to="/404" />;
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <CaseStudy project={project} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Project;