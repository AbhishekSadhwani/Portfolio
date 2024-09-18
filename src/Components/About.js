import { motion} from "framer-motion";
import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index";

const About = () => {
    return (
        <section className='border-b border-neutral-900 pb-4'>
            <h1 className='text-4xl text-center my-20'>About <span className="text-gray-500">Me</span></h1>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className="flex items-center justify-center">
                        <motion.img initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1}} className="rounded-2xl" src={aboutImage} alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 ">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p initial={{x:100,opacity:0}} viewport={{ once: true }} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="max-w-xl my-2 py-6">{ABOUT_TEXT}</motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About