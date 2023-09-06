import React from "react";

export default function Ingredients() {
  return (
    <div>
      <nav className="">
        <div
          className="text-center text-2xl lg:flex-grow"
          onClick={() => {
            console.log("tiklandi");
          }}
        >
          <button
            href="#footer "
            onClick={() => {
              console.log("tiklandi");
            }}
            className="button block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6 "
          >
            Who are we?
          </button>
          <a
            onClick={console.log("tikladik")}
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6"
          >
            Platform Features
          </a>
          <a
            href="#ourVision"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6"
          >
            Our Vision
          </a>
          <a
            href="#roadMap"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6"
          >
            RoadMap
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6"
          >
            FAQ
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 mr-6"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
}
