"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const LiveOrderStatus = ({numTables}:{numTables:number}) => {
    const renderTooltips = () => {
        const order = "fullfilled"
        const tooltips = [];
        for (let i = 0; i < numTables; i++) {
          tooltips.push(
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger>
                <input key={i} className={`w-[30px] h-[30px] ${order === 'fullfilled' ? "border-2" : "bg-green-400"} rounded-lg m-1 text-center placeholder-black`} placeholder={String(i+1)} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Table No: {i+1}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        }
        return <div className="">{tooltips}</div>;
    };

  return (
    <Card className='flex flex-col justify-center items-center p-4 gap-10 sm:w-[45%] mt-10 mb-10 sm:mt-0 sm:mb-0'>
        <CardTitle>Live Order Status</CardTitle>
        <CardContent className=''>
        
            {
                renderTooltips()
            }
        </CardContent>
    </Card>
  )
}

export default LiveOrderStatus