import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-center bg-[#EBD6A7] py-2 text-[#053125]">
      <ul className="flex w-full justify-center items-center text-xl gap-8">

        <div className="flex border-t-2 border-b-2 border-[#93A39A] py-1.5 px-6 gap-15">
          {['Timeline', 'Instruction', 'Rewards'].map((item) => (
            <li key={item} className="relative hover:cursor-pointer w-20 hover:text-[#E72E0A] text-center group list-none" >
              {item}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-center scale-x-0 bg-[#E72E0A] transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
          ))}
        </div>

        <div className="w-64 flex justify-center">
          <div
            className="bg-[#E72E0A] h-12 w-full shadow-lg flex  text-white text-3xl justify-center items-center"
            style={{
              clipPath:
                'polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%, 10% 50%)',
            }}
          >CODE ARCADE</div>
        </div>


        <div className="flex border-t-2 border-b-2 border-[#93A39A] py-1.5 px-6 gap-6">
          
          {['Sponsors', 'FAQs', 'About'].map((item) => (
            <li key={item} className="relative hover:cursor-pointer w-20 hover:text-[#E72E0A] text-center group list-none" >
              {item}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-center scale-x-0 bg-[#E72E0A] transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
          ))}
        </div>

      </ul>
    </header>
  )
}

export default Header