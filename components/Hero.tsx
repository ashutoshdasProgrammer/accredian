import { ArrowUpRight, Play } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[560px] overflow-hidden rounded-[2rem] bg-[#15213d] p-5 text-white shadow-2xl md:h-[510px]">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(168,242,29,.8) 0 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/60">
        <span>Capability / 001</span>

        <span className="flex items-center gap-2">
          <i className="h-2 w-2 animate-pulse rounded-full bg-[#a8f21d]" />
          live system
        </span>
      </div>

      <div className="absolute left-[12%] top-[25%] h-56 w-56 rounded-full border border-[#a8f21d]/45 md:h-72 md:w-72">
        <div className="absolute -right-2 top-1/2 h-4 w-4 rounded-full bg-[#a8f21d] shadow-[0_0_0_8px_rgba(168,242,29,.12)] orbit-animation" />

        <div className="absolute inset-8 rounded-full border border-white/25" />

        <div className="absolute inset-[30%] rounded-full bg-[#a8f21d] float-animation">
          <div className="absolute inset-4 rounded-full border border-[#15213d]/45" />
        </div>
      </div>

      <div className="absolute bottom-8 left-6 right-6 grid grid-cols-2 gap-3 md:left-8 md:right-8">
        <div className="rounded-2xl border border-white/20 bg-white/[0.07] p-4 backdrop-blur-sm">
          <div className="serif-italic text-4xl text-[#a8f21d]">07</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/60">
            active pathways
          </div>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/[0.07] p-4 backdrop-blur-sm">
          <div className="serif-italic text-4xl text-[#a8f21d]">94%</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/60">
            team momentum
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-[37%] hidden max-w-[150px] rounded-xl bg-[#e76b5b] p-4 md:block float-animation">
        <div className="mb-6 text-[10px] uppercase tracking-[0.12em]">
          signal / 24
        </div>

        <p className="serif-italic text-xl leading-[0.95]">
          Better work starts with better questions.
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="surface-grid overflow-hidden pt-32 md:pt-44">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-20 md:grid-cols-[1.04fr_.96fr] md:gap-14 md:px-8 md:pb-28">
        <FadeIn>
        <div>
          <div className="eyebrow mb-8">
            Enterprise capability partner
          </div>

          <h1 className="max-w-[710px] text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            Make your{' '}
            <span className="serif-italic text-[#e76b5b]">next move</span>{' '}
            count.
          </h1>

          <p className="mt-8 max-w-[500px] text-[17px] leading-[1.55] text-[#596273]">
            We help people leaders build the capabilities that make change
            stick — with expertise tailored to the work, not a catalogue.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-full bg-[#15213d] px-6 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-transform hover:-translate-y-1"
            >
              Build your pathway

              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#a8f21d] text-[#15213d] transition-transform group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </a>

            <Link
              href="#approach"
              className="flex items-center gap-2 rounded-full border border-[#15213d]/25 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.1em] transition-colors hover:bg-[#15213d]/5"
            >
              <Play size={14} fill="currentColor" />
              See our approach
            </Link>
          </div>
          <FadeIn/>

          <div className="mt-11 flex items-center gap-3 text-[11px] uppercase tracking-[0.13em] text-[#596273]">
            <span className="flex -space-x-2">
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f5f1e9] bg-[#a8f21d] text-[9px] font-bold">
                NR
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f5f1e9] bg-[#e76b5b] text-[9px] font-bold">
                MG
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f5f1e9] bg-[#9ebef0] text-[9px] font-bold">
                AT
              </span>
            </span>

            Trusted by teams building what’s next
          </div>
        </div>

        <HeroVisual />
      </div>

      <div className="border-y border-[#15213d]/10">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-5 overflow-hidden px-5 py-5 md:px-8">
          <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-[#596273]">
            Selected partners
          </span>

          <div className="flex w-full items-center justify-between gap-10 text-sm font-bold tracking-[-0.04em] text-[#15213d]/40 md:text-xl">
            <span>vertex</span>
            <span>quantum</span>
            <span>
              arc<span className="text-[#e76b5b]">/</span>works
            </span>
            <span className="hidden sm:block">LUMEN</span>
            <span className="hidden md:block">PARALLAX</span>
          </div>
        </div>
      </div>
    </section>
  );
}