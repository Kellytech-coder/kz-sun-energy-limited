import "./globals.css";

export const metadata = {
  title: "Solar Marketplace",
  description: "Reliable solar equipment for homes & businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50">{children}</body>
    </html>
  );
}