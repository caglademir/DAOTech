
import { useState } from "react"
import NavBar from "./Components/NavBar"
import RoadMap from "./Components/RoadMap"
import WhoAreWe from "./Components/WhoAreWe"
import OurVision from "./Components/OurVision"
import Footer from "./Components/Footer"

import PlatformFeatures from "./Components/PlatformFeatures";
import Modal from "./Modals/Modal";
import Modal1 from "./Modals/Modal1";
import Acoordion from "./Components/Acoordion";
import Modal2 from "./Modals/Modal2";
import Modal3Dao from "./Modals/Modal3DAO";
import Modal3Team from "./Modals/Modal3Team";
import './index.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false); //modal 3 dao
  const [isOpen3, setIsOpen3] = useState(false); //modal 3 team

  return (
    <>

      <div className="h-full bg-gradient-to-r from-gray-950 via-sky-800 to-gray-950">
        
        <div className="bg-cover bg-no-repeat bg-center bg-[url(/src/img/welcome.png)]">
          <NavBar setIsOpen={setIsOpen}></NavBar>
       
          <WhoAreWe></WhoAreWe>
        </div>

        <div className="bg-cover bg-no-repeat bg-[url(/src/img/vision.png)]">
          <PlatformFeatures></PlatformFeatures>
          <OurVision></OurVision>
        </div>


        <div className="bg-cover bg-no-repeat bg-[url(/src/img/moon.jpg)]">
          <RoadMap></RoadMap>
          <Acoordion></Acoordion> 
          <Footer></Footer>
        </div>

        
       
        <div>
          {!!isOpen && (

            <Modal
              setIsOpen={setIsOpen}
            >

              <Modal1 setIsOpen1={setIsOpen1} />
            </Modal>
          )}
        </div>

        <div>
          {!!isOpen1 && (

            <Modal setIsOpen={setIsOpen} setIsOpen1={setIsOpen1} setIsOpen2={setIsOpen2} setIsOpen3={setIsOpen3} >

              <Modal2 setIsOpen2={setIsOpen2} setIsOpen3={setIsOpen3} />
            </Modal>
          )}
        </div>

        <div>
          {!!isOpen2 && (
            <Modal
              setIsOpen={setIsOpen}
              setIsOpen1={setIsOpen1}
              setIsOpen2={setIsOpen2}
              setIsOpen3={setIsOpen3}
            >
              <Modal3Dao />
            </Modal>
          )}
        </div>

        <div>
          {!!isOpen3 && (
            <Modal
              setIsOpen={setIsOpen}
              setIsOpen1={setIsOpen1}
              setIsOpen2={setIsOpen2}
              setIsOpen3={setIsOpen3}
            >
              <Modal3Team />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
