import React from "react";
import logo from "../assets/icons/MS.svg";
import arrow from "../assets/icons/arrow.svg";
import "../App.css";

const NavigationBar = () => {
  return (
    <>
      <div className="w-full m-2 sborder-4 border-black px-20 absolute top-[3.5vh] ">
        <div className="flex justify-between s">
          <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={logo}
              alt="background-img"
            />
          </div>
          <div className=" flex justify-between items-center gap-4 text-sm text-white px-[2px] hover:px-[4px] py-[3px] hover:scale-[1.02] backdrop-opacity-10  bg-white/20 backdrop-invert  rounded-full border-2 border-transparent transition ease-in-out duration-500 delay-10 cursor-pointer drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]">
            <div className="border-2 border-white bg-white backdrop-invert rounded-full text-black px-6 py-[7px] hover:scale-[1.04] transition ease-in-out duration-500 delay-50 ">
              Home
            </div>
            <div className="hover:border-2 border-transparent rounded-full hover:text-black hover:backdrop-invert hover:bg-white px-6 py-[7px] hover:scale-[1.04] transition ease-in-out duration-500 delay-50">
              Product
            </div>
            <div className="hover:border-2 border-transparent rounded-full hover:text-black hover:backdrop-invert hover:bg-white px-6 py-[7px] hover:scale-[1.04] transition ease-in-out duration-500 delay-50">
              Services
            </div>
            <div className="hover:border-2 border-transparent rounded-full hover:text-black hover:backdrop-invert hover:bg-white px-6 py-[7px] hover:scale-[1.04] transition ease-in-out duration-500 delay-50">
              About
            </div>
            <div className="hover:border-2 border-transparent rounded-full hover:text-black hover:backdrop-invert hover:bg-white px-6 py-[7px] hover:scale-[1.04] transition ease-in-out duration-500 delay-50">
              Review
            </div>
          </div>
          <div className=" flex justify-between items-center  text-sm text-white px-[2px] hover:px-[4px] py-[3px] hover:scale-[1.04] backdrop-opacity-10  bg-white/20 backdrop-invert  rounded-full border-2 border-transparent transition ease-in-out duration-500 delay-10 cursor-pointer drop-shadow-[3px_6px_5px_rgba(0,0,0,0.35)]">
            <div className="rounded-full px-4 py-[7px] transition ease-in-out duration-500 delay-50">
              Contact Us
            </div>
            <div className="border-4 border-white rounded-full p-2 bg-white">
              <img
                className="w-full h-full "
                src={arrow}
                alt="background-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
