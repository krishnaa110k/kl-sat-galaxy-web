import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-satellite-launch.jpg';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#mission');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        {/* Mission Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
          <span className="text-sm font-medium text-primary">Active Mission</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 float">
          <span className="bg-gradient-to-r from-primary via-secondary to-space-cyan bg-clip-text text-transparent">
            KLSAT
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-4 text-foreground/90">
          Satellite Mission
        </h2>

        <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Pioneering space exploration through innovative CubeSat technology and 
          advancing amateur satellite communication systems
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="btn-space px-8 py-4 text-lg font-semibold"
            onClick={() => scrollToNext()}
          >
            Explore Mission
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg border-primary/30 hover:border-primary hover:bg-primary/10"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Team
          </Button>
        </div>

        {/* Mission Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-foreground/60">Active Missions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-foreground/60">Ground Station</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-space-cyan mb-2">100+</div>
            <div className="text-foreground/60">Team Members</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-secondary transition-colors duration-300 scroll-indicator"
      >
        <ChevronDown size={32} />
      </button>

      {/* Pulse Rings */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-4 border-2 border-primary rounded-full pulse-ring"></div>
        <div className="w-4 h-4 border-2 border-primary rounded-full pulse-ring absolute top-0 left-0" style={{ animationDelay: '0.7s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;