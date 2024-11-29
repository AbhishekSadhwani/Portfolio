import { HERO_CONTENT } from '../constants/index'
import { motion } from "framer-motion";


export const Hero = () => {
    const heroTransition = (delay) => ({
        hidden: {x: -100,opacity: 0},
        visible: {x:0,opacity:1,transition:{duration:0.5,delay:delay}}
    });

    return (
        <section className="border-b border-gray-200 dark:border-neutral-900 pb-4 lg:mb-36">
            {/* <div className="flex flex-wrap justify-center"> */}
                <div className="text-center">
                    <div className="flex flex-col items-center">
                        <motion.h1 variants={(heroTransition(0))} initial="hidden" animate="visible" className="text-4xl pb-4 lg:text-7xl text-neutral-800 lg:mt-16 font-medium tracking-tight dark:text-neutral-300">Abhishek Sadhwani</motion.h1>
                        <motion.h3 variants={(heroTransition(0.5))} initial="hidden" animate="visible" className="bg-gradient-to-r from-neutral-900 via-slate-600 to-neutral-500 bg-clip-text text-2xl lg:text-3xl text-thin text-fill text-transparent tracking-tight dark:from-pink-300 dark:via-slate-500 dark:to-purple-500">Front-End Developer</motion.h3>
                        <motion.p variants={(heroTransition(1))} initial="hidden" animate="visible" className="my-2 text-neutral-900 traking-tighter py-10 max-w-lg dark:text-neutral-300">{HERO_CONTENT}</motion.p>
                    </div>
                </div>           
                {/* <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img initial={{ x: 100,opacity: 0 }} animate={{ x:0, opacity: 1 }} transition={{duration:1, delay:1.2}}  src={heroImage} alt="Abhishek Sadhwani" />
                    </div>
                </div> */}
            {/* </div> */}
        </section>
    )
};
