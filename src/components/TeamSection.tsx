import { useState } from 'react';
import { Github, Linkedin, Mail, Users, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Team member images
import kavyaImg from '@/assets/team/kavya.jpg';
import kishanImg from '@/assets/team/kishan.jpg';
import chahatImg from '@/assets/team/chahat.jpg';
import sathvikaImg from '@/assets/team/sathvika.jpg';
import tejeswariImg from '@/assets/team/tejeswari.jpg';
import prernaImg from '@/assets/team/prerna.jpg';
import sailakshmiImg from '@/assets/team/sailakshmi.jpg';
import keerthiImg from '@/assets/team/keerthi.jpg';
import pujyamImg from '@/assets/team/pujyam.jpg';
import badhrunisaImg from '@/assets/team/badhrunisa.jpg';
import saratImg from '@/assets/team/sarat.jpg';
import karthikImg from '@/assets/team/karthik.jpg';
import hariImg from '@/assets/team/hari.jpg';
import tejaImg from '@/assets/team/teja.jpg';
import yaswanthImg from '@/assets/team/yaswanth.jpg';
import revanthImg from '@/assets/team/revanth.jpg';
import sowjnyaImg from '@/assets/team/sowjnya.jpg';

const TeamSection = () => {
  const [selectedTeam, setSelectedTeam] = useState('klsat');

  // In a real app, these would come from the backend/admin panel
  const klsatTeam = [
    {
      id: 1,
      name: 'Dr. K. Chilsri Kavya',
      role: 'Faculty Advisor',
      department: 'KLSAT Team',
      image: kavyaImg,
      bio: 'Guiding the team with expertise in satellite systems and research.',
      expertise: ['Research', 'Guidance', 'Mentoring'],
      social: {
        email: 'kavya@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Dadani Kishan Kumar',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: kishanImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Engineering', 'Systems', 'Development'],
      social: {
        email: 'kishan@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Shaik Chahat Muzasim',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: chahatImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Engineering', 'Development', 'Research'],
      social: {
        email: 'chahat@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Sathvika Parvathaneni',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: sathvikaImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Satellite Systems', 'Research', 'Development'],
      social: {
        email: 'sathvika@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 5,
      name: 'Gutta Tejeswari',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: tejeswariImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Systems', 'Development', 'Research'],
      social: {
        email: 'tejeswari@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 6,
      name: 'Karnapp Prerna',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: prernaImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Engineering', 'Development', 'Research'],
      social: {
        email: 'prerna@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 7,
      name: 'Pothireddy Sai Lakshmi',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: sailakshmiImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Systems', 'Development', 'Research'],
      social: {
        email: 'sailakshmi@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 8,
      name: 'Keerthi Vinjamuri',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: keerthiImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Engineering', 'Development', 'Research'],
      social: {
        email: 'keerthi@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 9,
      name: 'Pujyam Bapeswara Rao',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: pujyamImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Systems', 'Development', 'Research'],
      social: {
        email: 'pujyam@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 10,
      name: 'Shaik Badhrunisa',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: badhrunisaImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Engineering', 'Development', 'Research'],
      social: {
        email: 'badhrunisa@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 11,
      name: 'Dr. K. Sarat Kumar',
      role: 'Faculty Advisor',
      department: 'KLSAT Team',
      image: saratImg,
      bio: 'Guiding the team with expertise in satellite systems and research.',
      expertise: ['Research', 'Guidance', 'Mentoring'],
      social: {
        email: 'sarat@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 12,
      name: 'Kukunuri Sai Karthik',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: karthikImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Engineering', 'Development', 'Research'],
      social: {
        email: 'karthik@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 13,
      name: 'Murra Hari Narayana',
      role: 'Team Member',
      department: 'KLSAT Team',
      image: hariImg,
      bio: 'Contributing to satellite mission development and research.',
      expertise: ['Systems', 'Development', 'Research'],
      social: {
        email: 'hari@kle.edu',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const cansatTeam = [
    {
      id: 1,
      name: 'Vankayala Teja',
      role: 'CanSat Team Member',
      department: 'CanSat Program',
      image: tejaImg,
      bio: 'Contributing to CanSat mission development and atmospheric research.',
      expertise: ['CanSat Design', 'Atmospheric Research', 'Engineering'],
      social: {
        email: 'teja@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Chavva Yaswanth',
      role: 'CanSat Team Member',
      department: 'CanSat Program',
      image: yaswanthImg,
      bio: 'Contributing to CanSat mission development and atmospheric research.',
      expertise: ['Telemetry', 'Data Systems', 'Engineering'],
      social: {
        email: 'yaswanth@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Desagiri Revanth',
      role: 'CanSat Team Member',
      department: 'CanSat Program',
      image: revanthImg,
      bio: 'Contributing to CanSat mission development and atmospheric research.',
      expertise: ['Recovery Systems', 'Development', 'Engineering'],
      social: {
        email: 'revanth@kle.edu',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Eddula Sowjnya',
      role: 'CanSat Team Member',
      department: 'CanSat Program',
      image: sowjnyaImg,
      bio: 'Contributing to CanSat mission development and atmospheric research.',
      expertise: ['Sensor Integration', 'Data Collection', 'Engineering'],
      social: {
        email: 'sowjnya@kle.edu',
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
      departments: 8,
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
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/40">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-secondary/20 group-hover:scale-110 transition-transform duration-300 group-hover:border-secondary/40">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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