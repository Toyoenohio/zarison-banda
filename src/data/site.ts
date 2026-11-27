/**
 * Contenido del sitio.
 * Todo el texto editable vive aquí: los componentes solo lo pintan.
 */

export type HeadlineToken = { text: string } | { cutout: string; rot: number };

export interface SiteConfig {
  name: string;
  nameLine1: string;
  nameLine2: string;
  lang: string;
  title: string;
  description: string;
  metaLeft: string;
  bookingLabel: string;
  /** Línea pequeña sobre el nombre del hero */
  badge: string;
  album: string;
  tagline: string;
  albumTagline: string;
  email: string;
  /** Botones grandes del hero */
  ctaPrimary: { label: string; url: string };
  ctaSecondary: { label: string; url: string };
  instagram: { handle: string; url: string };
  ticker: string[];
  bio: {
    kicker: string;
    tape: string;
    text: string;
    /** [ciudad, género] */
    tags: [string, string];
    hand: string;
  };
  headline: { lines: HeadlineToken[][] };
}

export const site: SiteConfig = {
  name: 'ZARISON',
  nameLine1: 'ZARI',
  nameLine2: 'SON',

  lang: 'es',
  title: 'ZARISON — “Partir de Zero” // Enlaces oficiales y gira',
  description:
    'Enlaces oficiales, música, preventas y fechas de gira de ZARISON. Nuevo álbum: “Partir de Zero”.',

  metaLeft: 'NUEVO ROCK CHILENO ★ TOUR 2027 (ENSAYANDO)',
  bookingLabel: 'BOOKING / ONE-SHEET',
  badge: 'NUEVO ÁLBUM DISPONIBLE · SANTIAGO',
  album: 'PARTIR DE ZERO',

  tagline:
    'Rock Alternativo Made in Chile. Partir de Zero Disponible en todas las plataformas.',

  albumTagline: 'UN DISCO ATÍPICO EN UNA ERA ATÍPICA',
  email: 'zarisonband@gmail.com',

  ctaPrimary: { label: 'ESCUCHAR PARTIR DE ZERO', url: 'https://spotify.com' },
  ctaSecondary: { label: 'VER FECHAS', url: '#gira' },
  instagram: { handle: '@zarisonband', url: 'https://instagram.com/zarisonband' },

  bio: {
    kicker: '¿Y ESTOS QUIÉNES MIERDA SON?',
    tape: '★ QUIÉN ES ZARISON ★',
    text: 'Zarison es una banda de rock alternativo chileno de Santiago, Chile. Su sonido cruza garage rock e indie, con guitarras al frente y una saludable desconfianza hacia las fórmulas. Partir de Zero, su nuevo álbum, condensa esa búsqueda en un disco conceptual hecho para decir las cosas a su manera, aunque al algoritmo le dé lo mismo.',
    tags: ['SANTIAGO · CL', 'ROCK ALTERNATIVO / GARAGE / INDIE'],
    hand: 'stickers/hand.webp',
  },

  /* La estrella separadora la añade el componente Ticker. */
  ticker: [
    'ZARISON // ROCK ALTERNATIVO CHILENO',
    'MÚSICOS, SÍ. CREADORES DE CONTENIDO, NO',
    'NO NACIMOS PARA EL ALGORITMO',
    'GIRA 2027 // MÁS INFO PRONTO (OJALÁ)',
    'MÚSICA ANTIPOÉTICA. SIN FÓRMULAS. CON GANAS',
    'EL MUNDO ES UN CAOS TOTAL. A RATOS, AUDIBLE',
    'SI NO TE GUSTA EL REGGAETÓN NI EL TRAP, ESTE ES TU LUGAR',
    'LA VIDA ES MUY CORTA PARA SABER QUÉ MÁS PONER AQUÍ',
  ],

  /**
   * Slogan del póster con letras recortadas (ransom).
   * Cada línea es una lista de trozos: texto normal o letra recortada con su rotación.
   */
  headline: {
    lines: [
      [{ text: 'UN ' }, { cutout: 'D', rot: -2 }, { text: 'ISCO ATÍPICO' }],
      [
        { text: 'EN ' },
        { cutout: 'U', rot: 3 },
        { text: 'NA ERA ATÍPIC' },
        { cutout: 'A', rot: -3 },
      ],
    ],
  },
};
