import "./globals.css";

// Root layout - minimal, delegates to [locale] layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
