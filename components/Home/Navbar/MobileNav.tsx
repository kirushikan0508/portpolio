"use client"
import { NavLinks } from '@/constant/constant'
import React from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full"

  return (
    <div className="lg:hidden">
      
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 bg-black/70 z-[100002] transition-opacity duration-500
          ${showNav ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      ></div>

      {/* Side Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-cyan-800 z-[100050]
          flex flex-col justify-center space-y-6 text-white
          transform transition-transform duration-500
          ${navOpen}
        `}
      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className='w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className='absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 cursor-pointer'
        />
      </div>
    </div>
  )
}

export default MobileNav
