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
  isOpen: false,
};


toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen })
}

render() {
  return (
      <MDBNavbar color="black" dark scrolling transparent={ this.state.isOpen ? false : true} expand="xl" fixed="top">
        <MDBNavbarBrand className="waves-effect waves-light">
          <MDBNavLink to="/"><img src='Assets/Saints_T_White.png' fluid/></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse1" isOpen={this.state.isOpen} navbar>
         
          <MDBNavbarNav right>   
            <MDBNavItem>
              {this.state.isOpen ? 
              <MDBNavLink to="/BuyNow" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Comprar Ahora</strong></MDBNavLink>
              :
              <MDBNavLink to="/BuyNow" ><strong className="m-3">Comprar Ahora</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
              {this.state.isOpen ? 
              <MDBNavLink to="/AboutUs" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Sabores</strong></MDBNavLink>
              :
              <MDBNavLink to="/AboutUs" ><strong className="m-3">Sabores</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
            { this.state.isOpen ?
              <MDBNavLink to="/AboutUs" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">¿Por que es increible?</strong></MDBNavLink>
              :
              <MDBNavLink to="/AboutUs" ><strong className="m-3">¿Por qué es increíble?</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
              {this.state.isOpen ?
              <MDBNavLink to="/FAQs" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Preguntas Frecuentes</strong></MDBNavLink>
              :
              <MDBNavLink to="/FAQs" ><strong className="m-3">Preguntas Frecuentes</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
            {this.state.isOpen ?
              <MDBNavLink to="/Contact" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Contacto</strong></MDBNavLink>
              :
              <MDBNavLink to="/Contact" ><strong className="m-3">Contacto</strong></MDBNavLink>}
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