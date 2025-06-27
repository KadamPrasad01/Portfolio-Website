import React, { useState } from 'react';
import '../index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sm:fixed sm:top-0  flex justify-between items-center w-full pt-3 pb-3 font-medium px-5  sm:max-w-[1300px] mx-auto bg-[#09090B]/70 backdrop-blur-md z-50'>
      <div>
        <h1 className='text-2xl font-bold lubrifont '>Work.</h1>
      </div>

      {/* Menu button for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none text-xl border  px-3 py-1 rounded"><i class="ri-menu-fold-fill"></i></button>
      </div>

     
      <ul className="hidden md:flex space-x-6 text-sm">
        <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
        <li><a href="#experience" className="text-white hover:text-gray-300">Experience</a></li>
        <li><a href="#skills" className="text-white hover:text-gray-300">Skills</a></li>
        <li><a href="#education" className="text-white hover:text-gray-300">Education</a></li>
        <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
        <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
        
      </ul>

      
      {isOpen && (
  <div className={`absolute top-16 right-4 left-4 bg-[#09090B] rounded-xl shadow-lg p-5 z-50 md:hidden 
    ${isOpen ? 'fade-in' : 'fade-out'}`}>
    <ul className="flex flex-col space-y-3 text-white text-base font-medium">
      <li className="border-b border-gray-600 pb-2">
        <a 
          href="#about" 
          onClick={() => setIsOpen(false)} 
          className="block w-full hover:text-[#00FFFF] transition-colors"
        >
          About
        </a>
      </li>
      <li className="border-b border-gray-600 pb-2">
        <a 
          href="#experience" 
          onClick={() => setIsOpen(false)} 
          className="block w-full hover:text-[#00FFFF] transition-colors"
        >
          Experience
        </a>
      </li>
      <li className="border-b border-gray-600 pb-2">
        <a 
          href="#education" 
          onClick={() => setIsOpen(false)} 
          className="block w-full hover:text-[#00FFFF] transition-colors"
        >
          Education
        </a>
      </li>
      <li className="border-b border-gray-600 pb-2">
        <a 
          href="#skills" 
          onClick={() => setIsOpen(false)} 
          className="block w-full hover:text-[#00FFFF] transition-colors"
        >
          Skills
        </a>
      </li>
      <li className="border-b border-gray-600 pb-2">
        <a 
          href="#projects" 
          onClick={() => setIsOpen(false)} 
          className="block w-full hover:text-[#00FFFF] transition-colors"
        >
          Projects
        </a>
      </li>
      <li>
        <a 
          href="#contact" 
          onClick={() => setIsOpen(false)} 
          className="block w-full hover:text-[#00FFFF] transition-colors"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
)}

    </div>
  );
};

export default Navbar;
