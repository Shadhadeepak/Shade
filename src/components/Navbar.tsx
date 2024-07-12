import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import SearchBar from './SearchBar'
import NavbarIcons from './NavbarIcons'
function Navbar() {
  return (
    <div className='h-20 px-4  md:px-8 lg:px-16 vl:px-32 2xl:px-64  relative'>
      {/* Mobile */}
      <div className="h-full flex items-center md:hidden justify-between">
        <Link href='/'>
          <div className="text-2xl tracking-wide">SHADE</div>
        </Link>
        <Menu />
      </div>
      {/* bigger screen */}
      <div className="hidden md:flex items-center h-full gap-8 ">
        {/* left */}
        <div className="w-1/3 flex gap-2  xl:w-1/2  xl:gap-12items-center ">
          <Image src='/logo.png' alt='' width={24} height={24} />
          <Link href='/'><div className="text-2xl tracking-wide ">SHADE</div></Link>
            <div className="hidden xl:flex gap-4  ml-4 items-center">
                <Link href='/'>Home</Link>     
                <Link href='/'>Shop</Link>     
                <Link href='/'>Deals</Link>     
                <Link href='/'>About</Link>     
            </div>

        </div>
        {/* right */}
        <div className="w-2/3 flex items-center justify-between gap-8 xl:w-1/2">
          <SearchBar />
          < NavbarIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar