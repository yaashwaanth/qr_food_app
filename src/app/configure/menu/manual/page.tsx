import React from 'react'
import ManualMenu from './ManualMenu'
import { getStoreCategory } from './api'

interface PageProps{
  searchParams: Promise<{[key:string]:string | string[] | undefined}>
}

const Manual = async({searchParams}:PageProps) => {
    
  const {storeid} = await searchParams


  const cat = await getStoreCategory(storeid)

 
  console.log("store id ->",storeid);
  return (
    <div className='flex justify-center'>
        <ManualMenu storeid={storeid} cat={cat}/>
    </div>
  )
}

export default Manual