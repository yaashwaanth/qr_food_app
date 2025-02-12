'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import React from 'react'

const Signup = () => {  
  return (
    <div className='flex justify-center'>
      <Card className='sm:inline mt-10'>
        <CardTitle className='text-2xl text-center p-5'>Signup</CardTitle>
        <CardContent>
        <Button onClick={()=>signIn("google",{redirectTo:'/dashboard'})}><img src='/gl.png' className='w-5 h-5'/>Continue With Google</Button>
         
        </CardContent>
      </Card>
    </div>
  )
}

export default Signup