"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const SideBar = () => {

    // const [storeName,setStoreName] = useState("")

    // useEffect(() => {
    //  fetch("/api/get-store",{method:"GET"}).then((data)=>console.log(data,"sidebar"));

    // }, [])
    

  return (
    <div className='sm:col-span-2 sm:border-r-2 border-r-primary sm:min-h-[100vh] w-full p:0'>
    <div>
        <h1 className='font-bold text-xl'>Dash Dine</h1>
    </div>

    <div className='flex sm:flex-col gap-8 mt-10 mb-10 sm:mb-0 '>
        <ol>
            <Link href='/dashboard/menu'>
            <li>Menu</li>
            </Link>
        </ol>

        <ol>
            <Link href='/dashboard/stats'>
            <li>Stats</li>
            </Link>
        </ol>

        <ol>
            <Link href='/dashboard/profile'>
            <li>Profile</li>
            </Link>
        </ol>
    </div>
</div>
  )
}

export default SideBar