import React, { useEffect, useState } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import categories from './Categories';

const Dropdown = ({setCategory}) => {

    return(
        <Navbar expand="lg" className="Navbar">
            <Navbar.Brand href="/NewsContainer" className="brand">News App</Navbar.Brand>
                <Nav className="Nav" >
                    <NavDropdown title="Categories" id="basic-nav-dropdown" className="NavDropdown">
                    {categories.map((text,index) => (
                        <NavDropdown.Item key={index} className="Dropdown" onClick={()=>setCategory(text)}>
                            {text}
                        </NavDropdown.Item>
                    ))}
                    </NavDropdown>
                </Nav>
        </Navbar>
    )
}

export default Dropdown;