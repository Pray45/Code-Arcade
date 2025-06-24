import FloatingEffect from "@/components/FloatingEffect";
import Timeline from "@/components/Timeline";
import Herosection from "@/components/Herosection";

export default function Home() {


  return (
    <div className="min-h-screen w-full bg-[#329194] p-1">
      <FloatingEffect />
      <Herosection/>
      <Timeline />
    </div>
  );
}
