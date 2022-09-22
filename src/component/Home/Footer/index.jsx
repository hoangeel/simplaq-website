import React from 'react'
import "./index.scss"
import {Button, Container, InputGroup, Form, Row, Stack } from 'react-bootstrap';


import Logo from "assets/img/Logo1.png"
import Email from "assets/img/Mail (1).png"


export default function FooterHome() {
    

  return (
			<Container className='footer' fluid>
				<div className='flexFooter'>
          <Stack direction="horizontal"  className='headerFooter'>
            <div className='logo'><img src={Logo} alt="Logo" /></div>
            <Button className='GetADemo'>Get a demo</Button>
            <Button className='let-talk'>Let’s Talk</Button>
          </Stack>
          <div className='contentFooter'>
            <div className='colum-1'>
              <p className='textFooter textBottom'>Overview</p>   
              <p className='textFooter textBottom'>Features</p>
              <p className='textFooter'>Benefits</p>
            </div>
            <div className='colum-2'>
              <div className='colum-2-1'>
                <p className='textFooter textBottom'>Insights</p>
                <p className='textFooter'>Contact</p>
              </div>
              <InputGroup className='colum-2-2'>
                <div className='iconSupport'></div> 
                <div className='textColum-2-2'>Customer <span className='spanSupport'>support</span> and help 24 / 7</div>
              </InputGroup>
            </div>
            <div className='colum-3'>
              <Form className='formFooter'>
                <Form.Label className='textFooter'>Get exclusive offers and weekly updates</Form.Label>
                <InputGroup className="InputGroupFooter">
                  <img className='imgEmail' src={Email} alt="Email" />
                  <Form.Control className='emailFooter' type="email" placeholder="Email" />
                  <Button className='Subscribe'>Subscribe</Button>
                </InputGroup>
              </Form>
              <div className='Follow'>
                <p className='textFooter'>Follow US</p>
                <div className='groupFollow'>
                  <div className='face'></div>
                  <div className='face youtube'></div>
                  <div className='face instagram'></div>
                  <div className='face team'></div>
                </div>
              </div>
            </div>
          </div>

          <Stack direction="horizontal" className='footerFooter'>
            <p className='textFooter'>Simplaq | <span className='spanAll'>All rights reserved. © 2022</span></p>
            <p className='textFooter Privacy'>Privacy & terms</p>
            <p className='textFooter Terms'>Terms of Service</p>
          </Stack>
        </div>
			</Container>
  )
}
