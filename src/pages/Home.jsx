import React from 'react';
import Folder from '../components/Folder';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div id='about' className='pt-20 pb-30 sm:pb-30 sm:pt-30 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px] mx-auto gap-40 overflow-hidden'>

      {/* Left Div with Animation */}
      <motion.div
        className="w-full md:w-2/3 text-[#A1A1AA] text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold mb-1 text-white">Prasad Kadam</h1>
        <p className="text-xl mb-3">CS Student</p>
        <div className="mb-4 flex items-center text-sm justify-between flex-wrap">
          <p> <i className="ri-mail-line text-xl cursor-pointer pr-1"></i>kadamprasad1015@gmail.com</p>
          <p><i className="ri-map-pin-line px-1"></i>Pune, India</p>
        </div>
        <p className="mb-10 text-md">
          A self-driven web developer passionate about creating impactful and real-time web applications using the MERN stack and Python. I enjoy building solutions that simplify tasks, support communities, and enhance user experience. Currently exploring AI/ML to build intelligent, data-driven applications.
        </p>

        <div className="flex justify-left md:justify-start items-center gap-4 flex-wrap">
          <a href="/Prasad_Kadam_Resume.pdf" download target="_blank" rel="noopener noreferrer" >
            <button className='bg-white text-black px-4 py-2 rounded font-semibold flex items-center gap-2 hover:bg-gray-200'><i className="ri-download-line"></i> Resume</button>
          </a>

          <a href="https://github.com/KadamPrasad01" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-line text-xl cursor-pointer border-2 px-2 py-2 rounded-lg border-[#A1A1AA] hover:bg-zinc-900"></i>
          </a>

          <a href="https://www.linkedin.com/in/prasad-kadam-12460a29a/" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-line text-xl cursor-pointer border-2 px-2 py-2 rounded-lg border-[#A1A1AA]  hover:bg-zinc-900"></i>
          </a>

          <a href="https://leetcode.com/u/Prasad_Kadam001/" target="_blank" rel="noopener noreferrer">
            <img src="./leetcode.png" alt="" className='text-white text-xl cursor-pointer border-2 px-2 py-2 rounded-lg border-[#A1A1AA] hover:bg-zinc-900' />
          </a>
        </div>
      </motion.div>

      {/* Right Div with Animation */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div style={{ height: '50px', position: 'relative' }} className='mt-5 sm:mt-25 sm:mr-30'>
          <Folder size={2} color="#fca311" className="custom-folder" items={[
            <i class="ri-code-ai-line text-xl"></i>,
            <i class="ri-terminal-window-line text-xl"></i>,
            "MERN Dev • AI/ML Learner • 125+ Questions on LeetCode ",
          ]} />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
