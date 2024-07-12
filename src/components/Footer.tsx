import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    <div className="py-24  px-4  md:px-8 lg:px-16 vl:px-32 2xl:px-64  bg-gray-100 text-sm mt-24">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left  */}
        <div className="w-full md:w-1/2  lg:w-1/4 flex flex-col gap-8">
          <Link href='/'><div className="text-2xl tracking-wide">SHADE</div></Link>

          <address className='text-sm'>No:27, 6th street Iyyappa Nagar Madhuravoyal Chennai-600095</address>
          <span className='font-semibold'>shadhadeepak20@gmail.com</span>
          <span>+91 9025898151</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* Center  */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <div className=""><h1 className="font-medium text-lg ">COMPANY</h1></div>

            <div className="flex flex-col gap-6 mb-[50px]">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className=""><h1 className="font-medium text-lg">SHOP</h1></div>
            <div className="flex flex-col gap-6 mb-[50px]">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className=""><h1 className="font-medium text-lg">HELP</h1></div>
            <div className="flex flex-col gap-6 mb-[50px]">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* Right  */}
        <div className="w-full md:w-1/2  lg:w-1/4 flex flex-col gap-8">
          <h1 className='font-medium text-lg'>SUBCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions And Much More!!!</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-shadha  text-white">JOIN</button>
          </div>
          <span className='font-semibold'>Secure Payment</span>
          <div className="flex  mt-8 justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* Bootom */}
      <div className="flex flex-col gap-8 justify-center items-center mt-8 md:flex-row md:justify-between">
        <p>&copy;2024 Shadha deepak</p>
        <p ><span className='text-gray-400'>Language :</span>
          <span className='font-semibold'>United States | English</span>
        </p>
        <p><span className='text-gray-400'>Currently :</span><span className='font-semibold'>$USD</span></p>
      </div>

    </div>
  )
}

export default Footer