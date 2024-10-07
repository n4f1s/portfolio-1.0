import { motion } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from './Navbar';
import { mobileMenuSlide } from '@/utils/motion';
import { usePathname } from 'next/navigation';
import FlipLink from './FlipLink';


const MobileNav = ({ toggle, setToggle }) => {
    const url = usePathname();
    return (
        <motion.div
            variants={mobileMenuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen w-[70vw] bg-tertiary fixed right-0 top-0 
            text-white -z-10"
        >
            <div className="h-full py-[30%] px-[10%] flex flex-col justify-between">
                <div className="flex flex-col gap-4 mt-20">
                    {
                        navLinks.map((link, index) => {
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
                                    <li
                                        key={link.id}
                                        className={`${url === link.id ? "text-white" : "text-secondary"} 
                                        text-[18px] font-medium cursor-pointer`}
                                    >
                                        <FlipLink href={`${link.id}`} className="text-2xl">
                                            {link.title}
                                        </FlipLink>
                                    </li>

                                    <div className='w-full h-0.5 bg-white' />
                                </motion.div>
                            )
                        })
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
        </motion.div>
    )
}

export default MobileNav