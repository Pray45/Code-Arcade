import { React } from 'react';
import { useZoomAwareStripVisibility } from "@/hooks/useZoomAwareStripVisibility";
import "../app/globals.css";
import "./animate.css";
import { Anton, Poppins } from "next/font/google";
import Header from '@/components/Header';

const anton = Anton({ subsets: ['latin'], weight: "400" });
const poppins = Poppins({ subsets: ['latin'], weight: "400" });

const Herosection = () => {

  const zoom = useZoomAwareStripVisibility(125);

  return (

    <>
    
    <div className="hidden min-h-screen w-full lg:flex flex-col justify-between">

      <Header />

      <div className="mb-20 2xl:mb-30 ">
        <div className="flex w-full justify-around items-center">
          <div>
            <h1 className={`${anton.className} ${ !zoom ? "text-8xl 2xl:text-[200px]" : "text-6xl xl:text-9xl 2xl:text-[200px]" } text-[#E72E0A] text-shadow-retro-red `} >CODE</h1>
            <h1 className={`${anton.className} ${ !zoom ? "text-8xl 2xl:text-[200px]" : "text-6xl xl:text-9xl 2xl:text-[200px]" } text-[#E72E0A] text-shadow-retro-red `} >ARCADE</h1>
            <h1 className={`${anton.className} ${ !zoom ? "text-8xl 2xl:text-[200px]" : "text-6xl xl:text-9xl 2xl:text-[200px]" } text-[#EE9B01] text-shadow-retro-yellow `} >HACKATHON</h1>
            <p className={`${poppins.className} ${ !zoom ? "w-100 2xl:w-220" : "w-80 2xl:w-220 xl:w-140"} text-white text-xs 2xl:text-2xl pl-2 mt-5`}>A thrilling state-level hackathon bringing together bright minds to innovate, collaborate, and build impactful tech solutions in a high-energy, competitive environment.</p>
            <div className="flex w-full  justify-around 2xl:mt-30  mt-10">
                <div className={`${anton.className} cursor-pointer btn-shadow-red gap-2 flex 2xl:text-3xl 2xl:px-15 2xl:py-4 px-5 py-2 text-white bg-[#AF2012] `}>Register Now<img src="devfolio.svg" className="w-5"/></div>
                <div className={`${anton.className} cursor-pointer btn-shadow-yellow 2xl:text-3xl 2xl:px-15 2xl:py-4 px-7 py-2 text-black bg-[#EBD6A7] `}>Read More</div>
            </div>
          </div>
          <div>
            <img src="trophy.svg" className={`mt-10 ${ !zoom ? "w-120 2xl:w-250" : "w-100 xl:w-150 2xl:w-280"}`} alt="" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 2xl:bottom-10 2xl:py-4 2xl:text-5xl left-0 -rotate-3 w-full overflow-hidden bg-[#EE9B01] py-1">
        <div className="marquee">
          <div className="flex whitespace-nowrap text-2xl text-[#AF2012]">
            <span className={`${anton.className}`}>
              ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack
            </span>
            <span className={`${anton.className}`}>
              ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack ·  Insert brain. press start. hack
            </span>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Herosection;