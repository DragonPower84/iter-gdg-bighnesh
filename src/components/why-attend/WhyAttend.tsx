import React, { useState } from 'react';
import { Terminal, Shield, Cpu, GitPullRequest, Code, ArrowRight } from 'lucide-react';

export const WhyAttend: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: 'Hands-on Technical Rigor',
      tagline: 'Code First, Theory Second',
      icon: Terminal,
      description: 'Zero high-level slide marathons. Every workshop provisions isolated cloud sandboxes, real hardware test benches, and executable code repositories so you build directly alongside instructors.',
      bullets: [
        'Isolated development devcontainers provided for all sessions',
        'Kernel-level eBPF exercises and hardware robotics rigs',
        'Live compiler and runtime profiling toolchains',
      ],
      metricLabel: 'LAB PARTICIPATION',
      metricVal: '100% Practical',
    },
    {
      id: 1,
      title: 'Direct Architectural Networking',
      tagline: 'Connect with Staff Engineers & Researchers',
      icon: Cpu,
      description: 'Engage in open design reviews with engineering leads from hyperscalers, distributed systems startups, and security firms without corporate barriers.',
      bullets: [
        'Curated breakout tables focused on real infrastructure challenges',
        'One-on-one architecture consultations and code critiques',
        'Access to engineering hiring managers actively sourcing talent',
      ],
      metricLabel: 'MENTORSHIP ACCESS',
      metricVal: '1:10 Ratio',
    },
    {
      id: 2,
      title: 'Production Systems Exposure',
      tagline: 'From Local Prototypes to Global Scale',
      icon: Shield,
      description: 'Learn how hyperscale architectures maintain resilience during catastrophic failures, mitigate post-quantum cryptographic vulnerabilities, and orchestrate low-latency inference at the edge.',
      bullets: [
        'Failure injection drills and live chaos engineering simulations',
        'Post-quantum TLS migration walkthroughs',
        'Model quantization pipelines with sub-10ms response times',
      ],
      metricLabel: 'SYSTEM RESILIENCE',
      metricVal: 'Hyperscale Drills',
    },
    {
      id: 3,
      title: 'Upstream Open Source Impact',
      tagline: 'Ship Meaningful Pull Requests',
      icon: GitPullRequest,
      description: 'Bridge the gap between consumer software and upstream engineering. Work on real open-source repositories with active maintainers guiding RFC submissions and pull requests.',
      bullets: [
        'Direct maintainer guidance on complex codebases',
        'RFC design document authoring and review methodologies',
        'Live upstream PR merging during the festival',
      ],
      metricLabel: 'CONTRIBUTION TARGET',
      metricVal: 'Live Merges',
    },
  ];

  const current = pillars[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="why-attend" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-surface-border/60 bg-obsidian relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
            <span className="w-1.5 h-1.5 bg-cyan-laser rounded-sm" />
            <span>VALUE PROPOSITION // PILLARS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white-soft">
            WHY ATTEND TEKNO KRAFFT 2026
          </h2>
          <p className="text-silver-muted text-sm sm:text-base max-w-2xl mt-2 font-sans">
            Engineered from first principles for builders who value deep technical execution over empty buzzwords.
          </p>
        </div>

        {/* Interactive Pillar Selector & Dynamic Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {pillars.map((item) => {
              const Icon = item.icon;
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-150 flex items-start space-x-4 cursor-pointer ${
                    isSelected
                      ? 'bg-surface border-cyan-laser shadow-sm shadow-cyan-laser/10'
                      : 'bg-surface-subtle border-surface-border hover:border-surface-highlight text-silver-muted'
                  }`}
                >
                  <div
                    className={`p-2 rounded-md ${
                      isSelected ? 'bg-cyan-laser text-obsidian' : 'bg-surface text-silver-muted'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span
                      className={`block font-display font-semibold text-base ${
                        isSelected ? 'text-white-soft' : 'text-silver-muted'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="block text-xs font-mono text-silver-muted/80 mt-0.5">
                      {item.tagline}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 mt-1 transition-transform ${
                      isSelected ? 'text-cyan-laser translate-x-1' : 'text-surface-border'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Pillar Architectural Detail Card */}
          <div className="lg:col-span-7 bg-surface border border-surface-border p-6 sm:p-8 rounded-lg relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-surface-border pb-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-midnight border border-surface-border rounded-md text-cyan-laser">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-laser uppercase tracking-wider block">
                    FEATURED PILLAR
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white-soft">
                    {current.title}
                  </h3>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono text-silver-muted uppercase block">
                  {current.metricLabel}
                </span>
                <span className="text-sm font-mono font-bold text-lime-accent">
                  {current.metricVal}
                </span>
              </div>
            </div>

            <p className="text-silver-muted text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {current.description}
            </p>

            <div className="bg-midnight border border-surface-border p-4 rounded-md mb-6">
              <span className="text-xs font-mono text-white-soft uppercase tracking-wider block mb-3">
                KEY TECHNICAL SPECIFICATIONS:
              </span>
              <ul className="space-y-2.5">
                {current.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs font-mono text-silver-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-laser mt-1.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-silver-muted pt-2 border-t border-surface-border/60">
              <span className="flex items-center space-x-1.5">
                <Code className="w-3.5 h-3.5 text-lime-accent" />
                <span>BENCHMARKED ON INDUSTRIAL WORKLOADS</span>
              </span>
              <span className="text-cyan-laser">MODULE READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
