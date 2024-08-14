import React from "react";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa6";
import { MdMuseum } from "react-icons/md";
import IMG1 from "./images/projects/img1.png";
import IMG2 from "./images/projects/img2.png";
import IMG3 from "./images/projects/img3.png";
import IMG4 from "./images/projects/img4.png";
import ContactUs from "./homePage/ContactUs";
import Footer from "./homePage/Footer";

const OurWork = () => {
  return (
    <div className="mt-10">
      {/* our service */}
      <div>
        <h2 className="text-3xl uppercase font-bold ml-10 my-4 tracking-wide">
          Our Service
        </h2>
        <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-10 "></div>
        <div className="flex flex-wrap justify-center gap-5 gap-x-10">
          {/* CARD - 1 */}
          <div className="w-96 sm:w-72 lg:w-60 p-3">
            <RiUserSettingsFill className="text-5xl text-yellow-400 mb-2" />
            <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
              Residential
            </p>
            <div className="tracking-wide ">
              <p className="mt-3 mb-2">
                We specialize in creating bespoke residential spaces that
                reflect your unique vision and lifestyle. With a deep passion
                for architecture and a commitment to excellence, we offer a
                comprehensive range of architectural services tailored to meet
                your every need.
              </p>
              <p>
                Whether you're dreaming of a modern masterpiece, a cozy cottage
                retreat, or a timeless traditional residence, we are dedicated
                to bring your vision to life with precision and creativity. Let
                us transform your house into a place you're proud to call home.
              </p>
            </div>
          </div>
          {/* CARD - 2 */}
          <div className="w-96 sm:w-72 lg:w-60 p-3">
            <FaShoppingBag className="text-5xl text-yellow-400 mb-2" />
            <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
              Commercial & Retail
            </p>
            <div className="tracking-wide ">
              <p className="mt-3 mb-2">
                We also specialize in delivering exceptional architectural
                solutions tailored for commercial and retail environments. With
                a proven track record of designing spaces that blend
                functionality with aesthetics, we are committed to enhancing
                your business's success through thoughtful design.
              </p>
              <p>
                Whether you're planning a corporate headquarters, a flagship
                store, or a vibrant mixed-use development, We are your partner
                in achieving architectural excellence. Let us transform your
                commercial aspirations into reality and elevate your brand
                through innovative design solutions.
              </p>
            </div>
          </div>
          {/* CARD - 3 */}
          <div className="w-96 sm:w-72 lg:w-60 p-3">
            <FaIndustry className="text-5xl text-yellow-400 mb-2" />
            <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
              Industrial
            </p>
            <div className="tracking-wide ">
              <p className="mt-3 mb-2">
                Whether you're planning a manufacturing plant, warehouse
                distribution center, research facility, or industrial park, we
                have the expertise to deliver.
              </p>
              <p>
                From concept development to project completion, We are committed
                to creating environments that support your business objectives
                while enhancing operational efficiency and employee well-being.
              </p>
              <p className="mt-2">
                Partner with us to unlock the full potential of your industrial
                project. Let us help you build the infrastructure that drives
                your business forward with innovative architectural solutions.
              </p>
            </div>
          </div>
          {/* CARD - 4 */}
          <div className="w-96 sm:w-72 lg:w-60 p-3">
            <MdMuseum className="text-5xl text-yellow-400 mb-2" />
            <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
              Exhibitions & Museums
            </p>
            <div className="tracking-wide ">
              <p className="mt-3 mb-2">
                We specialize in creating exceptional architectural designs for
                museums and exhibition spaces that inspire, educate, and engage
                visitors. With a passion for cultural preservation and
                innovation, we collaborate closely with museums, galleries, and
                cultural institutions to create spaces that showcase their
                collections and narratives with impact and clarity.
              </p>
              <p>
                Whether you're envisioning a new museum building, renovating an
                existing exhibition space, or designing temporary exhibits, we
                bring a deep understanding of spatial design, lighting,
                acoustics, and materiality to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* our projects */}
      <div className="bg-[#FFFDD0] py-10 my-10">
        <h2 className="text-3xl uppercase font-bold ml-10 my-4 tracking-wide">
          Our Projects
        </h2>
        <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-10 "></div>
        <div className="lg:mx-10">
          <div className="lg:flex flex-wrap justify-evenly gap-x-10">
            {/* CARD - 4 */}
            <div className="flex flex-col flex-wrap my-10 lg:w-2/5 mx-10 lg:mx-2">
              <div className="h-72 w-96 overflow-hidden rounded-md mb-4">
                <img
                  className="h-72 w-96 object-cover  cursor-pointer hover:scale-125 transition ease-out duration-1000"
                  src={IMG4}
                  alt="project-img"
                />
              </div>
              <div>
                <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
                  IAADB, Red Fort, Delhi
                </p>
                <p className="mt-3 tracking-wide">
                  The Prime Minister, Shri Narendra Modi inaugurated the first
                  Indian Art, Architecture & Design Biennale (IAADB) 2023 being
                  held at Red Fort today. During the programme, the Prime
                  Minister inaugurated the ‘Aatmanirbhar Bharat Centre for
                  Design’ at Red Fort and the student Biennale- Samunnati. He
                  also launched a Commemorative Stamp. Shri Modi also took a
                  walkthrough of the exhibition showcased on the occasion.
                  Indian Art, Architecture & Design Biennale (IAADB) will serve
                  as an introduction to the Cultural Space in Delhi.
                </p>
                <p className="mt-3 tracking-wide">
                  Addressing the gathering, the Prime Minister welcomed everyone
                  to the World Heritage Site of the Red Fort and highlighted the
                  historical significance of its courtyards which remain
                  unwavering and indelible even though multiple generations have
                  passed before and after India’s independence.
                </p>
                <p className="mt-3 tracking-wide">
                  The Prime Minister said that every nation is endowed with
                  symbols of its own that introduce the world to the country’s
                  past and its roots. He emphasized the role of art, culture and
                  architecture in forging the connection with these symbols.
                  Referring to the capital city of Delhi as a treasure trove of
                  symbols that provide a glimpse of the rich architectural
                  heritage of India, the Prime Minister said that the
                  organization of Indian Art, Architecture & Design Biennale
                  (IAADB) in Delhi makes it special in ways more than one. He
                  praised the works displayed in the exhibition and said that it
                  is an amalgamation of colours, creativity, culture and
                  community connection.
                </p>
              </div>
            </div>
            <div className="lg:border-l-2 border-yellow-800 my-20"></div>
            {/* CARD - 1 */}
            <div className="flex flex-col flex-wrap my-10 lg:w-2/5 mx-10 lg:mx-2">
            <div className="h-72 w-96 overflow-hidden rounded-md mb-4">
                <img
                  className="h-72 w-96 object-cover  cursor-pointer hover:scale-125 transition ease-out duration-1000"
                  src={IMG1}
                  alt="project-img"
                />
              </div>
              <div>
                <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
                  Robust Brakes, Barhana, Haryana
                </p>
                <p className="mt-3 tracking-wide">
                  Our Industrial project exemplifies cutting-edge design and
                  engineering excellence tailored for industrial applications.
                  Located in Barhana, Haryana, this facility serves as a robust
                  and efficient workspace that meets the specific operational
                  needs of our client.
                </p>
                <p className="mt-3 tracking-wide">
                  Our Industrial project demonstrates our expertise in
                  delivering innovative architectural solutions tailored for
                  industrial sectors. Designed with a focus on efficiency,
                  functionality, and sustainability, this facility sets a
                  benchmark for modern industrial infrastructure in Barhana.
                </p>
                <p className="mt-3 tracking-wide">
                  It reflects our commitment to excellence and our ability to
                  meet the unique challenges and requirements of industrial
                  clients with bespoke architectural and engineering solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly my-10">
            <div className="lg:border-b-2 pr-8 border-yellow-800 w-2/5 mx-10"></div>
            <div className="lg:border-b-2 pr-8 border-yellow-800 w-2/5 mx-10"></div>
          </div>
          <div className="lg:flex flex-wrap justify-evenly gap-x-10">
            {/* CARD - 2 */}
            <div className="flex flex-col flex-wrap my-10 lg:w-2/5 mx-10 lg:mx-2">
            <div className="h-72 w-96 overflow-hidden rounded-md mb-4">
                <img
                  className="h-72 w-96 object-cover  cursor-pointer hover:scale-125 transition ease-out duration-1000"
                  src={IMG2}
                  alt="project-img"
                />
              </div>
              <div>
                <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
                  FUSION Bar and Lounge, Rohtak, Haryana
                </p>
                <p className="mt-3 tracking-wide">
                  Fusion Bar and Lounge is the premier destination for
                  sophisticated nightlife and exceptional dining.
                </p>
                <p className="mt-3 tracking-wide">
                  The establishment is dedicated to providing Visitors with a
                  unique and unforgettable experience, combining the best of
                  both worlds: a chic bar and a stylish lounge.
                </p>
                <p className="mt-3 tracking-wide">
                  All hardwood material and top class furniture. Custom made Bar
                  Counter from jodhpur and handcrafted ceiling.
                </p>
                <p className="mt-3 tracking-wide">
                  All walls are decorated and highlighted with hand made
                  paintings logos and graffitis.
                </p>
              </div>
            </div>
            <div className="lg:border-l-2 border-yellow-800 my-20"></div>
            {/* CARD - 3 */}
            <div className="flex flex-col flex-wrap my-10 lg:w-2/5 mx-10 lg:mx-2">
            <div className="h-72 w-96 overflow-hidden rounded-md mb-4">
                <img
                  className="h-72 w-96 object-cover  cursor-pointer hover:scale-125 transition ease-out duration-1000"
                  src={IMG3}
                  alt="project-img"
                />
              </div>
              <div>
                <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
                  Real Estate Office, TDI City, Sonipat, Haryana
                </p>
                <p className="mt-3 tracking-wide">
                  Our real estate office project embodies innovation and
                  functionality, creating a dynamic space that enhances the
                  client experience and supports our team's success. Designed
                  with meticulous attention to detail and client needs, this
                  architectural achievement underscores our dedication to
                  delivering exceptional real estate services in Sonipat,
                  Haryana. It stands as a testament to our commitment to
                  excellence and leadership in the real estate industry.
                </p>
                <p className="mt-3 tracking-wide">
                  Our real estate office project exemplifies a harmonious blend
                  of functionality, aesthetics, and client-centric design. This
                  space serves as a hub for our real estate operations,
                  providing a welcoming environment for clients and a productive
                  workspace for their team.
                </p>
                <p className="mt-3 tracking-wide">
                  It is blend of vibrant colours and unique design supporting
                  the work atmosphere and client integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default OurWork;
