'use client'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { motion, useSpring, useScroll } from "motion/react"
import { signOut, useSession } from "next-auth/react"
import { signIn } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'



const Navbar = () => {

    const { data } = useSession()
    console.log(data,"data from Nab");

    const userLoggedIn = data?.user ? true : false
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
  })
    
  return (
    <nav className='sm:sticky top-0 h-14 inset-x-0  border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all z-[99999999]'>
        <MaxWidthWrapper>
            <div className='flex h-14 justify-between items-center  '>
            <Link href="/">
             Dash Dine
            </Link>

            <div className='flex justify-between space-x-7'>
                {
                    userLoggedIn ? 


                    <>
                    <div className='flex gap-2 justify-center items-center'>
                    <p className='hidden sm:block'>{data?.user?.name}</p>
                    <Link href="/dashboard" className={buttonVariants({
                        size:'sm'
                    })}>
                    Dashboard
                    </Link>
                    </div>

                    <Button variant='outline' size='sm' onClick={() =>signOut()}>
                        Logout
                    </Button>
                    </> : 
                    <>
                     <Link href='/signup' className={buttonVariants({
                        size:'sm',
                        className:"bg-violet-800 font-semibold"

                    })} 
                   
                    >
                    Login
                    </Link>
                    </>
                }
            </div>
            </div>

        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar