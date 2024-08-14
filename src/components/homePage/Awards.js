import React from "react";
import IMG1 from "../images/awards-and-mentions/img1.png";
import IMG2 from "../images/awards-and-mentions/img2.png";
import IMG3 from "../images/awards-and-mentions/img3.png";
import IMG4 from "../images/awards-and-mentions/img4.png";
import IMG5 from "../images/awards-and-mentions/img5.png";
import IMG6 from "../images/awards-and-mentions/img6.png";

const Awards = () => {
  return (
    <div className="bg-[#c2c1c1] px-16 mt-10 py-10">
      <h2 className="text-2xl font-bold ml-2 my-4 tracking-wide">
        AWARDS & MENTIONS
      </h2>
      <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-4 "></div>

      <div className="flex flex-wrap ">
        <div className="relative cursor-pointer overflow-hidden">
          <img
            className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-64 m-[0.125rem] hover:scale-110 transition ease-out duration-300"
            src={IMG1}
            alt="awards-img"
          />
          <h2 className="hidden lg:block absolute bottom-0 opacity-95 mx-1 text-center bg-[#767474] text-white tracking-widest">
            GOODHOMES – ARAYA PENTHOUSE
          </h2>
        </div>
        <div className="relative cursor-pointer overflow-hidden">
          <img
            className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-64 m-[0.125rem] hover:scale-110 transition ease-out duration-300"
            src={IMG2}
            alt="awards-img"
          />
          <h2 className="hidden lg:block absolute bottom-0 opacity-95 mx-1 text-center bg-[#767474] text-white tracking-widest">
            GOODHOMES – MONTE CARLO
          </h2>
        </div>
        <div className="relative cursor-pointer overflow-hidden">
          <img
            className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-64 m-[0.125rem] hover:scale-110 transition ease-out duration-300"
            src={IMG3}
            alt="awards-img"
          />
          <h2 className="hidden lg:block absolute bottom-0 opacity-95 mx-1 text-center bg-[#767474] text-white tracking-widest">
            COMMERCIAL DESIGN INDIA – NAHAR INDUSTRIES CAMPUS
          </h2>
        </div>
        <div className="relative cursor-pointer overflow-hidden">
          <img
            className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-64 m-[0.125rem] hover:scale-110 transition ease-out duration-300"
            src={IMG4}
            alt="awards-img"
          />
          <h2 className="hidden lg:block absolute bottom-0 opacity-95 mx-1 text-center bg-[#767474] text-white tracking-widest">
            COMMERCIAL DESIGN INDIA – MONTE CARLO
          </h2>
        </div>
        <div className="relative cursor-pointer overflow-hidden">
          <img
            className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-64 m-[0.125rem] hover:scale-110 transition ease-out duration-300"
            src={IMG5}
            alt="awards-img"
          />
          <h2 className="hidden lg:block absolute bottom-0 opacity-95 mx-1 text-center bg-[#767474] text-white tracking-widest">
            ARCHITECT AND INTERIORS INDIA – NAHAR INDUSTRIES CAMPUS
          </h2>
        </div>
        <div className="relative overflow-hidden cursor-pointer">
          <img
            className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-64 m-[0.125rem] hover:scale-110 transition ease-out duration-300"
            src={IMG6}
            alt="awards-img"
          />
          <h2 className="hidden lg:block absolute bottom-0 opacity-95 text-center bg-[#767474] text-white tracking-widest w-full">
            ARCHIDIARIES
          </h2>
        </div>
      </div>
      <button className="border-[1px] border-white  text-white m-4 py-2 px-4 mt-8"> KNOW MORE</button>
    </div>
  );
};

export default Awards;
