import { Ornament } from "./Ornament";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-frame">
        <div className="hero-meta hero-meta-tl">
          <span className="dot" />
          Est. Lewisham · SE13
        </div>

        <div className="hero-eyebrow">
          <span>—</span> A Nigerian table in South East London <span>—</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-row">Alpha</span>
          <span className="hero-title-script">Lounge</span>
          <span className="hero-title-row">Bar &amp; Restaurant</span>
        </h1>

        <div className="hero-strap">
          <Ornament />
          <p>
            Slow-simmered soups, charcoal suya, and a long bar.
            <br />
            Cooked the way home cooks it — only louder.
          </p>
          <Ornament />
        </div>

        <div className="hero-meta hero-meta-bl">Open Tue&nbsp;–&nbsp;Sun · From 5pm</div>
        <div className="hero-meta hero-meta-br">+44 208 318 2222</div>
      </div>

      <a href="#menu-top" className="hero-cta" aria-label="View the menu">
        <span>Read the menu</span>
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path
            d="M7 1v12M2 8l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </header>
  );
}
