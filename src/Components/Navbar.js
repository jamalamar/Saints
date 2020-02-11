import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { 
        MDBNavbar, 
        MDBNavbarBrand, 
        MDBNavbarNav, 
        MDBNavItem, 
        MDBNavLink, 
        MDBNavbarToggler, 
        MDBCollapse, 
        MDBDropdown,
        MDBDropdownToggle, 
        MDBDropdownMenu, 
        MDBDropdownItem, 
        MDBIcon,
        MDBBtn
      } from "mdbreact";


class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="white" light scrolling transparent expand="md" fixed="top">
        <MDBNavbarBrand>
          <strong className="dark-text">SAINTS</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler color="dark" onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse1" isOpen={this.state.isOpen} navbar>
         
          <MDBNavbarNav left>   
            <MDBNavItem active>
              <MDBNavLink to="/"><strong className="m-2">Home</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/AboutUs"><strong className="m-2">About Us</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/FAQs"><strong className="m-2">FAQ's</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Contact"><strong className="m-2">Contact</strong></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a href="https://instagram.com/jamalamar/" target="__blank">
                <MDBNavLink disabled className="waves-effect waves-light" to='#'>
                  <MDBIcon fab icon="instagram" size="2x"/>
                </MDBNavLink>
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a href="https://fb.me/SaintsHardSeltzer" target="__blank">
                <MDBNavLink disabled className="waves-effect waves-dark" to="#">
                  <MDBIcon fab icon="facebook" size="2x"/>
                </MDBNavLink>
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;