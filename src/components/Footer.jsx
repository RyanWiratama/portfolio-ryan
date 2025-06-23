import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center px-8">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#project">Project</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/ryan-wiratama/"  className="text-3xl">
                <FaLinkedin />
            </a>
            <a href="https://github.com/RyanWiratama" className="text-3xl">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/wrtmryn/" className="text-3xl">
                <FaInstagram />
            </a>
        </div>
    </div>
  )
}

export default Footer