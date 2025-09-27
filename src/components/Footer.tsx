import { Rocket, Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Mission Overview', href: '#mission' },
    { name: 'Subsystems', href: '#subsystems' },
    { name: 'Mission Phases', href: '#phases' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Globe, href: 'https://kletech.ac.in', label: 'Website' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-space-darker to-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center glow-primary">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                KLSAT
              </span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Pioneering space exploration through innovative CubeSat technology 
              and advancing amateur satellite communication systems.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:klsat@kle.edu"
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  klsat@kle.edu
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+918312498100"
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  +91 831-2498100
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <address className="text-foreground/70 not-italic leading-relaxed">
                  KLE Technological University<br />
                  Hubballi, Karnataka, India
                </address>
              </div>
            </div>
          </div>

          {/* Mission Stats */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Mission Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground/70">Active Missions</span>
                <span className="text-primary font-semibold">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/70">Team Members</span>
                <span className="text-primary font-semibold">50+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/70">Successful Deployments</span>
                <span className="text-primary font-semibold">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/70">Publications</span>
                <span className="text-primary font-semibold">17</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-foreground/60 text-sm">
              © {currentYear} KLSAT - KLE Society's Amateur Satellite Team. All rights reserved.
            </p>
            <p className="text-foreground/50 text-xs mt-1">
              Part of KLE Technological University
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              Back to Top
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-space-cyan opacity-50"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>
    </footer>
  );
};

export default Footer;