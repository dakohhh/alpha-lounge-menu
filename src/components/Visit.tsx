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
            Tuesday through Sunday, kitchen from 5pm until late.
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
                Tue&ndash;Thu&nbsp;&nbsp;5pm – 11pm
                <br />
                Fri&ndash;Sat&nbsp;&nbsp;&nbsp;5pm – late
                <br />
                Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1pm – 10pm
                <br />
                Mon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed
              </dd>
            </div>
          </dl>
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
