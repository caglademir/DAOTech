import NavBar from "./Components/NavBar"
import RoadMap from "./Components/RoadMap"

function App() {


  return (
    <>
      <div className="h-full bg-gradient-to-r from-gray-950 via-sky-800 to-gray-950">
          <NavBar></NavBar>
          <RoadMap></RoadMap>
      </div>
    </>
  )
}

export default App