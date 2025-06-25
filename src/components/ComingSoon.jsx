'use client';
import React, { useEffect, useState } from 'react';
import { Anton, Poppins } from "next/font/google";

const anton = Anton({ subsets: ['latin'], weight: "400" });
const poppins = Poppins({ subsets: ['latin'], weight: "400" });

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // SET YOUR LAUNCH DATE HERE
  const launchDate = new Date('2025-10-10T10:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center justify-between'>
      {/* NAVBAR */}
      <header className="flex min-w-screen bg-[#EBD6A7] py-1 2xl:py-5 md:py-2 text-[#053125]">
        <ul className="flex w-full justify-center items-center 2xl:gap-20 md:gap-10 gap-3 ">
          {/* LEFT NAV */}
          <p className={` ${anton.className} text-[10px] md:text-2xl 2xl:text-4xl flex border-[#93A39A] text-[#E72E0A]
            py-1 border-t-3  border-b-3
            md:py-1.5 md:border-t-3 md:border-b-3
            2xl:py-3 justify-around 2xl:border-t-5 2xl:border-b-5`}>
            Insert Brain. Press Start. Hack. 
          </p>

          {/* CENTER SHAPE */}
          <div className="w-20 2xl:w-85 md:w-54 flex justify-center">
            <div className={` ${anton.className} bg-[#E72E0A] h-8 2xl:h-18 md:h-14 w-full shadow-md flex text-white text-xs 2xl:text-5xl md:text-3xl justify-center items-center`} style={{ clipPath: "polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%)" }}>
              CODE ARCADE
            </div>
          </div>

          {/* RIGHT NAV */}
          <p className={` ${anton.className} text-[10px] md:text-2xl 2xl:text-4xl flex border-[#93A39A] text-[#E72E0A]
            py-1 border-t-3  border-b-3
            md:py-1.5 md:border-t-3 md:border-b-3
            2xl:py-3 justify-around 2xl:border-t-5 2xl:border-b-5`}>
            Prepare For The Ultimate Battle
          </p>
        </ul>
      </header>

      {/* MAIN CONTENT */}
      <div className='md:w-1/2 flex flex-col justify-center items-center'>
        <h1 className={`text-[#EE9B01] text-6xl md:text-7xl 2xl:text-[150px] ${anton.className} text-shadow-retro-yellow`} >COMING SOON</h1>

        <p className={`text-[10px] mt-4 2xl:text-2xl md:text-xs md:mt-2 text-center ${poppins.className}`}>Get ready to enter the digital battlefield where code meets creativity.</p>
        <p className={`text-[10px] 2xl:text-2xl md:text-xs text-center ${poppins.className}`}>The most electrifying hackathon of 2025 is loading...</p>

        <h1 className={`text-[#E72E0A] md:mt-3 mt-15 mb-5 text-5xl 2xl:mt-15 md:text-5xl 2xl:text-8xl ${anton.className} text-shadow-retro-red`} >LAUNCHING IN</h1>

        <section className='flex gap-2 md:gap-20 2xl:gap-30 md:mt-10 2xl:mt-20'>
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds }
          ].map(({ label, value }, i) => (
            <div key={i}>
              <div className='bg-[#EBD6A7] text-black font-bold text-4xl 2xl:text-7xl flex justify-center items-center w-20 h-20 md:w-25 md:h-25 2xl:w-50 2xl:h-55 rounded'>
                {String(value).padStart(2, '0')}
              </div>
              <h1 className={`2xl:text-5xl 2xl:mt-5 text-xl md:text-3xl text-center md:mt-3 mt-2 ${anton.className}`}>{label}</h1>
            </div>
          ))}
        </section>

        <div className='mx-2 mt-20 md:mx-0 md:w-160 2xl:w-290 w-full py-2 md:py-0 md:mt-5 2xl:mt-15 flex flex-col justify-center 2xl:h-30 md:h-20 bg-[#EBD6A7] '>
          <p className={`text-black text-center text-[12px] 2xl:text-4xl md:text-xl ${anton.className}`}>Sharpen your skills, assemble your team, and get ready</p>
          <p className={`text-black text-center text-[12px] 2xl:text-4xl md:text-xl ${anton.className}`}>to code your way to victory!</p> 
        </div>
      </div>

      {/* FOOTER */}
      <footer className='md:h-10 py-2 2xl:h-15 w-full bg-[#AF2012] self-end'>
        <h1 className='text-center text-[11px] md:pt-2 2xl:pt-4 2xl:text-2xl'>© 2025 CodeArcade • Government Engineering College, Patan</h1>
      </footer>
    </div>
  );
};

export default ComingSoon;
