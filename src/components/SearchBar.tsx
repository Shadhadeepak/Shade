'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
function SearchBar() {
    const router=useRouter()
    function handleEvent(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const name=formData.get('name') as string
        if(name){
            router.push(`/List?name=${name}`)
        }
    }
    return (
    <form action="" onSubmit={handleEvent} className='flex justify-between flex- bg-gray-100 flex-1 p-2 gap-4 rounded-md'>
        <input type="text"  name='name' placeholder='search' id=""  className='flex flex-1 bg-transparent outline-none'/>
        <button className='cursor-pointer'>
            <Image src='/search.png' width={16} height={16}  alt=''/>
        </button>
    </form>
  )
}

export default SearchBar