import React from "react";
import "../App.css";
import discover1 from "../assets/images/discover1.png";
import discover2 from "../assets/images/discover2.png";
import discover3 from "../assets/images/discover3.png";
import customer2 from "../assets/images/customer2.png";
import chat from "../assets/icons/chat.svg";
import call from "../assets/icons/call.svg";
import width from "../assets/icons/width.svg";
import bathtub from "../assets/icons/bathtub.svg";
import bedroom from "../assets/icons/bedroom.svg";

const Discover = () => {
  return (
    <>
      <div className="h-[100vh] w-full border-4 border-black border-double px-4 py-14 flex flex-row justify-between select-none">
        <div className="border-4 w-[38vw]  rounded-[24px]">
          <div className="">
            <img
              className="w-full h-full rounded-[24px]"
              src={discover1}
              alt="background-img"
            />
          </div>
        </div>
        <div className="sborder-4 border-black flex flex-col justify-between ibmFont">
          {" "}
          <div className="flex flex-col items-center gap-2 sborder-4 border-dashed">
            <div className="sborder-2 h-[60px] w-[60px] rounded-full">
              <img
                className="w-full h-full rounded-full"
                src={customer2}
                alt="background-img"
              />
            </div>
            <div className="text-[#D3D3D3] text-[8px] font-medium z-20 sborder-2 self-center ibmFont">
              <p>@budi.santoso</p>
            </div>
            <div className="text-[#010101] text-lg font-medium z-20 sborder-2 self-center ibmFont text-center flex flex-col gap-0s">
              <p>Budi Santoso</p>
              <p className="text-[8px] italic leading-snug">
                budisantoso24@email.com
              </p>
            </div>
            <div className="border-[0.5px] border-[#010101] w-[15vw] text-xs rounded-[24px] flex items-center justify-center py-2 gap-4 mt-2">
              <div className="borsder-2 h-[20px] w-[20px] object-cover">
                <img
                  className="w-full h-full object-cover"
                  src={chat}
                  alt="background-img"
                />
              </div>
              <p className="ibmFont font-medium text-xs">Message</p>
            </div>
            <div className="border-[0.5px] border-[#010101] w-[15vw] text-xs rounded-[24px] flex items-center justify-center py-2 gap-4 mt-2">
              <div className="borsder-2 h-[20px] w-[20px] object-cover">
                <img
                  className="w-full h-full object-cover"
                  src={call}
                  alt="background-img"
                />
              </div>
              <p className="ibmFont font-medium text-xs">Call</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 sborder-4 border-dashed h-full justify-around">
            <div className="flex sborder-4 items-center gap-4">
              <div className="h-[13px] w-[30px]">
                <img
                  className="w-full h-full"
                  src={width}
                  alt="background-img"
                />
              </div>
              <div className="flex flex-col">
                <p className="italic text-[8px]">Size</p>
                <p className="italic text-xs">200 m²</p>
              </div>
            </div>
            <div className="flex border-black sborder-4 w-full justify-around">
              <div className="flex flex-col sborder-4 items-center gap-4">
                <div className="h-[24px] w-[24px]">
                  <img className="w-full h-full" src={bathtub} alt="bathtub" />
                </div>
                <div className="flex flex-col">
                  <p className="italic text-[8px] font-medium text-center">
                    Bathroom
                  </p>
                  <p className="italic text-xs font-medium">2 Rooms</p>
                </div>
              </div>
              <div className="flex flex-col sborder-4 items-center gap-4">
                <div className="h-[24px] w-[24px]">
                  <img className="w-full h-full" src={bedroom} alt="bathtub" />
                </div>
                <div className="flex flex-col">
                  <p className="italic text-[8px] font-medium text-center">
                    Bedroom
                  </p>
                  <p className="italic text-xs font-medium">3 Rooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between s-[0.5px] border-[#010101] w-[38vw] rounded-[24px]">
          <div className="border-[0.5px] border-[#010101] w-[38vw]  rounded-[24px] flex flex-col px-4 py-6 ">
            <h3 className="ibmFont text-4xl font-medium leading-[47px] pb-4">
              Discover Your Next Chapter in the Perfect Home
            </h3>
            <p className="font-normal text-xs ibmFont tracking-wider text-justify leading-[18px]">
              Finding the right home is more than just a transaction; it’s the
              start of a new chapter in your life. Whether you’re upgrading,
              downsizing, or finding your very first place, our curated
              selection of properties is designed to meet your unique needs and
              aspirations.
            </p>
          </div>
          <div className="flex flex-row bsorder-4 justify-between">
            <div className="w-[48%]">
              <img
                className="w-full h-full rounded-[24px]"
                src={discover2}
                alt="background-img"
              />
            </div>
            <div className="w-[48%]">
              <img
                className="w-full h-full rounded-[24px]"
                src={discover3}
                alt="background-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
