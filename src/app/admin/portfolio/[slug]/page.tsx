import ProjectForm from '../ProjectForm';

export default function NovoProjetoPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-creme/10 px-6 py-4">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex items-center gap-2 text-sm text-creme/60">
            <a href="/admin" className="hover:text-creme">Dashboard</a>
            <span>/</span>
            <a href="/admin/portfolio" className="hover:text-creme">Portfolio</a>
            <span>/</span>
            <span className="text-creme">Novo projeto</span>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[1100px] px-6 py-12">
        <h1 className="mb-8 font-serif text-3xl italic">Novo projeto</h1>
        <ProjectForm />
      </main>
    </div>
  );
}