import Link from 'next/link';
import Reveal from './Reveal';

export default function Manifesto() {
  return (
    <section className="px-6 py-24">
      <Reveal className="mx-auto max-w-[680px] text-center">
        <p className="eyebrow">Manifesto</p>
        <h2 className="mt-3 font-serif text-4xl italic sm:text-5xl">
          Me chamo Beatriz.
        </h2>
        <p className="mt-6 text-lg leading-loose text-creme/90">
          Sou apaixonada por registrar tudo. Pequenos momentos. Grandes
          histórias. Pessoas. Lugares. Detalhes. Porque acredito que aquilo
          que parece pequeno hoje pode se tornar uma das memórias mais
          importantes amanhã.
        </p>
        <Link
          href="/sobre"
          className="mt-6 inline-block rounded-sm border border-creme px-6 py-3 text-sm font-bold tracking-wide"
        >
          Conheça minha história →
        </Link>
      </Reveal>
    </section>
  );
}
