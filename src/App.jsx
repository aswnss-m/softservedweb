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

function App() {
  return (
    <div className="App">
      {/* <BlogPage /> */}
      {/* <Hero />
      <About />
      <Projects /> */}
{/*       
      <Routes>
        <Route path = '/ComingSoon' element = {<ComingSoon/>}/>
      </Routes> */}

      {/* <ComingSoon/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/Blogs' element={<Blog />} />
          <Route path='/Blogs/:id' element={<BlogPage />} />
          <Route path='/' element={Hero} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
