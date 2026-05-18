export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080706",
      color: "#f5f5f4",
      fontFamily: "Arial, Helvetica, sans-serif"
    }}>
      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px"
      }}>
        <div style={{
          border: "1px solid #6f552f",
          borderRadius: "32px",
          padding: "60px",
          background: "linear-gradient(135deg, rgba(181,142,79,0.18), rgba(255,255,255,0.03))"
        }}>
          <p style={{
            color: "#c9a15d",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontSize: "13px"
          }}>
            Ultra Luxury Menswear
          </p>

          <h1 style={{
            fontSize: "72px",
            lineHeight: 1.05,
            marginTop: "20px",
            marginBottom: "30px",
            letterSpacing: "-0.04em"
          }}>
            AD LUX
          </h1>

          <p style={{
            maxWidth: "720px",
            color: "#d6d3d1",
            fontSize: "22px",
            lineHeight: 1.7
          }}>
            A private-club inspired luxury menswear house based in Toronto.
            Built around tailoring, elegance, and understated power.
          </p>

          <div style={{
            marginTop: "50px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}>
            <a href="mailto:info@adlux.club" style={{
              background: "#b58e4f",
              color: "black",
              borderRadius: "999px",
              padding: "16px 28px",
              fontSize: "16px",
              textDecoration: "none",
              display: "inline-block"
            }}>
              Book Appointment
            </a>

            <a href="#story" style={{
              background: "transparent",
              color: "white",
              border: "1px solid #57534e",
              borderRadius: "999px",
              padding: "16px 28px",
              fontSize: "16px",
              textDecoration: "none",
              display: "inline-block"
            }}>
              Explore the House
            </a>
          </div>
        </div>

        <section id="story" style={{
          marginTop: "80px",
          display: "grid",
          gap: "28px"
        }}>
          <h2 style={{ fontSize: "42px", margin: 0 }}>Luxury without noise.</h2>
          <p style={{
            maxWidth: "820px",
            color: "#d6d3d1",
            fontSize: "20px",
            lineHeight: 1.7
          }}>
            Ad Lux is designed as a modern Mayfair-style menswear club:
            intimate, masculine, precise, and quietly powerful.
          </p>
        </section>
      </section>
    </main>
  );
}
