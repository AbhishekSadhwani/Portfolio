import { motion} from "framer-motion";
import { ABOUT_TEXT } from "../constants/index";

export const About = () => {
    return (
        <section className='border-b border-gray-200 text-center dark:border-neutral-900 pb-4'>
            <motion.h1 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}} className='text-2xl md:text-4xl text-neutral-900 text-center my-20 dark:text-neutral-300'>About <span className="text-slate-700 dark:text-gray-500">Me</span></motion.h1>
            {/* <div className='flex flex-wrap'> */}
                {/* <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className="w-3/4 mx-auto flex items-center justify-center">
                        <motion.img initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1}} className="rounded-2xl" src={profile} alt="" />
                    </div>
                </div> */}
                {/* <div className=""> */}
                    <div className="">
                        <motion.p initial={{x:100,opacity:0}} viewport={{ once: true }} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="text-justify text-base md:text-lg max-w-xl mx-auto my-2 py-6 text-neutral-900 dark:text-neutral-300">{ABOUT_TEXT}</motion.p>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </section>
    )
};
