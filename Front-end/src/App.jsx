import NavBar from "./Components/NavBar"
import RoadMap from "./Components/RoadMap"
import WhoAreWe from "./Components/WhoAreWe"
import OurVision from "./Components/OurVision"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import PlatformFeatures from "./Components/PlatformFeatures"
function App() {


  return (
    <>
      <div className="h-full bg-gradient-to-r from-gray-950 via-sky-800 to-gray-950">
           
          <NavBar></NavBar>
          <WhoAreWe></WhoAreWe>
          <OurVision></OurVision>
          <PlatformFeatures></PlatformFeatures>
          <RoadMap></RoadMap>
          <Contact></Contact>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App