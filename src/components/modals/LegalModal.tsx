import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-surface border border-surface-border w-full max-w-2xl p-6 sm:p-8 rounded-lg shadow-2xl relative my-8 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-silver-muted hover:text-white-soft p-1.5 bg-midnight rounded-md border border-surface-border"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
          <Shield className="w-4 h-4" />
          <span>LEGAL REPOSITORY // {type.toUpperCase()}</span>
        </div>

        <h3 className="font-display font-bold text-2xl text-white-soft mb-4">
          {type === 'privacy' ? 'PRIVACY POLICY & DATA HANDLING' : 'TERMS AND CONDITIONS OF PARTICIPATION'}
        </h3>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs font-mono text-silver-muted leading-relaxed">
            <p>
              <strong className="text-white-soft block mb-1">1. DATA COLLECTION PURPOSE</strong>
              Tekno Krafft collects participant contact information (name, institutional affiliation, email address) solely for conference credentialing, lab allocation, and safety communications during October 24-25, 2026.
            </p>
            <p>
              <strong className="text-white-soft block mb-1">2. THIRD-PARTY DISCLOSURE</strong>
              We do not sell, rent, or monetize attendee registries. Anonymized cohort statistics may be shared with academic partners for event benchmarking.
            </p>
            <p>
              <strong className="text-white-soft block mb-1">3. RETENTION AND DELETION</strong>
              Registration records are held until final certificate verification and competition reporting conclude, after which attendees may request complete ledger purging.
            </p>
            <p>
              <strong className="text-white-soft block mb-1">4. TELEMETRY &amp; COOKIES</strong>
              This platform uses strictly functional session tokens and does not inject intrusive commercial ad tracking pixels or canvas fingerprinting.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs font-mono text-silver-muted leading-relaxed">
            <p>
              <strong className="text-white-soft block mb-1">1. CODE OF CONDUCT</strong>
              All attendees, mentors, and sponsors must uphold a harassment-free environment. Discriminatory language, unauthorized equipment tampering, or disruptive actions will result in badge revocation without recourse.
            </p>
            <p>
              <strong className="text-white-soft block mb-1">2. INTELLECTUAL PROPERTY RIGHTS</strong>
              All hackathon artifacts, codebases, hardware prototypes, and documentation developed during Tekno Krafft remain the sole intellectual property of their creators.
            </p>
            <p>
              <strong className="text-white-soft block mb-1">3. VENUE SAFETY &amp; COMPLIANCE</strong>
              Attendees must observe campus security protocols at Apex Innovation &amp; Technology Center. High-voltage hardware testing is restricted to designated laboratory bays with safety marshals present.
            </p>
            <p>
              <strong className="text-white-soft block mb-1">4. LIMITATION OF LIABILITY</strong>
              Organizers are not responsible for lost personal electronic hardware. Lockers and power bays are used at participant discretion.
            </p>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-surface-border flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-cyan-laser text-obsidian font-display font-bold text-xs uppercase rounded-md hover:bg-cyan-laser/90 transition-colors"
          >
            ACKNOWLEDGE &amp; CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
