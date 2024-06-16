import {CONTACT} from "../constants";
import {motion} from "framer-motion"
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-b border-gray-600 pb-2">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0 ,y:-100}}
      transition={{duration:0.5}}
      className="my-10 text-center text-4xl">Get In Touch
      </motion.h1>  

<div 

className="flex justify-center items-center">
  <form action="https://getform.io/f/navvldra" method="POST" className="flex flex-col w-full md:w-1/2">
    <input type="text" name="name"  
    placeholder="Enter your name"
     className="p-2 bg-transparent border-2 
     rounded-md text-cyan-300 focus:outline-none" />

<input type="text" name="email" 
    placeholder="Enter your email"
     className="my-4 p-2 bg-transparent border-2 
     rounded-md text-cyan-300 focus:outline-none" />
     <textarea 
     placeholder="Enter Message"
     name="message" rows="10" className="p-2 bg-transparent border-2 rounded-md
     text-cyan-300 focus:outline-none">

     </textarea>
     <button  className="text-red-800 bg-red-300 text-[20px]
     px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
      Let's talk
     </button>
  </form>
</div>


</div>
    
  )
}





// </motion.div>
export default Contact
