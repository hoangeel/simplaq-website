import React from 'react'
import "./index.scss"
import {Button, ButtonGroup, Col, Container, InputGroup, Row} from 'react-bootstrap';


import Mess from "assets/img/Star.png"
import Mess1 from "assets/img/Star.png"
import Mess2 from "assets/img/Star.png"
import Mess3 from "assets/img/Star.png"
import Mess4 from "assets/img/Star.png"
import ImgSection from "assets/img/RightSide.png"

export default function Section() {
    

  return (
    <Container fluid  className="sectionHome" >
			<Row className='RowSection'>
        <Col lg={6}>
          <div className='contentSection'>
            <div className='shoppingMall'>
              <h1 className='titleSection'>Shopping Mall <span className='spanTitle'>Digitalization Platform</span></h1>
              <p className='textSection'>
                Simplaq will transform your mall into omnichannel hub. 
                Know your customers better, 
                do your marketing smarter and manage the all Mall digital channels.
              </p>
              <ButtonGroup className="buttonGroupSection">
                <Button className="buttonGet">Get a demo</Button>
                <Button className="buttonSee">See our features</Button>
              </ButtonGroup>
            </div>
            <div className='review'>
              <InputGroup className="groupMess">
                <div className='mess'><img src={Mess} alt="" /></div>
                <div className='mess1'><img src={Mess1} alt="" /></div>
                <div className='mess1'><img src={Mess2} alt="" /></div>
                <div className='mess1'><img src={Mess3} alt="" /></div>
                <div className='mess1'><img src={Mess4} alt="" /></div>
              </InputGroup>
              <div className='textReview'>Rated 4.9/5. <span className='spanTrusted'>Trusted by 100,000 customers</span> </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className='imgSection'>
            <img src={ImgSection} alt="ImgSection" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
