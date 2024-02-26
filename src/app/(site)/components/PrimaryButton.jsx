import React, { useState } from 'react'

export default function PrimaryButton(){

    const [hover, setHover] = useState(false);

    function scrollToAbout(e){
        e.preventDefault();
        document.getElementById("about").scrollIntoView({
            behavior: "smooth"
        });

    }

    return (
        <button 
            className={`aboutBtn flex items-center bg-[#203A4C] text-white w-fit ${hover ? `bg-[#5FB4A2]` : null}`} 
            href="/" 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
            onClick={scrollToAbout}
        >
            <span className={`px-[16px] bg-[#1d3444] py-[18px] lg:py-[20px] ${hover ? `bg-[#56a292]` : null}`}>                
            {hover ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fillRule="evenodd"><path stroke="#FFFFFF" d="M0 9l8 4 8-4"/><path stroke="#80b9ad" opacity=".75" d="M0 5l8 4 8-4"/><path stroke="#80b9ad" opacity=".25" d="M0 1l8 4 8-4"/></g></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fillRule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4"/><path opacity=".5" d="M0 5l8 4 8-4"/><path opacity=".25" d="M0 1l8 4 8-4"/></g></svg> 
            }
            </span>
            <span className={`mx-[38px] md:py-[17px] lg:py-[18px]`}>ABOUT ME</span>
        </button>
    )
}