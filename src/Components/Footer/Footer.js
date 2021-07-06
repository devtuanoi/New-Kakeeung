import React from "react";
import { Copyright } from "@material-ui/icons";
import PageFacebook from "./PageFacebook";
import "./Footer.css";
import Kakeenung from "../../asserts/image/kakeenung.png";

const Footer = () => {
  return (
    <div className="footer-kakeenung">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>
            &nbsp; <img src={Kakeenung} width="10%"></img>กากี่นั้งแอดเวอร์ไทซิ่ง
            </h2>
            <br />
            <p>
              ผลิตสื่อโฆษณา ประกอบกิจการสถานีวิทยุกระจายเสียง <br />
              หมวดธุรกิจ :
              กิจกรรมของบริษัทโฆษณา
            </p>
            <br />
            <div class="contact">
              <span>
                <i class="fa fa-phone"></i> &nbsp; 081-234-5678
              </span>
              <span>
                <i class="fa fa-envelope"></i> &nbsp; padithorn@kakeenung.com
              </span>
            </div>
            <br />
            <div class="socials">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>ข้อมูลห้างหุ้นส่วน</h2>
            <br />
            <ul>
              <a href="#">
                <li>อีเว้นท์</li>
              </a>
              <a href="#">
                <li>บุคคลากร</li>
              </a>
              <a href="#">
                <li>บริการ</li>
              </a>
              <a href="#">
                <li>ผลงาน</li>
              </a>
              <a href="#">
                <li>เงื่อนไขการให้บริการ</li>
              </a>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2>ติดต่อเรา</h2>
            <br />
            <PageFacebook />
          </div>
        </div>
        <div className="footer-bottom">
          <Copyright />
          2021 Kakeenung.com | Marketing coordinator developer web site
        </div>
      </footer>
    </div>
  );
};

export default Footer;
