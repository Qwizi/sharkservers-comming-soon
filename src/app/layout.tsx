import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "SharkServers.pl",
  description: "Wkrótce wracamy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background dark">{children}</body>
    </html>
  );
}
