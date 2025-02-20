import React from 'react'
import Menu from './Menu'
import Link from '../../../node_modules/next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {

  const user = false;
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className='text-2xl md:font-bold flex-1 md:text-center '>
        <Link href="/"> Joe's Pizza</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className='md:absolute top-3 r-2 lg:static flex items-center justify-center gap-1 cursor-pointer bg-orange-300 p-1 rounded-md'>
          <Image src="/phone.png" alt='' width={20} height={20} />
          <span>9082214399</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Order</Link>)}
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar
