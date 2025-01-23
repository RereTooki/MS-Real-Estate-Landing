import React from "react";
import logo from "../assets/icons/MSDark.svg";
import WritingAnimation from "../animations/WritingAnimation";

const Loading = () => {
  return (
    <>
      {" "}
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100  transition ease-in-out duration-500 delay-10  select-none">
        <div className="flex flex-col items-center">
          <div className=" sborder-4 transition ease-in-out duration-500 delay-10  hover:scale-[1.08] w-[30vw] h-[30vw]m animate-pulse">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={logo}
              alt="background-img"
            />
          </div>
          <div
            className="sborder-4 msax-w-[80%]"
            data-aos="zoom-in"
            data-aos-duration="1700"
          >
            <h1 className="loraFont font-medium text-[3.5vw] text-center text-black/50 leasding-[102px] hover:scale-[1.04] transition ease-in-out duration-500 delay-10 ">
              <WritingAnimation text="Where Luxury Meets Affordabilitys" />
              {/* Where <span className="font-normal italic">Luxury</span> Meets
              Affordability */}
            </h1>
          </div>
          <div className="flex gap-4 ">
            <div className="loader animate-spin rounded-xl border-4 border-[#392C19]/40 border-4 h-8 w-8"></div>
            <div className="loader animate-spin rounded-xl border-4 border-[#392C19]/60 border-4 h-8 w-8"></div>
            <div className="loader animate-spin rounded-xl border-4 border-[#392C19]/80 border-4 h-8 w-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
