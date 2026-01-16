import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
      <div className='relative z-10 flex flex-col items-center'>
        <Image
          src="/images/IMG_2016.JPG"
          alt="hero image"
          width={150}
          height={150}
          className='rounded-full border-8 border-[#0c0c48aa]'
        />
      </div>
    </div>
  )
}

export default Hero
