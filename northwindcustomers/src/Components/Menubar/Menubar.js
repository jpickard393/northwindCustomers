
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menubarStyle.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (

        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Example</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem><Link to="/">Home</Link></NavItem>
                        <NavItem><Link to="/about">About</Link></NavItem>
                        <NavItem><Link to="/customerslist">Customers</Link></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );

}
export default Menubar;