// ============================================================================
// Patterns + Patina — content model
// Content-driven, static. Capsules and pieces are defined here; images are
// imported so Astro's build-time pipeline emits optimised WebP.
// Source of truth: "Elsewhere · Capsule 006" catalogue (with prices, final).
// Piece copy is VERBATIM from the catalogue — do not reword.
// ============================================================================

import type { ImageMetadata } from 'astro';

import elsewhereCover from '../assets/photography/elsewhere/cover-forest-road.jpg';
import yugen from '../assets/photography/elsewhere/01-yugen.jpg';
import akari from '../assets/photography/elsewhere/02-akari.jpg';
import folie from '../assets/photography/elsewhere/03-folie.jpg';
import miyabi from '../assets/photography/elsewhere/04-miyabi.jpg';
import arcadia from '../assets/photography/elsewhere/05-arcadia.jpg';
import rhythm from '../assets/photography/elsewhere/06-rhythm.jpg';
import muse from '../assets/photography/elsewhere/07-muse.jpg';
import rosee from '../assets/photography/elsewhere/08-rosee.jpg';
import reverie from '../assets/photography/elsewhere/09-reverie.jpg';
import atlas from '../assets/photography/elsewhere/10-atlas.jpg';
import paradox from '../assets/photography/elsewhere/11-paradox.jpg';

export interface PieceImage {
  src: ImageMetadata;
  alt: string;
}

export interface Piece {
  slug: string;
  number: string; // catalogue number, e.g. "01"
  name: string; // display name, as set in the catalogue (e.g. "YŪGEN")
  capsule: string; // capsule slug
  spec: string; // short mono descriptor, e.g. "IKAT · TUFTED FORM · GRAPHIC COLOUR"
  tagline: string; // italic line
  description: string[];
  price: string; // e.g. "KES 96,000"
  availability: string | null; // e.g. "1 piece available"
  notes: string[]; // e.g. "Built by hand in Nairobi."
  hero: PieceImage;
}

export interface Capsule {
  slug: string;
  name: string;
  number: string; // e.g. "CAPSULE 006"
  cover: ImageMetadata;
  coverAlt: string;
  coverTitled: boolean; // cover artwork already carries the capsule name
  description: string; // one sentence
  story: string[];
  closing: string[];
  order: number; // higher = newer
}

export const capsules: Capsule[] = [
  {
    slug: 'elsewhere',
    name: 'Elsewhere',
    number: 'CAPSULE 006',
    cover: elsewhereCover,
    coverAlt: 'A wet road winding between giant redwoods in the rain, the Elsewhere capsule cover.',
    coverTitled: true,
    description: 'A collection shaped by the feeling of wandering.',
    story: [
      'There is a place beyond the familiar. We call it Elsewhere.',
      'Ten pieces drawn from classic silhouettes, unexpected pattern and the romance of somewhere unknown. Each one handcrafted in Nairobi and ready to find its place.',
    ],
    closing: [
      'A finished collection of one-of-a-kind pieces.',
      'Available for private viewing in Nairobi.',
    ],
    order: 6,
  },
];

const nairobiMahogany = ['Built by hand in Nairobi.', 'Using Pure Mahogany.'];
const finishedNairobi = ['Finished piece.', 'Built by hand in Nairobi.'];

