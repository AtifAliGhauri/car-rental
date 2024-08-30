import React from 'react'
import '../../styles/become-driver.css'
import { Container, Row, Col} from 'reactstrap'
import driveImg from '../../assets/all-images/CheapFlightsDeals.jpg'

const EmiratesBecomeDriverSection = () => { 
    return <section style={{ background:'#e32f37'}} className='become__driver'>
    <Container>
        <Row>
            <Col lg='6' md='6' sm='12' className='become__driver-img'>
                <img src={driveImg} alt='' className='w-100' />
            </Col>

            <Col lg='6' md='6' sm='12'>
                <h6 className='section__title become__driver-title'>
                Discover Emirates & Book Low cost Flight Deals. Call Now 0203-376-5552 
                </h6>

                {/* <button className='btn become__driver-btn mt-4'>Become a Driver</button> */}
            </Col>

        </Row>
    </Container>
  </section>
}

export default EmiratesBecomeDriverSection