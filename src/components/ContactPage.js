import React from "react";
import BGIMG from "./images/about-bg.jpg";
import LOGO from "./images/logo.png";
import { MdEmail } from "react-icons/md";
import Footer from "./homePage/Footer";

const ContactPage = () => {
  return (
    <div className="relative">
      <div className=" overflow-hidden">
        <img
          src={BGIMG}
          className="w-full object-cover h-[500px]"
          alt="background-img"
        />
      </div>
      <div className="absolute top-3 text-white lg:mt-16">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:my-10">
          <div className="w-2/3 lg:w-2/5 ">
            <h2 className="text-2xl font-bold ml-2 my-4 tracking-wide">
              CONTACT US
            </h2>
            <div className="border-b-2 border-b-[#FFBF00] mb-4 lg:mb-10 w-60 ml-4 "></div>
            <p className="text-xl lg:text-3xl lg:leading-10 lg:tracking-widest">
              We’re always happy to meet face to face or start a conversation
              online.
            </p>
          </div>
          <div className="w-2/3 lg:w-2/5">
            <div className="flex gap-2">
              <input
                type="text"
                className="focus:outline-blue-500 border-[1px] border-[#a6a5a5] px-3 py-1 w-1/3"
                placeholder="Name"
              />
              <input
                type="text"
                className="focus:outline-blue-500 border-[1px] border-[#a6a5a5] px-3 py-1 w-1/3"
                placeholder="Number"
              />
              <input
                type="text"
                className="focus:outline-blue-500 border-[1px] border-[#a6a5a5] px-3 py-1 w-1/3"
                placeholder="Email"
              />
            </div>
            <div className="mt-2">
              <textarea
                name=""
                className="focus:outline-blue-500 border-[1px] mt-3 border-[#a6a5a5] px-3 py-1 w-full"
                id=""
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="border-[1px]  border-white text-white mt-2 lg:my-4 py-2 px-10">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <div className="w-5/6 my-10">
          <h2 className="text-2xl font-bold ml-2 my-2 tracking-wide">CARRER</h2>
          <div className="border-b-2 border-b-[#FFBF00] mb-10 w-60 ml-4 "></div>
          <p className="tracking-wider">
            We at TOD are always looking for young dynamic and creative fresh
            minds for designing something out of the Box.If you feel you have
            the Dot in you.....
          </p>
          <p className="tracking-wider">
            Send us your Creative Design Portfolio and Resume at:
          </p>
          <div className="flex items-center gap-2 mt-2">
            <MdEmail className="text-xl" />
            <p>studio@toddesign.in</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
