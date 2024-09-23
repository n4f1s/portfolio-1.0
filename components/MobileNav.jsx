import { motion } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from './Navbar';
import { mobileMenuSlide } from '@/utils/motion';


const MobileNav = ({ toggle, setToggle, active, setActive }) => {

    return (
        <motion.div
            variants={mobileMenuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen w-[70vw] bg-tertiary fixed right-0 top-0 
            text-white -z-10"
        >
            <div className="h-full py-[20%] px-[10%] flex flex-col justify-between">
                <div className="flex flex-col text-4xl gap-4 mt-20">
                    {
                        navLinks.map((data, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.2 + 0.5,
                                        ease: "easeInOut",
                                        type: "spring"
                                    }}
                                    exit={{ scale: 0, opacity: 0 }}
                                >
                                    <Link
                                        href={`#${data.id}`}
                                        onClick={() => {
                                            setActive(data.id);
                                            setToggle(!toggle);
                                        }}
                                        className={`${active === data.id ? "text-white" :
                                            "text-gray1"} cursor-pointer`}
                                    >
                                        {data.title}
                                    </Link>

                                    <div className='w-full h-0.5 bg-white' />
                                </motion.div>
                            )
                        })
                    }
                </div>

                <div className='w-full'>
                    <div className="flex w-full justify-between text-[12px]">
                        <a>Facebook</a>
                        <a>LinkedIn</a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MobileNav