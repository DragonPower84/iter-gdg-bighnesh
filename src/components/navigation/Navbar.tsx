import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, User, MapPin } from 'lucide-react';
import { EVENT_METADATA } from '../../data/eventData';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Hackathon', href: '#hackathon' },
    { label: 'Venue', href: '#venue' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-obsidian/95 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/50'
          : 'bg-gradient-to-b from-obsidian/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Organizer Identity */}
        <a href="#hero" className="flex items-center space-x-3.5 group">
          <div className="w-10 h-10 bg-surface border border-surface-border group-hover:border-cyan-laser flex items-center justify-center rounded-md transition-colors duration-150 shadow-sm">
            <Terminal className="w-5 h-5 text-cyan-laser" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-display font-extrabold text-base tracking-wider text-white-soft group-hover:text-cyan-laser transition-colors duration-150">
                TEKNO KRAFFT
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-midnight border border-surface-border text-cyan-laser rounded-sm font-semibold">
                2026
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-lime-accent tracking-wider leading-none mt-0.5">
              <span>GDG ITER</span>
              <span className="text-silver-muted">•</span>
              <span className="text-silver-muted">SOA BHUBANESWAR</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-surface/90 border border-surface-border px-3 py-1.5 rounded-md backdrop-blur-md shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-silver-muted hover:text-cyan-laser hover:bg-midnight/60 px-3 py-1.5 rounded-sm transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action & Organizer Tag */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="text-right hidden xl:block">
            <span className="text-[10px] font-mono text-silver-muted block leading-tight">LEAD ORGANIZER</span>
            <span className="text-xs font-mono text-white-soft font-semibold">{EVENT_METADATA.leadOrganizer}</span>
          </div>

          {/* From Uiverse.io by SmookyDev */}
          <button
            onClick={onOpenRegister}
            className="group relative z-30 inline-flex items-center space-x-2 bg-[rgb(77,235,255)] text-obsidian hover:text-white font-display font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-md overflow-hidden transition-all duration-700 [text-shadow:1px_1px_1px_rgba(8,51,68,0.4)] hover:[text-shadow:0_0_8px_rgb(77,235,255)] shadow-sm shadow-cyan-laser/20 cursor-pointer active:translate-y-0.5 after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#083344] after:left-3 after:bottom-0 after:translate-y-full after:rounded-md hover:after:scale-[180] after:hover:scale-[180] hover:after:transition-all hover:after:duration-700 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700"
          >
            <span className="relative z-10 flex items-center space-x-1.5">
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 text-silver-muted hover:text-white-soft bg-surface border border-surface-border rounded-md"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-cyan-laser" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full-Featured Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] h-[calc(100vh-68px)] bg-obsidian border-b border-surface-border backdrop-blur-2xl p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-50">
          {/* Organizer Header Card */}
          <div className="bg-surface border border-surface-border p-3.5 rounded-md flex items-center justify-between text-xs font-mono">
            <div>
              <span className="text-lime-accent font-semibold block">{EVENT_METADATA.organizer}</span>
              <span className="text-silver-muted text-[11px] block mt-0.5">Siksha 'O' Anusandhan, Bhubaneswar</span>
            </div>
            <span className="text-cyan-laser text-[11px]">OCT 24-25</span>
          </div>

          {/* Links List with 48px touch targets */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-silver-muted hover:text-cyan-laser py-3 px-3.5 rounded-md hover:bg-surface border-b border-surface-border/40 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-silver-muted/40 text-xs">→</span>
              </a>
            ))}
          </div>

          {/* Contact Person Summary */}
          <div className="bg-midnight border border-surface-border p-3 rounded-md text-xs font-mono text-silver-muted space-y-1">
            <div className="flex items-center space-x-2 text-white-soft">
              <User className="w-3.5 h-3.5 text-lime-accent" />
              <span>Contact Person: <strong className="text-white-soft">{EVENT_METADATA.leadOrganizer}</strong></span>
            </div>
            <div className="flex items-center space-x-2 text-silver-muted text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-cyan-laser" />
              <span>ITER Campus 1, SOA University</span>
            </div>
          </div>

          {/* Primary Mobile CTA */}
          {/* From Uiverse.io by SmookyDev */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="group relative z-30 w-full inline-flex items-center justify-center space-x-2 bg-[rgb(77,235,255)] text-obsidian hover:text-white font-display font-bold py-3.5 rounded-md text-sm uppercase tracking-wider overflow-hidden transition-all duration-700 [text-shadow:1px_1px_1px_rgba(8,51,68,0.4)] hover:[text-shadow:0_0_10px_rgb(77,235,255)] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#083344] after:left-6 after:bottom-0 after:translate-y-full after:rounded-md hover:after:scale-[300] after:hover:scale-[300] hover:after:transition-all hover:after:duration-700 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
