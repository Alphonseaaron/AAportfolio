
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import GlassMorphism from "../ui/GlassMorphism";

export interface CaseStudyData {
  id: string;
  title: string;
  overview: string;
  skills: string[];
  image: string;
  heroImage: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  screenshots: { url: string; caption: string }[];
}

interface CaseStudyProps {
  project: CaseStudyData;
}

const CaseStudy = ({ project }: CaseStudyProps) => {
  const {
    title,
    overview,
    skills,
    heroImage,
    challenges,
    solutions,
    results,
    screenshots
  } = project;
  
  return (
    <div className="animate-fade-in">
      <div 
        className="h-[40vh] lg:h-[60vh] relative bg-cover bg-center flex items-center" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10 py-12">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-white mb-6 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-white mb-4">{title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="bg-primary/80 text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <GlassMorphism className="p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground whitespace-pre-line">{overview}</p>
            </GlassMorphism>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <GlassMorphism 
                className="p-8 rounded-xl"
                color="dark"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <XCircle className="text-red-500 mr-2" size={20} />
                  Challenges
                </h3>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </GlassMorphism>
              
              <GlassMorphism 
                className="p-8 rounded-xl"
                color="primary"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  Solutions
                </h3>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </GlassMorphism>
            </div>
            
            <GlassMorphism className="p-8 rounded-xl mb-12">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <ArrowRight className="text-primary mr-2" size={20} />
                Results & Impact
              </h3>
              <ul className="space-y-4">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">🚀</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </GlassMorphism>
            
            <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="animate-on-scroll">
                  <GlassMorphism 
                    className="overflow-hidden rounded-xl"
                    hoverable
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={screenshot.url} 
                        alt={screenshot.caption} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">{screenshot.caption}</p>
                    </div>
                  </GlassMorphism>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <GlassMorphism className="p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-muted-foreground">Category</h4>
                  <p>Custom Software Development</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-muted-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="bg-secondary px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-muted-foreground">Completed</h4>
                  <p>January 2023</p>
                </div>
                
                <div className="pt-4 border-t border-border/30">
                  <a 
                    href="#" 
                    className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors w-full"
                  >
                    Visit Project
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="flex justify-between pt-4 border-t border-border/30">
                  <Link 
                    to="/project/prev-id" 
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft size={16} className="mr-1" />
                    Previous
                  </Link>
                  
                  <Link 
                    to="/project/next-id" 
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    Next
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </GlassMorphism>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
