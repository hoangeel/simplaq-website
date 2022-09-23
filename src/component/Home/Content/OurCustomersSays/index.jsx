import React from 'react'
import "./index.scss"
import {Card,  Container} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Mess from "assets/img/Star.png"
import Icon from "assets/img/Vector (2).png"



export default function OurCustomersSays() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <Container fluid  className="OurCustomersSays" >
      <h1 className='titleOurCustomers'>Our <span className='spanOurCustomers'>Customers Says</span></h1>

      <Slider className='slider' {...settings}>
        <div className='slider-1' >
          <div className='flexOurCustomers'>
            <div className='leftOurCustomers'>
              <Card className='flexleftOurCustomers'>
                <Card.Title className='CardTitleOur'>Provided invaluable expertise and support for our digital and marketing technology projects </Card.Title>
                <Card.Text className='CardTextOur'>I found Simplaq to be a flexible and innovative multi-platform tool that assists me in my day to day task as a centre manager. The ability of having it work seamlessly on my desktop as well as my mobile device is invaluable and allows me a great flexibility and a single point of data retrieval no matter where I am (my desk or a remote meeting). </Card.Text>
                <div className='footerOurCustomers'>
                  <div className='imgMess'><img src={Mess} alt="" /></div>
                  <div className='groupOurCustomersSays'>
                    <div className='name'>Nolan Carder</div>
                    <div className='position'>Shopping Center Manager</div>
                  </div>
                  <div className='groupStar ms-auto'>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                  </div>
                </div>
              </Card>
            </div>
            <div className='leftOurCustomers rightOurCustomers' >
              <Card className='flexleftOurCustomers'>
                <Card.Title className='CardTitleOur'>240,000 centre visitors enrolled in loyalty, 15% of annual unique visitors, and 50% above goal </Card.Title>
                <Card.Text className='CardTextOur'>I found Simplaq to be a flexible and innovative multi-platform tool that assists me in my day to day task as a centre manager. The ability of having it work seamlessly on my desktop as well as my mobile device is invaluable and allows me a great flexibility and a single point of data retrieval no matter where I am (my desk or a remote meeting). </Card.Text>
                <div className='footerOurCustomers'>
                  <div className='imgMess'><img src={Mess} alt="" /></div>
                  <div className='groupOurCustomersSays'>
                    <div className='name'>Nolan Carder</div>
                    <div className='position'>Regional director marketing</div>
                  </div>
                  <div className='groupStar ms-auto'>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className='slider-2'>
          <div className='flexOurCustomers'>
            <div className='leftOurCustomers rightOurCustomers' >
              <Card className='flexleftOurCustomers'>
                <Card.Title className='CardTitleOur'>240,000 centre visitors enrolled in loyalty, 15% of annual unique visitors, and 50% above goal </Card.Title>
                <Card.Text className='CardTextOur'>I found Simplaq to be a flexible and innovative multi-platform tool that assists me in my day to day task as a centre manager. The ability of having it work seamlessly on my desktop as well as my mobile device is invaluable and allows me a great flexibility and a single point of data retrieval no matter where I am (my desk or a remote meeting). </Card.Text>
                <div className='footerOurCustomers'>
                  <div className='imgMess'><img src={Mess} alt="" /></div>
                  <div className='groupOurCustomersSays'>
                    <div className='name'>Nolan Carder</div>
                    <div className='position'>Regional director marketing</div>
                  </div>
                  <div className='groupStar ms-auto'>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                  </div>
                </div>
              </Card>
            </div>
            <div className='leftOurCustomers marginLeftOur'>
              <Card className='flexleftOurCustomers'>
                <Card.Title className='CardTitleOur'>Provided invaluable expertise and support for our digital and marketing technology projects </Card.Title>
                <Card.Text className='CardTextOur'>I found Simplaq to be a flexible and innovative multi-platform tool that assists me in my day to day task as a centre manager. The ability of having it work seamlessly on my desktop as well as my mobile device is invaluable and allows me a great flexibility and a single point of data retrieval no matter where I am (my desk or a remote meeting). </Card.Text>
                <div className='footerOurCustomers'>
                  <div className='imgMess'><img src={Mess} alt="" /></div>
                  <div className='groupOurCustomersSays'>
                    <div className='name'>Nolan Carder</div>
                    <div className='position'>Shopping Center Manager</div>
                  </div>
                  <div className='groupStar ms-auto'>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                    <div className='star'><img src={Icon} alt="" /></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Slider>
    </Container>
  )
}
