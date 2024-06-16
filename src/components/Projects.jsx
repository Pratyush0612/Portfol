import { PROJECTS } from "../constants";
import {motion} from "framer-motion";
// import {imgs} from "../assets/mypic2.jpg"
import project4 from "../assets/projects/movieimgs.jpg";
import project1 from "../assets/projects/resweb.jpg";
import project2 from "../assets/projects/numplats.jpg";
import project3 from "../assets/projects/imgs.png";
import blogimgs from "../assets/projects/blogimgs.jpg";
import events from "../assets/projects/eventimgs.jpg";

const Projects = () => {
  return (
    <div className="border-b border-gray-600 pb-4">
      <div whileInView={{opacity:1,y:0}}
      initial={{opacity:0 ,y:-100}}
      transition={{duration:0.5}}
      className="max-w-[1200px] mx-auto-p-5">
    <div>
    <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0 ,y:-100}}
      transition={{duration:0.5}}
      className="my-10 text-center text-4xl">Projects
      </motion.h1> 
           {/* <p className="my-10 text-center text-2xl">My recent work</p> */}
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">

      <div className="transform transition-transform duration-300
      hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] 
      group rounded-md flex justify-center items-center 
    h-[200px] bg-cover relative ">
       <img src={blogimgs}  alt="" />
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70
        absolute inset-0 flex flex-col justify-center items-center ">
          <span className="text-2xl font-bold text-white tracking-wider">Bloggo
        </span>
        <div className="pt-8 text-center">          
          <a href="https://blog-website-yi0x.onrender.com/" target="blank">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Live
              </button>
          </a>
        </div>
        </div>
      </div>



      <div className="transform transition-transform duration-300
      hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] 
      group rounded-md flex justify-center items-center 
    h-[200px] bg-cover relative">
       <img src={project3}  alt="" />
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70
        absolute inset-0 flex flex-col justify-center items-center ">
          <span className="text-2xl text-center font-bold text-white tracking-wider">Handwritten Digit Recognition
        </span>
        <div className="pt-8 text-center">          
          <a href="https://github.com/Pratyush0612/HDRecog.">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
              </button>
          </a>
        </div>
        </div>
      </div>

      <div className="transform transition-transform duration-300
      hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] 
      group rounded-md flex justify-center items-center 
    h-[200px] bg-cover relative">
       <img src={events}  alt="" />
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70
        absolute inset-0 flex flex-col justify-center items-center ">
          <span className="text-2xl font-bold text-white tracking-wider">Eventr
        </span>
        <div className="pt-8 text-center">          
          <a href="https://github.com/Pratyush0612/Event-webs">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Live
              </button>
          </a>
        </div>
        </div>
      </div>

      <div className="transform transition-transform duration-300
      hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] 
      group rounded-md flex justify-center items-center 
    h-[200px] bg-cover relative">
       <img src={project2}  alt="" />
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70
        absolute inset-0 flex flex-col justify-center items-center ">
          <span className="text-2xl text-center font-bold text-white tracking-wider">Number Plate Recognition
        </span>
        <div className="pt-8 text-center">          
          <a href="https://github.com/Pratyush0612/Number-Plate-recog-using-tesseract">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
              </button>
          </a>
        </div>
        </div>
      </div>
      <div className="transform transition-transform duration-300
      hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] 
      group rounded-md flex justify-center items-center 
    h-[200px] bg-cover relative">
       <img src={project1}  alt="" />
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70
        absolute inset-0 flex flex-col justify-center items-center ">
          <span className="text-2xl font-bold text-white tracking-wider">The Pepertown
        </span>
        <div className="pt-8 text-center">          
          <a href="https://pratyush0612.github.io/Pprtown/">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Live
              </button>
          </a>
        </div>
        </div>
      </div>

      <div className="transform transition-transform duration-300
      hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] 
      group rounded-md flex justify-center items-center 
    h-[200px] bg-cover relative mb-10">
       <img src={project4}  alt="" />
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70
        absolute inset-0 flex flex-col justify-center items-center ">
          <span className="text-2xl text-center font-bold text-white tracking-wider">Sentiment Analysis of Movies Dataset
        </span>
        <div className="pt-8 text-center">          
          <a href="https://github.com/Pratyush0612/Movie-Recommendation-System?tab=readme-ov-file">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
              </button>
          </a>
        </div>
        </div>
      </div>



    </div>
      </div>

    



  </div>
  )
}

export default Projects


      {/* <motion.div 
        className="w-full max-w-xl lg:w-3/4">
        </motion.div>
        </div> */}


    //     <motion.h1
    //     whileInView={{opacity:1,y:0}}
    //     initial={{opacity:0,y:-100}}
    //     transition={{duration:0.5}}
    //     className="my-20 text-center text-4xl">Projects
    //   </motion.h1>
    //      <div>
    //         {PROJECTS.map((project,index) => (
    //          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
    //         <motion.div
    //           whileInView={{opacity:1,x:0}}
    //           initial={{opacity:0, x:100}}
    //           transition={{duration:1}}
            
    //         className="w-full lg:w-1/4">
    //  <img src={project.image}
    //          width={150}
    //          height={150}
    //           alt={project.title}
    //           className="mb-6 rounded"
    //           />
    //         </motion.div>
    
    
    // <motion.div 
    //  whileInView={{opacity:1,x:0}}
    //  initial={{opacity:0, x:100}}
    //  transition={{duration:1}}
    // className="w-full max-w-xl lg:w-3/4">
    // <h6 className="mb-2 font-semibold">{project.title}</h6>
    // <p className="mb-4 text-neutral-400">{project.description}
    // </p>
    //   {project.technologies.map((tech,index)=>(
    //       <span key={index} className="mr-2 rounded bg-red-300  px-2 py-1 text-sm font-medium text-red-700">
    //       {tech}
    //       </span>
    
    // ))}
    // </motion.div>
    //        </div> 
    //       ))}
    //   </div>