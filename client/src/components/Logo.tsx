interface LogoProps {
  className?: string;
  textColor?: string;
}

export default function Logo({ className = "", textColor = "text-foreground" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Center body */}
        <rect x="14" y="14" width="8" height="8" rx="1" fill="currentColor" className="text-primary"/>
        
        {/* Arms */}
        <line x1="18" y1="18" x2="8" y2="8" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        <line x1="18" y1="18" x2="28" y2="8" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        <line x1="18" y1="18" x2="8" y2="28" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        <line x1="18" y1="18" x2="28" y2="28" stroke="currentColor" strokeWidth="2" className="text-primary"/>
        
        {/* Propellers - top left */}
        <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
        <line x1="8" y1="5" x2="8" y2="11" stroke="currentColor" strokeWidth="1" className="text-primary"/>
        
        {/* Propellers - top right */}
        <circle cx="28" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
        <line x1="28" y1="5" x2="28" y2="11" stroke="currentColor" strokeWidth="1" className="text-primary"/>
        
        {/* Propellers - bottom left */}
        <circle cx="8" cy="28" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
        <line x1="8" y1="25" x2="8" y2="31" stroke="currentColor" strokeWidth="1" className="text-primary"/>
        
        {/* Propellers - bottom right */}
        <circle cx="28" cy="28" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
        <line x1="28" y1="25" x2="28" y2="31" stroke="currentColor" strokeWidth="1" className="text-primary"/>
      </svg>
      <span className={`font-bold text-lg ${textColor}`}>
        Drone Clean Ontario
      </span>
    </div>
  );
}
