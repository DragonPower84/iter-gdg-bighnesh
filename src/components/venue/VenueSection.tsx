import React, { useState } from 'react';
import { EVENT_METADATA } from '../../data/eventData';
import { MapPin, Train, Bus, Car, Info, ExternalLink, X, User, Phone, Mail } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [showTransitModal, setShowTransitModal] = useState<boolean>(false);

  return (
    <section id="venue" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-surface-border/60 bg-midnight relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
            <span className="w-1.5 h-1.5 bg-cyan-laser rounded-sm" />
            <span>// SECTION 07: CAMPUS GEOLOCATION &amp; LEAD CONTACT</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white-soft">
            VENUE &amp; LOGISTICS DIRECTORY
          </h2>
          <p className="text-silver-muted text-sm sm:text-base max-w-2xl mt-2 font-sans">
            Hosted at the premier engineering institute of Siksha 'O' Anusandhan (SOA) University in Bhubaneswar, Odisha.
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Venue Card (7 Cols) */}
          <div className="lg:col-span-7 bg-surface border border-surface-border p-6 sm:p-8 rounded-lg">
            <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-lime-accent" />
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white-soft">
                    {EVENT_METADATA.venueCampus}
                  </h3>
                  <span className="text-xs font-mono text-cyan-laser">
                    {EVENT_METADATA.venueName} // BHUBANESWAR
                  </span>
                </div>
              </div>
            </div>

            <p className="text-silver-muted text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {EVENT_METADATA.venueAddress}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs font-mono">
              <div className="bg-midnight border border-surface-border p-3.5 rounded-md">
                <span className="text-silver-muted uppercase block mb-1">BADGE CHECK-IN HOURS:</span>
                <span className="text-white-soft font-bold">08:00 - 10:00 Daily</span>
                <span className="text-silver-muted text-[11px] block mt-0.5">Campus 1 Entrance Desk</span>
              </div>

              <div className="bg-midnight border border-surface-border p-3.5 rounded-md">
                <span className="text-silver-muted uppercase block mb-1">CAMPUS TRANSIT &amp; PARKING:</span>
                <span className="text-white-soft font-bold">ITER Central Grounds</span>
                <span className="text-silver-muted text-[11px] block mt-0.5">Free for badge holders</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-surface-border">
              <a
                href="https://maps.google.com/?q=ITER+SOA+University+Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-cyan-laser hover:bg-cyan-laser/90 text-obsidian font-display font-bold text-xs uppercase px-5 py-2.5 rounded-md transition-colors"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setShowTransitModal(true)}
                className="inline-flex items-center space-x-2 bg-midnight hover:bg-surface text-silver-muted hover:text-white-soft border border-surface-border text-xs font-mono uppercase px-4 py-2.5 rounded-md transition-colors cursor-pointer"
              >
                <Info className="w-4 h-4 text-cyan-laser" />
                <span>TRANSIT INSTRUCTIONS</span>
              </button>
            </div>
          </div>

          {/* Organizer & Lead Contact Card (5 Cols) */}
          <div className="lg:col-span-5 bg-surface border border-surface-border p-6 sm:p-8 rounded-lg flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2 pb-4 border-b border-surface-border mb-4">
                <User className="w-5 h-5 text-lime-accent" />
                <span className="font-display font-bold text-lg text-white-soft">
                  OFFICIAL ORGANIZER CONTACT
                </span>
              </div>

              {/* Lead Contact Person: Bighnesh Patro */}
              <div className="bg-midnight border border-surface-border p-4 rounded-md mb-4">
                <span className="text-[10px] font-mono text-lime-accent uppercase block mb-1">
                  LEAD ORGANIZER &amp; COMMUNITY HEAD
                </span>
                <h4 className="font-display font-bold text-xl text-white-soft">
                  {EVENT_METADATA.leadOrganizer}
                </h4>
                <p className="text-xs font-mono text-silver-muted mt-0.5">
                  {EVENT_METADATA.organizer}
                </p>

                <div className="mt-3 pt-3 border-t border-surface-border/60 space-y-2 text-xs font-mono">
                  <div className="flex items-center space-x-2 text-silver-muted">
                    <Mail className="w-3.5 h-3.5 text-cyan-laser" />
                    <a href={`mailto:${EVENT_METADATA.leadOrganizerEmail}`} className="hover:text-white-soft transition-colors">
                      {EVENT_METADATA.leadOrganizerEmail}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-silver-muted">
                    <Phone className="w-3.5 h-3.5 text-lime-accent" />
                    <span>{EVENT_METADATA.leadOrganizerPhone}</span>
                  </div>
                </div>
              </div>

              {/* Institution Credentials */}
              <div className="text-xs font-mono text-silver-muted space-y-2">
                <div className="flex items-center space-x-2 text-white-soft">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-laser" />
                  <span>Siksha 'O' Anusandhan (SOA) Deemed to be University</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-laser" />
                  <span>Faculty of Engineering: ITER Bhubaneswar</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-border text-[11px] font-mono text-silver-muted">
              Organized in official collaboration with Google Developer Groups On Campus.
            </div>
          </div>
        </div>

        {/* Modal: Detailed Transit Guide */}
        {showTransitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
            <div className="bg-surface border border-surface-border w-full max-w-lg p-6 sm:p-8 rounded-lg shadow-2xl relative">
              <button
                onClick={() => setShowTransitModal(false)}
                className="absolute top-5 right-5 text-silver-muted hover:text-white-soft p-1.5 bg-midnight rounded-md border border-surface-border"
                aria-label="Close transit instructions modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
                <span className="w-2 h-2 rounded-full bg-lime-accent" />
                <span>TRANSIT &amp; CONNECTIVITY // BHUBANESWAR</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white-soft mb-4">
                HOW TO REACH ITER CAMPUS 1
              </h3>

              <div className="space-y-4 text-xs font-mono text-silver-muted">
                <div className="p-3 bg-midnight border border-surface-border rounded-md">
                  <div className="flex items-center space-x-2 text-white-soft font-bold mb-1">
                    <Train className="w-4 h-4 text-cyan-laser" />
                    <span>RAILWAY STATION (BBS)</span>
                  </div>
                  Bhubaneswar Main Railway Station is approximately 8 km from ITER Campus. Autos, Ola, and Uber operate round the clock directly to Campus 1, Jagamara.
                </div>

                <div className="p-3 bg-midnight border border-surface-border rounded-md">
                  <div className="flex items-center space-x-2 text-white-soft font-bold mb-1">
                    <Bus className="w-4 h-4 text-lime-accent" />
                    <span>AIRPORT CONNECTIVITY (BBI)</span>
                  </div>
                  Biju Patnaik International Airport is only 5.5 km from ITER. Cab transit takes approximately 15 minutes via Khandagiri-Jagamara Road.
                </div>

                <div className="p-3 bg-midnight border border-surface-border rounded-md">
                  <div className="flex items-center space-x-2 text-white-soft font-bold mb-1">
                    <Car className="w-4 h-4 text-white-soft" />
                    <span>MO BUS (CITY PUBLIC TRANSIT)</span>
                  </div>
                  CRUT Mo Bus Route 18 and Route 26 drop passengers directly at Jagamara Chhak, a 3-minute walk to the ITER Campus 1 Main Gate.
                </div>
              </div>

              <div className="flex justify-end pt-4 mt-6 border-t border-surface-border">
                <button
                  onClick={() => setShowTransitModal(false)}
                  className="px-4 py-2 bg-cyan-laser text-obsidian font-display font-bold text-xs uppercase rounded-md"
                >
                  GOT IT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
