import React from 'react';
import "../app/globals.css";
import "./animate.css";
import { Anton, Poppins } from "next/font/google";

const anton = Anton({ subsets: ['latin'], weight: "400" });
const poppins = Poppins({ subsets: ['latin'], weight: "400" });

const Herosection = () => {

  return (

    <>
      {/* NAVBAR */}
      <header className="flex bg-[#EBD6A7] 2xl:py-5 py-2 text-[#053125]">
        <ul className="flex w-full justify-center items-center text-xl 2xl:text-4xl 2xl:gap-20 gap-10">
  
          {/* LEFT NAV */}
          <div className={` ${anton.className} w-1/4 flex border-[#93A39A] div-50
             py-1.5 px-2 gap-10 border-t-3 border-b-3
             2xl:py-3 justify-around 2xl:border-t-5 2xl:border-b-5
            `}>
            {['Timeline', 'Instruction', 'Rewards'].map((item) => (
              <li key={item} className="relative hover:cursor-pointer hover:text-[#E72E0A] text-center group list-none" >
                {item}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-center scale-x-0 bg-[#E72E0A] transition-transform duration-300 group-hover:scale-x-100" />
              </li>
            ))}
          </div>
          
          {/* CENTER SHAPE */}
          <div className="2xl:w-85 w-54 flex justify-center">
            <div className={` ${anton.className} bg-[#E72E0A] 2xl:h-18 h-14 w-full shadow-lg flex text-white 2xl:text-5xl text-3xl justify-center items-center`} style={{ clipPath: "polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%)" }}>
              CODE ARCADE
            </div>
          </div>
          
          {/* RIGHT NAV */}
          <div className={` ${anton.className} w-1/4 flex border-[#93A39A] z-50
             py-1 px-2 gap-10 border-t-3 border-b-3
             2xl:py-3 justify-around 2xl:border-t-5 2xl:border-b-5
            `}>
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
      <div className="flex min-h-screen justify-around pb-20 2xl:pb-40 2xl:mx-25">
        {/* LEFT TEXT */} 
        <div className="min-h-full mb-10 flex flex-col ml-20 justify-center">
          <h1 className={`${anton.className} text-8xl 2xl:text-[200px] text-shadow-retro-red text-[#E72E0A]`}>CODE</h1>
          <h1 className={`${anton.className} text-8xl 2xl:text-[200px] text-shadow-retro-red text-[#E72E0A]`}>ARCADE</h1>
          <h1 className={`${anton.className} text-8xl 2xl:text-[200px] text-shadow-retro-yellow text-[#EE9B01]`}>HACKATHON</h1>
          
          <p className={`${poppins.className} 2xl:w-200 w-100 mt-5 2xl:text-3xl font-sans font-bold`}>
            A thrilling state-level hackathon bringing together bright minds to innovate,
            collaborate, and build impactful tech solutions in a high-energy, competitive environment.
          </p>
          
          <div className="flex mt-10 2xl:gap-30 2xl:mt-15 gap-20">
            <button className={`${anton.className} bg-[#AF2012] text-2xl cursor-pointer btn-shadow-red text-[#EBD6A7] 2xl:py-5 2xl:px-10 2xl:text-4xl py-2 px-4`}>
              REGISTER NOW
            </button>
            <button className={`${anton.className} bg-[#EBD6A7] text-2xl cursor-pointer btn-shadow-yellow text-black 2xl:py-5 2xl:px-10 2xl:text-4xl py-2 px-4`}>
              Read More...
            </button>
          </div>
        </div>
          
        {/* RIGHT IMAGES */}
        <div className="flex relative justify-center w-[35%] z-0">
          <>
            <img src="./flyes.svg" className="floating-svg 2xl:top-40 top-20 z-1 2xl:w-75 w-45 -left-35 2xl:-left-60 absolute" alt="Flying" />
            <img src="./final ghost.svg" className="floating-svg z-1 bottom-20 2xl:bottom-40 2xl:-right-10 w-30 2xl:w-45 right-0 absolute" alt="Ghost" />
          </>
          <img src="./finaltrophy.svg" className="scale-120 2xl:scale-140 z-0" alt="Trophy"/>
        </div>   

      </div>

    </>
  );
};

export default Herosection;