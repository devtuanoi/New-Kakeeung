import React, { Fragment } from "react";
import Hero from "../Card/Hero";
import CardSlider from "../Card/CardSlider";
import Footer from "../Footer/Footer";
// import Slider from "../Slider/Slider";


const Home = () => {
  return (
    <Fragment>
      {/* <Slider /> */}
      <Hero />
      <CardSlider />
      <hr />
      <Footer />
    </Fragment>
  );
};

export default Home;
