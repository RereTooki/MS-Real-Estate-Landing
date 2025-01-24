import React from "react";
import logo from "../assets/icons/MS.svg";
import facebook from "../assets/icons/facebook.svg";
import insta from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <>
      <div
        className="sborder-4 border-double border-black p-4 interFont font-normal text-base leading-[19px] select-none bg-[#392C19]/80"
        data-aoss="fade-up"
        data-aos-duration="1700"
      >
        <div
          className="border-b-[1px] mx-20 pt-8 pb-8 flex mb-16 justify-between"
          data-aoss="fade-up"
          data-aos-duration="1700"
        >
          {" "}
          <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.08] w-[49px] h-[20px]">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={logo}
              alt="background-img"
            />
          </div>
          <div className="flex">
            <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.08] w-[49px] h-[20px]">
              <img
                className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
                src={twitter}
                alt="background-img"
              />
            </div>
            <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.08] w-[49px] h-[20px]">
              <img
                className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
                src={facebook}
                alt="background-img"
              />
            </div>
            <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.08] w-[49px] h-[20px]">
              <img
                className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
                src={insta}
                alt="background-img"
              />
            </div>
          </div>
        </div>
        <div className="sborder-4 mx-20 flex justify-between text-white gap-4 mb-8">
          <div className="grow flex flex-col sborder-2 border-black gap-2">
            <p className="mb-4 font-semibold">Feature</p>
            <p>Intensive learning</p>
            <p>Test preparation</p>
            <p>Leaderboard</p>
            <p>Community Hub</p>
            <p>Courses</p>
          </div>{" "}
          <div className="grow flex flex-col sborder-2 border-black gap-2">
            <p className="mb-4 font-semibold">Company</p>
            <p>About us</p>
            <p>Partner program</p>
            <p>Our Story</p>
            <p>Case study</p>
            <p>Customer Support</p>
          </div>{" "}
          <div className="grow flex flex-col sborder-2 border-black gap-2">
            <p className="mb-4 font-semibold">Resources</p>
            <p>Get help</p>
            <p>FAQ</p>
            <p>Blog posts</p>
          </div>{" "}
          <div className="grow flex flex-col sborder-2 border-black gap-2">
            <p className="mb-4 font-semibold">Helpful Links</p>
            <p>Legal center</p>
            <p>Privacy policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="">
          <div className="attribution underline-offset-4 whitespace-nowraps poppinsFont text-center text-white text-sm sborder-4">
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/mehbubur-rahman/"
              className="text-base underline decoration-dotted"
              target="_blank"
            >
              Mehbubur Rahman
            </a>{" "}
            ✦ Developed by{" "}
            <a
              href="https://www.linkedin.com/in/rerel-oluwa-tooki-cnvp-b53396253/"
              className="text-base underline decoration-dotted"
              target="_blank"
            >
              Rerel'Oluwa Tooki
            </a>{" "}
            ✦ © 2025 MS - All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
