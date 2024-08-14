import React from "react";
import OurStudio from "./homePage/OurStudio";
import ContactUs from "./homePage/ContactUs";
import Footer from "./homePage/Footer";
import FOUNDERIMG from "./images/founder1.jpg";
import Team from "./Team";

const AboutPage = () => {
  return (
    <div>
      {/* Section - 1 */}
      <div className="my-10 mx-2 pb-10">
        <h2 className="text-3xl font-bold ml-10 my-4 tracking-wide uppercase">
          About Company
        </h2>
        <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-10 "></div>
        <div className="mx-10 lg:mx-20">
          <p className="text-2xl text-yellow-500 font-semibold italic">
            "Architecture is a visual art, and the buildings speak for
            themselves." - <span className="text-black">Julia Morgan</span>
          </p>
          <p className="mt-3 tracking-wide">
            As a design firm we specialise in multidisciplinary design domains
            like Residence design, Retail design, exhibition design, Commercial
            Architecture, Interior design, and Museum Architecture with a focus
            on user experience.
          </p>
          <p className="mt-3 tracking-wide">
            We explore ways to engage the user, the way they move through the
            space. We like taking design to an extremely conceptual stage. We
            find inspiration in ordinary things, everyday events and chance
            encounters.
          </p>
          <p className="mt-3 tracking-wide">
            The firm takes a deeply contextual approach to its work and combines
            this with a strong focus on the tactile and sensory qualities of the
            space. Our design process looks at sustainability through the
            multiple lenses of cultural, social and environmental impact. There
            is an active engagement in integrating localised skills and
            resources with state-of-the art materials and technologies.
          </p>
          <p className="mt-3 tracking-wide">
            PDC is a design initiative founded by{" "}
            <span className="font-semibold">Ar. Nihit Dawar</span> and{" "}
            <span className="font-semibold">Ar. Saurabh Chhillar</span>.
          </p>
          <p className="mt-3 tracking-wide">
            For us every project is an opportunity to do something new and
            unique. We amalgamate the client’s vision and our understanding of
            design to create something that is an absolutely unique.
          </p>
          <p className="mt-3 tracking-wide">
            Working in a highly collaborative environment, our team combines
            distinct strengths over multiple domains to shape master plans,
            buildings, interiors and related endeavors, which are at the cutting
            edge of design thinking.
          </p>
        </div>
      </div>
      {/* Section - 2 */}
      <div className="px-2 my-5 bg-[#FFFDD0] py-5">
        <h2 className="text-3xl font-bold ml-10 my-4 tracking-wide uppercase">
          Founders
        </h2>
        <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-10 "></div>
        <div className="p-3">
          {/* founder - 1 */}
          <div className="flex justify-start">
            <div className="flex flex-wrap-reverse sm:flex-nowrap bg-[#FFBF00] text-white m-3 px-10 py-10 rounded-r-full items-center justify-start sm:justify-center lg:w-4/5 xl:w-3/5 gap-x-5 mx-5 sm:mx-10 my-5">
              <div>
                <h2 className="text-3xl font-bold italic">Ar. Nihit Dawar</h2>
                <p className="text-sm -mt-1">(B.arch)</p>
                <p className="text-sm -mt-1">
                  Creative Head and Client Acquisition
                </p>
                <p className="mt-4 leading-5">
                  The firm takes a deeply contextual approach to its work and
                  combines this with a strong focus on the tactile and sensory
                  qualities of the space. Our design process looks at
                  sustainability through the multiple lenses of cultural, social
                  and environmental impact. There is an active engagement in
                  integrating localised skills and resources with state-of-the
                  art materials and technologies.
                </p>
              </div>
              <img
                src={FOUNDERIMG}
                className="h-40 rounded-full border-8 border-white"
                alt=""
              />
            </div>
          </div>
          {/* Founder-2 */}
          <div className="flex justify-end">
            <div className="flex flex-wrap-reverse sm:flex-nowrap bg-[#FFBF00] text-white m-3 px-10 pl-24 py-10 rounded-l-full items-center justify-start sm:justify-center lg:w-4/5 xl:w-3/5 gap-x-5 mx-5 sm:mx-10 my-5">
              <div>
                <h2 className="text-3xl font-bold italic">
                  Ar. Saurabh Chhillar
                </h2>
                <p className="text-sm -mt-1">(B.arch, M.Plan)</p>
                <p className="text-sm -mt-1">
                  Spatial Planner & Project Management
                </p>
                <p className="mt-4 leading-5">
                  The firm takes a deeply contextual approach to its work and
                  combines this with a strong focus on the tactile and sensory
                  qualities of the space. Our design process looks at
                  sustainability through the multiple lenses of cultural, social
                  and environmental impact. There is an active engagement in
                  integrating localised skills and resources with state-of-the
                  art materials and technologies.
                </p>
              </div>
              <img
                src={FOUNDERIMG}
                className="h-40 rounded-full border-8 border-white"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section - 3 */}
      <div className="my-10">
        <h2 className="text-3xl font-bold ml-10 my-4 tracking-wide">
          MEET THE TEAM
        </h2>
        <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-10 "></div>
        <div>
          <Team />
        </div>
      </div>
      <OurStudio />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default AboutPage;
