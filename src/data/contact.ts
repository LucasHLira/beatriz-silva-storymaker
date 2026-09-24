// PLACEHOLDER — substituir pelos dados reais antes de publicar.
export const contact = {
  whatsappNumber: '5500000000000', // formato: código do país + DDD + número, sem símbolos
  whatsappMessage:
    'Oi, Beatriz! Conheci seu trabalho pelo site e gostaria de conversar sobre um projeto.',
  instagramUrl: 'https://instagram.com/beatrizmobile', // confirmar perfil real
  email: 'contato@beatrizmobile.com', // confirmar e-mail real
};

export function whatsappLink(customMessage?: string) {
  const msg = encodeURIComponent(customMessage ?? contact.whatsappMessage);
  return `https://wa.me/${contact.whatsappNumber}?text=${msg}`;
}
