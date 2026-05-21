import type { MenuSectionData } from "../types/menu";

interface CategoryNavProps {
  sections: MenuSectionData[];
  active: string;
  onPick: (id: string) => void;
}

export function CategoryNav({ sections, active, onPick }: CategoryNavProps) {
  return (
    <nav className="catnav" aria-label="Menu sections">
      <div className="catnav-inner">
        <div className="catnav-brand" aria-label="Alpha Lounge">
          <span className="catnav-mark">A</span>
        </div>
        <ol className="catnav-list">
          <li>
            <button
              type="button"
              className={"catnav-link" + (active === "all" ? " is-active" : "")}
              onClick={() => onPick("all")}
            >
              <span className="catnav-num">—</span>
              <span className="catnav-label">All</span>
            </button>
          </li>
          {sections.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                className={"catnav-link" + (active === s.id ? " is-active" : "")}
                onClick={() => onPick(s.id)}
              >
                <span className="catnav-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="catnav-label">{s.navLabel ?? s.title}</span>
              </button>
            </li>
          ))}
        </ol>
        <a className="catnav-tel" href="tel:+442083182222">
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path
              d="M2 2.5a.5.5 0 0 1 .5-.5h1.5l1 2.5-1.2.8a6 6 0 0 0 3 3l.8-1.2 2.5 1V9.5a.5.5 0 0 1-.5.5C5.5 10 2 6.5 2 2.5z"
              fill="currentColor"
            />
          </svg>
          Reserve
        </a>
      </div>
    </nav>
  );
}
