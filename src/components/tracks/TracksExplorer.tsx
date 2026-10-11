import React, { useState } from 'react';
import { TRACKS_DATA } from '../../data/eventData';
import type { Track } from '../../types';
import { Clock, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

interface TracksExplorerProps {
  onSelectTrackForRegister: (trackTitle: string) => void;
}

export const TracksExplorer: React.FC<TracksExplorerProps> = ({ onSelectTrackForRegister }) => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>(TRACKS_DATA[0].id);

  const selectedTrack = TRACKS_DATA.find((t) => t.id === selectedTrackId) || TRACKS_DATA[0];

  return (
    <section id="tracks" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-surface-border/60 bg-obsidian relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
            <span className="w-1.5 h-1.5 bg-cyan-laser rounded-sm" />
            <span>SPECIALIZATIONS // DEEP DIVES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white-soft">
            WORKSHOPS &amp; SPECIALIZATION TRACKS
          </h2>
          <p className="text-silver-muted text-sm sm:text-base max-w-2xl mt-2 font-sans">
            Seven engineering disciplines tailored for practitioners. Select a specialization to inspect toolchains and seat availability.
          </p>
        </div>

        {/* Tracks Grid & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Track Navigation List */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {TRACKS_DATA.map((track: Track) => {
              const isSelected = track.id === selectedTrackId;
              return (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrackId(track.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-surface border-cyan-laser shadow-sm shadow-cyan-laser/10'
                      : 'bg-surface-subtle border-surface-border hover:border-surface-highlight text-silver-muted'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-lime-accent">
                      {track.level}
                    </span>
                    <span className="text-xs font-mono text-silver-muted">
                      {track.duration}
                    </span>
                  </div>

                  <h3
                    className={`font-display font-semibold text-base sm:text-lg ${
                      isSelected ? 'text-white-soft' : 'text-silver-muted'
                    }`}
                  >
                    {track.title}
                  </h3>

                  <p className="text-xs text-silver-muted/80 mt-1 line-clamp-1">
                    {track.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Track Deep Inspection */}
          <div className="lg:col-span-7 bg-surface border border-surface-border p-6 sm:p-8 rounded-lg relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-surface-border gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-laser uppercase tracking-wider block mb-1">
                  TRACK SPECIFICATION
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white-soft">
                  {selectedTrack.title}
                </h3>
                <span className="text-xs font-mono text-silver-muted mt-1 block">
                  {selectedTrack.tagline}
                </span>
              </div>

              <div className="flex flex-col sm:items-end">
                <span className="text-[10px] font-mono text-silver-muted uppercase">ALLOCATION</span>
                <span className="text-lg font-mono font-bold text-lime-accent">
                  {selectedTrack.availableSeats} SEATS REMAINING
                </span>
              </div>
            </div>

            <p className="text-silver-muted text-sm sm:text-base leading-relaxed my-6 font-sans">
              {selectedTrack.shortDesc}
            </p>

            {/* Metric Banner */}
            <div className="bg-midnight border border-surface-border p-4 rounded-md mb-6 flex items-center justify-between">
              <span className="text-xs font-mono text-silver-muted uppercase">CORE HIGHLIGHT:</span>
              <span className="text-xs font-mono font-bold text-cyan-laser">
                {selectedTrack.highlightMetric}
              </span>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs font-mono">
              <div className="bg-midnight/70 border border-surface-border p-3.5 rounded-md">
                <div className="flex items-center space-x-2 text-silver-muted mb-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-laser" />
                  <span className="uppercase">DURATION &amp; LEVEL</span>
                </div>
                <div className="text-white-soft font-semibold">
                  {selectedTrack.duration} // {selectedTrack.level}
                </div>
              </div>

              <div className="bg-midnight/70 border border-surface-border p-3.5 rounded-md">
                <div className="flex items-center space-x-2 text-silver-muted mb-1">
                  <Users className="w-3.5 h-3.5 text-lime-accent" />
                  <span className="uppercase">LEAD INSTRUCTOR</span>
                </div>
                <div className="text-white-soft font-semibold">{selectedTrack.leadInstructor}</div>
                <div className="text-silver-muted text-[11px]">{selectedTrack.instructorRole}</div>
              </div>
            </div>

            {/* Technologies Covered */}
            <div className="mb-6">
              <span className="text-xs font-mono text-silver-muted uppercase tracking-wider block mb-2.5">
                STACK &amp; TECHNOLOGIES:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedTrack.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-midnight border border-surface-border text-cyan-laser font-mono text-xs rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="mb-8 p-3.5 bg-midnight border border-surface-border rounded-md">
              <div className="flex items-center space-x-2 text-xs font-mono text-silver-muted mb-1">
                <BookOpen className="w-3.5 h-3.5 text-lime-accent" />
                <span className="uppercase font-semibold">TECHNICAL PREREQUISITES:</span>
              </div>
              <p className="text-xs text-silver-muted font-mono">{selectedTrack.prerequisites}</p>
            </div>

            {/* Register CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-border">
              <span className="text-xs font-mono text-silver-muted flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-lime-accent" />
                <span>Certificate of Technical Completion Granted</span>
              </span>

              <button
                onClick={() => onSelectTrackForRegister(selectedTrack.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-cyan-laser hover:bg-cyan-laser/90 text-obsidian font-display font-bold text-xs uppercase px-6 py-3 rounded-md transition-colors cursor-pointer"
              >
                <span>REGISTER FOR THIS TRACK</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
