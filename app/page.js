const nav = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Made-to-Measure', '#mtm'],
  ['Private Client', '#private'],
  ['Gallery', '#gallery'],
  ['Book', '#book'],
  ['Contact', '#contact'],
];

const gallery = [
  'Napoli tailoring',
  'Ravello summer evenings',
  'Private club wardrobe',
  'Italian cloth & craft',
  'Toronto appointments',
  'Quiet luxury details',
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home" aria-label="Ad Lux home">
          <img src="/adlux-logo.png" alt="Ad Lux logo" />
          <span>AD LUX</span>
        </a>
        <nav>
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="navCta" href="mailto:info@adlux.club">Appointment</a>
      </header>

      <section id="home" className="hero section">
        <div className="heroText">
          <p className="eyebrow">Napoli luxury menswear · Toronto</p>
          <h1>Italian elegance, cut for the private client.</h1>
          <p className="lede">Ad Lux is a luxury menswear house inspired by Napoli, Ravello, and the Amalfi coast — disciplined through the lens of a Mayfair private club.</p>
          <div className="actions">
            <a className="button gold" href="mailto:info@adlux.club?subject=Ad Lux Private Appointment">Book a private appointment</a>
            <a className="button ghost" href="#about">Enter the house</a>
          </div>
        </div>
        <div className="heroCard">
          <div className="logoFrame"><img src="/adlux-logo.png" alt="Ad Lux crest" /></div>
          <p>Imported from Montecavino Ravello</p>
          <h2>Napoli soul. Toronto presence.</h2>
        </div>
      </section>

      <section className="strip">
        <span>Montecavino Ravello</span><span>Napoli tailoring</span><span>Private fittings</span><span>By appointment</span><span>658 College Street</span>
      </section>

      <section id="about" className="section twoCol">
        <div>
          <p className="eyebrow">About Ad Lux</p>
          <h2>A house built for men who understand restraint.</h2>
        </div>
        <div className="copy">
          <p>Ad Lux brings the romance of Southern Italy into a controlled, masculine, private-client experience. The spirit is Ravello at dusk: limestone, espresso, bronze, linen, sea air, and old-world hospitality.</p>
          <p>Our clothing is imported from Montecavino Ravello and presented in Toronto through a curated lens: tailored proportion, quiet confidence, and wardrobe pieces that carry presence without shouting.</p>
        </div>
      </section>

      <section id="mtm" className="section darkPanel">
        <p className="eyebrow">Made-to-Measure</p>
        <h2>Measured once. Remembered properly.</h2>
        <div className="cards">
          <article><h3>Private consultation</h3><p>We begin with lifestyle, wardrobe goals, fit preferences, and the occasions you dress for.</p></article>
          <article><h3>Cloth & silhouette</h3><p>Italian-inspired fabrics, refined jackets, trousers, shirts, and seasonal capsule planning.</p></article>
          <article><h3>Fit discipline</h3><p>Measurements, proportion checks, and alterations handled with the calm precision of a private house.</p></article>
        </div>
      </section>

      <section id="private" className="section private">
        <div className="privateBox">
          <p className="eyebrow">Private Client / Members Club</p>
          <h2>Not retail. Relationship.</h2>
          <p>Ad Lux is designed to feel like a club: discreet, warm, selective, and personal. Members and private clients receive wardrobe direction, priority appointments, seasonal previews, event dressing, travel packing support, and long-term style planning.</p>
          <a className="button gold" href="mailto:info@adlux.club?subject=Ad Lux Private Client Inquiry">Request private client access</a>
        </div>
      </section>

      <section id="gallery" className="section">
        <p className="eyebrow">Gallery</p>
        <h2>Visual direction</h2>
        <div className="galleryGrid">
          {gallery.map((item, index) => <div className="tile" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
        </div>
      </section>

      <section id="book" className="section book">
        <div>
          <p className="eyebrow">Book Appointment</p>
          <h2>Begin with a private fitting.</h2>
          <p>For appointments, wardrobe consultations, and made-to-measure inquiries, contact the house directly.</p>
        </div>
        <div className="bookingCard">
          <a href="mailto:info@adlux.club">info@adlux.club</a>
          <a href="tel:+14165298818">416-529-8818</a>
          <p>658 College Street<br />Toronto, Ontario</p>
          <a className="button gold" href="mailto:info@adlux.club?subject=Ad Lux Appointment Request">Email to book</a>
        </div>
      </section>

      <footer id="contact">
        <div><strong>AD LUX</strong><p>Napoli luxury menswear · Toronto</p></div>
        <div><p>658 College Street, Toronto</p><p>info@adlux.club · 416-529-8818</p></div>
      </footer>
    </main>
  );
}
