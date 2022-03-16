import Link from 'next/link'
import React from 'react'
import { useSession, signOut } from "next-auth/react"
const Header = () => {
  const {data: session} = useSession();

  return (
    <header className='bg-white w-full py-5 shadow-md absolute top-0'>
      <div className='max-w-3xl mx-auto w-full flex justify-between items-center px-5'>
        <div className='text-lg font-semibold'><Link href='/'>Flowery</Link></div>
        {
          session ? <span className='cursor-pointer' onClick={() => signOut()}>Logout</span> : <div className='flex'>
          <Link href="/auth/login"><span className='ml-4 cursor-pointer'>Login</span></Link>
          <Link href="/auth/register"><span className='ml-4 cursor-pointer'>Register</span></Link>
        </div>
        }
      </div>
    </header>
  )
}

export default Header