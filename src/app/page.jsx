import Header from "@/components/Header";
import "./globals.css";
import Herosection from "@/components/Herosection";
import FloatingEffect from "@/components/FloatingEffect";
import Timeline from "@/components/Timeline";

export default function Home() {

  return (

    <div className="min-h-screen w-full bg-[#329194] p-1">

      <FloatingEffect/>  

      <Header/>
      <Herosection/>
      <Timeline/>

    </div>

  )

}