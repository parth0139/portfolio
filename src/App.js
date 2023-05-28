
import './App.css';

import Navbar from './components/Navbar/navbar';
import {Banner} from './components/Banner/Banner';
import { Skills } from './components/skills/skills';
import { Projects } from './components/Projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { About } from './components/about/about';

function App() {
  
  return (
   <>
   <div className="App">
   <Navbar />
   <Banner />
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
   </div>
   </>
  );
}

export default App;
