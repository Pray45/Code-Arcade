"use client"

import { React, useState,useEffect   } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../Pages/animate.css"
import "../app/globals.css";
import { Anton, Poppins } from "next/font/google";

const anton = Anton({ subsets: ['latin'], weight: "400" });
const poppins = Poppins({ subsets: ['latin'], weight: "400" });

const Header = () => {

    const [open, setOpen] = useState(false);
    const menuItems = ['Timeline', 'Instruction', 'Rewards', 'Sponsors', 'FAQs', 'About Us'];

    useEffect(() => {
      document.body.style.overflow = open ? 'hidden' : 'auto';
      return () => (document.body.style.overflow = 'auto');
    }, [open]);


  return (
    <div>
      
      <header className="flex justify-center items-center h-auto px-4 py-2 bg-[#EBD6A7] text-[#053125] ">
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

          <button onClick={() => setOpen(!open)} className="absolute w-8 h-8 z-51 right-3 top-3">
            <motion.span
              animate={open ? { rotate: 45, y: 6, backgroundColor:"#EBD6A7"  } : { rotate: 0, y: 0, backgroundColor:"#329194"  }}
              className="absolute left-0 top-0 h-1 w-full bg-[#329194] rounded origin-left"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={open ? { opacity: 0, backgroundColor:"#EBD6A7"  } : { opacity: 1, backgroundColor:"#329194" }}
              className="absolute left-0 top-3.5 h-1 w-full bg-[#329194] rounded"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: 0, backgroundColor:"#EBD6A7"  } : { rotate: 0, y: 0, backgroundColor:"#329194" }}
              className="absolute left-0 top-7 h-1 w-full bg-[#329194] rounded origin-left"
              transition={{ duration: 0.3 }}
            />
          </button>

        </div>
      </header>

    <div className="relative   lg:hidden z-50">
      {/* Hamburger / Close button */}

      {/* Full-screen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full min-h-full bg-[#AF2012] flex flex-col justify-center items-center gap-6 z-50"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                className={`${anton.className} text-3xl text-white`}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>



    </div>
  )
}

export default Header
