'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { ArrowDown, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem
  } from "@/components/ui/dropdown-menu"
import { createStoreCategory } from './api'
import { useToast } from "@/hooks/use-toast"




  interface Item {
   id: string;
   name: string;
   storeId: string
   
}



//   const CATEGORIES = [
//     "Pizza",
//     "Burger",
//     "Pasta",
//     "Mexican",
//     "Starters"
//   ]

  
  
const ManualMenu = ({storeid,cat}:{storeid:string | string[] | undefined,cat:Item[] }) => {

    const [createCategory,setCreateCategory] = useState<string>("")
    const [category,setCategory] = useState<string>("")
    const { toast } = useToast()
    const [item,setItem] = useState([
        {
            itemName: "",
            itemPrice: 0
        }
    ])

    const addItem = () => {
        setItem(prev => [
            ...prev,
            {
                itemName: "",
                itemPrice: 0
            }
        ])
    }


    const createNewCategory = async() => {

        if(storeid){
         const category =  await  createStoreCategory(storeid,createCategory)
         console.log("category",category);
         
         setCreateCategory("")
         toast({
            title: `${createCategory} Added`,
            description: "Add Food Items Now!!!",
          })
        }
    }



  return (
    <div className='sm:w-[50%] sm:mt-10'>
        <Card className='flex flex-col justify-center items-center gap-4'>
            <CardTitle className='mt-4 text-2xl'>Add/Create Category</CardTitle>
            <CardContent className='flex flex-col gap-5'>
                <div className='flex gap-5'>
                <input className='border outline-none border-black rounded-sm p-1' placeholder='Ex: Burger,Pizza ....' value={createCategory} onChange={(e)=>setCreateCategory(e.target.value) }/>
                <Button disabled={createCategory==="" ? true : false} onClick={()=> createNewCategory()}>Create Category <PlusIcon/></Button>
                </div>
                <hr/>
                <div className=' flex flex-col w-full'>
               <div className=' flex gap-5'>
                <input className='border outline-none border-black rounded-sm p-1'  value={category}/>
               <DropdownMenu >
                <DropdownMenuTrigger className='flex bg-black text-white py-2 px-3 justify-center items-center gap-2 rounded-lg'>Select <ArrowDown size={15}/></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {
                        cat.map((item)=> <DropdownMenuCheckboxItem key={item.id}  onCheckedChange={() =>setCategory(item.name)} >{item.name}</DropdownMenuCheckboxItem>)
                    }
                 
                </DropdownMenuContent>
                </DropdownMenu>
               </div>
                
                {
                    category !== "" ? 
                    <>
                    
                    {
                        item.map((_,index)=>  
                        <div className='border rounded-sm p-5 inline-block mt-5' key={index}>
                        <div className='flex gap-2'>
                        <h4 className='font-bold'>Item Name</h4>
                        <input placeholder='item name...' className='border-b outline-none select-none'/>
                        </div>

                        <div className='flex gap-3'>
                        <h4 className='font-bold'>Item Price</h4>
                        <input placeholder='item price...' className='border-b outline-none select-none'/>
                        </div>
                    </div>)
                    } 
                    </> : null
                }
                </div>
                <CardFooter className='flex justify-center'>
                <Button onClick={()=>addItem()}>Add Item</Button>
               

                </CardFooter>

                {
                    category !== "" && item.length >= 1 ? 
                    <Button onClick={()=>addItem()}>Save</Button> : null
                }
            </CardContent>
        </Card>
    </div>
  )
}

export default ManualMenu