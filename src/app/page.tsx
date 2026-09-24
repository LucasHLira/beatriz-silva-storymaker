import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Services from '@/components/Services';
import PortfolioGrid from '@/components/PortfolioGrid';
import RegistrarSection from '@/components/RegistrarSection';
import Process from '@/components/Process';
import CTAFinal from '@/components/CTAFinal';
import StickyCard from '@/components/StickyCard';
import Reveal from '@/components/Reveal';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Cartão 1 — Hero (z-index: 1) */}
      <StickyCard index={1} className="bg-musgo">
        <Hero />
      </StickyCard>

      {/* Cartão 2 — Manifesto (z-index: 2) */}
      <StickyCard index={2} className="bg-[#1c2614]">
        <Manifesto />
      </StickyCard>

      {/* Cartão 3 — Serviços (z-index: 3) */}
      <StickyCard index={3} className="bg-preto">
        <Services />
      </StickyCard>

      {/* Portfólio — não-sticky, z-index: 4 (acima das sticky cards anteriores) */}
      <div className="relative bg-musgo" style={{ zIndex: 4 }}>
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
      </div>

      {/* Registrar é eternizar — não-sticky, z-index: 5 */}
      <div className="relative bg-[#0e1409]" style={{ zIndex: 5 }}>
        <RegistrarSection />
      </div>

      {/* Cartão 6 — Processo (z-index: 6) */}
      <StickyCard index={6} className="bg-preto">
        <Process />
      </StickyCard>

      {/* CTA Final — não-sticky, z-index: 7 */}
      <div className="relative bg-vinho" style={{ zIndex: 7 }}>
        <CTAFinal />
      </div>
    </main>
  );
}

