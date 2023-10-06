"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MenuOpen, Menu } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { MontserratBold, SpaceBold } from "../(fonts)/font";
import Sidebar from "./Sidebar";

export default function Header() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [homeDropdown, setHomeDropdown] = useState(false);
  // const [aboutDropdown, setAboutDropdown] = useState(false);
  // const [blogDropdown, setBlogDropdown] = useState(false);
  // const [workDropdown, setWorkDropdown] = useState(false);
  // const [getDropdown, setGetDropdown] = useState(false);
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} />
      <div
        className={` top-0 sticky w-full flex justify-between items-center border-b-2 border-white z-10 bg-black text-white gap-10 p-2 ${SpaceBold.className}`}
      >
        <div className=" flex-1">
          <h1 className=" text-3xl sm:text-6xl">
            KPBoateng<span className=" text-base sm:text-lg">.blog</span>
          </h1>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:justify-between sm:items-center sm:gap-2">
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
            className={`${
              pathname === "/contact" && "border-b-2 border-white"
            }`}
          >
            Contact
          </Link>
        </div>
        <div
          className="block sm:hidden"
          onClick={() => {
            setSidebarOpen((prevState) => !prevState);
          }}
        >
          {!sidebarOpen ? <Menu /> : <MenuOpen />}
        </div>
      </div>
    </>
  );
}
