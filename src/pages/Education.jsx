import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <div id='education' className='w-full md:px-10 flex flex-col px-4 max-w-[1200px] mx-auto mt-4 mb-4 md:mt-10 md:mb-10'>
      <h1 className='text-3xl font-bold mb-9'>Education</h1>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-6'
      >
        <h1 className='text-2xl font-semibold'>Pimpri Chinchwad College of Engineering and Research, Pune</h1>
        <div className='flex flex-col w-full justify-start items-start mt-1 mb-3 text-[#A1A1AA]'>
          <p>BE, Computer Science</p>
          <p>May 2023 - 2027 <i className="ri-circle-fill text-xs pr-1 pl-3"></i> CGPA : 9.02</p>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className='mb-6'
      >
        <h1 className='text-2xl font-semibold'>Dayanand Jr. Science College, Latur</h1>
        <div className='flex flex-col w-full justify-start items-start mt-1 mb-3 text-[#A1A1AA]'>
          <p>Science , 2021 - 2023</p>
          <p>
            <i className="ri-circle-fill text-xs pr-1"></i>12th: 81%
            <i className="ri-circle-fill text-xs pr-1 pl-3"></i>MHT-CET: 98.31 %tile
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Education
