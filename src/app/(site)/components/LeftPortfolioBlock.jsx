import React from 'react'
import SecondaryButton from './SecondaryButton'

export default function LeftPortfolioBlock(project){
  return (
    <div key={project.name} className="mt-10 md:mt-[94px] grid md:grid-cols-2 md:gap-x-[69px] lg:gap-x-[125px]">
        <div className="place-self-center">
            <img className="hidden lg:block" src={project.portfolioPageImageDesktop} alt="profile" />
            <img className="hidden md:block lg:hidden" src={project.portfolioPageImageTablet} alt="profile" />
            <img className="block md:hidden" src={project.portfolioPageImageMobile} alt="profile" />
        </div>
        <div className="flex flex-col justify-center md:max-w-[350px] border-t border-b border-[#33323D]/15 mt-8 md:mt-0 py-6 md:py-0">
            <p className="heading2 md:mt-8 lg:mt-[50px]">{project.name}</p>
            <p className="body1 mt-6 md:mt-[29px] lg:mt-[28px]">{project.shortDescription}</p>
            <span className="mt-6 md:mt-[35px] lg:mt-6 md:mb-[50px] lg:mb-[46px]">
                <SecondaryButton value="View project" link={`/portfolio/${project.slug}`} />
            </span>
        </div>
    </div>
  )
}