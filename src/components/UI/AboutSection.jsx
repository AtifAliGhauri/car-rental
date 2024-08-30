import React from 'react'
import {Container, Row ,Col} from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg'

const AboutSection = ({aboutClass}) => {
  return <section className='about__section' 
                style={aboutClass ===
                'aboutPage' ? {marginTop: '0px'} : {marginTop:'280px'}}>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='about__section-content'>
                    <h4 className='section__subtitle'>About Us</h4>
                    <h2 className='section__title'>Welcome to Cheap FlightsBookers service</h2>
                    <p className='section__description'>FlightsBookers offers a range of services related to travel and accommodation.FlightsBookers is a trading name of FlightsPedia Ltd Registered in United Kingdom Registration no:13553114. Here are the key aspects of their offerings:
                    Flight Booking: FlightsBookers allows travelers to compare and book flights from various airlines and travel agents. They provide a simple search interface to find the cheapest flight tickets to destinations worldwide1.
                    Holiday Booking: Whether you’re planning a relaxing beach vacation or an adventurous getaway, FlightsBookers can assist with holiday bookings. They work directly with other companies to secure the best deals for travelers.
                    Hotel Booking: In addition to flights, FlightsBookers offers hotel booking services. Travelers can find and reserve accommodations for their trips through their platform.</p>

                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Worldwide Cheap Flights, 
                        </p>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Cheap Fares Guaranteed, 
                        </p>
                     </div>

                     
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Best Customer Services,
                        </p>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Flexible Payment Plans,
                        </p>
                     </div>

                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className='about__img'>
                    <img src={aboutImg} alt='' className='w-100' />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AboutSection