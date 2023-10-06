import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ sidebarOpen }) {
  const pathname = usePathname();
  return (
    <div
      className={` w-1/2 h-screen left-0 z-20 fixed flex flex-col items-center bg-slate-900  text-white transition-all duration-500 pt-[120px] gap-20 text-2xl sm:hidden ${
        sidebarOpen ? " top-0 opacity-100" : "opacity-0 -top-full"
      }`}
    >
      <Link
        href={"/"}
        className={`${pathname === "/" && "border-b-2 border-white"}`}
      >
        Home
      </Link>
      <Link
        href={"/about"}
        className={`${pathname === "/about" && "border-b-2 border-white"}`}
      >
        About
      </Link>
      <Link
        href={"/topics"}
        className={`${pathname === "/topics" && "border-b-2 border-white"}`}
      >
        Topics
      </Link>
      <Link
        href={"/contact"}
        className={`${pathname === "/contact" && "border-b-2 border-white"}`}
      >
        Contact
      </Link>
    </div>
  );
}

//  className={`fixed w-1/2 h-full overflow-hidden  bg-slate-900 pt-[120px]  transition-all duration-500 flex flex-col gap-10 items-center ${plusjkbold.className} md:hidden`}
//       style={{ left-0 z-10 text-white
//         opacity: `${sidebarOpen ? "1" : "0"}`,
//         top: ` ${sidebarOpen ? "0" : "-100%"}`,
//       }}
