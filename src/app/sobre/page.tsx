import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Sobre | Beatriz Silva — Storymaker',
  description: 'Conheça a história por trás da Beatriz Silva — Storymaker.',
};

export default function SobrePage() {
  return (
    <main className="px-6 py-28">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-14 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="flex aspect-[4/5] items-center justify-center border border-creme/20 bg-gradient-to-br from-vinho to-preto p-5 text-center text-sm opacity-60">
            [ Foto da Beatriz — a inserir ]
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">Sobre</p>
          <h1 className="mb-5 mt-2 font-serif text-4xl italic">
            Eu sou a Beatriz.
          </h1>
          {/* PLACEHOLDER — substituir pelos textos reais fornecidos pela cliente */}
          <p className="mb-4 leading-relaxed text-creme/85">
            [Placeholder — quem é a Beatriz, sua relação com o audiovisual e
            como começou. Texto a ser fornecido pela cliente.]
          </p>
          <p className="mb-4 leading-relaxed text-creme/85">
            [Placeholder — por que ela registra momentos e o que quer
            construir com a marca.]
          </p>
          <p className="leading-relaxed text-creme/85">
            [Placeholder — sua forma de trabalhar e o que o cliente pode
            esperar ao contratar.]
          </p>
        </Reveal>
      </div>
    </main>
  );
}
