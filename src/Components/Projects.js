import { motion } from "framer-motion";
import { PROJECTS } from "../constants"
import { FaArrowRight } from "react-icons/fa6";

const Projects = () => {
  return (
    <section className='border-b border-neutral-900 pb-4'>
        <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.5}} className='text-center text-4xl my-20'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index) => (
                <div key={index} className="flex flex-wrap lg:justify-center mb-10">
                    <div className="w-full lg:w-1/4">
                        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}} className="flex">
                            <motion.img whileHover={{ scale: 1.5 }} className="rounded mb-6" width={150} height={150} src={project.image} alt={project.title} />
                        </motion.div>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}} className="flex flex-col">
                            <p className="text-white font-semibold mb-2">{project.title}</p>
                            <p className="mb-2 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap">
                                {project.technologies.map((technology, index) => (
                                    <span key={index} className="px-2 py-1 mr-2 mt-2 text-purple-800 text-sm font-medium rounded bg-neutral-900">{technology}</span>
                                ))}
                            </div>
                            <div className="flex">
                                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center mr-2 mt-2 border-2 border-white  px-2 py-1 rounded-lg">Demo <span className="ml-1"><FaArrowRight /></span></a>
                                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center mr-2 mt-2 border-2 border-white px-2 py-1 rounded-lg ">Github <span className="ml-1"><FaArrowRight /></span></a>
                            </div>
                        </motion.div>
                    </div>

                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects