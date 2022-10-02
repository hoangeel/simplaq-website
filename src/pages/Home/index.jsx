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
      <Container  className="home" >
        <HeaderHome/>
        <Section/>
        <Easy/>
        <OurSolutions/>
        <TheFeatures/>
        <OurCustomersSays/>
        <MallApp/>
      </Container>
      <div className=' colorBook'>
          <Book/>
      </div>
      <div className=' colorFooter'>
          <FooterHome/>
      </div>
    </>
  )
}
