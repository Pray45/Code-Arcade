"use client"

import { React, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../Pages/animate.css"
import "../app/globals.css";
import { Anton, Poppins } from "next/font/google";

const anton = Anton({ subsets: ['latin'], weight: "400" });
const poppins = Poppins({ subsets: ['latin'], weight: "400" });

const Header = () => {

    const [ isDiaplay, setisDiaplay ] = useState(false)

  return (
    <div>
      
      <header className="flex justify-center items-center h-auto px-4 py-2 bg-[#EBD6A7] text-[#053125]">
        <div className="flex justify-center items-center lg:gap-3">

          {/* Left Navigation */}
          <section className={`${anton.className} vs:px-0 lg:px-10 2xl:px-15 gap-5 lg:gap-10 2xl:gap-20 hidden lg:flex lg:text-xl 2xl:text-3xl border-y-[3px] border-[#93A39A] py-1`}>
            {["Timeline", "Instruction", "Rewards"].map((text, index) => (
              <div key={index} className="relative w-20 2xl:w-30 text-center group text-[#053125] hover:text-[#E72E0A] duration-200">
                {text}
                <span className="absolute left-0 -bottom-0.5 h-[3px] w-full origin-center scale-x-0 bg-[#E72E0A] transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </section>
          
          {/* Center Logo with L-Shapes */}
          <div className="mx-5 2xl:mx-13 relative flex justify-center items-center">
            {/* Left L-shape */}
            <div className="l-shape rotate-180 absolute 2xl:-left-10 -left-5 bg-[#679181] 2xl:h-[60px] 2xl:w-[60px] h-[40px] w-[40px]"></div>
          
            {/* Center Logo */}
            <div className="w-35 md:w-40 2xl:w-60">
              <div className={`${anton.className} bg-[#E72E0A] h-10 md:h-12 2xl:h-16 w-full shadow-md text-white text-xl md:text-2xl 2xl:text-4xl flex justify-center items-center`} style={{ clipPath: "polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%)" }}>
                CODE ARCADE
              </div>
            </div>
          
            {/* Right L-shape */}
            <div className="l-shape absolute 2xl:-right-10 -right-5 bg-[#679181] 2xl:h-[60px] 2xl:w-[60px] h-[40px] w-[40px]"></div>
          </div>
          
          {/* Right Navigation */}
          <section className={`${anton.className} vs:px-0 lg:px-10 2xl:px-15 gap-5 lg:gap-10 2xl:gap-20 hidden lg:flex lg:text-xl 2xl:text-3xl border-y-[3px] border-[#93A39A] py-1`}>
            {["Sponsors", "FAQs", "About Us"].map((text, index) => (
              <div key={index} className="relative w-20 2xl:w-30 text-center group text-[#053125] hover:text-[#E72E0A] duration-200">
                {text}
                <span className="absolute left-0 -bottom-0.5 h-[3px] w-full origin-center scale-x-0 bg-[#E72E0A] transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </section>


          <section className='lg:hidden '>
            <img src="./ham.svg"  onClick={() => setisDiaplay(!isDiaplay)} className='w-8 absolute top-3 right-3 vs:top-4' alt="" />
          </section>

        </div>
      </header>

      <AnimatePresence>
        {isDiaplay && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-3 top-15 z-40"
          >
            <ul>
              {["Timeline", "Instruction", "Rewards", "Sponsors", "FAQs", "About Us"].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`${anton.className} text-center text-white py-3 px-10 bg-[#AF2012] my-3 rounded-md shadow-lg`}
                >
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Header
