import React, { Fragment } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ShippingCart from "../../parts/Shopping/ShippingCart";
import TableShop from "../../parts/Shopping/TableShop";
import SideMap from "../../components/SideMap";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

const itemsLink = [
  { name: "Home", path: "/" },
  { name: "Shopping Cart", path: "/cart" },
];

const Cart = () => {
  return (
    <Fragment>
      <BreadCrumb itemsLink={itemsLink} className="px-4 sm:px-0 py-7 mt-20" />
      <section className=" md:my-20">
        <Container className="flex flex-col md:flex-row justify-between">
          <TableShop />
          <ShippingCart />
        </Container>
      </section>
      <SideMap>
        <hr className="block my-14" />
      </SideMap>
      <Footer />
    </Fragment>
  );
};

export default Cart;
