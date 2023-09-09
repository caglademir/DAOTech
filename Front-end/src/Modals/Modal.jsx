import React from "react";

export default function Modal({
  setIsOpen,
  children,
  setIsOpen1,
  setIsOpen2,
  setIsOpen3,
  setIsOpen4,
  setIsOpen5,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-lg flex justify-center items-center bg-cover bg-no-repeat bg-[url(/src/img/moon.jpg)]">
      <div className="w-[65%] h-[95%] bg-gradient-to-r from-gray-950 via-sky-800 to-gray-950 rounded-lg flex flex-col ">
        <button
          onClick={() => {
            setIsOpen(false),
              setIsOpen1(false),
              setIsOpen2(false),
              setIsOpen3(false);
            setIsOpen4(false);
            setIsOpen5(false)
          }}
          className=" text-white h-[10%] place-self-end w-[5%] m-2 "
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
