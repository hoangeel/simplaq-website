import React from 'react'
import "./index.scss"
import {Button, Container, Dropdown, Nav,DropdownButton } from 'react-bootstrap';


import Logo from "assets/img/Logo.png"


export default function HeaderHome() {
    

  return (
			<Container className='headerHome' fluid>
				<Nav
					className="navHeader"
					activeKey="/home"
					onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
				>
					<Dropdown>
						<Dropdown.Toggle className=' menus' variant="success" id="dropdown-basic">
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item >Overview</Dropdown.Item>
							<Dropdown.Item >
								<Dropdown>
									<Dropdown.Toggle className='menuLink' variant="success" id="dropdown-basic">
										Features
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item >Benefits</Dropdown.Item>
							<Dropdown.Item >Opportunities</Dropdown.Item>
							<Dropdown.Item >Contact</Dropdown.Item>
							<Dropdown.Item >Get a demo</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

						<Nav.Item className="imgLogo">
							<div><img src={Logo} alt="" /></div>
						</Nav.Item>
						<div className='menu'>
							<Nav.Item className='menuItem'>
								<Nav.Link className='menuLink Overview' eventKey="link-0">Overview</Nav.Link>
							</Nav.Item>
							<Nav.Item className='menuItem'>
								<Dropdown>
									<Dropdown.Toggle className='menuLink' variant="success" id="dropdown-basic">
										Features
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Nav.Item>
							<Nav.Item className='menuItem'>
								<Nav.Link className='menuLink Benefits' eventKey="link-2">Benefits</Nav.Link>
							</Nav.Item>
							<Nav.Item className='menuItem'> 
								<Nav.Link className='menuLink Opportunities' eventKey="link-3">Opportunities</Nav.Link>
							</Nav.Item>
							<Nav.Item className='menuItem'>
								<Nav.Link className='menuLink Contact' eventKey="link-4">Contact</Nav.Link>
							</Nav.Item>
							<Nav.Item className='menuItem'>
								<Nav.Link className='Get' eventKey="link-4">Get a demo</Nav.Link>
							</Nav.Item>
							<Nav.Item className='menuItem'>
								<Button className='Talk'>Let’s Talk</Button>
							</Nav.Item>
						</div>
				</Nav>
			</Container>
  )
}
