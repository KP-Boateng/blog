"use client";

import ConstructionAnimation from "../../public/construction.json";
import Lottie from "lottie-react";
import { MontserratBold } from "../(fonts)/font";

export default function page() {
  return (
    <div className=" h-screen  flex flex-col justify-center items-center">
      <Lottie animationData={ConstructionAnimation} loop={true} />
      <h1 className={`${MontserratBold.className}`}>Page under construction</h1>
    </div>
  );
}
