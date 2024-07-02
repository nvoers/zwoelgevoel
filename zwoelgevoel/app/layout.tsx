import type { Metadata } from "next";
import localFont from "@next/font/local";
import "./globals.css";


const Area = localFont({ src: '../public/AreaNormal-ExtraBold.otf', variable: '--font-area'});

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
      <body className={`${Area.variable} font-sans`}>{children}</body>
    </html>
  );
}
