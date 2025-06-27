import React from 'react'
import "./animate.css";
import { Anton, Poppins } from "next/font/google";

const anton = Anton({ subsets: ['latin'], weight: "400" });
const poppins = Poppins({ subsets: ['latin'], weight: "400" });

const Timeline = () => {

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 w-full text-center px-4">
        
        <h1 className={`${anton.className} text-6xl md:text-8xl text-[#EE9B01] text-shadow-retro-yellowww font-bold mb-15`}>
          TIMELINE
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
            {Array.from({ length: 8 }).map((_, index) => (

                <div key={index} className="flex flex-col items-center relative">
                    <div className='w-10 absolute -top-5 h-10 rounded-full bg-[#EE9B01]' ></div>
                    <div className="w-60 h-14 bg-[#AF2012] rounded-t-md shadow-md" />
                    <div className="w-60 h-44 bg-[#EBD6A7] rounded-b-md shadow-lg" />
                </div>

            ))}
        </div>
    
    </div>
  );
};

export default Timeline;
