"use client"
import { getContact } from '@/sanity/sanity-utils';
import Link from 'next/link'
import React, { useState } from 'react'
import useSWR from 'swr';

export default function Contact({params}){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  function handleSubmit(e){
    e.preventDefault();

    if(name.length === 0){
      setNameError(true);
    }

    if(email.length === 0){
      setEmailError(true);
    }

    if(message.length === 0){
      setMessageError(true);
    }
  }

  const {data, error} = useSWR("contact", getContact);

  return (
    <div className="mt-10 md:mt-[94px]">
      <div className="grid lg:grid-cols-2 lg:gap-x-[125px] border-t border-[#33323D]/15 pt-8 lg:pt-12">

        <p className="heading2">Get in Touch</p>
        <div className="mt-6">
          <p className="text-[15px] text-[#33323D] opacity-80 leading-[30px] md:body1 mb-6">
            I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
          </p>
          <div className="flex items-center mb-8 lg:mb-0">
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
      </div>

      <div className="grid lg:grid-cols-2 gap-x-[125px] border-t border-[#33323D]/15 pt-8 lg:pt-12 lg:mt-12 mb-20 md:mb-24 lg:mb-[109px]">
        <p className="heading2">Contact Me</p>
        <form className="mt-6 md:mt-8 lg:mt-0" onSubmit={handleSubmit}>

          <div>
            <label className="label mb-2 lg:mb-[17px]" htmlFor="name">Name</label>
            <input 
              className={`bg-black/10 py-[9px] px-4 w-full text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5FB4A2] ${nameError ? `ring-2 ring-[#F43030]` : null}`} 
              id="name" 
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
              placeholder="Jane Appleseed" />
            {nameError ? <span className="text-[10px] font-bold italic text-[#F43030]">This field is required</span> : null}
          </div>

          <div className="pt-6">
            <label className="label mb-2 lg:mb-[17px]" htmlFor="email">Email Address</label>
            <input 
              className={`bg-black/10 py-[9px] px-4 w-full text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5FB4A2] ${emailError ? `ring-2 ring-[#F43030]` : null}`} 
              id="email" 
              type="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setEmailError(false);
              }} 
              placeholder="email@example.com" />
            {emailError ? <span className="text-[10px] font-bold italic text-[#F43030]">This field is required</span> : null}
          </div>

          <div className="pt-6">
            <label className="label mb-2 lg:mb-[17px]" htmlFor="message">Message</label>
            <textarea 
              rows="4" 
              className={`resize-none bg-black/10 py-[9px] px-4 w-full text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5FB4A2] ${messageError ? `ring-2 ring-[#F43030]` : null}`}
              id="message"
              value={message}
              onChange={e => {
                setMessage(e.target.value);
                setMessageError(false);
              }} 
              placeholder="How can I help?"></textarea>
            {messageError ? <span className="text-[10px] font-bold italic text-[#F43030]">This field is required</span> : null}
          </div>

          <input type="submit" className="flex items-center bg-[#203A4C] hover:bg-[#5FB4A2] text-white uppercase w-fit py-[18px] px-[42px] tracking-[2px] mt-6 text-[12px]" value="Send message"/>
        </form>
      </div>
    </div>
  )
}