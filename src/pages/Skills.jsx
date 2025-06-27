import React, { useEffect } from 'react';
import GlassIcons from '../components/GlassIcons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Reusable Animation Wrapper
const AnimatedSection = ({ children, delay = 0 }) => {
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
      className="w-full relative mb-10 overflow-x-auto sm:overflow-x-hidden whitespace-nowrap sm:whitespace-normal"
    >
      {children}
    </motion.div>
  );
};

const Skills = () => {
  const frontendItems = [
    { icon: <i className="ri-reactjs-line text-3xl text-black"></i>, color: 'blue', label: 'React.js' },
    { icon: <i className="ri-javascript-line text-3xl text-black"></i>, color: 'yellow', label: 'JavaScript' },
    { icon: <i className="ri-tailwind-css-line text-3xl text-black"></i>, color: 'teal', label: 'TailwindCSS' },
    { icon: <i className="ri-html5-line text-3xl text-black"></i>, color: 'orange', label: 'HTML' },
    { icon: <i className="ri-css3-line text-3xl text-black"></i>, color: 'skyblue', label: 'CSS' },
  ];

  const backendItems = [
    { icon: <i className="ri-nodejs-line text-3xl text-black"></i>, color: 'purple', label: 'Node.js' },
    { icon: <img src="/MongoDB.png" alt="MongoDB" className="w-8 h-8" />, color: 'skyblue', label: 'MongoDB' },
    { icon: <img src="/Express.png" alt="Express" className="w-8 h-8" />, color: 'orange', label: 'Express.js' },
    { icon: <i className="ri-flow-chart text-3xl text-black"></i>, color: 'red', label: 'REST API' },
  ];

  const Tools = [
    { icon: <i className="ri-git-merge-line text-3xl text-black"></i>, color: 'purple', label: 'Git' },
    { icon: <i className="ri-github-line text-3xl text-black"></i>, color: 'green', label: 'Github' },
    { icon: <i className="ri-vercel-line text-3xl text-black"></i>, color: 'red', label: 'Vercel' },
    { icon: <img src="/VSCode.png" alt="VS Code" className="w-8 h-8" />, color: 'skyblue', label: 'VS Code' },
  ];

  return (
    <div id='skills' className="w-full md:px-10 px-4 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>

      {/* Front-End */}
      <AnimatedSection delay={0}>
        <h1 className="text-xl font-semibold mb-2">Front-End</h1>
        <GlassIcons items={frontendItems} className="inline-flex sm:flex-wrap gap-4 ml-5" />
      </AnimatedSection>

      {/* Back-End */}
      <AnimatedSection delay={0.2}>
        <h1 className="text-xl font-semibold mb-2">Back-End & Database</h1>
        <GlassIcons items={backendItems} className="inline-flex sm:flex-wrap gap-4 ml-5" />
      </AnimatedSection>

      {/* Tools & Platforms */}
      <AnimatedSection delay={0.4}>
        <h1 className="text-xl font-semibold mb-2">Tools & Platforms</h1>
        <GlassIcons items={Tools} className="inline-flex sm:flex-wrap gap-4 ml-5" />
      </AnimatedSection>
    </div>
  );
};

export default Skills;
