import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <div id='experience' className='w-full md:px-10 flex flex-col px-4 max-w-[1200px] mx-auto mt-4 mb-4 md:mt-10 md:mb-10'>
      <h1 className='text-3xl font-bold mb-9'>Experience</h1>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-6'
      >
        <h1 className='text-2xl font-semibold'>Web-Developer</h1>
        <div className='flex w-full justify-between items-center mt-1 mb-3 text-[#A1A1AA]'>
          <p>ACM Club, PCCOER</p>
          <p>Sept 2024 - Present</p>
        </div>
        <p className='text-sm mb-3'>
          <i className="ri-circle-fill text-xs pr-2"></i> Working on the frontend development.
        </p>
        <div className='flex gap-4 mb-4 flex-wrap'>
          <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>React</button>
          <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>TailwindCSS</button>
          <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>GSAP</button>
          <button className='border border-[#A1A1AA] px-2 text-sm rounded-2xl'>Framer Motion</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience
