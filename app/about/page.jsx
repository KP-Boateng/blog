"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import { MontserratBold, SpaceRegular } from "../(fonts)/font";
import frontEndDevAnimation from "../../public/animation_lndomc5q.json";

export default function About() {
  const [email, setEmail] = useState("");
  return (
    <div
      className={` bg-slate-200 h-screen flex justify-center items-center p-2 ${MontserratBold.className}`}
    >
      <div className=" flex flex-col gap-8">
        <div>
          <h1 className=" text-3xl sm:text-6xl">
            Hi, I&apos;m Boateng Paul
            <br />
            Front End Dev
          </h1>
        </div>
        <div className={`${SpaceRegular.className}`}>
          <h1>
            On this blog, I share tips and tricks, frameworks, projects,
            tutorials, etc.
            <br />
            Make sure you subsribe to get the latest updates.
          </h1>
        </div>
        <div className=" flex gap-4 w-full">
          <div>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="input"
              placeholder="Enter your email here"
              className=" bg-white text-black p-2 flex-1 rounded-md"
            />
          </div>
          <div>
            <button className=" bg-blue-500 text-white p-2 rounded-md ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className=" hidden sm:block flex justify-center items-center">
        <Lottie animationData={frontEndDevAnimation} loop={true} />
      </div>
    </div>
  );
}
