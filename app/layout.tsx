import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clement's desktop",
  description: "",
  icons: {
    icon: "/images/favicon.ico",
  },
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
