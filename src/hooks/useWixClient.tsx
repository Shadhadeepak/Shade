'use client'
import { useContext } from "react";
import { WixClientContext } from "@/Context/WixContext";



export const useWixClient =()=>{
    return useContext(WixClientContext)
}
