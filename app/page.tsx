import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Stats from '@/components/Stats';
import Approach from '@/components/Approach';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      <main>
        <Hero />
        <Solutions />
        <Stats />
        <Approach />
        <Process />
        <Testimonials />
        <LeadForm />
      </main>

      <Footer />
    </div>
  );
}