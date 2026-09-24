import Link from 'next/link';
import { getProjects } from '@/lib/projectsStore';
import LogoutButton from './LogoutButton';

export const dynamic = 'force-dynamic';

export default function AdminPage() {
  const projects = getProjects();
  const total = projects.length;
  const comFoto = projects.filter((p) => p.mediaType === 'foto').length;
  const comVideo = projects.filter((p) => p.mediaType === 'video').length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-creme/10 px-6 py-4">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between">
          <div>
            <span className="font-serif text-sm tracking-[0.18em]">BEATRIZ SILVA</span>
            <span className="ml-2 text-xs text-creme/50">/ Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-creme/50 hover:text-creme/80">
              Ver site &rarr;
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-6 py-12">
        <h1 className="mb-2 font-serif text-3xl italic">Dashboard</h1>
        <p className="mb-10 text-sm text-creme/60">Gerencie o conteudo do seu site.</p>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="border border-creme/15 bg-creme/[0.04] p-6">
            <p className="text-3xl font-bold">{total}</p>
            <p className="mt-1 text-sm text-creme/60">Projetos no portfolio</p>
          </div>
          <div className="border border-creme/15 bg-creme/[0.04] p-6">
            <p className="text-3xl font-bold">{comFoto}</p>
            <p className="mt-1 text-sm text-creme/60">Projetos de foto</p>
          </div>
          <div className="border border-creme/15 bg-creme/[0.04] p-6">
            <p className="text-3xl font-bold">{comVideo}</p>
            <p className="mt-1 text-sm text-creme/60">Projetos de video</p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mb-10">
          <h2 className="mb-4 font-serif text-xl italic">Acoes rapidas</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/portfolio/novo"
              className="rounded-sm bg-vinho px-5 py-2.5 text-sm font-bold tracking-wide"
            >
              + Novo projeto
            </Link>
            <Link
              href="/admin/portfolio"
              className="rounded-sm border border-creme/30 px-5 py-2.5 text-sm font-bold tracking-wide"
            >
              Ver todos os projetos
            </Link>
          </div>
        </div>

        {/* Recent projects */}
        <div>
          <h2 className="mb-4 font-serif text-xl italic">Projetos recentes</h2>
          <div className="divide-y divide-creme/10 border border-creme/15">
            {projects.slice(0, 5).map((p) => (
              <div key={p.slug} className="flex items-center justify-between px-5 py-3">
                <div>
                  <p className="text-sm font-medium">{p.title}</p>
                  <p className="text-xs text-creme/50">{p.type} &middot; {p.date}</p>
                </div>
                <Link
                  href={`/admin/portfolio/${p.slug}`}
                  className="text-xs text-creme/60 hover:text-creme"
                >
                  Editar &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}