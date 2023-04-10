import React, { Fragment, useState } from "react";
import Container from "../components/Container";
import ShoppingCart from "../assets/icon/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Header = ({ category }) => {
  const {
    ref: app,
    inView,
    entry,
  } = useInView({
    threshold: 0,
  });
  const [toggle, setToggle] = useState(false);
  const myRoute = useLocation();

  const navHeader = [
    { title: "Showcase", path: "/", to: "#just-arrived" },
    {
      title: "Catalog",
      path: "/",
      to: "html",
    },
    {
      title: "Delivery",
      path: "/",
      to: "html",
    },

    {
      title: "Rewards",
      path: "/",
      to: "html",
    },

    {
      title: (
        <ShoppingCart
          className={`icon-cart ${category.length > 0 ? "animate-shake" : ""}`}
        />
      ),

      path: "/cart",
      to: "html",
    },
  ];

  const handleScrollToTop = (tags) => {
    try {
      const elm = document.querySelector(tags);
      elm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    } catch (error) {
      const elm = document.querySelector("html");
      elm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  return (
    <div ref={app} className="app">
      <header
        style={{
          borderStyle: `${!inView ? "inset" : "none"}`,
        }}
        className={`fixed top-0 transition duration-200 ease-in-out  w-full z-50 ${
          !inView ? "bg-gradient-to-r from-white/60 to-black/30 shadow-md" : ""
        }`}
      >
        <Container className="py-5">
          <nav className="px-4 md:px-0 flex justify-between items-center">
            <Link
              to={"/"}
              className="cursor-pointer"
              onClick={() => handleScrollToTop("html")}
            >
              <img
                className="w-full md:w-4/5 lg:w-full"
                src="/images/content/logo.png"
              />
            </Link>
            <div className="flex gap-5 items-center md:hidden">
              <button
                type="button"
                onClick={() => setToggle((prev) => !prev)}
                className="nav-close relative flex flex-col justify-between z-10 w-8 h-[23px] "
              >
                {[0, 1, 2].map((id, idx) => (
                  <span
                    key={id}
                    id={id}
                    className={`block absolute transition duration-300 ease-out h-[3px] bg-black rounded-[9px] items-center origin-left ${
                      idx === 0 ? "top-0" : ""
                    } ${idx === 1 ? "top-1/2 -translate-y-1/2" : ""} ${
                      idx === 2 ? "bottom-0" : ""
                    } 

                    ${
                      idx === 0
                        ? toggle
                          ? "rotate-45 w-7 left-[2px] top-[0.8px]"
                          : "w-full left-0"
                        : ""
                    }
                    ${
                      idx === 1
                        ? toggle
                          ? "w-full scale-0 opacity-0 -translate-x-full"
                          : "w-full scale-100 -translate-x-0 opacity-100"
                        : ""
                    }
                    ${
                      idx === 2
                        ? toggle
                          ? "-rotate-45 w-7 right-[3.5px]"
                          : "w-full right-0"
                        : ""
                    }`}
                  ></span>
                ))}
              </button>

              <Link to={"/cart"} className="relative block">
                <ShoppingCart
                  className={`icon-cart block origin-left md:hidden ${
                    category.length > 0 ? "animate-shake" : ""
                  }`}
                />
                <span
                  className={`absolute flex h-2 w-2 top-1 right-[2px] transition duration-150 ease-in-out ${
                    category.length <= 0
                      ? "opacity-0 scale-0"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="absolute inline-flex rounded-full right-0 h-2 w-2 bg-sky-500"></span>
                </span>
              </Link>
            </div>

            <div
              style={{
                transition: "0.5s",
              }}
              className={`h-full overflow-hidden fixed md:relative bg-white  md:bg-transparent top-0 md:top-auto left-0 md:left-auto ${
                toggle ? "w-full md:w-auto" : "w-0 md:w-auto"
              }`}
            >
              <ul className="flex relative h-full w-full flex-col md:flex-row gap-y-11 md:gap-7 items-center justify-center">
                {navHeader.map(({ title, path, to }, idx) => (
                  <li
                    onClick={() => {
                      setToggle(false);
                      handleScrollToTop(to);
                    }}
                    style={{
                      transition:
                        "all 300ms cubic-bezier(0.075, 0.82, 0.165, 1)",
                    }}
                    key={idx}
                    className={`nav-bar-menu cursor-pointer relative hover:after:w-full hover:after:h-[1px] md:hover:after:w-full md:hover:after:h-[1px] ${
                      myRoute.pathname === "/"
                        ? "text-black md:text-white hover:after:bg-black md:hover:after:bg-white"
                        : "text-black hover:after:bg-black"
                    }  ${idx === 4 ? "ml-4 hidden md:block" : ""} ${
                      toggle ? "hover:scale-125 hover:text-black/75" : ""
                    }`}
                  >
                    <Link to={path} className={`relative block `}>
                      {idx === 4 ? (
                        <Fragment>
                          <span
                            className={`absolute flex h-2 w-2 top-1 right-[2px] transition duration-150 ease-in-out ${
                              category.length <= 0
                                ? "opacity-0 scale-0"
                                : "opacity-100 scale-100"
                            }`}
                          >
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="absolute inline-flex rounded-full right-0 h-2 w-2 bg-sky-500"></span>
                          </span>
                          {title}
                        </Fragment>
                      ) : (
                        title
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default Header;
