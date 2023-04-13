import React, { Fragment, useState } from "react";
import Play from "../assets/icon/Play";
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    ref: hero,
    inView,
    entry,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

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

      <section
        ref={hero}
        className="hero relative flex-col md:flex-row h-[90vh] md:h-auto flex justify-center items-center"
      >
        <div className="text-center w-full container overflow-hidden">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold transition duration-500 ease-linear ${
              inView ? "opacity-100 translate-y-0" : "translate-y-56 opacity-0"
            }`}
          >
            The Room <br className="" />
            You've Dreaming
          </h1>
          <h2
            className={`px-8 text-base md:px-0 md:text-lg my-6 tracking-wide transition duration-300 ease-linear delay-500 ${
              inView ? "opacity-100 translate-x-0" : "translate-x-64 opacity-0"
            }`}
          >
            Kami menyediakan furniture berkelas yang
            <br className="hidden lg:block" />
            membuat ruangan terasa homey
          </h2>

          <div
            className={`mt-3 transition duration-200 ease-in-out delay-1000 w-fit mx-auto ${
              inView ? "opacity-100 translate-x-0" : "translate-x-64 opacity-0"
            }`}
          >
            <button
              onClick={handleSectionView}
              type="button"
              className={`bg-pink-400/40 px-8 py-3 rounded-full transition duration-200 ease-in-out hover:bg-black hover:text-pink-400 text-black`}
            >
              Explore Now
            </button>
          </div>
        </div>
        <div className="w-full inset-0">
          <div className="md:relative">
            <div className="absolute -z-10 md:z-10 inset-0 bg-black/[35%]"></div>

            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className={`flex justify-center items-center absolute md:top-1/2   md:-translate-x-1/2 group transition-all duration-200 ease-linear md:-translate-y-1/2 z-20 bg-blue-100 right-7 -bottom-5 w-12 h-12 md:w-20 md:h-20 rounded-full ${
                inView
                  ? "opacity-100 md:left-1/2 delay-300"
                  : "translate-x-80 opacity-0 md:left-full"
              }`}
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
