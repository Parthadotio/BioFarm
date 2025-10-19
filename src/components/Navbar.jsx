import React, { useState } from "react";

const Navbar = () => {
  
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed bg-transparent w-full">
      <div
        className={`header w-full flex items-center justify-between md:justify-between p-6 md:px-20 h-20 font-inconsolata ${
          open ? "bg-black" : ""
        }`}
      >
        {open ? (
          <div className="left flex items-center gap-2">
            <a href="#" className=" text-slate-200 text-2xl font-light ">
              Menu
            </a>
          </div>
        ) : (
          <div className="left flex items-center gap-2">
            <a href="#" className="font-light text-2xl">
              Bio<br></br>
              Farm
            </a>
          </div>
        )}
        {/* <img
            className="w-20 h-10 rounded-full md:w-10"
            src="https://ik.imagekit.io/parthapp/BioFarm/proxy-image.jpeg?updatedAt=1760884113982"
            alt=""
          /> */}
        <div className="right hidden md:flex md:items-center md:gap-8">
          <a href="#home">
            <span>Home</span>
          </a>
          <a href="#about">
            <span>About</span>
          </a>
          <a href="#marketplace">
            <span>Marketplace</span>
          </a>
          <a href="#community">
            <span>Community</span>
          </a>
          <button className="bg-lime-300 rounded-full p-2 items-center justify-center cursor-pointer">
            Login
          </button>
        </div>

        {/* mobile-menu button */}
        <div className="mobile md:hidden flex items-center ">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl cursor-pointer"
          >
            {open ? (
              <i className="ri-close-line text-white"></i>
            ) : (
              <i className="ri-menu-3-line"></i>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <hr className="text-slate-100"></hr>
          <div className="flex flex-col bg-black h-screen text-white font-inconsolata font-semibold p-6 gap-8">
            <a href="#home">
              <span>Home</span>
            </a>
            <a href="#about">
              <span>About</span>
            </a>
            <a href="#marketplace">
              <span>Marketplace</span>
            </a>
            <a href="#community">
              <span>Community</span>
            </a>
            <button className="cursor-pointer bg-green-300 text-black rounded-full h-10">
              <span>Sign in</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
