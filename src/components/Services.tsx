import React from "react";
import "../App.css";
import serviceRS from "../assets/icons/serviceRS.svg";
import servicePM from "../assets/icons/servicePM.svg";

const Services = () => {
  return (
    <>
      <div className="h-[100vh] sborder-4 border-double border-black p-4 select-none flex flex-col items-center justify-around">
        <div
          className="sborder-4 border-double flex flex-col w-[61%] items-center"
          data-aos="zoom-in"
          data-aos-duration="1700"
        >
          <p className="poppinsFont font-normal text-base text-[#A3865C]">
            Services
          </p>
          <h3
            className="poppinsFont font-medium text-[55px] leading-[82.5px] text-center
          "
          >
            Professional <span className="text-[#A3865C]">Real Estate</span>{" "}
            Services
          </h3>
        </div>
        <div
          className="sborder-4 border-double flex flex-row w-full justify-between"
          data-aos="zoom-up"
          data-aos-duration="1700"
        >
          <div className="border-[1px] border-[#A3865C] w-[22%] h-[40vh] rounded-[20px]  bg-[#A3865C] flex flex-col items-center justify-center overflow-hidden">
            <div className="sborder-2 flex flex-col items-center gap-4">
              <div className="h-[59px] w-[59px]">
                <img
                  className="w-full h-full"
                  src={servicePM}
                  alt="Home Staging"
                />
              </div>
              <p className="poppinsFont font-medium text-xl text-center text-white">
                Home Staging
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#BBBBBB] w-[22%] h-[40vh] rounded-[20px] bg-white flex flex-col items-center justify-center overflow-hidden">
            <div className="sborder-2 flex flex-col items-center gap-4">
              <div className="h-[59px] w-[59px]">
                <img
                  className="w-full h-full"
                  src={servicePM}
                  alt="Property Management"
                />
              </div>
              <p className="poppinsFont font-medium text-xl text-center">
                Property Management
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#BBBBBB] w-[22%] h-[40vh] rounded-[20px] bg-white flex flex-col items-center justify-center overflow-hidden">
            <div className="sborder-2 flex flex-col items-center gap-4">
              <div className="h-[59px] w-[59px]">
                <img
                  className="w-full h-full"
                  src={servicePM}
                  alt="Mortgage Assistance"
                />
              </div>
              <p className="poppinsFont font-medium text-xl text-center">
                Mortgage Assistance
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#BBBBBB] w-[22%] h-[40vh] rounded-[20px] bg-white flex flex-col items-center justify-center overflow-hidden">
            <div className="sborder-2 flex flex-col items-center gap-4">
              <div className="h-[59px] w-[59px]">
                <img
                  className="w-full h-full"
                  src={serviceRS}
                  alt="Relocation Services"
                />
              </div>
              <p className="poppinsFont font-medium text-xl text-center">
                Relocation Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
