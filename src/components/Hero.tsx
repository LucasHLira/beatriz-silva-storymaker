import Link from 'next/link';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-20 pt-28">
      <div className="pointer-events-none absolute -right-[10%] top-[10%] h-[70%] w-[60%] border border-creme/15" />
      <div className="relative z-[2] mx-auto max-w-[1100px] w-full">
        <div className="max-w-[640px]">
          <Reveal>
            <p className="eyebrow">Registros audiovisuais</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-serif text-5xl italic sm:text-6xl md:text-7xl">
              Eu registro.
              <br />
              Você vive.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[480px] text-lg leading-relaxed text-creme/85">
              Registros audiovisuais feitos para transformar momentos em
              histórias que você vai querer reviver.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="rounded-sm bg-vinho px-6 py-3 text-sm font-bold tracking-wide transition-transform hover:-translate-y-0.5"
              >
                Quero registrar meu momento
              </Link>
              <Link
                href="/portfolio"
                className="rounded-sm border border-creme px-6 py-3 text-sm font-bold tracking-wide transition-transform hover:-translate-y-0.5"
              >
                Ver meu trabalho
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
