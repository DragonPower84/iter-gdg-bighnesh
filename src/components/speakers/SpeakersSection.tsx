import React, { useState } from 'react';
import { SPEAKERS_DATA } from '../../data/eventData';
import type { Speaker } from '../../types';
import { ExternalLink, X, BookOpen } from 'lucide-react';

export const SpeakersSection: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-surface-border/60 bg-midnight relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
            <span className="w-1.5 h-1.5 bg-cyan-laser rounded-sm" />
            <span>FACULTY // INDUSTRY RESEARCHERS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white-soft">
            KEYNOTE SPEAKERS &amp; MENTORS
          </h2>
          <p className="text-silver-muted text-sm sm:text-base max-w-2xl mt-2 font-sans">
            Hear from leading researchers, systems engineers, and open-source contributors operating at the edge of computation.
          </p>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKERS_DATA.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-surface border border-surface-border hover:border-surface-highlight p-6 rounded-lg transition-all duration-150 flex flex-col justify-between group"
            >
              <div>
                {/* Speaker Portrait & Top Badges */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden bg-midnight border border-surface-border flex-shrink-0">
                    <img
                      src={speaker.avatarUrl}
                      alt={`Portrait of ${speaker.name}, ${speaker.role} at ${speaker.organization}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-200"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-lime-accent block">
                      {speaker.expertise}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white-soft group-hover:text-cyan-laser transition-colors">
                      {speaker.name}
                    </h3>
                    <div className="text-xs font-mono text-silver-muted mt-0.5">
                      {speaker.role}
                    </div>
                    <div className="text-xs font-mono text-cyan-laser/80">
                      {speaker.organization}
                    </div>
                  </div>
                </div>

                {/* Session Title */}
                <div className="bg-midnight/70 border border-surface-border p-3 rounded-md mb-3">
                  <span className="text-[10px] font-mono text-silver-muted uppercase block mb-1">
                    KEYNOTE / SESSION TOPIC:
                  </span>
                  <div className="text-xs font-display font-semibold text-white-soft">
                    {speaker.sessionTitle}
                  </div>
                </div>

                <p className="text-xs text-silver-muted leading-relaxed line-clamp-2">
                  {speaker.bio}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-surface-border/60">
                <div className="flex items-center space-x-3">
                  {speaker.github && (
                    <a
                      href={speaker.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-silver-muted hover:text-white-soft transition-colors"
                      aria-label={`${speaker.name} GitHub profile`}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-silver-muted hover:text-white-soft transition-colors"
                      aria-label={`${speaker.name} LinkedIn profile`}
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="text-xs font-mono text-cyan-laser hover:text-white-soft uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                >
                  <span>FULL BIO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Full Speaker Biography */}
        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
            <div className="bg-surface border border-surface-border w-full max-w-xl p-6 sm:p-8 rounded-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-5 right-5 text-silver-muted hover:text-white-soft p-1.5 bg-midnight rounded-md border border-surface-border"
                aria-label="Close speaker bio modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-md overflow-hidden border border-surface-border bg-midnight flex-shrink-0">
                  <img
                    src={selectedSpeaker.avatarUrl}
                    alt={selectedSpeaker.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono text-lime-accent uppercase">
                    {selectedSpeaker.expertise}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white-soft">
                    {selectedSpeaker.name}
                  </h3>
                  <div className="text-xs font-mono text-silver-muted">
                    {selectedSpeaker.role} // {selectedSpeaker.organization}
                  </div>
                </div>
              </div>

              <div className="bg-midnight border border-surface-border p-4 rounded-md mb-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="uppercase font-semibold">SCHEDULED SESSION:</span>
                </div>
                <div className="text-sm font-display font-bold text-white-soft">
                  {selectedSpeaker.sessionTitle}
                </div>
              </div>

              <div className="text-sm text-silver-muted leading-relaxed font-sans mb-6">
                {selectedSpeaker.bio}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-surface-border">
                <span className="text-xs font-mono text-silver-muted">TEKNO KRAFFT 2026 FACULTY</span>
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="px-4 py-2 bg-surface-subtle border border-surface-border hover:border-cyan-laser text-xs font-mono text-white-soft rounded-md"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
