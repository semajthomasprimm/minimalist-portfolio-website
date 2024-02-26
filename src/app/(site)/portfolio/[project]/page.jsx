import React from 'react'
import SecondaryButton from '../../components/SecondaryButton';
import CTA from '../../components/CTA';
import { getProject } from '@/sanity/sanity-utils';

export default async function Project({params}){

  // Project slug
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="mt-10 md:mt-[94px]">
      <img className="hidden lg:block" src={project.heroDesktop} alt={`Hero image of ${project.name}`} />
      <img className="hidden md:block lg:hidden" src={project.heroTablet} alt={`Hero image of ${project.name}`} />
      <img className="block md:hidden" src={project.heroMobile} alt={`Hero image of ${project.name}`} />
      
      {/* <div className="grid lg:grid-rows-7 lg:grid-cols-5 lg:gap-x-28 mt-10 lg:mt-[115px] mb-16 md:mb-20 lg:mb-16"> */}
      <div className="grid lg:grid-cols-5 lg:gap-x-28 mt-10 lg:mt-[115px] mb-16 md:mb-20 lg:mb-16">
        
        <div className="lg:row-span-3 lg:col-span-2 border-t border-b border-[#33323D]/15 py-6 md:py-8 lg:py-12 grid md:grid-cols-2 lg:grid-cols-1 gap-x-3">
          <div>
            <p className="heading2">{project.name}</p>
            <p className="body1 mt-6 md:mt-[29px] block md:hidden lg:block">{project.shortDescription}</p>
            <p className="mt-6 md:mt-4 lg:mt-[23px] font-bold text-[#5FB4A2] text-[13px] lg:text-[16px]">{project.skills}</p>
            <p className="mt-[10px] lg:mt-4 font-bold text-[#5FB4A2] text-[13px] lg:text-[16px]">{project.technologies}</p>
            <span className="mt-8 md:mt-4 lg:mt-8 py-[14px] pl-8 pr-[36px]">
              <SecondaryButton value="View website" link="/" />
            </span>
          </div>
          <p className="text-[15px] leading-[30px] text-[#33323D]/80 hidden md:block lg:hidden">{project.shortDescription}</p>
        </div>

        <div className="lg:row-span-4 lg:col-span-3">
          <div className="mt-12 md:mt-10 lg:mt-0">
            <p className="heading3">Project Background</p>
            <p className="text-[15px] leading-[30px] text-[#33323D]/80 lg:body1 mt-[28px]">{project.longDescription}</p>
          </div>
          <div className="mt-10">
            <p className="heading3">Static Previews</p>

            <img className="mt-[28px] hidden lg:block" src={project.previewImage1Desktop} alt={`Preview image 1 of ${project.name}`} />
            <img className="mt-10 hidden md:block lg:hidden" src={project.previewImage1Tablet} alt={`Preview image 1 of ${project.name}`} />
            <img className="mt-10 block md:hidden" src={project.previewImage1Mobile} alt={`Preview image 1 of ${project.name}`} />


            <img className="mt-8 hidden lg:block" src={project.previewImage2Desktop} alt={`Preview image 2 of ${project.name}`} />
            <img className="mt-[31px] hidden md:block lg:hidden" src={project.previewImage2Tablet} alt={`Preview image 1 of ${project.name}`} />
            <img className="mt-8 block md:hidden" src={project.previewImage2Mobile} alt={`Preview image 2 of ${project.name}`} />
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 border-t border-b border-[#33323D]/15 mb-16 md:mb-0">

        <div className="border-r py-6 md:py-[33px] lg:py-8">
          <a className="md:flex items-center" href={project.prevProjectSlug}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/></svg>
            <div className="mt-4 md:mt-0 md:ml-8">
              <p className="heading3">{project.prevProject}</p>
              <p className="body1 opacity-50">Previous Project</p>
            </div>
          </a>
        </div>

        <div className="py-6 md:py-[33px] lg:py-8 justify-self-end">
          <a className="flex flex-col md:flex-row items-end md:items-center" href={project.nextProjectSlug}>
            <div className="mt-4 md:mt-0 md:mr-8 order-last md:order-first">
              <p className="heading3">{project.nextProject}</p>
              <p className="body1 opacity-50 text-right">Next Project</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/></svg>
          </a>
        </div>

      </div>

      <CTA />
    </div>
  )
}