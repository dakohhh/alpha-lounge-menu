import type { MenuItemData } from "../types/menu";

interface MenuItemProps {
  item: MenuItemData;
  currency: string;
}

export function MenuItem({ item, currency }: MenuItemProps) {
  const priceLabel =
    typeof item.price === "number" ? `${currency}${item.price}` : `${item.price}`;

  return (
    <li className="item">
      <div className="item-text">
        <div className="item-name">
          {item.name}
          {item.badge && <span className="item-badge">{item.badge}</span>}
        </div>
        {item.variant && <div className="item-variant">{item.variant}</div>}
      </div>
      <div className="item-leader" aria-hidden="true" />
      <div className="item-price">{priceLabel}</div>
    </li>
  );
}
