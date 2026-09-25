import React from 'react'

export default function Qualitysection() {
  return (
    <div className='w-full h-120 grid grid-cols-3 gap-8 ml-6 px-10 py-10'>
        <div className='w-100 bg-[#f7f1eb] border border-[#e5ddd5] text-center flex flex-col justify-content space-between gap-2'>
            <img
            className='w-full h-60 object-cover rounded-lg'
            alt='coffee img' 
            src='https://i.pinimg.com/736x/60/97/80/609780df1e1e65e958502c04ebf2f526.jpg'>
            </img>
            <div className="px-6 py-5 ">
                <h2 className='font-serif text-xl font-bold'>Quality Coffee</h2>
                <p>We source the finest beans and brew every cup to perfection</p>
                <button className='text-xs px-6 py-2 hover:bg-[#5f3319] text-white bg-[#75411f] rounded-lg mt-4'>LEARN MORE</button>
            </div>
        </div>

        <div className='w-100 bg-[#f7f1eb] border border-[#e5ddd5] text-center flex flex-col justify-content space-between gap-2'>
            <img
            className='w-full h-60 object-cover rounded-lg'
            alt='pastrie img' 
            src='https://i.pinimg.com/1200x/41/75/6e/41756e9914e0e07b2b3452838e8f3bc2.jpg'>
            </img>
            <div className="px-6 py-5">
                <h2 className='font-serif text-xl font-bold'>Fresh & Delicious</h2>
                <p>From pastries to meals,everything is made fresh daily.</p>
                <button className='text-xs px-6 py-2 hover:bg-[#5f3319] text-white bg-[#75411f] rounded-lg mt-4'>LEARN MORE</button>
            </div>
        </div>
        <div className='w-100 bg-[#f7f1eb] border border-[#e5ddd5] text-center flex flex-col justify-content space-between gap-2'>
            <img
            className='w-full h-60 object-cover rounded-lg'
            alt='cafe img' 
            src='https://i.pinimg.com/736x/17/b7/b1/17b7b15338ac79b41626e4b0fd32ca16.jpg'>
            </img>
            <div className="px-6 py-5">
                <h2 className='font-serif text-xl font-bold'>Cozy Atmosphere</h2>
                <p>A warm and welcoming space to relax,work,or catch up.</p>
                <button className='text-xs px-6 py-2 hover:bg-[#5f3319] text-white bg-[#75411f] rounded-lg mt-4'>LEARN MORE</button>
            </div>
        </div>
    </div>
  )
}
