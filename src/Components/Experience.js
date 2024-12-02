import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

export const Experience = () => {

  return (
    <section className='border-b border-gray-200 dark:border-neutral-900 pb-24'>
        <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.5}} className='text-2xl md:text-4xl text-center text-neutral-900 my-20 dark:text-neutral-300'>Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className='flex flex-wrap lg:justify-center mb-8'>
                    <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}} className='w-full lg:w-1/4'>
                            <p className="text-md mb-2 text-neutral-800 dark:text-neutral-400">{experience.year}</p>
                    </motion.div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}} className="flex flex-col">
                            <p className="text-base md:text-lg text-black font-semibold mb-2 dark:text-white">{experience.role} - <span className="text-sm text-neutral-700 dark:text-purple-100">{experience.company}</span></p>
                            <p className="text-justify text-base md:text-lg mb-2 text-neutral-900 dark:text-neutral-400">{experience.description}</p>
                            <div className="flex flex-wrap">
                                {experience.technologies.map((technology, index) => (
                                    <span key={index} className="px-2 py-1 mr-2 mt-2 text-white text-sm font-medium rounded bg-neutral-900 dark:text-purple-800">{technology}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))} 
        </div>
    </section>
  )
};
