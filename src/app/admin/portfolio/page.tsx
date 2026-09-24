import Link from 'next/link';
import { getProjects } from '@/lib/projectsStore';
import DeleteButton from './DeleteButton';

export const dynamic = 'force-dynamic';

export default function PortfolioAdminPage() {
  const projects = getProjects();

  return (
    <div className="min-h-screen">
      <header className="border-b border-creme/10 px-6 py-4">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-creme/60">
            <Link href="/admin" className="hover:text-creme">Dashboard</Link>
            <span>/</span>
            <span className="text-creme">Portfolio</span>
          </div>
          <Link
            href="/admin/portfolio/novo"
            className="rounded-sm bg-vinho px-4 py-2 text-xs font-bold tracking-wide"
          >
            + Novo projeto
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-6 py-12">
        <h1 className="mb-8 font-serif text-3xl italic">Projetos</h1>

        {projects.length === 0 ? (
          <p className="text-creme/60">Nenhum projeto ainda. <Link href="/admin/portfolio/novo" className="underline">Adicionar primeiro projeto</Link></p>
        ) : (
          <div className="divide-y divide-creme/10 border border-creme/15">
            {projects.map((p) => (
              <div key={p.slug} className="flex items-center gap-4 px-5 py-4">
                <div className="flex-1">
                  <p className="font-medium">{p.title}</p>
                  <p className="mt-0.5 text-xs text-creme/50">
                    {p.type} &middot; {p.client} &middot; {p.date} &middot; {p.mediaType}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/portfolio/${p.slug}`}
                    target="_blank"
                    className="text-xs text-creme/50 hover:text-creme"
                  >
                    Ver
                  </Link>
                  <Link
                    href={`/admin/portfolio/${p.slug}`}
                    className="text-xs text-creme/80 hover:text-creme"
                  >
                    Editar
                  </Link>
                  <DeleteButton slug={p.slug} title={p.title} />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}