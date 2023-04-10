import React from "react";

const Text = ({ className, type }) => {
  const addClass = className ? className : "";

  return <h4 className={"font-semibold"}>Text</h4>;
};

export default Text;
