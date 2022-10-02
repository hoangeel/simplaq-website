import React from 'react'
import "./index.scss"
import {Button, Container, Form,InputGroup } from 'react-bootstrap';


export default function Book() {
    

  return (
			<Container className='book'>
				<div className='flexBook'>
          <div className='BookAFreeDemo'>
            <h1 className='titleBook'>Book a <span className='spanTitleBook'>Free Demo</span></h1>
            <p className='textBook'>Discover how our shopping centre management and retail analytics software can transform your business and drive revenue.</p>
            <div className='formEmailPhone'>
              <div className='groupEmail'>
                <div className='iconEmail'></div>
                <div className='contentEmail'>
                  <h5 className='titleEmail'>Email</h5>
                  <p className='textEmail'>hello@simplaq.com</p>
                </div>
              </div>
              <div className='groupEmail groupPhone'>
                <div className='iconEmail iconPhone'></div>
                <div className='contentEmail'>
                  <h5 className='titleEmail'>Phone number</h5>
                  <p className='textEmail'>Call the shop</p>
                </div>
              </div>
            </div>
          </div>
          <div className='formBook'>
            <div className='nameEmail'>
              <InputGroup className="name">
                <InputGroup.Text className="iconName"></InputGroup.Text>
                <Form.Control
                  placeholder="Full name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className='inputName'
                />
              </InputGroup>
              <InputGroup className="name email">
                <InputGroup.Text className="iconName iconEmail"></InputGroup.Text>
                <Form.Control
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className='inputName'
                />
              </InputGroup>
            </div>
            <div className='nameEmail'>
              <InputGroup className="name">
                <InputGroup.Text className="iconName iconCompany"></InputGroup.Text>
                <Form.Control
                  placeholder="Company name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className='inputName'
                />
              </InputGroup>
              <InputGroup className="name email">
                <InputGroup.Text className="iconName iconPhone"></InputGroup.Text>
                <Form.Control
                  placeholder="Phone number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className='inputName'
                />
              </InputGroup>
            </div>
            <InputGroup className="Message">
              <InputGroup.Text className="iconMessage"></InputGroup.Text>
              <Form.Control
                placeholder="Message"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className='inputMessage'
                as="textarea"
                stype={{height:"134px"}}
              />
            </InputGroup>

            <InputGroup className='groupCheckbox'>
              <Form.Check 
                type="checkbox"
                label="I accept"
                className='checkbox'
              />
              <span className='spanTextChexk'> Privacy policy</span>
            </InputGroup>
            <InputGroup className='groupCheckbox'>
              <Form.Check 
                type="checkbox"
                label="I accept"
                className='checkbox'
              />
              <span className='spanTextChexk'>Terms & Conditions</span>
            </InputGroup>
            <InputGroup className='groupCheckbox'>
              <Form.Check 
                type="checkbox"
                label="I want to receive commercial offers from mall & stores"
                className='checkbox'
              />
            </InputGroup>
            <Button className='buttonBookNow'>Book Now</Button>
          </div>
        </div>
			</Container>
  )
}
