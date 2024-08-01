import Image from "next/image";
import localFont from "@next/font/local";
import Link from "next/link";

const AreaLight = localFont({ src: '../public/AreaNormal-Thin.otf', variable: '--font-area-light'});

export default function Home() {
  return (
      <main className="flex h-screen flex-col items-center justify-center w-screen backgroundImage">
          <h2 className="text-center md:text-9xl text-7xl scale-y-125">ZWOEL<br/>GEVOEL</h2>
          <h4 className={`pt-16 scale-y-125 ${AreaLight.variable} font-sans`}>DISCO - HOUSE - TECHNO</h4>
          <h4 className={`pt-6 scale-y-125 ${AreaLight.variable} font-sans`}>14 SEPTEMBER</h4>
          <Link href="https://shop.ikbenaanwezig.nl/tickets/event/zwoel-gevoel-2024" className={`pt-4 scale-y-125 ${AreaLight.variable} font-sans`}>TICKETS</Link>
      </main>
  );
}
