import React, { Fragment, useState } from "react";
import Play from "../assets/icon/Play";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionView = () => {
    const elmBrowseRoom = document.querySelector("#browse-the-room");
    elmBrowseRoom.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <Fragment>
      <div
        className={`transition-opacity duration-300 ease-out ${
          isOpen
            ? "modal block opacity-100 h-auto"
            : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="modal-overlay" onClick={() => setIsOpen(false)}></div>
        <div
          className={`modal-container absolute transition-transform duration-300 delay-75 ease-out ${
            isOpen ? "-translate-y-0" : "translate-y-full"
          }`}
        >
          <div className={`modal-content `}>
            <iframe
              allowFullScreen
              allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; picture-in-picture"
              width="100%"
              height="100%"
              src="https://youtube.com/embed/J6qIzKxmW8Y"
            ></iframe>
          </div>
        </div>
      </div>

      <section className="hero relative flex-col md:flex-row h-[90vh] md:h-auto flex justify-center items-center ">
        <div className="text-center w-full container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold">
            The Room <br className="" />
            You've Dreaming
          </h1>
          <h2 className="px-8 text-base md:px-0 md:text-lg my-6 tracking-wide">
            Kami menyediakan furniture berkelas yang
            <br className="hidden lg:block" />
            membuat ruangan terasa homey
          </h2>
          <button
            onClick={handleSectionView}
            type="button"
            className="bg-pink-400/40 px-8 py-3 rounded-full transition duration-200 ease-in-out hover:bg-black hover:text-pink-400 text-black mt-3"
          >
            Explore Now
          </button>
        </div>
        <div className="w-full inset-0">
          <div className="md:relative">
            <div className="absolute -z-10 md:z-10 inset-0 bg-black/[35%]"></div>

            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="flex justify-center items-center absolute md:top-1/2 md:left-1/2 md:translate-1/2 md:-translate-x-1/2 group transition-opacity
            md:-translate-y-1/2 z-20 bg-blue-100 right-7 -bottom-5 w-12 h-12 md:w-20 md:h-20 rounded-full"
            >
              <Play className="fill-white stroke-none md:w-11 md:h-11 group-hover:fill-black/20" />
            </button>

            <img
              src="images/content/image-section-1.png"
              className="absolute -z-20 inset-0 md:relative object-cover object-center h-full md:w-full md:h-full"
              alt=""
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
