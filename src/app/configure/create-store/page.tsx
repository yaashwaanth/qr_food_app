import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import StoreCreateForm from './StoreCreateForm'


const CreateStore = () => {
  return (
    <div className=''>
      <MaxWidthWrapper className='flex justify-center items-center  min-h-full mt-10'>
      <StoreCreateForm/>
      </MaxWidthWrapper>
    </div>
  )
}

export default CreateStore