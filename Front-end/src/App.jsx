import { useState } from "react";
import NavBar from "./Components/NavBar";
import RoadMap from "./Components/RoadMap";
import WhoAreWe from "./Components/WhoAreWe";
import OurVision from "./Components/OurVision";
import Footer from "./Components/Footer";

import PlatformFeatures from "./Components/PlatformFeatures";

import Acoordion from "./Components/Acoordion";

import "./index.css";


function App() {



  return (
    <>
      <div className="h-full bg-gradient-to-r from-gray-950 via-sky-800 to-gray-950">
        <div className="bg-cover bg-no-repeat bg-center bg-[url(/src/img/welcome.png)]">
          <NavBar></NavBar>

          <WhoAreWe ></WhoAreWe>
        </div>

        <div className="bg-cover bg-no-repeat bg-[url(/src/img/vision.png)]">
          <PlatformFeatures></PlatformFeatures>
          <OurVision></OurVision>
        </div>

        <div className="bg-cover bg-no-repeat bg-[url(/src/img/moon.jpg)]">
          <RoadMap id="roadMap"></RoadMap>
          <Acoordion id="acoordion"></Acoordion>
          <Footer id="footer"></Footer>
        </div>

  
      </div>
    </>
  );
}

export default App;
