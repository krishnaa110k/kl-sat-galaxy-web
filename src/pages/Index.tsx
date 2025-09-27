import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MissionOverview from '@/components/MissionOverview';
import SubsystemsSection from '@/components/SubsystemsSection';
import MissionPhases from '@/components/MissionPhases';
import MultimediaSection from '@/components/MultimediaSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MissionOverview />
      <MultimediaSection />
      <SubsystemsSection />
      <MissionPhases />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
