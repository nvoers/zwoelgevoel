import type { Metadata } from "next";
import localFont from "@next/font/local";
import "./globals.css";


const Area = localFont({ src: '../public/AreaNormal-ExtraBold.otf', variable: '--font-area'});
const AreaLight = localFont({ src: '../public/AreaNormal-Thin.otf', variable: '--font-area-light'});

export const metadata: Metadata = {
  title: "ZWOELGEVOEL",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon.png"></link>
      </head>
      <body className={`${Area.variable} font-sans`}>{children}</body>
    </html>
  );
}
