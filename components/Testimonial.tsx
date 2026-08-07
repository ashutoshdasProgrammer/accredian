'use client';

import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote:
      'The shift was unmistakable. Our leaders moved from discussing change to making better decisions in the room.',
    name: 'Maya Raman',
    role: 'Chief People Officer, Northstar Health',
    company: 'NORTHSTAR',
  },
  {
    quote:
      'We needed a partner who understood our business, not another content library. This is tailored, rigorous and human.',
    name: 'David Okafor',
    role: 'VP, Talent & Culture, Meridian Group',
    company: 'MERIDIAN',
  },
  {
    quote:
      'Within one quarter, managers had a shared vocabulary for coaching. That kind of adoption is rare.',
    name: 'Elena Torres',
    role: 'Director of Learning, Arbor & Co.',
    company: 'ARBOR',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  function previous() {
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  }

  function next() {
    setActive((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section id="stories" className="bg-[#15213d] py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="eyebrow mb-6 text-[#a8f21d]">
              In their words
            </div>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Work that{' '}
              <span className="serif-italic text-[#e76b5b]">moves</span>{' '}
              people.
            </h2>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div className="text-xl tracking-[0.14em] text-white/40">
            {testimonial.company}
          </div>

          <div>
            <Quote className="mb-5 text-[#a8f21d]" size={38} fill="currentColor" />

            <blockquote className="max-w-[790px] text-3xl leading-[1.15] tracking-[-0.04em] md:text-5xl">
              “{testimonial.quote}”
            </blockquote>

            <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5">
              <div>
                <div className="text-sm font-bold">{testimonial.name}</div>
                <div className="mt-1 text-xs text-white/55">
                  {testimonial.role}
                </div>
              </div>

              <div className="flex gap-1">
                {testimonials.map((item, index) => (
                  <button
                    key={item.company}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      index === active
                        ? 'w-9 bg-[#a8f21d]'
                        : 'w-1.5 bg-white/35'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}