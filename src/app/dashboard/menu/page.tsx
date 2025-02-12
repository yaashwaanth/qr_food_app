import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SideBar from '@/components/SideBar'
import { Button } from '@/components/ui/button'
import React from 'react'
import MenuProfile from './MenuProfile'
import { getStoreDetails } from '../profile/action'

const DashboarMenu = () => {


  return (
    <>
    <MaxWidthWrapper>
    <div className='sm:grid sm:grid-cols-12'>
    <SideBar/>
    <MenuProfile/>
    </div>
    </MaxWidthWrapper>
    </>
  )
}

export default DashboarMenu