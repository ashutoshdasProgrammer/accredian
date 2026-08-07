import AnimatedCounter from '@/components/animations/AnimatedCounter';

const stats = [
  {
    value: 48000,
    suffix: '+',
    label: 'learners trained',
    detail: 'across 18 markets',
  },
  {
    value: 126,
    suffix: '+',
    label: 'enterprise partners',
    detail: 'from scale-ups to global teams',
  },
  {
    value: 920,
    suffix: '+',
    label: 'courses delivered',
    detail: 'built for the real world',
  },
  {
    value: 94.6,
    suffix: '%',
    label: 'success rate',
    detail: 'measured beyond the room',
    decimals: 1,
  },
];

export default function Stats() {
  return (
    <section id="impact" className="bg-[#a8f21d] py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-5 text-[#15213d]">
              Track record
            </div>

            <h2 className="max-w-[640px] text-4xl font-semibold leading-[0.96] tracking-[-0.06em] md:text-6xl">
              The numbers behind the{' '}
              <span className="serif-italic">momentum.</span>
            </h2>
          </div>

          <p className="max-w-[260px] text-sm leading-relaxed text-[#15213d]/65">
            Our work earns its keep in what people do differently on Monday.
          </p>
        </div>

        <div className="grid border-t border-[#15213d]/20 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-[#15213d]/20 py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
            >
              <div className="serif-italic text-5xl tracking-[-0.05em] md:text-6xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>

              <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.12em]">
                {stat.label}
              </div>

              <div className="mt-1 text-xs text-[#15213d]/60">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}