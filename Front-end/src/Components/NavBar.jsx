import React from "react";

export default function NavBar({ setIsOpen }) {
  const openDao = (e) => {
    setIsOpen(true);
    console.log("tikladi");
  };

  return (
    <div className="   p-10  ">
      <nav className="flex justify-end   p-8 ">
        <div className="flex items-center flex-shrink-0 text-white w-[60%]">
          <span className="font-semibold text-7xl tracking-tight">DAOTech</span>
        </div>

        <div
          id="button"
          className="flex border-2 bg-black   items-center justify-center mr-[10%] "
        >
          <button
            onClick={openDao}
            className="flex items-center bg-gradient-to-r from-blue-500 to-blue-800 hover:border-2 border-blue-400 text-white font-bold p-5  h-[60%] rounded-full "
          >
            Create DAO
            <img
              src="src/img/ghost.png"
              alt="phantom-logo"
              className="w-9 ml-2 "
              md:invisible
            />
          </button>
        </div>
        <div
          id="button"
          className="flex border-2   items-center justify-center  "
        >
          <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-800 hover:border-2 border-blue-400 text-white font-bold p-5  h-[60%] rounded-full ">
            Connect to Phantom
            <img
              src="src/img/ghost.png"
              alt="phantom-logo"
              className="w-9 ml-2 "
              md:invisible
            />
          </button>
        </div>
      </nav>
      <nav className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mb-2 ">
        <div className="text-center text-lg lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-xl mr-12 "
          >
            Who are we?
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-xl mr-12"
          >
            Our Vision
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-xl mr-12"
          >
            RoadMap
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-xl mr-12"
          >
            Platform Features
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-xl mr-12"
          >
            Contact Us
          </a>
        </div>
      </nav>

      <hr className="opacity-20 ml-20 mr-20 "></hr>
    </div>
  );
}
