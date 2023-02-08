import { useContext } from 'react';
import './App.css';
import Contact from './component/contact/Contact';
import Experience from './component/Experience/Experience';
import Intro from './component/intro/Intro';
import Navbar from './component/navbar/Navbar';
import Portfolio from './component/portfolio/Portfolio';
import Services from './component/services/Services';
import Testimonial from './component/testimonial/Testimonial';
import Works from './component/works/Works';
import { themeContext } from './Comtext';

function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="App"
      style={{
        background: darkMode ? "black" : "", color : darkMode ? "white" : "" 
      }}
    >
      
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
