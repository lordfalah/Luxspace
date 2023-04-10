import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const BreadCrumb = ({ itemsLink, className }) => {
  const addClass = className ? className : "";
  return (
    <section className={`breadcrump  bg-gray-100 ${addClass}`}>
      <Container>
        <ul className="flex font-light text-lg">
          {itemsLink.map(({ name, path }, idx) => {
            const aria =
              idx + 1 === itemsLink.length
                ? { "aria-label": "current page" }
                : "";
            return (
              <li key={`${path}:${idx}`}>
                <Link
                  to={path}
                  className={`${
                    idx + 1 === itemsLink.length
                      ? "font-semibold"
                      : "after:content-['/'] after:mx-5"
                  }`}
                  {...aria}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default BreadCrumb;
