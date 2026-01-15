import { NavLinks } from '@/constant/constant'
import React from 'react'
import { FaCode } from 'react-icons/fa'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-[10000] fixed w-full'>
      <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
        
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
            <FaCode className='w-5 h-5 text-black' />
          </div>
          <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>
            Kirushikan
          </h1>
        </div>

        {/* Nav links */}
        <div className='hidden lg:flex items-center space-x-10'>
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Nav
