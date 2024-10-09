import { motion } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from './Navbar';
import { mobileMenuSlide } from '@/utils/motion';
import { usePathname } from 'next/navigation';
import FlipLink from './FlipLink';


const MobileNav = ({ toggle, setToggle }) => {
    const url = usePathname();
    return (
        <motion.button
            variants={mobileMenuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen w-full bg-tertiary fixed right-0 top-0 
            text-white -z-10"
        >
            <div className="h-full py-[30%] px-[10%] flex flex-col justify-between">
                <div className="flex flex-col gap-4 mt-20">
                    {
                        navLinks.map((link, index) => (
                            <motion.a
                                href={link.id}
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.2 + 0.3,
                                    ease: "easeInOut",
                                    type: "spring"
                                }}
                                exit={{ scale: 0, opacity: 0 }}
                                className={`${url === link.id ? "text-white" : "text-secondary"} 
                                text-2xl font-medium my-2 text-left z-50 cursor-auto pointer-events-auto`}
                            >
                                {link.title}
                                <div className='w-full h-0.5 bg-white' />
                            </motion.a>
                        ))
                    }
                </div>

                <div className='w-full'>
                    <div className="flex w-full justify-between">
                        <a href="https://www.linkedin.com/in/musfiqur-rahman-8b8193265/"
                            target="new">
                            <img src="/linkedin.svg" alt="Linkedin" className="size-10" />
                        </a>

                        <a href="https://github.com/n4f1s" target="new" >
                            <img src="/github.svg" alt="GitHub" className="size-10" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.button>
    )
}

export default MobileNav