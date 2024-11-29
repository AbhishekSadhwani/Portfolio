import { useEffect, useState } from 'react';
import {Navbar, Hero, About, Technologies, Experience, Projects, Footer} from './Components';


function App() {
  const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem("darkTheme")) || false);

  useEffect(() => {
      localStorage.setItem("darkTheme", JSON.stringify(darkTheme));

      if (darkTheme){
          document.documentElement.classList.add("dark");
      }
      else{
          document.documentElement.classList.remove("dark");
      }
  }, [darkTheme]);



  return (
    <div className='overflow-x-hidden antialiased'>
      {darkTheme ? <div className='fixed top-0 -z-10 h-full w-full'>
                  <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                </div> 
                :
                <div className='fixed top-0 -z-10 h-full w-full'>
                  <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                </div>
      }


      <div className='container mx-auto px-8'>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <main>
              <Hero />
              <About />
              <Technologies />
              <Experience />
              <Projects />
            </main>  
            <Footer /> 
        </div>
    </div>
      
  );
}

export default App;
