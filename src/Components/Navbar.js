import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
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
        MDBIcon 
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
    <Router>
      <MDBNavbar color="white" light scrolling transparent expand="md" fixed="top">
        <MDBNavbarBrand>
          <strong className="dark-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler color="dark" onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse1" isOpen={this.state.isOpen} navbar>
         
          <MDBNavbarNav left>   
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/AboutUs">About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/FAQs">FAQ's</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Contact">Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="instagram" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="facebook" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navbar;