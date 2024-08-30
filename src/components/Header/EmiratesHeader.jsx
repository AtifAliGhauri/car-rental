import React, {useRef} from 'react'
import { Container, Row, Col, } from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';
import '../../styles/header.css';
import Logo from '../../assets/all-images/flights-booker.png'
import Logo_mobile from '../../assets/all-images/flights-booker-mobile-logo.png'

const EmiratesnavLinks = [
    {
     path:'/emirates',
     display: 'Home'
    },
    {
     path:'/emirates',
     display: 'Cheap Flights'
    },
    {
     path:'/emirates',
     display: 'Business Class'
    },
    {
     path:'/emirates',
     display: 'Hotels'
    },
    {
     path:'/emirates',
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

export const EmiratesHeader = () => {

    const menuRef = useRef(null)

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active')


  return <header className='header'>

      {/* -------Header top------ */}
    <div style={{ background:'#e32f37'}} className='header__top'>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6'>
            <div className='header__top__left'>
              <span>Need Help?</span>
              <span className='header__top__help'>
              <i style={{ color: '#e32f37'}} class="ri-mail-fill"></i>info@flightsbooker.co.uk
              </span>
              <span className='header__top__help'>
              <i style={{ color: '#e32f37'}} class="ri-phone-fill"></i>0203 376 5552
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
          <Col lg='3' md='3' sm='4'>
            <div className='logo'>
              <h1><Link to='/home' className='d-flex align-items-center gap-3'>
              {/* <img src={Logo}  alt='logo'/> */}

              {/* <i class="ri-car-line"></i> */}
              <span style={{ color: '#e32f37'}}>Emirates Flights </span>
              </Link></h1>
            </div>
          </Col>

          <Col lg='3' md='3' sm='4'>
            <div className='header__location d-flex align-items-center gap-2'>
              <span style={{ color: '#e32f37'}}><i style={{ color: '#e32f37'}} class="ri-earth-line"></i></span>
              <div style={{ color: '#e32f37'}} className='header__location-content'>
                <h4 style={{ color: '#e32f37'}}>Worldwide</h4>
                <h6>Cheap Flights Holidays</h6>
              </div>
            </div>
          </Col>

          <Col lg='3' md='3' sm='4'>
            <div className='header__location d-flex align-items-center gap-2'>
              <span><i style={{ color: '#e32f37'}} class="ri-time-line"></i></span>
              <div style={{ color: '#e32f37'}} className='header__location-content'>
                <h4 style={{ color: '#e32f37'}}>Mon to Sat</h4>
                <h6>24/7 Available </h6>
              </div>
            </div>
          </Col>


          <Col lg='3' md='6' sm='6'>
            {/* <div className='header__top__right'>
              <span className='header__top__help'>
              <i class="ri-phone-fill"></i>0203376552
              </span>
            </div> */}

            <div className='header__location d-flex align-items-center gap-2'>
              <span><i style={{ color: '#e32f37'}} class="ri-phone-fill"></i></span>
              <div style={{ color: '#e32f37'}} className='header__location-content'>
                <h4 style={{ color: '#e32f37'}}>0203 376 5552</h4>
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

    <div style={{background:'#e32f37'}} className='main__navbar'>
      <Container>
        <div  className='navigation__wrapper d-flex align-items-center justify-content-between'>
          <div className='menu__logo'>
            {/* <img src={Logo_mobile} /> */}
            <h1><span  className='d-flex align-items-center gap-3'>
              <span style={{ color: '#fff', style:'none'}}>Emirates Flights </span>
            </span>
            </h1>
          </div>
          <div className='menu__number' style={{ color: '#fff', style:'none', fontSize:'1.2rem'}}>
            <span><i  class="ri-phone-fill"></i></span>
            <h7>0203 376 5552</h7>
          </div>
          <span className='mobile__menu' >
          <i style={{ color: '#fff'}} class="ri-menu-line" onClick={toggleMenu}></i>
          </span>
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='menu'>
              {
                EmiratesnavLinks.map((item,index)=>(
                  <NavLink  to={item.path} className={(navClass) => 
                                EmiratesnavLinks.isActive ? "nav__active nav__item" : "nav__item"}
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
