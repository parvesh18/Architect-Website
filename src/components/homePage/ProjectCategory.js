import React from "react";
import IMG1 from "../images/project-category/img1.jpg";
import IMG2 from "../images/project-category/img2.jpg";
import IMG3 from "../images/project-category/img3.jpg";
import IMG4 from "../images/project-category/img4.jpg";

const ProjectCategory = () => {
  return (
    <div className="my-5 md:mx-4 xl:mx-7 mt-10 ">
      <h2 className="text-2xl font-bold ml-2 my-4 tracking-wide">
        PROJECT CATEGORY
      </h2>
      <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-4 "></div>
      <div className="flex flex-col gap-y-3">
        <div className="flex w-full gap-3">
          <img
            className="w-1/2 cursor-pointer"
            src={IMG1}
            alt="project-image"
          />
          <p className="w-1/2 bg-[#FFBF00] flex items-center justify-center font-semibold text-xl md:text-2xl xl:text-3xl">
            EXHIBITION
          </p>
        </div>
        <div className="flex w-full gap-3">
          <img
            className="w-1/2 cursor-pointer"
            src={IMG2}
            alt="project-image"
          />
          <p className="w-1/2 bg-[#A9A9A9] flex items-center justify-center font-semibold text-xl md:text-2xl xl:text-3xl">
            SPATIAL DESIGN
          </p>
        </div>
        <div className="flex w-full gap-3" gap-3>
          <img
            className="w-1/2 cursor-pointer"
            src={IMG3}
            alt="project-image"
          />
          <p className="w-1/2 bg-[#FFBF00] flex items-center justify-center font-semibold text-xl md:text-2xl xl:text-3xl">
            ARCHITECTURE
          </p>
        </div>
        <div className="flex w-full gap-3">
          <img
            className="w-1/2 cursor-pointer"
            src={IMG4}
            alt="project-image"
          />
          <p className="w-1/2 bg-[#A9A9A9] flex items-center justify-center font-semibold text-xl md:text-2xl xl:text-3xl">
            INTERNATIONAL
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCategory;
