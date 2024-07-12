'use client'
import React, { useState } from 'react'
import Image from 'next/image'

// const images = [
//     {
//         id: 1,
//         url: "https://images.pexels.com/photos/25188494/pexels-photo-25188494/free-photo-of-close-up-of-a-cup-of-coffee-on-a-tray.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id: 2,
//         url: "https://images.pexels.com/photos/25255070/pexels-photo-25255070/free-photo-of-two-women-walking-down-a-narrow-alleyway-in-a-small-town.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id: 3,
//         url: "https://images.pexels.com/photos/25798552/pexels-photo-25798552/free-photo-of-striped-umbrellas-on-a-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id: 4,
//         url: "https://images.pexels.com/photos/25703972/pexels-photo-25703972/free-photo-of-champagne-glass-between-statues.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
// ]

const ProductImages = ({item}:{item:any}) => {
    const [index, setIndex] = useState(0)

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src={item[index].image?.url}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                    loading='lazy'
                />
            </div>
            <div className="flex justify-between gap-4 mt-8 ">
                {item.map((item: any, i: number) => (
                    <div
                        className="w-1/4 h-32 relative gap-4 mt-8  cursor-pointer"
                        key={item._id}
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={item.image.url}
                            alt=""
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                            loading='lazy'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages
