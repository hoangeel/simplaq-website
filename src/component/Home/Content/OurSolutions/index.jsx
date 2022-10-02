import React from 'react'
import "./index.scss"
import {Button, Card, Container, Row, Col} from 'react-bootstrap';

import Device from "assets/img/Device1.png" 
import Nike from "assets/img/Cards-Receipts.png"
import HM from "assets/img/Cards-Receipts (1).png" 


export default function OurSolutions() {

  return (
    <Container fluid  className="OurSolutions" >
      <h1 className='titleOurSolutions'>Our <span className='titleSolutions'>Solutions</span></h1>
      <div className='textOurSolutions'>
        <p className='Simplaq'>Simplaq helps your to collaborate with your tenants easily with our built in functionality.</p>
      </div>

			<Row className='rowOurSolutions justify-content-center'>
        <Col lg={6}>
          <Card className='leftOurSolutions'>
            <Card.Img src={Device} className="imgLeftOur"/>
            <div className='groupTextOur'>
              <h2 className='Collaborate'>Collaborate with your tenants over <span className='digital'>digital platform</span></h2>
              <Button className='buttonGet'>Get a demo</Button>
            </div>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className='leftOurSolutions rightOurSolutions'>
            <div className='groupCardImg'>
              <div className="imgNike"></div>
              <div className="imgHM"></div>
            </div>
            <div className='groupTextOur'>
              <h2 className='Collaborate Mobile'><span className='digital'>Mobile app</span> with mall loyalty program</h2>
              <Button className='buttonGet'>Try this</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
