import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full h-18 '>
    <div className='flex items-center justify-between'>
        <div className='p-2'>
          <h1 className="text-4xl font-serif font-bold tracking-wide">
            CAFÉ
          </h1>

          <p className="text-xs tracking-[4px] text-gray-500">
            COFFEE & MORE
          </p>
        </div>
        <div className="flex items-center gap-10 pr-20">
            <a href='#' className="text-sm font-semibold hover:text-[#8b4f2c]">Home</a>
            <a href='#' className="text-sm font-semibold hover:text-[#8b4f2c]">About</a>
            <a href='#' className="text-sm font-semibold hover:text-[#8b4f2c]">Menu</a>
            <a href='#' className="text-sm font-semibold hover:text-[#8b4f2c]">Gallery</a>
            <a href='#' className="text-sm font-semibold hover:text-[#8b4f2c]">Blog</a>
            <a href='#' className="text-sm font-semibold hover:text-[#8b4f2c]">Contact</a>
            <button className="rounded-xl bg-[#8b4f2c] px-7 py-4 text-sm font-bold text-white">Order Online</button>
        </div>
    </div>
    </nav>
  )
}