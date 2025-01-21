import React from "react";
import explorebg from "../assets//images/explore.png";
import ellipses from "../assets/icons/ellipses.svg";
import location from "../assets/icons/location.svg";
import clock from "../assets/icons/clock.svg";

const Explore = () => {
  return (
    <>
      <div className="h-[100vh] border-4 border-double border-black p-4">
        <div
          className="wborder-4 w-full h-full rounded-[24px] ibmFont relative overflow-hidden"
          data-aoss="fade-right"
          data-aos-duration="1700"
        >
          <div className="hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer h-[100vh]">
            <img
              className="w-full h-full rounded-[24px]"
              src={explorebg}
              alt="background-img"
            />
          </div>
          <div className="sborder-4 border-black w-[100%] text-white absolute bottom-4 left-0 px-4 hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h5 className="font-medium text-2xl">Modern Family Home</h5>
                <h6 className="italic font-medium text-lg">$750,000</h6>
              </div>
              <div className="flex items-center gap-4 font-normal text-xs">
                <div className="borsder-2 h-[15px] w-[12px] object-cover">
                  <img
                    className="w-full h-full object-cover"
                    src={location}
                    alt="Location icon"
                  />
                </div>
                <p className="text-white/80">
                  Jalan Diponegoro No. 15, Semarang, Central Java 50241
                </p>
              </div>
              <div className="flex flex-row sborder-4 items-center justify-between mt-2">
                <div className="sborder-2 flex justify-between w-1/2">
                  <p className="font-medium text-[8px] text-white/70">
                    @budi.santoso
                  </p>
                  <div className="flex gap-2">
                    {" "}
                    <div className="borsder-2 h-[10px] w-[10px] object-cover">
                      <img
                        className="w-full h-full object-cover"
                        src={clock}
                        alt="A clock"
                      />
                    </div>
                    <p className="text-[#D3D3D3] italic font-medium text-[8px]">
                      9:00 AM
                    </p>
                  </div>
                </div>
                <div className="borsder-2 h-[5px] w-[25px] object-cover mr-4">
                  <img
                    className="w-full h-full object-cover"
                    src={ellipses}
                    alt="Ellipses"
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

export default Explore;
