'use client';

import React, { useEffect, useState } from 'react';
import "../app/globals.css";
import "./animate.css";
import { Anton, Poppins } from "next/font/google";

const anton = Anton({ subsets: ['latin'], weight: "400" });
const poppins = Poppins({ subsets: ['latin'], weight: "400" });

const Herosection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="flex justify-center bg-[#EBD6A7] py-2 text-[#053125] z-50">
        <ul className="flex w-full justify-center items-center text-xl gap-8">

          {/* LEFT NAV */}
          <div className={` ${anton.className} flex border-t-2 border-b-2 border-[#93A39A] py-1.5 px-6 gap-15 z-50`}>
            {['Timeline', 'Instruction', 'Rewards'].map((item) => (
              <li key={item} className="relative hover:cursor-pointer w-20 hover:text-[#E72E0A] text-center group list-none" >
                {item}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-center scale-x-0 bg-[#E72E0A] transition-transform duration-300 group-hover:scale-x-100" />
              </li>
            ))}
          </div>

          {/* CENTER SHAPE */}
          <div className="w-64 flex justify-center">
            <div className={` ${anton.className} bg-[#E72E0A] h-12 w-full shadow-lg flex text-white text-3xl justify-center items-center`} style={{ clipPath: "polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%)" }}>
              CODE ARCADE
            </div>
          </div>

          {/* RIGHT NAV */}
          <div className={` ${anton.className} flex border-t-2 border-b-2 border-[#93A39A] py-1.5 px-6 gap-15 z-50`}>
            {['Sponsors', 'FAQs', 'About'].map((item) => (
              <li key={item} className="relative hover:cursor-pointer w-20 hover:text-[#E72E0A] text-center group list-none" >
                {item}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-center scale-x-0 bg-[#E72E0A] transition-transform duration-300 group-hover:scale-x-100" />
              </li>
            ))}
          </div>

        </ul>
      </header>

      {/* HERO SECTION */}
      <div className="flex min-h-screen justify-around pb-15">
        {/* LEFT TEXT */} 
        <div className="min-h-full mb-10 flex flex-col justify-center">
          <h1 className={`${anton.className} text-7xl 2xl:text-8xl text-shadow-retro-red text-[#E72E0A]`}>CODE</h1>
          <h1 className={`${anton.className} text-7xl 2xl:text-8xl text-shadow-retro-red text-[#E72E0A]`}>ARCADE</h1>
          <h1 className={`${anton.className} text-7xl 2xl:text-8xl text-shadow-retro-yellow text-[#EE9B01]`}>HACKATHON</h1>

          <p className={`${poppins.className} w-100 mt-5 font-sans font-bold`}>
            A thrilling state-level hackathon bringing together bright minds to innovate,
            collaborate, and build impactful tech solutions in a high-energy, competitive environment.
          </p>

          <div className="flex mt-10 gap-20">
            <button className={`${anton.className} bg-[#AF2012] text-2xl cursor-pointer btn-shadow-red text-[#EBD6A7] py-2 px-4`}>
              REGISTER NOW
            </button>
            <button className={`${anton.className} bg-[#EBD6A7] text-2xl cursor-pointer btn-shadow-yellow text-black py-2 px-4`}>
              Read More...
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex relative justify-center w-[35%] z-0">
          {mounted && (
            <>
              <img src="./flyes.svg" className="floating-svg top-20 z-1 w-50 -left-35 absolute" alt="Flying" />
              <img src="./final ghost.svg" className="floating-svg z-1 bottom-20 w-25 right-0 absolute" alt="Ghost" />
            </>
          )}
          <img src="./finaltrophy.svg" className="scale-120 z-0" alt="Trophy"/>
        </div>

        <section className="absolute -rotate-3 -left-4 bottom-5 w-screen bg-[#EE9B01] h-10 overflow-hidden">
          <div className="relative flex w-[200%] animate-marquee">
            <div className={`${anton.className} text-[#AF2012] flex whitespace-nowrap text-2xl text-center items-center px-4`}>
              · Insert brain. press start. hack · Insert brain. press start. hack · Insert brain. press start. hack · Insert brain. press start. hack
            </div>
            <div className={`${anton.className} text-[#AF2012] flex whitespace-nowrap text-2xl text-center items-center px-4`}>
              · Insert brain. press start. hack · Insert brain. press start. hack · Insert brain. press start. hack · Insert brain. press start. hack
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Herosection;