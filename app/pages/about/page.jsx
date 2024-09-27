import About from '@/components/About'
import React from 'react'
import Experience from '@/components/Experience'
import Tech from '@/components/Tech'
import MyExpertise from '@/components/MyExpertise'


const page = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <About />

                <MyExpertise />

                <Experience />

                <Tech />
            </div>
        </>
    )
}

export default page