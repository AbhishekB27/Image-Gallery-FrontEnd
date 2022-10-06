import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
     <footer className="absolute bottom-0 w-full bg-transparent px-2 font-medium flex flex-col gap-1 md:justify-between justify-center items-center">
     {/* <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L24,74.7C48,85,96,107,144,117.3C192,128,240,128,288,154.7C336,181,384,235,432,256C480,277,528,267,576,224C624,181,672,107,720,69.3C768,32,816,32,864,48C912,64,960,96,1008,117.3C1056,139,1104,149,1152,133.3C1200,117,1248,75,1296,53.3C1344,32,1392,32,1416,32L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg> */}
      <div className="flex justify-center items-center gap-7 pt-2 text-xs sm:text-sm md:text-2xl border-[#14213d] dark:border-[#edf2f4] border-t-2 w-full ">
        {/* <span className="font-poppins font-light">Follow Us:</span> */}
        <FontAwesomeIcon className="cursor-pointer" icon={faFacebook}/>
        <FontAwesomeIcon className="cursor-pointer" icon={faTwitter}/>
        <FontAwesomeIcon className="cursor-pointer" icon={faGoogle}/>
        <FontAwesomeIcon className="cursor-pointer" icon={faInstagram}/>
        <FontAwesomeIcon className="cursor-pointer" icon={faLinkedin}/>
        <FontAwesomeIcon className="cursor-pointer" icon={faGithub}/>
      </div>
      <div className="font-poppins font-light text-base">© 2022 Copyright: <span className="fontm"> Amaze Image</span> </div>

      </footer> 
  );
};
