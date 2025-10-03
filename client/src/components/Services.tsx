import { Card } from "@/components/ui/card";
import { Building2, Sun, Home } from "lucide-react";
import windowImage from "@assets/generated_images/Window_cleaning_drone_equipment_14b9b80c.png";
import solarImage from "@assets/generated_images/Drone_cleaning_solar_panels_5ecd1bc1.png";
import hardToReachImage from "@assets/generated_images/Drone_reaching_difficult_areas_b42cc43c.png";

const services = [
  {
    icon: Building2,
    title: "High-Rise Window Cleaning",
    description: "Crystal-clear windows for condos, office towers, and commercial buildings without scaffolding or safety risks.",
    image: windowImage,
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    description: "Maximize energy efficiency with our specialized drone cleaning that removes dirt and debris from solar installations.",
    image: solarImage,
  },
  {
    icon: Home,
    title: "Hard-to-Reach Areas",
    description: "Access challenging locations safely and efficiently. Perfect for architectural details and building facades.",
    image: hardToReachImage,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional drone-powered cleaning solutions for all your commercial needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate cursor-pointer"
              data-testid={`card-service-${index}`}
              onClick={() => console.log(`${service.title} clicked`)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
