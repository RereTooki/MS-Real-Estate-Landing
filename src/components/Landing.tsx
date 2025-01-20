import React from "react";
import "../App.css";
import introImg from "../assets/images/Intro.png";
import curve from "../assets/icons/curve.svg";
import NavigationBar from "./NavigationBar";

const Landing = () => {
  return (
    <>
      <div className="h-[100vh] min-h-[404px] border-4 border-double border-black transition ease-in-out duration-500 delay-100 poppinsFont select-none">
        <div className="z-20" data-aoss="fade-down" data-aos-duration="700">
          <NavigationBar />
        </div>
        <div className="nxl:sborder-4 border-black border-double px-2 h-[100vh] min-h-[404px]">
          <img className="w-full h-full" src={introImg} alt="background-img" />
        </div>
        <div className="h-[85vh] sborder-4 border-black flex flex-col items-center justify-center text-[40px] absolute w-full top-[15vh] z-10">
          <div className=" flex justify-between items-center gap-4 text-sm text-white px-[2px] hover:px-[4px] py-[3px] hsover:scale-[1.04] backdrop-opacity-10 hover:backdrop-opacity-95  bg-white/40 hover:ng-white/10 backdrop-invert  rounded-full border-2 border-transparent transition ease-in-out duration-500 delay-10 cursor-pointer drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]">
            <div className="hovser:border-2 border-transparent rounded-full px-6 py-[7px] hover:text-black transition ease-in-out duration-500 delay-50 font-semibold ">
              Experience Real Estate Excellence
            </div>
          </div>
          <div className="sborder-4 max-w-[80%]">
            <h1 className="loraFont font-medium text-[5.5vw] text-center text-white leading-[102px]">
              Where <span className="font-normal italic">Luxury</span> Meets
              Affordability
            </h1>
          </div>
          <div className="sborder-4 border-black border-double px-2 h-[34vh] w-[43vw]">
            <img className="w-full h-full" src={curve} alt="background-img" />
          </div>
        </div>
      </div>
      s
    </>
  );
};

export default Landing;
