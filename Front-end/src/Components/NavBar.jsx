import React from "react";
// import { Wallet } from "../Wallet";

export default function NavBar({ setIsOpen }) {
  const openDao = (e) => {
    setIsOpen(true);
    console.log("tikladi");
  };

  return (
    <div className="grid grid-cols-5 gap-2">
      <div className="flex justify-center items-center p-2">
        <img src="/src/img/logob.png" className="w-3/5" alt="DAOTech.logo" />
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <div className="text-center text-xl lg:flex-grow">
          <a
            href="#whoAreWe"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6 font-antonio "
          >
            Who are we?
          </a>
          <a
            href="#platformFeatures"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6 font-antonio"
          >
            Platform Features
          </a>
          <a
            href="#ourVision"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6 font-antonio"
          >
            Our Vision
          </a>
          <a
            href="#roadMap"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6 font-antonio"
          >
            RoadMap
          </a>
          <a
            href="#FAQ"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6 font-antonio"
          >
            FAQ
          </a>
          <a
            href="#contactUs"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6 font-antonio"
          >
            Contact Us
          </a>

         
        </div>
        {/* <Wallet/> */}
        <div id="button" className="flex items-center justify-center float-left">
            <button 
                
                className="flex items-center bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gradient-to-bl border-blue-400 text-gray-200 font-antonio p-2 py-6 rounded-lg h-[15%] mr-10">
                Connect to Phantom 
                <img src="src/img/ghost.png" alt="phantom-logo" className="w-9 ml-2 md:invisible" />
            </button>
        </div>
      </div>

     
    </div>
  );
}
