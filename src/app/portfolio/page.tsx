import type { Metadata } from 'next';
import PortfolioGrid from '@/components/PortfolioGrid';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Portfólio | Beatriz Mobile',
  description: 'Trabalhos audiovisuais realizados pela Beatriz Mobile.',
};

export default function PortfolioPage() {
  return (
    <main className="px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="text-center">
          <p className="eyebrow">Portfólio</p>
          <h1 className="mb-11 mt-3 font-serif text-4xl italic sm:text-5xl">
            Trabalhos
          </h1>
        </Reveal>
        <PortfolioGrid />
        <p className="mt-8 text-center text-sm text-creme/60">
          Os projetos reais (título, cliente, fotos e vídeos) devem
          substituir estes placeholders — ver src/data/projects.ts.
        </p>
      </div>
    </main>
  );
}
