import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';


function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-8'>
            <Navbar />
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
