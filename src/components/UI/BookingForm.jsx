import React from 'react'
import '../../styles/booking-form.css'
import { Form, FormGroup } from 'reactstrap'

const BookingForm = () => {

    const submitHandler = event => {
        event.preventDefault();
    }


  return <Form onSubmit={submitHandler}>
    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type='text' placeholder='First Name' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
        <input type='text' placeholder='Second Name' />
    </FormGroup>

    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type='email' placeholder='Email' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
        <input type='number' placeholder='Phone Number' />
    </FormGroup>

    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type='text' placeholder='From Address' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
        <input type='text' placeholder='To Address' />
    </FormGroup>

    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <select name='' id=''>
            <option value='1 Person'>1 Person</option>
            <option value='2 Person'>2 Person</option>
            <option value='3 Person'>3 Person</option>
            <option value='4 Person'>4 Person</option>
            <option value='5+ Person'>5+ Person</option>
        </select>
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
    <select name='' id=''>
            <option value='1 luggage'>1 luggage</option>
            <option value='2 luggage'>2 luggage</option>
            <option value='3 luggage'>3 luggage</option>
            <option value='4 luggage'>4 luggage</option>
            <option value='5+ luggage'>5+ luggage</option>
        </select>
    </FormGroup>

    <FormGroup className='booking__form d-inline-block me-4 mb-4'>
        <input type='date' placeholder='Journey date' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
        <input type='time' placeholder='Journey Time' className='time__picker' />
    </FormGroup>

    <FormGroup>
        <textarea rows={5} type='textarea' className='textarea' placeholder='write'></textarea>
    </FormGroup>

  </Form>
}

export default BookingForm