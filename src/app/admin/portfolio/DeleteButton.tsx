'use client';

import { useRouter } from 'next/navigation';

export default function DeleteButton({ slug, title }: { slug: string; title: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm(`Deletar "${title}"? Esta acao nao pode ser desfeita.`)) return;

    await fetch(`/api/projects/${slug}`, { method: 'DELETE' });
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="text-xs text-red-400 hover:text-red-300"
    >
      Deletar
    </button>
  );
}