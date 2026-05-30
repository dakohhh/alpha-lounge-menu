import type { MenuItemData } from "../types/menu";

interface MenuItemProps {
  item: MenuItemData;
  currency: string;
}

/** Human-friendly text for multi-price labels. Generic labels render blank. */
const PRICE_LABELS: Record<string, string> = {
  bottle: "Bottle",
  shot: "Shot",
  glass: "Glass",
  glass_175ml: "Glass 175ml",
};

/** Tags that surface as a small pill next to the name. */
const TAG_BADGES: Record<string, string> = {
  spicy: "Spicy",
  vegetarian: "Veg",
};

function formatAmount(amount: number, currency: string) {
  return Number.isInteger(amount)
    ? `${currency}${amount}`
    : `${currency}${amount.toFixed(2)}`;
}

function priceLabelText(label: string) {
  if (label === "standard" || label === "unspecified") return "";
  return PRICE_LABELS[label] ?? label;
}

export function MenuItem({ item, currency }: MenuItemProps) {
  const badge = item.tags?.map((t) => TAG_BADGES[t]).find(Boolean);
  const singlePrice = item.prices.length === 1;

  return (
    <li className="item">
      <div className="item-text">
        <div className="item-name">
          {item.name}
          {badge && <span className="item-badge">{badge}</span>}
        </div>
        {item.description && <div className="item-desc">{item.description}</div>}
      </div>
      <div className="item-leader" aria-hidden="true" />
      <div className="item-prices">
        {item.prices.map((p, i) => {
          const label = singlePrice ? "" : priceLabelText(p.label);
          return (
            <span className="item-price-row" key={i}>
              {label && <span className="item-price-label">{label}</span>}
              <span className="item-price">{formatAmount(p.amount, currency)}</span>
            </span>
          );
        })}
      </div>
    </li>
  );
}
