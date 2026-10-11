import React, { useState } from 'react';
import { Clock, FileText, ArrowRight, ShieldCheck, X } from 'lucide-react';

interface HackathonSectionProps {
  onOpenRegister: () => void;
}

export const HackathonSection: React.FC<HackathonSectionProps> = ({ onOpenRegister }) => {
  const [showRulesModal, setShowRulesModal] = useState<boolean>(false);

  const criteria = [
    { title: 'Technical Architecture & Rigor', weight: '30%', desc: 'Soundness of systems design, code quality, and efficiency.' },
    { title: 'Implementation Completeness', weight: '25%', desc: 'Fully operational demonstration with verified execution.' },
    { title: 'Originality & First-Principles Thinking', weight: '25%', desc: 'Novel problem solving without boilerplate templates.' },
    { title: 'Live Demo & Code Inspection', weight: '20%', desc: 'Defense of architectural decisions before technical judges.' },
  ];

  return (
    <section id="hackathon" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-surface-border/60 bg-obsidian relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
            <span className="w-1.5 h-1.5 bg-cyan-laser rounded-sm" />
            <span>COMPETITIVE SPRINT // SPRINT ARENA</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white-soft">
            NEXUS 36-HOUR HACKATHON
          </h2>
          <p className="text-silver-muted text-sm sm:text-base max-w-2xl mt-2 font-sans">
            Build production-grade systems in a continuous 36-hour sprint. Access cloud compute clusters, mentor desks, and real hardware testbeds.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Left Column: Core Sprint Parameters */}
          <div className="lg:col-span-7 bg-surface border border-surface-border p-6 sm:p-8 rounded-lg">
            <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-cyan-laser" />
                <span className="font-display font-bold text-lg text-white-soft">
                  SPRINT SPECIFICATIONS
                </span>
              </div>
              <span className="text-xs font-mono text-lime-accent uppercase px-2.5 py-1 bg-midnight border border-surface-border rounded-sm">
                NON-STOP 36 HOURS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-midnight border border-surface-border p-3.5 rounded-md text-xs font-mono">
                <span className="text-silver-muted uppercase block mb-1">TEAM COMPOSITION:</span>
                <span className="text-white-soft font-bold text-sm">2 to 4 Engineers</span>
                <span className="text-silver-muted text-[11px] block mt-1">Cross-discipline allowed</span>
              </div>

              <div className="bg-midnight border border-surface-border p-3.5 rounded-md text-xs font-mono">
                <span className="text-silver-muted uppercase block mb-1">CUMULATIVE PRIZE POOL:</span>
                <span className="text-lime-accent font-bold text-sm">INR 5,00,000</span>
                <span className="text-silver-muted text-[11px] block mt-1">Grants, Cloud Credits &amp; Cash</span>
              </div>

              <div className="bg-midnight border border-surface-border p-3.5 rounded-md text-xs font-mono">
                <span className="text-silver-muted uppercase block mb-1">START DATE &amp; BRIEF:</span>
                <span className="text-white-soft font-bold text-sm">Oct 24, 2026 at 13:30</span>
                <span className="text-silver-muted text-[11px] block mt-1">Arena Stage Briefing</span>
              </div>

              <div className="bg-midnight border border-surface-border p-3.5 rounded-md text-xs font-mono">
                <span className="text-silver-muted uppercase block mb-1">CODE SUBMISSION DEADLINE:</span>
                <span className="text-cyan-laser font-bold text-sm">Oct 25, 2026 at 15:00</span>
                <span className="text-silver-muted text-[11px] block mt-1">Public Git Lock</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono text-silver-muted uppercase tracking-wider block">
                PROBLEM THEMES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-white-soft">
                <div className="p-2.5 bg-midnight/80 border border-surface-border rounded-sm flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-cyan-laser rounded-full" />
                  <span>Autonomous Systems &amp; Local Edge AI</span>
                </div>
                <div className="p-2.5 bg-midnight/80 border border-surface-border rounded-sm flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-cyan-laser rounded-full" />
                  <span>Decentralized Infrastructure &amp; Consensus</span>
                </div>
                <div className="p-2.5 bg-midnight/80 border border-surface-border rounded-sm flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-cyan-laser rounded-full" />
                  <span>Developer Ergonomics &amp; Tooling</span>
                </div>
                <div className="p-2.5 bg-midnight/80 border border-surface-border rounded-sm flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-cyan-laser rounded-full" />
                  <span>Energy Telemetry &amp; Microgrids</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-surface-border">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center space-x-2 bg-cyan-laser hover:bg-cyan-laser/90 text-obsidian font-display font-bold text-xs uppercase px-5 py-2.5 rounded-md transition-colors cursor-pointer"
              >
                <span>REGISTER TEAM FOR HACKATHON</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowRulesModal(true)}
                className="inline-flex items-center space-x-2 bg-midnight hover:bg-surface text-silver-muted hover:text-white-soft border border-surface-border text-xs font-mono uppercase px-4 py-2.5 rounded-md transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-laser" />
                <span>VIEW COMPLETE RULES</span>
              </button>
            </div>
          </div>

          {/* Right Column: Judging Criteria Breakdown */}
          <div className="lg:col-span-5 bg-surface border border-surface-border p-6 sm:p-8 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 pb-4 border-b border-surface-border mb-6">
                <ShieldCheck className="w-5 h-5 text-lime-accent" />
                <span className="font-display font-bold text-lg text-white-soft">
                  JUDGING CRITERIA
                </span>
              </div>

              <div className="space-y-4">
                {criteria.map((item, idx) => (
                  <div key={idx} className="bg-midnight p-3.5 rounded-md border border-surface-border/80">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-semibold text-sm text-white-soft">
                        {item.title}
                      </span>
                      <span className="font-mono text-xs font-bold text-lime-accent">
                        {item.weight}
                      </span>
                    </div>
                    <p className="text-xs text-silver-muted font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border text-[11px] font-mono text-silver-muted">
              Note: Pre-written proprietary code bases will be disqualified during Git audit.
            </div>
          </div>
        </div>

        {/* Modal: Complete Hackathon Rules */}
        {showRulesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
            <div className="bg-surface border border-surface-border w-full max-w-2xl p-6 sm:p-8 rounded-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowRulesModal(false)}
                className="absolute top-5 right-5 text-silver-muted hover:text-white-soft p-1.5 bg-midnight rounded-md border border-surface-border"
                aria-label="Close hackathon rules modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
                <span className="w-2 h-2 rounded-full bg-lime-accent" />
                <span>NEXUS HACKATHON 2026 // CODEX</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white-soft mb-4">
                OFFICIAL COMPETITION RULES &amp; POLICIES
              </h3>

              <div className="space-y-4 text-xs font-mono text-silver-muted leading-relaxed">
                <div className="p-3 bg-midnight border border-surface-border rounded-md">
                  <span className="text-white-soft font-bold block mb-1">1. ORIGINAL CODEBASE POLICY</span>
                  All code must be authored within the designated 36-hour window. Third-party open-source libraries and APIs may be imported provided they are openly licensed and referenced in the README.
                </div>

                <div className="p-3 bg-midnight border border-surface-border rounded-md">
                  <span className="text-white-soft font-bold block mb-1">2. MANDATORY GIT REPOSITORY LOGS</span>
                  Projects must maintain continuous Git commit logs on GitHub or GitLab. Dumps of single monolithic commits at the deadline are grounds for automatic review disqualification.
                </div>

                <div className="p-3 bg-midnight border border-surface-border rounded-md">
                  <span className="text-white-soft font-bold block mb-1">3. DELIVERABLES</span>
                  Every team must submit: a public repository URL, a 3-minute video overview, a working deployment link or executable build, and a concise technical RFC markdown file.
                </div>

                <div className="p-3 bg-midnight border border-surface-border rounded-md">
                  <span className="text-white-soft font-bold block mb-1">4. INTELLECTUAL PROPERTY</span>
                  All intellectual property produced by teams remains 100% the property of the respective builders and team members.
                </div>
              </div>

              <div className="flex justify-end pt-6 mt-6 border-t border-surface-border">
                <button
                  onClick={() => setShowRulesModal(false)}
                  className="px-5 py-2.5 bg-cyan-laser text-obsidian font-display font-bold text-xs uppercase rounded-md"
                >
                  ACKNOWLEDGE &amp; CLOSE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
