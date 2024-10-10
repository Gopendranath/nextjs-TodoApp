import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex py-3 flex-wrap justify-around'>
        <h1 className='text-lg font-semibold'>Todo App</h1>
        <ul className='flex gap-[40px] text-m'>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product">
                Product
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar