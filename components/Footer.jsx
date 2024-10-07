'use client'
import { Wrapper } from '@/hoc'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Footer = () => {
    return (
        <div className="bg-tertiary">
            <Wrapper className="flex items-center">
                <div className='grid md:grid-cols-12 w-full h-full'>
                    <div className='col-span-6'>
                        <Link
                            href="/"
                            className='flex items-center gap-2'
                        >
                            <Image
                                src='/logo.png'
                                alt='Logo'
                                width={64}
                                height={64}
                                className='object-contain'
                            />
                            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                                Nafis&nbsp;| Developer
                            </p>
                        </Link>

                        <Button className="my-6 ml-10">Download CV</Button>
                    </div>

                    <div className='col-span-3 space-y-6'>
                        <h1 className='text-xl'>
                            Contact Info
                        </h1>
                        <div>
                            <a href='mailto:musfiqurok@gmail.com'
                                target='new' className='text-secondary text-sm'>
                                musfiqurok@gmail.com
                            </a>
                        </div>
                        <p>
                            Khulna, Bangladesh
                        </p>
                    </div>

                    <div className='col-span-3 space-y-6 flex flex-col items-center'>
                        <h1 className='text-xl'>
                            Social Links
                        </h1>
                        <a href="https://www.linkedin.com/in/musfiqur-rahman-8b8193265/"
                            target="new"
                            className='flex items-center'
                        >
                            <Image
                                src="/linkedin.svg"
                                alt="Linkedin"
                                width={30}
                                height={30}
                            />
                            <p className='ml-2 text-sm'>
                                LinkedIn
                            </p>
                        </a>

                        <a href="https://github.com/n4f1s"
                            target="new"
                            className='flex items-center'
                        >
                            <Image
                                src="/github.svg"
                                alt="GitHub"
                                width={30}
                                height={30}
                            />
                            <p className='ml-2 text-sm'>
                                GitHub
                            </p>
                        </a>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer