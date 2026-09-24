import Reveal from './Reveal';

const steps = [
  { n: '01', title: 'Você me chama', text: 'Conte sobre seu evento, projeto ou momento.' },
  { n: '02', title: 'A gente conversa', text: 'Entendo o que você quer registrar e pensamos juntos na melhor forma.' },
  { n: '03', title: 'Planejamos', text: 'Definimos detalhes, referências, horários e necessidades.' },
  { n: '04', title: 'Eu registro', text: 'É hora de deixar o momento acontecer.' },
  { n: '05', title: 'Você recebe', text: 'O resultado vira memória.' },
];

export default function Process() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="text-center">
          <p className="eyebrow">Processo</p>
          <h2 className="mt-3 mb-11 font-serif text-4xl italic">Como funciona</h2>
        </Reveal>
        <div className="mx-auto max-w-[700px]">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="flex gap-6 border-b border-creme/10 py-6">
                <div className="min-w-[48px] font-serif text-2xl italic opacity-50">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm text-creme/80">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
