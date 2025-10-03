import { Button } from "@/components/ui/button";
import { Plane, Shield, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Drone_cleaning_Toronto_high-rise_85f4addd.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Plane className="w-8 h-8 text-primary" />
            <span className="text-primary font-semibold tracking-wide">DRONE CLEAN ONTARIO</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionary Drone Cleaning for High-Rise Buildings
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Safe, efficient, and eco-friendly cleaning solutions for windows, solar panels, and hard-to-reach areas across the GTA.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              variant="default"
              data-testid="button-get-quote"
              onClick={() => console.log('Get Free Quote clicked')}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-watch-demo"
              onClick={() => console.log('Watch Demo clicked')}
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-white font-medium">500+ Buildings Cleaned</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-white font-medium">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
