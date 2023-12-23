import Image from 'next/image'

import Link from 'next/link'

import NavLink from './NavLink'

const links = [
    {href:'/',title:'Home'},
    {href:'/',title:'About'},
    {href:'/',title:'Portfolio'},
    {href:'/',title:'Contact'},
]

export default function Navbar() {
  return (
 <nav className='fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-90 '>
    <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
    <Link href="/" className='text-5xl text-white font-black'>LOGO</Link>
    <div className='menu'>
        <ul className='flex flex-row space-x-4'>
            {links.map((link)=>(
                <li key={link.title}>
                    <NavLink href={link.href} title={link.title} />
                </li>
            ))}
        </ul>
    </div>
    </div></nav>
  )
}
