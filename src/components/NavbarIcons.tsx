'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import CartModel from './CartModel'
function NavbarIcons() {
    const router = useRouter()
    const [isProfileOpen, SetisProfileOpen] = useState(false)
    const [isCartOpen, SetisCartOpen] = useState(false)

    const isLogedin = true
    function handleProfile() {
        if (!isLogedin) {
            router.push('/Login')
        }
        else
            SetisProfileOpen(!isProfileOpen)
    }







    
    return (


        <div className='flex items-center relative gap-4 xl:gap-6 '>
            <Image src='/profile.png' alt='' onClick={handleProfile} width={22} height={22} className='cursor-pointer' />
            {isProfileOpen && (
                <div className="absolute  p-4 pr-3 top-10 z-20 left-0 border-2 bg-white  border-gray-100 shadow-md ">
                    <Link href='/Login'>Profile</Link>
                    <div className="mt-2 cursor-pointer">Logout</div>
                </div>
            )}
            <Image src='/notification.png' alt='' width={22} height={22} className='cursor-pointer' />
            <div className="relative cursor-pointer">

                <Image src='/cart.png' alt='' width={22} height={22} className='cursor-pointer' onClick={() => SetisCartOpen(!isCartOpen)} />
            </div>
            {!isCartOpen ? (<div className="absolute -right-6 w-6 h-6 -top-3 bg-shadha rounded-full text-white flex items-center justify-center text-sm" >2</div>)
            :(
                <div className=""></div>
            )}
                {/* <div className="absolute -right-6 w-6 h-6 -top-3 bg-shadha rounded-full text-white flex items-center justify-center text-sm" >2</div> */}
                {
                    isCartOpen && <CartModel  /> 
                
                }
        </div>
    )
}

export default NavbarIcons