const nav = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Made-to-Measure", "#collections"],
  ["Private Client", "#private"],
  ["Book", "#contact"],
];

const collections = [
  ["Suits", "Light construction, natural shoulder, refined Napoli ease."],
  ["Jackets", "Soft tailoring for business, travel, dinner, and private appointments."],
  ["Overshirts", "Elegant utility pieces for relaxed luxury dressing."],
  ["Shirts", "Clean lines, fine cloth, and understated detail."],
  ["Trousers", "Fluid fit, proportion, and comfort for a complete wardrobe."],
  ["Knitwear", "Quiet texture, soft yarns, and year-round layering."],
];

export default function Home() {
  return (
    <main id="home">
      <nav className="nav">
        <div className="nav-left">
          {nav.slice(0, 3).map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <a className="brand" href="#home">AD LUX</a>
        <div className="nav-right">
          {nav.slice(3).map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="kicker">Napoli spirit · Toronto private house</div>
          <h1>Soft tailoring, quiet power.</h1>
          <p className="lede">
            Ad Lux brings a Napoli sensibility to Toronto: relaxed elegance, natural construction,
            refined cloth, and a private-client experience shaped by Ravello warmth and Mayfair discipline.
          </p>
          <div className="cta-row">
            <a className="button dark" href="mailto:info@adlux.club">Book Appointment</a>
            <a className="button" href="#collections">View Collection</a>
          </div>
        </div>
        <div className="hero-image" />
      </section>

      <section className="intro" id="about">
        <div>
          <div className="kicker">The House</div>
          <h2 className="section-title">Italian ease, edited for modern Toronto.</h2>
        </div>
        <p className="body-text">
          Inspired by Napoli tailoring and the atmosphere of Ravello, Ad Lux is built for men who want
          presence without noise. Our clothing is imported from Montecavino Ravello and selected for
          lightness, texture, proportion, and everyday elegance.
        </p>
      </section>

      <section className="collections" id="collections">
        <div className="grid-head">
          <div>
            <div className="kicker">Get Inspired</div>
            <h2 className="section-title">The wardrobe system.</h2>
          </div>
          <a className="button" href="mailto:info@adlux.club">Private Consultation</a>
        </div>

        <div className="product-grid">
          {collections.map(([title, text]) => (
            <article className="tile" key={title}>
              <div className="tile-image" />
              <div className="tile-content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split" id="private">
        <div className="split-image" />
        <div className="split-copy">
          <div className="kicker">Private Client</div>
          <h2 className="section-title">By appointment, built around you.</h2>
          <p className="body-text">
            We guide the full wardrobe: suits, jackets, shirts, trousers, knitwear, travel looks,
            evening dressing, and seasonal edits. The experience is discreet, precise, and personal.
          </p>
          <div className="detail-list">
            <div><span>01</span><span>Private fitting</span></div>
            <div><span>02</span><span>Wardrobe review</span></div>
            <div><span>03</span><span>Fabric and styling direction</span></div>
            <div><span>04</span><span>Napoli-inspired tailoring</span></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <div className="kicker">Appointments</div>
          <h2 className="section-title">Visit Ad Lux.</h2>
          <p className="body-text">
            For made-to-measure, private wardrobe consultation, and collection previews,
            contact us to arrange an appointment.
          </p>
        </div>
        <div className="contact-card">
          <div className="contact-line">info@adlux.club</div>
          <div className="contact-line">416-529-8818</div>
          <div className="contact-line">658 College Street, Toronto</div>
          <div className="contact-line">Instagram coming soon</div>
          <a className="button dark" style={{ marginTop: 28, display: "inline-block", background: "#f5f0e8", color: "#1d1b18" }} href="mailto:info@adlux.club">
            Request Appointment
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>AD LUX</span>
        <span>Napoli Menswear · Toronto</span>
      </footer>
    </main>
  );
}
