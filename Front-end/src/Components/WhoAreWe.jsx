import React from "react";

export default function WhoAreWe({openDao}) {
  return (
    <div id="WhoAreWe">
      <div className="p-28 mt-4 ">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ">
          <div className="p-14">
            <h2 className="text-left text-9xl font-medium text-sky-200">
              DAOTech:{" "}
            </h2>
            <h2 className="text-left text-4xl font-medium text-sky-200">
              Shaping the Future of Communities Platform
            </h2>
            <p className="text-3xl text-white text-left mt-6 ">
              DAOTech is a platform that enables users to come together to
              create community-focused DAOs (Decentralized Autonomous
              Organizations) in order to realize their dreams and foster
              innovation.
            </p>
            <div id="button" className="flex justify-center items-center m-10">
              <button
                onClick={openDao}
                className="flex items-center bg-gradient-to-r 
            from-blue-500 to-blue-800 hover:bg-gradient-to-bl
             border-blue-400 font-bold p-5  
             rounded-2xl "
              >
                Create New DAO
                <img
                  src="src/img/chain.png"
                  alt="phantom-logo"
                  className="w-9 ml-2 "
                  md:invisible
                />
              </button>
            </div>

           
          </div>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
