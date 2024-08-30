import React from 'react'
import {Container, Row ,Col} from 'reactstrap'
import '../../styles/about-section.css'


const PolicySection = ({policyClass}) => {
  return <section className='about__section' 
                style={policyClass ===
                'policyPage' ? {marginTop: '0px'} : {marginTop:'0px'}}>
    <Container>
        <Row>
            <Col lg='12' md='6'>
                <div className='about__section-content'>
                    {/* <h4 className='section__subtitle'>Privacy Policy for Flights Booker</h4> */}
                    <h2 className='section__title'>Privacy Policy</h2>
                    <p className='section__description'>Welcome to https://flightsbooker.co.uk/. This privacy policy is designed to inform you about how we collect, process, handle, and protect your personal information while you browse or use our website. It also outlines your rights under current laws and regulations. If you do not agree with this policy, please cease using our website.
                    </p>
                     
                     <h4 className='section__subtitle'>Key Definitions</h4> 
                     
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>"I", "our", "us", or "we": Refers to Flights Booker and its subsidiary trading names. 
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>"You", "your", "the user": Refers to the person(s) using this website. 
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>GDPR: General Data Protection Regulation. 
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>PECR: Privacy & Electronic Communications Regulation. 
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>ICO: Information Commissioner's Office. 
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Cookies: Small files stored on a user’s computer or device. 
                        </p>
                     </div>

                     <h4 className='section__subtitle'>Processing of Your Personal Data</h4> 
                     <p className='section__description'>Under GDPR, we control and/or process any personal information about you electronically using lawful bases. If we change the lawful basis upon which we process your personal information, we will notify you and stop processing if the new lawful basis is not relevant.
                     </p>

                     <h4 className='section__subtitle'>Your Rights</h4> 
                     <p className='section__description'>Under GDPR, your rights include: </p>

                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>1. The right to be informed. 
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>2. The right of access. 
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>3. The right to rectification.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>4. The right to erasure.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>5. The right to restrict processing.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>6. The right to data portability.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>7. The right to object.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>8. The right not to be subject to automated decision-making, including profiling.
                        </p>
                     </div>

                     <p className='section__description'>You have the right to complain to the ICO (www.ico.org.uk) if you feel there is an issue with how we handle your data. We manage subject access requests in line with GDPR.
                     </p>

                     <h4 className='section__subtitle'>Personal Information We Collect</h4>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Personal Information: Identifiable information about a natural person, including name, location data, identification number, or factors specific to the individual's identity. It does not include anonymised data.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>When using our travel services, we collect personal information such as your name, phone number, address, email, and financial information (e.g., card details). Additional personal information may be required for some services.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Automatically Collected Information: This includes device ID, unique identifier, device type, advertising ID, location information (if enabled), page view statistics, referral URLs, browsing history, IP address, and web log information.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>We use cookies, unique identifiers, web beacons, and similar technologies to gather information about your interactions with our website and services.
                        </p>
                     </div>

                     <h4 className='section__subtitle'>Information from Other Sources</h4>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>We augment personal information we collect with data from third parties, such as demographic information, credit check data, and additional contact information, which may be used to enhance your account information.
                        </p>
                     </div>
                     <h4 className='section__subtitle'>Social Media</h4>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>We enable you to share content from our website on social media platforms, which may provide us access to your personal information, such as content liked/viewed and advertisement interactions. You control what personal information we can access through your social media privacy settings.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>By linking your account with social media, you authorize us to collect, use, and retain information from these platforms in accordance with this privacy policy.
                        </p>
                     </div>

                     <h4 className='section__subtitle'>How We Use Your Information</h4>
                     <p className='section__description'>We use your personal information for various business and legal purposes, including:</p>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>1. Providing travel services and managing bookings.</p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>2. Fulfilling contracts and complying with legal obligations.</p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>3. Account management and payment processing.</p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>4. Operating, improving, and measuring our services.</p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>5. Ensuring the safety and security of our services.</p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>6. Customizing site content.</p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>7. Contacting you about your account.</p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>8. Resolving disputes and troubleshooting issues.</p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>9. Collecting dues.</p>
                     </div>

                     <p className='section__description'>With your consent, we may use your information for marketing, providing third-party marketing, customizing third-party advertising, and using sensitive personal information for smoother transactions. You have the right to withdraw consent at any time.
                     </p>

                     <h4 className='section__subtitle'>Your Choices</h4>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Marketing: To unsubscribe from marketing communications, use the link provided in our emails to update your preferences. We do not sell or disclose personal information to third parties for their marketing without your consent.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Advertising: To opt out of our advertising programs, follow the instructions in the advertisements or as noted in our cookie notice. Opting out stops personalized advertising but does not prevent data collection.
                        </p>
                     </div>

                     <h4 className='section__subtitle'>Access, Control, and Correction</h4>
                     <p className='section__description'>Flights Booker respects your rights to access, modify, or delete your personal information. To request access or changes, visit our Contact Us page. We may withhold access or deny changes in certain cases as per applicable laws.
                     </p>       

                     <h4 className='section__subtitle'>Sharing Your Information</h4>
                     <p className='section__description'>We may share your information with financial partners, service providers, law enforcement, government agencies, and credit bureaus for purposes such as:
                     </p>    

                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>1. Providing joint services and content.
                        </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>2. Preventing fraud and illegal activities.</p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>3. Sending personalized advertising and marketing.</p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>4. Improving products and services. </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>5. Offering financial products. </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>6. Complying with legal obligations. </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>7. Responding to claims and protecting individual rights.  </p>
                     </div>
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>8. Reporting suspected illegal activities. </p>
                     </div>          

                     <h4 className='section__subtitle'>Change of Ownership</h4>
                     <p className='section__description'>In the event of a merger or acquisition, we may share your information with the new entity, which must adhere to this privacy policy. You will be notified of any changes to how your data is handled.
                     </p>

                     <h4 className='section__subtitle'>Data Retention</h4>
                     <p className='section__description'>We retain personal information based on the service context and legal obligations, considering factors such as: </p> 
                     
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>1. Service provision duration. </p>
                     </div> 
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>2. Improving and maintaining product performance. </p>
                     </div> 
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>3. Ensuring website and system security. </p>
                     </div> 
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>4. Meeting financial and business record requirements. </p>
                     </div> 
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>5. Legal and contractual obligations. </p>
                     </div> 
                     <div className='about__section-item d-flex align-items-center'>
                        <p className='section__description d-flex align-items-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>6. Litigation purposes.</p>
                     </div> 

                     <p className='section__description'>Once retention periods expire, we securely delete your data per our policies.
                     </p>

                     <h4 className='section__subtitle'>Cookies</h4>
                     <p className='section__description'>We use cookies to enhance your user experience by tracking website usage, displaying relevant content, and keeping you logged in. Some cookies are essential for full website functionality. You can manage cookies via your browser settings.

                    For any questions or to update your details, please use our Contact Us facility. Thank you for visiting Flights Booker.
                    </p> 
                     




                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default PolicySection