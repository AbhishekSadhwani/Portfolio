import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";


export const Navbar = ({darkTheme, setDarkTheme}) => {

    return (
        <header>
            <nav className='mb-20 flex items-center justify-between py-6'>
                <div className="flex flex-shrink-0 items-center">
                    {/* <img className="mx-2 w-10" src={logo} alt="" /> */}
                </div>
                
                <div className='text-2xl text-neutral-900 flex m-8 items-center gap-4 dark:text-neutral-300'>
                    <button onClick={() => setDarkTheme(!darkTheme)} type="button" className="text-gray-900  border border-neutral-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2 dark:text-neutral-300">
                        {darkTheme ? <MdLightMode /> : <CiDark /> }
                    </button>
                    <a href="https://www.linkedin.com/in/abhishek-sadhwani/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/AbhishekSadhwani" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://x.com/abhi_0413" target="_blank" rel="noreferrer"><FaSquareXTwitter /></a>
                    <a href="https://www.instagram.com/abhishek_sadhwani/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                </div>    
            </nav> 
        </header>
    )
};
