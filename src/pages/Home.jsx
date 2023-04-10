import React, { Fragment } from "react";
import SideMap from "../components/SideMap";
import Clients from "../parts/Clients";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/homePage/BrowseRoom";
import JustArrived from "../parts/homePage/JustArrived";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      {/* Start Hero */}
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SideMap>
        <hr className="pt-12" />
      </SideMap>
      <Footer />
    </Fragment>
  );
};

export default Home;
