'use client'
import Image from 'next/image';
import React from 'react'
import { motion, useSpring, useScroll } from "motion/react"
interface CardProps {
    image: any; // URL or image path
    heading: string; // Card heading
    paragraph: string; // Card description
  }

const FeatureBox: React.FC<CardProps> = ({ image, heading, paragraph }) => {
    return (
        <div className=" mt-6 rounded-lg shadow-2xl px-6 pt-4 flex flex-col items-center max-w-lg h-80 border-black space-y-5 bg-white xl:h-96  z-1 ">
          {/* Image */}
          <motion.div className="mb-4" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
            <Image height={170} width={120} src={image} alt={heading} className='xl:h-40 '  />
          </motion.div>
          {/* Heading */}
          <motion.h3 className="text-lg font-semibold text-center mb-2" initial={{y:30, opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>{heading}</motion.h3>
          {/* Paragraph */}
          <motion.p className="text-sm  text-center" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} viewport={{once:true}}>{paragraph}</motion.p>
        </div>
      );
}

export default FeatureBox