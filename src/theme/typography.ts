export interface TypePair {
  label: string;
  display: string;
  body: string;
  script: string;
  displayWeight: number;
  displayLetter: string;
}

export const TYPE_PAIRS = {
  cormorant: {
    label: "Cormorant + Outfit",
    display: '"Cormorant Garamond", "Cormorant", serif',
    body: '"Outfit", system-ui, sans-serif',
    script: '"Italianno", cursive',
    displayWeight: 500,
    displayLetter: "-0.01em",
  },
  playfair: {
    label: "Playfair + Manrope",
    display: '"Playfair Display", serif',
    body: '"Manrope", system-ui, sans-serif',
    script: '"Italianno", cursive',
    displayWeight: 500,
    displayLetter: "-0.02em",
  },
  italiana: {
    label: "Italiana + Outfit",
    display: '"Italiana", serif',
    body: '"Outfit", system-ui, sans-serif',
    script: '"Italianno", cursive',
    displayWeight: 400,
    displayLetter: "0.01em",
  },
} as const satisfies Record<string, TypePair>;

export type TypePairKey = keyof typeof TYPE_PAIRS;
