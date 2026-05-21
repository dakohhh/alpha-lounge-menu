import { useEffect, useMemo, useState } from "react";
import { ALPHA_MENU } from "./data/menu";
import { CategoryNav } from "./components/CategoryNav";
import { Hero } from "./components/Hero";
import { MenuSection } from "./components/MenuSection";
import { DisclaimerModal } from "./components/DisclaimerModal";
import { Visit } from "./components/Visit";
import { applyTheme } from "./theme/applyTheme";
import { CURRENCY, DENSITY, MENU_COLUMNS, SHOW_ORNAMENTS } from "./theme/config";
import { PALETTES } from "./theme/palettes";
import { TYPE_PAIRS } from "./theme/typography";

const palette = PALETTES.midnight;
const type = TYPE_PAIRS.cormorant;

export default function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  useEffect(() => {
    applyTheme(palette, type);
    document.body.dataset.density = DENSITY;
    document.body.dataset.ornaments = SHOW_ORNAMENTS ? "on" : "off";
  }, []);

  const [active, setActive] = useState("all");

  function pick(id: string) {
    setActive(id);
    const targetId = id === "all" ? "menu-top" : id;
    const target = document.getElementById(targetId);
    if (target) {
      const navH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--catnav-h"), 10) ||
        60;
      const y = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  const visibleSections = useMemo(() => {
    if (active === "all") return ALPHA_MENU;
    return ALPHA_MENU.filter((s) => s.id === active);
  }, [active]);

  const indexOf = useMemo(() => {
    const map: Record<string, number> = {};
    ALPHA_MENU.forEach((s, i) => {
      map[s.id] = i + 1;
    });
    return map;
  }, []);

  const activeSection = ALPHA_MENU.find((s) => s.id === active);

  if (!disclaimerAccepted) {
    return <DisclaimerModal onAccept={() => setDisclaimerAccepted(true)} />;
  }

  return (
    <div className="page">
      <Hero />
      <CategoryNav sections={ALPHA_MENU} active={active} onPick={pick} />

      <main className="menu" id="menu-top">
        <div className="menu-intro">
          <div className="menu-intro-kicker">
            {active === "all"
              ? "— The Menu —"
              : `— Showing · ${activeSection?.title} —`}
          </div>
          <h2 className="menu-intro-title">
            {active === "all" ? (
              <>
                From the pot, the grill, <span className="script">&amp;</span> the bar
              </>
            ) : (
              <>{activeSection?.title}</>
            )}
          </h2>
          <p className="menu-intro-blurb">
            {active === "all" ? (
              <>
                Our kitchen leans on the cooking we grew up with — Igbo, Yoruba, Edo, Calabar —
                written down here exactly as the chef calls it. Pounded yam, eba, amala or fufu
                included with every soup. Most dishes can be made with assorted meat or fish; ask
                your server for tonight&apos;s catch.
              </>
            ) : (
              <>
                {activeSection?.note ||
                  "Use the nav above to jump between sections, or view the full menu."}
              </>
            )}
          </p>
          {active !== "all" && (
            <button type="button" className="viewall-link" onClick={() => pick("all")}>
              ← View the full menu
            </button>
          )}
        </div>

        <div className="menu-stack" key={active}>
          {visibleSections.map((s) => (
            <MenuSection
              key={s.id}
              section={s}
              number={indexOf[s.id]}
              columns={MENU_COLUMNS}
              currency={CURRENCY}
              showHead={active === "all"}
            />
          ))}
        </div>
      </main>

      <Visit />
    </div>
  );
}
