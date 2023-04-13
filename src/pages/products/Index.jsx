import React, { Fragment, useLayoutEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import api from "../../api/baseApi";
import Footer from "../../components/Footer";
import SideMap from "../../components/SideMap";
import AboutProduct from "../../parts/detailProducts/AboutProduct";
import HeroProduct from "../../parts/detailProducts/HeroProduct";
import BreadCrumb from "../../components/BreadCrumb";

const itemsLink = [
  { name: "Home", path: "/" },
  { name: "Office Room", path: "" },
  { name: "Details", path: "" },
];

export const loaderDetailProduct = async ({ params }) => {
  const { data } = await api.get(`products/${params?.id}`);
  return data;
};

const Index = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const [selectImg, setSelectImg] = useState("");

  useLayoutEffect(() => {
    const html = document.querySelector("html");
    if (data) {
      html.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [data]);

  return (
    <Fragment>
      <BreadCrumb
        itemsLink={itemsLink}
        className="px-4 sm:px-0 py-7 mb-14 mt-20"
      />
      <HeroProduct
        data={data}
        navigation={navigation}
        selectImg={selectImg}
        setSelectImg={setSelectImg}
      />
      <AboutProduct data={data} setSelectImg={setSelectImg} />
      <SideMap></SideMap>
      <Footer />
    </Fragment>
  );
};

export default Index;
