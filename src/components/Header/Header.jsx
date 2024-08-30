import React, {useRef} from 'react'
import { Container, Row, Col, } from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';
import '../../styles/header.css';
import Logo from '../../assets/all-images/flights-booker.png'
import Logo_mobile from '../../assets/all-images/flights-booker-mobile-logo.png'

const navLinks = [
 {
  path:'/home',
  display: 'Home'
 },
 {
  path:'/flights',
  display: 'Cheap Flights'
 },
 {
  path:'/home',
  display: 'Business Class'
 },
 {
  path:'/home',
  display: 'Hotels'
 },
 {
  path:'/blogs',
  display: 'Holidays'
 },
//  {
//   path:'/cars',
//   display: 'Cars'
//  },
//  {
//   path:'/blogs',
//   display: 'Blog'
//  },

{
  path:'/privacy',
  display: 'Privacy & Policy'
 },
 {
  path:'/termscondition',
  display: 'Terms & Conditions'
 },
 {
  path:'/about',
  display: 'About Us'
 },
 {
  path:'/contact',
  display: 'Contact Us'
 },
]

const Header = () => {

  const menuRef = useRef(null)

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active')


  return <header className='header'>

      {/* -------Header top------ */}
    <div className='header__top'>
      <Container>
        <Row>
          <Col lg='6' md='8' sm='6'>
            <div className='header__top__left'>
              <span>Need Help?</span>
              <span className='header__top__help'>
              <i class="ri-mail-fill"></i>info@flightsbooker.co.uk
              </span>
              <span className='header__top__help'>
              <i class="ri-phone-fill"></i>0203 376 5552
              </span>
            </div>
          </Col>
          {/* <Col lg='6' md='6' sm='6'>
            <div className='header__top__right d-flex align-items-center justify-content-end gap-3'>
              <Link to='#' className='d-flex align-items-center gap-1'>
              <i class="ri-login-circle-line"></i>Login</Link>

              <Link to='#' className='d-flex align-items-center gap-1'>
              <i class="ri-user-line"></i>Registration</Link>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
    
    {/* ==============  header middle============== */}
    <div className='header__middle'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='4'>
            <div className='logo' >
              <h1><Link to='/home' className='d-flex align-items-center gap-3'>
              <img src={Logo}  alt='logo'/>

              {/* <i class="ri-car-line"></i>
              <span>Rent Car <br /> Service </span> */}
              </Link></h1>
            </div>
          </Col>

          <Col lg='3' md='2' sm='4' className='header__world'>
            <div className='header__location d-flex align-items-center gap-2'>
              <span><i class="ri-earth-line"></i></span>
              <div className='header__location-content'>
                <h4>Worldwide</h4>
                <h6>Cheap Flights Holidays</h6>
              </div>
            </div>
          </Col>

          <Col lg='3' md='3' sm='4'>
            <div className='header__location d-flex align-items-center gap-2'>
              <span><i class="ri-time-line"></i></span>
              <div className='header__location-content'>
                <h4>Mon to Sat</h4>
                <h6>9 AM to 7 PM </h6>
              </div>
            </div>
          </Col>


          <Col lg='3' md='4' sm='6'>
            {/* <div className='header__top__right'>
              <span className='header__top__help'>
              <i class="ri-phone-fill"></i>0203376552
              </span>
            </div> */}

            <div className='header__location d-flex align-items-center gap-2'>
              <span><i class="ri-phone-fill"></i></span>
              <div className='header__location-content'>
                <h4>0203 376 5552</h4>
                <h6>Call Our Support</h6>
              </div>
            </div>
          </Col>


          {/* <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-end'>
               
            <button className='header__btn btn'>
              <Link to='/contact'>
              <i class="ri-phone-line"></i>0203 376 552
              </Link>
            </button>
          </Col> */}
        </Row>
      </Container>
    </div>

    {/* =========== main menu ============= */}

    <div className='main__navbar'>
      <Container>
        <div className='navigation__wrapper d-flex align-items-center justify-content-between'>
          <div className='menu__logo'>
            <img src={Logo_mobile} />
          </div>
          <div className='menu__number'>
            <span><i class="ri-phone-fill"></i></span>
            <h7>0203 376 5552</h7>
          </div>
          <span className='mobile__menu'>
          <i class="ri-menu-line" onClick={toggleMenu}></i>
          </span>
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='menu'>
              {
                navLinks.map((item,index)=>(
                  <NavLink  to={item.path} className={(navClass) => 
                                navClass.isActive ? "nav__active nav__item" : "nav__item "}
                                 key={index}>
                  {item.display}
                  </NavLink>
                ))
              }
            </div>
          </div>

          {/* <div className='nav__right'>
            <div className='search__box'>
              <input type='text' placeholder='Search' />
              <span><i class="ri-search-line"></i></span>
            </div>
          </div> */}

        </div>
      </Container>
    </div>
  </header>
}

export default Header