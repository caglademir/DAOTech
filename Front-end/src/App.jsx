import NavBar from "./Components/NavBar"
import RoadMap from "./Components/RoadMap"
import WhoWeAre from "./Components/WhoWeAre"
import OurVision from "./Components/OurVision"
import Footer from "./Components/Footer"
function App() {


  return (
    <>
      <div className="h-full bg-gradient-to-r from-gray-950 via-sky-800 to-gray-950">
           
          <NavBar></NavBar>
          <WhoWeAre></WhoWeAre>
          <OurVision></OurVision>
          <RoadMap></RoadMap>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App