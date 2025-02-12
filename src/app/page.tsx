'use client'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import cheers from "@/assets/Cheers.png"
import burger from "@/assets/Hamburger.png"
import bowl from "@/assets/BowlFood.png"
import steam from "@/assets/BowlSteam.png"
import p1 from "@/assets/p1.png"
import p2 from "@/assets/p2.png"
import p3 from "@/assets/p3.png"
import banner from "@/assets/banner.png"
import FeatureBox from "@/components/FeatureBox";
import eat from "@/assets/table.png";
import experience from "@/assets/experience.png";
import pay from "@/assets/pay.png"
import { PLAN_FEATURES } from "@/data/Constants";
import Plans from "@/components/Plans";
import { motion, useSpring, useScroll } from "motion/react"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"
import { useSession } from "next-auth/react"
import { useState } from "react";

export default function Home() {

  const cardsData: { image: string; heading: string; paragraph: string }[] = [
    {
      image: experience, // Replace with your image paths
      heading: 'Enhanced Customer Experience',
      paragraph:
        'Provide a seamless and convenient way for customers to browse menus and place orders.',
    },
    {
      image: eat,
      heading: 'Contactless Ordering',
      paragraph:
        'Minimizes physical contact and ensures a safe and hygienic ordering process for customers and staff.',
    },
    {
      image: pay,
      heading: 'Increased Revenue',
      paragraph:
        'With Dash Dine, you can maximize table turnover and increase sales with faster service.',
    },
  ];
  return (
  <div className="bg-slate-50">
   <section>
   {/* <Content /> */}
    <div className="w-full flex  justify-around absolute mt-28 ">
    <Image src={cheers} alt="img" className="opacity-45" />
    <Image src={bowl} alt="img" className="opacity-45"/>
    </div>
     <MaxWidthWrapper className="flex justify-center ">
        <div className="flex-col flex justify-center mt-44">
         <div className="text-center">
         <motion.div className="flex w-full  justify-center space-x-6 items-center"  initial={{ opacity: 0,y: 10 }}
         animate={{ opacity:1,y:0, }} transition={{type:"spring",duration:1.8,ease:"easeOut"}} >
           <h1 className="text-3xl lg:text-5xl  font-mono  font-bold mb-5  text-violet-700 ">Welcome To Dash Dine</h1>
           </motion.div>
           <p className="text-wrap  font-semibold">Where Ordering Meets Convenience, Discover A Seamless Dining <br/> Experience At Your Fingers.</p>
           <Image src={burger} alt="img" className="absolute lg:ml-96  mt-4 opacity-45  sm:hidden lg:block"/>
 
           <Button className="mt-8">Get Started</Button>
           <Image src={steam} alt="img" className="absolute ml-20 -mt-7 xl:ml-24 xl:-mt-8 opacity-45" />
           <p className="text-sm mt-4 font-thin cursor-pointer">Try for free</p>
         </div>
        
        </div>
     </MaxWidthWrapper>
    </section>
    <section>
     <MaxWidthWrapper>
      <motion.div
      className="sm:flex sm:flex-row flex flex-col items-center justify-center mt-10 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 3 }}
    >
      <Image src={p1} alt="img" className="sm:block sm:w-80 hidden  lg:hover:scale-105 m-4" />
  <Image src={p2} alt="img" className="sm:block sm:w-80 hidden  mt-4 lg:hover:scale-105" />
  <Image src={p3} alt="img" className="sm:block sm:w-80 hidden lg:hover:scale-105" />
    </motion.div>



    <div className="w-full xl:px-0 hidden lg:block  lg:px-24 ">
    <div className="w-full rounded-xl bg-violet-900 mt-11">
       <Image src={banner} alt="Save Paper" className="w-full pt-16 lg:pt-12 pb-0"/>
     </div>
    </div>
     </MaxWidthWrapper>
    </section>
  {/*  why dash dine */}
     <section>
       <MaxWidthWrapper>
        <motion.div className="flex items-center flex-col  lg:flex-row lg:space-x-20 lg:justify-around mt-20 p-9" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}>
        {cardsData.map((card, index) => (
           <FeatureBox
             key={index}
             image={card.image}
             heading={card.heading}
             paragraph={card.paragraph}
           />
         ))}
        </motion.div>
 
        {/*  plans*/}
        <h2 className="text-3xl text-center mb-10 mt-20 text-violet-700 font-mono"> Our Plans</h2>
        <div className="flex flex-col gap-16 items-center lg:flex-row w-full lg:space-x-20 justify-center pb-10">
        {PLAN_FEATURES.map((plan, index) => (
         <Plans
           key={index}
           plan={plan.plan}
           price={plan.price}
           duration={plan.duration}
           features={plan.features}
         />
       ))}
        </div>
       </MaxWidthWrapper>
     </section>
  </div>
  );
}


  