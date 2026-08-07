import { Check, Globe2, Sparkles } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

const points = [
  {
    number: '01',
    title: 'Expertise that travels',
    description:
      'Our faculty bring current industry practice, not abstract theory. Every room feels close to the work.',
    icon: Globe2,
  },
  {
    number: '02',
    title: 'Tailored to the moment',
    description:
      'We start with your strategic context and build the right experience around it. No off-the-shelf answers.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Impact you can see',
    description:
      'From confidence shifts to business metrics, we agree what good looks like — then measure the movement.',
    icon: Check,
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-[#f5f1e9] py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow mb-6">Why teams choose us</div>

            <h2 className="text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-7xl">
              Not more learning.
              <br />
              <span className="serif-italic text-[#e76b5b]">
                More change.
              </span>
            </h2>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 border-b border-[#15213d] pb-2 text-xs font-bold uppercase tracking-[0.13em]"
            >
              See what this could mean
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="border-t border-[#15213d]/20">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.number}
                  className="grid gap-5 border-b border-[#15213d]/20 py-7 sm:grid-cols-[50px_1fr_40px] sm:items-start"
                >
                  <span className="text-xs text-[#e76b5b]">
                    {point.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                      {point.title}
                    </h3>

                    <p className="mt-2 max-w-[530px] leading-relaxed text-[#596273]">
                      {point.description}
                    </p>
                  </div>

                  <Icon className="text-[#e76b5b]" size={22} strokeWidth={1.4} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}