import "./App.css";
import './index.css'
import About from "./Components/About/About";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Blog from "./Components/Blog/Blog";
import BlogPage from "./Components/Blog/BlogPage";

import { BrowserRouter,Route, Routes } from "react-router-dom";
import Playground from "./Pages/Playground/Playground";
import Portfolio from "./Pages/Portfolio/Portfolio";
import WorkDone from "./Pages/WorkDone/WorkDone";

function App() {
  return (
    <div className="App">
      {/* <BlogPage /> */}
      {/* <Hero />
      <About />
      */}
{/*       
      <Routes>
        <Route path = '/ComingSoon' element = {<ComingSoon/>}/>
      </Routes> */}

      {/* <ComingSoon/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/Playground' element = {<Playground/>}/>
          <Route path = '/Portfolio' element = {<Portfolio/>}/>
          <Route path = '/WorkDone' element = {<WorkDone/>}></Route>
          <Route path='/Blogs' element={<Blog />} />
          <Route path='/Blogs/:id' element={<BlogPage />} />
          {/* <Route path='/' element={<Hero/>} /> */}
        </Routes>
      </BrowserRouter>

      {/* <Projects />
      <Footer /> */}
      {/* <Footer/> */}
      <Footer/>


    </div>
  );
}

export default App;
