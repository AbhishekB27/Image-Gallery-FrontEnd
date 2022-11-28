import { faHashnode } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHandPaper, faMessage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faHandshakeAngle, faMobileAlt, faPaperclip, faPlane, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="grid place-items-center container">
      <form  className="w-full md:w-auto text-[#14213d] flex flex-col gap-6 py-3">
        <div className="text-lg font-medium">Contact Form</div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative text-xl font-normal">
            <input
              className="peer text-[#14213d] border-2 border-[#14213d] dark:border-[#edf2f4] dark:text-[#edf2f4] bg-transparent rounded-md focus:ring-4 focus:ring-[#14213d]/30 outline-none dark:focus:ring-[#edf2f4]/30 focus:border-[#14213d] w-full py-3 px-[0.94rem] transition-all pl-[32px] placeholder:text-transparent "
              placeholder="Name"
              type="text"
              name=""
              id="name"
            />
            <label
              className="text-[#14213d] dark:text-[#edf2f4] dark:bg-[#14213d] peer-placeholder-shown:left-[2.2rem] peer-placeholder-shown:top-[0.9rem] absolute transition-all top-[-0.85rem] left-[0.6rem] bg-[#edf2f4] px-1"
              for="name"
            >
              Name
            </label>
            <FontAwesomeIcon className='absolute left-[0.6rem] top-[1.10rem]' icon={faUserAlt}/>
          </div>
          <div className="relative text-xl font-normal md:row-span-3">
            <textarea
              className="peer text-[#14213d] transition-all border-[#14213d] dark:border-[#edf2f4] dark:text-[#edf2f4] bg-transparent resize-none h-full focus:border-2 rounded-md focus:ring-4 focus:ring-[#14213d]/30 dark:focus:ring-[#edf2f4]/30 outline-none focus:border-[#14213d] border-2 w-full py-3 px-[0.94rem] pl-[32px] placeholder:text-transparent"
              placeholder="Message"
              type="text"
              name=""
              id="message"
              cols="30"
              rows="5"
            ></textarea>
            <label
              className="text-[#14213d] dark:text-[#edf2f4] dark:bg-[#14213d] peer-placeholder-shown:left-[2.2rem] peer-placeholder-shown:top-[0.7rem] absolute transition-all top-[-0.85rem] left-[0.6rem] bg-[#edf2f4] px-1"
              for="message"
            >
              Message
            </label>
            <FontAwesomeIcon className='absolute left-[0.6rem] top-[1.10rem]' icon={faMessage}/>
          </div>
          <div className="relative text-xl font-normal">
            <input
              className="peer text-[#14213d] transition-all border-[#14213d] dark:border-[#edf2f4] dark:text-[#edf2f4] bg-transparent focus:border-2 rounded-md focus:ring-4 focus:ring-[#14213d]/30 dark:focus:ring-[#edf2f4]/30 outline-none focus:border-[#14213d] border-2 w-full py-3 px-[0.94rem] pl-[32px] placeholder:text-transparent"
              placeholder="Email"
              type="text"
              name=""
              id="Email"
            />
            <label
              className="text-[#14213d] dark:text-[#edf2f4] dark:bg-[#14213d] peer-placeholder-shown:left-[2.2rem] peer-placeholder-shown:top-[0.9rem] absolute transition-all top-[-0.85rem] left-[0.6rem] bg-[#edf2f4] px-1"
              for="Email"
            >
              Email
            </label>
            <FontAwesomeIcon className='absolute left-[0.6rem] top-[1.10rem]' icon={faEnvelope}/>
          </div>
          <div className="relative text-xl font-normal">
            <input
              className="peer text-[#14213d] transition-all border-2 border-[#14213d] dark:border-[#edf2f4] dark:text-[#edf2f4] bg-transparent focus:border-2 rounded-md focus:ring-4 focus:ring-[#14213d]/30 dark:focus:ring-[#edf2f4]/30 outline-none focus:border-[#14213d] w-full py-3 px-[0.94rem] pl-[32px] placeholder:text-transparent"
              placeholder="Phone"
              type="text"
              name=""
              id="Phone"
            />
            <label
              className="text-[#14213d] dark:text-[#edf2f4] dark:bg-[#14213d] peer-placeholder-shown:left-[2.2rem] peer-placeholder-shown:top-[0.9rem] absolute transition-all top-[-0.85rem] left-[0.6rem] bg-[#edf2f4] px-1"
              for="Phone"
            >
              Phone
            </label>
            <FontAwesomeIcon className='absolute left-[0.6rem] top-[1.10rem]' icon={faMobileAlt}/>
          </div>
          <div className="grid gap-2 text-[#14213d] dark:text-[#edf2f4] md:w-full md:col-span-2">
            <div className="text-lg font-medium">Services</div>
            <div className="flex flex-col text-base md:font-medium md:flex-row gap-2 md:justify-between">
              <div className="text-[#14213d] transition-all border-2 border-[#14213d] dark:border-[#edf2f4] dark:text-[#edf2f4] text-center hover:cursor-pointer md:px-9 hover:border-[#14213d] hover:text-[#14213d] hover:ring-4 hover:ring-[#14213d]/30 dark:hover:ring-[#edf2f4]/30 rounded-md py-2">
                Wedding Photo Shoot
              </div>
              <div className="text-[#14213d] transition-all border-2 border-[#14213d] dark:border-[#edf2f4] dark:text-[#edf2f4] text-center hover:cursor-pointer md:px-9 hover:border-[#14213d] hover:text-[#14213d] hover:ring-4 hover:ring-[#14213d]/30 dark:hover:ring-[#edf2f4]/30 rounded-md py-2">
                Wedding Photo Shoot
              </div>
              <div className="text-[#14213d] transition-all border-2 border-[#14213d] dark:border-[#edf2f4] dark:text-[#edf2f4] text-center hover:cursor-pointer md:px-9 hover:border-[#14213d] hover:text-[#14213d] hover:ring-4 hover:ring-[#14213d]/30 dark:hover:ring-[#edf2f4]/30 rounded-md py-2">
                Wedding Photo Shoot
              </div>
            </div>
          </div>
          <div className="md:grid md:place-items-center md:col-span-2">
            {" "}
            <button className="w-full text-[#14213d] transition-all border-2 border-[#14213d] dark:border-[#edf2f4] dark:text-[#edf2f4] px-9 py-2 text-lg font-medium rounded-md">
             <FontAwesomeIcon className="" icon={faPaperPlane}/>  Send
            </button>{" "}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
