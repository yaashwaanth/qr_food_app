

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import SideBar from '@/components/SideBar';
import Link from 'next/link';
import React from 'react'

const UserDashboard = () => {
  return (
    <>
    <MaxWidthWrapper>
        <div className='w-full sm:grid sm:grid-cols-12' >
           <SideBar/>
            <div className='sm:col-span-10'></div>
        </div>
    </MaxWidthWrapper>
    </>
  )
}

export default UserDashboard;