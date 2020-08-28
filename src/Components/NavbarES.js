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


class NavbarES extends Component {
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
          <MDBNavLink to="/es"><img src='Assets/Saints_T_White.png' fluid/></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse1" isOpen={this.state.isOpen} navbar>
         
          <MDBNavbarNav right>   
            <MDBNavItem>
              {this.state.isOpen ? 
              <MDBNavLink to="/Comprar" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Comprar Ahora</strong></MDBNavLink>
              :
              <MDBNavLink to="/Comprar" ><strong className="m-3">Comprar Ahora</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
              {this.state.isOpen ? 
              <MDBNavLink to="/Sabores" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Sabores</strong></MDBNavLink>
              :
              <MDBNavLink to="/Sabores" ><strong className="m-3">Sabores</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
            { this.state.isOpen ?
              <MDBNavLink to="/Grandeza" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">¿Por que es increible?</strong></MDBNavLink>
              :
              <MDBNavLink to="/Grandeza" ><strong className="m-3">¿Por qué es increíble?</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
              {this.state.isOpen ?
              <MDBNavLink to="/Preguntas" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Preguntas Frecuentes</strong></MDBNavLink>
              :
              <MDBNavLink to="/Preguntas" ><strong className="m-3">Preguntas Frecuentes</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
            {this.state.isOpen ?
              <MDBNavLink to="/Contacto" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Contacto</strong></MDBNavLink>
              :
              <MDBNavLink to="/Contacto" ><strong className="m-3">Contacto</strong></MDBNavLink>}
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

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle caret color="black" className="p-2 white-text">
                  <strong className="font-weight-bold">ESPAÑOL</strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="black p-0 m-0">
                  <MDBDropdownItem href="https://saintseltzer.com/" className="white-text font-weight-bold">ENGLISH</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

          </MDBNavbarNav>
        
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarES;