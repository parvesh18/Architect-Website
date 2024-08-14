import React from "react";
import ProjectCategory from "./homePage/ProjectCategory";
import Awards from "./homePage/Awards";
import AboutUs from "./homePage/AboutUs";
import OurStudio from "./homePage/OurStudio";
import ContactUs from "./homePage/ContactUs";
import Footer from "./homePage/Footer";
import OurClients from "./homePage/OurClients";
import Strip from "./homePage/Strip";
import Carousel from "./homePage/Carousel";
import HiThere from "./homePage/HiThere";

const homePagePage = () => {
  return (
    <div className="relative">
      <Carousel />
      <div className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider uppercase absolute text-white top-60 leading-normal left-14 md:left-20">
        <p>Primitive Design </p>
        <p>Studio</p>
        <p className="text-lg lg:text-xl mt-2">Founded by <span className="text-xl lg:text-2xl">Ar. Nihit Dawar</span> and <span className="text-xl lg:text-2xl">Ar. Saurabh Chhillar</span></p>
      </div>
      <Strip />
      <HiThere />
      <AboutUs />
      <OurStudio />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default homePagePage;
