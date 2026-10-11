import React, { useState, useMemo } from 'react';
import { FAQ_DATA } from '../../data/eventData';
import { ChevronDown, Search, X } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(FAQ_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Registration', 'Hackathon', 'Logistics'];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchQuery =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-surface-border/60 bg-obsidian relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-laser mb-2">
            <span className="w-1.5 h-1.5 bg-cyan-laser rounded-sm" />
            <span>KNOWLEDGE BASE // INQUIRIES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white-soft">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-silver-muted text-sm sm:text-base max-w-xl mx-auto mt-2 font-sans">
            Clear, transparent answers regarding registration eligibility, hardware requisites, hackathon rules, and campus amenities.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-surface border border-surface-border p-4 rounded-lg mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded-sm transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-laser text-obsidian font-bold'
                    : 'bg-midnight text-silver-muted hover:text-white-soft border border-surface-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-silver-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-midnight border border-surface-border pl-8 pr-3 py-1.5 text-xs font-mono text-white-soft rounded-md focus:outline-none focus:border-cyan-laser"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-silver-muted"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-surface border border-surface-border rounded-lg text-xs font-mono text-silver-muted">
            No matching questions found. Modify your search query.
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-surface border border-surface-border rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full p-5 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-laser"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] font-mono uppercase text-lime-accent px-2 py-0.5 bg-midnight rounded-sm border border-surface-border">
                        {faq.category}
                      </span>
                      <span className="font-display font-semibold text-base sm:text-lg text-white-soft">
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-silver-muted flex-shrink-0 transition-transform duration-180 ${
                        isOpen ? 'rotate-180 text-cyan-laser' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-5 pb-5 pt-1 border-t border-surface-border/50 text-sm text-silver-muted font-sans leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
