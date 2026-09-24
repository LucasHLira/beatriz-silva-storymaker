'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Senha incorreta. Tente novamente.');
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <span className="font-serif text-sm tracking-[0.18em]">BEATRIZ SILVA</span>
          <span className="mt-0.5 block font-sans text-[10px] tracking-[0.22em] uppercase text-creme/60">
            Storymaker
          </span>
          <p className="mt-6 font-serif text-2xl italic text-creme/80">Area restrita</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-sm border border-creme/25 bg-creme/[0.06] px-4 py-3 text-sm placeholder:text-creme/40 focus:border-creme/60 focus:outline-none"
          />

          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-sm bg-vinho px-6 py-3 text-sm font-bold tracking-wide transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="/" className="text-xs text-creme/40 hover:text-creme/70">
            &larr; Voltar ao site
          </a>
        </div>
      </div>
    </div>
  );
}