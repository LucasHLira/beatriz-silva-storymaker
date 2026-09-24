import Link from 'next/link';
import { projects } from '@/data/projects';
import Reveal from './Reveal';

export default function PortfolioGrid({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
      {items.map((p, i) => (
        <Reveal
          key={p.slug}
          delay={i * 0.06}
          className={
            p.span === 'wide'
              ? 'col-span-2 sm:col-span-3'
              : 'col-span-1 sm:col-span-2'
          }
        >
          <Link
            href={`/portfolio/${p.slug}`}
            className={`group relative flex items-center justify-center border border-creme/15 bg-creme/[0.04] p-4 text-center text-xs text-creme/60 transition-transform hover:-translate-y-1 ${
              p.span === 'wide' ? 'aspect-[16/10]' : 'aspect-[3/4]'
            }`}
          >
            <span className="absolute left-2.5 top-2 text-[10px] uppercase tracking-widest opacity-60">
              {p.mediaType === 'video' ? 'Vídeo' : 'Foto'}
            </span>
            <span>
              {p.title}
              <br />
              <span className="opacity-70">[ mídia a inserir ]</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
