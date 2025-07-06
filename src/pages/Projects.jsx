import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/img1.jpg';

// Reusable animated wrapper
const AnimatedProject = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="flex flex-col sm:flex-row w-full border border-gray-700 rounded-2xl p-4 mb-5"
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div id='projects' className='w-full md:px-10 flex flex-col px-4 max-w-[1200px] mx-auto mt-4 mb-4 md:mt-10 md:mb-10'>
      <h1 className='mb-10 text-3xl font-semibold'>Projects</h1>

      {/* Project 1 */}
      <AnimatedProject delay={0}>
        <div className='sm:w-1/2 flex items-center justify-center sm:mr-2'>
          <img src={img1} alt="" className="w-full h-full rounded-xl object-contain p-2" />
        </div>
        <div className='sm:w-1/2'>
          <h1 className='text-xl font-semibold mb-2'>Institutional Feedback System</h1>
          <p className='mb-3 text-sm text-[#A1A1AA]'>
            The idea is to create a web-based teacher performance analytics platform powered by Natural Language Models (NLM),
            sentiment analysis, and real-time data visualization...
          </p>
          <div className='flex gap-4 mb-4 flex-wrap'>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>ReactJS</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>TailwindCSS</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>JavaScript</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>Django</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>MySQL</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>HuggingFace API's</button>
          </div>
          <p className='text-xl font-semibold mb-3'>Key Features:</p>
          <p className='mb-1 text-sm'><i className="ri-corner-down-right-line"></i> Real-Time Feedback Collection</p>
          <p className='mb-1 text-sm'><i className="ri-corner-down-right-line"></i> Sentiment Analysis with NLP</p>
          <p className='mb-1 text-sm'><i className="ri-corner-down-right-line"></i> Interactive Visualizations</p>
          <p className='mb-1 text-sm'><i className="ri-corner-down-right-line"></i> Actionable Insights for Teachers</p>
         <a href="https://github.com/KadamPrasad01/Feeback-and-Analytics-System" target="_blank" rel="noopener noreferrer" className='bg-white text-black px-4 py-1 rounded font-semibold mt-2 inline-block'>Github <i class="ri-skip-right-line"></i></a>
        </div>
      </AnimatedProject>

      {/* Project 2 */}
      <AnimatedProject delay={0}>
        <div className='sm:w-1/2 flex items-center justify-center sm:mr-2'>
          <img src={img1} alt="" className="w-full h-full rounded-xl object-contain p-2" />
        </div>
        <div className='sm:w-1/2'>
          <h1 className='text-xl font-semibold mb-2'>Social Media Platform</h1>
          <p className='mb-3 text-sm text-[#A1A1AA]'>
            This project includes secure login/signup functionality, user profile management, and the ability to post content.
          </p>
          <div className='flex gap-4 mb-4 flex-wrap'>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>EJS templating engine</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>TailwindCSS</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>JavaScript</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>Node.js</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>Express.js</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>MongoDB</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>JWT and Bcrypt</button>
          </div>
          <p className='text-xl font-semibold mb-3'>Key Features:</p>
          <p className='mb-1 text-sm'><i className="ri-corner-down-right-line"></i> Secure Authentication System</p>
          <p className='mb-1 text-sm'><i className="ri-corner-down-right-line"></i> User Profile Management</p>
          <p className='mb-1 text-sm'><i className="ri-corner-down-right-line"></i>  Content Posting Functionality</p>
         <a href="https://github.com/KadamPrasad01/social-media-platform" target="_blank" rel="noopener noreferrer" className='bg-white text-black px-4 py-1 rounded font-semibold mt-2 inline-block'>Github <i class="ri-skip-right-line"></i></a>
        </div>
      </AnimatedProject>

      {/* Project 3 */}
      <AnimatedProject delay={0.2}>
        <div className='sm:w-1/2 flex items-center justify-center sm:mr-2'>
          <img src="/img2.png" alt="" className="w-full h-auto rounded-xl object-cover p-2" />
        </div>
        <div className='sm:w-1/2'>
          <h1 className='text-xl font-semibold mb-2'>Typing Speed Tester</h1>
          <p className='mb-3 text-sm text-[#A1A1AA]'>
            I built a web app that helps users test and improve their typing speed. It displays random quotes...
          </p>
          <div className='flex gap-4 mb-4 flex-wrap'>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>HTML</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>CSS</button>
            <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>JavaScript</button>
          </div>
          <p className='text-xl font-semibold mb-3'>Key Features:</p>
          <p className='mb-1 text-sm'><i className="ri-corner-down-right-line"></i> Calculates WPM, accuracy, and errors</p>
          <p className='mb-1 text-sm'><i className="ri-corner-down-right-line"></i> Progress Tracking</p>
          <a href="https://github.com/KadamPrasad01/Typing-Speed-Tester" target="_blank" rel="noopener noreferrer" className='bg-white text-black px-4 py-1 rounded font-semibold mt-2 inline-block'>Github <i class="ri-skip-right-line"></i></a>
        </div>
      </AnimatedProject>
    </div>
  );
};

export default Projects;
