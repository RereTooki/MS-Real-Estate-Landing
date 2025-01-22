import React from "react";
import arrowLDark from "../assets/icons/arrowLDark.svg";
import arrowLLight from "../assets/icons/arrowLLight.svg";
import aboutUs from "../assets/images/aboutUs.png";

const Footer = () => {
  return (
    <>
      foot
      <div
        className="border-4 border-double h-[50vh] hovser:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer relative quoteBG quoteBG1 m-4 rounded-[30px]"
        data-aosS="fade-up"
        data-aos-duration="1700"
      >
        {/* <div className="h-full">
          <img
            className="w-full h-full rounded-[50px] "
            src={aboutUs}
            alt="About Us"
          />
        </div> */}
        <div className="flex flex-col sborder-4 border-black absolute stop-8 sleft-20 w-[62vw] gap-2 text-white top-[50%] left-[50%] transform -translate-x-2/3 -translate-y-1/2 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer ">
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
            <div className="border-2 px-6 rounded-full bg-white border-white flex items-center backdrop-opacity-10 hover:backdrop-opacity-95 hover:bg-white/40 backdrop-invert hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
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
            <div className="border-2 px-6 rounded-full flex items-center bg-[#A3865C] border-[#A3865C] backdrop-opacity-10 hover:backdrop-opacity-95 hover:bg-[#A3865C]/40 backdrop-invert hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
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
    </>
  );
};

export default Footer;
