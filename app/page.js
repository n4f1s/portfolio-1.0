'use client';

import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import PageTwo from '@/components/PageTwo';



const Hero2 = dynamic(() => import('@/components/Hero2'), {
  ssr: false
});
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
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
    }, 1000); // Simulate loading delay

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
          </div>
        </>
      }
    </>
  );
}
