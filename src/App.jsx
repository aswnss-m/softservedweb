import "./App.css";
import './index.css'
import About from "./Components/About/About";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      {/* 
      <Routes>
        <Route path = '/ComingSoon' element = {<ComingSoon/>}/>
      </Routes> */}

      <Footer />
      {/* <ComingSoon/> */}
    </div>
  );
}

export default App;
