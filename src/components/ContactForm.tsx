'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTA: este formulário ainda não envia dados de verdade.
    // Conecte a um endpoint (API route + serviço de e-mail, ou
    // integração com WhatsApp Business API) antes de publicar.
    setStatus('sent');
  }

  const inputClass =
    'rounded-sm border border-creme/25 bg-creme/[0.06] px-4 py-3 text-sm placeholder:text-creme/50 focus:outline-none focus:border-creme/60';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <input className={inputClass} type="text" placeholder="Nome" required />
      <input className={inputClass} type="email" placeholder="E-mail" required />
      <input className={inputClass} type="tel" placeholder="WhatsApp" />
      <select className={inputClass} required defaultValue="">
        <option value="" disabled>
          Tipo de projeto
        </option>
        <option>Evento</option>
        <option>Conteúdo para marca</option>
        <option>Redes sociais</option>
        <option>Momento especial</option>
      </select>
      <input className={inputClass} type="date" />
      <textarea
        className={`${inputClass} min-h-[100px] resize-y`}
        placeholder="Mensagem"
      />
      <button
        type="submit"
        className="rounded-sm bg-vinho px-6 py-3 text-sm font-bold tracking-wide transition-transform hover:-translate-y-0.5"
      >
        Enviar mensagem
      </button>
      {status === 'sent' && (
        <p className="text-sm text-creme/80">
          Formulário de demonstração — conecte a um serviço de envio real
          (e-mail ou WhatsApp API) para receber mensagens.
        </p>
      )}
    </form>
  );
}
