import type { Metadata } from 'next';
import { contact, whatsappLink } from '@/data/contact';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contato | Beatriz Silva — Storymaker',
  description: 'Fale com a Beatriz Silva — Storymaker sobre o seu próximo registro.',
};

export default function ContatoPage() {
  return (
    <main className="px-6 py-28">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-14 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Contato</p>
          <h1 className="mb-4 mt-2 font-serif text-4xl italic">
            Vamos criar uma memória?
          </h1>
          <p className="mb-6 leading-relaxed text-creme/85">
            Prefere falar direto? Me chama no WhatsApp ou acompanha o
            trabalho no Instagram.
          </p>
          <a
            className="mb-2.5 block text-sm text-creme/90"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            → Falar no WhatsApp{' '}
            <span className="opacity-60">[número a confirmar]</span>
          </a>
          <a
            className="mb-2.5 block text-sm text-creme/90"
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            → Acompanhar no Instagram{' '}
            <span className="opacity-60">[perfil a confirmar]</span>
          </a>
          <a className="block text-sm text-creme/90" href={`mailto:${contact.email}`}>
            → {contact.email}{' '}
            <span className="opacity-60">[e-mail a confirmar]</span>
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </main>
  );
}
