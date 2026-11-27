import { links } from '../data/links';
import { shows } from '../data/shows';
import { site } from '../data/site';

/** Solo enlaces externos, para `sameAs` del grupo musical. */
const socialProfiles = links
  .map((link) => link.url)
  .filter((url) => url.startsWith('http'));

/** Datos estructurados schema.org del hub (grupo musical + fechas). */
export function buildJsonLd(siteUrl: string) {
  const ics = shows.map((show) => ({
    '@type': 'MusicEvent',
    name: `${site.name} en ${show.city}`,
    startDate: show.date,
    eventStatus: show.stamp
      ? 'https://schema.org/EventSoldOut'
      : 'https://schema.org/EventScheduled',
    location: {
      '@type': 'MusicVenue',
      name: show.venue,
      address: { '@type': 'PostalAddress', addressLocality: show.city },
    },
    performer: { '@type': 'MusicGroup', name: site.name },
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MusicGroup',
        name: site.name,
        url: siteUrl,
        email: site.email,
        description: site.tagline,
        album: { '@type': 'MusicAlbum', name: site.album, albumReleaseType: 'https://schema.org/AlbumRelease' },
        sameAs: socialProfiles,
      },
      ...ics,
    ],
  };
}
