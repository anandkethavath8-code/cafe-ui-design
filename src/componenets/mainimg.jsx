import React from 'react'

export default function Mainimg() {
  return (
    <div className="relative w-full h-140 overflow-hidden">

      <img
        className="absolute inset-0 w-full h-full object-cover "
        src="https://i.pinimg.com/1200x/86/8a/54/868a545bf0f29931413a8d7ee2ac8fbd.jpg"
        alt="intro image"
      />

      <div className="relative z-10 flex h-full items-center justify-center text-center text-[#3b2418]">

        <div>
          <p className="mb-2 font-serif text-lg italic">
            Welcome to Our Café
          </p>

          <h1 className="font-serif text-5xl font-bold leading-tight">
            Good Coffee,
            <br />
            Great Moments
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-6">
            Savor the finest coffee, delicious treats and cozy moments
            made especially for you.
          </p>

          <button className="mt-6 rounded-full bg-[#70401f] px-7 py-3 text-sm font-semibold text-white hover:shadow-xl">
            VIEW OUR MENU
          </button>
        </div>

      </div>
    </div>
  )
}
