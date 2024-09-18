import About from "./components/About"
import { Banner } from "./components/Banner"
import Header from "./components/Header"
import Logo from "./components/Logo"
import Services from "./components/Services"
import SlideImages from "./components/SlideImages"
import TopHeader from "./components/TopHeader"
import Welcome from "./components/Welcome"
import Location from "./components/Location"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
 

  return (
  <>
   <TopHeader />
   <Header />
   <Banner />
    <Welcome />
   <SlideImages />
   <Services />
   <About />
   <Logo />
   <Blog />
   <Location />
  <Contact />
   <Footer />  
  </>
  )
}

export default App
