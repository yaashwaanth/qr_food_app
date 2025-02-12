'use client'
import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

type Props = {
    text:string
}

const CustomButton = (props: Props) => {
  return (
   <Button onClick={async()=> await signIn()}>{props.text}</Button>
  )
}

export default CustomButton