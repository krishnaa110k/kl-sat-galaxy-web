import { useState } from 'react';
import { Rocket, Satellite, Plane, ChevronRight, Calendar, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MissionPhases = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 'klsat-1u',
      title: 'KLSAT-1U',
      subtitle: 'First CubeSat Mission',
      icon: Satellite,
      status: 'completed',
      timeline: 'Phase 1 - 2023',
      description: 'Our inaugural 1U CubeSat mission focusing on basic orbital operations and communication systems testing.',
      objectives: [
        'Establish stable communication link',
        'Test power management systems',
        'Validate orbital mechanics',
        'Collect environmental data'
      ],
      achievements: [
        'Successfully deployed and maintained orbit for 6 months',
        'Achieved 95% communication success rate',
        'Collected over 10,000 data points',
        'Demonstrated battery longevity in space environment'
      ],
      specs: {
        'Mission Duration': '6 months',
        'Orbit Altitude': '400-450 km',
        'Communication Frequency': '437.8 MHz',
        'Power Generation': '2.5W average'
      }
    },
    {
      id: 'klsat-2u',
      title: 'KLSAT-2U',
      subtitle: 'Advanced CubeSat Platform',
      icon: Rocket,
      status: 'in-progress',
      timeline: 'Phase 2 - 2024',
      description: 'Enhanced 2U CubeSat with advanced payload capabilities, improved communication systems, and extended mission duration.',
      objectives: [
        'Advanced Earth observation capabilities',
        'Improved communication protocols',
        'Extended mission duration (12+ months)',
        'Technology demonstration missions'
      ],
      achievements: [
        'Payload integration completed',
        'Ground testing phase successful',
        'Launch scheduled for Q2 2024',
        'Enhanced antenna system deployed'
      ],
      specs: {
        'Mission Duration': '12+ months',
        'Orbit Altitude': '500-600 km',
        'Communication Frequency': '437.8 MHz / 145.8 MHz',
        'Power Generation': '4.5W average'
      }
    },
    {
      id: 'cansat',
      title: 'CanSat Program',
      subtitle: 'Atmospheric Research Platform',
      icon: Plane,
      status: 'planning',
      timeline: 'Phase 3 - 2024-2025',
      description: 'Comprehensive CanSat development program for atmospheric research and student education initiatives.',
      objectives: [
        'Atmospheric data collection',
        'Parachute deployment systems',
        'Real-time telemetry streaming',
        'Educational outreach programs'
      ],
      achievements: [
        'Initial design phase completed',
        'Team formation in progress',
        'Partnership with educational institutions',
        'Funding secured for development'
      ],
      specs: {
        'Mission Duration': 'Single flight (2-3 hours)',
        'Deployment Altitude': '1-3 km',
        'Communication Range': '10+ km',
        'Recovery System': 'Dual parachute'
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-primary';
      case 'planning': return 'text-space-cyan';
      default: return 'text-foreground/60';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return Target;
      case 'planning': return Calendar;
      default: return Calendar;
    }
  };

  return (
    <section id="phases" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mission Phases
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Follow our journey through multiple mission phases, each building upon 
            previous successes to advance space technology capabilities
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 justify-center">
          {phases.map((phase, index) => {
            const StatusIcon = getStatusIcon(phase.status);
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(index)}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-300 ${
                  activePhase === index
                    ? 'border-primary bg-primary/10 glow-primary'
                    : 'border-border hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${
                  activePhase === index ? 'from-primary to-secondary' : 'from-muted to-muted-foreground'
                } flex items-center justify-center`}>
                  <phase.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">{phase.title}</div>
                  <div className="text-sm text-foreground/60">{phase.timeline}</div>
                </div>
                <StatusIcon className={`w-4 h-4 ${getStatusColor(phase.status)}`} />
              </button>
            );
          })}
        </div>

        {/* Active Phase Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-primary">
                  {(() => {
                    const PhaseIcon = phases[activePhase].icon;
                    return <PhaseIcon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">{phases[activePhase].title}</h3>
                  <p className="text-foreground/60">{phases[activePhase].subtitle}</p>
                </div>
                <div className={`ml-auto px-3 py-1 rounded-full text-xs font-medium border ${
                  phases[activePhase].status === 'completed' ? 'border-green-400/30 bg-green-400/10 text-green-400' :
                  phases[activePhase].status === 'in-progress' ? 'border-primary/30 bg-primary/10 text-primary' :
                  'border-space-cyan/30 bg-space-cyan/10 text-space-cyan'
                }`}>
                  {phases[activePhase].status.toUpperCase().replace('-', ' ')}
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {phases[activePhase].description}
              </p>
            </div>

            {/* Objectives */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Mission Objectives
              </h4>
              <div className="space-y-3">
                {phases[activePhase].objectives.map((objective, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/80">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Key Achievements
              </h4>
              <div className="space-y-3">
                {phases[activePhase].achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-foreground/80">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications Card */}
          <div className="space-y-6">
            <Card className="card-3d border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Technical Specifications</h4>
                <div className="space-y-4">
                  {Object.entries(phases[activePhase].specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-foreground/70 font-medium">{key}</span>
                      <span className="text-foreground font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline Visualization */}
            <Card className="card-3d border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Mission Timeline</h4>
                <div className="space-y-4">
                  {phases.map((phase, index) => (
                    <div key={phase.id} className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        index === activePhase ? 'bg-primary' : 
                        phase.status === 'completed' ? 'bg-green-400' : 'bg-foreground/30'
                      }`}></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{phase.title}</div>
                        <div className="text-xs text-foreground/60">{phase.timeline}</div>
                      </div>
                      {index === activePhase && <ChevronRight className="w-4 h-4 text-primary" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="btn-space px-8 py-4">
            Join Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MissionPhases;