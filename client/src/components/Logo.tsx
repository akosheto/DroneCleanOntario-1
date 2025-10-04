interface LogoProps {
  className?: string;
  textColor?: string;
}

export default function Logo({ className = "", textColor = "text-foreground" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
        <circle cx="16" cy="16" r="3" fill="currentColor" className="text-primary"/>
        <circle cx="10" cy="12" r="1.5" fill="currentColor" className="text-primary"/>
        <circle cx="22" cy="12" r="1.5" fill="currentColor" className="text-primary"/>
        <circle cx="10" cy="20" r="1.5" fill="currentColor" className="text-primary"/>
        <circle cx="22" cy="20" r="1.5" fill="currentColor" className="text-primary"/>
        <line x1="16" y1="13" x2="16" y2="8" stroke="currentColor" strokeWidth="1" className="text-primary"/>
        <line x1="13" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="1" className="text-primary"/>
        <line x1="19" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="1" className="text-primary"/>
        <line x1="16" y1="19" x2="16" y2="24" stroke="currentColor" strokeWidth="1" className="text-primary"/>
      </svg>
      <span className={`font-bold text-lg ${textColor}`}>
        Drone Clean Ontario
      </span>
    </div>
  );
}
