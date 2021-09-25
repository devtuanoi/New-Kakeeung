import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = (props) => {
  const { img, h2, p } = props;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.6435-9/90437079_111116687190667_318427002719698944_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHhiRnV2qgTtLVBLYO5jsN8yQnOtuhGPaXJCc626EY9pfU35mgRtD1YAm0W5TWvCEfAkFe-SLNTKbWWmQUZyPfB&_nc_ohc=Pn1zpBrHEa0AX8judWR&_nc_ht=scontent.fbkk5-6.fna&oh=1e071c664cd71222fd666ce78a4bb656&oe=617301AB" />
          </div>
          <div className="details">
            <h2>ห้างหุ้นส่วนจำกัด กากี่นั้ง แอดเวอร์ไทซิ่ง</h2>
            <p>ผลิตสื่อโฆษณา ประกอบกิจการสถานีวิทยุกระจายเสียง</p>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="https://www.coachspeakshow.com/wp-content/uploads/2020/07/%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B8%9B%E0%B8%B5-2020-%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%82%E0%B8%B2%E0%B8%A2.jpg" />
          </div>
          <div className="details">
            <h2>การตลาดออนไลน์</h2>
            <p>ให้คำแนะนำ ออกแบบและวางแผนการตลาดออนไลน์ให้กับลูกค้า</p>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="https://i.pinimg.com/564x/e9/ac/d6/e9acd6b77da1ebe72a19aec50de3fee8.jpg" />
          </div>
          <div className="details">
            <h2>เวลาออกอากาศ คนดีเอฟเอ็ม</h2>
            <p>รับทำสถานีวิทยุและออกอากาศสถานีของตัวเอง</p>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="https://cdn.baania.com/b10/article/2794/photo/article_2794_m0_20210310113858.jpg" />
          </div>
          <div className="details">
            <h2>ให้เช่าป้าย</h2>
            <p>ป้ายโฆษณาให้เช่า ป้ายบิลบอร์ด</p>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div className="details">
            <h2>รับจ้างถ่ายรูป วีดีโอ</h2>
            <p>
              Photoshoot and Studio เป็นหนึ่งในบริการของ Kakeenung Advertising
              Service บริการรับถ่ายรูปสินค้าครบวงจร รับถ่ายวิดีโอโฆษณา
              รับถ่ายภาพอาหาร รับถ่ายแบบเสื้อผ้า ถ่ายรูปสินค้าแคตตาล็อก
              ถ่ายวิดีโอสำหรับแบรนด์ ถ่ายโปรดักส์สำหรับโซเชียลมีเดีย
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Card;
