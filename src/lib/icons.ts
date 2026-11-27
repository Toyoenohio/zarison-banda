/**
 * Iconos SVG del hub. Se guardan como markup para poder inyectarlos
 * con `set:html` y heredar el color con `currentColor`.
 */

const stroke =
  'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';

export const icons = {
  play: `<svg ${stroke}><circle cx="12" cy="12" r="9.5"/><path d="M10 8.5v7l5.5-3.5z" fill="currentColor" stroke="none"/></svg>`,
  spotify: `<svg ${stroke}><circle cx="12" cy="12" r="9.5"/><path d="M8 10.4c2.7-.8 5.4-.6 7.6.6M8.3 13.3c2.2-.6 4.3-.4 6 .7M8.7 16c1.7-.4 3.2-.2 4.6.5"/></svg>`,
  apple: `<svg ${stroke}><path d="M9 18V6l10-2v12"/><circle cx="6.8" cy="18" r="2.2"/><circle cx="16.8" cy="16" r="2.2"/></svg>`,
  youtube: `<svg ${stroke}><rect x="2.8" y="5.8" width="18.4" height="12.6" rx="3.5"/><path d="M10 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/></svg>`,
  instagram: `<svg ${stroke}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>`,
  tiktok: `<svg ${stroke}><path d="M14.5 4c.4 2.6 2 4.1 4.4 4.3M14.5 4v9.6a3.75 3.75 0 1 1-3.75-3.75"/></svg>`,
  bag: `<svg ${stroke}><path d="M6 8h12l-1.1 12H7.1L6 8z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10"/></svg>`,
  mail: `<svg ${stroke}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>`,
  ticket: `<svg ${stroke}><path d="M4 8a2.2 2.2 0 0 1 0 8v3h16v-3a2.2 2.2 0 0 1 0-8V5H4v3z"/><path d="M14 5.5v13" stroke-dasharray="2 2.4"/></svg>`,
  link: `<svg ${stroke}><path d="M7 17 17 7M9.5 7H17v7.5"/></svg>`,
} as const;

export type IconName = keyof typeof icons;

/** Devuelve el markup del icono; si el nombre no existe, usa la flecha. */
export const getIcon = (name: IconName): string => icons[name] ?? icons.link;
