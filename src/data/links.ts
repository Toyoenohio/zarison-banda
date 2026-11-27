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
    label: 'Escuchar Zarison en Spotify',
    sub: 'Siga a Zarison y añada a su playlist de cabecera, rey',
    url: 'https://spotify.com',
    icon: 'spotify',
  },
  {
    label: 'VIDEOCLIP — INCERTIDUMBRE',
    sub: 'Próximamente… grabando unas últimas tomas.',
    url: 'https://youtube.com',
    icon: 'youtube',
  },
  {
    label: 'ESCUCHA ZARISON EN APPLE MUSIC',
    sub: 'También disponible para gente con cable USB-C de $29.990.',
    url: 'https://music.apple.com',
    icon: 'apple',
  },
  {
    label: 'NUESTRAS PLAYLISTS',
    sub: 'Curadores de música. Y convenientemente, de nosotros mismos.',
    url: '#',
    icon: 'playlist',
  },
  {
    label: 'INSTAGRAM',
    sub: '@zarisonband · Fechas, videos, ensayos y leseras',
    url: 'https://instagram.com/zarisonband',
    icon: 'instagram',
  },
  {
    label: 'TIKTOK',
    sub: 'Todavía no lo entendemos. Pero estamos.',
    url: 'https://tiktok.com/@zarisonband',
    icon: 'tiktok',
  },
  {
    label: 'PRENSA & BOOKING',
    sub: 'zarisonband@gmail.com',
    url: 'mailto:zarisonband@gmail.com',
    icon: 'mail',
  },
];
