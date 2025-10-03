import { Card } from "@/components/ui/card";
import { Shield, Zap, Leaf, DollarSign } from "lucide-react";
import teamImage from "@assets/generated_images/Professional_drone_cleaning_team_eab976d3.png";

const features = [
  {
    icon: Shield,
    title: "No Scaffolding Required",
    description: "Eliminate safety risks and access issues with our advanced drone technology",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Complete projects in a fraction of the time compared to traditional methods",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Minimal water usage and environmentally safe cleaning solutions",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Save up to 40% compared to traditional cleaning methods",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Drone Clean Ontario?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology meets professional service excellence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6"
                data-testid={`card-feature-${index}`}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={teamImage} 
              alt="Professional drone cleaning team"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
