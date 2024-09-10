import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import ModelViewer from "@/components/Models/ModelWithAnimation";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import dynamic from "next/dynamic";


const Hero2 = dynamic(() => import('@/components/Hero2'), {
  ssr: false
});
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="w-full h-screen relative overflow-hidden">
          <Hero2 />
          {/* <StarsCanvas /> */}
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <div className="h-full w-full flex justify-center">
          <ModelViewer />
        </div> */}
        <div className="relative z-0">
          <Contact />
        <StarsCanvas />
        </div>
      </div>
    </>
  );
}
