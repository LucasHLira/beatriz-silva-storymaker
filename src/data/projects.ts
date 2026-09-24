export interface Project {
  slug: string;
  title: string;
  client: string;
  type: string;
  date: string;
  description: string;
  mediaType: 'foto' | 'video';
  coverImage: string;
  gallery: string[];
  span: 'wide' | 'tall';
}

// PLACEHOLDER — substituir por projetos reais da Beatriz.
// Não inventar clientes, números ou resultados: preencher apenas com
// informação fornecida por ela (ver seção "Conteúdo necessário da cliente" no PRD).
export const projects: Project[] = [
  {
    slug: 'projeto-1',
    title: '[Nome do projeto]',
    client: '[Cliente]',
    type: 'Evento',
    date: '[Data]',
    description: '[Descrição do projeto — a preencher]',
    mediaType: 'video',
    coverImage: '/images/placeholder-1.jpg',
    gallery: [],
    span: 'wide',
  },
  {
    slug: 'projeto-2',
    title: '[Nome do projeto]',
    client: '[Cliente]',
    type: 'Conteúdo para marca',
    date: '[Data]',
    description: '[Descrição do projeto — a preencher]',
    mediaType: 'foto',
    coverImage: '/images/placeholder-2.jpg',
    gallery: [],
    span: 'wide',
  },
  {
    slug: 'projeto-3',
    title: '[Nome do projeto]',
    client: '[Cliente]',
    type: 'Momento especial',
    date: '[Data]',
    description: '[Descrição do projeto — a preencher]',
    mediaType: 'foto',
    coverImage: '/images/placeholder-3.jpg',
    gallery: [],
    span: 'tall',
  },
  {
    slug: 'projeto-4',
    title: '[Nome do projeto]',
    client: '[Cliente]',
    type: 'Redes sociais',
    date: '[Data]',
    description: '[Descrição do projeto — a preencher]',
    mediaType: 'video',
    coverImage: '/images/placeholder-4.jpg',
    gallery: [],
    span: 'tall',
  },
  {
    slug: 'projeto-5',
    title: '[Nome do projeto]',
    client: '[Cliente]',
    type: 'Evento',
    date: '[Data]',
    description: '[Descrição do projeto — a preencher]',
    mediaType: 'foto',
    coverImage: '/images/placeholder-5.jpg',
    gallery: [],
    span: 'tall',
  },
];
