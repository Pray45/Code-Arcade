'use client';
import React, { useEffect, useState } from 'react';
import { Anton, Poppins } from "next/font/google";
import "./animate.css"

const anton = Anton({ subsets: ['latin'], weight: "400" });
const poppins = Poppins({ subsets: ['latin'], weight: "400" });
const poppinsBold = Poppins({ subsets: ['latin'], weight: "800" });

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    <div className='min-h-[100dvh] vs:min-h-screen 2xl:min-h-dvh w-full flex flex-col'>
      {/* NAVBAR */}
      <header className="flex flex-wrap justify-center items-center h-auto px-4 py-2 bg-[#EBD6A7] text-[#053125]">
        <div className='flex flex-wrap justify-center items-center gap-3 w-full max-w-7xl'>
          <p className={`${anton.className} hidden vs:flex text-xs md:text-xl 2xl:text-3xl border-y-[3px] border-[#93A39A] text-[#E72E0A] py-1`}>
            Insert Brain. Press Start. Hack.
          </p>
          <div className='mx-5 relative flex justify-center items-center'>
            <div class="l-shape rotate-180 absolute -left-5 "></div>
              <div className="w-35 md:w-40 2xl:w-60">
                <divrelative className={`${anton.className} bg-[#E72E0A] h-10 md:h-12 2xl:h-16 w-full shadow-md text-white text-xl md:text-2xl 2xl:text-4xl flex justify-center items-center`} style={{ clipPath: "polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%)" }}>
                  CODE ARCADE
                </divrelative >
              </div>
            <div class=" -right-5 l-shape absolute"></div>
          </div>
          <p className={`${anton.className} hidden vs:flex text-xs md:text-xl 2xl:text-3xl border-y-[3px] border-[#93A39A] text-[#E72E0A] py-1`}>
            Prepare For The Ultimate Battle
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className='flex-1 flex flex-col justify-around items-center vs:py-0 py-10 md:px-0 w-full'>
        <div>
          <h1 className={`${anton.className} text-[#EE9B01] text-center text-6xl vvs:text-7xl xl:text md:text-6xl 2xl:text-[200px] text-shadow-retro-yellow`}>
            COMING SOON
          </h1>

          <p className={`${poppins.className} text-white text-xs md:w-150 2xl:w-250 md:text-sm 2xl:text-2xl text-center mt-4`}>
            Get ready to enter the digital battlefield where code meets creativity.The most electrifying hackathon of 2025 is loading...
          </p>
        </div>

        <div className='w-full mt-5 vs:mt-0'>
          <h1 className={`${anton.className} text-[#E72E0A] text-5xl text-center md:text-5xl 2xl:text-8xl vs:mt-0 text-shadow-retro-red`}>
            LAUNCHING IN
          </h1>

          <section className='flex w-full flex-wrap items-center vs:justify-center justify-around px-2 vs:gap-2 md:gap-10 2xl:gap-16 mt-10 md:mt-10'>
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds }
            ].map(({ label, value }, i) => (
              <div key={i} className="flex flex-col items-center justify-center mb-10">
                <div className={`${anton.className} bg-[#EBD6A7] text-black font-bold text-5xl md:text-5xl 2xl:text-7xl vvs:w-21 vvs:h-21 w-18 h-18 md:w-24 md:h-24 2xl:w-32 2xl:h-32 rounded flex items-center justify-center shadow-[0_0_10px_#fdf3d1] vs:shadow-[0_0_25px_#fdf3d1]`}>
                  {String(value).padStart(2, '0')}
                </div>
                <h1 className={`${anton.className} text-white text-lg md:text-2xl 2xl:text-4xl mt-2 md:mt-4`}>{label}</h1>
              </div>
            ))}
          </section>
        </div>

        <div className='flex-col 2xl:w-4xl md:w-xl px-2 vs:mb-0 vs:mt-0 flex items-center'>
          <div className='bg-[#EBD6A7] w-full px-4 py-6 md:py-6 2xl:py-10 text-center shadow-[5px_5px_0_#004656]'>
            <p className={`${poppinsBold.className} text-[13px] md:px-10 md:text-lg 2xl:text-3xl text-black`}>
              Sharpen your skills, assemble your team, and get ready to code your way to victory!
            </p>
          </div>
          <div className='flex mt-4 max-w-3xl justify-between w-full'>
            <p className={`${poppinsBold.className} text-[12px] md:text-lg text-[#EE9B01]`} >Epic Challenges</p>
            <p className={`${poppinsBold.className} text-[12px] md:text-lg text-white `} >Amazing Prizes</p>
            <p className={`${poppinsBold.className} text-[12px] md:text-lg text-[#EBD6A7]`} >Non Stop Action</p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className='bg-[#AF2012] py-3 text-center text-[11px] md:text-base 2xl:text-xl'>
        <h1>© 2025 CodeArcade • Government Engineering College, Patan</h1>
      </footer>
    </div>
  );
};

export default ComingSoon;
