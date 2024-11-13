import AboutSection from "./components/About"
import Comments from "./components/Comments"
import Footer from "./components/Footer"
import Lucide from "./components/LucideReact"
import Main from "./components/Main"
import ImageModal from "./components/Modal"

import Navbar from "./components/Navbar"
import ProjectExpo from "./components/Projects"
import ResponsiveTestimonials from "./components/Review"

import Slider from "./components/Slider"

function App() {


  return (
    <>
     
      <Navbar/>
      <Slider/>
      <Main/>
      <AboutSection/>
      <Lucide/>
      <Comments/>
      <ProjectExpo/>
      <ResponsiveTestimonials/>
      <Footer/>
      <ImageModal/>
    </>
  )
}

export default App
