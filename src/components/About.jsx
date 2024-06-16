import profilePic from "../assets/mypic.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-gray-600 pb-4">
     <motion.h1 
     whileInView={{opacity:1,y:0}}
     initial={{opacity:0 ,y:-100}}
     transition={{duration:0.5}}
     className="my-20 text-center text-4xl">
        About 
     <span className="text-neutral-500"> Me</span>
     </motion.h1>   
     <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0 ,x:-100}}
        transition={{duration :0.5}}
        className="w-full lg:w-1/2 lg:p-8">
           <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={profilePic} alt="abt" />
        </div>
            </motion.div> 
          
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className="w-full lg:w-1/2">
        <div className="flex justify-center 
                lg:justify-start">
          <p className="my-2 max-w-xl py-6 text-justify">{ABOUT_TEXT}</p>
          </div>
          <a href="https://drive.google.com/file/d/1ykagakaZ5t4-UI8gL3xJB2DfejjPsJ4v/view?usp=drive_link" target="_blank">

          <button className="text-red-900 bg-red-300
     px-2 py-3 my-2 mx-auto rounded-md hover:scale-110 duration-300">
      Download CV
     </button>
       </a>
            </motion.div>
     </div>
    </div>
  );
};

export default About