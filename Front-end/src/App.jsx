import { useState } from "react"

import NavBar from "./Components/NavBar"
import RoadMap from "./Components/RoadMap"
import WhoAreWe from "./Components/WhoAreWe"
import OurVision from "./Components/OurVision"
import Footer from "./Components/Footer"

import PlatformFeatures from "./Components/PlatformFeatures"
import Modal from "./Modals/Modal"
import Ingredients from "./Components/Ingredients"
import Acoordion from "./Components/Acoordion"
function App() {
    
  const [ isOpen,setIsOpen] = useState(false);

  return (
    <>
      <div className="h-full bg-gradient-to-r from-gray-950 via-sky-800 to-gray-950">
           
          <NavBar setIsOpen={setIsOpen}></NavBar>
          <Ingredients></Ingredients>
          <WhoAreWe></WhoAreWe>
          <PlatformFeatures></PlatformFeatures>
          <OurVision></OurVision>
          <RoadMap></RoadMap>
          <Acoordion></Acoordion>
         
          <Footer></Footer>
          
          <div>
            {!!isOpen  && 
            <Modal setIsOpen = {setIsOpen}></Modal>
            }
          </div>
          


      </div>
    </>
  )
}

export default App