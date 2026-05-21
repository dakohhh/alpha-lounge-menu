export interface Palette {
  label: string;
  bg: string;
  bg2: string;
  bg3: string;
  ink: string;
  inkMute: string;
  inkDim: string;
  accent: string;
  accentSoft: string;
  deep: string;
  line: string;
  lineStrong: string;
}

export const PALETTES = {
  midnight: {
    label: "Midnight Lounge",
    bg: "#0E0B08",
    bg2: "#15110C",
    bg3: "#1C1610",
    ink: "#F4ECDD",
    inkMute: "#A89A82",
    inkDim: "#6B6253",
    accent: "#C9A24B",
    accentSoft: "#E4C57B",
    deep: "#7A1F1F",
    line: "rgba(244,236,221,0.12)",
    lineStrong: "rgba(244,236,221,0.25)",
  },
  oxblood: {
    label: "Oxblood & Brass",
    bg: "#100808",
    bg2: "#1A0E0E",
    bg3: "#221213",
    ink: "#F2E6D6",
    inkMute: "#B49E86",
    inkDim: "#7A6857",
    accent: "#D4AF6A",
    accentSoft: "#EAD09A",
    deep: "#5C1414",
    line: "rgba(242,230,214,0.12)",
    lineStrong: "rgba(242,230,214,0.25)",
  },
  forest: {
    label: "Deep Forest",
    bg: "#0B100D",
    bg2: "#101814",
    bg3: "#162019",
    ink: "#EFE8D8",
    inkMute: "#9DAA98",
    inkDim: "#5E6D60",
    accent: "#C9A24B",
    accentSoft: "#E4C57B",
    deep: "#7A1F1F",
    line: "rgba(239,232,216,0.12)",
    lineStrong: "rgba(239,232,216,0.25)",
  },
  cream: {
    label: "Warm Cream",
    bg: "#F4ECDD",
    bg2: "#EBE1CC",
    bg3: "#E1D5BB",
    ink: "#1A1410",
    inkMute: "#5A4F40",
    inkDim: "#8B7E6B",
    accent: "#7A1F1F",
    accentSoft: "#9E2828",
    deep: "#C9A24B",
    line: "rgba(26,20,16,0.16)",
    lineStrong: "rgba(26,20,16,0.32)",
  },
} as const satisfies Record<string, Palette>;

export type PaletteKey = keyof typeof PALETTES;
