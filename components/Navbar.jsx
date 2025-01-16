"use client"
import React, { useEffect, useState } from 'react'
import { styles } from '@/app/styles'
import Link from 'next/link'
import { MotionConfig, motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { NavMenuButtonVariants } from '@/utils/motion';
import MobileNav from './MobileNav';
import FlipLink from './FlipLink';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/pages/about",
    title: "About",
  },
  {
    id: "/pages/projects",
    title: "Projects",
  },
  {
    id: "/pages/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // If the Mobile Menu is active scroll disable, else scroll enable
  useEffect(() => {
    toggle
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [toggle]);

  // Show navbar when scrolling up hide when scrolling down
  const { scrollY } = useScroll();

  const [navBg, setNavBg] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 250) {
      setHidden(true);
      setNavBg(true);
    } else if (latest < 250) {
      setNavBg(false);
    }
    else {
      setHidden(false);
    }
  })

  const url = usePathname();

  return (
    <motion.nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-40 
      ${!navBg ? "bg-transparent" : "bg-slate-800/50 backdrop-blur-sm"}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href="/"
          className='flex items-center gap-2'
        >
          <Image
            src='/logo.png'
            alt='Logo'
            width={64}
            height={64}
            priority
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Nafis &nbsp; <span className='sm:block hidden'>| Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${url === link.id ? "text-white" : "text-secondary"} 
              text-[18px] font-medium cursor-pointer`}
            >
              <FlipLink href={`${link.id}`}>
                {link.title}
              </FlipLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className={`${toggle ? "" : "md:hidden"} flex flex-1 justify-end items-center`}>
          {/* Mobile menu button */}
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={false}
              animate={toggle ? "open" : "closed"}
              onClick={() => {
                setToggle(!toggle);
              }}
              className="relative h-10 w-20 rounded-full transition-colors hover:bg-white/20"
            >
              <motion.span
                variants={NavMenuButtonVariants.top}
                className="absolute h-1 w-10 bg-white"
                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              />
              <motion.span
                variants={NavMenuButtonVariants.middle}
                className="absolute h-1 w-10 bg-white"
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
                variants={NavMenuButtonVariants.bottom}
                className="absolute h-1 w-5 bg-white"
                style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                  left: "calc(50% + 10px)",
                }}
              />
            </motion.button>
          </MotionConfig>

          <AnimatePresence mode="wait">
            {toggle &&
              <MobileNav
                toggle={toggle}
                setToggle={setToggle}
              />
            }
          </AnimatePresence>

        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar