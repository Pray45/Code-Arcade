import "./animate.css";
import React from 'react'

const Herosection = () => {
  return (
    
    <div className="flex min-h-screen justify-around pb-20">
     
      <div className="min-h-full mb-10 flex flex-col justify-center">
        <h1 className="text-8xl text-shadow-retro-red text-[#E72E0A] font-anton text-shadow">CODE</h1>
        <h1 className="text-8xl text-shadow-retro-red text-[#E72E0A] font-anton text-shadow">ARCADE</h1>
        <h1 className="text-8xl text-shadow-retro-yellow text-[#EE9B01] font-anton text-shadow">HACKATHON</h1>
        <p className="w-100 mt-5 font-sans font-bold">
            A thrilling state-level hackathon bringing together bright minds to innovate, collaborate, and build impactful tech solutions in a high-energy, competitive environment.
        </p>

        <div className="flex mt-10 gap-20">
          <button className="bg-[#AF2012] cursor-pointer btn-shadow-red text-[#EBD6A7] py-2 px-4">REGISTER NOW</button>
          <button className="bg-[#EBD6A7] cursor-pointer btn-shadow-yellow text-black py-2 px-4">Read More...</button>
        </div>

      </div>

      <div className="flex relative justify-center w-[35%]">
        <img src="./flyes.svg" className="floating-svg top-20 z-10 w-50 -left-35 absolute" alt="" />
        <img src="./final ghost.svg" className="floating-svg z-10 bottom-10 w-25 right-0 absolute" alt="" />
        <img src="./finaltrophy.svg" className="scale-120" alt="" />
      </div>

    </div>
    
  )
}

export default Herosection  