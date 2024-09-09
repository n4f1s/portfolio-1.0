import { About, Contact, Experience, Hero, StarsCanvas, Tech, Works } from "@/components";
// import Hero2 from "@/components/Hero2";
import ModelViewer from "@/components/Models/ModelWithAnimation";


export default function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-heroPattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        {/* <Hero2 /> */}
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
