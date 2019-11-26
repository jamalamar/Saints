import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


function NavBar (props) {

  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
          <Navbar.Brand style={style.brand} as={Link} to='/' >
            <img src='/Assets/SaintsTitle.png' style={style.logo}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" style={style.navItems}>
              <Nav.Link as={Link} to='/OurStory' style={style.link}>Our Story</Nav.Link>
              <Nav.Link as={Link} to="/FAQs" style={style.link}>FAQs</Nav.Link>
              <Nav.Link as={Link} to='/Contact' style={style.link}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
}


const style = {

  logo: {
    width: '220px'
  },
  navItems: {
    letterSpacing: '0.1em',
    fontWeight: '602',
  },
  link: {
    margin: '0em 0em 0em 1em'
  }
}


export default NavBar;