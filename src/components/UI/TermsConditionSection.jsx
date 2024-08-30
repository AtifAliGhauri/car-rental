import React from 'react'
import {Container, Row ,Col} from 'reactstrap'
import '../../styles/about-section.css'

const TermsConditionSection = ({termsconditionClass}) => {
    return <section className='about__section' 
    style={termsconditionClass ===
    'termsconditionPage' ? {marginTop: '0px'} : {marginTop:'0px'}}>
<Container>
<Row>
<Col lg='12' md='6'>
    <div className='about__section-content'>
        {/* <h4 className='section__subtitle'>Privacy Policy for Flights Booker</h4> */}
        <h2 className='section__title'>Booking Terms and Conditions</h2>
         <h4 className='section__subtitle'>1. General Information</h4> 
         
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>1.1. By booking a flight through https://flightsbooker.co.uk/, you agree to comply with and be bound by the following terms and conditions.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>1.2. These terms and conditions are subject to change without prior notice at our discretion. The most current version will be available on our website.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>1.3. The terms "we," "us," and "our" refer to the company providing the booking services.
            </p>
         </div>
         
         

         <h4 className='section__subtitle'>2. Booking and Payment</h4> 
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>2.1. All bookings are subject to availability and acceptance by the airline. 
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>2.2. Full payment is required at the time of booking unless otherwise specified. Payment can be made using major credit cards, debit cards, or other payment methods as specified on our website.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>2.3. Prices are displayed in GBP (£) and include applicable taxes and fees unless otherwise noted.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>2.4. We reserve the right to correct any pricing errors on our website and to cancel bookings made at an incorrect price.
            </p>
         </div>

         <h4 className='section__subtitle'>3. Changes and Cancellations</h4>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>3.1. Changes to bookings may be subject to availability and additional charges, including but not limited to fare differences and service fees.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>3.2. Cancellations may incur fees as determined by the airline's policy and our service fees. Refunds, if applicable, will be processed according to the airline's policy and may take several weeks.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>3.3. Non-refundable tickets cannot be refunded under any circumstances.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>3.4. In the event of a flight cancellation by the airline, we will assist you in obtaining a refund or alternative travel arrangements as per the airline's policy.
            </p>
         </div>

         <h4 className='section__subtitle'>4. Travel Documents</h4>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>4.1. It is the passenger's responsibility to ensure that they have valid travel documents, including passports, visas, and any other required documentation.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>4.2. We are not responsible for any issues arising from incomplete or invalid travel documentation.
            </p>
         </div>

         <h4 className='section__subtitle'>5. Check-in and Boarding</h4>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>5.1. Passengers must comply with the airline's check-in and boarding procedures. Failure to do so may result in denied boarding and forfeiture of the ticket.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>5.2. It is recommended that passengers arrive at the airport at least 3 hours before international flights and 2 hours before domestic flights.
            </p>
         </div>

         <h4 className='section__subtitle'>6. Baggage</h4>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>6.1. Baggage allowances and restrictions vary by airline. Passengers are responsible for complying with the airline's baggage policies.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>6.2. Additional fees may apply for excess or overweight baggage.</p>
         </div>
         
         <h4 className='section__subtitle'>7. Special Requests</h4>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>7.1. Special requests (e.g., meal preferences, seating arrangements) are not guaranteed and are subject to availability and the airline's discretion.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>7.2. Passengers with special needs should notify us at the time of booking to make necessary arrangements with the airline.
            </p>
         </div>

         <h4 className='section__subtitle'>8. Liability and Disclaimer </h4>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>8.1. We act as an intermediary between passengers and airlines. We are not liable for any acts, omissions, or errors of the airline or any third party.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>8.2. We are not responsible for any loss, damage, or injury resulting from flight delays, cancellations, or other disruptions.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>8.3. Passengers are encouraged to purchase travel insurance to cover potential risks and unforeseen circumstances.
            </p>
         </div>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>8.4. We do not exclude or limit our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded under English law.
            </p>
         </div>

         <h4 className='section__subtitle'>9. Governing Law</h4>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>9.1. These terms and conditions are governed by and construed in accordance with the laws of England and Wales.
            </p>
         </div> 
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>9.2. Any disputes arising from these terms and conditions shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
         </div> 

         <h4 className='section__subtitle'>10. Privacy Policy</h4>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>10.1. By booking a flight through our website, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.
            </p>
         </div> 
         
         <h4 className='section__subtitle'>11. Contact Information</h4>
         <div className='about__section-item d-flex align-items-center'>
            <p className='section__description d-flex align-items-center gap-2'>
            <i class="ri-checkbox-circle-line"></i>11.1. For any questions or concerns regarding these terms and conditions, please contact our customer service team.
            </p>
         </div> 
         
         
         




    </div>
</Col>
</Row>
</Container>
</section>
}

export default TermsConditionSection