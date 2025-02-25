import React from 'react'
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import {Link} from 'react-router-dom';

import '../../styles/hero-slider.css';

const HeroSilder = () => {
  const settings = {
    fade:true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
  };



  return <Slider {...settings} className='hero__slider'>

    <div className='slider__item slider__item-01 mt0'>
        <Container>
            <div className='slider__content'>
                <h4 className='text-light mb-3'>Book Last Minute Deals</h4>
                <h1 className='text-light mb-4'>Book Cheap Flights and Holiday with us</h1>

                {/* <button className='btn reserve__btn mt-4'>
                    <Link to="/cars">Reserve Now</Link>
                </button> */}
            </div>
        </Container>
    </div>

    <div className='slider__item slider__item-02 mt0'>
        <Container>
            <div className='slider__content'>
                <h6 className='text-light mb-3'>Promotion Fares Available</h6>
                <h1 className='text-light mb-4'>Reserve Now and Get 25% Off</h1>

                {/* <button className='btn reserve__btn mt-4'>
                    <Link to="/cars">Reserve Now</Link>
                </button> */}
            </div>
        </Container>
    </div>

    <div className='slider__item slider__item-03 mt4'>
        <Container>
            <div className='slider__content'>
            <h6 className='text-light mb-3'>Promotion Fares Available</h6>
            <h1 className='text-light mb-4'>Reserve Now and Get 25% Off</h1>

                {/* <button className='btn reserve__btn mt-4'>
                    <Link to="/cars">Reserve Now</Link>
                </button> */}
            </div>
        </Container>
    </div>
  </Slider>
}

export default HeroSilder