import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Landing from "./Landing";
import Discover from "./Discover";
import Explore from "./Explore";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Register from "./Register";
import Footer from "./Footer";
import Loading from "./Loading";
import { IoIosLaptop } from "react-icons/io";
import logo from "../assets/icons/MSDark.svg";

import introImg from "../assets/images/Intro.png";
import aboutUsImg from "../assets/images/aboutUs.png";
import customer1Img from "../assets/images/customer1.png";
import customer2Img from "../assets/images/customer2.png";
import discover1Img from "../assets/images/discover1.png";
import discover2Img from "../assets/images/discover2.png";
import discover3Img from "../assets/images/discover3.png";
import exploreImg from "../assets/images/explore.png";
import explore1Img from "../assets/images/explore1.png";
import explore2Img from "../assets/images/explore2.png";
import pentImg from "../assets/images/pent.png";
import reServiceImg from "../assets/images/reService.png";
import reServiceMiniImg from "../assets/images/reServiceMini.png";
import fullWebPic from "../assets/images/fullWebPic.webp";
import NavigationBar from "./NavigationBar";
const Homepage = () => {
  // Refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

  const preloadImages = [
    introImg,
    aboutUsImg,
    customer1Img,
    customer2Img,
    discover1Img,
    discover2Img,
    discover3Img,
    exploreImg,
    explore1Img,
    explore2Img,
    pentImg,
    reServiceImg,
    reServiceMiniImg,
    fullWebPic,
  ];

  const cacheImages = async (srcArray: string[]): Promise<void> => {
    const promises = srcArray.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  useEffect(() => {
    cacheImages(preloadImages);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 999);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLargeScreen) {
    return (
      <div className="flex flex-col h-screen bg-gray-100 text-center gap-12 sborder-4 items-center justify-center select-none">
        <div className="flex flex-row items-center justify-center gap-8 ">
          <div className=" sborder-4 transition ease-in-out duration-500 delay-10  hover:scale-[1.08] w-[40vw] h-[30vw]m animate-pulse">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={logo}
              alt="background-img"
            />
          </div>
          <div className=" sborder-4 transition ease-in-out duration-500 delay-10  hover:scale-[1.08] w-[40vw] h-[30vw]m sanimate-pulse">
            <img
              className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
              src={fullWebPic}
              alt="background-img"
            />
          </div>
        </div>
        <p className="text-[#392C19]/90 text-lg ws-[30vw] text-left">
          Please switch to a larger screen to view this site!
        </p>
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        // Loading animation
        <Loading />
      ) : (
        // Main content
        <div className=" transition ease-in-out duration-500 delay-10 overflow-x-hidden">
          <div
            className="z-50 w-[100%] sborder-4 border-black rounded-lg"
            data-aos="fade-down"
            data-aos-duration="3400"
          >
            <NavigationBar
              introRef={introRef}
              productRef={productRef}
              servicesRef={servicesRef}
              aboutRef={aboutRef}
              reviewRef={reviewRef}
            />
            {/* ss */}
          </div>
          <div ref={introRef} className="">
            <Landing />
          </div>
          <div ref={productRef} className="">
            <Discover />
          </div>
          <div className="">
            <Explore />
          </div>
          <div ref={servicesRef} className="">
            <Services />
          </div>
          <div ref={aboutRef} className="">
            <AboutUs />
          </div>
          <div ref={reviewRef} className="">
            <Register />
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
