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
  sticker: string;
  album: string;
  tagline: string;
  albumTagline: string;
  email: string;
  ticker: string[];
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

  metaLeft: 'ROCK DE GARAJE ★ TOUR 2026-2027',
  sticker: 'NUEVO DISCO “PARTIR DE ZERO”',
  album: 'PARTIR DE ZERO',

  tagline:
    'Rock crudo y sin filtros. “Partir de Zero” ya disponible en todas las plataformas.',

  albumTagline: 'UN DISCO ATÍPICO EN UNA ERA ATÍPICA',
  email: 'booking@zarisonband.com',

  ticker: [
    'NUEVO ÁLBUM “PARTIR DE ZERO” YA DISPONIBLE',
    'UN DISCO ATÍPICO EN UNA ERA ATÍPICA',
    'GIRA 2026 // ENTRADAS A LA VENTA',
    'VINILO EDICIÓN ROSA LIMITADO',
    'MÁS VOLUMEN, MENOS POSTUREO',
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
