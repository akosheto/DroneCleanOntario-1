import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const areas = [
  "Toronto", "Mississauga", "Brampton", 
  "Markham", "Vaughan", "Richmond Hill",
  "Oakville", "Burlington", "Pickering",
  "Ajax", "Whitby", "Oshawa"
];

export default function ServiceAreas() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Serving the Greater Toronto Area
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional drone cleaning services throughout Ontario
          </p>
        </div>
        
        <Card className="p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-semibold">Coverage Areas</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 p-3 rounded-md hover-elevate cursor-pointer"
                data-testid={`area-${index}`}
                onClick={() => console.log(`${area} clicked`)}
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            Don't see your area? <span className="text-primary font-medium cursor-pointer hover:underline" onClick={() => console.log('Contact us clicked')}>Contact us</span> to discuss service availability
          </p>
        </Card>
      </div>
    </section>
  );
}
