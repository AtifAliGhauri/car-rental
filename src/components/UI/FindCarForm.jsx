import React,{useState}from 'react'
import Swal from 'sweetalert2'
import '../../styles/find-car-form.css';
import {Form, FormGroup} from 'reactstrap';
import airportData from '../../assets/data/airportsData'


const FindCarForm = () => {

     // Sample data for the dropdown
//   const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];



  const [value, setValue] = useState('');
  


  //////////////////////////////////////////

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




  return <Form className='form' onSubmit={onSubmit} >

            <label>One Way &nbsp;&nbsp;  </label>
                <input type='radio' id="hide" name="toggleInput" value="hide" onChange={handleRadioChange} />
        
            
            <label>&nbsp;&nbsp;Return &nbsp;&nbsp;  </label>
                <input type='radio' id="show" name="toggleInput" value="show" onChange={handleRadioChange} defaultChecked />
            
        <div className='d-flex align-items-center justify-content-between flex-wrap'>

            <FormGroup className='form__group'>
            <label>Flying From</label>
                <input list='airports' placeholder='From ' 
                    name='Flying_From' onChange={(e)=>setValue(e.target.value)} 
                    required />
                 <datalist id='airports' className='mb-2'>
                    {airportData.map((airport, index) => (
                    <option key={index} value={airport} />
                    ))}
                 </datalist>
    
            </FormGroup>

            <FormGroup className='form__group'>
            <label>Flying To</label>
                <input list='airports' placeholder='To ' 
                name='Flying_To' onChange={(e)=>setValue(e.target.value)}  required />
                <datalist id='airports' className='mb-2'>
                    {airportData.map((airport, index) => (
                    <option key={index} value={airport} />
                    ))}
                 </datalist>
            </FormGroup>

            <FormGroup className='form__group'>
                <label>Departure Date</label>
                <input type='date' name='Departure_Date' required />
            </FormGroup>

            
            <FormGroup className='form__group'>
            {showReturn && (
                <div>
                <label>Return Date</label>
                <input type='date' name='Return_Date'  />
                </div>
            )}
            </FormGroup>
            

            <FormGroup className='form__group'>
            <label>Full Name</label>
                <input type='text' placeholder='Name ' name='Full_Name' required />
            </FormGroup>

            <FormGroup className='form__group'>
            <label>Phone no</label>
                <input type='number' placeholder='Phone no ' name='Phone_no' required />
            </FormGroup>

            <FormGroup className='form__group'>
            <label>Email</label>
                <input type='email' placeholder='Email ' name='Email' required />
            </FormGroup>

            <FormGroup className='select__group'>
                <label>No, Passengers</label>
                <select name='No_Passenger'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </select>
            </FormGroup>

            <FormGroup className='select__group'>
                <label>Seat Class</label>
                <select name='Seat_Class'>
                    <option value='Economy'>Economy Class</option>
                    <option value='Premium'>Premium Class</option>
                    <option value='Business'>Business Class</option>
                    <option value='First Class'>First Class</option>
                </select>
            </FormGroup>

            <FormGroup className='select__group select__group-btn'>
                <button className='btn find__car-btn'>Search</button>
            </FormGroup>
        </div>
  </Form>
  
  
}

export default FindCarForm