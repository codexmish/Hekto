import React from 'react'

const CommonOffer = ({img, head, text}) => {
  return (
    <>
    <div className='w-[140px] lg:w-[270px] h-[220px] lg:h-[320px] bg-white shadow-[0px_4px_11px_-6px_rgba(0,_0,_0,_0.35)] flex flex-col items-center justify-center gap-5'>
        <div className="img w-[40px] lg:w-[65px]">
            <img src={img} alt="" />
        </div>
        <h2 className='text-[16px] lg:text-[22px] text-navyBlue font-semibold font-josefin'>{head}</h2>
        <p className='text-xs lg:text-base text-[#1a0b5b50] font-bold font-lato text-center'>{text}</p>

    </div>
    
    </>
  )
}

export default CommonOffer