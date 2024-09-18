import { motion } from "framer-motion";
import { PROJECTS } from "../constants"


const Projects = () => {
  return (
    <section className='border-b border-neutral-900 pb-4'>
        <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.5}} className='text-center text-4xl my-20'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index) => (
                <div key={index} className="flex flex-wrap lg:justify-center mb-8">
                    <div className="w-full lg:w-1/4">
                        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}} className="flex">
                            <img className="rounded mb-6" width={150} height={150} src={project.image} alt={project.title} />
                        </motion.div>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}} className="flex flex-col">
                            <p className="text-white font-semibold mb-2">{project.title}</p>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap">
                                {project.technologies.map((technology, index) => (
                                    <span key={index} className="px-2 py-1 mr-2 text-purple-800 text-sm font-medium rounded bg-neutral-900">{technology}</span>
                                ))}
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