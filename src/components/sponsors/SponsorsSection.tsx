import React, { useState } from 'react';
import { SPONSORS_DATA } from '../../data/eventData';
import { ExternalLink, Handshake, CheckCircle2, X } from 'lucide-react';

export const SponsorsSection: React.FC = () => {
  const [showInquiryModal, setShowInquiryModal] = useState<boolean>(false);
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);
  const [inquiryForm, setInquiryForm] = useState({ company: '', contactEmail: '', tierInterest: 'Platinum', message: '' });

  const titlePartner = SPONSORS_DATA.filter((s) => s.tier === 'Title Partner');
  const platinumPartners = SPONSORS_DATA.filter((s) => s.tier === 'Platinum');
  const goldPartners = SPONSORS_DATA.filter((s) => s.tier === 'Gold');
  const silverAndCommunity = SPONSORS_DATA.filter((s) => s.tier === 'Silver' || s.tier === 'Community Partner');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <section id="sponsors" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-surface-border/60 bg-midnight relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-surface-border pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
              <span className="w-1.5 h-1.5 bg-cyan-laser rounded-sm" />
              <span>INDUSTRY ECOSYSTEM // PARTNERS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white-soft">
              TECHNOLOGY PARTNERS &amp; SPONSORS
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => {
                setInquirySubmitted(false);
                setShowInquiryModal(true);
              }}
              className="inline-flex items-center space-x-2 bg-surface hover:bg-surface-elevated text-cyan-laser border border-surface-border hover:border-cyan-laser font-display font-semibold text-xs uppercase px-4 py-2.5 rounded-md transition-colors cursor-pointer"
            >
              <Handshake className="w-4 h-4" />
              <span>SPONSOR INQUIRY DOSSIER</span>
            </button>
          </div>
        </div>

        {/* Title Partner Display */}
        <div className="mb-10">
          <span className="text-[11px] font-mono text-lime-accent uppercase tracking-widest block mb-4">
            TITLE PARTNER
          </span>
          <div className="grid grid-cols-1 gap-4">
            {titlePartner.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-surface border border-cyan-laser/40 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 group"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-laser uppercase tracking-wider block mb-1">
                    PRIMARY ECOSYSTEM SPONSOR
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white-soft group-hover:text-cyan-laser transition-colors">
                    {sponsor.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-silver-muted font-sans mt-1">
                    {sponsor.tagline}
                  </p>
                </div>

                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-midnight hover:bg-surface border border-surface-border hover:border-cyan-laser text-xs font-mono text-white-soft rounded-md flex items-center space-x-2 transition-colors"
                >
                  <span>PORTAL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Platinum Partners */}
        <div className="mb-10">
          <span className="text-[11px] font-mono text-silver-muted uppercase tracking-widest block mb-4">
            PLATINUM PARTNERS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {platinumPartners.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-surface border border-surface-border hover:border-surface-highlight p-6 rounded-lg flex items-center justify-between transition-colors"
              >
                <div>
                  <h4 className="font-display font-bold text-xl text-white-soft">
                    {sponsor.name}
                  </h4>
                  <p className="text-xs text-silver-muted font-mono mt-1">
                    {sponsor.tagline}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-cyan-laser uppercase px-2 py-1 bg-midnight border border-surface-border rounded-sm">
                  {sponsor.tier}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold & Silver */}
        <div>
          <span className="text-[11px] font-mono text-silver-muted uppercase tracking-widest block mb-4">
            GOLD &amp; COMMUNITY PARTNERS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[...goldPartners, ...silverAndCommunity].map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-surface-subtle border border-surface-border p-4 rounded-md flex flex-col justify-between"
              >
                <div className="font-display font-semibold text-sm text-white-soft">
                  {sponsor.name}
                </div>
                <span className="text-[10px] font-mono text-silver-muted uppercase mt-2">
                  {sponsor.tier}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Inquiry Modal */}
        {showInquiryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
            <div className="bg-surface border border-surface-border w-full max-w-lg p-6 sm:p-8 rounded-lg shadow-2xl relative">
              <button
                onClick={() => setShowInquiryModal(false)}
                className="absolute top-5 right-5 text-silver-muted hover:text-white-soft p-1.5 bg-midnight rounded-md border border-surface-border"
                aria-label="Close sponsor inquiry modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
                <span className="w-2 h-2 rounded-full bg-lime-accent" />
                <span>SPONSORSHIP PROSPECTUS</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white-soft mb-2">
                BECOME A TECHNOLOGY PARTNER
              </h3>
              <p className="text-xs text-silver-muted font-sans mb-6">
                Support student builders, host specialized hackathon tracks, and connect directly with senior engineering candidates.
              </p>

              {inquirySubmitted ? (
                <div className="bg-midnight border border-surface-border p-6 rounded-md text-center">
                  <CheckCircle2 className="w-10 h-10 text-lime-accent mx-auto mb-3" />
                  <div className="font-display font-bold text-lg text-white-soft mb-1">
                    INQUIRY RECORDED
                  </div>
                  <p className="text-xs font-mono text-silver-muted mb-4">
                    Our sponsorship committee will reach out to {inquiryForm.contactEmail} with the full sponsorship prospectus and tier benefits.
                  </p>
                  <button
                    onClick={() => setShowInquiryModal(false)}
                    className="px-4 py-2 bg-cyan-laser text-obsidian font-display font-bold text-xs uppercase rounded-md"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                      ORGANIZATION / COMPANY
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryForm.company}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                      placeholder="e.g. Acme Systems Ltd."
                      className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                      CORPORATE CONTACT EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={inquiryForm.contactEmail}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, contactEmail: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                      TIER INTEREST
                    </label>
                    <select
                      value={inquiryForm.tierInterest}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, tierInterest: e.target.value })}
                      className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                    >
                      <option value="Platinum">Platinum Partner Tier</option>
                      <option value="Gold">Gold Partner Tier</option>
                      <option value="Silver">Silver Partner Tier</option>
                      <option value="Custom">Custom Hackathon Bounty Sponsor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                      BRIEF NOTE OR REQUIREMENTS
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      placeholder="Any specific workshop or branding objectives..."
                      className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-cyan-laser hover:bg-cyan-laser/90 text-obsidian font-display font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
                    >
                      SUBMIT INQUIRY
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
