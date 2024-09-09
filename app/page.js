import About from "@/components/About";
import { StarsCanvas } from "@/components/canvas";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero2 from "@/components/Hero2";
import ModelViewer from "@/components/Models/ModelWithAnimation";
import Tech from "@/components/Tech";
import Works from "@/components/Works";


export default function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        {/* <div className="bg-heroPattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div> */}
        <div className="w-full h-screen relative overflow-hidden">
          <Hero2 />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="h-screen w-full flex justify-center">
          <ModelViewer />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}
