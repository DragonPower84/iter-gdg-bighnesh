export type EventCategory = 
  | 'All'
  | 'Keynote'
  | 'Workshop'
  | 'Hackathon'
  | 'Technical Talk'
  | 'Demonstration'
  | 'Networking';

export type EventDay = 'Day 1 (Oct 24)' | 'Day 2 (Oct 25)';

export interface ScheduleItem {
  id: string;
  title: string;
  day: EventDay;
  startTime: string;
  endTime: string;
  category: EventCategory;
  track: string;
  venue: string;
  speakerName: string;
  speakerRole: string;
  speakerOrg: string;
  description: string;
  capacity?: number;
  tags: string[];
}

export interface Track {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  technologies: string[];
  prerequisites: string;
  leadInstructor: string;
  instructorRole: string;
  availableSeats: number;
  highlightMetric: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  expertise: string;
  sessionTitle: string;
  bio: string;
  avatarUrl: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'Title Partner' | 'Platinum' | 'Gold' | 'Silver' | 'Community Partner';
  website: string;
  tagline: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Registration' | 'Hackathon' | 'Logistics';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  participantType: 'Student' | 'Professional' | 'Researcher' | 'Independent Creator';
  selectedTrack: string;
  teamName?: string;
  agreeToTerms: boolean;
}
