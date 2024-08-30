import React,{useState} from 'react'
import '../../styles/booking-form.css'
import { Form, FormGroup } from 'reactstrap'
import Swal from 'sweetalert2'

const BookingForm = ({flightDestination, flightFare}) => {

    // const submitHandler = event => {
    //     event.preventDefault();
    // }
    
    const [showReturn, setshowReturn] = useState(true);

    const handleRadioChange = (event) =>{
        setshowReturn(event.target.value === 'show')
    }


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
                title: "Thanks For Submitting Your Inquiry ",
                text: "One Of Our Agent will contact you soon or You Can Call Us 0203 376 5552",
                icon: "success"
              });
        }
      };



  return <Form onSubmit={onSubmit}>

    <FormGroup>
    {/* Hidden input fields for email data  */}
    <input value={flightDestination + ' with Price $' + flightFare} hidden name='Query Select from given fare and destination: '/>
    <label>One Way &nbsp;&nbsp;  </label>
    <input type='radio' id="hide" name="toggleInput" value="hide" onChange={handleRadioChange} />
        
    <label>&nbsp;&nbsp;Return &nbsp;&nbsp;  </label>
    <input type='radio' id="show" name="toggleInput" value="show" onChange={handleRadioChange} defaultChecked />
    </FormGroup>
    
    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type='text' placeholder='Flying From' name='Flying_From' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
        <input type='text' placeholder='Flying To' name='Flying_To' />
    </FormGroup>

    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type='date' placeholder='Departure Date' name='Departure_Date' />
    </FormGroup>

    <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
    {showReturn && (
        <input type='date' placeholder='Return Date' name='Return_Date'/>
    )}
    </FormGroup>

    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type='text' placeholder='Full Name' name='Full_name' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
        <input type='number' placeholder='Phone Number' name='Phone Number' />
    </FormGroup>

    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type='email' placeholder='Email' name='Email' />
    </FormGroup>
    
{/* 
    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type='text' placeholder='From Address' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
        <input type='text' placeholder='To Address' />
    </FormGroup> */}

    <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
        <select name='No_Person' id=''>
            <option value='1 Person'>1 Person</option>
            <option value='2 Person'>2 Person</option>
            <option value='3 Person'>3 Person</option>
            <option value='4 Person'>4 Person</option>
            <option value='5+ Person'>5+ Person</option>
        </select>
    </FormGroup>
    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
    <select name='Seat_Class' id=''>
            <option value='Econmy'>Economy</option>
            <option value='Business'>Business</option>
        </select>
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4 payment text-end mt-1'>
        {/* <div className='payment text-end mt-5'> */}
            <button>Book Now</button>
        {/* </div> */}
    </FormGroup>

    {/* <FormGroup>
        <textarea rows={5} type='textarea' className='textarea' placeholder='write'></textarea>
    </FormGroup> */}
    <span className='section__subtitle' >Please Note:</span><p className='section__description'> Fares and seats are not guaranteed and subject to availability. If the requested fare will not be available then we will offer you the best available alternate.
    </p>
  </Form>
}

export default BookingForm