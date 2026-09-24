import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Services from '@/components/Services';
import PortfolioGrid from '@/components/PortfolioGrid';
import RegistrarSection from '@/components/RegistrarSection';
import Process from '@/components/Process';
import CTAFinal from '@/components/CTAFinal';
import Reveal from '@/components/Reveal';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Services />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1100px]">
          <Reveal className="text-center">
            <p className="eyebrow">Portfólio</p>
            <h2 className="mt-3 mb-11 font-serif text-4xl italic">
              Trabalhos recentes
            </h2>
          </Reveal>
          <PortfolioGrid limit={5} />
          <div className="mt-9 text-center">
            <Link
              href="/portfolio"
              className="inline-block rounded-sm border border-creme px-6 py-3 text-sm font-bold tracking-wide"
            >
              Ver portfólio completo →
            </Link>
          </div>
        </div>
      </section>
      <RegistrarSection />
      <Process />
      <CTAFinal />
    </main>
  );
}
