import React from 'react'

export default function SecondaryButton(params){
  return (
    <a className="block" href={params.link}>
        <div className="block w-fit uppercase border border-[#33323D] hover:bg-[#33323D] hover:text-white py-[14px] lg:py-[17px] pl-8 pr-[36px] text-[12px] tracking-[2px]">
            {params.value}
        </div>
    </a>
  )
}