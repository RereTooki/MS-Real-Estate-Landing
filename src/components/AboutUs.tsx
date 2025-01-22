import React from "react";
import aboutUs from "../assets/images/aboutUs.png";
import arrowLDark from "../assets/icons/arrowLDark.svg";
import arrowLLight from "../assets/icons/arrowLLight.svg";

const AboutUs = () => {
  return (
    <>
      <div className="h-[100vh] sborder-4 border-double border-black p-4 ibmFont select-none flex flex-col justify-between mt-14">
        <div className="sborder-4 border-double flex flex-col ] items-center">
          <p
            className="poppinsFont font-normal text-base text-[#A3865C]"
            data-aos="zoom-in"
            data-aos-duration="1700"
          >
            About Us
          </p>
          <div className="flex flex-row sborder-2 justify-between">
            <div
              className="flex flex-col gap-6 sborder-2"
              data-aos="fade-right"
              data-aos-duration="1700"
            >
              <h3
                className="poppinsFont font-medium text-[55px] leading-[82.5px] texts-center sborder-2 border-black w-[52vw]
              "
              >
                Get to Know Us: Leaders in{" "}
                <span className="text-[#A3865C]">Property Solutions</span>
              </h3>
              <div className="flex sborder-2 border-black border-double justify-between">
                <div className="border-[1px] px-14 py-2 rounded-full w-fit self-center poppinsFont font-medium text-sm bg-[#A3865C] border-[#A3865C] hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer text-white">
                  Profile
                </div>
                <div className="border-[1px] px-14 py-2 rounded-full w-fit self-center poppinsFont font-medium text-sm border-[#A3865C] hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer text-[#A3865C]">
                  Sale
                </div>
                <div className="border-[1px] px-14 py-2 rounded-full w-fit self-center poppinsFont font-medium text-sm border-[#A3865C] hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer text-[#A3865C]">
                  Team
                </div>
                <div className="border-[1px] px-14 py-2 rounded-full w-fit self-center poppinsFont font-medium text-sm border-[#A3865C] hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer text-[#A3865C]">
                  Price
                </div>
              </div>
            </div>
            <p
              className="w-[30%] font-normal text-base text-black/50 self-center sborder-2 border-black text-justify"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              Discover our commitment to excellence in property solutions, where
              we lead with expertis, a passion for exceeding client
              expectations.
            </p>
          </div>
        </div>
        <div className="border-4 border-double h-[50vh] shover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer relative quoteBG quoteBG1 rounded-[50px]">
          {/* <div className="h-full">
            <img
              className="w-full h-full rounded-[50px] "
              src={aboutUs}
              alt="About Us"
            />
          </div> */}
          <div className="flex flex-col sborder-4 border-black absolute stop-8 sleft-20 w-[62vw] gap-2 text-white top-[50%] left-[50%] transform -translate-x-2/3 -translate-y-1/2 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
            {" "}
            <h3
              className="poppinsFont font-semibold text-4xl leading-[60px] sborder-2 border-black w-[62vw] text-whitse z-40 absoluste bottom-0
              "
            >
              Celebrating Excellence: Unveiling Our Identity
            </h3>
            <p className="text-white/80 poppinsFont font-normal text-base text-justify">
              We are a dedicated team of real estate professionals committed to
              delivering exceptional service and unparalleled expertise. With a
              focus on integrity and client satisfaction, we strive to redefine
              industry standards by providing personalized solutions tailored to
              meet your unique needs.
            </p>
            <div className="sborder-4 flex flex-row w-fit gap-4 mt-2">
              <div className="border-2 px-6 rounded-full bg-white border-white hover:border-white/20 flex items-center backdrop-opacity-10 hover:backdrop-opacity-95 hover:bg-white/20 backdrop-invert hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
                <div className="h-[12px] w-[7px] object-cover ">
                  <img
                    className="w-full h-full object-cover"
                    src={arrowLDark}
                    alt="background-img"
                  />
                </div>
              </div>
              <p className="text-white/60s poppinsFont font-medium text-[32px] text-justify">
                02
              </p>
              <div className="border-2 px-6 rounded-full flex items-center bg-[#A3865C] border-[#A3865C] hover:border-[#A3865C]/20 backdrop-opacity-10 hover:backdrop-opacity-95 hover:bg-[#A3865C]/20 backdrop-invert hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
                <div className="h-[12px] w-[7px] object-cover">
                  <img
                    className="w-full h-full object-cover"
                    src={arrowLLight}
                    alt="background-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
