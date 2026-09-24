import type { Metadata } from 'next';
import Services from '@/components/Services';
import CTAFinal from '@/components/CTAFinal';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Serviços | Beatriz Mobile',
  description:
    'Conheça os serviços de registro audiovisual da Beatriz Mobile: eventos, marcas, redes sociais e momentos especiais.',
};

export default function ServicosPage() {
  return (
    <main className="pt-14">
      <div className="px-6 pt-14 text-center">
        <Reveal>
          <p className="eyebrow">Serviços</p>
          <h1 className="mt-3 font-serif text-4xl italic sm:text-5xl">
            O que eu registro
          </h1>
        </Reveal>
      </div>
      <Services compact />
      <CTAFinal />
    </main>
  );
}
