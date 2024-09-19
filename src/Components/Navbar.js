import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



const Navbar = () => {
    return (
        <header>
            <nav className='mb-20 flex items-center justify-between py-6'>
                <div className="flex flex-shrink-0 items-center">
                    {/* <img className="mx-2 w-10" src={logo} alt="" /> */}
                </div>
                <div className='text-2xl flex m-8 items-center gap-4'>
                    <a href="https://www.linkedin.com/in/abhishek-sadhwani/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/AbhishekSadhwani" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://x.com/abhi_0413" target="_blank" rel="noreferrer"><FaSquareXTwitter /></a>
                    <a href="https://www.instagram.com/abhishek_sadhwani/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                </div>    
            </nav> 
        </header>
    )
}

export default Navbar