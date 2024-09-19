import heroImage from "../assets/kevinRushProfile.png";
import { HERO_CONTENT } from '../constants/index'
import { motion } from "framer-motion";


const Hero = () => {
    const heroTransition = (delay) => ({
        hidden: {x: -100,opacity: 0},
        visible: {x:0,opacity:1,transition:{duration:0.5,delay:delay}}
    });

    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={(heroTransition(0))} initial="hidden" animate="visible" className="text-5xl pb-16 lg:text-7xl lg:mt-16 font-thin tracking-tight">Abhishek Sadhwani</motion.h1>
                        <motion.h3 variants={(heroTransition(0.5))} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl text-thin text-fill text-transparent tracking-tight">Front-End Developer</motion.h3>
                        <motion.p variants={(heroTransition(1))} initial="hidden" animate="visible" className="my-2 font-light traking-tighter py-6 max-w-lg">{HERO_CONTENT}</motion.p>
                    </div>
                </div>           
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img initial={{ x: 100,opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{duration:1, delay:1.2}}  src={heroImage} alt="Abhishek Sadhwani" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero