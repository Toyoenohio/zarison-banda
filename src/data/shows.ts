export interface Show {
  /** Fecha en formato YYYY-MM-DD */
  date: string;
  city: string;
  venue: string;
  note?: string;
  /** URL de venta, `null` si todavía no hay entradas */
  tickets?: string | null;
  soldOut?: boolean;
  free?: boolean;
}

/**
 * Fechas de la gira. Las que ya pasaron se ocultan solas
 * (en el build y también al cargar la página).
 */
export const shows: Show[] = [
  {
    date: '2026-10-18',
    city: 'MADRID',
    venue: 'Sala La Riviera',
    note: 'Presentación oficial del álbum',
    tickets: 'https://entradas.ejemplo.com',
  },
  {
    date: '2026-10-24',
    city: 'BARCELONA',
    venue: 'Razzmatazz 2',
    note: '+ Fiesta Afterparty Oficial',
    tickets: 'https://entradas.ejemplo.com',
  },
  {
    date: '2026-11-07',
    city: 'VALENCIA',
    venue: 'Sala Moon',
    note: 'Aforo completo',
    tickets: '#',
    soldOut: true,
  },
  {
    date: '2026-11-21',
    city: 'BILBAO',
    venue: 'Kafe Antzokia',
    note: 'Apertura de puertas 21:00 h',
    tickets: 'https://entradas.ejemplo.com',
  },
  {
    date: '2026-12-05',
    city: 'SEVILLA',
    venue: 'Sala Custom',
    note: 'Festival Invierno Noise',
    tickets: 'https://entradas.ejemplo.com',
  },
  {
    date: '2026-12-19',
    city: 'ZARAGOZA',
    venue: 'Sala López',
    note: 'Próximamente más detalles',
    tickets: null,
  },
];
