import Contact from '@/components/Contact';
import dynamic from 'next/dynamic';
import React from 'react'

const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false
});


const page = () => {
  return (
    <>
      <div className="relative z-0">
        <Contact />
        {/* <div className="hidden sm:block"> */}
          <StarsCanvas />
        {/* </div> */}
      </div>
    </>
  )
}

export default page