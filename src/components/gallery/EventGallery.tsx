import React, { useState } from 'react';
import { GALLERY_DATA } from '../../data/eventData';
import type { GalleryItem } from '../../types';
import { Maximize2, X, Terminal } from 'lucide-react';

export const EventGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-surface-border/60 bg-obsidian relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
            <span className="w-1.5 h-1.5 bg-cyan-laser rounded-sm" />
            <span>EXHIBITION // TECHNICAL SHOWCASE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white-soft">
            HARDWARE LABS &amp; SYSTEMS DEMONSTRATIONS
          </h2>
          <p className="text-silver-muted text-sm sm:text-base max-w-2xl mt-2 font-sans">
            Glimpses into the technical installations, autonomous robotics arenas, and stress-testing setups built for Tekno Krafft.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GALLERY_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-surface border border-surface-border hover:border-surface-highlight p-6 rounded-lg transition-all duration-150 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-lime-accent px-2 py-0.5 bg-midnight border border-surface-border rounded-sm">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-silver-muted">
                    {item.category}
                  </span>
                </div>

                {/* Abstract Visual Architecture Blueprint */}
                <div className="w-full h-44 bg-midnight rounded-md border border-surface-border p-4 mb-4 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-laser/40 transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-silver-muted/60">
                    <span>GRID // 1024x768</span>
                    <Terminal className="w-4 h-4 text-cyan-laser" />
                  </div>

                  <div className="flex flex-col items-center justify-center my-auto">
                    <div className="w-12 h-12 border border-cyan-laser/60 rounded-md rotate-45 flex items-center justify-center mb-2">
                      <div className="w-6 h-6 bg-lime-accent/20 rounded-sm" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-laser tracking-widest">
                      SYSTEM: {item.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-silver-muted">
                    <span>TELEMETRY: ACTIVE</span>
                    <span>FPS: 60</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-white-soft group-hover:text-cyan-laser transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-silver-muted mt-2 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-surface-border/60 flex items-center justify-between">
                <span className="text-xs font-mono text-silver-muted">TECHNICAL INSTALLATION</span>
                <button
                  onClick={() => setActiveItem(item)}
                  className="text-xs font-mono text-cyan-laser hover:text-white-soft flex items-center space-x-1 cursor-pointer"
                >
                  <span>INSPECT</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Gallery Item Deep Dive */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
            <div className="bg-surface border border-surface-border w-full max-w-xl p-6 sm:p-8 rounded-lg shadow-2xl relative">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 text-silver-muted hover:text-white-soft p-1.5 bg-midnight rounded-md border border-surface-border"
                aria-label="Close gallery inspection modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono text-lime-accent uppercase block mb-1">
                {activeItem.badge} // {activeItem.category}
              </span>

              <h3 className="font-display font-bold text-2xl text-white-soft mb-4">
                {activeItem.title}
              </h3>

              <div className="w-full h-48 bg-midnight border border-surface-border rounded-md flex items-center justify-center mb-6">
                <span className="text-xs font-mono text-cyan-laser">
                  TELEMETRY LOGS &amp; DIAGNOSTIC PLOTS ACTIVE
                </span>
              </div>

              <p className="text-sm text-silver-muted leading-relaxed font-sans mb-6">
                {activeItem.description}
              </p>

              <div className="flex justify-end pt-4 border-t border-surface-border">
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 bg-midnight border border-surface-border text-xs font-mono text-white-soft rounded-md"
                >
                  CLOSE INSPECTION
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
