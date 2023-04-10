import React from "react";

const Container = ({ className, children }) => {
  const addClass = className ? className : "";
  return <div className={`container mx-auto ${addClass}`}>{children}</div>;
};

export default Container;
