

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sponser from './components/Sponser'
import Location from './components/Location'
import Prizes from './components/Prizes'
import Interest from './components/Interest'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <div className="bg-Bg_image ">
     <Navbar />
     <Hero />
     </div>
     
     <Sponser />
     <Location />
     <Prizes />
     <Interest/>
     <Footer/>
    </>
  )
}

export default App
