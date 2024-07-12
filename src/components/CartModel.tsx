'use client'
import React from 'react'
import Image from 'next/image'
import { url } from 'inspector'
function CartModel() {
  const cartItem = true
  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartItem ? (
        <div className="">Cart is Empty</div>
      ) : ( 
        // \\list
    <>
    <h2 className='text-xl'>Shopping cart</h2>
      <div className='flex flex-col gap-8 '>
        {/* Item */}
        <div className="flex   gap-4">
          <Image src='https://images.pexels.com/photos/24907279/pexels-photo-24907279/free-photo-of-a-woman-sitting-on-the-sand-in-a-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={72} height={76} className='object-cover rounded-md' />
        <div className="flex flex-col justify-between w-full">
          {/* top */}
          <div className="">
            {/* tittle */}
            <div className="flex items-center justify-between gap-9"><h3 className='font-semibold '>the Product Name</h3><div className="p-1 bg-gray-100 rounded-sm ">$43</div></div>
            {/* decs */}
            <div className="text-sm text-gray-500">shadhahahah</div>
          </div>
          {/* bottom */}
          <div className="flex justify-between text-sm">
            <span className='text-gray-500'>Qty.2</span>
            <span className='text-blue-500 cursor-pointer'>Remove</span>
          </div>
        </div>
        </div>
        <div className="flex   gap-4">
          <Image src='https://images.pexels.com/photos/24907279/pexels-photo-24907279/free-photo-of-a-woman-sitting-on-the-sand-in-a-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={72} height={76} className='object-cover rounded-md' />
        <div className="flex flex-col justify-between w-full">
          {/* top */}
          <div className="">
            {/* tittle */}
            <div className="flex items-center justify-between gap-9"><h3 className='font-semibold '>the Product Name</h3><div className="p-1 bg-gray-100 rounded-sm ">$43</div></div>
            {/* decs */}
            <div className="text-sm text-gray-500">shadhahahah</div>
          </div>
          {/* bottom */}
          <div className="flex justify-between text-sm">
            <span className='text-gray-500'>Qty.2</span>
            <span className='text-blue-500 cursor-pointer'>Remove</span>
          </div>
        </div>
        </div>
      
      </div>
  {/* // Bottom */}
        <div className="">
          <div className="flex items-center justify-between font-semibold">
            <span className=''>SubTotal</span>
            <span className=''>$69</span>
          </div>
          <p className='text-sm text-gray-500 mt-2 mb-4'>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="flex -mt-6 justify-between text-sm">
          <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
          <button className='rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75'>Checkout</button>
        </div>

  </>    )

      }
    </div>
  )
}

export default CartModel