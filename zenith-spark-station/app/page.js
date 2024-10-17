
import Image from "next/image";
import { metadata } from "./layout";
import About from "./components/landingpage/About";

export default function Home() {
  return (
    <>
      <div className="w-full h-auto pt-32 flex flex-col items-center justify-around relative bg-black">
       <div className="z-10">
        <About/>
       </div>
        <div className="w-full h-full absolute top-0 left-0">
          <video 
          preload={metadata}
            src="/videos/videobg.mp4" 
            className="w-full h-full object-cover opacity-40" // Reduced opacity
            autoPlay 
            loop 
            muted 
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
