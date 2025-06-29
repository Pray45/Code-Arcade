"use client"

import FloatingEffect from "@/Pages/FloatingEffect";
import Timeline from "@/Pages/Timeline";
import Herosection from "@/Pages/Herosection";
import ComingSoon from "@/Pages/ComingSoon";
import MobileHero from "@/components/MobileHero";

export default function Home() {


  return (
    <div className="w-full bg-[#329194]">
      <FloatingEffect />
      {/* <ComingSoon/> */}
      <MobileHero/>
      <Herosection/>
      {/* <Timeline /> */}
    </div>
  );
}
