import React, { useState } from 'react';
import { TRACKS_DATA } from '../../data/eventData';
import type { RegistrationFormData } from '../../types';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Loader2, ShieldCheck, Ticket } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTrack?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedTrack = TRACKS_DATA[0].title,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');

  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    participantType: 'Student',
    selectedTrack: preselectedTrack,
    teamName: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full legal name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid corporate or institutional email is required.';
    }
    if (!formData.organization.trim()) {
      errs.organization = 'College or organization name is required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.selectedTrack) {
      errs.selectedTrack = 'Please select a specialization track.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      setErrors({ agreeToTerms: 'You must consent to event terms and privacy policy to complete registration.' });
      return;
    }

    setIsSubmitting(true);

    // Simulate backend verification and ticket generation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedId = 'TK26-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setTicketId(generatedId);
    }, 800);
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    setTicketId('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-surface border border-surface-border w-full max-w-xl p-6 sm:p-8 rounded-lg shadow-2xl relative my-8">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-silver-muted hover:text-white-soft p-1.5 bg-midnight rounded-md border border-surface-border"
          aria-label="Close registration modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Confirmation Success State */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-midnight border border-lime-accent/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-lime-accent" />
            </div>

            <span className="text-xs font-mono text-lime-accent uppercase tracking-wider block mb-1">
              REGISTRATION CONFIRMED // ALLOCATION LOCKED
            </span>

            <h3 className="font-display font-bold text-2xl text-white-soft mb-2">
              WELCOME TO TEKNO KRAFFT 2026
            </h3>

            <p className="text-xs text-silver-muted max-w-md mx-auto mb-6">
              Your registration pass for <span className="text-white-soft">{formData.fullName}</span> has been processed for <span className="text-cyan-laser">{formData.selectedTrack}</span>.
            </p>

            <div className="bg-midnight border border-surface-border p-4 rounded-md mb-6 max-w-sm mx-auto text-left font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-border">
                <span className="text-silver-muted">DIGITAL PASS ID:</span>
                <span className="text-lime-accent font-bold">{ticketId}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-silver-muted">PARTICIPANT:</span>
                <span className="text-white-soft">{formData.fullName}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-silver-muted">AFFILIATION:</span>
                <span className="text-white-soft">{formData.organization}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-silver-muted">VENUE:</span>
                <span className="text-white-soft">Apex Innovation Center</span>
              </div>
            </div>

            <div className="p-3 bg-surface-subtle border border-surface-border rounded-md text-[11px] font-mono text-silver-muted mb-6">
              Prototype Mode: A mock confirmation record has been verified. No sensitive payment or real credentials required.
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-cyan-laser text-obsidian font-display font-bold text-xs uppercase rounded-md hover:bg-cyan-laser/90 transition-colors"
            >
              DONE &amp; CLOSE
            </button>
          </div>
        ) : (
          /* Multi-Step Form */
          <div>
            {/* Step Indicator Header */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
                <Ticket className="w-4 h-4" />
                <span>PARTICIPANT REGISTRATION // STEP {step} OF 3</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white-soft">
                {step === 1 && 'PERSONAL & ACADEMIC CREDENTIALS'}
                {step === 2 && 'SPECIALIZATION & TRACK ALLOCATION'}
                {step === 3 && 'REVIEW & VERIFICATION'}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-midnight h-1.5 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-cyan-laser h-full transition-all duration-200"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                      FULL LEGAL NAME *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Maya Iyer"
                      className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                    />
                    {errors.fullName && (
                      <span className="text-red-400 text-[11px] font-mono mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@university.edu"
                        className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                      />
                      {errors.email && (
                        <span className="text-red-400 text-[11px] font-mono mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                        PHONE NUMBER (OPTIONAL)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                        ORGANIZATION / COLLEGE *
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. National Institute of Tech"
                        className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                      />
                      {errors.organization && (
                        <span className="text-red-400 text-[11px] font-mono mt-1 block">
                          {errors.organization}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                        PARTICIPANT PROFILE
                      </label>
                      <select
                        value={formData.participantType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            participantType: e.target.value as RegistrationFormData['participantType'],
                          })
                        }
                        className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                      >
                        <option value="Student">Undergraduate / Graduate Student</option>
                        <option value="Professional">Practicing Software Engineer</option>
                        <option value="Researcher">Systems / Academic Researcher</option>
                        <option value="Independent Creator">Independent Builder</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center space-x-2 bg-cyan-laser text-obsidian font-display font-bold text-xs uppercase px-5 py-2.5 rounded-md hover:bg-cyan-laser/90 transition-colors"
                    >
                      <span>NEXT: TRACK SELECTION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Track & Team Selection */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                      PRIMARY WORKSHOP TRACK ALLOCATION *
                    </label>
                    <select
                      value={formData.selectedTrack}
                      onChange={(e) => setFormData({ ...formData, selectedTrack: e.target.value })}
                      className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                    >
                      {TRACKS_DATA.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title} ({t.level} - {t.availableSeats} seats open)
                        </option>
                      ))}
                    </select>
                    {errors.selectedTrack && (
                      <span className="text-red-400 text-[11px] font-mono mt-1 block">
                        {errors.selectedTrack}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-silver-muted uppercase mb-1">
                      HACKATHON TEAM NAME (IF PARTICIPATING IN SPRINT)
                    </label>
                    <input
                      type="text"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="e.g. KernelPanic Squad (Optional)"
                      className="w-full bg-midnight border border-surface-border px-3 py-2 text-xs font-mono text-white-soft rounded-md focus:border-cyan-laser focus:outline-none"
                    />
                    <span className="text-silver-muted text-[11px] font-mono mt-1 block">
                      Teams may also register members on-site during Day 1 briefing.
                    </span>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center space-x-2 bg-midnight text-silver-muted hover:text-white-soft border border-surface-border font-mono text-xs uppercase px-4 py-2.5 rounded-md transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>BACK</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center space-x-2 bg-cyan-laser text-obsidian font-display font-bold text-xs uppercase px-5 py-2.5 rounded-md hover:bg-cyan-laser/90 transition-colors"
                    >
                      <span>NEXT: REVIEW DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Review & Confirmation */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="bg-midnight border border-surface-border p-4 rounded-md space-y-2 text-xs font-mono">
                    <div className="flex justify-between border-b border-surface-border/60 pb-1.5">
                      <span className="text-silver-muted">NAME:</span>
                      <span className="text-white-soft font-semibold">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-surface-border/60 pb-1.5">
                      <span className="text-silver-muted">EMAIL:</span>
                      <span className="text-white-soft">{formData.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-surface-border/60 pb-1.5">
                      <span className="text-silver-muted">ORGANIZATION:</span>
                      <span className="text-white-soft">{formData.organization}</span>
                    </div>
                    <div className="flex justify-between border-b border-surface-border/60 pb-1.5">
                      <span className="text-silver-muted">PROFILE:</span>
                      <span className="text-white-soft">{formData.participantType}</span>
                    </div>
                    <div className="flex justify-between border-b border-surface-border/60 pb-1.5">
                      <span className="text-silver-muted">TRACK:</span>
                      <span className="text-cyan-laser font-bold">{formData.selectedTrack}</span>
                    </div>
                    {formData.teamName && (
                      <div className="flex justify-between pb-1">
                        <span className="text-silver-muted">HACK TEAM:</span>
                        <span className="text-lime-accent">{formData.teamName}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                        className="mt-1 accent-cyan-laser"
                      />
                      <span className="text-xs text-silver-muted font-sans leading-relaxed">
                        I agree to follow the Tekno Krafft Code of Conduct, acknowledge safety policies, and consent to essential event communications as outlined in the <a href="/privacy" className="text-cyan-laser underline">Privacy Policy</a>.
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <span className="text-red-400 text-[11px] font-mono mt-1 block">
                        {errors.agreeToTerms}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center space-x-2 bg-midnight text-silver-muted hover:text-white-soft border border-surface-border font-mono text-xs uppercase px-4 py-2.5 rounded-md transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>BACK</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center space-x-2 bg-lime-accent hover:bg-lime-accent/90 text-obsidian font-display font-bold text-xs uppercase px-6 py-2.5 rounded-md transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>ISSUING PASS...</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-4 h-4" />
                          <span>CONFIRM &amp; SECURE SPOT</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
