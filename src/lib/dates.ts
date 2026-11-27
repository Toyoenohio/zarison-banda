/**
 * Fechas de la gira.
 * Abreviaturas en español fijas para que el resultado sea idéntico
 * en el build y en el navegador (sin depender de la ICU del sistema).
 */

const MONTHS = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
const WEEKDAYS = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];

/** Convierte YYYY-MM-DD en Date local (sin el desfase de UTC). */
export function parseISODate(iso: string): Date {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1);
}

/** Hoy a las 00:00, para comparar por días completos. */
export function startOfToday(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

export interface DateParts {
  month: string;
  day: string;
  weekday: string;
}

/** Trozos listos para pintar el talón de la entrada. */
export function formatDateParts(iso: string): DateParts {
  const date = parseISODate(iso);
  return {
    month: MONTHS[date.getMonth()] ?? '',
    day: String(date.getDate()).padStart(2, '0'),
    weekday: WEEKDAYS[date.getDay()] ?? '',
  };
}

/** Fechas de hoy en adelante, en orden ascendente. */
export function upcomingShows<T extends { date: string }>(list: readonly T[]): T[] {
  const today = startOfToday();
  return list
    .filter((show) => parseISODate(show.date) >= today)
    .sort((a, b) => parseISODate(a.date).getTime() - parseISODate(b.date).getTime());
}
