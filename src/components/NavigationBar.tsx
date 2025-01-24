import React from "react";
import logo from "../assets/icons/MS.svg";
import arrow from "../assets/icons/arrow.svg";
import "../App.css";

// Define types for props
type NavigationBarProps = {
  introRef: React.RefObject<HTMLDivElement>;
  productRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  reviewRef: React.RefObject<HTMLDivElement>;
};

const NavigationBar: React.FC<NavigationBarProps> = ({
  introRef,
  productRef,
  servicesRef,
  aboutRef,
  reviewRef,
}) => {
  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="w-full m-2 sborder-4 border-black px-20 absolutes fixed top-[3.5vh] z-[100] select-none">
        <div className="sborder-4 flex justify-between s">
          <div className="sborder-4 transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.04] backdrop-opacity-70  bg-transparents bacskdrop-invert  roundsed-full p-0">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={logo}
              alt="background-img"
            />
          </div>

          <div
            className=" flex justify-between items-center  text-sm text-white px-[2px] hover:px-[4px] py-[3px] hover:scale-[1.04] backdrop-opacity-70  bg-white/10 backdrop-invert  rounded-full border-2 border-transparent transition ease-in-out duration-500 delay-10 cursor-pointer drop-shadow-[3px_6px_5px_rgba(0,0,0,0.35)]"
            onClick={() => scrollToSection(reviewRef)}
          >
            <div className="rounded-full px-4 py-[7px] transition ease-in-out duration-500 delay-50 hover:underline underline-offset-4  decoration-dotted transition ease-in-out duration-500 delay-50">
              Contact Us
            </div>
            <div className="border-4 border-white rounded-full p-2 bg-white">
              <img className="w-full h-full " src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="sborder-4 border-black border-double w-[100%] flex items-center justify-center ">
          {" "}
          <div className="w-1/2 relative bottom-[2]s transform -translate-y-full sborder-4 border-black flex justify-between items-center gap-4 text-sm text-white px-[2px] hover:px-[4px] py-[3px] hover:scale-[1.02] backdrop-opacity-70  bg-white/10 backdrop-invert  rounded-full border-2 border-transparent backdrop-blur-[14px] transition ease-in-out duration-500 delay-10 cursor-pointer drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]">
            {/* <div className="border-2 border-white bg-white backdrop-invert rounded-full text-black px-6 py-[7px] hover:scale-[1.04] transition ease-in-out duration-500 delay-50 ">
              Home
            </div> */}
            <div
              className="shover:border-2 border-transparent rounded-full hover:text-blacks hover:backdrop-inverts hover:underline underline-offset-4 decoration-dotted px-6 py-[7px] hover:scale-[1.08] transition ease-in-out duration-500 delay-50"
              onClick={() => scrollToSection(introRef)}
            >
              Home
            </div>{" "}
            <div
              className="shover:border-2 border-transparent rounded-full hover:text-blacks hover:backdrop-inverts hover:underline underline-offset-4 decoration-dotted px-6 py-[7px] hover:scale-[1.08] transition ease-in-out duration-500 delay-50"
              onClick={() => scrollToSection(productRef)}
            >
              Products
            </div>
            <div
              className="shover:border-2 border-transparent rounded-full hover:text-blacks hover:backdrop-inverts hover:underline underline-offset-4 decoration-dotted px-6 py-[7px] hover:scale-[1.08] transition ease-in-out duration-500 delay-50"
              onClick={() => scrollToSection(servicesRef)}
            >
              Services
            </div>
            <div
              className="shover:border-2 border-transparent rounded-full hover:text-blacks hover:backdrop-inverts hover:underline underline-offset-4 decoration-dotted px-6 py-[7px] hover:scale-[1.08] transition ease-in-out duration-500 delay-50"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </div>
            <div
              className="shover:border-2 border-transparent rounded-full hover:text-blacks hover:backdrop-inverts hover:underline underline-offset-4 decoration-dotted px-6 py-[7px] hover:scale-[1.08] transition ease-in-out duration-500 delay-50"
              onClick={() => scrollToSection(reviewRef)}
            >
              Review
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
