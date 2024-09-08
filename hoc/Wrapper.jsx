'use client'
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { styles } from "@/app/styles";



const Wrapper = ({children, idName, refName}) => {

    return (
        <motion.section
            ref={refName}
            id={idName}
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            {children}
        </motion.section>
    )
}


export default Wrapper;