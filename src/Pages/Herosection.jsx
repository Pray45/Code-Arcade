import { React } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../app/globals.css";
import { Anton, Poppins } from "next/font/google";
import Header from '@/components/Header';

const anton = Anton({ subsets: ['latin'], weight: "400" });
const poppins = Poppins({ subsets: ['latin'], weight: "400" });

const Herosection = () => {

  

  return (
     <div className='lg:hidden min-h-[100dvh] vs:min-h-screen 2xl:min-h-dvh w-full flex flex-col justify-between'>
      <Header/>
      <img className="absolute top-15 self-center" src="mobilebg.svg" alt="" />
      <div className="w-full">
        <div className="z-0" >
        </div>
        <div className="z-1 flex flex-col justify-center items-center mt-10 ">
          <h1 className={`${anton.className} text-[#BA1E00] z-10 text-[10rem] leading-none `} >CODE</h1>
          <h1 className={`${anton.className} text-[#BA1E00] z-10 text-8xl`} >ARCADE</h1>
          <h1 className={`${anton.className} text-[#EE9B01] z-10 text-6xl`} >HACKATHON</h1>
        </div>
      </div>


      <div className="flex flex-col w-full items-center">
        <p className={`${poppins.className} text-xs max-w-3xl z-10 mt-10 text-center`} >A thrilling state-level hackathon bringing together bright minds to innovate, collaborate, and build impactful tech solutions in a high-energy, competitive environment.</p>
      </div>

      <div className="flex w-full justify-around">
          <div className={`${anton.className} px-5 z-10 py-2 text-white bg-[#AF2012] `}>Register Now</div>
          <div className={`${anton.className} px-5 z-10 py-2 text-black bg-[#EBD6A7] `}>Read More</div>
      </div>

    <footer className="w-full h-10 bg-[#EE9B01] text-center pt-2">
      Insert Brain. Press Start. Hack.
    </footer>

    </div>
  );
};

export default Herosection;