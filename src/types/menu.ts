export interface MenuPrice {
  /** Raw price label from the source data, e.g. "standard", "bottle", "shot", "With Rice" */
  label: string;
  amount: number;
}

export interface MenuItemData {
  name: string;
  description?: string;
  tags?: string[];
  prices: MenuPrice[];
}

export interface MenuSectionData {
  id: string;
  title: string;
  /** Shorter label for the sticky nav (defaults to title) */
  navLabel?: string;
  kicker: string;
  note?: string;
  /** "drinks" for bar sections, otherwise undefined for food */
  category?: string;
  items: MenuItemData[];
}
