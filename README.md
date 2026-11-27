# ZARISON — Hub oficial de enlaces y gira

Sitio de una sola página con los enlaces de la banda, las fechas de la gira y el contacto
de contratación. Reconstruido en **Astro** a partir del HTML original de una sola pieza, ahora
como proyecto modular: cada bloque es un componente y todo el contenido vive en archivos de datos.

Diseño: estética de fotocopia y cartel de concierto — negro carbón, papel crema y rosa neón,
con tipografías Anton, Space Grotesk y Special Elite (autoalojadas con Fontsource).

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor local en http://localhost:4321
npm run build     # genera el sitio estático en dist/
npm run preview   # sirve dist/ para revisarlo
npm run check     # comprobación de tipos de Astro + TypeScript
```

Requiere Node 18.20+ (probado con Node 22 y Astro 7).

## Estructura

```
src/
├── pages/index.astro          Composición de la página (única ruta)
├── layouts/BaseLayout.astro   <head>, metadatos, fuentes, JSON-LD
├── components/
│   ├── Hero.astro             Cabecera: título, pegatina, glitch, tagline
│   ├── CollageDecor.astro     Recortes SVG (ojo de semitono y copa)
│   ├── RansomHeadline.astro   Slogan del póster con letras recortadas
│   ├── Ticker.astro           Banda rosa animada infinita
│   ├── SectionHeading.astro   Etiqueta "// 0X — …" + título
│   ├── LinksSection.astro     Bloque 01 · enlaces
│   ├── FlyerLink.astro        Un enlace tipo flyer
│   ├── ShowsSection.astro     Bloque 02 · gira (+ filtro de fechas)
│   ├── ShowTicket.astro       Un talón de entrada perforado
│   ├── BookingSection.astro   Bloque 03 · contratación y prensa
│   ├── SiteFooter.astro       Pie con el copyright
│   └── Icon.astro             Iconos SVG desde un mapa
├── data/
│   ├── site.ts                Nombre, textos, ticker, email, slogan
│   ├── links.ts               Enlaces (etiqueta, subtítulo, url, icono)
│   └── shows.ts               Fechas de la gira
├── lib/
│   ├── dates.ts               Fechas en español y filtro de próximas
│   ├── icons.ts               Set de iconos SVG
│   └── seo.ts                 Datos estructurados schema.org
└── styles/global.css          Tokens de color y tipografía, base, animaciones
```

## Dónde se cambia cada cosa

- **Textos y metadatos** → `src/data/site.ts`
- **Enlaces del hub** → `src/data/links.ts` (`icon` acepta: `play`, `spotify`, `apple`,
  `youtube`, `instagram`, `tiktok`, `bag`, `mail`, `ticket`, `link`)
- **Conciertos** → `src/data/shows.ts`, en formato `YYYY-MM-DD`. Cada fecha puede llevar
  `tickets` (URL), `soldOut: true` o `free: true`. Con `tickets: null` muestra "PRONTO".
- **Colores y tipografía** → variables CSS en `src/styles/global.css`

Las fechas ya pasadas se ocultan en el build y también al cargar la página, así que el sitio
no se queda con conciertos viejos aunque tarde en recompilarse.

## Despliegue

Es un sitio estático: se sube `dist/` a cualquier hosting.

Para GitHub Pages en la ruta del repositorio (`https://usuario.github.io/zarison-banda/`)
el build necesita el prefijo de carpeta:

```bash
BASE_PATH=/zarison-banda npm run build
```

Después, en *Settings → Pages*, publica la rama `gh-pages` o el directorio `/docs`.
En un dominio propio o en la raíz del dominio, `npm run build` sin variables es suficiente.

## Notas

- Todos los enlaces a plataformas (`spotify.com`, `youtube.com`, `instagram.com`, `tiktok.com`)
  y las entradas (`entradas.ejemplo.com`) son **de ejemplo**: sustitúyelos por los reales.
- El email de contratación también es un placeholder.
- El proyecto original de una sola pieza se conservó solo como referencia de diseño; este
  repositorio es la versión mantenible.
