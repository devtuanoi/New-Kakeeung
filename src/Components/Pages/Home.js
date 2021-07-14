import React, { Fragment } from "react";
import Hero from "../Hero/Hero";
import CardSlider from "../Card/CardSlider";
import Footer from "../Footer/Footer";
import ScrollTop from "../Scroll/ScrollTop";

const Home = () => {
  return (
    <Fragment>
      <ScrollTop />
      <Hero />
      <CardSlider />
      <Footer />
    </Fragment>
  );
};

export default Home;
