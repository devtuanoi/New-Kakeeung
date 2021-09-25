import React from 'react'
import Footer from '../Footer/Footer';
const Service = () => {
    return (
        <div className="header-h1">
            <h1>บริการ</h1>
            <ul align="center">
                <li><h4>การตลาดออนไลน์ <a href="/Marketing">คลิก!</a></h4></li>
                <li><h4>รับจัดงานอีเว้นท์และออกาไนซ์ <a href="/EventOrganize">คลิก!</a></h4></li>
                <li><h4>สถานีวิทยุทั้งออนแอร์และออนไลน์ <a href="/RadioOnline">คลิก!</a></h4></li>
                <li><h4>ให้เช่าป้ายโฆษณา <a href="/Rent">คลิก!</a></h4></li>
                <li><h4>รับจ้างถ่ายรูปและวีดีโอ <a href="/PhotoandVideo">คลิก!</a></h4></li>
            </ul>
            <Footer />
            
        </div>
    )
}

export default Service
