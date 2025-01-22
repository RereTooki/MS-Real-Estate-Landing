import React from "react";
import avatars from "../assets/icons/avatars.svg";

const Register = () => {
  return (
    <>
      <div className="h-[100vh] border-4 border-double border-black p-4 ibmFont select-none mt-14 flex flex-col items-center">
        <p
          className="poppinsFont font-normal text-base text-[#A3865C] mb-6"
          data-aoss="zoom-in"
          data-aos-duration="1700"
        >
          Register Now
        </p>
        <div className="w-full  h-[100vh] border-4 flex">
          <div className="border-[1px] border-[#BBBBBB] rounded-[30px] h-full w-3/4 flex flex-col items-center justify-center self-start">
            <div className="flex flex-col sborder-2 border-black w-[35vw]">
              <h3
                className="poppinsFont font-medium text-[48px] leading-[72px] texts-center sborder-2 border-black gw-[54%]
                      "
              >
                <span className="text-[#A3865C]">Register</span> for{" "}
                <span className="text-[#A3865C]">Exclusive</span> Access
              </h3>
              <p className="sborder-2 w-fit poppinsFont font-medium text-2xl leading-[36px] text-black/60 ">
                Become a Member
              </p>
              <p className="sborder-2 w-fit poppinsFont font-normal text-base leading-[24px] text-black/50 text-justify gw-[55%] mb-4">
                Join our exclusive real estate community today and unlock access
                to premium listings, personalized property recommendations,
                expert advice. Sign up now to start your journey towards finding
                your perfect home
              </p>
              <div className="flex w-[100%] sborder-4 gw-[55%] items-center justify-between">
                <div className="sborder-4 border-black border-double h-[38px]">
                  <img
                    className="w-full h-full"
                    src={avatars}
                    alt="user avatars"
                  />
                </div>
                <div className="text-base text-[#BBBBBB]">200K Members</div>
                <div className="border-[1px] px-14 py-2 rounded-full w-fit self-center poppinsFont font-medium text-sm bg-[#A3865C] border-[#A3865C] hover:scale-[1.04] transition ease-in-out duration-500 delay-10 cursor-pointer text-white">
                  Join With Us
                </div>
              </div>
            </div>
          </div>
          <div className="border-4 w-fit relative">
            <div className="absolute w-5/12 border-2 border-black">
              sssfsaf ss
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Register;
