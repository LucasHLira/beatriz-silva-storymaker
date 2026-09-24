export interface Service {
  slug: string;
  title: string;
  description: string;
}

// Conteúdo baseado apenas no PRD. Não inventar novos serviços aqui —
// qualquer serviço adicional deve vir de informação real da cliente.
export const services: Service[] = [
  {
    slug: 'eventos',
    title: 'Eventos',
    description:
      'Registro espontâneo dos momentos que fazem parte do seu evento.',
  },
  {
    slug: 'marcas',
    title: 'Conteúdo para marcas',
    description:
      'Conteúdo audiovisual pensado para aproximar sua marca das pessoas.',
  },
  {
    slug: 'redes-sociais',
    title: 'Conteúdo para redes sociais',
    description:
      'Vídeos verticais, registros e conteúdos pensados para Instagram e TikTok.',
  },
  {
    slug: 'momentos-especiais',
    title: 'Momentos especiais',
    description: 'Porque algumas memórias merecem ser guardadas para sempre.',
  },
];
