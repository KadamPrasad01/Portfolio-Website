import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Orb from '../components/Orb';

const AnimatedSection = ({ children, delay = 0, className = '' }) => {
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
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  return (
    <div id='contact' className='w-full px-4 md:px-10 flex flex-col sm:flex-row justify-between max-w-[1200px] mx-auto mt-4 mb-4 md:mt-10 md:mb-10'>

      {/* Left Section */}
      <AnimatedSection delay={0} className="sm:w-1/2 mb-10 sm:mb-0">
        <p className='text-3xl font-semibold mb-10'>Get In Touch</p>
        <div className='ml-3'>
          <p className='mb-6 text-[#A1A1AA]'>
            <i className="ri-mail-line text-xl bg-zinc-800 p-3 rounded-full mr-2"></i>
            kadamprasad1015@gmail.com
          </p>
          <p className='mb-6 text-[#A1A1AA]'>
            <i className="ri-phone-line text-xl bg-zinc-800 p-3 rounded-full mr-2"></i>
            +91 9322614193
          </p>
          <p className='mb-6 text-[#A1A1AA]'>
            <i className="ri-map-pin-line text-xl bg-zinc-800 p-3 rounded-full mr-2"></i>
            Pune, India
          </p>
          <p className='mb-6'>
            <a
              href="https://www.linkedin.com/in/prasad-kadam-12460a29a/"
              className="flex items-center text-[#A1A1AA]"
            >
              <i className="ri-linkedin-line text-xl bg-zinc-800 p-3 rounded-full mr-2"></i>
              linkedin.com/in/prasad-kadam
            </a>
          </p>
        </div>
      </AnimatedSection>

      {/* Right Section (Orb) */}
      <div className='hidden sm:block sm:w-1/2'>
        <AnimatedSection delay={0.2}>
          <div className='w-full h-[310px] relative'>
            {/* Orb remains untouched to retain its original styling */}
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-white text-3xl font-bold text-center">Contact Me.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>

    </div>
  );
};

export default Contact;
