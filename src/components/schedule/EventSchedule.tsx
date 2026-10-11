import React, { useState, useMemo } from 'react';
import { SCHEDULE_DATA } from '../../data/eventData';
import type { ScheduleItem, EventCategory, EventDay } from '../../types';
import { Search, Clock, MapPin, User, Tag, CalendarPlus, X } from 'lucide-react';

export const EventSchedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<EventDay>('Day 1 (Oct 24)');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<ScheduleItem | null>(null);

  const categories: EventCategory[] = [
    'All',
    'Keynote',
    'Workshop',
    'Technical Talk',
    'Hackathon',
    'Demonstration',
    'Networking',
  ];

  // Filtering Logic
  const filteredEvents = useMemo(() => {
    return SCHEDULE_DATA.filter((item) => {
      const matchDay = item.day === selectedDay;
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.speakerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.track.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDay && matchCategory && matchSearch;
    });
  }, [selectedDay, selectedCategory, searchQuery]);

  // Handle Add to Calendar (Generates .ics file download directly)
  const handleAddToCalendar = (event: ScheduleItem) => {
    const isDay1 = event.day.includes('Oct 24');
    const dateStr = isDay1 ? '20261024' : '20261025';
    const startHour = event.startTime.replace(':', '') + '00';
    const endHour = event.endTime.replace(':', '') + '00';

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Tekno Krafft 2026//Event Schedule//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Tekno Krafft 2026: ${event.title}`,
      `DESCRIPTION:${event.description}\\nSpeaker: ${event.speakerName}\\nVenue: ${event.venue}`,
      `LOCATION:${event.venue}, Apex Innovation Center, Bengaluru`,
      `DTSTART:${dateStr}T${startHour}Z`,
      `DTEND:${dateStr}T${endHour}Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.id}-teknokrafft-calendar.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-surface-border/60 bg-midnight relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
            <span className="w-1.5 h-1.5 bg-cyan-laser rounded-sm" />
            <span>AGENDA // TIME CODES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white-soft">
            INTERACTIVE EVENT SCHEDULE
          </h2>
          <p className="text-silver-muted text-sm sm:text-base max-w-2xl mt-2 font-sans">
            Explore technical sessions, keynote lectures, and hands-on workshops across two packed days.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-surface border border-surface-border p-4 rounded-lg mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Day Selector Buttons */}
            <div className="flex items-center space-x-2">
              {(['Day 1 (Oct 24)', 'Day 2 (Oct 25)'] as EventDay[]).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md border transition-colors cursor-pointer ${
                    selectedDay === day
                      ? 'bg-cyan-laser text-obsidian font-bold border-cyan-laser'
                      : 'bg-midnight text-silver-muted border-surface-border hover:border-surface-highlight'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sessions or speakers..."
                className="w-full bg-midnight border border-surface-border pl-9 pr-3 py-2 text-xs font-mono text-white-soft rounded-md focus:outline-none focus:border-cyan-laser placeholder:text-silver-muted/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-silver-muted hover:text-white-soft"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Chips Filter */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-border/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-lime-accent text-obsidian font-semibold'
                    : 'bg-surface-subtle text-silver-muted hover:text-white-soft border border-surface-border/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Items List */}
        {filteredEvents.length === 0 ? (
          <div className="bg-surface border border-surface-border p-12 text-center rounded-lg">
            <p className="font-display font-semibold text-lg text-white-soft mb-1">
              No matching sessions found
            </p>
            <p className="text-xs font-mono text-silver-muted">
              Try modifying your search term or selecting a different category filter.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEvents.map((item) => (
              <div
                key={item.id}
                className="bg-surface hover:bg-surface-subtle border border-surface-border hover:border-surface-highlight p-5 sm:p-6 rounded-lg transition-all duration-150 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
              >
                {/* Time & Category Column */}
                <div className="lg:w-48 flex-shrink-0 flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-2">
                  <div className="flex items-center space-x-1.5 text-cyan-laser font-mono text-sm font-bold">
                    <Clock className="w-4 h-4" />
                    <span>
                      {item.startTime} - {item.endTime}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 bg-midnight border border-surface-border text-lime-accent rounded-sm">
                    {item.category}
                  </span>
                </div>

                {/* Main Information */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-silver-muted mb-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-laser" />
                    <span>{item.venue}</span>
                    <span>/</span>
                    <span className="text-white-soft/80">{item.track}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white-soft group-hover:text-cyan-laser transition-colors duration-150">
                    {item.title}
                  </h3>

                  <p className="text-silver-muted text-xs sm:text-sm mt-1.5 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-mono text-silver-muted">
                    <span className="flex items-center space-x-1 text-white-soft">
                      <User className="w-3.5 h-3.5 text-lime-accent" />
                      <span>{item.speakerName}</span>
                    </span>
                    <span className="text-silver-muted/60">({item.speakerRole})</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3 self-end lg:self-center">
                  <button
                    onClick={() => handleAddToCalendar(item)}
                    className="p-2.5 bg-midnight hover:bg-surface border border-surface-border hover:border-cyan-laser/40 text-silver-muted hover:text-cyan-laser rounded-md transition-colors cursor-pointer"
                    title="Add to Calendar (.ics)"
                    aria-label={`Add ${item.title} to calendar`}
                  >
                    <CalendarPlus className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="px-4 py-2 bg-surface-subtle hover:bg-surface text-white-soft border border-surface-border hover:border-cyan-laser text-xs font-mono uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                  >
                    DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal: Session Deep Dive */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-md">
            <div className="bg-surface border border-surface-border w-full max-w-2xl p-6 sm:p-8 rounded-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 text-silver-muted hover:text-white-soft p-1.5 bg-midnight rounded-md border border-surface-border"
                aria-label="Close session details modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-3">
                <span className="w-2 h-2 rounded-full bg-lime-accent" />
                <span>
                  {activeModalItem.day} // {activeModalItem.startTime} - {activeModalItem.endTime}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white-soft mb-2">
                {activeModalItem.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono px-2.5 py-1 bg-midnight border border-surface-border text-lime-accent rounded-sm">
                  {activeModalItem.category}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 bg-midnight border border-surface-border text-cyan-laser rounded-sm">
                  {activeModalItem.track}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 bg-midnight border border-surface-border text-white-soft rounded-sm">
                  Venue: {activeModalItem.venue}
                </span>
              </div>

              <p className="text-silver-muted text-sm leading-relaxed mb-6 font-sans">
                {activeModalItem.description}
              </p>

              <div className="bg-midnight border border-surface-border p-4 rounded-md mb-6">
                <span className="text-xs font-mono text-silver-muted uppercase tracking-wider block mb-1">
                  LEAD SPEAKER & INSTRUCTOR:
                </span>
                <div className="text-sm font-display font-semibold text-white-soft">
                  {activeModalItem.speakerName}
                </div>
                <div className="text-xs font-mono text-silver-muted">
                  {activeModalItem.speakerRole} - {activeModalItem.speakerOrg}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-surface-border">
                <div className="flex items-center space-x-1.5 text-xs font-mono text-silver-muted">
                  <Tag className="w-3.5 h-3.5 text-cyan-laser" />
                  <span>Tags: {activeModalItem.tags.join(', ')}</span>
                </div>

                <button
                  onClick={() => handleAddToCalendar(activeModalItem)}
                  className="inline-flex items-center space-x-2 bg-cyan-laser text-obsidian font-display font-bold text-xs uppercase px-4 py-2 rounded-md hover:bg-cyan-laser/90 transition-colors"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>ADD TO CALENDAR</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
