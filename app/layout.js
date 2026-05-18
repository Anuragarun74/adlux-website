import './globals.css';

export const metadata = {
  title: 'Ad Lux | Napoli Luxury Menswear Toronto',
  description: 'Ad Lux is a Napoli-inspired luxury menswear house in Toronto, importing clothing from Montecavino Ravello and offering private appointments, made-to-measure, and wardrobe building.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
