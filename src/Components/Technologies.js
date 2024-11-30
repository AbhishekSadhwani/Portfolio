import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";

export const Technologies = () => {

    const techBoxtransition = (duration) => ({
        hidden : {y:-10},
        visible: {
            y:[10,-10],
            transition: {
                duration: duration,
                ease: "linear",
                repeatType: "reverse",
                repeat: Infinity,
            }
            
        
        }
    });


    return (
        <section className='border-b border-gray-200 dark:border-neutral-900 pb-24'>
            <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}} className='text-center text-2xl md:text-4xl text-neutral-900 my-20 dark:text-neutral-300'>Technologies</motion.h2>
            <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}}  className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={techBoxtransition(2)} initial="hidden" animate="visible" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaReact className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={techBoxtransition(3)} initial="hidden" animate="visible" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNextjsLine className="text-7xl text-neutral-900 dark:text-neutral-200" />
                </motion.div>
                <motion.div variants={techBoxtransition(4)} initial="hidden" animate="visible" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoFirebase className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div variants={techBoxtransition(2)} initial="hidden" animate="visible" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div variants={techBoxtransition(5)} initial="hidden" animate="visible" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-500" />
                </motion.div>
                <motion.div variants={techBoxtransition(4)} initial="hidden" animate="visible" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-orange-500" />
                </motion.div>
            </motion.div>
        </section>
    )
};