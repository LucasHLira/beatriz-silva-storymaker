import { contact, whatsappLink } from '@/data/contact';

export default function Footer() {
  return (
    <footer className="border-t border-creme/10 px-6 py-14 text-center">
      <div className="mx-auto max-w-[1100px]">
        <span className="font-serif text-lg">BEATRIZ MOBILE</span>
        <p className="mt-2 font-serif italic text-creme/75">
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
          © {new Date().getFullYear()} Beatriz Mobile
        </p>
      </div>
    </footer>
  );
}
