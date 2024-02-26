import React from 'react'
import CTA from '../components/CTA'
import { getProjects } from '@/sanity/sanity-utils'
import LeftPortfolioBlock from '../components/LeftPortfolioBlock';
import RightPortfolioBlock from '../components/RightPortfolioBlock';

export default async function Portfolio(){

  const projects = await getProjects();

  return (
    <>
      {
        projects.map((project, i) => {
          return i % 2 === 0 ? <LeftPortfolioBlock key={i} {...project}/> : <RightPortfolioBlock key={i} {...project}/>
        })
      }
      <CTA />
    </>
  )
}