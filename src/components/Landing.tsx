import React from "react";
import "../App.css";
import introImg from "../assets/images/Intro.png";
import curve from "../assets/icons/curve.svg";
import avatars from "../assets/icons/avatars.svg";
import pent from "../assets/images/pent.png";
import NavigationBar from "./NavigationBar";

const Landing = () => {
  return (
    <>
      <div className="h-[100vh] min-h-[404px] sborder-4 border-double border-black transition ease-in-out duration-500 delay-100 poppinsFont select-none">
        <div className="z-20" data-aoss="fade-down" data-aos-duration="700">
          <NavigationBar />
        </div>
        <div className="nxl:sborder-4 border-black border-double p-2 h-[100vh] min-h-[404px]">
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

          {/* <div className="border-4 border-black border-double overflsow-hidden  h-[34vh] w-[43vw] self-start mx-20 px-2 flex">
            <img
              className=" h-full  object-auto a"
              src={curve}
              alt="background-img"
            />
            <div className="flex sborder-4 text-black z-20">Popular</div>
          </div> */}
          <div className="sborder-4 border-black border-double overflow-hidden h-[34vh] w-[43vw] self-start mx-20 px-2 relative">
            {/* SVG Background */}
            <img
              className="h-full w-fusll object-cover"
              src={curve}
              alt="curve/square"
            />

            {/* Text Elements */}
            <div className="absolute sborder-4 w-[28%] flex justify-between top-2 left-4 text-black text-[11px] font-medium z-20">
              <div className="rounded-full px-2 py-[2px] text-[#A3865C] bg-[#FFEACB]">
                Popular{" "}
              </div>
              <div className="rounded-full px-2 py-[2px] mr-2 text-white bg-[#A3865C]">
                Exclusive
              </div>
            </div>

            <div className="flex flex-col gap-4 sborder-4 absolute top-[30%] left-4 text-black text-xl w-[45%] z-20 font-medium">
              <div className="relative left-2">
                Exclusive Country Estate Expansive Grounds
              </div>
              <div className="flex w-[100%] sborder-4">
                <div className="sborder-4 border-black border-double px-2 h-[48px]">
                  <img
                    className="w-full h-full"
                    src={avatars}
                    alt="user avatars"
                  />
                </div>
                <div className="text-base text-[#BBBBBB]">100+ supervisors</div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[38%] sborder-2 bg-[#FFFDF8] h-[80.8%] z-20 rounded-[30px]">
              <div className="h-full w-full object-cover rounded-[30px] sborder-4 py-2  pr-2 bg-[#FFFDF8]">
                <img className="w-full h-full" src={pent} alt="penthouse" />
              </div>
              <div className="absolute bottom-0 pb-6 pl-2 right-0 text-black font-medium z-20">
                <div className="flex flex-col sborder-4 w-[90%] ">
                  <p className="text-base text-white font-medium">
                    Luxurious Penthouse
                  </p>
                  <p className="text-xs text-[#D6D3D3] font-medium">
                    Stunning city views, high-end finishes, spacious layout....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      s
    </>
  );
};

export default Landing;
