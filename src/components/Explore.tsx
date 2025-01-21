import React from "react";
import explorebg from "../assets//images/explore.png";
import explore1 from "../assets/images/explore1.png";
import explore2 from "../assets/images/explore2.png";
import location from "../assets/icons/location.svg";
import clock from "../assets/icons/clock.svg";
import zoomin from "../assets/icons/zoomIn.svg";
import zoomout from "../assets/icons/zoomOut.svg";
import navigate from "../assets/icons/navigate.svg";
import navigate2 from "../assets/icons/navigate2.svg";
import "../App.css";

const Explore = () => {
  return (
    <>
      <div className="h-[100vh] sborder-4 border-double border-black p-4 ibmFont select-none">
        <div
          className="wborder-4 w-full h-full rounded-[24px] ibmFont relative overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1700"
        >
          <div className="hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer h-[100vh]">
            <img
              className="w-full h-full rounded-[24px]"
              src={explorebg}
              alt="background-img"
            />
          </div>{" "}
          <div className="sborder-4 border-black w-[100%] text-white absolute top-6 left-0 px-8 hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer flex flex-row justify-between itesms-center h-fit">
            {" "}
            <div className="sborder-4 border-double flex flex-col gap-[15px] w-[38%]">
              <h2 className="sborder-2 font-medium text-[50px] leading-[65px] leading-none text-white ibmFont">
                Explore Properties Nearby
              </h2>
              <p className="font-normal leading-[18px] text-xs ibmFont tracking-wider text-justify text-white/90">
                Explore a curated selection of properties located in your
                preferred area, and uncover opportunities that are just around
                the corner. Whether you're looking for a cozy apartment in a
                bustling neighborhood or a tranquil retreat in a serene locale,
                our listings offer a variety of options to suit your lifestyle.
              </p>
            </div>
            <div className="sborder-4 border-double flex flex-col gasp-[15px] gap-4 justify-between">
              <div className="sborder-2 flex flex-col items-center gap-2 hover:scale-[1.04] transition ease-in-out duration-500 delay-10">
                <div className="h-[18px] w-[18px]">
                  <img className="w-full h-full" src={zoomin} alt="zoom" />
                </div>
                <p className="ibmFont font-medium text-xs">Zoom In</p>
              </div>
              <div className="flex flex-col items-center gap-2 hover:scale-[1.04] transition ease-in-out duration-500 delay-10">
                <div>
                  <div className="h-[18px] w-[18px]">
                    <img
                      className="w-full h-full"
                      src={navigate2}
                      alt="navigate icon"
                    />
                  </div>
                  <div className="h-[18px] w-[18px]">
                    <img
                      className="w-full h-full"
                      src={navigate}
                      alt="navigate icon"
                    />
                  </div>
                </div>
                <p className="ibmFont font-medium text-xs">Navigate</p>
              </div>
              <div className="sborder-2 flex flex-col items-center gap-2 hover:scale-[1.04] transition ease-in-out duration-500 delay-10">
                <div className="h-[18px] w-[18px]">
                  <img className="w-full h-full" src={zoomout} alt="zoom" />
                </div>
                <p className="ibmFont font-medium text-xs">Zoom Out</p>
              </div>
            </div>
          </div>
          <div className="sborder-4 border-black w-[100%] text-white absolute bottom-6 left-0 px-8 hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer flex flex-row gap-2 justify-between items-center ">
            <div className="sborder-4 border-double flex flex-col gap-[15px]">
              <div className="flex flex-col">
                <h5 className="font-medium text-[10px] leading-none text-white/90 ibmFont">
                  Current Location
                </h5>
                <h4 className="font-medium text-lg ibmFont">
                  Jalan Raden Patah No. 30, Kudus, Central Java 59346
                </h4>
              </div>
              <h5 className="font-normal text-[8px] text-white/90 ibmFont">
                Latitude 23.4567, Longitude 76.5432
              </h5>
              <p className="ibmFont text-xs font-medium py-2 px-4 border-white border-[0.5px] hover:scale-[1.02] transition ease-in-out duration-500 delay-10 w-fit rounded-full backdrop-opacity-10 hover:backdrop-opacity-95 hover:bg-white/10 backdrop-invert hover:text-black">
                Change Location
              </p>
            </div>

            <div className="sborder-4 border-double flex flex-col sborder-4 items-center justify-between mt-2 gap-6 mw-[37%]">
              <div className="flex flex-row sborder-2 border-black justify-between w-full items-end">
                <p className="font-medium text-lg ibmFont">1,320 Results</p>
                <p className="font-medium text-xs italic text-[#FFD055] ibmFont">
                  see all
                </p>
              </div>
              <div className="flex flex-row sborder-2 border-black justify-between w-full gap-4">
                <div className="border-[0.5px] border-white rounded-[18px] backdrop-blur-[10px] flex flex-col p-2 gap-2">
                  {" "}
                  <div className="flex flex-row sborder-2 w-full justify-between gap-4">
                    <div className="hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer w-[60px] h-[60px]">
                      <img
                        className="w-full h-full rounded-[18px]"
                        src={explore1}
                        alt="Single-Family Home in City A"
                      />
                    </div>
                    <div className="sborder-4 flex flex-col gap-2 w-[144px]">
                      <div className="sborder-2 truncate ... text-xs ibmFont font-medium">
                        Single-Family Home in City A
                      </div>
                      <div className="sborder-2 text-[10px] ibmFont font-medium">
                        $815,000
                      </div>
                      <div className="sborder-2 flex items-center gap-2 font-normal text-[8px]">
                        <div className="borsder-2 h-[10px] w-[8px] object-cover">
                          <img
                            className="w-full h-full object-cover"
                            src={location}
                            alt="Location icon"
                          />
                        </div>
                        <p className="text-white/80  truncate ... ibmFont">
                          908 Elm Street, Unit 4B, Austin, TX 78701
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between bsorder-2">
                    <div>
                      <p className="font-medium text-[8px] ibmFont text-white">
                        @abigail.moore
                      </p>
                    </div>
                    <div className="sborder-2 text-[10px] ibmFont font-medium flex gap-2 self-end">
                      <div className="borsder-2 h-[10px] w-[10px] object-cover">
                        <img
                          className="w-full h-full object-cover"
                          src={clock}
                          alt="A clock"
                        />
                      </div>
                      <p className="text-[#D3D3D3] italic font-medium text-[8px] ibmFont">
                        2 hours ago
                      </p>
                    </div>
                  </div>{" "}
                </div>
                <div className="border-[0.5px] border-white rounded-[18px] backdrop-blur-[10px] flex flex-col p-2 gap-2">
                  {" "}
                  <div className="flex flex-row sborder-2 w-full justify-between gap-4">
                    <div className="hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer w-[60px] h-[60px]">
                      <img
                        className="w-full h-full rounded-[18px]"
                        src={explore2}
                        alt="Modern Family House"
                      />
                    </div>
                    <div className="sborder-4 flex flex-col gap-2 w-[144px]">
                      <div className="sborder-2 truncate ... text-xs ibmFont font-medium">
                        Modern Family Home
                      </div>
                      <div className="sborder-2 text-[10px] ibmFont font-medium">
                        $420,000
                      </div>
                      <div className="sborder-2 flex items-center gap-2 font-normal text-[8px]">
                        <div className="borsder-2 h-[10px] w-[8px] object-cover">
                          <img
                            className="w-full h-full object-cover"
                            src={location}
                            alt="Location icon"
                          />
                        </div>
                        <p className="text-white/80  truncate ... ibmFont">
                          789 Park Avenue, Unit 20A, New York, NY 10021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between bsorder-2">
                    <div>
                      <p className="font-medium text-[8px] ibmFont text-white">
                        @ava.martinez
                      </p>
                    </div>
                    <div className="sborder-2 text-[10px] ibmFont font-medium flex gap-2 self-end">
                      <div className="borsder-2 h-[10px] w-[10px] object-cover">
                        <img
                          className="w-full h-full object-cover"
                          src={clock}
                          alt="A clock"
                        />
                      </div>
                      <p className="text-[#D3D3D3] italic font-medium text-[8px] ibmFont">
                        2 hours ago
                      </p>
                    </div>
                  </div>{" "}
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
