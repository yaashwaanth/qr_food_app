import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SideBar from '@/components/SideBar'
import React from 'react'
import ProfileForm from './ProfileForm'


const DashboardProfile = () => {

   
  return (
    <>
    <MaxWidthWrapper>
    <div className='sm:grid sm:grid-cols-12 '>
        <SideBar/>

        <div className='sm:col-span-10  flex items-center justify-center p-2'> 
            <ProfileForm/>
        </div>
    </div>
    </MaxWidthWrapper>
    </>
  )
}

export default DashboardProfile