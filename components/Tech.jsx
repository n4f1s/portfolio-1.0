'use client'
import { Wrapper } from '@/hoc'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
import { styles } from '@/app/styles'
import { DragIcons, technologies } from './DragIcons'




const Tech = () => {
  return (
    <Wrapper idName="Tech" className="mt-10">
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>
          Skills
        </p>
        <h2 className={styles.sectionHeadText}>
          Technologies
        </h2>
      </motion.div>

      <div className='md:mt-10'>

        <DragIcons />

      </div>
    </Wrapper>
  )
}

export default Tech