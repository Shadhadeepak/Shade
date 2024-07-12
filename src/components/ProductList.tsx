import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { wixClientServer } from '@/lis/wixClientServer';
import { collections, products } from '@wix/stores';
import DOMPurify from 'isomorphic-dompurify';
import Pagination from './Pagination';
import { parse } from 'path';
const ProductList = async (
  
  {
    categoryId,
    limit,
    searchParams,
    
  }: {
    categoryId: string;
    limit?: number;
    searchParams?:any
   
  }) => {
    const PRODUCT_PER_PAGE = 8
    const wixClient = await wixClientServer();
    const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(searchParams?.page ? parseInt(searchParams.page)*(limit || PRODUCT_PER_PAGE): 0)
 
  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    
    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    else if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
    console.log(sortBy);
  }

  const res = await productQuery.find();
  // console.log(res); // Handle the response

  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap '>
        {res.items.map((product:products.Product)=>(

            <Link href={'/'+product.slug} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' key={product._id}>
            <div className="relative w-full h-80">

            <Image src={product.media?.mainMedia?.image?.url || '/product.png'} alt='' fill sizes='20vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500' />
           {
            product.media?.items &&(
              <Image src={product.media?.items[1]?.image?.url || "/product.png"} alt='' fill sizes='20vw' className='absolute object-cover rounded-md'/>

            )
           }
            
            </div>
        <div className="flex justify-between">
            <span className='font-medium'>{product.name}</span>
            <span className='font-semibold'>${product.price?.price}</span>
        </div>
       {
        product.additionalInfoSections &&
         <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(            product.additionalInfoSections.find((section:any)=>section.title === 'shortDesc')?.description || '')}}>
          {

          }
        </div>
        }
        <button className='rounded-2xl ring-1 ring-shadha w-max text-shadha py-2 px-3 text-sm hover:bg-shadha hover:text-white'>Add To Cart</button> 
        </Link>
        
        ))}
        
        < Pagination  currentPage={res.currentPage || 0 } hasNext={res.hasNext()} hasPrev={res.hasPrev()} />
    </div>
)

}

export default ProductList