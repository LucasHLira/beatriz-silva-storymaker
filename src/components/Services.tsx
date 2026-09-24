import { services } from '@/data/services';
import Reveal from './Reveal';

export default function Services({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`px-6 ${compact ? 'py-16' : 'py-24'}`}>
      <div className="mx-auto max-w-[1100px]">
        {!compact && (
          <Reveal className="text-center">
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-3 mb-11 font-serif text-4xl italic">
              O que eu registro
            </h2>
          </Reveal>
        )}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <div className="h-full border border-creme/15 bg-creme/[0.06] p-7 transition-all hover:-translate-y-1.5 hover:bg-vinho/25">
                <h3 className="font-serif text-lg italic">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-creme/80">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
