
import React from 'react'
import Image from 'next/image'
import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import { wixClientServer } from '@/lis/wixClientServer'
import { Suspense } from 'react'


const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );


  return (
    <div className='px-4  md:px-8 lg:px-16 vl:px-32 2xl:px-64   relative' >
      {/* Campain  */}
      <div className="hidden bg-pink-50 px-4  sm:flex justify-between h-64">
        {/* text */}
        <div className="w-2/3 flex flex-col items-center justify-center ">
          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700 mb-5'>Grab up to 50% off on <br />Selected Product</h1>
          <button className='rounded-3xl bg-shadha text-white w-max py-3 px-5 text-sm hover:bg-white hover:text-shadha '>Buy Now</button>
        </div>
        {/* Image */}
        <div className="relative w-1/3 ">
          <Image src='/woman.png' alt='' fill className='object-contain ' />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      {/* Product  */}
      <h1 className='mt-12 text-xl font-semibold'>{cat.collection?.name} For You!</h1>
      <Suspense fallback={"loading..."}> 
        <ProductList categoryId={cat.collection?._id || "00000000-000000-000000-000000000001"} searchParams={searchParams} />

      </Suspense>
    </div>
  )
}

export default ListPage