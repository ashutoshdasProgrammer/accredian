const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We listen for the friction between ambition and capability.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We shape a pathway that feels made for your people and priorities.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'We bring the right experts, formats and energy into the room.',
  },
  {
    number: '04',
    title: 'Measure',
    description:
      'We track the signals that tell you the work is taking hold.',
  },
];

export default function Process() {
  return (
    <section className="surface-grid py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-5">Our method</div>

            <h2 className="max-w-[650px] text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-7xl">
              From the first{' '}
              <span className="serif-italic">question</span> to lasting
              capability.
            </h2>
          </div>

          <span className="text-xs text-[#596273]">
            THE 4D METHOD / 2024
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[1.25rem] border border-[#15213d]/15 bg-white/30 p-6 md:min-h-[245px]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#15213d] text-xs text-white">
                {step.number}
              </span>

              <h3 className="mt-12 text-3xl font-medium tracking-[-0.06em]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#596273]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}