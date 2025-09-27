import { useState } from 'react';
import { Github, Linkedin, Mail, Users, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TeamSection = () => {
  const [selectedTeam, setSelectedTeam] = useState('klsat');

  // In a real app, these would come from the backend/admin panel
  const klsatTeam = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      role: 'Project Director',
      department: 'Aerospace Engineering',
      image: '/placeholder.svg',
      bio: 'Leading satellite systems research with 15+ years of experience in CubeSat development.',
      expertise: ['Satellite Systems', 'Orbital Mechanics', 'Mission Planning'],
      social: {
        email: 'rajesh.kumar@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Systems Engineer',
      department: 'Electronics & Communication',
      image: '/placeholder.svg',
      bio: 'Specializing in satellite communication systems and RF design for amateur satellite missions.',
      expertise: ['RF Design', 'Communication Systems', 'Signal Processing'],
      social: {
        email: 'priya.sharma@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Arjun Patel',
      role: 'Software Lead',
      department: 'Computer Science',
      image: '/placeholder.svg',
      bio: 'Developing flight software and ground station automation systems for satellite operations.',
      expertise: ['Embedded Systems', 'Flight Software', 'Ground Station'],
      social: {
        email: 'arjun.patel@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Payload Specialist',
      department: 'Physics',
      image: '/placeholder.svg',
      bio: 'Designing and implementing scientific payloads for atmospheric and space environment research.',
      expertise: ['Payload Design', 'Scientific Instruments', 'Data Analysis'],
      social: {
        email: 'sneha.reddy@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Mechanical Engineer',
      department: 'Mechanical Engineering',
      image: '/placeholder.svg',
      bio: 'Responsible for structural design, thermal management, and mechanical subsystems integration.',
      expertise: ['Structural Design', 'Thermal Analysis', 'CAD/CAM'],
      social: {
        email: 'vikram.singh@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 6,
      name: 'Ananya Joshi',
      role: 'Power Systems Engineer',
      department: 'Electrical Engineering',
      image: '/placeholder.svg',
      bio: 'Designing efficient power management systems and solar panel configurations for extended missions.',
      expertise: ['Power Systems', 'Battery Management', 'Solar Panel Design'],
      social: {
        email: 'ananya.joshi@kle.edu',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const cansatTeam = [
    {
      id: 7,
      name: 'Rohit Gupta',
      role: 'CanSat Team Lead',
      department: 'Aerospace Engineering',
      image: '/placeholder.svg',
      bio: 'Leading the CanSat program development with focus on atmospheric research and educational outreach.',
      expertise: ['CanSat Design', 'Atmospheric Research', 'Team Leadership'],
      social: {
        email: 'rohit.gupta@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 8,
      name: 'Kavya Nair',
      role: 'Parachute Systems',
      department: 'Mechanical Engineering',
      image: '/placeholder.svg',
      bio: 'Specializing in recovery systems design and parachute deployment mechanisms.',
      expertise: ['Recovery Systems', 'Parachute Design', 'Deployment Mechanisms'],
      social: {
        email: 'kavya.nair@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 9,
      name: 'Aditya Kulkarni',
      role: 'Telemetry Engineer',
      department: 'Electronics Engineering',
      image: '/placeholder.svg',
      bio: 'Developing real-time telemetry systems and data transmission protocols for CanSat missions.',
      expertise: ['Telemetry Systems', 'Data Transmission', 'Real-time Systems'],
      social: {
        email: 'aditya.kulkarni@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 10,
      name: 'Meera Iyer',
      role: 'Sensor Integration',
      department: 'Physics',
      image: '/placeholder.svg',
      bio: 'Integrating environmental sensors and developing data collection protocols for atmospheric studies.',
      expertise: ['Sensor Integration', 'Environmental Monitoring', 'Data Collection'],
      social: {
        email: 'meera.iyer@kle.edu',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const getCurrentTeam = () => {
    return selectedTeam === 'klsat' ? klsatTeam : cansatTeam;
  };

  const teamStats = {
    klsat: {
      members: klsatTeam.length,
      departments: 6,
      projects: 3,
      publications: 12
    },
    cansat: {
      members: cansatTeam.length,
      departments: 4,
      projects: 2,
      publications: 5
    }
  };

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Meet the passionate engineers, scientists, and researchers driving 
            innovation in satellite technology and space exploration
          </p>
        </div>

        {/* Team Selection */}
        <Tabs value={selectedTeam} onValueChange={setSelectedTeam} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="klsat" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>KLSAT Team</span>
            </TabsTrigger>
            <TabsTrigger value="cansat" className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>CanSat Team</span>
            </TabsTrigger>
          </TabsList>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {teamStats[selectedTeam as keyof typeof teamStats].members}
              </div>
              <div className="text-foreground/60 text-sm">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">
                {teamStats[selectedTeam as keyof typeof teamStats].departments}
              </div>
              <div className="text-foreground/60 text-sm">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-space-cyan mb-2">
                {teamStats[selectedTeam as keyof typeof teamStats].projects}
              </div>
              <div className="text-foreground/60 text-sm">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-space-silver mb-2">
                {teamStats[selectedTeam as keyof typeof teamStats].publications}
              </div>
              <div className="text-foreground/60 text-sm">Publications</div>
            </div>
          </div>

          <TabsContent value="klsat">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {klsatTeam.map((member, index) => (
                <Card key={member.id} className="card-3d border-0 group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    {/* Avatar */}
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium mb-1">{member.role}</p>
                    <p className="text-foreground/60 text-sm mb-4">{member.department}</p>
                    
                    {/* Bio */}
                    <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1 mb-4 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <Button variant="outline" size="icon" className="w-8 h-8 border-primary/30 hover:border-primary hover:bg-primary/10">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="w-8 h-8 border-primary/30 hover:border-primary hover:bg-primary/10">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="w-8 h-8 border-primary/30 hover:border-primary hover:bg-primary/10">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cansat">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cansatTeam.map((member, index) => (
                <Card key={member.id} className="card-3d border-0 group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    {/* Avatar */}
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-secondary to-space-cyan rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-secondary font-medium mb-1">{member.role}</p>
                    <p className="text-foreground/60 text-sm mb-4">{member.department}</p>
                    
                    {/* Bio */}
                    <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1 mb-4 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <Button variant="outline" size="icon" className="w-8 h-8 border-secondary/30 hover:border-secondary hover:bg-secondary/10">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="w-8 h-8 border-secondary/30 hover:border-secondary hover:bg-secondary/10">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="w-8 h-8 border-secondary/30 hover:border-secondary hover:bg-secondary/10">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="card-3d p-8 rounded-2xl max-w-2xl mx-auto">
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">Join Our Mission</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Are you passionate about space technology and satellite systems? 
              We're always looking for talented individuals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-space px-8 py-4">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;