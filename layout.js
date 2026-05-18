import './globals.css';

export const metadata = {
  title: 'Ad Lux Club',
  description: 'Ultra-luxury menswear. Toronto.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
