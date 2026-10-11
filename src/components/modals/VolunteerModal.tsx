import React, { useState } from 'react';
import { X, CheckCircle2, UserPlus } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Technical Operations & Hardware Labs',
    availability: 'Both Days (Oct 24-25)',
    experience: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
      <div className="bg-surface border border-surface-border w-full max-w-lg p-6 sm:p-8 rounded-lg shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-silver-muted hover:text-white-soft p-1.5 bg-midnight rounded-md border border-surface-border"
          aria-label="Close volunteer modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
          <UserPlus className="w-4 h-4" />
          <span>COMMUNITY CORPS // VOLUNTEER CADRE</span>
        </div>

        <h3 className="font-display font-bold text-2xl text-white-soft mb-2">
          JOIN THE ORGANIZING TEAM
        </h3>
        <p className="text-xs text-silver-muted font-sans mb-6">
          Help coordinate hardware labs, marshal hackathon arenas, and facilitate speaker hospitality across both festival days.
        </p>

        {submitted ? (
          <div className="bg-midnight border border-surface-border p-6 rounded-md text-center">
            <CheckCircle2 className="w-10 h-10 text-lime-accent mx-auto mb-3" />
            <div className="font-display font-bold text-lg text-white-soft mb-1">
              VOLUNTEER RECORD LOGGED
            </div>
            <p className="text-xs font-mono text-silver-muted mb-4">
              Thank you {formData.name}. The student coordination lead will review your background and email you team briefing links.
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-cyan-laser text-obsidian font-display font-bold text-xs uppercase rounded-md"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                FULL NAME *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Arunav Roy"
                className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@institution.edu"
                className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                AREA OF PREFERRED FOCUS
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
              >
                <option value="Technical Operations & Hardware Labs">Technical Operations &amp; Hardware Labs</option>
                <option value="Hackathon Arena Mentorship">Hackathon Arena Logistics &amp; Mentorship</option>
                <option value="Speaker Hospitality & Keynotes">Speaker Hospitality &amp; Stage Flow</option>
                <option value="Registration & Desk Coordination">Badge Check-in &amp; Registration Desk</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                PREVIOUS ORGANIZING EXPERIENCE (OPTIONAL)
              </label>
              <textarea
                rows={2}
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="Any past club events, hackathons, or workshops you helped coordinate..."
                className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-cyan-laser hover:bg-cyan-laser/90 text-obsidian font-display font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
              >
                SUBMIT VOLUNTEER APPLICATION
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
