import { React } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../app/globals.css";
import "./animate.css";
import { Anton, Poppins } from "next/font/google";
import Header from '@/components/Header';

const anton = Anton({ subsets: ['latin'], weight: "400" });
const poppins = Poppins({ subsets: ['latin'], weight: "400" });

const Herosection = () => {

  

  return (

    <>

    {/* Mobile diaplay................................................. */}

     <div className="relative lg:hidden overflow-hidden min-h-screen max-h-screen flex flex-col justify-between">
      <Header/>

      <img className="absolute top-15 self-center" src="mobilebg.svg" alt="" />

      <div className="w-full">

        <div className="z-0"></div>

        <div className="z-1 flex flex-col justify-center items-center ">
          <h1 className={`${anton.className} text-[#BA1E00] z-10 text-[10rem] leading-none drop-shadow-[2px_4px_4px_rgba(0,0,0,0.5)]`}>CODE</h1>
          <h1 className={`${anton.className} text-[#BA1E00] z-10 text-8xl drop-shadow-[2px_4px_4px_rgba(0,0,0,0.5)]`}>ARCADE</h1>
          <h1 className={`${anton.className} text-[#EE9B01] z-10 text-6xl drop-shadow-[2px_4px_4px_rgba(0,0,0,0.5)]`}>HACKATHON</h1>
        </div>

      </div>

      <div className="flex flex-col w-full items-center">
        <p className={`${poppins.className} text-white text-xs max-w-3xl z-10 mt-10 mx-12 vs:text-center text-center vvs:text-left vs:text-xl`} >A thrilling state-level hackathon bringing together bright minds to innovate, collaborate, and build impactful tech solutions in a high-energy, competitive environment.</p>
      </div>

      <div className="flex w-full justify-around">
          <div className={`${anton.className} btn-shadow-red gap-2 flex px-7 py-2 text-white bg-[#AF2012] `}>Register Now<img src="devfolio.svg" className="w-5"/></div>
          <div className={`${anton.className} btn-shadow-yellow  px-10 py-2 text-black bg-[#EBD6A7] `}>Read More</div>
      </div>

      <footer className={`${anton.className} text-[#AF2012] w-full h-10 bg-[#EE9B01] text-center pt-2`}>Insert Brain. Press Start. Hack.</footer>

    </div>

    </>
  );
};

export default Herosection;