export const pieces: Piece[] = [
  {
    slug: 'yugen',
    number: '01',
    name: 'YŪGEN',
    capsule: 'elsewhere',
    spec: 'Japanese-inspired chinoiserie · Dark palette',
    tagline: 'A quiet sense of mystery.',
    description: [
      'A classic silhouette, reimagined through a Japanese-inspired landscape — rich in pattern, shadow and story.',
      'Somewhere between the known and the unknown.',
    ],
    price: 'KES 96,000',
    availability: '1 piece available',
    notes: nairobiMahogany,
    hero: { src: yugen, alt: 'Mahogany armchair in a dark chinoiserie landscape fabric, standing in a vineyard.' },
  },
  {
    slug: 'akari',
    number: '02',
    name: 'AKARI',
    capsule: 'elsewhere',
    spec: 'Japanese-inspired chinoiserie · Light palette',
    tagline: 'Where light finds another world.',
    description: [
      'A quiet garden, imagined between memory and imagination — warm light, intricate pattern and a familiar form transformed.',
      'A softer kind of mystery.',
    ],
    price: 'KES 96,000',
    availability: '1 piece available',
    notes: nairobiMahogany,
    hero: { src: akari, alt: 'Mahogany armchair in a light chinoiserie fabric under a tree in a sunlit garden, a teacup on the seat.' },
  },
  {
    slug: 'folie',
    number: '03',
    name: 'FOLIE',
    capsule: 'elsewhere',
    spec: 'French-inspired silhouette · Eclectic pattern',
    tagline: 'A classic, with a taste for the unexpected.',
    description: [
      'A Louis-era silhouette, reimagined through a riot of pattern and colour. Ornate lines meet bold geometry. Old-world elegance meets something altogether more irreverent.',
      'Tradition, with a little folly.',
    ],
    price: 'KES 200,000',
    availability: '1 piece available',
    notes: nairobiMahogany,
    hero: { src: folie, alt: 'Carved cream settee in a red and black ikat, on a green bank under trees.' },
  },
  {
    slug: 'miyabi',
    number: '04',
    name: 'MIYABI',
    capsule: 'elsewhere',
    spec: 'French silhouette · Chinoiserie · Gilded detail',
    tagline: 'A little theatre, beautifully framed.',
    description: [
      'Delicate Chinoiserie scenes unfold within a graceful French silhouette, finished with the faintest touch of gilding.',
      'Romantic without excess. Ornate, yet restrained.',
      'A study in quiet grandeur.',
    ],
    price: 'KES 75,000 / chair',
    availability: '6 chairs available',
    notes: nairobiMahogany,
    hero: { src: miyabi, alt: 'A pair of balloon-back mahogany chairs with chinoiserie backs, beneath a large tree at dusk.' },
  },
  {
    slug: 'arcadia',
    number: '05',
    name: 'ARCADIA',
    capsule: 'elsewhere',
    spec: 'French wingback · Birds · Blooms · Nature',
    tagline: 'For hours that belong to no one.',
    description: [
      'A high-backed silhouette, softened by birds, blooms and the warmth of colour.',
      'A place to retreat. To read. To linger. To lose the hour.',
      'An idyll, made tangible.',
    ],
    price: 'KES 165,000',
    availability: '1 piece available',
    notes: nairobiMahogany,
    hero: { src: arcadia, alt: 'Red floral wingback chair with a cream throw, standing in an autumn orchard.' },
  },
  {
    slug: 'rhythm',
    number: '06',
    name: 'RHYTHM',
    capsule: 'elsewhere',
    spec: 'Ikat · Tufted form · Graphic colour',
    tagline: 'Somewhere, the evening begins.',
    description: [
      'An ikat of deep colour and quiet geometry, its pattern moving like music across the surface.',
      'Generous in scale, impossible to overlook — a piece that brings a little ceremony to the room.',
      'For lingering conversations, late hours, and rooms that come alive.',
    ],
    price: 'KES 65,000',
    availability: '1 piece available',
    notes: finishedNairobi,
    hero: { src: rhythm, alt: 'Large tufted ottoman in a navy and red ikat, on a pine forest floor.' },
  },
  {
    slug: 'muse',
    number: '07',
    name: 'MUSE',
    capsule: 'elsewhere',
    spec: 'French-inspired silhouette · Eclectic pattern',
    tagline: 'A familiar silhouette, with a story from somewhere else.',
    description: [
      'French curves meet an unexpected pattern — rich with colour, character and the romance of another land.',
      'Old-world elegance, reimagined for elsewhere.',
    ],
    price: 'KES 92,000',
    availability: '2 pieces available',
    notes: nairobiMahogany,
    hero: { src: muse, alt: 'Carved white armchair in a red and green ikat beside a lake, under blossom.' },
  },
  {
    slug: 'rosee',
    number: '08',
    name: 'ROSÉE',
    capsule: 'elsewhere',
    spec: 'Sculptural mirror · Floral frame',
    tagline: 'A little spring, held in place.',
    description: [
      'A graceful mirror wrapped in delicate florals - soft colour, intricate pattern and the freshness of a garden just waking.',
      'Familiar in form, but imagined somewhere else.',
      'A quiet reminder that beauty can be light.',
    ],
    price: 'KES 28,000',
    availability: 'Finished piece',
    notes: finishedNairobi,
    hero: { src: rosee, alt: 'Sculptural mirror wrapped in a pink and red floral fabric, standing in a pine forest.' },
  },
  {
    slug: 'reverie',
    number: '09',
    name: 'RÊVERIE',
    capsule: 'elsewhere',
    spec: 'Patterned mirror · Ikat frame',
    tagline: 'Somewhere between memory and imagination.',
    description: [
      'A mirror wrapped in deep indigo, faded red and ivory - its pattern carrying the feeling of somewhere travelled, somewhere remembered, or perhaps somewhere only dreamed.',
      'Set among the trees, it feels almost discovered rather than placed.',
      'A reflection. A fragment of another place.',
    ],
    price: 'KES 28,000',
    availability: 'Finished piece',
    notes: finishedNairobi,
    hero: { src: reverie, alt: 'Mirror wrapped in an indigo, red and ivory ikat, leaning against a tree in woodland beside an old book.' },
  },
  {
    slug: 'atlas',
    number: '10',
    name: 'ATLAS',
    capsule: 'elsewhere',
    spec: 'Sculptural mirror · Graphic pattern',
    tagline: 'A study in rhythm and colour.',
    description: [
      'Deep indigo, faded red and ivory trace a graphic geometry across a sculptural arch - bold enough to command attention, restrained enough to endure.',
      'A little unexpected. A little irreverent.',
    ],
    price: 'KES 49,000',
    availability: 'Finished piece',
    notes: finishedNairobi,
    hero: { src: atlas, alt: 'Tall arched floor mirror in an indigo, red and ivory chevron weave, on a wooden stand in a grassy meadow.' },
  },
  {
    slug: 'paradox',
    number: '11',
    name: 'PARADOX',
    capsule: 'elsewhere',
    spec: 'French-inspired · Cane · Graphic geometry',
    tagline: 'Where old-world form meets a different rhythm.',
    description: [
      'A classic French silhouette, softened by cane and aged colour.',
      'Then comes the unexpected — a bold graphic geometry in black and ivory, bringing something sharper, stranger, more contemporary.',
      'A little tradition. A little contradiction. Beautifully at home in Elsewhere.',
    ],
    price: 'KES 165,000',
    availability: null,
    notes: ['Built by hand in Nairobi.'],
    hero: { src: paradox, alt: 'Cane-backed French wingback chair with a black and ivory geometric seat, in a meadow of daisies.' },
  },
];

// ---- helpers ----
export const capsulesNewestFirst = () =>
  [...capsules].sort((a, b) => b.order - a.order);

export const capsuleBySlug = (slug: string) =>
  capsules.find((c) => c.slug === slug);

export const piecesInCapsule = (slug: string) =>
  pieces.filter((p) => p.capsule === slug);

export const pieceBySlug = (slug: string) =>
  pieces.find((p) => p.slug === slug);

export const otherPiecesInCapsule = (capsuleSlug: string, exceptSlug: string) =>
  pieces.filter((p) => p.capsule === capsuleSlug && p.slug !== exceptSlug);

// Featured on the home page.
export const featuredPieces = () =>
  ['folie', 'arcadia', 'rhythm']
    .map((s) => pieceBySlug(s))
    .filter((p): p is Piece => Boolean(p));
