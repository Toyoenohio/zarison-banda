import type { IconName } from '../lib/icons';

export interface FlyerLink {
  /** Título grande del flyer */
  label: string;
  /** Línea pequeña opcional */
  sub?: string;
  /** Destino: https://…, #ancla o mailto:… */
  url: string;
  icon: IconName;
  /** Destacado en rosa con punto pulsante */
  featured?: boolean;
}

/**
 * Enlaces principales del hub, en orden de aparición.
 * Los `mailto:` no se abren en pestaña nueva; el resto sí.
 */
export const links: FlyerLink[] = [
  {
    label: 'ESCUCHAR “PARTIR DE ZERO”',
    sub: 'Álbum completo · Todas las plataformas',
    url: 'https://spotify.com',
    icon: 'play',
    featured: true,
  },
  {
    label: 'SPOTIFY',
    sub: 'Sigue a Zarison y añade a tus playlists',
    url: 'https://spotify.com',
    icon: 'spotify',
  },
  {
    label: 'VIDEOCLIP OFICIAL',
    sub: 'Estreno en YouTube en alta definición',
    url: 'https://youtube.com',
    icon: 'youtube',
  },
  {
    label: 'APPLE MUSIC',
    url: 'https://music.apple.com',
    icon: 'apple',
  },
  {
    label: 'TIENDA DE MERCH & VINILOS',
    sub: 'Edición 12" rosa halftone & camisetas',
    url: '#merch',
    icon: 'bag',
  },
  {
    label: 'INSTAGRAM',
    sub: '@zarisonband · Backstage & adelantos',
    url: 'https://instagram.com',
    icon: 'instagram',
  },
  {
    label: 'TIKTOK',
    url: 'https://tiktok.com',
    icon: 'tiktok',
  },
  {
    label: 'PRENSA & BOOKING',
    sub: 'booking@zarisonband.com',
    url: 'mailto:booking@zarisonband.com',
    icon: 'mail',
  },
];
