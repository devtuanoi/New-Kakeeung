import React from "react";
import { Copyright } from "@material-ui/icons";
import { Link } from "react-router-dom";
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
              &nbsp; <img src={Kakeenung} width="10%"></img>
              กากี่นั้งแอดเวอร์ไทซิ่ง
            </h2>
            <br />
            <p>
              ผลิตสื่อโฆษณา ประกอบกิจการสถานีวิทยุกระจายเสียง <br />
              หมวดธุรกิจ : กิจกรรมของบริษัทโฆษณา
            </p>
            <br />
            <div class="contact">
              <span>
                <i class="fa fa-phone"></i> &nbsp; 081-234-5678
              </span>
              <br />
              <br />
              <span>
                <i class="fa fa-envelope"></i> &nbsp; komdeefm@gmail.com
              </span>
            </div>
            <br />
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
            <div class="socials">
              <a href="https://www.facebook.com/%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%81%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%97%E0%B8%8B%E0%B8%B4%E0%B9%88%E0%B8%87-111108467191489/">
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
        </div>
        <div className="footer-bottom">
          <Copyright />
          2021 Kakeenung.com | Marketing coordinator Radio Online.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
