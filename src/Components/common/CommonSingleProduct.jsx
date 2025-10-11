import React from 'react'

const CommonSingleProduct = () => {
  return (
    <>
    <div className='w-[360px] h-[306px] flex flex-col items-center justify-between shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.1)]'>
        <div className='w-full h-[268px] bg-gray-100'>
            {/* <img src="" alt="" /> */}
        </div>
        <div className='w-full h-fit flex items-center justify-between px-2'>
            <div className="h2 w-[156px]">
                <h2 className='text-base text-navyBlue font-normal font-josefin'>Comfort Handy Craft</h2>
                <div className='border-t-2 border-t-[#EEEFFB]'></div>
            </div>
            <div className='flex items-center gap-2'>
                <h2 className='text-base text-navyBlue font-normal font-josefin'>$42.00</h2>
                <h2 className='text-xs text-themePink font-normal font-josefin line-through'>$42.00</h2>
            </div>
        </div>
        
    </div>
    
    </>
  )
}

export default CommonSingleProduct