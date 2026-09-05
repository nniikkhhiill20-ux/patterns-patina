// ============================================================================
// Patterns + Patina — content model
// Content-driven, static. Capsules and pieces are defined here; images are
// imported so Astro's build-time pipeline emits optimised WebP.
// Voice rules: name the form, the wood, the pattern and the hands. No
// superlatives, no "luxury", no exclamation marks. Say "made afresh", "pattern".
// ============================================================================

import type { ImageMetadata } from 'astro';

import armchairLakeside from '../assets/photography/armchair-ikat-lakeside.png';
import wingbackOrchard from '../assets/photography/wingback-floral-orchard.png';
import ottomanForest from '../assets/photography/ottoman-ikat-forest.png';
import setteeGarden from '../assets/photography/settee-ikat-garden.png';
import salonOak from '../assets/photography/salon-chairs-pair-oak.png';
import elsewhereCover from '../assets/photography/capsule-cover-elsewhere.png';

export interface PieceImage {
  src: ImageMetadata;
  alt: string;
}

export interface Piece {
  slug: string;
  name: string;
  capsule: string; // capsule slug
  form: string;
  timber: string;
  pattern: string;
  dimensions: string;
  finish: string;
  madeIn: string;
  leadTimeWeeks: number;
  price: string;
  spec: string; // short mono spec line, e.g. "CARVED HARDWOOD · IKAT"
  description: string[];
  hero: PieceImage;
  // Further gallery frames. Where photography is still to be sourced we render a
  // labelled placeholder rather than substituting stock.
  gallery: Array<PieceImage | { placeholder: string }>;
}

export interface Capsule {
  slug: string;
  name: string;
  number: string; // e.g. "CAPSULE 006"
  cover: ImageMetadata;
  coverAlt: string;
  description: string; // one sentence
  story: string[];
  order: number; // higher = newer
}

export const capsules: Capsule[] = [
  {
    slug: 'elsewhere',
    name: 'Elsewhere',
    number: 'CAPSULE 006',
    cover: elsewhereCover,
    coverAlt: 'A lone tree on a cliff top above open water, the Elsewhere capsule cover.',
    description:
      'Pieces made to be carried somewhere quieter — pattern held against open land and low sky.',
    story: [
      'Elsewhere began with a single question: where would each piece rather be? Not a showroom, not a set. Somewhere with weather in it.',
      'So we made the capsule for the edges of things. A lakeside. A forest floor. A green bank after rain. Each frame cut from real wood, each surface dressed in ikat and tapestry that hold their colour against a muted field.',
      'Nothing here is rushed and nothing is quite identical. The grain follows its own path; the hand leaves its quiet trace. What you choose is made afresh, for one house, with the pattern and the timber settled between us.',
    ],
    order: 6,
  },
  {
    slug: 'orchard-light',
    name: 'Orchard Light',
    number: 'CAPSULE 005',
    cover: wingbackOrchard,
    coverAlt: 'A red floral wingback chair with a folded throw, standing in an orchard.',
    description:
      'Deeper florals and toile, drawn from long afternoons under fruit trees.',
    story: [
      'Orchard Light is the warmer half of the year, set down in furniture. Floral tapestry and toile, carried on classic silhouettes that have endured through time.',
      'We favour slower, time-honoured ways of working — shaping, carving and finishing by hand — so each detail is given the time it deserves. Small variations are embraced rather than erased.',
    ],
    order: 5,
  },
];

