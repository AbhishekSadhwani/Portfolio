import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-b border-neutral-900 pb-20">
      <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:0.5}} className="text-center text-4xl my-10">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:1}} className="my-4">337c, Brahmapuri, Jaipur, Raj-302002, India</motion.p>
        <motion.p initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:1}} className="my-4">+91-9649435730</motion.p>
        <p className="underline">abhisheksadhwani23@gmail.com</p>
      </div>
    </footer>
  )
}

export default Footer