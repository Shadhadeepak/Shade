// 'use client';
import { WixClientContext } from "@/Context/WixContext";
import CategoriesList from "@/components/CategoriesList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { wixClientServer } from "@/lis/wixClientServer";
// import { useWixClient } from "@/hooks/useWixClient";
// import { wixClientServer } from "@/lis/wixClientServer";
// import { log } from "console";
import { Suspense } from "react";

// import { log } from "console";
import { useContext, useEffect } from "react";

const HomePage = async () => {
  const categoryId = '51eb8318-e733-963a-f31b-4a5972f55754'
  // const wixClient = useWixClient()
  // // console.log(wixClient)
  // useEffect(()=>{
  //   const getProducts = async ()=>{
  //     const res =  await wixClient.products.queryProducts().find();
  //     console.log(res);x`z hyy shadhaa ne ethu vara mudichi irukaa 

  //   }
  //   getProducts()
  // // },[wixClient])
  
  
  
  






  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 vl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Product</h1>
        <Suspense fallback={'loading'}>
          <ProductList categoryId={categoryId} limit={4} />
        </Suspense>

      </div>
      <div className="mt-24">
        <h1 className="text-2xl md:px-8 lg:px-16 vl:px-32 2xl:px-64 mb-12">Categories</h1>
        <Suspense fallback={'loading....'}>
          <CategoriesList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 vl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList categoryId={categoryId} limit={4}  />
      </div>
    </div>
  );
};

export default HomePage;
