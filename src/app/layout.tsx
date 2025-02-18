// NEXT
import type { Metadata } from "next";

// STYLES
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenuineXs",
  description: "Created by Sairoden",
  icons:
    "https://cdn.prod.website-files.com/63a5aeb96ccbdb14526058ae/63c17a23f12b4aaedc0f0860_GXS_Favicon%20copy%202.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
