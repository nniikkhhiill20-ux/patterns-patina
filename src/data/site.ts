// Global site chrome content.
export const site = {
  name: 'Patterns + Patina',
  tagline: 'Rooted in tradition. Made by hand. Reimagined through pattern.',
  promise: 'A celebration of furniture with character.',
  description:
    'Classic furniture forms, made afresh in Nairobi from real wood and by hand, dressed in bold pattern. One-of-a-kind pieces, available for private viewing in Nairobi.',
  est: 'EST. 2026',
  author: 'by Mugdha',
  whatsappDisplay: '+254 769 154 883',
  whatsappNumber: '254769154883',
  instagramHandle: '@patterns_patina',
  instagramUrl: 'https://instagram.com/patterns_patina',
};

// wa.me link, optionally with a prefilled message (e.g. the piece name).
export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// Header nav — Journal is phase 2 but named in the handoff nav.
export const navLinks = [
  { label: 'Capsules', href: '/capsules' },
  { label: 'Pieces', href: '/capsules/elsewhere#pieces' },
  { label: 'Commissions', href: '/commissions' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/about#journal' },
];

export const footerExplore = [
  { label: 'Capsules', href: '/capsules' },
  { label: 'Commissions', href: '/commissions' },
  { label: 'Care & repair', href: '/about#care' },
  { label: 'Journal', href: '/about#journal' },
];
