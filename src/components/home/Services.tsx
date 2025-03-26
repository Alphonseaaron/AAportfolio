
import { Code, Layout, Shield, Smartphone } from "lucide-react";
import GlassMorphism from "../ui/GlassMorphism";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Layout className="text-primary h-12 w-12" />,
    title: "UI/UX Design",
    description: "Creating intuitive, visually appealing interfaces that enhance user experience and drive engagement."
  },
  {
    icon: <Smartphone className="text-primary h-12 w-12" />,
    title: "App Development",
    description: "Building cross-platform mobile applications with Flutter and native technologies for iOS and Android."
  },
  {
    icon: <Code className="text-primary h-12 w-12" />,
    title: "Web Development",
    description: "Developing responsive, performant websites and web applications with modern technologies and frameworks."
  },
  {
    icon: <Shield className="text-primary h-12 w-12" />,
    title: "Cybersecurity",
    description: "Implementing robust security measures to protect digital assets, data, and user privacy across platforms."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-3 animate-fade-in">EXPERTISE</p>
          <h2 className="section-heading inline-block mb-6 animate-slide-up">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Comprehensive digital solutions tailored to your needs. From concept to deployment, I handle all aspects of the development lifecycle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GlassMorphism 
                className="p-6 rounded-xl h-full flex flex-col text-center hoverable"
                color="light"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </GlassMorphism>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <GlassMorphism 
                className="p-8 rounded-xl"
                color="primary"
                intensity="light"
              >
                <h3 className="text-2xl font-bold mb-4">My Development Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong className="font-medium">User-Centered Design:</strong> 
                      <p className="text-muted-foreground mt-1">
                        Focusing on real user needs and behaviors to create intuitive and accessible interfaces.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong className="font-medium">Security First:</strong> 
                      <p className="text-muted-foreground mt-1">
                        Building security into every layer of the application from the ground up, not as an afterthought.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong className="font-medium">Iterative Development:</strong> 
                      <p className="text-muted-foreground mt-1">
                        Using agile methodologies to deliver incremental value and adapt to changing requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong className="font-medium">Performance Optimization:</strong> 
                      <p className="text-muted-foreground mt-1">
                        Creating fast, responsive applications that provide an excellent user experience on all devices.
                      </p>
                    </div>
                  </li>
                </ul>
              </GlassMorphism>
            </div>
            
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6">Technologies I Work With</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Flutter & Dart",
                  "React & Next.js",
                  "Node.js",
                  "Firebase",
                  "Tailwind CSS",
                  "TypeScript",
                  "REST APIs",
                  "MongoDB",
                  "SQL Databases",
                  "AWS",
                  "Payment Gateways",
                  "Cybersecurity Tools"
                ].map((tech, index) => (
                  <div 
                    key={tech}
                    className="bg-secondary rounded-lg p-3 text-center transition-all duration-300 hover:bg-primary/10 hover:scale-105"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
