import React from 'react'
import '../../styles/become-driver.css'
import { Container, Row, Col} from 'reactstrap'
import driveImg from '../../assets/all-images/CheapFlightsDeals.jpg'

const BecomeDriverSection = () => {
  return <section className='become__driver'>
    <Container>
        <Row>
            <Col lg='6' md='6' sm='12' className='become__driver-img'>
                <img src={driveImg} alt='' className='w-100' />
            </Col>

            <Col lg='6' md='6' sm='12'>
                <h6 className='section__title become__driver-title'>
                    Book Worldwide Cheap Flights and Holidays with 25% Discount Fares 
                </h6>

                {/* <button className='btn become__driver-btn mt-4'>Become a Driver</button> */}
            </Col>

        </Row>
    </Container>
  </section>
}

export default BecomeDriverSection