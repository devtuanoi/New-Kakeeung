import React from "react";
import ContactKakeenung from "../Contact/ContactKakeenung";
import Footer from "../Footer/Footer";
import ScrollTop from "../Scroll/ScrollTop";


const ContactUs = () => {
  return (
    <>
    <ScrollTop />
    <div className="sec__one">
        <h1>ติดต่อเรา</h1>
    </div>
    <ContactKakeenung />
    <Footer />
    </>
  );
};

export default ContactUs;
