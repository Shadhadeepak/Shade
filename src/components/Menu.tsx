'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
function Menu() {
    const[open,setOpen]=useState(false)
    
    return (
    <div className=''>
           <Image  alt=""  width={28} height={28} className='cursor-pointer' onClick={()=>setOpen(!open)} src='/menu.png' />       
        {open && (
            <div className="flex flex-col  absolute text-white left-0 top-20 items-center justify-center gap-8 bg-black w-full h-[calc(100vh-80px)] text-2xl z-10 ">
                <Link href='/'>Homepage</Link>     
                <Link href='/'>Shop</Link>     
                <Link href='/'>Deals</Link>     
                <Link href='/'>About</Link>     
                <Link href='/'>Contact</Link>     
                <Link href='/'>Logout</Link>     
                <Link href='/'>Cart(0)</Link>     
            </div>
        )}
    </div>
  )
}

export default Menu