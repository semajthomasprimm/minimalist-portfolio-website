"use client"
import { getAuthor } from '@/sanity/sanity-utils';
import CTA from './components/CTA'
import PrimaryButton from './components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton';
import useSWR from 'swr';

export default function Home() {

  // Retrieves author info
  const {data, error} = useSWR("author", getAuthor);

  return (
    <>
      <div className="mt-10 md:mt-[47px] lg:mt-[54px]">

        <div className="md:relative">
          <img className="hidden lg:block" src={data?.homepageHeroDesktop} alt="Hero" />
          <img className="hidden md:block lg:hidden" src={data?.homepageHeroTablet} alt="Hero" />
          <img className="w-full block md:hidden" src={data?.homepageHeroMobile} alt="Hero" />

          <div className="md:absolute md:bottom-0 bg-white md:w-[514px] lg:w-[445px]">
            <p className="heading2 lg:heading1 mt-6 md:mt-[51px] lg:mt-[56px] mb-8 md:mb-12 lg:mb-[53px] md:max-w-[458px] lg:max-w-[390px]">{data?.heroBlurb}</p>
            <PrimaryButton />
          </div>
        </div>

      </div>
      <div id="about" className="mt-[150px] md:grid grid-cols-2 mb-[115px]">
        <div className="">
          <img className="hidden lg:block w-full" src={data?.profileDesktop} alt="Profile image" />
          <img className="hidden md:block lg:hidden w-full" src={data?.profileTablet} alt="Profile image" />
          <img className="w-full block md:hidden" src={data?.profileMobile} alt="Profile image" />
        </div>
        <div className="md:max-w-[350px] border-t border-b border-[#33323D]/15 mt-8 md:mt-0 pb-[3.188em] lg:pb-[46px] ml-0 md:ml-[69px] lg:ml-[125px]">
          <p className="heading2 mt-8 md:mt-[50px]">About Me</p>
          <p className="body1 mt-[28px] max-w-fit md:max-w-[335px] mb-[24px]">{data?.aboutDescription}</p>
          <SecondaryButton value="Go to portfolio" link="/portfolio" />
        </div>
      </div>
      <CTA />
    </>
  )
}