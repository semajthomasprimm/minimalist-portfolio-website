'use client'
import React, { useState } from 'react'
import { Public_Sans } from 'next/font/google'
import Link from 'next/link'
import useSWR from 'swr'
import { getNav } from '@/sanity/sanity-utils'

const public_sans = Public_Sans({ subsets: ['latin'] })

export default function Nav(){
    const [open, setOpen] = useState(false);
    const {data, error} = useSWR("nav", getNav);

    return (
        <div className="mt-8 md:mt-16 flex justify-between items-center relative">
            <a href="/"><img src={data?.logo?.image} alt={data?.logo?.alt}/></a>
            <div className={`hidden md:block ${public_sans.variable}`}>
                <Link className="uppercase mr-[42px] hover:text-[#5FB4A2] text-[12px]" href="/">Home</Link>
                <Link className="uppercase mr-[42px] hover:text-[#5FB4A2] text-[12px]" href="/portfolio">Portfolio</Link>
                <Link className="uppercase hover:text-[#5FB4A2] text-[12px]" href="/contact">Contact Me</Link>
            </div>
            <div className="block md:hidden">
                {open 
                ? <button onClick={() => setOpen(false)}><img src={data?.closedMenuIcon?.image} alt={data?.closedMenuIcon?.alt} /></button>
                : <button onClick={() => setOpen(true)}><img src={data?.openMenuIcon?.image} alt={data?.openMenuIcon?.alt} /></button>
                }
            </div>
            {open ? 
                <div className="absolute right-0 top-[53px] z-50 bg-[#33323D] flex flex-col items-center py-10 pl-[65px] pr-[63px] md:hidden">
                    <Link className="text-white uppercase mb-8 hover:text-[#5FB4A2] text-[12px]" href="/">Home</Link>
                    <Link className="text-white uppercase mb-8 hover:text-[#5FB4A2] text-[12px]" href="/portfolio">Portfolio</Link>
                    <Link className="text-white uppercase hover:text-[#5FB4A2] text-[12px]" href="/contact">Contact Me</Link>
                </div> 
            : null}
        </div>
    )
}


