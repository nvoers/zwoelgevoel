import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center w-screen backgroundImage">
        <svg width="100%" height="100%">
            {/* <text className="text-center md:text-9xl text-7xl scale-y-125">ZWOEL<br/>GEVOEL</text> */}
            <text x="50%" y="40%" textAnchor="middle" className="text-center text-9xl scale-y-125">
                ZWOEL
            </text>
            <text x="50%" y="55%" textAnchor="middle" className="text-center text-9xl scale-y-125">
                GEVOEL
            </text>
        </svg>
    </main>
  );
}
