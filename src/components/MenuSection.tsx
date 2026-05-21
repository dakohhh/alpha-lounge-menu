import type { CSSProperties } from "react";
import type { MenuSectionData } from "../types/menu";
import { MenuItem } from "./MenuItem";

interface MenuSectionProps {
  section: MenuSectionData;
  number: number;
  columns: number;
  currency: string;
  showHead?: boolean;
}

export function MenuSection({
  section,
  number,
  columns,
  currency,
  showHead = true,
}: MenuSectionProps) {
  return (
    <section id={section.id} className="section" data-section-id={section.id}>
      {showHead && (
        <div className="section-head">
          <div className="section-num">{String(number).padStart(2, "0")}</div>
          <div className="section-titles">
            <div className="section-kicker">{section.kicker}</div>
            <h2 className="section-title">{section.title}</h2>
          </div>
          <div className="section-rule" />
        </div>
      )}

      {section.note && showHead && <p className="section-note">{section.note}</p>}

      <ul className="items" style={{ "--cols": columns } as CSSProperties}>
        {section.items.map((it, i) => (
          <MenuItem key={i} item={it} currency={currency} />
        ))}
      </ul>
    </section>
  );
}
