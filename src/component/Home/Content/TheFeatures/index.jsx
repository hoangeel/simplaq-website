import React from 'react'
import "./index.scss"
import {Container, Col, Row} from 'react-bootstrap';



export default function TheFeatures() {
 const list = 
  [
    "Mobile technology is easy to use",
    "Staying connected with your customers is easy",
    "Empowered customers, employees and merchants",
    "Saved costs and elevated ROI",

  ]
  return (
    <Container fluid  className="TheFeaturesHome" >
			<Row className='rowTheFeatures'>
        <Col lg={6}>
          <div className='contentTheFeatures'>
            <div className='flexContentTheFeatures'>
              <h1 className='titleTheFeatures'>The features of the portal are <span className='spanTheFeatures'>adapted to the user as much as possible</span></h1>
              {list.map((index) => {
                return(
                  <div className='listTheFeatures' key={index}>
                    <div className='iconList'></div>
                    <div className='textList'>{index}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className='imgTheFeatures'>
            <div className='CardTheFeatures'></div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
