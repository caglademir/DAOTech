import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./Components/NavBar";
import RoadMap from "./Components/RoadMap";
import WhoAreWe from "./Components/WhoAreWe";
import OurVision from "./Components/OurVision";
import Footer from "./Components/Footer";

import PlatformFeatures from "./Components/PlatformFeatures";
import Modal from "./Modals/Modal";
import Modal1 from "./Modals/Modal1";
import Acoordion from "./Components/Acoordion";
import Modal2 from "./Modals/Modal2";
import Modal3Dao from "./Modals/Modal3DAO";
import Modal3Team from "./Modals/Modal3Team";
import "./index.css";
import Modal4 from "./Modals/Modal4";
import Modal5 from "./Modals/Modal5";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false); //modal 3 dao
  const [isOpen3, setIsOpen3] = useState(false); //modal 3 team
  const [isOpen4, setIsOpen4] = useState(false); //modal 4
  const [isOpen5, setIsOpen5] = useState(false); //modal 5

  //Degerler

  const [daoName, setDaoName] = useState();
  const [daoSymbol, setDaoSymbol] = useState();
  const [numberOfMembers, setNumberOfMembers] = useState();
  const [status, setStatus] = useState();
  const [wallet, setWallet] = useState();
  const [contratAddess, setContratAddress] = useState();
  const [collectionName, setCollectionName] = useState();

  const [allDaoInformation, setAllDaoInformation] = useState({
    name: null,
    symbol: null,
    numberOfMembers: null,
    status: null,
    wallet: null,
    contratAddess: null,
    collectionName: null,
  });

  useEffect(() => {
    setAllDaoInformation({
      name: daoName, 
      symbol: daoSymbol,
      numberOfMembers :numberOfMembers,
      status : status ,
      wallet : wallet ,
      contratAddess : contratAddess,
      collectionName :  collectionName,

    });
  }, [daoName, daoSymbol , numberOfMembers,status ,wallet ,contratAddess, collectionName]);

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
          <RoadMap id="roadMap"></RoadMap>
          <Acoordion id="acoordion"></Acoordion>
          <Footer id="footer"></Footer>
        </div>

        <div>
          {!!isOpen && (
            <Modal setIsOpen={setIsOpen}>
              <Modal1
                setIsOpen1={setIsOpen1}
                setDaoName={setDaoName}
                setDaoSymbol={setDaoSymbol}
                daoName={daoName}
              />
            </Modal>
          )}
        </div>

        <div>
          {!!isOpen1 && (
            <Modal
              setIsOpen={setIsOpen}
              setIsOpen1={setIsOpen1}
              setIsOpen2={setIsOpen2}
              setIsOpen3={setIsOpen3}
            >
              <Modal2
                setIsOpen1={setIsOpen1}
                setIsOpen2={setIsOpen2}
                setIsOpen3={setIsOpen3}
                setNumberOfMembers={setNumberOfMembers}
              />
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
              setIsOpen4={setIsOpen4}
            >
              <Modal3Team
                setIsOpen2={setIsOpen2}
                setIsOpen3={setIsOpen3}
                setIsOpen4={setIsOpen4}
                setStatus={setStatus}
                setWallet={setWallet}
              />
            </Modal>
          )}
        </div>

        <div>
          {!!isOpen4 && (
            <Modal
              setIsOpen={setIsOpen}
              setIsOpen1={setIsOpen1}
              setIsOpen2={setIsOpen2}
              setIsOpen3={setIsOpen3}
              setIsOpen4={setIsOpen4}
            >
              <Modal4
                setIsOpen={setIsOpen}
                setIsOpen1={setIsOpen1}
                setIsOpen2={setIsOpen2}
                setIsOpen3={setIsOpen3}
                setIsOpen4={setIsOpen4}
                setIsOpen5={setIsOpen5}
                setContratAddress={setContratAddress}
                setCollectionName={setCollectionName}
              ></Modal4>
            </Modal>
          )}
        </div>

        <div>
          {!!isOpen5 && (
            <Modal
              setIsOpen={setIsOpen}
              setIsOpen1={setIsOpen1}
              setIsOpen2={setIsOpen2}
              setIsOpen3={setIsOpen3}
              setIsOpen4={setIsOpen4}
              setIsOpen5={setIsOpen5}
            >
              <Modal5
                setIsOpen={setIsOpen}
                setIsOpen1={setIsOpen1}
                setIsOpen2={setIsOpen2}
                setIsOpen3={setIsOpen3}
                setIsOpen4={setIsOpen4}
                setIsOpen5={setIsOpen5}
                allDaoInformation={allDaoInformation}
              ></Modal5>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
