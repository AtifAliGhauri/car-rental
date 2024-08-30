import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import TermsConditionSection from '../components/UI/TermsConditionSection'
import { Container, Row,Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'

import driveImg from '../assets/all-images/drive.jpg' 
import OurMembers from '../components/UI/OurMembers'
import '../styles/about.css'
const TermsCondition = () => {
    return ( 
        <Helmet  title='Terms & Condition' >
          <CommonSection title='Terms & Condition' />
          <TermsConditionSection aboutClass='termsconditionPage' />
      
        </Helmet>
        )
}

export default TermsCondition



