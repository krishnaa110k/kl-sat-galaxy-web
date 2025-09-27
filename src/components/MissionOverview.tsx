import { useEffect, useRef } from 'react';
import { Satellite, Target, Zap, Globe } from 'lucide-react';

const MissionOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-element');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Satellite,
      title: "CubeSat Technology",
      description: "Advanced miniaturized satellite systems designed for educational and research purposes",
    },
    {
      icon: Target,
      title: "Mission Objectives",
      description: "Advancing amateur radio communication and conducting scientific experiments in space",
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Pushing boundaries in small satellite design, power management, and communication protocols",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contributing to the international amateur satellite community and space education",
    },
  ];

  return (
    <section id="mission" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-element">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mission Overview
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            KLSAT represents the cutting edge of educational satellite technology, 
            pioneering innovative solutions for space communication and research
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="fade-in-element">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Advancing Space Technology Education
            </h3>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                The KLE Society Amateur Satellite Team (KLSAT) is dedicated to advancing 
                space technology through innovative CubeSat development and deployment. 
                Our mission focuses on creating educational opportunities while contributing 
                to real-world space science.
              </p>
              <p>
                Through our multi-phase approach, we develop increasingly sophisticated 
                satellite systems, from 1U CubeSats to advanced CanSat platforms, 
                each designed to push the boundaries of amateur satellite capabilities.
              </p>
              <p>
                Our team combines theoretical knowledge with hands-on engineering experience, 
                creating a comprehensive learning environment that prepares the next generation 
                of space technology professionals.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="fade-in-element">
            <div className="relative">
              <div className="card-3d p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-foreground/60">Hours of Testing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">12</div>
                    <div className="text-sm text-foreground/60">Subsystems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-space-cyan mb-2">3</div>
                    <div className="text-sm text-foreground/60">Mission Phases</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-space-silver mb-2">50+</div>
                    <div className="text-sm text-foreground/60">Team Members</div>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-secondary/20 to-space-cyan/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-in-element card-3d p-6 rounded-xl text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center glow-primary group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-20 fade-in-element">
          <div className="card-3d p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Technical Specifications</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-primary mb-3">Dimensions</h4>
                <p className="text-foreground/70">10cm x 10cm x 10cm (1U)</p>
                <p className="text-foreground/70">10cm x 10cm x 20cm (2U)</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-secondary mb-3">Frequency</h4>
                <p className="text-foreground/70">Amateur Radio Bands</p>
                <p className="text-foreground/70">UHF/VHF Communication</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-space-cyan mb-3">Power</h4>
                <p className="text-foreground/70">Solar Panel Array</p>
                <p className="text-foreground/70">Li-ion Battery Backup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionOverview;