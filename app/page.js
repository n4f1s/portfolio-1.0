'use client';

import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import Navbar from '@/components/Navbar';
import PageTwo from '@/components/PageTwo';
import HeroLoader from '@/components/HeroLoader';
import { useRouter } from 'next/navigation';
import { Loader } from '@react-three/drei';


const Hero2 = dynamic(() => import('@/components/Hero2'), {
  ssr: false,
  loading: () => <Loader />
});
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false
});



export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingTime, setLoadingTime] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const startTime = performance.now();

    // Check if user has already visited the page
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      setLoading(false); // Skip the loader if the user has visited before
    } else {
      // For the first-time visitor
      const handleLoading = setTimeout(() => {
        const endTime = performance.now();
        setLoadingTime(endTime - startTime); // Calculate loading time
        setLoading(false);
        sessionStorage.setItem('hasVisited', 'true'); // Mark the user as having visited
      }, 3500); // Simulate a 3-second loading delay

      return () => clearTimeout(handleLoading);
    }
  }, []);


  let scrollThreshold = 200; 
  let scrollAmount = 0; 
  // Function to handle scroll attempt and navigate to the About page
  const handleScrollAttempt = (event) => {
    // Check if user is scrolling down
    scrollAmount += event.deltaY;
    if (scrollAmount >= scrollThreshold) {
      router.push('/pages/about');
    }
  };

  useEffect(() => {
    if (!loading) {
      window.addEventListener('wheel', handleScrollAttempt);

      return () => window.removeEventListener('wheel', handleScrollAttempt);
    }
  }, [loading]);

  return (
    <>
      {loading ? <HeroLoader loadingTime={loadingTime} /> :
        <>
          <Navbar />
          <PageTwo>
            <div className="relative z-0 bg-primary">
              <div className="w-full h-screen relative overflow-hidden">
                <Hero2 />
                <StarsCanvas />
              </div>
            </div>
          </PageTwo>
        </>
      }
    </>
  );
}
