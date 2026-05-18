export const metadata = {
  title: "Ad Lux",
  description: "Ultra luxury menswear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#080706" }}>
        {children}
      </body>
    </html>
  );
}
