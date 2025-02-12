"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'

const KitcheManage = () => {
  return (
   <Card className='flex flex-col justify-center items-center gap-3 sm:w-[45%] p-10 sm:p-0'>
    <CardTitle>Manage Kitchen</CardTitle>
    <CardContent className='flex flex-col gap-3'>
        <Button variant='outline' className='w-40'>Manage Menu</Button>
        <Button variant='default' className='w-40'>Go To Kitchen</Button>
        <Button variant='outline' className='w-40'>Download QR</Button>

    </CardContent>
   </Card>
  )
}

export default KitcheManage