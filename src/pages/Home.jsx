import React from 'react'
import HeroSlider from '../components/UI/HeroSilder'
import Helmet from '../components/Helmet/Helmet'
import FindCarForm from '../components/UI/FindCarForm'

import { Container, Row, Col } from 'reactstrap'
import AboutSection from '../components/UI/AboutSection'
import ServiceList from '../components/UI/ServiceList'
import carData from '../assets/data/carData'
import CarItem from '../components/UI/CarItem'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import Testimonial from '../components/UI/Testimonial'
import BlogList from '../components/UI/BlogList'
import Test__CARFORM from '../components/UI/Test__CARFORM'


const Home = () => {
  return (
    <Helmet title="Home">

    {/* ========= hero section ========= */}
      <section className='p-0 hero__slider-section'>
        <HeroSlider />

        <div className='hero__form'>
          <Container>
            <Row className='form__row'>
              {/* <Col lg='4' md='4'>
                <div className='find__cars-left'>
                  <h2>Find your best car here</h2>
                </div>
              </Col> */}

              <Col lg='12' md='8' sm='12'>
                {/* <FindCarForm /> */}
                <Test__CARFORM />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* ========== about section =========== */}

      {/* <AboutSection /> */}

      {/* ===========  services section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mobile__service mb-5 text-center'>
              <h6 className='section__subtitle'>Why You </h6>
              <h2 className='section__title'>Choose Us</h2>
            </Col>

            <ServiceList />
          </Row>
        </Container>
      </section>

    {/* ============= car offer section ================ */}

    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h6 className='section__subtitle'>Cheap Flights Deals </h6>
            <h2 className='section__title'>Our Hot Destinations</h2>
          </Col>

          {
            carData.slice(0, 12).map((item) => (
              <CarItem item={item} key={item.id} />
            ))
          }

        </Row>
      </Container>
    </section>

          {/* ============= become a driver Section ========= */}
        <BecomeDriverSection />

        {/* ==============  testimonial section ============ */}

        {/* <section>
          <Container>
            <Row>
              <Col lg='12' className='mb-4 text-center'>
                <h6 className='section__subtitle'>Our Clients says</h6>
                <h2 className='section__title'>Testimonial</h2>
              </Col>

              <Testimonial />
            </Row>
          </Container>
        </section> */}

        {/* ==============  blog Section ============= */}

        <section>
          <Container>
            <Row>
              <Col lg='12' className='mb-5 text-center'>
                <h6 className='section__subtitle'>Explore Our Blogs</h6>
                <h2 className='section__title'> Latest Blogs</h2>
              </Col>

              <BlogList />
            </Row>
          </Container>
        </section>

    </Helmet>
  )
}

export default Home