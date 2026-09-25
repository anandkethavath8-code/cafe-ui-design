import React from 'react'

export default function Footer() {
  return (
    <div className='mt-4 h-90 py-6 px-6 flex justify-between'>
        <div className='ml-15 w-100 h-70 py-6 px-6 flex flex-col justify-center text-center'>
            <h6 className='font-serif text-4xl font-bold mb-4'>Visit Us Today</h6>
            <p className='text-sm'>We'd love to welcome you to our cafe,come for the coffee,stay for the good vibes!</p>
            <div>
            <button className="ml-0 mt-6 rounded-full bg-[#70401f] px-7 py-3 text-sm font-semibold text-white hover:shadow-xl">
            FIND OUR LOCATION
            </button>
        </div>
        </div>
        <div className='flex gap-10'>
            <div>
            <img 
                className='h-75 w-60 rounded-lg'
                src='https://i.pinimg.com/736x/4a/d0/7b/4ad07b4bd6cd50ff1f1388c1bd9644ed.jpg'>
            </img>
            </div>
            <div>
            <img 
                className='h-75 w-60 rounded-lg'
                src='https://i.pinimg.com/736x/21/74/32/2174329b8ef1603c1cbc68bd9ef5865a.jpg'>
            </img>
            </div>
            <div>
            <img 
                className='h-75 w-60 rounded-lg'
                src='https://i.pinimg.com/736x/6d/40/f8/6d40f8f08fc344a8646cd92580c01bae.jpg'>
            </img>
            </div>
        </div>
    </div>
  )
}
