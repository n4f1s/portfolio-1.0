"use client"
import React, { useEffect, useState } from 'react'
import { styles } from '@/app/styles'
import Link from 'next/link'
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import { NavMenuButtonVariants } from '@/utils/motion';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src='/logo.png'
            alt='Logo'
            className='size-16 object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Nafis &nbsp; <span className='sm:block hidden'>| Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} 
              text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Mobile menu button */}
          <MotionConfig
            transition={{
              duration: 0.3,
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

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 
          right-0 mx-4 my-2 min-w[140px] z-40 rounded-xl`}>
            <ul className='list-none flex flex-col justify-end items-center gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} 
                  hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar