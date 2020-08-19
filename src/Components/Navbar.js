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
      <MDBNavbar color="black" dark scrolling transparent expand="md" fixed="top">
        <MDBNavbarBrand className="waves-effect waves-light">
          <MDBNavLink to="/"><img src='Assets/Saints_T_WHITE.png' fluid/></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler color="dark" onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse1" isOpen={this.state.isOpen} navbar>
         
          <MDBNavbarNav left>   
            <MDBNavItem>
              {this.state.isOpen ? 
              <MDBNavLink to="/" onClick={this.toggleCollapse}><strong className="m-2">Inicio</strong></MDBNavLink>
              :
              <MDBNavLink to="/" ><strong className="m-2">Inicio</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
            { this.state.isOpen ?
              <MDBNavLink to="/AboutUs" onClick={this.toggleCollapse}><strong className="m-2">¿Quienes Somos?</strong></MDBNavLink>
              :
              <MDBNavLink to="/AboutUs" ><strong className="m-2">¿Quienes Somos?</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
              {this.state.isOpen ?
              <MDBNavLink to="/FAQs" onClick={this.toggleCollapse}><strong className="m-2">FAQ's</strong></MDBNavLink>
              :
              <MDBNavLink to="/FAQs" ><strong className="m-2">FAQ's</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
            {this.state.isOpen ?
              <MDBNavLink to="/Contact" onClick={this.toggleCollapse}><strong className="m-2">Contacto</strong></MDBNavLink>
              :
              <MDBNavLink to="/Contact" ><strong className="m-2">Contacto</strong></MDBNavLink>}
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a href="https://instagram.com/saintseltzer/" target="__blank">
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