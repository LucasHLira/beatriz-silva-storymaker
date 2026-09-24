import Reveal from './Reveal';

export default function RegistrarSection() {
  return (
    <section className="px-6 py-24 text-center">
      <Reveal className="mx-auto max-w-[680px]">
        <h2 className="font-serif text-4xl italic sm:text-5xl">
          Registrar é eternizar.
        </h2>
        <div className="mt-7 space-y-2 text-creme/85">
          <p>Uma foto guarda um instante.</p>
          <p>Um vídeo guarda movimento.</p>
          <p>Uma memória guarda uma história.</p>
        </div>
      </Reveal>
    </section>
  );
}
