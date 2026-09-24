import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { whatsappLink } from '@/data/contact';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="px-6 py-28">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <p className="eyebrow">{project.type}</p>
          <h1 className="mt-3 font-serif text-4xl italic">{project.title}</h1>

          <div className="mt-8 flex aspect-video items-center justify-center border border-creme/15 bg-creme/[0.05] text-sm opacity-60">
            [ {project.mediaType === 'video' ? 'vídeo' : 'foto'} principal —
            a inserir ]
          </div>

          <h2 className="mb-3 mt-10 font-serif text-2xl italic">
            Sobre esse registro
          </h2>
          <p className="text-creme/85">{project.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-creme/75 sm:grid-cols-3">
            <div>
              <span className="block text-xs uppercase tracking-widest opacity-60">
                Cliente
              </span>
              {project.client}
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest opacity-60">
                Data
              </span>
              {project.date}
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest opacity-60">
                Tipo
              </span>
              {project.type}
            </div>
          </div>

          <h2 className="mb-3 mt-10 font-serif text-2xl italic">Galeria</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center border border-creme/15 bg-creme/[0.04] text-xs opacity-50"
              >
                [ mídia {i} ]
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="mb-4 font-serif text-2xl italic">
              Quer registrar algo assim?
            </h2>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm bg-vinho px-6 py-3 text-sm font-bold tracking-wide"
            >
              Falar comigo
            </a>
          </div>

          <div className="mt-10 text-center">
            <Link href="/portfolio" className="text-sm underline opacity-80">
              ← Voltar ao portfólio
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
