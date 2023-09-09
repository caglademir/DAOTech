import React from "react";
import Modal4 from "./Modals/Modal4";
import Modal5 from "./Modals/Modal5";
import Modal2 from "./Modals/Modal2";
import Modal3Dao from "./Modals/Modal3DAO";
import Modal3Team from "./Modals/Modal3Team";
import Modal from "./Modals/Modal";
import Modal1 from "./Modals/Modal1";
import { useState } from "react";

const CreateDao = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false); //model 2 open
  const [isOpen2, setIsOpen2] = useState(false); //modal 3 dao
  const [isOpen3, setIsOpen3] = useState(false); //modal 3 team
  const [isOpen4, setIsOpen4] = useState(false); //modal 4
  const [isOpen5, setIsOpen5] = useState(false); //modal 5

  const [allDaoInformation, setAllDaoInformation] = useState({
    name: "",
    symbol: "",
    numberOfMembers: "",
    status: "",
    wallet: "",
    contratAddress: "",
    collectionName: "",
  });

  return (
    <div>
      <div>
        {!!isOpen && (
          <Modal setIsOpen={setIsOpen}>
            <Modal1
              setIsOpen1={setIsOpen1}
              setDao={setAllDaoInformation}
              dao={allDaoInformation}
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
              isOpen3={isOpen3}
              setDao={setAllDaoInformation}
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
            <Modal3Dao
              setIsOpen={setIsOpen}
              setIsOpen2={setIsOpen2}
              setIsOpen4={setIsOpen4}
            />
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
              setDao={setAllDaoInformation}
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
              setIsOpen4={setIsOpen4}
              setIsOpen5={setIsOpen5}
              setDao={setAllDaoInformation}
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
              setIsOpen4={setIsOpen4}
              setIsOpen5={setIsOpen5}
              allDaoInformation={allDaoInformation}
            ></Modal5>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default CreateDao;
