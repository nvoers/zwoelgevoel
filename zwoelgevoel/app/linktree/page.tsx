import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen backgroundImage">
        <div className="max-w-screen-sm mx-auto flex flex-col items-center mt-12">
            <Image src="/profilepic.png" alt="Zwoel Gevoel" width={150} height={150} className="rounded-full mb-4"/>
            <div className="scale-y-125">
                <p className="uppercase text-center">
                    zwoel gevoel<br/>14 september
                </p>
            </div>
            <div className="mt-12 flex flex-col w-full text-center uppercase">
                <Link href="https://shop.ikbenaanwezig.nl/tickets/event/zwoel-gevoel-2024" className="rounded-2xl bg-gray-400 hover:bg-purple-900 text-white px-8 py-4 mb-4">
                    tickets
                </Link>
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