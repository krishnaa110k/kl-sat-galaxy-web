import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe, Twitter, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (in real app, this would send to backend)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'klsat@kle.edu',
      link: 'mailto:klsat@kle.edu'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 831-2498100',
      link: 'tel:+918312498100'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'KLE Technological University, Hubballi, Karnataka, India',
      link: 'https://maps.google.com/?q=KLE+Technological+University+Hubballi'
    }
  ];

  const socialLinks = [
    {
      icon: Globe,
      name: 'Website',
      url: 'https://kletech.ac.in',
      color: 'text-primary'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: '#',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: '#',
      color: 'text-foreground'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '#',
      color: 'text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to join our mission or collaborate with us? 
            We'd love to hear from you and explore opportunities together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Whether you're interested in joining our team, collaborating on research, 
                or learning more about our satellite missions, we're here to connect.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-3d border-0 group">
                  <CardContent className="p-6">
                    <a 
                      href={item.link}
                      target={item.title === 'Location' ? '_blank' : undefined}
                      rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                      className="flex items-start space-x-4 group-hover:text-primary transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center glow-primary group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-1 text-foreground">{item.title}</h4>
                        <p className="text-foreground/70 leading-relaxed">{item.details}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  >
                    <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="card-3d border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <p className="text-foreground/70">Interactive Map</p>
                    <p className="text-sm text-foreground/50">Click to view location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-3d border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-muted/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-muted/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your interest in KLSAT or how we can help..."
                    rows={6}
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full btn-space py-4 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-foreground/60 text-center">
                  We typically respond within 24-48 hours. For urgent matters, 
                  please call us directly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Hours */}
        <div className="mt-16 text-center">
          <Card className="card-3d border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Office Hours</h3>
              <div className="grid md:grid-cols-2 gap-6 text-foreground/70">
                <div>
                  <p className="font-medium text-foreground mb-1">Weekdays</p>
                  <p>9:00 AM - 6:00 PM IST</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Lab Access</p>
                  <p>Monday - Saturday</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;