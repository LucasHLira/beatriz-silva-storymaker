import Link from 'next/link';
import Reveal from './Reveal';

export default function CTAFinal() {
  return (
    <section className="bg-vinho px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-[700px]">
        <h2 className="font-serif text-3xl italic sm:text-4xl">
          Tem algum momento que você gostaria de guardar para sempre?
        </h2>
        <Link
          href="/contato"
          className="mt-7 inline-block rounded-sm border border-creme px-7 py-3 text-sm font-bold tracking-wide"
        >
          Vamos registrar
        </Link>
      </Reveal>
    </section>
  );
}
