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
import ellipses from "../assets/icons/ellipses.svg";
import location from "../assets/icons/location.svg";
import clock from "../assets/icons/clock.svg";

const Discover = () => {
  return (
    <>
      <div className="min-h-[100vh] xxl:h-[100vh] w-full sborder-4 border-black border-double px-4 py-14 flex flex-row justify-between select-none">
        <div
          className="sborder-4 w-[38vw] rounded-[24px] ibmFont relative overflow-hidden"
          data-aos="fade-right"
          data-aos-duration="1700"
        >
          <div className="hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer h-full">
            <img
              className="w-full h-full rounded-[24px]"
              src={discover1}
              alt="background-img"
            />
          </div>
          <div className="sborder-4 border-black w-[100%] text-white absolute bottom-8 left-0 px-4 hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h5 className="font-medium text-2xl ibmFont">
                  Modern Family Home
                </h5>
                <h6 className="italic font-medium text-lg ibmFont">$750,000</h6>
              </div>
              <div className="flex items-center gap-4 font-normal text-xs">
                <div className="borsder-2 h-[15px] w-[12px] object-cover">
                  <img
                    className="w-full h-full object-cover"
                    src={location}
                    alt="Location icon"
                  />
                </div>
                <p className="text-white/80 ibmFont">
                  Jalan Diponegoro No. 15, Semarang, Central Java 50241
                </p>
              </div>
              <div className="flex flex-row sborder-4 items-center justify-between mt-2">
                <div className="sborder-2 flex justify-between w-1/2">
                  <p className="font-medium text-[8px] text-white/70 ibmFont">
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
                    <p className="text-[#D3D3D3] italic font-medium text-[8px] ibmFont">
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
        <div
          className="sborder-4 border-black flex flex-col justify-between ibmFont"
          data-aos="zoom-in"
          data-aos-duration="1700"
        >
          {" "}
          <div className="flex flex-col items-center gap-2 sborder-4 border-dashed">
            <div className="sborder-2 h-[60px] w-[60px] rounded-full hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
              <div className="hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
                <img
                  className="w-full h-full rounded-full "
                  src={customer2}
                  alt="background-img"
                />
              </div>
            </div>
            <div className="text-[#D3D3D3] text-[8px] font-medium z-20 sborder-2 self-center ibmFont">
              <p>@budi.santoso</p>
            </div>
            <div className="text-[#010101] text-lg font-medium z-20 sborder-2 self-center ibmFont text-center flex flex-col gap-0s">
              <p className="ibmFont">Budi Santoso</p>
              <p className="text-[8px] italic leading-snug ibmFont">
                budisantoso24@email.com
              </p>
            </div>
            <div className="border-[0.5px] border-[#010101] w-[15vw] text-xs rounded-[24px] flex items-center justify-center py-2 gap-4 mt-2 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
              <div className="borsder-2 h-[20px] w-[20px] object-cover">
                <img
                  className="w-full h-full object-cover"
                  src={chat}
                  alt="background-img"
                />
              </div>
              <p className="ibmFont font-medium text-xs">Message</p>
            </div>
            <div className="border-[0.5px] border-[#010101] w-[15vw] text-xs rounded-[24px] flex items-center justify-center py-2 gap-4 mt-2 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
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
            <div className="flex sborder-4 items-center gap-4 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
              <div className="h-[13px] w-[30px]">
                <img
                  className="w-full h-full"
                  src={width}
                  alt="background-img"
                />
              </div>
              <div className="flex flex-col">
                <p className="italic text-[8px] ibmFont">Size</p>
                <p className="italic text-xs ibmFont">200 m²</p>
              </div>
            </div>
            <div className="flex border-black sborder-4 w-full justify-around">
              <div className="flex flex-col sborder-4 items-center gap-4 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
                <div className="h-[24px] w-[24px]">
                  <img className="w-full h-full" src={bathtub} alt="bathtub" />
                </div>
                <div className="flex flex-col">
                  <p className="italic text-[8px] font-medium text-center ibmFont">
                    Bathroom
                  </p>
                  <p className="italic text-xs font-medium ibmFont">2 Rooms</p>
                </div>
              </div>
              <div className="flex flex-col sborder-4 items-center gap-4 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
                <div className="h-[24px] w-[24px]">
                  <img className="w-full h-full" src={bedroom} alt="bathtub" />
                </div>
                <div className="flex flex-col">
                  <p className="italic text-[8px] font-medium text-center ibmFont">
                    Bedroom
                  </p>
                  <p className="italic text-xs font-medium ibmFont">3 Rooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col sborder-4 justify-between border-[#010101] w-[38vw] rounded-[24px] ibmFont gap-4 xxl:gap-0"
          data-aos="fade-left"
          data-aos-duration="1700"
        >
          <div className="border-[0.5px] border-[#010101] w-[38vw]  rounded-[24px] flex flex-col px-4 py-6 hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
            <h3 className="ibmFont text-4xl font-medium leading-[47px] pb-4">
              Discover Your Next Chapter in the Perfect Home
            </h3>
            <p className="font-normal text-xs tracking-wider text-justify leading-[18px] ibmFont">
              Finding the right home is more than just a transaction; it’s the
              start of a new chapter in your life. Whether you’re upgrading,
              downsizing, or finding your very first place, our curated
              selection of properties is designed to meet your unique needs and
              aspirations.
            </p>
          </div>
          <div className="flex flex-row sborder-4 justify-between">
            <div className="w-[48%] relative overflow-hidden rounded-[24px]">
              <div className="hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer">
                <img
                  className="w-full h-full rounded-[24px]"
                  src={discover2}
                  alt="Luxury Villa With Pool"
                />
              </div>

              <div className="sborder-4 border-black w-[100%] text-white absolute bottom-4 left-0 px-4 hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h5 className="font-medium text-xs leading-loose ibmFont">
                      Luxury Villa with Pool
                    </h5>
                    <h6 className="font-medium text-[10px] ibmFont">
                      $220,000
                    </h6>
                  </div>
                  <div className="flex items-center gap-4 font-normal text-[8px]">
                    <div className="borsder-2 h-[10px] w-[8px] object-cover">
                      <img
                        className="w-full h-full object-cover"
                        src={location}
                        alt="Location icon"
                      />
                    </div>
                    <p className="truncate ... text-white/80 ibmFont">
                      Jalan Gajah Mada No. 22, Ungaran, Central Java 50512
                    </p>
                  </div>
                  <div className="flex flex-row sborder-4 items-center justify-between">
                    <p className="font-medium text-[8px] text-white/70 ibmFont">
                      @anisa.pratiwi
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
                      <p className="text-[#D3D3D3] italic font-medium text-[8px] ibmFont">
                        9:15 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[48%] relative overflow-hidden rounded-[24px]">
              <div className="hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer ">
                <img
                  className="w-full h-full rounded-[24px] "
                  src={discover3}
                  alt="Spacious Land For Development"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#01010100] to-[#090909] rounded-[24px]"></div>
              </div>
              <div className="sborder-4 border-black w-[100%] text-white absolute bottom-4 left-0 px-4 hover:scale-[1.02] transition ease-in-out duration-500 delay-10 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h5 className="font-medium text-xs leading-loose ibmFont">
                      Spacious Land for Development
                    </h5>
                    <h6 className="font-medium text-[10px] ibmFont">
                      $350,000
                    </h6>
                  </div>
                  <div className="flex items-center gap-4 font-normal text-[8px]">
                    <div className="borsder-2 h-[10px] w-[8px] object-cover">
                      <img
                        className="w-full h-full object-cover"
                        src={location}
                        alt="Location icon"
                      />
                    </div>
                    <p className="truncate ... text-white/80 ibmFont">
                      Jalan Siliwangi No. 10, Tegal, Central Java 52115
                    </p>
                  </div>
                  <div className="flex flex-row sborder-4 items-center justify-between">
                    <p className="font-medium text-[8px] text-white/70 ibmFont">
                      @dedi.kurniawan
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
                      <p className="text-[#D3D3D3] italic font-medium text-[8px] ibmFont">
                        10:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
