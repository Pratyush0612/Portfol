import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/mypic2.jpg";
import {motion } from "framer-motion"
import { useEffect, useRef } from "react";
import Typed from "typed.js";
const container=(delay)=>({
    hidden:{x:100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
})

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
      y:[10,-10],
      transition: {
          duration:duration,
          ease:"linear",
          repeat: Infinity,
          repeatType:"reverse",
      }
    }  
  })


const Hero = () => {
    const el=useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developer","Machine Learning Engineer" ], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 40,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            smartBackspace: true,
      loop: true,
      showCursor: true,
    //   cursorChar: "!"
          });
      
          // Destropying
          return () => {
            typed.destroy();
          };
        }, []);
        

  return (
    <div className="border-b border-gray-600 pb-4 lg:mb-30 ">
    <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
     <motion.h1 
     variants={container(0)}
     initial="hidden"
     animate="visible"
     className="pb-14 text-4xl font-thin tracking-tight lg:mt-16
            lg:text-8xl text-left text-red-500">Pratyush Tyagi
               </motion.h1>
            <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate="visible"
            className="bg-gradient-to-r from-pink-600
             via-slate-600 to-red-600 bg-clip-text text-3xl 
             tracking-tight text-transparent">
                   {/* className="bg-gradient-to-r from-pink-300
             via-slate-500 to-purple-500 bg-clip-text text-3xl 
             tracking-tight text-transparent"> */}
                <span ref={el}></span>
               
            </motion.span>
            {/* <motion.p */}
            {/* //  variants={container(1)}
            //  initial="hidden"
            //  animate="visible" */}
        </div>
            <div className="mt-5 text-neutral-500">
        <p>Discover my journey through 
        cutting-edge projects and technical expertise showcased 
        on my dynamic portfolio website</p>
        </div>
    </div>
    <div className="rounded-2xl w-full lg:w-1/2 lg:p-3">
        <div className="flex-box justify-center">
            <motion.div 
       variants={iconVariants(2.3)}
       initial="initial"
       animate="animate"
        className="w-full lg:p-2">
           <div className="flex items-center justify-center">
           
        </div>
            </motion.div> 


        </div>
    </div>
    </div>        
    </div>
)
}

export default Hero

