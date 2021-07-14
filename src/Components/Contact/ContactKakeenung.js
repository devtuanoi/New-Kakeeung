import React from "react";
import Kakeenung from "../../asserts/image/kakeenung.png";
import "./ContactKakeenung.css"

const ContactKakeenung = () => {

  return (
      <>
        <div className="container-kakeenung">
            <div style={{textAlign: 'center'}}>
            <h3>ข้อมูลต้องการติดต่อ</h3>
            <p>ท่านสามารถกรอกข้อมูลที่ต้องการติดต่อ</p>
                </div>
      <div className="row">
        <div className="column">
            <img src={Kakeenung}  width="100%" />
        </div>
        <div class="column">
                <div className="contact">
                    <label for="fname">ชื่อ : </label>
                    <input type="text" id="fname" name="firstname" placeholder="ชื่อลูกค้า" />
                    <label for="lname">นามสกุล : </label>
                    <input type="text" id="lname" name="lastname" placeholder="นามสกุลลูกค้า" />
                    <label for="country">ที่อยู่ลูกค้า</label>
                    <label for="no-address">บ้านเลขที่ : </label>
                    <input type="text" id="no-address" name="no-address" placeholder="12/3"/>
                    <label for="subject">ติดต่อสอบถาม/แก้ไขปัญหา</label>
                    <textarea id="subject" name="subject" placeholder="เรื่องที่ต้องการติดต่อสอบถาม" style={{height:'170px'}}></textarea>
                    <input type="submit" value="ส่งข้อมูล" />
                </div>
        </div>
    </div>
    </div>
    </>

  );
};

export default ContactKakeenung;
