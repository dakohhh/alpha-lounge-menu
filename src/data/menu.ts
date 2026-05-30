import rawMenu from "../../alpha_restaurant_menu.json";
import type { MenuSectionData } from "../types/menu";

interface RawPrice {
  label: string;
  amount: number;
}

interface RawItem {
  ref?: number | null;
  name: string;
  description?: string | null;
  tags?: string[];
  prices: RawPrice[];
}

interface RawSection {
  id: string;
  name: string;
  category?: string;
  note?: string | null;
  serving_options?: unknown;
  price_labels?: string[];
  items: RawItem[];
}

interface RawMenu {
  restaurant: string;
  currency: string;
  currency_symbol: string;
  sections: RawSection[];
}

const data = rawMenu as RawMenu;

/** Display title, short nav label, and script kicker per section id. */
const SECTION_META: Record<string, { title: string; navLabel: string; kicker: string }> = {
  starters: { title: "Starters", navLabel: "Starters", kicker: "To begin" },
  alpha_speciality_dishes: {
    title: "Alpha Speciality Dishes",
    navLabel: "Speciality",
    kicker: "House specialities",
  },
  main_dishes: { title: "Main Dishes", navLabel: "Mains", kicker: "The full plate" },
  african_soup: { title: "African Soup", navLabel: "Soups", kicker: "From the homeland" },
  alpha_finger_dips: {
    title: "Alpha Finger Dips",
    navLabel: "Finger Dips",
    kicker: "Light bites",
  },
  side_dishes: { title: "Side Dishes", navLabel: "Sides", kicker: "Add a little more" },
  salads: { title: "Salads", navLabel: "Salads", kicker: "Fresh & cold" },
  rice: { title: "Rice", navLabel: "Rice", kicker: "Grains & pairings" },
  extras: { title: "Extras", navLabel: "Extras", kicker: "A little extra" },
  desserts: { title: "Desserts", navLabel: "Desserts", kicker: "A sweet finish" },
  champagne_sparkling: {
    title: "Champagne & Sparkling",
    navLabel: "Champagne",
    kicker: "Pop the cork",
  },
  rose_wine: { title: "Rosé Wine", navLabel: "Rosé", kicker: "By bottle or glass" },
  white_wine: { title: "White Wine", navLabel: "White Wine", kicker: "By bottle or glass" },
  red_wine: { title: "Red Wine", navLabel: "Red Wine", kicker: "By bottle or glass" },
  aperitifs: { title: "Aperitifs", navLabel: "Aperitifs", kicker: "Before the meal" },
  mocktails: { title: "Mocktails", navLabel: "Mocktails", kicker: "Zero proof" },
  cocktails: { title: "Cocktails", navLabel: "Cocktails", kicker: "House-shaken" },
  whisky: { title: "Whisky", navLabel: "Whisky", kicker: "Single malts & more" },
  vodka_gin_rum: { title: "Vodka, Gin & Rum", navLabel: "Spirits", kicker: "The spirit shelf" },
  brandy_cognac: { title: "Brandy & Cognac", navLabel: "Cognac", kicker: "Aged & smooth" },
  port_sherry: { title: "Port & Sherry", navLabel: "Port", kicker: "Fortified" },
  beers: { title: "Beers", navLabel: "Beers", kicker: "Draught & bottled" },
  soft_drinks: { title: "Soft Drinks", navLabel: "Soft Drinks", kicker: "Non-alcoholic" },
};

/**
 * Some source notes are internal annotations (e.g. "Source PDF lists…") that
 * shouldn't be shown to guests. Override or drop (null) those here; sections
 * not listed fall back to the source note.
 */
const NOTE_OVERRIDES: Record<string, string | null> = {
  rice: "Add 1 chicken or 2 beef, or keep it plain.",
  aperitifs: null,
  vodka_gin_rum: "Add a mixer to any spirit for £3.",
  port_sherry: "Served by the glass (50ml).",
  soft_drinks: null,
};

const titleCase = (s: string) =>
  s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

export const ALPHA_MENU: MenuSectionData[] = data.sections.map((section) => {
  const meta = SECTION_META[section.id];
  const note =
    section.id in NOTE_OVERRIDES
      ? NOTE_OVERRIDES[section.id] ?? undefined
      : section.note ?? undefined;

  return {
    id: section.id,
    title: meta?.title ?? titleCase(section.name),
    navLabel: meta?.navLabel ?? titleCase(section.name),
    kicker: meta?.kicker ?? "",
    note,
    category: section.category,
    items: section.items.map((it) => ({
      name: it.name,
      description: it.description ?? undefined,
      tags: it.tags,
      prices: it.prices,
    })),
  };
});

export const CURRENCY_SYMBOL = data.currency_symbol;
