import React, { useState } from 'react';
import { Terminal, ArrowRight, CheckCircle2, User, Mail, Phone, MapPin } from 'lucide-react';
import { EVENT_METADATA } from '../../data/eventData';

interface FooterProps {
  onOpenRegister: () => void;
  onOpenVolunteer: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRegister,
  onOpenVolunteer,
  onOpenLegal,
}) => {
  const [emailSub, setEmailSub] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub.trim()) {
      setSubSuccess(true);
      setEmailSub('');
    }
  };

  return (
    <footer className="bg-obsidian border-t border-surface-border text-silver-muted pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Organizer Anchor Banner */}
        <div className="bg-surface border border-surface-border p-6 rounded-lg mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-midnight border border-surface-border flex items-center justify-center rounded-md text-cyan-laser">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-lime-accent uppercase tracking-wider font-semibold">
                  OFFICIAL ORGANIZING COMMUNITY
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-white-soft">
                {EVENT_METADATA.organizer}
              </h3>
              <p className="text-xs font-mono text-silver-muted mt-0.5">
                Institute of Technical Education and Research (ITER), Siksha 'O' Anusandhan (SOA), Bhubaneswar
              </p>
            </div>
          </div>

          {/* Lead Contact Person Capsule */}
          <div className="bg-midnight border border-surface-border/80 px-4 py-3 rounded-md flex items-center space-x-3 text-xs font-mono">
            <User className="w-4 h-4 text-cyan-laser flex-shrink-0" />
            <div>
              <span className="text-silver-muted text-[10px] block uppercase">LEAD CONTACT PERSON</span>
              <span className="text-white-soft font-bold">{EVENT_METADATA.leadOrganizer}</span>
              <span className="text-cyan-laser block text-[11px]">{EVENT_METADATA.leadOrganizerEmail}</span>
            </div>
          </div>
        </div>

        {/* Multi-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-surface-border/60">
          {/* Column 1: Brand & Contact Coordinates (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-display font-extrabold text-xl text-white-soft tracking-wider">
                TEKNO KRAFFT 2026
              </span>
            </div>

            <p className="text-xs text-silver-muted leading-relaxed font-sans">
              Futuristic technology festival and engineering summit hosted by Google Developer Group on Campus at ITER, Siksha 'O' Anusandhan (SOA) Deemed to be University, Bhubaneswar.
            </p>

            {/* Direct Contact Coordinates */}
            <div className="space-y-2 text-xs font-mono text-silver-muted pt-1">
              <div className="flex items-center space-x-2">
                <User className="w-3.5 h-3.5 text-lime-accent" />
                <span>Contact: <strong className="text-white-soft">{EVENT_METADATA.leadOrganizer}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-cyan-laser" />
                <a href={`mailto:${EVENT_METADATA.leadOrganizerEmail}`} className="hover:text-white-soft transition-colors">
                  {EVENT_METADATA.leadOrganizerEmail}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-white-soft" />
                <span>{EVENT_METADATA.leadOrganizerPhone}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-lime-accent mt-0.5 flex-shrink-0" />
                <span>Campus 1, ITER, Jagamara, Bhubaneswar, Odisha 751030</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-midnight border border-surface-border hover:border-cyan-laser rounded-md flex items-center justify-center text-silver-muted hover:text-white-soft transition-colors"
                aria-label="Tekno Krafft GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-midnight border border-surface-border hover:border-cyan-laser rounded-md flex items-center justify-center text-silver-muted hover:text-white-soft transition-colors"
                aria-label="Tekno Krafft X Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-midnight border border-surface-border hover:border-cyan-laser rounded-md flex items-center justify-center text-silver-muted hover:text-white-soft transition-colors"
                aria-label="Tekno Krafft LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Program Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-2.5">
            <span className="text-xs font-mono uppercase text-white-soft tracking-wider font-semibold mb-1">
              NAVIGATION
            </span>
            <a href="#overview" className="text-xs font-mono hover:text-cyan-laser transition-colors">
              Control Center
            </a>
            <a href="#schedule" className="text-xs font-mono hover:text-cyan-laser transition-colors">
              Session Agenda
            </a>
            <a href="#tracks" className="text-xs font-mono hover:text-cyan-laser transition-colors">
              Workshops &amp; Tracks
            </a>
            <a href="#speakers" className="text-xs font-mono hover:text-cyan-laser transition-colors">
              Faculty &amp; Speakers
            </a>
            <a href="#hackathon" className="text-xs font-mono hover:text-cyan-laser transition-colors">
              Nexus Hackathon
            </a>
            <a href="#venue" className="text-xs font-mono hover:text-cyan-laser transition-colors">
              Campus Logistics
            </a>
          </div>

          {/* Column 3: Community Actions (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-2.5">
            <span className="text-xs font-mono uppercase text-white-soft tracking-wider font-semibold mb-1">
              COMMUNITY &amp; GOVERNANCE
            </span>
            <button
              onClick={onOpenRegister}
              className="text-left text-xs font-mono hover:text-cyan-laser transition-colors cursor-pointer"
            >
              Get Event Pass
            </button>
            <button
              onClick={onOpenVolunteer}
              className="text-left text-xs font-mono hover:text-cyan-laser transition-colors cursor-pointer"
            >
              Join Volunteer Cadre (ITER)
            </button>
            <a href="#sponsors" className="text-xs font-mono hover:text-cyan-laser transition-colors">
              Sponsorship Dossier
            </a>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="text-left text-xs font-mono hover:text-cyan-laser transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="text-left text-xs font-mono hover:text-cyan-laser transition-colors cursor-pointer"
            >
              Terms of Participation
            </button>
          </div>

          {/* Column 4: Newsletter Subscription (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase text-white-soft tracking-wider font-semibold">
              COMMUNITY DISPATCHES
            </span>
            <p className="text-xs font-sans text-silver-muted leading-relaxed">
              Stay informed on workshop seat releases and hackathon problem briefings from GDG ITER.
            </p>

            {subSuccess ? (
              <div className="p-3 bg-midnight border border-surface-border rounded-md text-xs font-mono text-lime-accent flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Subscribed to GDG dispatches</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    placeholder="student@soa.ac.in"
                    className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:outline-none focus:border-cyan-laser"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-2.5 bg-cyan-laser text-obsidian rounded text-xs font-bold flex items-center justify-center cursor-pointer"
                    aria-label="Subscribe to dispatches"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Institutional Verification */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-silver-muted/80 gap-4">
          <div>
            &copy; {new Date().getFullYear()} GDG ITER, Siksha 'O' Anusandhan (SOA) University. All rights reserved.
          </div>
          <div className="flex items-center space-x-3 text-center sm:text-right">
            <span className="text-white-soft font-semibold">Organized by GDG ITER</span>
            <span className="text-silver-muted">/</span>
            <span className="text-lime-accent">Lead: {EVENT_METADATA.leadOrganizer}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
