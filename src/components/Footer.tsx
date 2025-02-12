import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Footer = () => {
  return (
    <footer className=' h-20 flex items-center border-t bg-white'>
        <MaxWidthWrapper>
            <div className='flex flex-col text-center text-violet-700 mt-4 text-sm'>
                <p className=''>Dash Dine Food Services</p>
                <p className=''>All Rights Reserved</p>
            </div>
        </MaxWidthWrapper>
    </footer>
  )
}

export default Footer