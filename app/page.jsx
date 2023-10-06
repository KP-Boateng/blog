import Image from "next/image";
import NextImage from "../public/Nextjs-Image.png";
import Link from "next/link";
import { MontserratBold } from "./(fonts)/font";

export default function Home() {
  return (
    <main className=" bg-slate-200 h-screen flex flex-col items-center p-2">
      <div className=" w-full flex flex-col items-center gap-4 sm:w-1/2">
        <Image src={NextImage} alt="nextjs image" />
        <Link
          href={"/nextjs-tutorial"}
          className={` bg-blue-500 p-2 rounded-md text-white ${MontserratBold.className}`}
        >
          Next.js Tutorial
        </Link>
      </div>
    </main>
  );
}
