import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clement's desktop",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-crt bg-black min-h-screen">{children}</body>
    </html>
  );
}
