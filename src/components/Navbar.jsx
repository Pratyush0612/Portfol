import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";


const Navbar = () => {
  return (
  <nav className="mb-1 flex items-center justify-between py-2">
    <div className="flex flex-shrink-0 items-center">
  

    </div>
    <div className="m-8  flex items-center justify-center gap-3 text-2xl">
    {/* <div className="m-8  flex items-center justify-center gap-3 mt-2"> */}
        {/* <FaSquareXTwitter />
        <FaInstagram /> */}

      <a href="https://leetcode.com/u/pratyushm0612/" target="_blank">
        <TbBrandLeetcode />
      </a>
       <a href="https://www.linkedin.com/in/pratyush-tyagi0612/"  target="_blank">
        <FaLinkedin />
        </a>
        <a href="https://github.com/Pratyush0612"  target="_blank">
        <FaGithub />
  </a> 
    </div>
  </nav>
  );
}

export default Navbar

