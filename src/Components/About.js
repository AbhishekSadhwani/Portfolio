import { motion} from "framer-motion";
import aboutImage from "../assets/about.jpg";
import profile from "../assets/Untitled.png";
import { ABOUT_TEXT } from "../constants/index";

export const About = () => {
    return (
        <section className='border-b border-gray-200 dark:border-neutral-900 pb-4'>
            <h1 className='text-4xl text-neutral-900 text-center my-20 dark:text-neutral-300'>About <span className="text-slate-700 dark:text-gray-500">Me</span></h1>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className="w-3/4 mx-auto flex items-center justify-center">
                        <motion.img initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1}} className="rounded-2xl filter brightness-75" src={profile} alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p initial={{x:100,opacity:0}} viewport={{ once: true }} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="max-w-xl my-2 py-6 text-neutral-900 dark:text-neutral-300">{ABOUT_TEXT}</motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
};
