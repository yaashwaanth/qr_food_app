"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { getStoreDetails } from '../profile/action'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const MenuProfile = () => {
    const router = useRouter()
    const {data,isLoading} = getStoreDetails()
  return (
      <div className={cn('sm:col-span-10  flex flex-col gap-4 p-2',isLoading ? "justify-center items-center": "")}>
      {
        isLoading ? <Loader2 className="animate-spin"/> :
        <><div className='text-center space-y-4'>
            <h2 className='font-bold text-xl'>Add Items to Virtual Menu</h2>
            <p>You can either add the food items manually or drop an image of your existing menu.</p>
          </div><div className='flex flex-col gap-5 cursor-pointer'>
              <Button onClick={() => router.push(`/configure/menu/manual?storeid=${data.store.id}`)}>
                Add Food Items Manually
              </Button>

              <Button onClick={() => router.push(`/configure/menu/ai?storeid=${data.store.id}`)}>
                Drop Your Existing Menu
              </Button>
            </div></>
      }
    </div>
  )
}

export default MenuProfile