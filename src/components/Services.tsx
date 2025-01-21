import React from "react";
import "../App.css";
import serviceRS from "../assets/icons/serviceRS.svg";
import servicePM from "../assets/icons/servicePM.svg";
import serviceMA from "../assets/icons/serviceMA.svg";
import serviceHS from "../assets/icons/serviceHS.svg";
import arrowD from "../assets/icons/arrowDown.svg";
import reServMini from "../assets/images/reServiceMini.png";
import reServ from "../assets/images/reService.png";

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
          data-aos="fade-up"
          data-aos-duration="1700"
        >
          <div className="border-[1px] border-[#A3865C] w-[22%] h-[40vh] rounded-[20px]  bg-[#A3865C] flex flex-col items-center justify-center overflow-hidden hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer">
            <div className="sborder-2 flex flex-col items-center gap-4 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
              <div className="h-[59px] w-[59px]">
                <img
                  className="w-full h-full"
                  src={serviceHS}
                  alt="Home Staging"
                />
              </div>
              <p className="poppinsFont font-medium text-xl text-center text-white">
                Home Staging
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#BBBBBB] w-[22%] h-[40vh] rounded-[20px] bg-white flex flex-col items-center justify-center overflow-hidden hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer">
            <div className="sborder-2 flex flex-col items-center gap-4 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
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
          <div className="border-[1px] border-[#BBBBBB] w-[22%] h-[40vh] rounded-[20px] bg-white flex flex-col items-center justify-center overflow-hidden hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer">
            <div className="sborder-2 flex flex-col items-center gap-4 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
              <div className="h-[59px] w-[59px]">
                <img
                  className="w-full h-full"
                  src={serviceMA}
                  alt="Mortgage Assistance"
                />
              </div>
              <p className="poppinsFont font-medium text-xl text-center">
                Mortgage Assistance
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#BBBBBB] w-[22%] h-[40vh] rounded-[20px] bg-white flex flex-col items-center justify-center overflow-hidden hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer">
            <div className="sborder-2 flex flex-col items-center gap-4 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
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
      <div className="sborder-4 border-double border-black p-4 select-none ibmFont flex flex-row items-cesnter justify-between bsg-[#FFFDF8]">
        <div
          className="sborder-2 border-double w-[40%] flex flex-col text-black/60"
          data-aos="fade-right"
          data-aos-duration="1700"
        >
          <h3 className="poppinsFont font-medium text-3xl leading-[48px] text-black mb-4">
            Real Estate Services
          </h3>
          <p className="poppinsFont font-normal text-base leading-6 text-justify mb-10">
            We pride ourselves on offering a wide range of professional real
            estate services tailored to meet the diverse needs of our clients We
            provide market insights, negotiate on your behalf.
          </p>
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex flex-row gap-4">
              {" "}
              <div className="h-[20px] w-[20px]">
                <img className="w-full h-full" src={arrowD} alt="Arrow Down" />
              </div>
              <p className="poppinsFont font-normal text-base leading-6 ">
                Customized Property Marketing
              </p>
            </div>
            <div className="flex flex-row gap-4">
              {" "}
              <div className="h-[20px] w-[20px]">
                <img className="w-full h-full" src={arrowD} alt="Arrow Down" />
              </div>
              <p className="poppinsFont font-normal text-base leading-6 ">
                Property Valuation Services
              </p>
            </div>
            <div className="flex flex-row gap-4">
              {" "}
              <div className="h-[20px] w-[20px]">
                <img className="w-full h-full" src={arrowD} alt="Arrow Down" />
              </div>
              <p className="poppinsFont font-normal text-base leading-6 ">
                Market Research and Analysis
              </p>
            </div>
          </div>
          <div className="rounded-full py-2 text-white bg-[#A3865C] w-1/2 text-center hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer">
            Explore More
          </div>
        </div>
        <div
          className="sborder-2 relative h-fit hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer"
          data-aos="fade-left"
          data-aos-duration="1700"
        >
          <div className="h-[296px] w-[38vw] hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
            <img className="w-full h-full" src={reServ} alt="Real Estate" />
          </div>
          <div className="h-[199px] w-[24vw] sborder-2 absolute top-1/2 right-2/3 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
            <img
              className="w-full h-full "
              src={reServMini}
              alt="Real Estate"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
