import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChevronDown from "../assets/icon/ChevronDown";
import PaperAirplane from "../assets/icon/PaperAirplane";
import Container from "./Container";

const SideMap = ({ children }) => {
  const [dropdown, setDropdown] = useState([
    {
      id: 0,
      isOpen: false,
    },

    {
      id: 1,
      isOpen: false,
    },

    {
      id: 2,
      isOpen: false,
    },
  ]);

  const footTxt = [
    {
      id: 0,
      title: "Overview",
      subTitle: ["Shipping", "Refund", "Promotion"],
    },

    {
      id: 1,
      title: "Company",
      subTitle: ["About", "Career", "Contact Us"],
    },

    {
      id: 2,
      title: "Explore",
      subTitle: ["Term & Conds", "Privacy Policy", "For Developer"],
    },
  ];

  const handleToggle = (id) => {
    const updateDrpd = dropdown.map((drpd) => {
      if (drpd.id === id) {
        drpd.isOpen = !drpd.isOpen;
        return drpd;
      } else {
        drpd.isOpen = false;
        return drpd;
      }
    });

    setDropdown(updateDrpd);
  };

  const handleHtmlView = () => {
    const html = document.querySelector("html");
    html.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <section>
      {children}
      <Container className="px-4 md:px-0">
        <div className="flex justify-center mb-8">
          <img src="/images/content/logo.png" alt="LuxSpace" />
        </div>
        <div className="flex flex-wrap md:justify-between lg:justify-around xl:justify-center gap-y-4 md:gap-y-0">
          {footTxt.map(({ id, title, subTitle }, idx) => (
            <ul
              onClick={() => handleToggle(id)}
              key={idx}
              className="relative cursor-pointer md:cursor-default overflow-hidden md:px-0 lg:px-4 w-full md:w-2/12 md:mb-4 mb-0 accordion"
            >
              <div className="flex md:block justify-between items-center">
                <h5 className="text-lg cursor-pointer md:cursor-default font-semibold mb-2">
                  {title}
                </h5>

                <ChevronDown
                  className={`stroke-black block md:hidden transition duration-200 ease-linear ${
                    dropdown[idx].id === id && dropdown[idx].isOpen
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </div>
              {subTitle.map((child, idxChild) => (
                <li
                  className={`py-1 transition ease-in-out duration-200 ${
                    dropdown[idx].id === id && dropdown[idx].isOpen
                      ? "opacity-100 scale-1"
                      : "absolute md:relative -translate-x-full md:-translate-x-0 opacity-0 md:opacity-100 scale-0 md:scale-100"
                  }`}
                  key={idxChild}
                >
                  <Link onClick={handleHtmlView} to="/">
                    {child}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <div className="px-0 lg:px-4 space-y-3 w-full basis-full md:basis-1/3 xl:basis-3/12">
            <h5 className="text-lg font-semibold">Special Letter</h5>
            <form action="#" className="relative ">
              <label htmlFor="email" className="w-full">
                <input
                  id="email"
                  type="email"
                  placeholder="your email address"
                  className="bg-gray-100 py-3 px-5 w-full rounded-xl border-none focus:outline-none "
                />
              </label>

              <button
                type="button"
                className="absolute right-0 top-0 bottom-0 h-full bg-pink-300 p-3 
                rounded-xl flex justify-center items-center"
              >
                <PaperAirplane className="-rotate-45 fill-none stroke-white stroke-1 md:w-7 md:h-7" />
              </button>
            </form>
          </div>
        </div>
      </Container>
      <hr className="mt-16" />
    </section>
  );
};

export default SideMap;
