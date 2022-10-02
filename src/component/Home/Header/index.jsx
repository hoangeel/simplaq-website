import React from 'react'
import "./index.scss"
import {Button, Container, Dropdown, Nav,DropdownButton, ButtonGroup, Stack } from 'react-bootstrap';


import Logo from "assets/img/Logo.png"


export default function HeaderHome() {
    

  return (
			<Container className='headerHome' fluid>
				<Stack direction="horizontal"  className='menu'>
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
					<div className="imgLogo"><img src={Logo} alt="" /></div>
					<Nav
						className="navHeader"
						activeKey="/home"
						onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
					>
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
							<Nav.Link className='menuLink Opportunities ms-auto' eventKey="link-3">Opportunities</Nav.Link>
						</Nav.Item>
						<Nav.Item className='menuItem'> 
							<Nav.Link className='menuLink Opportunities ms-auto' eventKey="link-4">Contact</Nav.Link>
						</Nav.Item>
					</Nav>
					<Button className='Get ms-auto'>Get a demo</Button>
					<Button className='Talk'>Let’s Talk</Button>
				</Stack>
			</Container>
  )
}
