import React from 'react'
import "./index.scss"
import {Container} from 'react-bootstrap';


import HeaderHome from 'component/Home/Header';
import Section from 'component/Home/Section';
import Easy from 'component/Home/Content/Easy';
import OurSolutions from 'component/Home/Content/OurSolutions';
import TheFeatures from 'component/Home/Content/TheFeatures';
import OurCustomersSays from 'component/Home/Content/OurCustomersSays';
import MallApp from 'component/Home/Content/MallApp';
import Book from 'component/Home/Content/Book';
import FooterHome from 'component/Home/Footer';


export default function Home() {
    

  return (
    <>
      <Container fluid  className="home" >
        <div className='flexHome'>
          <HeaderHome/>
          <Section/>
          <Easy/>
          <OurSolutions/>
          <TheFeatures/>
          <OurCustomersSays/>
          <MallApp/>
        </div>
      </Container>
      <Container fluid className='home colorBook'>
        <div  className='flexColorBook'>
          <Book/>
        </div>
      </Container>
      <Container fluid className='home colorFooter'>
        <div  className='flexColorBook'>
          <FooterHome/>
        </div>
      </Container>
    </>
  )
}
