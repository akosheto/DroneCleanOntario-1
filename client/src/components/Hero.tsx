import { Button } from "@/components/ui/button";
import { Sparkles, Plane } from "lucide-react";
import fallbackImage from "@assets/stock_images/drone_flying_over_mo_33451e12.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={fallbackImage}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://video.wixstatic.com/video/ed9853_8eed36198d614af1b0162407dc48b8dc/1080p/mp4/file.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="relative">
              <Plane className="w-7 h-7 text-primary" />
              <Sparkles className="w-4 h-4 text-primary absolute -top-1 -right-1" />
            </div>
            <span className="text-primary font-semibold tracking-wide text-sm">DRONE CLEAN ONTARIO</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of Building Maintenance
          </h1>
          
          <div className="flex flex-wrap gap-4">
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
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
