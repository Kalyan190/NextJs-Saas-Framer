"use client"
import ArrowRight from '@/assets/arrow-right.svg';
import startImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import {motion,useScroll,useTransform} from "framer-motion";
import { useRef } from 'react';

export const CallToAction = () => {
   const sectionRef = useRef(null);
   const {scrollYProgress} = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
   })
   const translateY = useTransform(scrollYProgress, [0,1], [150,-150]);

  return (
   <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
         <div className='max-w-[540px] mx-auto relative'>
              <h2 className='text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>Sign up for free today</h2>
              <p className='text-center text-[20px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>
                 Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
              </p>
              <motion.img src={startImage.src} alt='startImage' width={360} height={360} className='absolute -left-[350px] -top-[137px] '
              style={{
               translateY
              }}
              />
              <motion.img src={springImage.src} alt='springImage' width={360} height={360} className='absolute -right-[331px] -top-[19px] ' 
              style={{
               translateY
              }}
              />
         </div>
           
       <div className="flex gap-2 mt-10 justify-center">
         <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text"><span>Learn more</span>
              <ArrowRight className="h-5 w-5 gap-1 "/>
              </button>
       </div>
      </div>
   </section>
  );
};