export const pieces: Piece[] = [
  {
    slug: 'lakeside-armchair',
    name: 'Lakeside Armchair',
    capsule: 'elsewhere',
    form: 'Armchair',
    timber: 'White-finished hardwood',
    pattern: 'Ikat, indigo and rust',
    dimensions: 'W 74 · D 82 · H 88 cm',
    finish: 'Hand-rubbed matte, water-based',
    madeIn: 'Nairobi',
    leadTimeWeeks: 10,
    price: 'On request',
    spec: 'WHITE-FRAME HARDWOOD · IKAT',
    description: [
      'A classic wingback armchair, its frame carved and joined afresh in real wood and finished the pale colour of driftwood. The ikat is woven so the pattern shifts slightly across the seat, never quite repeating.',
      'Made to order over roughly ten weeks. The timber and the weave can be chosen with you, so the piece settles into your rooms rather than ours.',
    ],
    hero: { src: armchairLakeside, alt: 'White-frame ikat armchair beside a lake with autumn hills behind.' },
    gallery: [
      { placeholder: 'Detail — the carved arm' },
      { placeholder: 'Detail — the ikat weave' },
      { placeholder: 'In situ' },
    ],
  },
  {
    slug: 'forest-ottoman',
    name: 'Forest Ottoman',
    capsule: 'elsewhere',
    form: 'Buttoned ottoman',
    timber: 'Carved hardwood, dark wax',
    pattern: 'Ikat, navy and red',
    dimensions: 'W 68 · D 68 · H 42 cm',
    finish: 'Hand-buttoned, waxed feet',
    madeIn: 'Nairobi',
    leadTimeWeeks: 9,
    price: 'On request',
    spec: 'CARVED HARDWOOD · IKAT',
    description: [
      'A deep buttoned ottoman on turned hardwood feet. Each button is drawn by hand, so the surface pulls into a quiet, irregular grid that softens with use.',
      'Sized here for the foot of a chair or the middle of a room. Dimensions can be adjusted with you before making begins.',
    ],
    hero: { src: ottomanForest, alt: 'Navy and red ikat buttoned ottoman on a pine forest floor.' },
    gallery: [
      { placeholder: 'Detail — hand buttoning' },
      { placeholder: 'Detail — turned foot' },
    ],
  },
  {
    slug: 'garden-settee',
    name: 'Garden Settee',
    capsule: 'elsewhere',
    form: 'Two-seat settee',
    timber: 'Cream-finished hardwood',
    pattern: 'Ikat, soft ochre',
    dimensions: 'W 148 · D 84 · H 90 cm',
    finish: 'Hand-rubbed matte',
    madeIn: 'Nairobi',
    leadTimeWeeks: 12,
    price: 'On request',
    spec: 'CREAM-FRAME HARDWOOD · IKAT',
    description: [
      'A two-seat settee on a cream-finished frame, its back and arms carved to a low, easy line. The ikat is matched across the two cushions by hand.',
      'The most involved piece in Elsewhere, and the slowest — around twelve weeks from the first drawing.',
    ],
    hero: { src: setteeGarden, alt: 'Cream-frame ikat settee on a green bank in a garden.' },
    gallery: [
      { placeholder: 'Detail — matched cushions' },
      { placeholder: 'Detail — carved arm' },
      { placeholder: 'In situ' },
    ],
  },
  {
    slug: 'orchard-wingback',
    name: 'Orchard Wingback',
    capsule: 'orchard-light',
    form: 'Wingback chair',
    timber: 'Carved hardwood, honey wax',
    pattern: 'Floral tapestry, red ground',
    dimensions: 'W 78 · D 86 · H 104 cm',
    finish: 'Hand-carved wings, waxed',
    madeIn: 'Nairobi',
    leadTimeWeeks: 11,
    price: 'On request',
    spec: 'CARVED HARDWOOD · FLORAL TAPESTRY',
    description: [
      'A tall wingback in floral tapestry on a red ground, carried on a honey-waxed hardwood frame carved by hand. The wings are shaped for reading light and quiet.',
      'Shown with a folded throw; the throw is not part of the piece. Pattern and timber are chosen with you.',
    ],
    hero: { src: wingbackOrchard, alt: 'Red floral wingback chair with a folded throw, standing in an orchard.' },
    gallery: [
      { placeholder: 'Detail — the carved wing' },
      { placeholder: 'Detail — the tapestry' },
      { placeholder: 'Back view' },
    ],
  },
  {
    slug: 'oak-salon-chairs',
    name: 'Oak Salon Chairs',
    capsule: 'orchard-light',
    form: 'Pair of salon chairs',
    timber: 'Solid oak',
    pattern: 'Toile, olive on cream',
    dimensions: 'each W 52 · D 56 · H 92 cm',
    finish: 'Oiled oak, hand-finished',
    madeIn: 'Nairobi',
    leadTimeWeeks: 10,
    price: 'On request',
    spec: 'SOLID OAK · TOILE',
    description: [
      'A pair of salon chairs in solid oak, dressed in an olive toile. Made and finished together so the grain and the pattern read as one set.',
      'Sold as a pair. A single chair, or a longer run, can be commissioned to the same drawing.',
    ],
    hero: { src: salonOak, alt: 'A pair of toile salon chairs beside a tree at dusk.' },
    gallery: [
      { placeholder: 'Detail — the oak joint' },
      { placeholder: 'Detail — the toile' },
    ],
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
  ['orchard-wingback', 'forest-ottoman', 'garden-settee']
    .map((s) => pieceBySlug(s))
    .filter((p): p is Piece => Boolean(p));
