'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-creme/10 bg-preto/50 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-sm tracking-[0.18em]">BEATRIZ SILVA</span>
          <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-creme/60">Storymaker</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-vinho hover:brightness-150">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="rounded-sm bg-vinho px-5 py-2.5 text-sm font-bold tracking-wide transition-transform hover:-translate-y-0.5"
          >
            Vamos conversar
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-9 bg-musgo font-serif text-2xl">
          <button
            aria-label="Fechar menu"
            className="absolute right-6 top-6"
            onClick={() => setOpen(false)}
          >
            <X size={30} />
          </button>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
