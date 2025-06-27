"use client"

import FloatingEffect from "@/Pages/FloatingEffect";
import Timeline from "@/Pages/Timeline";
import Herosection from "@/Pages/Herosection";
import ComingSoon from "@/Pages/ComingSoon";

export default function Home() {


  return (
    <div className="w-screen bg-[#329194]">
      <FloatingEffect />
      {/* <ComingSoon/> */}
      <Herosection/>
      {/* <Timeline /> */}
    </div>
  );
}
