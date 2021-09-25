import React, { Fragment } from "react";
import Hero from "../Hero/Hero";
import CardSlider from "../Card/CardSlider";
import Footer from "../Footer/Footer";
import ScrollTop from "../Scroll/ScrollTop";

const Home = () => {
  return (
    <div className="header-h1">
      <h1>ห้างหุ้นส่วนจำกัด กากี่นั้งแอดเวอร์ไทซิ่ง</h1>
      <ScrollTop />
      <Hero />
      <CardSlider />
      <Footer />
    </div>
  );
};

export default Home;
