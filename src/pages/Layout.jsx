import React, { Fragment, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../parts/Header";

const Layout = () => {
  const [category, setCategory] = useState([]);
  const { data: categories } = useLoaderData();

  return (
    <Fragment>
      <Header category={category} />
      <Outlet context={{ category, setCategory, categories }} />
    </Fragment>
  );
};

export default Layout;
