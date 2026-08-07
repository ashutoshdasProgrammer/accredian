import { CircleArrowUp, Sparkles, Target, Users } from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Corporate training",
    description:
      "Turn strategy into everyday capability with programs built around your operating context.",
    icon: Target,
    color: "text-[#a8f21d]",
  },
  {
    number: "02",
    title: "Upskilling programs",
    description:
      "Keep critical talent close by giving teams a practical path through what is next.",
    icon: CircleArrowUp,
    color: "text-[#e76b5b]",
  },
  {
    number: "03",
    title: "Leadership development",
    description:
      "Build the judgment, confidence and language your leaders need at every level.",
    icon: Users,
    color: "text-[#9ebef0]",
  },
  {
    number: "04",
    title: "Skill transformation",
    description:
      "Make a visible shift in performance with skill journeys that compound over time.",
    icon: Sparkles,
    color: "text-[#f3cc6b]",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-[#15213d] py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="eyebrow mb-6 text-[#a8f21d]">What we build</div>

            <h2 className="max-w-[390px] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
              Capability with a{" "}
              <span className="serif-italic text-[#e76b5b]">
                point of view.
              </span>
            </h2>

            <p className="mt-7 max-w-[350px] leading-relaxed text-white/65">
              Because the skills your people need are shaped by the work you are
              trying to do.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              //   return (
              //     <article
              //       key={solution.number}
              //       className="group relative min-h-[260px] overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/[0.055] p-6 transition-transform duration-500 hover:-translate-y-2"
              //     >
              //       <div className="flex items-start justify-between">
              //         <span className="text-xs text-white/45">
              //           {solution.number}
              //         </span>

              //         <Icon
              //           size={23}
              //           strokeWidth={1.4}
              //           className={solution.color}
              //         />
              //       </div>

              //       <div className="absolute bottom-6 left-6 right-6">
              //         <h3 className="text-2xl font-medium tracking-[-0.04em]">
              //           {solution.title}
              //         </h3>

              //         <p className="mt-2 text-sm leading-relaxed text-white/60">
              //           {solution.description}
              //         </p>
              //       </div>
              //     </article>
              //   );
              return (
                <article
                  key={solution.number}
                  className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/[0.055] p-6 transition-transform duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs text-white/45">
                      {solution.number}
                    </span>

                    <Icon
                      size={23}
                      strokeWidth={1.4}
                      className={solution.color}
                    />
                  </div>

                  <div className="mt-8 bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                      {solution.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {solution.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
