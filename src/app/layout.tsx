import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Odysia Solutions — Building Tools for Tomorrow",
  description: "Odysia Solutions crafts intelligent software that empowers businesses and individuals. Discover Arya and Albert, our innovative products.",
  keywords: ["Odysia", "Arya", "Albert", "automation", "AI", "software", "tools"],
  authors: [{ name: "Odysia Solutions" }],
  openGraph: {
    title: "Odysia Solutions — Building Tools for Tomorrow",
    description: "Intelligent software that empowers businesses and individuals.",
    type: "website",
    siteName: "Odysia",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odysia Solutions",
    description: "Building tools for tomorrow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
