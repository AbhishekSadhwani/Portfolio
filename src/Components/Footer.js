import { motion } from "framer-motion";
import { CONTACT } from "../constants";

export const Footer = () => {
  return (
    <footer className="text-neutral-900 border-b border-gray-200 pb-20 dark:text-white dark:border-neutral-900">
      <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.5}} className="text-center text-2xl md:text-4xl my-10">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:1}} className="my-4">{CONTACT.address}</motion.p>
        <motion.p initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:1}} className="my-4">{CONTACT.phoneNo}</motion.p>
        <p className="underline">{CONTACT.email}</p>
      </div>
    </footer>
  )
};
