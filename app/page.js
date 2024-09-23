'use client';

import { useState, useEffect } from 'react';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import dynamic from "next/dynamic";
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';



const Hero2 = dynamic(() => import('@/components/Hero2'), {
  ssr: false
});
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false
});
const VideoScreen = dynamic(() => import('@/components/VideoScreen'), {
  ssr: false
});


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    // Simulate fetching data or other loading tasks
    const handleLoading = setTimeout(() => {
      const endTime = performance.now();
      setLoadingTime(endTime - startTime); // Calculate loading time
      setLoading(false);
    }, 2000); // Simulate loading delay

    return () => clearTimeout(handleLoading);
  }, []);

  return (
    <>
      {loading ? <Loader loadingTime={loadingTime} /> :
        <>
          <Navbar />

          <div className="relative z-0 bg-primary">
            <div className="w-full h-screen relative overflow-hidden">
              <Hero2 />
              <StarsCanvas />
            </div>
            <About />
            <div className="w-full h-full relative overflow-hidden">
              <Experience />
            </div>
            <Tech />
            {/* <VideoScreen /> */}
            <Works />
            <div className="relative z-0">
              <Contact />
              <div className="hidden sm:block">
                <StarsCanvas />
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
}
