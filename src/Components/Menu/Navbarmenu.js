import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import './Navbar.css'
import Kakeenung from '../../asserts/image/New_kakeenung.png'

const Navbarmenu = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src={Kakeenung} alt="Kakeenung-logo" width="100" />กากี่นั้งแอดเวอร์ไทซิ่ง
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              หน้าแรก
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/service'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              บริการ <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/profile'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ผลงาน
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/AboutUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              เกี่ยวกับเรา
            </Link>
            </li>
            <li className='nav-item'>
            <Link
              to='/ContactUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ติดต่อเรา
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbarmenu
