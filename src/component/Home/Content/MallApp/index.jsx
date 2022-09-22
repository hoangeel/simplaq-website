import React from 'react'
import "./index.scss"
import {Card, Container, Button} from 'react-bootstrap';




export default function MallApp() {
  return (
    <Container fluid  className="MallApp" >
      <div className='titleMallApp'><h1 className='flexTitleMallApp'>With Mall app it will be <span className='spanMallApp'>easy for the customers</span></h1></div>
			<div className='flexMallApp'>
        <div className='map'>
          <Card className='flexMap'>
            <div className='imgMap'></div>
            <Card.Title className='CardTitleMap'>Map navigation</Card.Title>
            <Card.Text className='CardTextMap'>Find your favorite places and boutiques quickly and easily</Card.Text>
          </Card>
        </div>
        <div className='map Earn'>
          <Card className='flexMap'>
            <div className='imgEarn'/>
            <Card.Title className='CardTitleMap'>Earn points for every purchase</Card.Title>
            <Card.Text className='CardTextMap'>Turn your points into rewards of your choice!</Card.Text>
          </Card>
        </div>
        <div className='map Earn Quick'>
          <Card className='flexMap'>
            <div className='imgQuick'/>
            <Card.Title className='CardTitleMap'>Quick Pay for Parking</Card.Title>
            <Card.Text className='CardTextMap'>Now there is no need to look for available places, just book it with the app in one click</Card.Text>
          </Card>
        </div>
      </div>
      <div className='buttonMallApp'>
        <Button className='TalkMallApp'>Let’s Talk</Button>
      </div>
    </Container>
  )
}
