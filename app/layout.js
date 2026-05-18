export const metadata = {
  title: "Ad Lux | Napoli Menswear Toronto",
  description: "Ad Lux — Napoli-inspired luxury menswear, Toronto.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
