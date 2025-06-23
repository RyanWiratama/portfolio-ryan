import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar flex items-center justify-between px-6 py-2 fixed top-2 left-1/2 -translate-x-1/2 max-w-6xl w-full z-50 transition-all duration-300
        ${show ? "bg-white/90 backdrop-blur-md rounded-full shadow-md" : "bg-transparent"}`}
    >
      <div className={`logo text-2xl font-bold transition-colors duration-300 ${show ? "text-black" : "text-white"}`}>
        Portfolio
      </div>

      {/* Mobile Navbar */}
      <ul
        className={`menu md:hidden flex items-center gap-2 
          transition-all duration-300 ${show ? "text-black" : "text-white"}`}
      >
        <li><a href="#" className="text-base font-medium">Home</a></li>
        <li><a href="#about" className="text-base font-medium">About</a></li>
        <li><a href="#project" className="text-base font-medium">Project</a></li>
        <li><a href="#" className="text-base font-medium">Contact</a></li>
      </ul>

      {/* Desktop Navbar */}
      <ul className={`menu hidden md:flex items-center gap-10 transition-all duration-300 ${show ? "text-black" : "text-white"}`}>
        <li><a href="#" className="text-base font-medium">Home</a></li>
        <li><a href="#about" className="text-base font-medium">About</a></li>
        <li><a href="#project" className="text-base font-medium">Project</a></li>
        <li><a href="#contact" className="text-base font-medium">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;