import React from 'react'
import SecondaryButton from './SecondaryButton'

export default function CTA(){
  return (
    <div className="mb-20 md:my-24 lg:my-[150px] flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="md:max-w-[350px]">
          <p className="heading2">Interested in doing a project together?</p>
        </div>
        {/* <div className="basis-[113px] lg:basis-[534px]"> */}
        <div className="hidden md:block md:basis-[113px] lg:basis-[37.08%]">
          <hr className="border-black/15" />
        </div>
        <div className="self-center mt-10 md:mt-0">
          {/* <a className="lg:mt-[24px] lg:mb-[46px] block" href="/contact"> */}
          {/* <a className="block" href="/contact">
            <div className="block w-fit uppercase border border-[#33323D] hover:bg-[#33323D] hover:text-white py-[17px] pl-8 pr-[36px]">Contact Me</div>
          </a> */}
          <SecondaryButton value="Contact Me" link="/contact" />
        </div>
    </div>
  )
}