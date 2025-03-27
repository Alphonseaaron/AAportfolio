import { Check } from "lucide-react";
import GlassMorphism from "./GlassMorphism";

interface PricingCategory {
  title: string;
  emoji: string;
  items: PricingItem[];
}

interface PricingItem {
  name: string;
  description: string;
  aiPrice: string;
  nonAiPrice: string;
  aiTimeline: string;
  nonAiTimeline: string;
}

const pricingData: PricingCategory[] = [
  {
    title: "Web & Mobile Development",
    emoji: "💻",
    items: [
      {
        name: "Basic Business Website",
        description: "Custom-designed static website with mobile responsiveness and SEO (5 Pages)",
        aiPrice: "$350",
        nonAiPrice: "$500",
        aiTimeline: "1-2 days",
        nonAiTimeline: "1-2 weeks"
      },
      {
        name: "Dynamic Website",
        description: "Website with database and CMS integration, custom admin panel, or user dashboard",
        aiPrice: "$1,200",
        nonAiPrice: "$1,500+",
        aiTimeline: "3-5 days",
        nonAiTimeline: "2-4 weeks"
      },
      {
        name: "E-Commerce Website",
        description: "Full-featured e-commerce website with shopping cart, payment gateway, and inventory management",
        aiPrice: "$1,800",
        nonAiPrice: "$2,500+",
        aiTimeline: "5-7 days",
        nonAiTimeline: "3-5 weeks"
      },
      {
        name: "Mobile App Development",
        description: "Custom mobile application development, including user authentication, UI/UX, and backend",
        aiPrice: "$1,500",
        nonAiPrice: "$3,000+",
        aiTimeline: "5-7 days",
        nonAiTimeline: "4-6 weeks"
      }
    ]
  },
  {
    title: "Custom Software Development",
    emoji: "🖥",
    items: [
      {
        name: "Custom Software",
        description: "Development of custom software solutions for business needs (e.g., project management, invoicing)",
        aiPrice: "$2,500",
        nonAiPrice: "$3,000+",
        aiTimeline: "4-6 days",
        nonAiTimeline: "4-6 weeks"
      },
      {
        name: "ERP System Development",
        description: "Full-fledged ERP system with modules like HR, finance, inventory management, etc.",
        aiPrice: "$4,000",
        nonAiPrice: "$5,000+",
        aiTimeline: "6-7 days",
        nonAiTimeline: "6-8 weeks"
      },
      {
        name: "CRM System Development",
        description: "Custom CRM system tailored for sales, customer service, and marketing integration",
        aiPrice: "$3,500",
        nonAiPrice: "$4,500+",
        aiTimeline: "5-6 days",
        nonAiTimeline: "5-7 weeks"
      }
    ]
  },
  {
    title: "Maintenance & Customization",
    emoji: "💡",
    items: [
      {
        name: "Maintenance & Updates",
        description: "Ongoing support, bug fixes, updates, and optimizations for AI-generated or custom websites/apps",
        aiPrice: "$100/month",
        nonAiPrice: "$150/month",
        aiTimeline: "Ongoing",
        nonAiTimeline: "Ongoing"
      },
      {
        name: "Customizations",
        description: "Tailored design and feature modifications to suit your needs",
        aiPrice: "$300+",
        nonAiPrice: "$500+",
        aiTimeline: "1-2 weeks",
        nonAiTimeline: "1-2 weeks"
      },
      {
        name: "Repairs & Fixes",
        description: "Troubleshooting, fixing broken features, improving functionality, and enhancing performance",
        aiPrice: "$250+",
        nonAiPrice: "$300+",
        aiTimeline: "2-3 days",
        nonAiTimeline: "2-5 days"
      }
    ]
  },
  {
    title: "Security & Cybersecurity Services",
    emoji: "🔒",
    items: [
      {
        name: "Penetration Testing & Security Audit",
        description: "Vulnerability testing for websites and apps to identify potential security threats",
        aiPrice: "$1,500+",
        nonAiPrice: "$2,000+",
        aiTimeline: "1-2 weeks",
        nonAiTimeline: "2 weeks"
      }
    ]
  },
  {
    title: "Add-Ons & Extra Services",
    emoji: "📈",
    items: [
      {
        name: "UI/UX Design & Prototyping",
        description: "High-quality, user-friendly design and interactive prototypes for websites/apps",
        aiPrice: "$400",
        nonAiPrice: "$500",
        aiTimeline: "1 week",
        nonAiTimeline: "1 week"
      },
      {
        name: "Custom API Development",
        description: "Development and integration of APIs to extend functionality",
        aiPrice: "$700+",
        nonAiPrice: "$800+",
        aiTimeline: "2-3 weeks",
        nonAiTimeline: "2-4 weeks"
      },
      {
        name: "SEO & Performance Optimization",
        description: "Optimization for better search engine rankings, speed, and user experience",
        aiPrice: "$250",
        nonAiPrice: "$300",
        aiTimeline: "1 week",
        nonAiTimeline: "1 week"
      },
      {
        name: "Express Delivery",
        description: "Expedited development for faster project completion",
        aiPrice: "+25% of total cost",
        nonAiPrice: "+25% of total cost",
        aiTimeline: "Varies",
        nonAiTimeline: "Varies"
      }
    ]
  }
];

const PricingTable = () => {
  return (
    <div className="space-y-12">
      {pricingData.map((category) => (
        <div key={category.title} className="animate-on-scroll">
          <GlassMorphism className="p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>{category.emoji}</span>
              {category.title}
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground">Service</th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground">AI-Generated</th>
                    <th className="text-left py-4 px-4 font-medium text-muted-foreground">Custom Development</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item, index) => (
                    <tr 
                      key={item.name}
                      className={`${
                        index !== category.items.length - 1 ? 'border-b border-border/50' : ''
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium">{item.aiPrice}</div>
                        <div className="text-sm text-muted-foreground mt-1">{item.aiTimeline}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium">{item.nonAiPrice}</div>
                        <div className="text-sm text-muted-foreground mt-1">{item.nonAiTimeline}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassMorphism>
        </div>
      ))}
      
      <div className="animate-on-scroll">
        <GlassMorphism className="p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>💳</span>
            Payment Terms & Engagement
          </h2>
          
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Check className="text-primary" size={20} />
              <span>50% upfront, 50% on completion</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary" size={20} />
              <span>Custom pricing available for long-term partnerships</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-primary" size={20} />
              <span>Flexible payment plans for larger projects</span>
            </li>
          </ul>
        </GlassMorphism>
      </div>
    </div>
  );
};

export default PricingTable;