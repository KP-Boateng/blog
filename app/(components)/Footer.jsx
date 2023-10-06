"use client";

import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOnOutlined,
  PhoneAndroid,
  PhoneAndroidOutlined,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MontserratBold } from "../(fonts)/font";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div
      className={` bottom-0  bg-black flex flex-col justify-center items-center gap-10 text-white p-4 text-lg`}
    >
      <div className=" w-full flex gap-4 sm:w-4/5 items-center justify-between">
        <div className=" flex-1 flex flex-col gap-2 justify-center items-center">
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
        <div className=" flex-1 flex flex-col gap-2 justify-center items-center">
          <div className=" flex gap-2 justify-center items-center">
            <PhoneAndroid />

            <h1>+233598045846</h1>
          </div>
          <div className=" flex gap-2 justify-center items-center">
            <div>@</div>
            <h1>opaul816@gmail.com</h1>
          </div>
          <div className=" flex gap-2 justify-center items-center">
            <LocationOnOutlined />

            <h1>Kumasi, Ghana</h1>
          </div>
        </div>
        <div></div>
      </div>
      <div className=" flex flex-col justify-between items-center  sm:w-4/5  gap-4 sm:flex">
        <div className="flex  justify-end items-center gap-2">
          {/* <Facebook />
          <Instagram />
          <Twitter /> */}
          <Link
            href={"mailto:opaul816@gmail.com"}
            rel="no_referrer"
            target="_blank"
          >
            <Email />
          </Link>
          <Link
            href={"https://www.youtube.com/@chhlyricsvideos5427"}
            rel="no_referrer"
            target="_blank"
          >
            <YouTube />
          </Link>
          <Link
            href={"https://wa.me/+233556849078"}
            rel="no_referrer"
            target="_blank"
          >
            <WhatsApp />
          </Link>
          <Link
            href={"https://linkedin.com/in/paul-boateng-932943204"}
            rel="no_referrer"
            target="_blank"
          >
            <LinkedIn />
          </Link>
          <Link
            href={"https://www.github.com/KP-Boateng"}
            rel="no_referrer"
            target="_blank"
          >
            <GitHub />
          </Link>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h1>
            Copyright 2023. KPBoateng<span className=" text-sm">.blog</span>
          </h1>
          <h1> All rights reserved</h1>
        </div>
      </div>
    </div>
  );
}
