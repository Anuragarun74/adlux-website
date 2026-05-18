export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080706",
      color: "#f5f5f4",
      padding: "80px 24px"
    }}>
      <section style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          border: "1px solid #6f552f",
          borderRadius: 32,
          padding: 60,
          background: "linear-gradient(135deg, rgba(181,142,79,0.18), rgba(255,255,255,0.03))"
        }}>
          <p style={{
            color: "#c9a15d",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontSize: 13
          }}>
            Ultra Luxury Menswear
          </p>

          <h1 style={{
            fontSize: 72,
            lineHeight: 1.05,
            marginTop: 20,
            marginBottom: 30
          }}>
            AD LUX
          </h1>

          <p style={{
            maxWidth: 700,
            color: "#d6d3d1",
            fontSize: 22,
            lineHeight: 1.7
          }}>
            A private-club inspired luxury menswear house based in Toronto.
            Built around tailoring, elegance, and understated power.
          </p>

          <div style={{
            marginTop: 50,
            display: "flex",
            gap: 20,
            flexWrap: "wrap"
          }}>
            <button style={{
              background: "#b58e4f",
              color: "black",
              border: "none",
              borderRadius: 999,
              padding: "16px 28px",
              fontSize: 16,
              cursor: "pointer"
            }}>
              Book Appointment
            </button>

            <button style={{
              background: "transparent",
              color: "white",
              border: "1px solid #57534e",
              borderRadius: 999,
              padding: "16px 28px",
              fontSize: 16,
              cursor: "pointer"
            }}>
              Explore the House
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
