
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import GlassMorphism from "../ui/GlassMorphism";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  skills: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const { id, title, description, image, category, skills, link } = project;
  
  return (
    <div 
      className="group animate-on-scroll"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassMorphism 
        className="overflow-hidden rounded-xl hoverable h-full"
        color="light"
      >
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
          <div className="absolute top-4 left-4">
            <span className="bg-primary/80 text-white text-xs font-medium px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-balance">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.slice(0, 3).map((skill) => (
              <span 
                key={skill} 
                className="text-xs bg-secondary px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                +{skills.length - 3} more
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <Link 
              to={`/project/${id}`} 
              className="flex items-center text-primary group-hover:underline"
            >
              View Case Study
              <ArrowRight 
                size={16} 
                className="ml-1 transition-transform duration-300 group-hover:translate-x-1" 
              />
            </Link>
            
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                <ExternalLink size={16} className="ml-1" />
              </a>
            )}
          </div>
        </div>
      </GlassMorphism>
    </div>
  );
};

export default ProjectCard;
