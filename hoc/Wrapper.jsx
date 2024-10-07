'use client'
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { styles } from "@/app/styles";



const Wrapper = ({children, idName, refName, className}) => {

    return (
        <motion.section
            ref={refName}
            id={idName}
            variants={staggerContainer(0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.10 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0 ${className}`}
        >
            {children}
        </motion.section>
    )
}


export default Wrapper;