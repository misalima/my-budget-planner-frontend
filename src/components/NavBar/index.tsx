import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className="flex items-center gap-12">
        <Link href={'/'}><button className="rounded-md px-2 py-1 text-blue text-base font-semibold transition-all duration-75 hover:outline hover:outline-2">Home</button></Link>
        <Link href={'/'}><button className="rounded-md px-2 py-1 text-blue text-base font-semibold transition-all duration-75 hover:outline hover:outline-2">About</button></Link>
        <Link href={'/'}><button className="rounded-md px-2 py-1 text-blue text-base font-semibold transition-all duration-75 hover:outline hover:outline-2">Contact</button></Link>
        <Link href={'/login'}><button className="px-3 rounded-md outline outline-3 outline-offset-2 text-blue text-lg font-semibold transition-all hover:bg-blue hover:text-white hover:outline-blue ">Login</button></Link>
    </div>
  );
}
