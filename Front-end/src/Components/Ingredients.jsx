import React from "react";

export default function Ingredients() {
  return (
    <div>
      
      <nav className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mb-2 ">
        <div className="text-center text-xl lg:flex-grow">
          <a
            href="#whoAreWe"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-2xl mr-12 "
          >
            Who are we?
          </a>
          <a
            href="#platformFeatures"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-2xl mr-12"
          >
            Platform Features
          </a>
          <a
            href="#ourVision"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-2xl mr-12"
          >
            Our Vision
          </a>
          <a
            href="#roadMap"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-2xl mr-12"
          >
            RoadMap
          </a>
          <a
            href="#questions"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-2xl mr-12"
          >
            Questions
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-2xl mr-12"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
}
