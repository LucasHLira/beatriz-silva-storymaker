'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Project {
  slug: string;
  title: string;
  client: string;
  type: string;
  date: string;
  description: string;
  mediaType: 'foto' | 'video';
  coverImage: string;
  gallery: string[];
  span: 'wide' | 'tall';
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function ProjectForm({ initial }: { initial?: Partial<Project> }) {
  const isEdit = !!initial?.slug;
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState<Project>({
    slug: initial?.slug ?? '',
    title: initial?.title ?? '',
    client: initial?.client ?? '',
    type: initial?.type ?? 'Evento',
    date: initial?.date ?? '',
    description: initial?.description ?? '',
    mediaType: initial?.mediaType ?? 'foto',
    coverImage: initial?.coverImage ?? '',
    gallery: initial?.gallery ?? [],
    span: initial?.span ?? 'wide',
  });

  function handleChange(field: keyof Project, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'title' && !isEdit ? { slug: slugify(value) } : {}),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const url = isEdit ? `/api/projects/${initial!.slug}` : '/api/projects';
    const method = isEdit ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push('/admin/portfolio');
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? 'Erro ao salvar');
      setSaving(false);
    }
  }

  const inputClass =
    'rounded-sm border border-creme/25 bg-creme/[0.06] px-4 py-2.5 text-sm placeholder:text-creme/40 focus:border-creme/60 focus:outline-none';
  const labelClass = 'block text-xs uppercase tracking-widest text-creme/60 mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="max-w-[700px] space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Titulo *</label>
          <input
            className={`${inputClass} w-full`}
            value={form.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Nome do projeto"
            required
          />
        </div>
        <div>
          <label className={labelClass}>Slug (URL)</label>
          <input
            className={`${inputClass} w-full`}
            value={form.slug}
            onChange={(e) => handleChange('slug', e.target.value)}
            placeholder="gerado-automaticamente"
            required
            disabled={isEdit}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Cliente</label>
          <input
            className={`${inputClass} w-full`}
            value={form.client}
            onChange={(e) => handleChange('client', e.target.value)}
            placeholder="Nome do cliente"
          />
        </div>
        <div>
          <label className={labelClass}>Data</label>
          <input
            className={`${inputClass} w-full`}
            value={form.date}
            onChange={(e) => handleChange('date', e.target.value)}
            placeholder="Ex: Marco 2024"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label className={labelClass}>Tipo</label>
          <select
            className={`${inputClass} w-full`}
            value={form.type}
            onChange={(e) => handleChange('type', e.target.value)}
          >
            <option>Evento</option>
            <option>Conteudo para marca</option>
            <option>Redes sociais</option>
            <option>Momento especial</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Midia</label>
          <select
            className={`${inputClass} w-full`}
            value={form.mediaType}
            onChange={(e) => handleChange('mediaType', e.target.value as 'foto' | 'video')}
          >
            <option value="foto">Foto</option>
            <option value="video">Video</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Layout</label>
          <select
            className={`${inputClass} w-full`}
            value={form.span}
            onChange={(e) => handleChange('span', e.target.value as 'wide' | 'tall')}
          >
            <option value="wide">Largo (16:10)</option>
            <option value="tall">Alto (3:4)</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Descricao</label>
        <textarea
          className={`${inputClass} w-full min-h-[100px] resize-y`}
          value={form.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Descreva o projeto em 2-4 frases..."
        />
      </div>

      <div>
        <label className={labelClass}>Imagem de capa (caminho)</label>
        <input
          className={`${inputClass} w-full`}
          value={form.coverImage}
          onChange={(e) => handleChange('coverImage', e.target.value)}
          placeholder="/images/nome-do-arquivo.jpg"
        />
        <p className="mt-1 text-xs text-creme/40">Coloque a imagem na pasta /public/images/ e informe o caminho.</p>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-sm bg-vinho px-6 py-2.5 text-sm font-bold tracking-wide transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {saving ? 'Salvando...' : isEdit ? 'Salvar alteracoes' : 'Criar projeto'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-sm border border-creme/25 px-5 py-2.5 text-sm tracking-wide"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}