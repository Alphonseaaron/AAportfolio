
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GlassMorphism from '@/components/ui/GlassMorphism';
import { Award, Book, Briefcase, GraduationCap, Heart } from 'lucide-react';

const About = () => {
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
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/30 relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full custom-blur animate-pulse-slow" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full custom-blur animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <p className="text-primary font-medium mb-3">ABOUT ME</p>
              <h1 className="mb-6">The Journey Behind The Work</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With over a decade of experience in digital design and development, I've dedicated my career to creating exceptional digital experiences that are both beautiful and functional.
              </p>
            </div>
            
            <div className="flex justify-center">
              <GlassMorphism 
                className="p-1 rounded-full overflow-hidden animate-float w-64 h-64"
                color="primary"
                intensity="heavy"
              >
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </GlassMorphism>
            </div>
          </div>
        </section>
        
        {/* Bio Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <h2 className="section-heading mb-6">My Background</h2>
                <div className="space-y-6 text-lg">
                  <p>
                    I'm a full-stack developer and UI/UX designer with expertise in creating secure, user-centered digital solutions. My journey in tech started over 10 years ago when I built my first website, and I've been passionate about creating exceptional digital experiences ever since.
                  </p>
                  <p>
                    My approach combines aesthetic design with robust functionality, always keeping the end-user in mind. I believe that the best digital products are not just visually appealing but also intuitive, secure, and performant.
                  </p>
                  <p>
                    Throughout my career, I've worked with startups, established businesses, and individual entrepreneurs across various industries including fintech, real estate, telecommunications, and e-commerce.
                  </p>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <h2 className="section-heading mb-6">My Expertise</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Book className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">UI/UX Design</h3>
                      <p className="text-muted-foreground">
                        Creating intuitive and aesthetically pleasing interfaces that enhance user experience and engagement.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Briefcase className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Full-Stack Development</h3>
                      <p className="text-muted-foreground">
                        Building complete applications with React, Node.js, and Flutter, from database design to frontend implementation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Award className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Cybersecurity</h3>
                      <p className="text-muted-foreground">
                        Implementing robust security measures to protect digital assets, data, and user privacy across platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience & Education */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="section-heading text-center mb-12">Experience & Education</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div className="animate-on-scroll">
                <GlassMorphism 
                  className="p-8 rounded-xl h-full"
                  color="light"
                  intensity="medium"
                >
                  <div className="flex items-center mb-6">
                    <Briefcase className="text-primary mr-3" size={24} />
                    <h3 className="text-2xl font-bold">Experience</h3>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l-2 border-primary/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <h4 className="font-bold">Senior Full-Stack Developer</h4>
                      <p className="text-primary font-medium">Tech Innovations Inc. | 2020 - Present</p>
                      <p className="text-muted-foreground mt-2">
                        Lead developer for fintech and e-commerce projects, specializing in secure payment integrations and user experience optimization.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-primary/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <h4 className="font-bold">UI/UX Designer & Developer</h4>
                      <p className="text-primary font-medium">Digital Creations Ltd. | 2017 - 2020</p>
                      <p className="text-muted-foreground mt-2">
                        Designed and implemented user interfaces for web and mobile applications, focusing on accessibility and conversion optimization.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-primary/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <h4 className="font-bold">Web Developer</h4>
                      <p className="text-primary font-medium">WebSolutions Agency | 2015 - 2017</p>
                      <p className="text-muted-foreground mt-2">
                        Developed responsive websites for clients across various industries, implementing SEO best practices and performance optimizations.
                      </p>
                    </div>
                  </div>
                </GlassMorphism>
              </div>
              
              {/* Education */}
              <div className="animate-on-scroll">
                <GlassMorphism 
                  className="p-8 rounded-xl h-full"
                  color="light"
                  intensity="medium"
                >
                  <div className="flex items-center mb-6">
                    <GraduationCap className="text-primary mr-3" size={24} />
                    <h3 className="text-2xl font-bold">Education</h3>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l-2 border-primary/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <h4 className="font-bold">Master's in Cybersecurity</h4>
                      <p className="text-primary font-medium">Tech University | 2018 - 2020</p>
                      <p className="text-muted-foreground mt-2">
                        Specialized in application security, network protection, and security best practices for web and mobile applications.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-primary/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <h4 className="font-bold">BSc Computer Science</h4>
                      <p className="text-primary font-medium">State University | 2013 - 2017</p>
                      <p className="text-muted-foreground mt-2">
                        Core focus on software engineering, algorithms, and database systems. Minor in Human-Computer Interaction.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-primary/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <h4 className="font-bold">Professional Certifications</h4>
                      <p className="text-primary font-medium">Various | 2015 - Present</p>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• AWS Certified Solutions Architect</li>
                        <li>• Google UX Design Professional</li>
                        <li>• Certified Information Systems Security Professional (CISSP)</li>
                        <li>• Flutter Development Bootcamp</li>
                      </ul>
                    </div>
                  </div>
                </GlassMorphism>
              </div>
            </div>
          </div>
        </section>
        
        {/* Personal Interests */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-3 animate-fade-in">BEYOND WORK</p>
              <h2 className="section-heading inline-block mb-6 animate-slide-up">Personal Interests</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                When I'm not designing or coding, here are some things I'm passionate about.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Heart className="text-primary h-12 w-12" />,
                  title: "Open Source",
                  description: "Contributing to open source projects and helping build tools that benefit the wider community."
                },
                {
                  icon: <Book className="text-primary h-12 w-12" />,
                  title: "Mentoring",
                  description: "Helping the next generation of developers through mentorship programs and educational content."
                },
                {
                  icon: <Award className="text-primary h-12 w-12" />,
                  title: "Photography",
                  description: "Capturing moments and exploring composition through landscape and street photography."
                },
                {
                  icon: <GraduationCap className="text-primary h-12 w-12" />,
                  title: "Continuous Learning",
                  description: "Always expanding my knowledge through courses, books, and experimenting with new technologies."
                }
              ].map((interest, index) => (
                <div 
                  key={interest.title} 
                  className="animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <GlassMorphism 
                    className="p-6 rounded-xl h-full flex flex-col text-center hoverable"
                    color="light"
                  >
                    <div className="flex justify-center mb-4">
                      {interest.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                    <p className="text-muted-foreground">{interest.description}</p>
                  </GlassMorphism>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
