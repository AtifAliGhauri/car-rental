import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row , Col, ListGroup, ListGroupItem, Form} from 'reactstrap';
import '../../styles/footer.css'
import Logo from '../../assets/all-images/flights-booker.png'
import Card from '../../assets/all-images/master-card.jpg'



const quickLinks = [
  {
    path:'/about',
    display: 'About Us'
  },
  {
    path:'/privacy',
    display: 'Privacy Policies'
  },
  {
    path:'/termscondition',
    display: 'Terms & Conditions'
  },
  {
    path:'/cars',
    display: 'Cheap Flights'
  },
  {
    path:'/blogs',
    display: 'Blogs'
  },
  {
    path:'/contact',
    display: 'Contact Us  '
  },
]




const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
            <div className='logo footer__logo' >
              <h1><Link to='/home' className='d-flex align-items-center gap-2'>
              {/* <i class="ri-car-line"></i>
              <span>Rent Car <br /> Service </span> */}
              <img src={Logo} alt='Logo' />
              </Link></h1>
            </div>
            <p className='footer__logo-content'>
            FlightsBookers offers a range of services related to travel and accommodation
            Here are the key aspects of their offerings: Flight Booking:
             FlightsBookers allows travelers to compare and book flights 
             from various airlines and travel agents. They provide a simple search 
             interface to find the cheapest flight tickets to destination...
                   
            </p>
        </Col>

        <Col lg='2' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className='footer__link-title'>Quick Links</h5>
             <ListGroup>
              {
                quickLinks.map((item, index)=>(
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
             </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer__link-title mb-4'>Address</h5>
              <p className='office__info'>Suite 558, 58 Peregrine Road, Hainault, Ilford, Essex, United Kingdom, IG6 3SZ</p>
              <p className='office__info'>Registration no: 13553114</p>
              <p className='office__info'>Phone: 0203 376 5552</p>
              <p className='office__info'>Email: info@flightsbooker.co.uk</p>
              <p className='office__info'>Office Time: 9am - 7pm</p>
              
            </div>
        </Col>

        <Col lg='3' md='4' sm='12'>
            <div className='mb-4'>
              <h5 className='footer__link-title'>Newsletter</h5>
              <p className='section__description'>Subscribe Our Newsletter</p>
              <div className='newsletter'>
              {/* <Form onSubmit={onSubmit}> */}
                  <input hidden name='Query Select from given footer newsletter: '/>
                  <input type='email' placeholder='Email' name='Email' />
                  <span><i class="ri-send-plane-line"></i></span>
              {/* </Form> */}
              </div>
              <p className='section__description'> Prices are subject to availability of seats. Availability of seats within date range is very limited. Call now and check with
              our Flight Consultant.  </p>
              <img src={Card} alt='Card' />
              <p className='section__description'>Booking Fee From £15-£25 </p>
            </div>
        </Col>

        <Col lg='12'>
          <div className='footer__bottom'>
              <p className='section__description d-flex align-items-center justify-content-center gap-1 pt-4'>
              <i class="ri-copyright-line"></i>All Rights Reserved {year}, flightsbooker.co.uk
               
              </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer