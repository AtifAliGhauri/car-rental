import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import AboutSection from '../components/UI/AboutSection'
import PolicySection from '../components/UI/PolicySection'
import { Container, Row,Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'

import driveImg from '../assets/all-images/drive.jpg' 
import OurMembers from '../components/UI/OurMembers'
import '../styles/about.css'

const Privacy = () => {
  return ( 
  <Helmet  title='Privacy & Policy' >
    <CommonSection title='Privacy & Policy' />
    <PolicySection aboutClass='policyPage' />

  </Helmet>
  )
}

export default Privacy