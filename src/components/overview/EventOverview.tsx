import React from 'react';
import { EVENT_METADATA } from '../../data/eventData';
import { Layers, Cpu, Users, Award, Clock, ShieldCheck } from 'lucide-react';

export const EventOverview: React.FC = () => {
  return (
    <section id="overview" className="py-28 px-4 sm:px-6 lg:px-8 border-b border-surface-border/60 bg-midnight relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Section Coordinate Marker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-surface-border pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2.5">
              <span className="w-1.5 h-1.5 bg-cyan-laser rounded-sm" />
              <span>// SECTION 01: SYSTEM TELEMETRY &amp; SCALE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white-soft tracking-tight">
              THE DIGITAL CONTROL CENTER
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md">
            <span className="text-xs font-mono text-lime-accent uppercase block mb-1">
              ORGANIZED BY {EVENT_METADATA.organizer}
            </span>
            <p className="text-silver-muted text-sm leading-relaxed font-sans">
              Rigorous technical convergence engineered for student builders, practicing developers, and systems researchers.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition (Breaking Card Monotony) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Large Heroic Feature Card (5 Cols) */}
          <div className="lg:col-span-5 bg-surface border border-surface-border hover:border-cyan-laser/40 p-8 rounded-lg flex flex-col justify-between transition-all duration-150 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-cyan-laser uppercase tracking-wider">
                  FLAGSHIP TIMELINE
                </span>
                <Clock className="w-5 h-5 text-cyan-laser" />
              </div>

              <div className="flex items-baseline space-x-3 mb-4">
                <span className="font-display font-extrabold text-6xl sm:text-7xl text-white-soft group-hover:text-cyan-laser transition-colors">
                  {EVENT_METADATA.metrics.durationDays}
                </span>
                <span className="font-mono text-sm text-silver-muted uppercase font-bold">
                  FULL DAYS
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-white-soft mb-2">
                48 Continuous Hours of Innovation
              </h3>
              <p className="text-silver-muted text-xs sm:text-sm leading-relaxed font-sans">
                Hands-on programming marathons, live model serving benchmarking, and autonomous hardware demonstrations hosted across Campus 1 at ITER, SOA Bhubaneswar.
              </p>
            </div>

            <div className="pt-6 border-t border-surface-border mt-8 flex items-center justify-between text-xs font-mono">
              <span className="text-silver-muted">OCT 24-25, 2026</span>
              <span className="text-lime-accent">CAMPUS 1 AUDITORIUM</span>
            </div>
          </div>

          {/* Right Column Grid: 4 Complementary Technical Metrics (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Metric 1 */}
            <div className="bg-surface border border-surface-border hover:border-surface-highlight p-6 rounded-lg flex flex-col justify-between transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-silver-muted uppercase">HARDWARE &amp; CODE</span>
                  <Cpu className="w-4 h-4 text-lime-accent" />
                </div>
                <div className="flex items-baseline space-x-2 mb-1">
                  <span className="font-display font-extrabold text-4xl text-lime-accent">
                    {EVENT_METADATA.metrics.workshopsCount}
                  </span>
                  <span className="font-mono text-xs text-silver-muted uppercase">HANDS-ON LABS</span>
                </div>
              </div>
              <p className="text-xs text-silver-muted pt-3 border-t border-surface-border/50 font-sans mt-3">
                Dedicated computing labs with provisioned cloud sandboxes and microcontroller rigs.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="bg-surface border border-surface-border hover:border-surface-highlight p-6 rounded-lg flex flex-col justify-between transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-silver-muted uppercase">CURRICULUM</span>
                  <Layers className="w-4 h-4 text-cyan-laser" />
                </div>
                <div className="flex items-baseline space-x-2 mb-1">
                  <span className="font-display font-extrabold text-4xl text-cyan-laser">
                    {EVENT_METADATA.metrics.technicalSessionsCount}
                  </span>
                  <span className="font-mono text-xs text-silver-muted uppercase">LECTURES</span>
                </div>
              </div>
              <p className="text-xs text-silver-muted pt-3 border-t border-surface-border/50 font-sans mt-3">
                In-depth architecture addresses spanning systems, runtime optimizations, and cryptography.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="bg-surface border border-surface-border hover:border-surface-highlight p-6 rounded-lg flex flex-col justify-between transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-silver-muted uppercase">SPRINT ARENA</span>
                  <Award className="w-4 h-4 text-white-soft" />
                </div>
                <div className="flex items-baseline space-x-2 mb-1">
                  <span className="font-display font-extrabold text-4xl text-white-soft">
                    {EVENT_METADATA.metrics.hackathonHours}
                  </span>
                  <span className="font-mono text-xs text-silver-muted uppercase">HOURS SPRINT</span>
                </div>
              </div>
              <p className="text-xs text-silver-muted pt-3 border-t border-surface-border/50 font-sans mt-3">
                Nexus Hackathon sprint with compute vouchers, live mentoring desks, and jury evaluation.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="bg-surface border border-surface-border hover:border-surface-highlight p-6 rounded-lg flex flex-col justify-between transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-silver-muted uppercase">FACULTY LEADS</span>
                  <Users className="w-4 h-4 text-lime-accent" />
                </div>
                <div className="flex items-baseline space-x-2 mb-1">
                  <span className="font-display font-extrabold text-4xl text-lime-accent">
                    {EVENT_METADATA.metrics.speakersCount}
                  </span>
                  <span className="font-mono text-xs text-silver-muted uppercase">MENTORS</span>
                </div>
              </div>
              <p className="text-xs text-silver-muted pt-3 border-t border-surface-border/50 font-sans mt-3">
                Practicing engineers and researchers from industry and open-source foundations.
              </p>
            </div>
          </div>
        </div>

        {/* Operational Banner with GDG ITER Certification */}
        <div className="bg-surface-subtle border border-surface-border p-5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-lime-accent flex-shrink-0" />
            <span className="text-xs font-mono text-white-soft">
              HOSTED BY GOOGLE DEVELOPER GROUP ON CAMPUS // ITER, SIKSHA 'O' ANUSANDHAN (SOA)
            </span>
          </div>
          <span className="text-xs font-mono text-cyan-laser">
            LEAD CONTACT: {EVENT_METADATA.leadOrganizer.toUpperCase()}
          </span>
        </div>
      </div>
    </section>
  );
};
