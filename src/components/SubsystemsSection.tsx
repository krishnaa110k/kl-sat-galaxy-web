import { useState } from 'react';
import { Battery, Radio, MapPin, Antenna, Plane, Cpu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const SubsystemsSection = () => {
  const [selectedSubsystem, setSelectedSubsystem] = useState<any>(null);

  const subsystems = [
    {
      id: 'bms',
      title: 'Battery Management System',
      icon: Battery,
      color: 'from-primary to-primary/80',
      description: 'Advanced power management and distribution system',
      details: {
        overview: 'The Battery Management System (BMS) is critical for satellite operation, managing power distribution, battery health monitoring, and ensuring optimal energy utilization throughout the mission lifecycle.',
        features: [
          'Real-time voltage and current monitoring',
          'Temperature-controlled charging algorithms',
          'Over-discharge and over-charge protection',
          'Power distribution to all subsystems',
          'Solar panel maximum power point tracking',
          'Emergency shutdown protocols'
        ],
        specifications: {
          'Battery Type': 'Lithium-ion',
          'Capacity': '2600mAh',
          'Voltage': '7.4V nominal',
          'Efficiency': '>95%',
          'Operating Temp': '-20°C to +60°C'
        }
      }
    },
    {
      id: 'payload',
      title: 'Payload System',
      icon: Cpu,
      color: 'from-secondary to-secondary/80',
      description: 'Scientific instruments and experimental modules',
      details: {
        overview: 'The payload system carries the primary scientific instruments and experimental equipment, designed to conduct various research activities and data collection during the mission.',
        features: [
          'Environmental sensors (temperature, humidity, pressure)',
          'Radiation monitoring equipment',
          'Camera system for Earth imaging',
          'Amateur radio transponder',
          'Data logging and storage',
          'Experimental modules interface'
        ],
        specifications: {
          'Camera Resolution': '5MP',
          'Storage Capacity': '32GB',
          'Sensor Accuracy': '±0.1°C',
          'Data Rate': '9600 bps',
          'Power Consumption': '<2W'
        }
      }
    },
    {
      id: 'tracking',
      title: 'Tracking System',
      icon: MapPin,
      color: 'from-space-cyan to-space-cyan/80',
      description: 'GPS and orbital positioning technology',
      details: {
        overview: 'The tracking system provides precise positioning data and orbital tracking capabilities, essential for mission planning, data correlation, and ground station communication scheduling.',
        features: [
          'High-precision GPS receiver',
          'Orbital mechanics calculations',
          'Ground track prediction',
          'Doppler shift compensation',
          'Time synchronization',
          'Position data downlink'
        ],
        specifications: {
          'GPS Accuracy': '<5m',
          'Update Rate': '1Hz',
          'Channels': '12',
          'Cold Start': '<30s',
          'Sensitivity': '-160dBm'
        }
      }
    },
    {
      id: 'ground-station',
      title: 'Ground Station',
      icon: Antenna,
      color: 'from-space-silver to-muted',
      description: 'Earth-based communication and control center',
      details: {
        overview: 'The ground station serves as the primary communication hub, providing command and control capabilities, data reception, and mission monitoring from Earth-based facilities.',
        features: [
          'High-gain directional antennas',
          'Automated satellite tracking',
          'Command and telemetry processing',
          'Data archiving and analysis',
          '24/7 monitoring capabilities',
          'Emergency command protocols'
        ],
        specifications: {
          'Frequency Range': '430-440 MHz',
          'Antenna Gain': '15 dBi',
          'Tracking Accuracy': '0.1°',
          'Data Rate': 'Up to 38.4 kbps',
          'Range': '>2000 km'
        }
      }
    },
    {
      id: 'comms',
      title: 'Communication System',
      icon: Radio,
      color: 'from-green-500 to-green-600',
      description: 'RF communication and data transmission',
      details: {
        overview: 'The communication system handles all RF communications between the satellite and ground stations, including telemetry downlink, command uplink, and amateur radio operations.',
        features: [
          'Dual-band transceiver (UHF/VHF)',
          'Packet radio protocols',
          'Beacon transmission',
          'Digital signal processing',
          'Antenna deployment system',
          'Software-defined radio capabilities'
        ],
        specifications: {
          'Transmit Power': '1W',
          'Frequency': '437.8 MHz',
          'Modulation': 'AFSK, FSK',
          'Data Protocol': 'AX.25',
          'Sensitivity': '-110 dBm'
        }
      }
    },
    {
      id: 'parachute',
      title: 'Recovery System',
      icon: Plane,
      color: 'from-orange-500 to-red-500',
      description: 'Parachute deployment and recovery mechanism',
      details: {
        overview: 'The recovery system ensures safe return of the satellite or payload to Earth, featuring controlled descent mechanisms and location tracking for retrieval operations.',
        features: [
          'Automatic deployment system',
          'Dual-parachute configuration',
          'Altitude-based triggering',
          'GPS tracking during descent',
          'Impact-resistant landing system',
          'Recovery beacon transmission'
        ],
        specifications: {
          'Deployment Altitude': '500m AGL',
          'Descent Rate': '5-7 m/s',
          'Parachute Size': '1.2m diameter',
          'Recovery Range': '10km radius',
          'Beacon Duration': '48 hours'
        }
      }
    }
  ];

  return (
    <section id="subsystems" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Subsystems
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore the intricate systems that power our satellite missions, 
            each engineered for reliability and performance in the harsh environment of space
          </p>
        </div>

        {/* Subsystems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subsystems.map((subsystem, index) => (
            <div
              key={subsystem.id}
              className="card-3d p-6 rounded-xl cursor-pointer group hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedSubsystem(subsystem)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${subsystem.color} rounded-full flex items-center justify-center glow-primary group-hover:animate-pulse`}>
                <subsystem.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-center text-foreground group-hover:text-primary transition-colors">
                {subsystem.title}
              </h3>
              <p className="text-foreground/70 text-sm text-center leading-relaxed mb-4">
                {subsystem.description}
              </p>

              {/* Learn More Button */}
              <div className="text-center">
                <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Subsystem Detail Modal */}
        <Dialog open={!!selectedSubsystem} onOpenChange={() => setSelectedSubsystem(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
            {selectedSubsystem && (
              <>
                <DialogHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${selectedSubsystem.color} rounded-full flex items-center justify-center`}>
                      {(() => {
                        const IconComponent = selectedSubsystem.icon;
                        return <IconComponent className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold text-foreground">
                        {selectedSubsystem.title}
                      </DialogTitle>
                      <DialogDescription className="text-foreground/70">
                        {selectedSubsystem.description}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Overview</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {selectedSubsystem.details.overview}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedSubsystem.details.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Specifications</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                       {Object.entries(selectedSubsystem.details.specifications).map(([key, value]) => (
                        <div key={key} className="bg-muted/50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-primary">{key}</div>
                          <div className="text-foreground/80">{String(value)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default SubsystemsSection;