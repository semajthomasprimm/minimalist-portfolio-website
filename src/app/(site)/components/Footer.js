'use client'
import { getFooter } from '@/sanity/sanity-utils';
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr';

export default function Footer(){

  const {data, error} = useSWR("footer", getFooter);

  return (
    <div className="md:px-10 lg:px-[70px] xl:px-[165px] py-[56px] md:py-[28px] lg:py-6 flex flex-col md:flex-row justify-between items-center bg-[#33323D]">
      <div className="flex flex-col md:flex-row items-center">
        <a className="md:block md:mr-12 mb-10 md:mb-0" href="/"><img src={data?.logo?.image} alt={data?.logo?.alt}/></a>
        <div className="md:self-center flex flex-col md:flex-row items-center md:items-start mb-10 md:mb-0">
            <Link className="text-white uppercase mb-8 md:mb-0 md:mr-[15px] lg:mr-[42px] hover:text-[#5FB4A2] text-[12px]" href="/">Home</Link>
            <Link className="text-white uppercase mb-8 md:mb-0 md:mr-[15px] lg:mr-[42px] hover:text-[#5FB4A2] text-[12px]" href="/portfolio">Portfolio</Link>
            <Link className="text-white uppercase hover:text-[#5FB4A2] text-[12px]" href="/contact">Contact Me</Link>
        </div>
      </div>
      <div className="flex items-center">
        {data?.icons && 
          <>
          {data?.icons.map((icon, i) => {
            if(i === data?.icons.length-1){
              return <Link key={i} href={icon.url}><img src={icon.image} alt={icon.alt} /></Link>
            } else{
              return <Link key={i} className="mr-[15px]" href={icon.url}><img src={icon.image} alt={icon.alt} /></Link>
            }
          })}
          </>
        }
      </div>
    </div>
  )
}