import Projects from '@/components/Projects'
import ProjectsHero from '@/components/ProjectsHero'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="overflow-hidden">
        <ProjectsHero />
        
        <Projects />
      </div>
    </>
  )
}

export default page