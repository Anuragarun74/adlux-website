import { ArrowRight, Calendar, Crown, Gem, MapPin, Scissors, ShieldCheck, Sparkles } from 'lucide-react';

const services = [
  { icon: Scissors, title: 'Made-to-Measure', text: 'Precision tailoring, refined silhouettes, and private fittings for men who expect exacting standards.' },
  { icon: Gem, title: 'Luxury Wardrobe Building', text: 'A curated wardrobe strategy built around lifestyle, travel, business, and evening occasions.' },
  { icon: Crown, title: 'Private Client Experience', text: 'By-appointment service, discreet guidance, and a club-like environment designed around you.' },
];

const values = ['Italian inspired', 'Toronto based', 'Private fittings', 'Old-world service', 'Modern luxury'];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="brand">AD LUX</div>
          <div className="links">
            <a href="#story">Story</a>
            <a href="#services">Services</a>
            <a href="#appointments">Appointments</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#appointments" className="button small">Book a fitting</a>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">Ultra-luxury menswear</p>
            <h1>The private club for refined menswear.</h1>
            <p className="lead">Ad Lux is a Toronto-based luxury menswear house built for men who value elegance, discipline, and presence. Italian inspiration. Private service. Quiet power.</p>
            <div className="ctaRow">
              <a href="#appointments" className="button">Request an appointment <ArrowRight size={18} /></a>
              <a href="#story" className="button secondary">Explore the house</a>
            </div>
          </div>

          <div className="crestCard">
            <div className="crestInner">
              <div className="crestCircle">AD</div>
              <p className="crestText">Ad Lux Club</p>
              <p className="crestSub">Established for presence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="valueStrip">
        {values.map((value) => <div key={value} className="pill">{value}</div>)}
      </section>

      <section id="story" className="story">
        <div>
          <p className="eyebrow">The house</p>
          <h2>Luxury without noise.</h2>
        </div>
        <div className="storyText">
          <p>Ad Lux is designed as a modern Mayfair-style menswear club: intimate, masculine, precise, and quietly powerful. Every detail is chosen to elevate the man wearing it, not overpower him.</p>
          <p>From tailored jackets and trousers to complete wardrobe systems, the experience is built around fit, proportion, fabric, lifestyle, and personal presence.</p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="sectionTop">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Built around the private client.</h2>
          </div>
          <p>A focused offering for men who want their clothing handled with taste, discipline, and discretion.</p>
        </div>
        <div className="cards">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card">
                <div className="icon"><Icon size={26} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="appointments" className="appointment">
        <div className="appointmentBox">
          <div>
            <div className="icon"><Calendar size={26} /></div>
            <h2>Private appointments only.</h2>
            <p>Book a private fitting or wardrobe consultation. We will review your needs, take measurements, discuss fabric and styling direction, and build a plan around your lifestyle.</p>
          </div>
          <div className="checkBox">
            <p><ShieldCheck size={20} /> Discreet private service</p>
            <p><Sparkles size={20} /> Luxury fabric and styling guidance</p>
            <p><MapPin size={20} /> Toronto showroom experience</p>
            <a href="mailto:sales@bpsupplychain.com" className="button full">Request appointment</a>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div>
          <div className="brand">AD LUX</div>
          <p>Ultra-luxury menswear. Toronto.</p>
        </div>
        <div className="footerRight">
          <p>Appointments · Made-to-measure · Private wardrobe consultation</p>
          <p>© 2026 Ad Lux. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
