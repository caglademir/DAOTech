import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({
  setIsOpen,
  children,
  setIsOpen1,
  setIsOpen2,
  setIsOpen3,
  setIsOpen4,
  setIsOpen5,
}) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-lg flex justify-center items-center bg-cover bg-no-repeat bg-[url(/src/img/moon.jpg)]">
      <div className="w-[65%] h-[95%] bg-transparent rounded-lg flex flex-col border-4 border-gray-300">
        <button
          onClick={() => {
            navigate("/");
            setIsOpen(false),
              setIsOpen1(false),
              setIsOpen2(false),
              setIsOpen3(false);
            setIsOpen4(false);
            setIsOpen5(false);
          }}
          className=" text-white h-[10%] place-self-end w-[5%] m-2 font-anton text-2xl"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
