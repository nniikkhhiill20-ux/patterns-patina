// ============================================================================
// The manifesto — VERBATIM from the brand manual (section 01) and
// manifesto-artwork.png. Do not reword a syllable of this.
// Structured only so the About page can set the italic and gold-marked rhythm.
// ============================================================================

export const manifesto = {
  openingItalic: 'A celebration of furniture with character.',
  // Paragraphs separated by gold • marks. Each paragraph keeps its own line breaks.
  paragraphs: [
    {
      italicLead: null as string | null,
      lines: [
        'We begin with pattern — with colour, texture and the unexpected.',
        'With the way a surface can transform a familiar shape,',
        'shift its mood and make us see it differently.',
      ],
    },
    {
      italicLead: null,
      lines: [
        'We are drawn to classic forms — graceful silhouettes,',
        'sculptural curves and proportions that have endured through time.',
        'Forms with a quiet sense of elegance, ready to be interpreted anew.',
      ],
    },
    {
      italicLead: 'From there, we make.',
      lines: [
        'Each piece is made afresh in Nairobi, from real wood',
        'and by experienced hands. We favour slower,',
        'time-honoured ways of working — shaping, carving',
        'and finishing by hand, giving each detail the time and attention it deserves.',
      ],
    },
    {
      italicLead: null,
      lines: [
        'There is something beautiful about making this way.',
        'The grain follows its own path. The hand leaves its quiet trace.',
        'Small variations are embraced rather than erased.',
      ],
    },
  ],
  // The two-line italic climax.
  climaxItalic: [
    'Nothing is rushed. Nothing is quite identical.',
    'Each piece carries a little of the wood,',
    'and a little of the hands that made it.',
  ],
  afterClimax: [
    'And with time, use and love, these details deepen.',
    'Surfaces soften. Materials gather character.',
    'A piece begins to carry its own story.',
  ],
  patinaItalic: 'That is patina.',
  patinaSub: 'The beauty of something becoming more itself with time.',
  signature: 'Rooted in tradition. Made by hand. Reimagined through pattern.',
  est: '— EST 2026 —',
};
