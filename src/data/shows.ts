export interface Show {
  /** Fecha en formato YYYY-MM-DD */
  date: string;
  city: string;
  venue: string;
  note?: string;
  /** Estado que se pinta a la derecha: "PRONTO", "AGOTADO*", "ENTRADAS ¿?"… */
  status: string;
  /** Pinta el estado como sello rotado en vez de texto plano */
  stamp?: boolean;
}

/**
 * Fechas de la gira. Las que ya pasaron se ocultan solas
 * (en el build y también al cargar la página).
 * Ninguna tiene venta de entradas todavía: el estado lo dice el texto.
 */
export const shows: Show[] = [
  {
    date: '2027-01-23',
    city: 'SANTIAGO',
    venue: 'Sala SCD Bellavista',
    note: 'El escenario es real. La fecha todavía la estamos analizando en la sala de ensayo',
    status: 'PRÓXIMAMENTE',
  },
  {
    date: '2027-03-04',
    city: 'SANTIAGO',
    venue: 'La Puerta Amarilla',
    note: 'Rock, cerveza y probablemente alguien pidiendo “una de Los Bunkers”.',
    status: 'ENTRADAS ¿?',
  },
  {
    date: '2027-04-10',
    city: 'SANTIAGO',
    venue: 'Bar de Mala Muerte',
    note: 'Quién no estuvo ahí. Quién sabe dónde queda.',
    status: 'AFORO: 37 + 1 PERRO',
  },
  {
    date: '2027-05-12',
    city: 'SANTIAGO',
    venue: 'Bar de René',
    note: 'Volumen innecesariamente alto desde una distancia innecesariamente corta.',
    status: 'PRONTO',
  },
  {
    date: '2027-06-03',
    city: 'VALPARAÍSO',
    venue: 'Centro Cultural El Último Piso',
    note: 'No existe todavía. Pero el nombre está bueno.',
    status: 'POR CONFIRMAR',
  },
  {
    date: '2027-07-03',
    city: 'SANTIAGO',
    venue: 'Patio de la Casa del Javi (Batero)',
    note: 'Dirección por interno. Vecinos sin confirmar.',
    status: 'AGOTADO*',
    stamp: true,
  },
];
