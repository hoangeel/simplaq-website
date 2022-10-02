import React from 'react'
import "./index.scss"
import {Col, Container, Row} from 'react-bootstrap';


export default function Easy() {

  return (
    <Container fluid  className="EasyHome" >
			<Row className='RowEasy'>
        <Col lg={6}>
          <div className='imgEasy'>
            <div className='cardEasy'></div>
            <div className='ReebokStore'></div>
          </div>
        </Col>
        <Col lg={6}>
          <div className='contentEasy'>
            <div className='flexContentEasy'>
              <h1 className='titleEasy'>Easy and convenient management <span className='spanTitle'>of your shopping mall</span></h1>
              <p className='textEasy'>
                Simplaq is a feature-rich mall management and retail analytics software solution that keeps all your information and communications in one, secure location.
              </p>
              <p className='textEasy Improve'>
              Improve operational efficiency, increase sales, optimize marketing and proactively manage all your stores from one location
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
