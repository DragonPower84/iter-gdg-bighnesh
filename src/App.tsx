import React, { useState } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { EventOverview } from './components/overview/EventOverview';
import { WhyAttend } from './components/why-attend/WhyAttend';
import { EventSchedule } from './components/schedule/EventSchedule';
import { TracksExplorer } from './components/tracks/TracksExplorer';
import { SpeakersSection } from './components/speakers/SpeakersSection';
import { HackathonSection } from './components/competitions/HackathonSection';
import { SponsorsSection } from './components/sponsors/SponsorsSection';
import { EventGallery } from './components/gallery/EventGallery';
import { VenueSection } from './components/venue/VenueSection';
import { FAQSection } from './components/faq/FAQSection';
import { Footer } from './components/footer/Footer';
import { RegistrationModal } from './components/registration/RegistrationModal';
import { VolunteerModal } from './components/modals/VolunteerModal';
import { LegalModal } from './components/modals/LegalModal';

export const App: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string | undefined>(undefined);

  const handleOpenRegisterWithTrack = (trackTitle: string) => {
    setSelectedTrack(trackTitle);
    setIsRegisterOpen(true);
  };

  const handleOpenGeneralRegister = () => {
    setSelectedTrack(undefined);
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-obsidian text-white-soft flex flex-col selection:bg-cyan-laser selection:text-obsidian">
      {/* Primary Sticky Header */}
      <Navbar onOpenRegister={handleOpenGeneralRegister} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Experience (Contains Single H1 & 3D Centerpiece) */}
        <HeroSection onOpenRegister={handleOpenGeneralRegister} />

        {/* Digital Control Center (Telemetry Metrics) */}
        <EventOverview />

        {/* Immersive Value Proposition */}
        <WhyAttend />

        {/* Interactive Event Schedule & Time Codes */}
        <EventSchedule />

        {/* Specialization Tracks Explorer */}
        <TracksExplorer onSelectTrackForRegister={handleOpenRegisterWithTrack} />

        {/* Keynote Speakers & Faculty */}
        <SpeakersSection />

        {/* Nexus 36-Hour Hackathon */}
        <HackathonSection onOpenRegister={handleOpenGeneralRegister} />

        {/* Technology Partners & Sponsors */}
        <SponsorsSection />

        {/* Hardware Labs & Technical Showcase */}
        <EventGallery />

        {/* Campus Venue & Geolocation */}
        <VenueSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer Navigation & Dispatches */}
      <Footer
        onOpenRegister={handleOpenGeneralRegister}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Modals */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        preselectedTrack={selectedTrack}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType || 'privacy'}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
};

export default App;
