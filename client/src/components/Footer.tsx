import { Sparkles, Plane, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Plane className="w-5 h-5 text-primary" />
                <Sparkles className="w-3 h-3 text-primary absolute -top-0.5 -right-0.5" />
              </div>
              <span className="font-bold text-lg">Drone Clean Ontario</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ontario's premier drone-based commercial cleaning service, serving the GTA with innovative technology and professional excellence.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Window Cleaning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Solar Panel Cleaning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Hard-to-Reach Areas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Commercial Buildings</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Why Choose Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Service Areas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-muted-foreground text-sm mb-3">Follow us on social media</p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate" data-testid="link-twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate" data-testid="link-linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate" data-testid="link-instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Drone Clean Ontario. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
