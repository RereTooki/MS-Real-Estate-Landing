import React, { useRef } from "react";
import "../App.css";
import introImg from "../assets/images/Intro.png";
import curve from "../assets/icons/curve.svg";
import curve2 from "../assets/icons/curve2.svg";
import avatars from "../assets/icons/avatars.svg";
import pent from "../assets/images/pent.png";
import customer1 from "../assets/images/customer1.png";
import tick from "../assets/icons/tick.svg";
import NavigationBar from "./NavigationBar";

const Landing = () => {
  // Create refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="h-[100vh] min-h-[404px] sborder-4 border-double border-black transition ease-in-out duration-500 delay-100 poppinsFont select-none w-auto">
        {/* <div
          className="z-50 w-[100%] sborder-4 border-black rounded-lg"
          data-aos="fade-down"
          data-aos-duration="3400"
        >
          <NavigationBar
            introRef={introRef}
            productRef={productRef}
            servicesRef={servicesRef}
            aboutRef={aboutRef}
            reviewRef={reviewRef}
          />
          {/* ss 
        </div> */}
        <div className="nxl:sbsorder-4 border-black border-double p-2 h-[100vh] min-h-[404px] w3-animate-opacity">
          <img className="w-full h-full" src={introImg} alt="background-img" />
        </div>
        <div className="h-[85vh] sborder-4 border-black flex flex-col items-center justify-center text-[40px] absolute w-full top-[15vh] z-10">
          <div
            className=" flex justify-between items-center gap-4 text-sm text-white px-[2px] hover:px-[4px] py-[3px] hsover:scale-[1.04] backdrop-opacity-10 hover:backdrop-opacity-95  bg-white/40 hover:bg-white/10 backdrop-invert  rounded-full border-2 border-transparent transition ease-in-out duration-500 delay-10 cursor-pointer drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
            data-aos="zoom-in"
            data-aos-duration="1700"
          >
            <div className="hovser:border-2 border-transparent rounded-full px-6 py-[7px] hover:text-black transition ease-in-out duration-500 delay-50 font-semibold ">
              Experience Real Estate Excellence
            </div>
          </div>
          <div
            className="sborder-4 max-w-[80%]"
            data-aos="zoom-in"
            data-aos-duration="1700"
          >
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
          <div
            className="sborder-4 border-black border-double overflow-hidden h-[34vh]  mw-[43vw] self-start mx-20 spx-2 relative  transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04]"
            data-aos="fade-right"
            data-ao-duration="1700"
          >
            {/* SVG Background */}
            <img
              className="h-full w-full object-contain"
              src={curve}
              alt="curve/square"
            />

            {/* Text Elements */}
            <div
              className="absolute sborder-4 w-[36.5%] flex justify-between top-2 left- text-black text-[11px] font-medium z-20 px-2"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <div className="ml-[3px] rounded-full px-2 py-[2px] text-[#A3865C] bg-[#FFEACB]">
                Popular{" "}
              </div>
              <div className="rounded-full px-2 py-[2px] msr-2 text-white bg-[#A3865C]">
                Exclusive
              </div>
            </div>

            <div className="flex flex-col sborder-4 absolute top-[30%] left-4 text-black text-xl w-[45%] z-20 font-medium">
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
          <div
            className="sborder-4 border-white border-double overflow-hidden h-[33vh] w-[20vw] mx-20  absolute right-0 top-[45%] hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer"
            data-aos="fade-left"
            data-aos-duration="1700"
          >
            {/* SVG Background */}
            <img
              className="h-[33vh] w-[20vw] rounded-[28px] object-cover over:scale-[1.04] transition ease-in-out duration-500 delay-10   "
              src={curve2}
              alt="curve/square"
            />

            {/* Text Elements */}

            <div
              className="flex flex-col gap-2 sborder-4 absolute top-2 w-full z-20"
              data-aos="fade-right"
              data-aos-duration="1700"
            >
              <div className="flex flex-row gap-4">
                <div className="sborder-2 ml-2 h-[52px] w-[52px]">
                  <img
                    className="w-full h-full "
                    src={customer1}
                    alt="background-img"
                  />
                </div>
                <div className="text-black text-base font-medium z-20 sborder-2 w-[54%] self-center">
                  Customer gets notification
                </div>
              </div>
              <div className="flex flex-row gap-4 ">
                <div className="sborder-2 ml-10 h-[24px] w-[24px]">
                  <img
                    className="w-full h-full"
                    src={tick}
                    alt="background-img"
                  />
                </div>
                <div className="text-black text-sm font-normal z-20 sborder-2 w-[54%] self-center">
                  Promotions and Discounts
                </div>
              </div>
              <div className="flex flex-row gap-4 sborder-4">
                <div className="sborder-2 ml-10 h-[24px] w-[24px]">
                  <img
                    className="w-full h-full"
                    src={tick}
                    alt="background-img"
                  />
                </div>
                <div className="text-black text-sm font-normal z-20 sborder-2 w-[54%]  self-center">
                  New Listings
                </div>
              </div>

              <div className="flex flex-row gap-4 ">
                <div className="sborder-2 ml-10 h-[24px] w-[24px]">
                  <img
                    className="w-full h-full"
                    src={tick}
                    alt="background-img"
                  />
                </div>
                <div className="text-black text-sm font-normal z-20 sborder-2 w-[54%] self-center">
                  Appointment Reminders
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 right-0 mr-20 sborder-4 border-white border-double text-black font-medium text-sm text-white w-[20vw] py-[12px] rounded-full text-center bg-black z-20 ibmFont hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer hover:backdrop-opacity-95   hover:bg-black/10 backdrop-invert hover:text-black w3-animate-opacity animate-pulse">
            <p className="transition ease-in-out duration-500 delay-10 animate-pulse">
              Get Started
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
