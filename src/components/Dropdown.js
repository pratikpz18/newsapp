import React, { useEffect, useState } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import categories from './Categories';

const Dropdown = () => {
    
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/Home">News App</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ml-auto " >
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                    {categories.map((text,index) => (
                        <NavDropdown.Item key={index} className="dark">
                            {text}
                        </NavDropdown.Item>
                    ))}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Dropdown;