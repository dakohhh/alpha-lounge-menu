export interface MenuItemData {
  name: string;
  price: number | string;
  variant?: string;
  badge?: string;
}

export interface MenuSectionData {
  id: string;
  title: string;
  /** Shorter label for the sticky nav (defaults to title) */
  navLabel?: string;
  kicker: string;
  note?: string;
  items: MenuItemData[];
}
