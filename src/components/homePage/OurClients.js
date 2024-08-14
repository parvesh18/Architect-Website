import React from "react";
import LOGO1 from '../images/clientsLogo/logo1.png'
import LOGO2 from '../images/clientsLogo/logo2.png'
import LOGO3 from '../images/clientsLogo/logo3.png'
import LOGO4 from '../images/clientsLogo/logo4.png'
import LOGO5 from '../images/clientsLogo/logo5.png'
import LOGO6 from '../images/clientsLogo/logo6.png'
import LOGO7 from '../images/clientsLogo/logo7.png'
import LOGO8 from '../images/clientsLogo/logo8.png'
import LOGO9 from '../images/clientsLogo/logo9.png'
import LOGO10 from '../images/clientsLogo/logo10.png'
import LOGO11 from '../images/clientsLogo/logo11.png'
import LOGO12 from '../images/clientsLogo/logo12.png'
import LOGO13 from '../images/clientsLogo/logo13.png'

const OurClients = () => {
  return (
    <div className="mx-5 md:mx-10 my-20">
      <h2 className="text-2xl font-bold ml-2 my-4 tracking-wide">
        AWARDS & MENTIONS
      </h2>
      <div className="border-b-2 border-b-[#FFBF00] mb-14 w-80 ml-4"></div>
      <div className="flex flex-wrap gap-4 md:gap-10 justify-center">
        <img className="w-32" src={LOGO1} alt="client-logo" />
        <img className="w-32" src={LOGO2} alt="client-logo" />
        <img className="w-32" src={LOGO3} alt="client-logo" />
        <img className="w-32" src={LOGO4} alt="client-logo" />
        <img className="w-32" src={LOGO5} alt="client-logo" />
        <img className="w-32" src={LOGO6} alt="client-logo" />
        <img className="w-32" src={LOGO7} alt="client-logo" />
        <img className="w-32" src={LOGO8} alt="client-logo" />
        <img className="w-32" src={LOGO9} alt="client-logo" />
        <img className="w-32" src={LOGO10} alt="client-logo" />
        <img className="w-32" src={LOGO11} alt="client-logo" />
        <img className="w-32" src={LOGO12} alt="client-logo" />
        <img className="w-32" src={LOGO13} alt="client-logo" />
      </div>
    </div>
  );
};

export default OurClients;
