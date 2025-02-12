import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SideBar from '@/components/SideBar'
import React from 'react'
import { StoreVisitorsChart } from './StoreVisitorsChart'
import LiveOrderStatus from './LiveOrderStatus'
import KitcheManage from './KitcheManage'

const DashboardStats = () => {
  return (
    <>
    <MaxWidthWrapper>
    <div className='sm:grid sm:grid-cols-12'>
      <SideBar/>
      <div className='sm:col-span-10'>
      <div className="sm:flex justify-around py-5 ">
      <StoreVisitorsChart title="Current Orders" orders="20"/>
      <StoreVisitorsChart title="Total Orders" orders="20"/>
      </div>

      <div className="flex justify-around sm:flex-row flex-col sm:mb-10">
     
      <KitcheManage/>
      <LiveOrderStatus numTables={40}/>
      </div>
      </div>
    </div>
    </MaxWidthWrapper>

    </>
  )
}

export default DashboardStats