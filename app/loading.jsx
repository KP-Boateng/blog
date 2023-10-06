"use client";

import Lottie from "lottie-react";
import React from "react";
import loadingAnimatiion from "../public/animation_lndn5b3k.json";

export default function loading() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Lottie animationData={loadingAnimatiion} loop={true} />
    </div>
  );
}
