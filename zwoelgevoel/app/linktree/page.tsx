import Image from "next/image";
import Link from "next/link";
import localFont from "@next/font/local";

const AreaLight = localFont({ src: '../../public/AreaNormal-Thin.otf', variable: '--font-area-light'});
const Area = localFont({ src: '../../public/AreaNormal-ExtraBold.otf', variable: '--font-area'});

export default function Home() {
  return (
    <main className="h-screen w-screen backgroundImage">
        <div className="max-w-screen-sm mx-auto flex flex-col items-center mt-12 px-2">
            <Image src="/profilepic.png" alt="Zwoel Gevoel" width={150} height={150} className="rounded-full mb-8"/>
            <div className="scale-y-125">
                <p className={`${Area.variable} font-sans uppercase text-center`}>
                    zwoel gevoel
                </p>
{/*                 <p className={`text-center ${AreaLight.variable}`}>
                    Op 14 september strijkt Zwoel Gevoel neer in het mooie Nijmegen. Een mooie nazomeravond gevuld met klanken van disco, house en techno. Klik op onderstaande buttons voor meer informatie en tickets, of join onze whatsapp community om op de hoogte te blijven van alle informatie rondom aankomende en volgende edities. De locatie van Zwoel Gevoel wordt later bekend gemaakt aan tickethouders (10 min fietsen vanaf Nijmegen Centraal).
                </p> */}
            </div>
            <div className="mt-12 flex flex-col w-full text-center uppercase">
{/*                 <Link href="https://shop.ikbenaanwezig.nl/tickets/event/zwoel-gevoel-2024" className="rounded-2xl bg-gray-400 hover:bg-purple-900 text-white px-8 py-4 mb-4">
                    tickets
                </Link> */}
                <Link href="https://chat.whatsapp.com/HEoeG7MALt09N3xLTHMwuj" className="rounded-2xl bg-gray-400 hover:bg-purple-900 text-white px-8 py-4 mb-4">
                    whatsapp community
                </Link>
                <Link href="https://instagram.com/zwoel_gevoel" className="rounded-2xl bg-gray-400 hover:bg-purple-900 text-white px-8 py-4 mb-4">
                    instagram
                </Link>
                <iframe src="https://open.spotify.com/embed/playlist/0acyM9uTfOmmsWSMEYTaoE?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    </main>
  );
}
