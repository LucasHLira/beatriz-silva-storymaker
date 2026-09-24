import { contact, whatsappLink } from '@/data/contact';

export default function Footer() {
  return (
    <footer className="border-t border-creme/10 px-6 py-14 text-center">
      <div className="mx-auto max-w-[1100px]">
        <span className="font-serif text-sm tracking-[0.18em]">BEATRIZ SILVA</span>
        <span className="mt-0.5 block font-sans text-[10px] tracking-[0.22em] uppercase text-creme/60">Storymaker</span>
        <p className="mt-3 font-serif italic text-creme/75">
          Registrar é eternizar.
        </p>
        <div className="mt-5 flex justify-center gap-6 text-sm">
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${contact.email}`}>E-mail</a>
        </div>
        <p className="mt-5 text-xs text-creme/55">
          © {new Date().getFullYear()} Beatriz Silva — Storymaker
        </p>
      </div>
    </footer>
  );
}
