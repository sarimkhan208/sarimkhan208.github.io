import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Achievements from './Pages/Achievements';
import ToolSets from './Pages/TooleSets';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Statistics from './Pages/Statistics';
import GithubCal from './Pages/GithubCalender';
import { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from './Context/ScrollContext';
import Contact from './Pages/Contacts';

function App() {
  const {scrollRef} = useContext(ScrollContext)
  let about = useRef(null)
  let skills = useRef(null)
  let project = useRef(null)
  let contact = useRef(null)
  let home = useRef(null)

  useEffect(()=>{
    scrollRef?.current.scrollIntoView({
      behaviour:'smooth'
    })
  },[scrollRef])

  return (
    <div className="App">

      <Navbar about={about} skills={skills} project={project} home={home} contact={contact}  />
      <About about={about}/>
      <Home home={home} />
      <Achievements/>
      <Skills skills={skills} />
      <ToolSets/>
      <Projects project={project}/>
      <Statistics/>
      <GithubCal/>
      <Contact contact={contact} />
      <Footer/>
      
    </div>
  );
}

export default App;
