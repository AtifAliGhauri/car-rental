import React from 'react'
import { Container,Row, Col,Form, FormGroup,Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Link } from 'react-router-dom'
import '../styles/contact.css'
import Swal from 'sweetalert2'

const socialLinks = [
    {
        url:'#',
        icon:'ri-facebook-line',
    },
    {
        url:'#',
        icon:'ri-instagram-line',
    },
    {
        url:'#',
        icon:'ri-linkedin-line',
    },
    {
        url:'#',
        icon:'ri-twitter-line',
    },
]



const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "da4953a7-0e5b-4c31-bb91-88fbc3a96f0a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Thanks For Contacting Us ",
                text: "One Of Our Agent will contact you soon or You Can Call Us 0203 376 5552",
                icon: "success"
              });
        }
      };

  return (
    <Helmet title='Contact Us'>
        <CommonSection title='Contact Us' />
        <section>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <h6 className='fw-bold'>Get In Touch</h6>

                        <Form onSubmit={onSubmit}>
                        <input hidden name='Query Select from Contact Us page : '/>

                            <FormGroup className='contact__form'>
                                <Input type='text' name='Name' placeholder='Your Name' />
                            </FormGroup>
                            <FormGroup className='contact__form'>
                                <Input type='email' name='email' placeholder='Email' />
                            </FormGroup>
                            <FormGroup className='contact__form'>
                                <textarea 
                                    rows='5'
                                    name='Mesage'
                                    placeholder='Message'
                                    className='textarea'></textarea>
                            </FormGroup>
                            <button className='contact__btn' type='submit'>Send Message</button>
                        </Form>
                    </Col>
                    <Col lg='5' md='5'>
                        <div className='contact__info'>
                            <h6 className='fw-bold'>Contact Information</h6>
                            <p className='section__description mb-0'>
                            Suite 558, 58 Peregrine Road, Hainault, Ilford, Essex, United Kingdom, IG6 3SZ
                            </p>
                            <div className='d-flex align-items-center gap-2'>
                                <h6 className='mb-0 fs-6'>Phone:</h6>
                                <p className='section__description mb-0'>0203 376 5552</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <h6 className='mb-0 fs-6'>Email:</h6>
                                <p className='section__description mb-0'>info@flightsbooker.co.uk</p>
                            </div>

                            <h6 className='fw-bold mt-4'>Follow Us</h6>
                            <div className='d-flex align-items-center gap-3 mt-3'>
                                {
                                    socialLinks.map((item, index)=>(
                                        <Link to={item.url} key={index} className='social__links-icon'>
                                            <i class={item.icon}></i>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default Contact