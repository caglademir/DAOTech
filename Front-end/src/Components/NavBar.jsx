import React from "react";

export default function NavBar({ setIsOpen }) {
  const openDao = (e) => {
    setIsOpen(true);
    console.log("tikladi");
  };

  return (
    <div className="p-8">
      <nav className="flex justify-end p-8 ">
        <div className="flex items-center text-white w-[60%]">
          <span className="font-semibold text-7xl tracking-tight">DAOTech</span>
        </div>

        <div
          id="button"
          className="flex items-center justify-center mr-[10%]">
          <button
            onClick={openDao}
            
            className="flex items-center bg-gradient-to-r 
            from-blue-500 to-blue-800 hover:bg-gradient-to-bl
             border-blue-400 text-white font-bold p-5  h-[60%] 
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
        
       
      </nav>
     

     
    </div>
  );
}
