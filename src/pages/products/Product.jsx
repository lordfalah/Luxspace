import React, { Fragment } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";

const itemsLink = [
  { name: "Home", path: "/" },
  { name: "Office Room", path: "" },
  { name: "Details", path: "" },
];

const Product = () => {
  const { category, setCategory } = useOutletContext();

  return (
    <Fragment>
      <BreadCrumb
        itemsLink={itemsLink}
        className="px-4 sm:px-0 py-7 mb-14 mt-20"
      />
      <Outlet context={{ category, setCategory }} />
    </Fragment>
  );
};

export default Product;
