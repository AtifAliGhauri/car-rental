import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import AboutSection from '../components/UI/AboutSection'
import { Container, Row,Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'

import driveImg from '../assets/all-images/drive.jpg' 
import OurMembers from '../components/UI/OurMembers'
import '../styles/about.css'

const About = () => {
  return ( 
  <Helmet  title='About Us' >
    <CommonSection title='About Us' />
    <AboutSection aboutClass='aboutPage' />

    {/* <section className='about__page-section'>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12'>
            <div className='about__page-img'>
              <img src={driveImg} alt='' className='w-100 round-3'/>
            </div>
          </Col>

          <Col lg='6' md='6' sm='12'>
            <div className='about__page-content'>
              <h2 className='section__title'>We are committed to provide Safe solution </h2>

              <p className='section__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>

              <p className='section__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
              <div className='d-flex align-item-center gap-3 mt-4'>
               <span className='fs-4'><i class="ri-phone-line"></i></span>
            
              
                <div>
                  <h6 className='section__subtitle'>Need Any Help?</h6>
                  <h4>+924374638</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section> */}

    <BecomeDriverSection />

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className='section__subtitle'>Experts</h6>
            <h4 className='section__title'>Our Members</h4>
          </Col>

          <OurMembers />
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default About