import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import Navbar from '@/components/Navbar';
import Process from '@/components/Process';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Solutions from '@/components/Solutions';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      <main>
        <Hero />

        <ScrollReveal>
          <Solutions />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <Stats />
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <Approach />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Process />
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <LeadForm />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}