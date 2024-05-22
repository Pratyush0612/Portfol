import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/mypic2.jpg";
import {motion } from "framer-motion"
const container=(delay)=>({
    hidden:{x:100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-30">
    <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
     <motion.h1 
     variants={container(0)}
     initial="hidden"
     animate="visible"
     className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
            lg:text-8xl">Pratyush Tyagi
            </motion.h1>
            <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate="visible"
            className="bg-gradient-to-r from-pink-300
             via-slate-500 to-purple-500 bg-clip-text text-3xl 
             tracking-tight text-transparent">
                Web Developer 
            </motion.span>
            <motion.p
            //  variants={container(1)}
            //  initial="hidden"
            //  animate="visible"
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}} 
            className="my-2 max-w-xl py-6 font-light
             tracking-tighter text-justify">
                {HERO_CONTENT}
            </motion.p>
        </div>
    </div>
    <div className="rounded-2xl w-full lg:w-1/2 lg:p-3">
        <div className="flex-box justify-center">
            <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0 ,x:-100}}
        transition={{duration :0.5}}
        className="w-full lg:p-2">
           <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={profilePic} alt="abt" />
        </div>
            </motion.div> 


        </div>
    </div>
    </div>        
    </div>
)
}

export default Hero