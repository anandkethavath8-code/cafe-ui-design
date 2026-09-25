import React from 'react'

export default function Menu() {
  return (
    <div>
    <div className='w-full h-100 grid grid-cols-4 gap-8 ml-6 px-10 pb-2 pt-5'>
        <div className='w-80 h-90 bg-[#f7f1eb] border border-[#e5ddd5] text-center flex flex-col justify-content space-between gap-2'>
            <img
            className='w-full h-60 object-cover rounded-lg'
            alt='coffee img' 
            src='https://i.pinimg.com/736x/60/97/80/609780df1e1e65e958502c04ebf2f526.jpg'>
            </img>
            <div className="px-6 py-5">
                <h1 className='font-serif text-xl font-bold'>Cappuccino</h1>
                <p>$3.50</p>
            </div>
        </div>

        <div className='w-80 h-90 bg-[#f7f1eb] border border-[#e5ddd5] text-center flex flex-col justify-content space-between gap-2'>
            <img
            className='w-full h-60 object-cover rounded-lg'
            alt='pastrie img' 
            src='https://i.pinimg.com/1200x/41/75/6e/41756e9914e0e07b2b3452838e8f3bc2.jpg'>
            </img>
            <div className="px-6 py-5">
                <h2 className='font-serif text-xl font-bold'>Chocolate Cake</h2>
                <p>$4.50</p>
            </div>
        </div>
        <div className='w-80 h-90 bg-[#f7f1eb] border border-[#e5ddd5] text-center flex flex-col justify-content space-between gap-2'>
            <img
            className='w-full h-60 object-cover rounded-lg'
            alt='cafe img' 
            src='https://i.pinimg.com/736x/4a/ad/1e/4aad1e0c2ca4724bf843386c8e777b85.jpg'>
            </img>
            <div className="px-6 py-5">
                <h2 className='font-serif text-xl font-bold'>Chicken Sandwich</h2>
                <p>$6.50</p>
            </div>
        </div>
        <div className='w-80 h-90 bg-[#f7f1eb] border border-[#e5ddd5] text-center flex flex-col justify-content space-between gap-2'>
            <img
            className='w-full h-60 object-cover rounded-lg'
            alt='cafe img' 
            src='https://i.pinimg.com/1200x/94/38/65/943865d41a8675c959ddf82aef1667ec.jpg'>
            </img>
            <div className="px-6 py-5">
                <h2 className='font-serif text-xl font-bold'>Iced Latte</h2>
                <p>$4.00</p>
            </div>
        </div>
    </div>
    <div className='flex justify-center'>
            <button className='text-xs h-12 w-50 px-6 py-2 hover:bg-[#5f3319] text-white bg-[#75411f] rounded-xl mt-4 '>VIEW FULL MENU</button>
    </div>
    </div>
  )
}
