import React from 'react'
import { pizzas } from '@/data'
import Link from 'next/link'
import Image from 'next/image'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map(item => (
        <Link className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50' href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className='relative h-[80%]'>
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className=" flex items-center justify-between font-bold">
            <h1 className='text-2xl uppercase'>{item.title}</h1>
            <h2 className='group-hover:hidden'>${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md ">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
