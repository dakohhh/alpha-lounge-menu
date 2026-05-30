export function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="visit-grid">
        <div className="visit-col">
          <div className="visit-kicker">— Find us —</div>
          <h3 className="visit-h">
            Come for a plate.
            <br />
            Stay for the bar.
          </h3>
          <p className="visit-blurb">
            First Floor, 100&ndash;104 Lewisham High Street, London <strong>SE13 5JH</strong>.
            Open seven days a week from 3pm until late.
          </p>
          <a
            className="visit-cta"
            href="https://maps.google.com/?q=100-104+Lewisham+High+Street+SE13+5JH"
            target="_blank"
            rel="noreferrer"
          >
            Open in maps →
          </a>
        </div>

        <div className="visit-col visit-details">
          <dl className="visit-dl">
            <div>
              <dt>Phone</dt>
              <dd>
                <a href="tel:+442083182222">+44 208 318 2222</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:info@alphaloungebar.com">info@alphaloungebar.com</a>
              </dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>First Floor, 100&ndash;104 Lewisham High Street, London SE13 5JH</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>
                Mon&ndash;Wed&nbsp;&nbsp;3pm – 2am
                <br />
                Thu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3pm – 4am
                <br />
                Fri&ndash;Sat&nbsp;&nbsp;&nbsp;3pm – 5am
                <br />
                Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3pm – 3am
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="visit-social">
        <span className="visit-social-label">Follow us</span>
        <div className="visit-social-links">
          <a
            href="https://www.instagram.com/alphaloungebar"
            target="_blank"
            rel="noreferrer"
            aria-label="Alpha Lounge on Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@alphaloungebar"
            target="_blank"
            rel="noreferrer"
            aria-label="Alpha Lounge on TikTok"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M14 3.5c.3 2 1.6 3.7 3.9 4v2.5c-1.4 0-2.8-.4-3.9-1.2v5.6a4.9 4.9 0 1 1-4.9-4.9c.3 0 .6 0 .9.1v2.6a2.4 2.4 0 1 0 1.7 2.3V3.5H14z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-mark">
        <span className="fm-line" />
        <span className="fm-script">Alpha</span>
        <span className="fm-line" />
      </div>
      <div className="footer-fine">
        © {new Date().getFullYear()} Alpha Lounge Bar &amp; Restaurant · Lewisham, London ·
        Prices in £ GBP, inclusive of VAT · A discretionary 12.5% service may be added for tables
        of 6+
      </div>
    </section>
  );
}
