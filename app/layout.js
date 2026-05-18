export const metadata = {
  title: "Ad Lux",
  description: "Ultra luxury menswear house in Toronto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
